import React from 'react';
import { Check, X, ArrowRight, Sparkles, UserCheck } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
}

export const ComparisonSection: React.FC<Props> = ({ onOpenCheckout }) => {
  const comparisonData = [
    {
      feature: 'Cardápio e Distribuição de Macros',
      group: 'Genérico para todo o grupo do desafio',
      vip: '100% Personalizado para seus gostos, peso e rotina',
      highlight: true
    },
    {
      feature: 'Análise de Exames de Sangue e Saúde',
      group: 'Não incluído (Apenas orientações gerais)',
      vip: 'Avaliação detalhada de exames pelo nutricionista',
      highlight: false
    },
    {
      feature: 'Ajustes no Cardápio se Estagnar',
      group: 'Você mesmo tenta adaptar no grupo',
      vip: 'Luccas altera e recalcula sua dieta imediatamente',
      highlight: true
    },
    {
      feature: 'Suporte VIP Individual no WhatsApp',
      group: 'Apenas grupo geral com centenas de alunos',
      vip: 'Contato direto individual para a sua consulta',
      highlight: false
    },
    {
      feature: 'Prescrição de Suplementos e Manipulados',
      group: 'Suplementação básica padrão',
      vip: 'Fórmulas personalizadas para sua necessidade',
      highlight: true
    },
    {
      feature: 'Tratamento de Alergias / Restrições',
      group: 'Dificuldade para adaptar receitas',
      vip: 'Plano com 0% de desconforto ou restrição forçada',
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-[#060d1d] text-slate-100 border-b border-blue-900/30 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 bg-blue-950/60 border border-blue-500/30 px-3 py-1 text-[10px] font-bold tracking-widest text-sky-400 uppercase rounded-sm">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Por que Fazer a Consulta Individual de Emagrecimento?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-white">
            Veja a diferença entre tentar sozinho e ter o nutricionista especialista ao seu lado
          </h2>
          <p className="text-slate-300 text-sm font-light max-w-xl mx-auto">
            O Projeto 21 Dias é o motor, mas a individualidade biológica na consulta é a chave para o emagrecimento acelerado e definitivo.
          </p>
        </div>

        {/* Comparison Table / Cards */}
        <div className="overflow-hidden rounded-sm border border-blue-900/40 bg-[#0c1833] shadow-2xl">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-[#070e1e] border-b border-blue-900/40 text-xs font-bold uppercase tracking-wider p-4 text-center text-slate-400">
            <div className="col-span-5 sm:col-span-4 text-left">Recurso do Acompanhamento</div>
            <div className="col-span-3 sm:col-span-4">Apenas Projeto 21 Dias</div>
            <div className="col-span-4 bg-blue-600 text-white rounded-sm py-1.5 px-2 border border-blue-400/40 flex items-center justify-center gap-1">
              <Sparkles className="w-3.5 h-3.5 hidden sm:inline" />
              <span>Projeto 21 Dias + Consulta VIP</span>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-blue-900/30 text-xs">
            {comparisonData.map((row, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-12 p-4 items-center transition-colors ${
                  row.highlight ? 'bg-blue-950/20' : 'bg-transparent'
                }`}
              >
                {/* Feature Name */}
                <div className="col-span-5 sm:col-span-4 font-medium text-slate-200 pr-2">
                  {row.feature}
                </div>

                {/* Group Option */}
                <div className="col-span-3 sm:col-span-4 text-center text-slate-400 flex flex-col items-center justify-center gap-1 px-1 font-light">
                  <X className="w-4 h-4 text-slate-500 shrink-0" />
                  <span className="text-[11px] leading-tight">{row.group}</span>
                </div>

                {/* VIP Consultation Option */}
                <div className="col-span-4 text-center font-bold text-sky-400 bg-blue-950/40 border-l border-blue-500/20 py-2.5 px-2 rounded-sm flex flex-col items-center justify-center gap-1">
                  <Check className="w-4 h-4 text-sky-400 shrink-0" />
                  <span className="text-[11px] leading-tight text-white">{row.vip}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Callout */}
        <div className="mt-8 bg-[#0c1833] border border-blue-500/30 rounded-sm p-6 text-center space-y-4">
          <p className="text-base sm:text-lg text-white font-serif">
            Transforme seu esforço de 21 dias em emagrecimento definitivo por apenas <strong className="text-sky-300 text-xl font-bold">R$ 89,90</strong>.
          </p>

          <button
            onClick={onOpenCheckout}
            className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm uppercase tracking-widest px-8 py-3.5 rounded-sm shadow-xl transition-all active:scale-95 cursor-pointer border border-blue-400/30"
          >
            <span>Quero Meu Acompanhamento Individual com Luccas</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};

