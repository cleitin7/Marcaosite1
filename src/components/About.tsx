import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-16">
          {/* Owner Image */}
          <div className="md:w-1/3 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-teal-400/30 shadow-xl">
                <img 
                  src="https://i.imgur.com/LTj2bIb.png" 
                  alt="Marcos - Proprietário da Refrigeração Colônia" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-teal-500/20 rounded-full blur-xl" />
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-blue-500/20 rounded-full blur-lg" />
            </div>
          </div>
          
          {/* About Text */}
          <div className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center md:text-left bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-300">
              Sobre a Refrigeração Colônia
            </h2>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 md:p-8 rounded-xl shadow-lg border border-gray-700/50">
              <p className="text-lg md:text-xl text-gray-300 mb-4">
                A Refrigeração Colônia oferece soluções confiáveis em assistência técnica de eletrodomésticos e refrigeração.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300">
                Sou o Marcos, técnico responsável, e estou aqui para garantir que seu equipamento funcione como novo. Com experiência e dedicação, trabalho para proporcionar o melhor atendimento, entregando serviços de qualidade e confiança para nossos clientes.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 bg-gray-700/30 px-4 py-2 rounded-lg">
                  <span className="text-teal-400">✓</span>
                  <span>Atendimento Personalizado</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-700/30 px-4 py-2 rounded-lg">
                  <span className="text-teal-400">✓</span>
                  <span>Serviço de Qualidade</span>
                </div>
                <div className="flex items-center gap-3 bg-gray-700/30 px-4 py-2 rounded-lg">
                  <span className="text-teal-400">✓</span>
                  <span>Técnico Especializado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;