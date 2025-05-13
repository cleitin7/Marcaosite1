import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Instagram } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);

    // Lock body scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-xl md:text-2xl font-bold text-teal-300">
          Refrigeração Colônia
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#inicio" className="text-gray-200 hover:text-teal-300 transition-colors">Início</a>
          <a href="#sobre" className="text-gray-200 hover:text-teal-300 transition-colors">Sobre Nós</a>
          <a href="#servicos" className="text-gray-200 hover:text-teal-300 transition-colors">Serviços</a>
          <a href="#depoimentos" className="text-gray-200 hover:text-teal-300 transition-colors">Depoimentos</a>
          <a href="#contato" className="text-gray-200 hover:text-teal-300 transition-colors">Contato</a>
          <a 
            href="https://www.instagram.com/refrigeracaocolonia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-teal-300 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <WhatsAppButton text="Chamar" className="ml-2" />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-4">
          <a 
            href="https://www.instagram.com/refrigeracaocolonia" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-200 hover:text-teal-300 transition-colors"
          >
            <Instagram size={20} />
          </a>
          <button 
            ref={buttonRef}
            onClick={toggleMenu}
            className="text-gray-200 hover:text-teal-300 focus:outline-none transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      <div 
        className={`fixed inset-0 bg-gray-900/90 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 90 }}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <div 
        ref={menuRef}
        className={`fixed inset-x-0 top-[57px] bg-gray-900 shadow-xl z-[95] md:hidden transition-all duration-300 transform ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0 pointer-events-none'
        } ${isScrolled ? 'top-[49px]' : 'top-[65px]'}`}
      >
        <nav className="container mx-auto px-4 py-8 flex flex-col items-center gap-6 text-xl">
          <a 
            href="#inicio" 
            className="w-full text-center py-2 text-gray-200 hover:text-teal-300 transition-colors"
            onClick={closeMenu}
          >
            Início
          </a>
          <a 
            href="#sobre" 
            className="w-full text-center py-2 text-gray-200 hover:text-teal-300 transition-colors"
            onClick={closeMenu}
          >
            Sobre Nós
          </a>
          <a 
            href="#servicos" 
            className="w-full text-center py-2 text-gray-200 hover:text-teal-300 transition-colors"
            onClick={closeMenu}
          >
            Serviços
          </a>
          <a 
            href="#depoimentos" 
            className="w-full text-center py-2 text-gray-200 hover:text-teal-300 transition-colors"
            onClick={closeMenu}
          >
            Depoimentos
          </a>
          <a 
            href="#contato" 
            className="w-full text-center py-2 text-gray-200 hover:text-teal-300 transition-colors"
            onClick={closeMenu}
          >
            Contato
          </a>
          <WhatsAppButton text="Chamar no WhatsApp" className="mt-4 w-full" />
        </nav>
      </div>
    </header>
  );
};

export default Header;