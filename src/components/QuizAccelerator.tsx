import React, { useState } from 'react';
import { Calculator, ArrowRight, Sparkles, Zap } from 'lucide-react';

interface Props {
  onOpenCheckout: () => void;
}

export const QuizAccelerator: React.FC<Props> = ({ onOpenCheckout }) => {
  const [step, setStep] = useState<number>(1);
  const [goalWeight, setGoalWeight] = useState<string>('');
  const [mainObstacle, setMainObstacle] = useState<string>('');
  const [, setDietHistory] = useState<string>('');
  const [isCalculating, setIsCalculating] = useState<boolean>(false);

  const handleCalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setStep(4);
    }, 1800);
  };

  return (
    <section className="py-14 bg-[#050505] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center space-y-2 mb-8">
          <div className="inline-flex items-center gap-1.5 bg-white/5 border border-white/10 px-3 py-1 text-[10px] font-bold tracking-widest text-rose-500 uppercase">
            <Calculator className="w-3.5 h-3.5" />
            <span>Ferramenta de Diagnóstico Metabólico</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-serif text-white">
            Calcule a aceleração de resultados da sua consulta
          </h2>
          <p className="text-slate-400 text-sm font-light max-w-xl mx-auto">
            Responda 3 perguntas rápidas para calcularmos a projeção de emagrecimento nos próximos 21 dias.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-[#0a0a0a] border border-white/10 rounded-sm p-6 sm:p-8 shadow-2xl relative">
          
          {/* Step 1 */}
          {step === 1 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-rose-500 font-mono uppercase tracking-wider">
                <span>Passo 1 de 3</span>
                <span>33% Concluído</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Qual é a sua meta de peso para os próximos 21 dias do Projeto?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'De 3kg a 5kg', detail: 'Desinchar e definir medidas' },
                  { label: 'De 5kg a 8kg', detail: 'Perda expressiva de gordura' },
                  { label: 'Mais de 8kg', detail: 'Transformação profunda e urgente' }
                ].map((item, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setGoalWeight(item.label);
                      setStep(2);
                    }}
                    className={`p-4 rounded-sm border text-left transition-all hover:border-rose-500/80 cursor-pointer ${
                      goalWeight === item.label
                        ? 'bg-rose-950/20 border-rose-500 text-white'
                        : 'bg-[#050505] border-white/10 text-slate-200'
                    }`}
                  >
                    <p className="font-serif font-bold text-lg text-rose-400">{item.label}</p>
                    <p className="text-xs text-slate-400 font-light mt-1">{item.detail}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-rose-500 font-mono uppercase tracking-wider">
                <span>Passo 2 de 3</span>
                <span>66% Concluído</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Qual é o seu maior obstáculo para emagrecer hoje?
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Compulsão por doces e carboidratos à noite',
                  'Falta de tempo para cozinhar e rotina corrida',
                  'Efeito sanfona (engordo tudo de novo)',
                  'Metabolismo lento e inchaço frequente'
                ].map((obs, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setMainObstacle(obs);
                      setStep(3);
                    }}
                    className="p-4 rounded-sm border border-white/10 bg-[#050505] text-left hover:border-rose-500 transition-all text-xs font-medium text-slate-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{obs}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-500 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center justify-between text-xs text-rose-500 font-mono uppercase tracking-wider">
                <span>Passo 3 de 3</span>
                <span>99% Concluído</span>
              </div>
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white">
                Você já tentou dietas prontas de gaveta ou de internet antes?
              </h3>
              <div className="space-y-3">
                {[
                  'Sim, várias vezes. Sempre desistia por ser muito restritiva.',
                  'Tentei algumas, mas passo fome e fico sem energia.',
                  'Nunca fiz acompanhamento individual com nutricionista.'
                ].map((hist, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setDietHistory(hist);
                      handleCalculate();
                    }}
                    className="w-full p-4 rounded-sm border border-white/10 bg-[#050505] text-left hover:border-rose-500 transition-all text-xs font-medium text-slate-200 flex items-center justify-between group cursor-pointer"
                  >
                    <span>{hist}</span>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-rose-500 group-hover:translate-x-1 transition-all shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Calculating Loading State */}
          {isCalculating && (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-10 h-10 border-2 border-rose-500 border-t-transparent rounded-full animate-spin mx-auto" />
              <p className="text-white font-serif text-lg">
                Analisando seu perfil metabólico com o protocolo Luccas Raddatz...
              </p>
              <p className="text-xs text-slate-400 font-light">
                Calculando potencial de queima de gordura e ajustes individuais.
              </p>
            </div>
          )}

          {/* Result Card (Step 4) */}
          {step === 4 && !isCalculating && (
            <div className="space-y-6 animate-fade-in text-left">
              <div className="bg-[#050505] border border-rose-500/30 p-6 rounded-sm space-y-3">
                <div className="flex items-center gap-2 text-rose-500 font-bold text-xs uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" />
                  <span>Diagnóstico Finalizado</span>
                </div>

                <p className="text-2xl sm:text-3xl font-serif text-white">
                  Potencial Estimado: <span className="text-rose-400 italic underline decoration-rose-500">{goalWeight || 'Até 8,5 kg'} em 21 Dias</span>
                </p>

                <p className="text-slate-400 text-xs sm:text-sm font-light leading-relaxed">
                  Para o seu perfil de <strong className="text-white">"{mainObstacle || 'dificuldade na rotina'}"</strong>, um plano genérico pode estagnar rapidamente. Com o <strong className="text-white font-medium">plano individualizado do Luccas Raddatz</strong>, ajustamos os alimentos exatamente para destravar seu metabolismo!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-[#050505] p-5 rounded-sm border border-white/10">
                <div className="text-xs space-y-1">
                  <p className="text-slate-200 font-bold uppercase tracking-wider">Vaga VIP Liberada</p>
                  <p className="text-rose-400 font-serif text-sm">Valor Especial: R$ 89,90 (De R$ 350,00)</p>
                </div>

                <button
                  onClick={onOpenCheckout}
                  className="w-full sm:w-auto bg-rose-600 hover:bg-rose-700 text-white font-bold px-6 py-3 rounded-sm transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <Zap className="w-4 h-4 fill-white" />
                  Agendar Minha Consulta
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

