import { Testimonial, BonusItem, TimeSlot, FAQItem, SocialProofNotification } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carla Menezes',
    age: 34,
    city: 'São Paulo, SP',
    weightLost: '-9.4 kg',
    days: 21,
    comment: 'Eu tentei o projeto em grupo 2 vezes e empaquei no 5º dia por causa da minha rotina corrida. Na consulta individual, o Luccas adaptou a dieta exatamente para meus horários de plantão. Perdi 9,4kg sem passar fome!',
    highlight: 'Emagrecimento com aceleração metabólica'
  },
  {
    id: '2',
    name: 'Rodrigo Fontes',
    age: 41,
    city: 'Curitiba, PR',
    weightLost: '-12.1 kg',
    days: 21,
    comment: 'Tinha gordura no fígado e muita retenção abdominal. O Luccas analisou meus exames na consulta e trocou 3 alimentos que desincharem minha barriga em 48h. Vale 100x mais do que R$ 89,90!',
    highlight: 'Ajuste de exames e queima de gordura'
  },
  {
    id: '3',
    name: 'Juliana Paes Coimbra',
    age: 29,
    city: 'Belo Horizonte, MG',
    weightLost: '-7.8 kg',
    days: 21,
    comment: 'O suporte do Luccas no WhatsApp tirou todas as minhas dúvidas quando saí pra jantar fora no fim de semana. Foi o acompanhamento mais atencioso que já tive!',
    highlight: 'Zero efeito sanfona e perda de gordura'
  }
];

export const BONUS_ITEMS: BonusItem[] = [
  {
    id: 'b1',
    title: 'Protocolo Exclusivo de Manipulados & Suplementação',
    value: 'R$ 120,00',
    description: 'Guia com os únicos 3 suplementos comprovados para acelerar a queima de gordura visceral durante o sono.',
    tag: 'BÔNUS VIP 1'
  },
  {
    id: 'b2',
    title: 'E-book 40 Receitas Anabólicas e Fit Antidoce',
    value: 'R$ 97,00',
    description: 'Sobremesas com zero açúcar que matam a vontade de doce no final da tarde sem quebrar a cetose/déficit.',
    tag: 'BÔNUS VIP 2'
  },
  {
    id: 'b3',
    title: 'Acesso Direto ao WhatsApp Pessoal de Luccas por 30 Dias',
    value: 'R$ 250,00',
    description: 'Tire dúvidas em tempo real, envie fotos do seu prato no restaurante e faça ajustes rápidos sem esperar semanas.',
    tag: 'BÔNUS VIP 3'
  },
  {
    id: 'b4',
    title: 'Guia SOS Restaurante e Festas de Fim de Semana',
    value: 'R$ 67,00',
    description: 'Aprenda exatamente como pedir pizzas, sushi ou churrasco sem estragar seu resultado do Projeto 21 Dias.',
    tag: 'BÔNUS VIP 4'
  }
];

export const TIME_SLOTS: TimeSlot[] = [
  { id: 's1', dateStr: 'Amanhã (Quinta)', timeStr: '09:00', available: true },
  { id: 's2', dateStr: 'Amanhã (Quinta)', timeStr: '11:30', available: false },
  { id: 's3', dateStr: 'Amanhã (Quinta)', timeStr: '15:00', available: true },
  { id: 's4', dateStr: 'Amanhã (Quinta)', timeStr: '18:30', available: true },
  { id: 's5', dateStr: 'Sexta-feira', timeStr: '10:00', available: true },
  { id: 's6', dateStr: 'Sexta-feira', timeStr: '14:00', available: false },
  { id: 's7', dateStr: 'Sexta-feira', timeStr: '17:00', available: true },
  { id: 's8', dateStr: 'Sábado Especial', timeStr: '09:30', available: true },
];

export const FAQS: FAQItem[] = [
  {
    question: 'Como funciona a consulta individual online com o Nutricionista Luccas Raddatz?',
    answer: 'A consulta é realizada via videochamada VIP (Google Meet ou WhatsApp Video) de forma totalmente individualizada. Durante o atendimento, Luccas analisa detalhadamente seu histórico, rotina, gostos alimentares, dificuldades anteriores e exames. Em até 24h você recebe seu plano alimentar 100% personalizado pelo aplicativo.',
    category: 'Atendimento'
  },
  {
    question: 'Por que o valor está por R$ 89,90 se o valor normal é R$ 350,00?',
    answer: 'Esta é uma condição de BOAS-VINDAS ÚNICA e EXCLUSIVA liberada apenas nesta página exclusiva para quem acabou de se inscrever no Projeto de Emagrecimento 21 Dias. Se você sair ou fechar esta guia, a oferta expira e a consulta volta ao preço normal de tabela (R$ 350,00).',
    category: 'Preço & Oferta'
  },
  {
    question: 'Preciso ter exames de sangue recentes para fazer a consulta?',
    answer: 'Não é obrigatório! Se você já tiver exames dos últimos 6 meses, o Luccas fará a análise completa. Caso não tenha, ele prescreverá os exames ideais para sua saúde e montará seu protocolo inicial imediatamente.',
    category: 'Exames'
  },
  {
    question: 'Como funciona o agendamento e suporte via WhatsApp?',
    answer: 'Após a confirmação do pagamento, nossa equipe entrará em contato via WhatsApp para confirmar a data e horário da sua consulta individual e alinhar todos os detalhes do seu atendimento.',
    category: 'Agendamento'
  },
  {
    question: 'E se eu não puder nos horários listados para agendamento?',
    answer: 'Não se preocupe! Após garantir a sua vaga por R$ 89,90 nesta página, nossa secretária entrará em contato via WhatsApp para alinhar um horário alternativo que encaixe perfeitamente na sua agenda.',
    category: 'Agendamento'
  },
  {
    question: 'Existe garantia?',
    answer: 'Sim! Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que a consulta individual não atendeu suas expectativas, basta enviar uma mensagem e devolveremos 100% do seu dinheiro sem letras miúdas.',
    category: 'Garantia'
  }
];

export const SOCIAL_PROOF_NOTIFICATIONS: SocialProofNotification[] = [
  { id: 'n1', name: 'Fernanda Rocha', city: 'São Paulo - SP', timeAgo: 'há 1 minuto' },
  { id: 'n2', name: 'Marcos Vinícius', city: 'Rio de Janeiro - RJ', timeAgo: 'há 3 minutos' },
  { id: 'n3', name: 'Beatriz Alcantara', city: 'Campinas - SP', timeAgo: 'há 5 minutos' },
  { id: 'n4', name: 'Gustavo Santos', city: 'Porto Alegre - RS', timeAgo: 'há 8 minutos' },
];
