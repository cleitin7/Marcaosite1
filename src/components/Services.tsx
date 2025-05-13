import React from 'react';
import WhatsAppButton from './WhatsAppButton';
import { services } from '../data/services';

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 shadow-lg transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="h-52 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-teal-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6">
                  {service.description}
                </p>
                <WhatsAppButton 
                  text="Solicitar Orçamento" 
                  fullWidth={true}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;