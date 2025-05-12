import { DivideIcon as LucideIcon } from 'lucide-react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  specialization?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  rating: number;
}