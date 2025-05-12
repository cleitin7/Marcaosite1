import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex space-x-8 items-center">
            <nav className="flex space-x-6 text-gray-200">
              <a href="#home" className="hover:text-white transition-colors duration-200 text-sm font-medium">Início</a>
              <a href="#services" className="hover:text-white transition-colors duration-200 text-sm font-medium">Serviços</a>
              <a href="#testimonials" className="hover:text-white transition-colors duration-200 text-sm font-medium">Depoimentos</a>
              <a href="#contact" className="hover:text-white transition-colors duration-200 text-sm font-medium">Contato</a>
            </nav>
            <WhatsAppButton type="header" />
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <WhatsAppButton type="header" />
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              <div className="relative w-6 h-6">
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 top-3' : 'top-2'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isOpen ? 'opacity-0' : 'opacity-100 top-3'
                }`}></span>
                <span className={`absolute block w-6 h-0.5 bg-white transform transition-all duration-300 ease-in-out ${
                  isOpen ? '-rotate-45 top-3' : 'top-4'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
      
      <div className={`md:hidden absolute w-full bg-black/95 backdrop-blur-md transition-all duration-300 ease-in-out ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'
      }`}>
        <nav className="container mx-auto px-4 py-5 flex flex-col space-y-4">
          <a 
            href="#home" 
            className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-4 border-b border-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Início
          </a>
          <a 
            href="#services" 
            className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-4 border-b border-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Serviços
          </a>
          <a 
            href="#testimonials" 
            className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-4 border-b border-gray-800"
            onClick={() => setIsOpen(false)}
          >
            Depoimentos
          </a>
          <a 
            href="#contact" 
            className="text-gray-200 hover:text-white transition-colors duration-200 text-lg font-medium py-2 px-4"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;