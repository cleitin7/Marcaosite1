import React, { useRef, useEffect } from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            cardRef.current?.classList.add('opacity-100', 'translate-y-0');
          }, index * 100);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      observer.disconnect();
    };
  }, [index]);
  
  const Icon = service.icon;

  return (
    <div 
      ref={cardRef}
      className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 transition-all duration-500 opacity-0 translate-y-8 hover:bg-gray-800/80 hover:border-gray-700 hover:-translate-y-1 hover:shadow-lg hover:shadow-sky-900/10 group"
    >
      <div className="mb-5 flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 text-sky-400 group-hover:text-sky-300 transition-colors duration-300">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
      <p className="text-gray-400 mb-4">{service.description}</p>
      
      {service.specialization && (
        <div className="text-sm text-gray-500 mb-4">
          <span className="font-medium text-gray-400">Especialização: </span>
          {service.specialization}
        </div>
      )}
      
      <a 
        href="#contact" 
        className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center transition-colors duration-300"
      >
        Saiba mais
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </a>
    </div>
  );
};

export default ServiceCard;