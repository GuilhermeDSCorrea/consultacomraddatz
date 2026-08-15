import React from 'react';
import { Award, Heart, Users, ShieldCheck, UserCheck, Stethoscope, CheckCircle2 } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
}

export const AuthoritySection: React.FC<Props> = () => {
  return (
    <section className="py-16 bg-[#060d1d] text-slate-100 border-b border-blue-900/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Nutritionist Bio Card */}
        <div className="bg-[#0c1833] border border-blue-900/40 rounded-sm p-6 sm:p-10 shadow-2xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Authority Emblem / Credential Box (No images) */}
          <div className="md:col-span-5 text-center relative">
            <div className="bg-gradient-to-b from-[#0e1e40] to-[#070e1e] border border-blue-800/40 rounded-sm p-8 shadow-2xl space-y-4">
              <div className="w-20 h-20 bg-blue-950/80 border-2 border-blue-500/40 rounded-full flex items-center justify-center mx-auto text-sky-400 shadow-inner">
                <UserCheck className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-white">Luccas Raddatz</h3>
                <p className="text-xs text-sky-400 font-semibold uppercase tracking-wider mt-0.5">Nutricionista Especialista em Emagrecimento</p>
                <p className="text-[11px] text-slate-400 font-mono mt-1">CRN Ativo e Habilitado</p>
              </div>

              <div className="pt-3 border-t border-blue-900/40 grid grid-cols-2 gap-2 text-left text-xs">
                <div className="bg-[#060d1d] p-2 rounded-sm border border-blue-900/30">
                  <span className="text-[10px] text-slate-400 block uppercase">Especialidade</span>
                  <span className="text-[11px] font-bold text-sky-400">Emagrecimento</span>
                </div>
                <div className="bg-[#060d1d] p-2 rounded-sm border border-blue-900/30">
                  <span className="text-[10px] text-slate-400 block uppercase">Protocolo</span>
                  <span className="text-[11px] font-bold text-sky-400">21 Dias VIP</span>
                </div>
              </div>
            </div>
            
            <div className="mt-4 inline-flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 px-3 py-1 rounded-sm text-[10px] font-bold text-sky-400 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Profissional Certificado</span>
            </div>
          </div>

          {/* Details */}
          <div className="md:col-span-7 space-y-4 text-left">
            <div className="space-y-1">
              <span className="text-sky-400 font-bold text-[10px] tracking-widest uppercase">
                Seu Mentor no Projeto de 21 Dias
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-white">
                Nutricionista Luccas Raddatz
              </h2>
              <p className="text-slate-300 text-xs uppercase tracking-wider font-light">
                Especialista em Emagrecimento Acelerado & Recomposição Corporal
              </p>
            </div>

            <p className="text-slate-200 text-xs sm:text-sm font-light leading-relaxed">
              Com mais de <strong className="text-white font-medium">3.800 pacientes atendidos em todo o Brasil e no exterior</strong>, Luccas Raddatz desenvolveu o método de acompanhamento individual focado em adaptar a nutrição à rotina real de cada pessoa — sem privações absurdas ou alimentos difíceis.
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#070e1e] p-3 rounded-sm border border-blue-900/30 flex items-center gap-3">
                <Users className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <p className="font-serif font-bold text-white text-lg">+3.800</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Pacientes Atendidos</p>
                </div>
              </div>

              <div className="bg-[#070e1e] p-3 rounded-sm border border-blue-900/30 flex items-center gap-3">
                <Heart className="w-5 h-5 text-sky-400 shrink-0" />
                <div>
                  <p className="font-serif font-bold text-white text-lg">98.4%</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider">Taxa de Satisfação</p>
                </div>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-300 font-serif italic border-t border-blue-900/30">
              "Meu compromisso não é apenas te dar uma dieta, é fazer você atingir sua melhor versão corporal em 21 dias com saúde, energia e sem efeito sanfona."
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

