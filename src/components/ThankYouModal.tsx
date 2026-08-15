import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, ShieldCheck, PhoneCall, Clock, Calendar, ArrowRight, Sparkles, X, HeartHandshake } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const ThankYouModal: React.FC<Props> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.5 }
        });
      } catch {
        // Safe fallback if confetti isn't available
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      id="upsell-thank-you-box"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-fade-in"
    >
      <div className="relative w-full max-w-lg bg-[#0c1833] border-2 border-amber-500/50 rounded-sm shadow-2xl overflow-hidden text-slate-100 my-8">
        
        {/* Top Decorative Gradient Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-400 via-emerald-400 to-sky-400" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-sm hover:bg-white/10 transition-colors cursor-pointer z-10"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 sm:p-8 text-center space-y-5">
          
          {/* Success Badge & Icon */}
          <div className="inline-flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold text-[11px] px-3.5 py-1 rounded-full uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span>Oferta Confirmada com Sucesso</span>
          </div>

          <div className="w-16 h-16 bg-emerald-950/60 border border-emerald-500/40 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-xl">
            <CheckCircle2 className="w-9 h-9 text-emerald-400" />
          </div>

          {/* OBRIGADO Title */}
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-serif font-black text-white tracking-wide uppercase">
              MUITO OBRIGADO!
            </h2>
            <p className="text-sky-300 font-semibold text-sm sm:text-base">
              Sua vaga na Consulta Individual foi garantida por R$ 89,90
            </p>
          </div>

          {/* Details Card */}
          <div className="bg-[#060d1d] border border-blue-900/50 rounded-sm p-4 text-left space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-blue-900/40 pb-2">
              <span className="text-slate-400 uppercase tracking-wider text-[10px] font-bold">Item Adicionado</span>
              <span className="text-emerald-400 font-bold font-mono">74% DE DESCONTO</span>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded bg-blue-950/80 border border-blue-600/40 flex items-center justify-center text-sky-400 shrink-0 mt-0.5">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <div className="space-y-0.5">
                <p className="text-white font-bold text-sm">Consulta Individual + Plano VIP</p>
                <p className="text-slate-300 font-light">Nutricionista Luccas Raddatz (CRN-3 78421)</p>
                <p className="text-sky-300 font-semibold">Valor da Oferta: R$ 89,90 à vista</p>
              </div>
            </div>

            <div className="pt-2 border-t border-blue-900/40 space-y-1.5 text-slate-300 font-light text-[11px]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Atendimento 100% individualizado e online (Google Meet / WhatsApp)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Cardápio sob medida no aplicativo com receitas e lista de compras</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Análise profunda de exames de sangue e metabolismo</span>
              </div>
            </div>
          </div>

          {/* Next Steps Instructions */}
          <div className="bg-blue-950/40 border border-blue-500/30 rounded-sm p-4 text-left text-xs space-y-2 text-slate-200">
            <p className="font-bold text-sky-300 uppercase tracking-wider text-[10px]">
              📋 O que acontece agora:
            </p>
            <div className="space-y-1.5 text-[11px] font-light">
              <p>
                <strong className="text-white font-medium">1. E-mail de Confirmação:</strong> Você receberá em instantes os detalhes do pedido da Kiwify na sua caixa de entrada.
              </p>
              <p>
                <strong className="text-white font-medium">2. Agendamento de Horário:</strong> Nossa equipe de suporte entrará em contato pelo seu WhatsApp para definir o melhor dia e horário da sua consulta.
              </p>
              <p>
                <strong className="text-white font-medium">3. Preparação:</strong> Deixe separados seus exames de sangue recentes (se tiver) para a análise.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-2 pt-1">
            <a
              href="https://wa.me/5553999083570?text=Ol%C3%A1%2C%20acabei%20de%20aceitar%20o%20Upsell%20da%20Consulta%20Individual%20com%20o%20Nutricionista%20Luccas%20Raddatz%20por%20R%24%2089%2C90!%20Gostaria%20de%20agendar%20meu%20hor%C3%A1rio."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#27AF60] hover:bg-[#219653] text-white font-bold py-3.5 px-4 rounded-sm shadow-xl uppercase tracking-widest transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer border border-emerald-400/40"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Chamar no WhatsApp (53) 99908-3570</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="w-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white font-medium py-2.5 px-4 rounded-sm border border-white/10 transition-colors text-xs cursor-pointer"
            >
              Fechar Janela de Confirmação
            </button>
          </div>

          {/* Security & Guarantee Note */}
          <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 font-light pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Garantia Incondicional de 7 Dias • Transação Segura</span>
          </div>

        </div>

      </div>
    </div>
  );
};
