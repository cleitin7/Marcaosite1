import React, { useEffect, useRef } from 'react';
import Button from './UI/Button';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (titleRef.current && subtitleRef.current && containerRef.current) {
      titleRef.current.classList.add('animate-fade-in');
      
      setTimeout(() => {
        if (subtitleRef.current) {
          subtitleRef.current.classList.add('animate-fade-in');
        }
      }, 200);
    }
  }, []);

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.1),_transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_bottom_left,_rgba(29,78,216,0.05),_transparent_50%)]"></div>
      
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMTExMTEiIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNNjAgMjlWMEgzMW0wIDYwSDYwVjMxTTAgMzFWNjBoMjltMC02MUgwdjMwIiBzdHJva2U9IiMyMDIwMjAiIHN0cm9rZS13aWR0aD0iLjUiLz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1 
            ref={titleRef}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 opacity-0 transition-opacity duration-1000"
          >
            Assistência Técnica <span className="text-sky-400">Especializada</span> em Eletrodomésticos
          </h1>
          <p 
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto opacity-0 transition-opacity duration-1000 delay-100"
          >
            Especialistas em manutenção e reparo de eletrodomésticos de alto padrão, com foco em precisão e excelência técnica.
          </p>
          
          <div className="relative inline-block">
            <Button href="#services" label="Conheça Nossos Serviços" />
            <div className="absolute -inset-1 bg-sky-400/20 rounded-lg blur-md opacity-75 group-hover:opacity-100 animate-pulse transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-gray-400 text-sm mb-2">Rolar para Baixo</span>
        <div className="w-5 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;