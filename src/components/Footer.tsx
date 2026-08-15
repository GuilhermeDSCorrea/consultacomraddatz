import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#040814] text-slate-400 py-12 border-t border-blue-900/30 text-xs font-light">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 text-center">
        
        {/* Disclaimers & Credentials */}
        <div className="max-w-3xl mx-auto space-y-2 leading-relaxed text-[11px] text-slate-400 font-light">
          <p>
            <strong className="text-slate-300 font-medium">AVISO LEGAL:</strong> Os resultados de perda de peso e recomposição corporal podem variar de pessoa para pessoa com base em metabolismo, adesão ao plano e nível de atividade física. Este produto não substitui o tratamento médico. Consulte sempre um profissional de saúde qualificado.
          </p>
          <p>
            Nutricionista Luccas Raddatz • Inscrição Profissional no Conselho Regional de Nutricionistas (CRN). Atendimento nutricional individualizado e prescrição de dietas personalizadas conforme legislação vigente.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-4 text-slate-400 font-light text-[11px] uppercase tracking-wider">
          <a href="#pricing" className="hover:text-sky-400 transition-colors">Termos de Uso</a>
          <span>•</span>
          <a href="#pricing" className="hover:text-sky-400 transition-colors">Política de Privacidade</a>
          <span>•</span>
          <a href="#pricing" className="hover:text-sky-400 transition-colors">Suporte ao Aluno</a>
        </div>

        {/* Copyright */}
        <div className="pt-4 border-t border-blue-900/30 flex flex-col sm:flex-row items-center justify-between gap-2 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Projeto 21 Dias & Nutricionista Luccas Raddatz. Todos os direitos reservados.</p>
          <div className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
            <span>Plataforma Segura e Criptografada</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

