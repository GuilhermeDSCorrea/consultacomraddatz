import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { TIME_SLOTS } from '../data/upsellData';
import { PaymentMethod } from '../types';
import { X, Calendar, CreditCard, ShieldCheck, CheckCircle2, QrCode, Lock, ArrowRight, Copy, PhoneCall, UserCheck } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<'schedule' | 'payment' | 'success'>('schedule');
  const [selectedSlot, setSelectedSlot] = useState<string>('s1');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('pix');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [copiedPix, setCopiedPix] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleNextToPayment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Por favor, preencha nome, e-mail e WhatsApp para continuar.');
      return;
    }
    setStep('payment');
  };

  const handleCompletePayment = () => {
    setIsProcessing(true);
    const kiwifyTrigger = document.getElementById('kiwify-upsell-trigger-BqUPN6V');
    if (kiwifyTrigger) {
      kiwifyTrigger.click();
    }
    setTimeout(() => {
      setIsProcessing(false);
      setStep('success');
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }, 1500);
  };

  const slotObj = TIME_SLOTS.find((s) => s.id === selectedSlot) || TIME_SLOTS[0];

  const fakePixCode = '00020126580014BR.GOV.BCB.PIX0136luccas.raddatz.nutri@pix.com.br520400005303986540589.905802BR5922LUCCAS RADDATZ NUTRI6009SAO PAULO62070503***6304E8A2';

  const copyPix = () => {
    navigator.clipboard.writeText(fakePixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto animate-fade-in">
      
      <div className="relative w-full max-w-lg bg-[#0c1833] border border-blue-900/50 rounded-sm shadow-2xl overflow-hidden text-slate-100 my-8">
        
        {/* Header */}
        <div className="bg-[#060d1d] p-4 border-b border-blue-900/40 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-sky-400" />
            <span className="font-bold text-xs uppercase tracking-widest text-white">
              {step === 'success' ? 'Vaga Confirmada com Sucesso!' : 'Checkout Seguro de Consulta (R$ 89,90)'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-sm hover:bg-white/5 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          
          {/* STEP 1: SCHEDULE & CONTACT INFO */}
          {step === 'schedule' && (
            <form onSubmit={handleNextToPayment} className="space-y-5">
              
              <div className="bg-[#070e1e] p-3.5 rounded-sm border border-blue-900/30 flex items-center gap-3">
                <div className="w-12 h-12 rounded-sm bg-blue-950 border border-blue-500/40 flex items-center justify-center text-sky-400 shrink-0">
                  <UserCheck className="w-6 h-6" />
                </div>
                <div className="text-xs space-y-0.5">
                  <p className="font-serif font-bold text-white text-sm">Consulta Individual + Plano VIP</p>
                  <p className="text-slate-300 font-light">Com Nutricionista Luccas Raddatz</p>
                  <p className="text-sky-300 font-bold text-xs">Preço Promocional: R$ 89,90</p>
                </div>
              </div>

              {/* Date / Time Slot Picker */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-sky-400 uppercase tracking-widest flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>1. Escolha o Melhor Horário Inicial para a Consulta</span>
                </label>
                <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-1">
                  {TIME_SLOTS.map((slot) => (
                    <button
                      key={slot.id}
                      type="button"
                      disabled={!slot.available}
                      onClick={() => setSelectedSlot(slot.id)}
                      className={`p-2.5 rounded-sm text-xs border text-left transition-all ${
                        !slot.available
                          ? 'opacity-30 bg-[#070e1e] border-blue-900/20 text-slate-500 cursor-not-allowed'
                          : selectedSlot === slot.id
                          ? 'bg-blue-950/80 border-blue-400 text-white font-bold'
                          : 'bg-[#070e1e] border-blue-900/40 text-slate-300 hover:border-blue-500/50'
                      }`}
                    >
                      <p className="font-medium">{slot.dateStr}</p>
                      <p className="text-[10px] opacity-70 font-light">{slot.timeStr}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* User Details */}
              <div className="space-y-3 pt-2">
                <label className="block text-xs font-bold text-sky-400 uppercase tracking-widest">
                  2. Dados do Paciente para Acesso
                </label>

                <div>
                  <input
                    type="text"
                    required
                    placeholder="Seu Nome Completo"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-[#070e1e] border border-blue-900/40 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Seu Melhor E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#070e1e] border border-blue-900/40 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    required
                    placeholder="WhatsApp para o Acompanhamento (DD + Número)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#070e1e] border border-blue-900/40 rounded-sm px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 rounded-sm shadow-lg uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
              >
                <span>Continuar para Pagamento (R$ 89,90)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </form>
          )}

          {/* STEP 2: PAYMENT METHOD */}
          {step === 'payment' && (
            <div className="space-y-5 animate-fade-in">
              
              <div className="text-xs text-slate-400 border-b border-blue-900/30 pb-3 flex justify-between items-center font-light">
                <div>
                  <p className="font-bold text-white">{fullName}</p>
                  <p>{slotObj.dateStr} às {slotObj.timeStr}</p>
                </div>
                <button
                  onClick={() => setStep('schedule')}
                  className="text-sky-400 underline font-semibold uppercase tracking-wider text-[10px]"
                >
                  Alterar
                </button>
              </div>

              {/* Payment Methods */}
              <div className="space-y-2">
                <label className="block text-xs font-bold text-sky-400 uppercase tracking-widest">
                  Selecione a Forma de Pagamento
                </label>

                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'pix', label: 'PIX (Instantâneo)', icon: QrCode },
                    { id: 'credit_card', label: 'Cartão de Crédito', icon: CreditCard },
                    { id: 'boleto', label: 'Boleto', icon: ShieldCheck }
                  ].map((m) => {
                    const Icon = m.icon;
                    return (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setPaymentMethod(m.id as PaymentMethod)}
                        className={`p-3 rounded-sm border text-center transition-all flex flex-col items-center gap-1 ${
                          paymentMethod === m.id
                            ? 'bg-blue-950/80 border-blue-400 text-white font-bold'
                            : 'bg-[#070e1e] border-blue-900/40 text-slate-400 hover:border-blue-500/50'
                        }`}
                      >
                        <Icon className="w-4 h-4 text-sky-400" />
                        <span className="text-[10px] uppercase tracking-wider leading-tight">{m.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* PIX details */}
              {paymentMethod === 'pix' && (
                <div className="bg-[#070e1e] p-4 rounded-sm border border-blue-900/30 text-center space-y-3">
                  <p className="text-xs text-slate-300 font-light">
                    Escaneie o QR Code ou copie o código abaixo para pagar via PIX no seu banco:
                  </p>
                  <div className="w-32 h-32 bg-white p-2 rounded-sm mx-auto flex items-center justify-center shadow-md">
                    <QrCode className="w-28 h-28 text-slate-900" />
                  </div>

                  <button
                    type="button"
                    onClick={copyPix}
                    className="w-full bg-white/5 hover:bg-white/10 text-sky-300 border border-blue-900/40 text-xs font-bold py-2 px-3 rounded-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedPix ? '✓ CÓDIGO PIX COPIADO!' : 'Copiar Código PIX'}</span>
                  </button>
                </div>
              )}

              {/* Credit Card Details */}
              {paymentMethod === 'credit_card' && (
                <div className="space-y-3 bg-[#070e1e] p-4 rounded-sm border border-blue-900/30 text-xs">
                  <input
                    type="text"
                    placeholder="Número do Cartão"
                    className="w-full bg-[#0c1833] border border-blue-900/40 rounded-sm p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Validade (MM/AA)"
                      className="bg-[#0c1833] border border-blue-900/40 rounded-sm p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="bg-[#0c1833] border border-blue-900/40 rounded-sm p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Nome Impresso no Cartão"
                    className="w-full bg-[#0c1833] border border-blue-900/40 rounded-sm p-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400"
                  />
                </div>
              )}

              {/* Total & Complete Button */}
              <div className="pt-2">
                <button
                  type="button"
                  disabled={isProcessing}
                  onClick={handleCompletePayment}
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 rounded-sm shadow-xl uppercase tracking-widest transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer border border-blue-400/30"
                >
                  {isProcessing ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processando Pagamento Seguro...</span>
                    </div>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-white" />
                      <span>Finalizar Inscrição VIP por R$ 89,90</span>
                    </>
                  )}
                </button>
              </div>

            </div>
          )}

          {/* STEP 3: SUCCESS CONFIRMATION */}
          {step === 'success' && (
            <div className="text-center space-y-4 py-4 animate-fade-in">
              <div className="w-16 h-16 bg-emerald-950/60 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto shadow-xl">
                <CheckCircle2 className="w-8 h-8 text-emerald-400" />
              </div>

              <div className="space-y-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-black text-white uppercase tracking-wide">
                  MUITO OBRIGADO!
                </h3>
                <p className="text-sky-300 font-medium text-xs sm:text-sm">
                  Parabéns, {fullName.split(' ')[0]}! Oferta de Upsell Confirmada com Sucesso.
                </p>
              </div>

              <p className="text-slate-200 text-xs sm:text-sm max-w-sm mx-auto font-light">
                Sua consulta individual com o <strong className="text-sky-300 font-medium">Nutricionista Luccas Raddatz</strong> foi reservada com sucesso para <strong className="text-white font-medium">{slotObj.dateStr} às {slotObj.timeStr}</strong>.
              </p>

              <div className="bg-[#070e1e] p-4 rounded-sm border border-blue-900/30 text-xs text-left space-y-2 text-slate-300 font-light">
                <p className="font-bold text-sky-400 border-b border-blue-900/30 pb-1 uppercase tracking-wider text-[10px]">
                  Próximos Passos Imediatos:
                </p>
                <p>1. Enviamos a confirmação e recibo para <strong className="text-white font-medium">{email}</strong>.</p>
                <p>2. Nossa secretária entrará em contato via WhatsApp no número <strong className="text-white font-medium">{phone}</strong> em alguns minutos.</p>
                <p>3. Prepare seus exames ou dúvidas para apresentar na consulta online.</p>
              </div>

              <a
                href={`https://wa.me/5553999083570?text=Ol%C3%A1%2C%20acabei%20de%20garantir%20minha%20consulta%20com%20o%20Nutricionista%20Luccas%20Raddatz%20por%20R%24%2089%2C90!%20Meu%20nome%20%C3%A9%20${encodeURIComponent(fullName)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3.5 px-4 rounded-sm shadow-lg uppercase tracking-widest transition-all text-xs flex items-center justify-center gap-2 inline-block border border-blue-400/30"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Chamar no WhatsApp para Confirmar</span>
              </a>

            </div>
          )}

        </div>

      </div>

    </div>
  );
};


