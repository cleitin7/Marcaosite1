import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen pt-16 flex items-center"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-800/95" />
      </div>

      <div className="container mx-auto px-4 py-12 md:py-24 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1 mt-8 lg:mt-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
              Bem-vindo à Refrigeração Colônia
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              Soluções técnicas de confiança para sua casa ou empresa.
            </p>
            <WhatsAppButton
              text="Chamar no WhatsApp"
              className="text-lg px-6 py-3"
            />
          </div>

          <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md">
              {/* Modern refrigerator image */}
              <img
                src="https://i.imgur.com/HyYTsJN.png"
                alt="Geladeira moderna"
                className="w-full h-auto object-contain rounded-lg shadow-2xl shadow-teal-700/20 transform hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;