import React from 'react';
import { Video, FileText, Phone, Award, Sparkles, CheckCircle, ArrowRight } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
}

export const DeliverablesSection: React.FC<Props> = ({ onOpenCheckout }) => {
  const coreDeliverables = [
    {
      icon: Video,
      title: '1. Consulta Online Individual',
      description: 'Atendimento por vídeo individual diretamente com o Nutricionista Luccas Raddatz. Diagnóstico de rotina, sono e hábitos alimentares.'
    },
    {
      icon: FileText,
      title: '2. Plano Alimentar 100% Personalizado',
      description: 'Cardápio estruturado com suas refeições preferidas. Sem dietas malucas de passar fome. Opções para comer fora e substituição rápida.'
    },
    {
      icon: Phone,
      title: '3. Acompanhamento e Suporte no WhatsApp',
      description: 'Canal de comunicação direto com a equipe para alinhamento da consulta, confirmação do agendamento e esclarecimento de dúvidas.'
    },
    {
      icon: Award,
      title: '4. Análise de Exames de Sangue',
      description: 'Avaliação completa de marcadores metabólicos, tireóide, glicemia e colesterol para destravar a queima natural de gordura.'
    }
  ];

  return (
    <section className="py-16 bg-[#060d1d] text-slate-100 border-b border-blue-900/30 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Deliverables Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 px-3 py-1 text-[10px] font-bold tracking-widest text-sky-400 uppercase rounded-sm">
            <CheckCircle className="w-3.5 h-3.5 text-sky-400" />
            <span>Tudo Incluído na Sua Consulta</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            O que você receberá ao agendar sua consulta hoje
          </h2>
          <p className="text-slate-300 text-sm font-light max-w-xl mx-auto">
            Um ecossistema completo de emagrecimento acelerado para você não ter nenhuma dúvida e alcançar seu objetivo em 21 dias.
          </p>
        </div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {coreDeliverables.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-[#0c1833] border border-blue-900/40 rounded-sm p-6 hover:border-blue-500/50 transition-all group shadow-lg flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-sm bg-blue-950/60 border border-blue-500/30 flex items-center justify-center shrink-0 text-sky-400 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-base font-serif font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

