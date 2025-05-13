export interface Testimonial {
  name: string;
  location: string;
  content: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Juliana P.',
    location: 'São Paulo, SP',
    content: 'Serviço incrível! O Marcos arrumou minha geladeira em tempo recorde. Super profissional e atencioso. Recomendo para todos!'
  },
  {
    name: 'Carlos M.',
    location: 'Guarulhos, SP',
    content: 'Estava com problema no ar-condicionado há semanas. Outros técnicos não resolveram, mas o Marcos identificou e corrigiu o problema na primeira visita!'
  },
  {
    name: 'Ana Luiza S.',
    location: 'Osasco, SP',
    content: 'Atendimento rápido e eficiente. Orçamento justo e trabalho de qualidade. Minha máquina de lavar voltou a funcionar perfeitamente.'
  }
];