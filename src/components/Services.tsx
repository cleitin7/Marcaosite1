import React, { useEffect, useRef } from 'react';
import { services } from '../data/services';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          titleRef.current?.classList.add('animate-fade-in');
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef} 
            className="text-3xl md:text-4xl font-bold text-white opacity-0 transition-opacity duration-1000"
          >
            Nossos Serviços <span className="text-sky-400">Especializados</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Reparo e manutenção profissional para uma ampla gama de eletrodomésticos, 
            com expertise em marcas premium e sistemas complexos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id}
              service={service}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;