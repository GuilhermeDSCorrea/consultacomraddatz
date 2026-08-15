export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  weightLost: string;
  days: number;
  comment: string;
  highlight: string;
}

export interface BonusItem {
  id: string;
  title: string;
  value: string;
  description: string;
  tag: string;
}

export interface TimeSlot {
  id: string;
  dateStr: string;
  timeStr: string;
  available: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface SocialProofNotification {
  id: string;
  name: string;
  city: string;
  timeAgo: string;
}

export type PaymentMethod = 'pix' | 'credit_card' | 'boleto';

export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  selectedSlotId: string;
  paymentMethod: PaymentMethod;
  cpf: string;
}
