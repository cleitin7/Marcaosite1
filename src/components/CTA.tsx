import React from 'react';
import Button from './UI/Button';
import WhatsAppButton from './WhatsAppButton';

const CTA: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMjlWMEgzMW0wIDYwSDYwVjMxTTAgMzFWNjBoMjltMC02MUgwdjMwIiBzdHJva2U9IiMyMDIwMjAiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-sky-900/10 blur-3xl rounded-full"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Precisa de <span className="text-sky-400">Suporte</span>?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Nossos técnicos especializados estão prontos para ajudar com seus eletrodomésticos. 
              Entre em contato hoje para um atendimento rápido e profissional.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                label="Ligue Agora" 
                href="tel:+1234567890" 
                variant="primary"
                size="lg"
              />
              <WhatsAppButton type="inline" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Horário de Funcionamento</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex justify-between">
                  <span>Segunda - Sexta</span>
                  <span>8:00 - 18:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Sábado</span>
                  <span>9:00 - 16:00</span>
                </li>
                <li className="flex justify-between">
                  <span>Domingo</span>
                  <span>Fechado</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-gray-400">
                Atendimento emergencial 24 horas
              </p>
            </div>
            
            <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-sky-400 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>+1 (234) 567-8900</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-sky-400 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>contato@refrigeracaocolonia.com.br</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-sky-400 mr-3 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Rua das Oficinas, 123 - Centro, São Paulo - SP</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;