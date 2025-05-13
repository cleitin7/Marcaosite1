import React from 'react';
import { Check } from 'lucide-react';

const reasons = [
  { id: 1, text: 'Atendimento rápido e direto' },
  { id: 2, text: 'Especialização em marcas premium' },
  { id: 3, text: 'Conserto de placas e circuitos' },
  { id: 4, text: 'Garantia nos serviços' },
  { id: 5, text: 'Atendimento via WhatsApp' },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
          Por que nos escolher
        </h2>
        
        <div className="max-w-3xl mx-auto bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-gray-700/50">
          <ul className="space-y-4">
            {reasons.map((reason) => (
              <li 
                key={reason.id}
                className="flex items-start gap-4 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-300"
              >
                <div className="bg-teal-500/20 p-1.5 rounded-full flex-shrink-0">
                  <Check size={20} className="text-teal-300" />
                </div>
                <div>
                  <p className="text-lg md:text-xl font-medium text-gray-200">{reason.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;