import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, ArrowRight, Star, Clock, UserCheck, Award, Sparkles } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
  onDeclineClick: () => void;
}

export const HeroSection: React.FC<Props> = ({ onOpenCheckout, onDeclineClick }) => {
  return (
    <section className="relative overflow-hidden bg-[#060d1d] text-slate-100 pt-10 pb-16 border-b border-blue-900/30">
      
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-[130px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Urgent Top Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-block px-3 py-1 bg-blue-950/60 border border-blue-500/30 text-[11px] uppercase tracking-widest text-sky-400 font-bold rounded-sm">
            Personalize Sua Jornada de 21 Dias • Oferta Exclusiva
          </div>
        </div>

        {/* Main Title & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif leading-tight text-white">
            Acelere seu emagrecimento com uma <span className="italic text-sky-400">estratégia individual.</span>
          </h1>
          
          <p className="text-base sm:text-lg text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
            O Projeto 21 Dias é o motor, mas a consulta individual é o turbo. Garanta uma <strong className="text-white font-medium">Consulta Individual Online</strong> com o <strong className="text-white font-medium">Nutricionista Luccas Raddatz</strong> com 74% de Desconto Especial.
          </p>
        </div>

        {/* Price Contrast Badge */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm">
          <div className="bg-[#0b162e] border border-blue-900/40 px-5 py-2.5 rounded-sm flex items-center gap-3">
            <span className="text-slate-400 line-through text-sm">De R$ 350,00</span>
            <span className="text-[10px] bg-blue-950/80 border border-blue-500/40 text-sky-300 px-2 py-0.5 rounded-sm font-bold uppercase tracking-wider">-74% OFF</span>
          </div>
          <div className="bg-[#0b162e] border border-blue-500/40 px-6 py-2.5 rounded-sm flex items-center gap-3 shadow-lg shadow-blue-950/30">
            <span className="text-sky-400 text-xs uppercase tracking-widest font-bold">Preço Especial:</span>
            <span className="text-white text-3xl font-serif font-bold">R$ 89,90</span>
            <span className="text-slate-300 text-xs font-light">à vista ou 12x R$ 8,98</span>
          </div>
        </div>

        {/* Hero Visual Card / Teaser Box */}
        <div className="mt-10 bg-[#0c1833] border border-blue-900/40 rounded-sm p-6 sm:p-8 shadow-2xl relative">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left Overview Showcase Card (No images) */}
            <div className="md:col-span-5 relative rounded-sm p-6 border border-blue-800/40 shadow-2xl bg-gradient-to-b from-[#0e1e40] to-[#070e1e] space-y-4">
              
              <div className="flex items-center justify-between">
                <div className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-sm flex items-center gap-1 shadow-md">
                  <Zap className="w-3.5 h-3.5 text-white fill-white" />
                  Vaga VIP Online
                </div>
                <span className="text-[11px] font-mono text-sky-400 font-bold">21 DIAS VIP</span>
              </div>

              <div className="space-y-2 pt-2 border-t border-blue-900/40">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-sm bg-blue-950 border border-blue-500/40 flex items-center justify-center text-sky-400 shrink-0">
                    <UserCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-white text-base">Nutr. Luccas Raddatz</h3>
                    <p className="text-[10px] text-sky-400 uppercase tracking-wider font-medium">CRN Ativo • Especialista</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#060d1d]/80 border border-blue-900/40 p-3 rounded-sm space-y-1.5 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-[11px] font-light">Atendimento</span>
                  <span className="font-bold text-white text-[11px]">100% Individual</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-[11px] font-light">Plano Prescrito</span>
                  <span className="font-bold text-sky-400 text-[11px]">Personalizado</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="text-[11px] font-light">Suporte WhatsApp</span>
                  <span className="font-bold text-emerald-400 text-[11px]">Direto e Ilimitado</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-slate-400 uppercase tracking-wider justify-center pt-1">
                <Award className="w-3.5 h-3.5 text-sky-400" />
                <span>+3.800 pacientes transformados</span>
              </div>
            </div>

            {/* Right Highlights & Bullets */}
            <div className="md:col-span-7 space-y-5 text-left">
              
              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex gap-3 items-start">
                  <div className="w-1 h-12 bg-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase text-white tracking-wide">Plano Sob Medida</h4>
                    <p className="text-xs text-slate-300 font-light">Ajustes específicos para sua rotina, metabolismo e preferências.</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <div className="w-1 h-12 bg-blue-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-sm uppercase text-white tracking-wide">Suporte Direto</h4>
                    <p className="text-xs text-slate-300 font-light">Tire suas dúvidas diretamente com o Luccas e sua equipe no WhatsApp.</p>
                  </div>
                </div>
              </div>

              {/* Bullet Points */}
              <ul className="space-y-2 text-xs text-slate-200 font-light border-t border-blue-900/30 pt-3">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Análise detalhada de exames de sangue e bloqueios hormonais</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>Cardápio prático sem passar fome ou alimentos difíceis</span>
                </li>
              </ul>

              {/* Guarantee badge */}
              <div className="flex items-center gap-2 text-xs text-slate-300 font-light">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Garantia de 7 Dias Incondicional • Atendimento Online Seguro</span>
              </div>

            </div>

          </div>

          {/* Single Official Kiwify Upsell Container */}
          <div className="mt-8 text-center pt-6 border-t border-blue-900/40">
            <div style={{ textAlign: 'center' }} id="kiwify-upsell-vOKFrFs" data-upsell-url="" data-downsell-url="">
              <button
                id="kiwify-upsell-trigger-vOKFrFs"
                style={{
                  backgroundColor: '#F39C19',
                  padding: '12px 16px',
                  cursor: 'pointer',
                  color: '#FFFFFF',
                  fontWeight: 600,
                  borderRadius: '4px',
                  border: '1px solid #F39C19',
                  fontSize: '20px'
                }}
                className="hover:opacity-95 transition-all active:scale-95"
              >
                Sim, eu aceito essa oferta especial!
              </button>
              <div
                id="kiwify-upsell-cancel-trigger-vOKFrFs"
                style={{
                  marginTop: '1rem',
                  cursor: 'pointer',
                  fontSize: '16px',
                  textDecoration: 'underline',
                  fontFamily: 'sans-serif'
                }}
                className="text-slate-300 hover:text-white"
              >
                Não, eu gostaria de recusar essa oferta
              </div>
            </div>
          </div>

        </div>

        {/* Social Proof Star Bar */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-300 text-xs uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
              ))}
            </div>
            <span className="font-bold text-white">4.9/5</span>
            <span className="text-slate-400">(+3.800 pacientes)</span>
          </div>
          
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-sky-400" />
            <span>Atendimento 100% Online em HD</span>
          </div>
        </div>

      </div>
    </section>
  );
};

