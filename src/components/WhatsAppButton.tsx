import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppButtonProps {
  type: 'header' | 'floating' | 'inline';
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ type }) => {
  const whatsappLink = "https://api.whatsapp.com/message/KXH6ISPRLTGII1?autoload=1&app_absent=0";
  const message = "Olá, gostaria de saber mais sobre os serviços de assistência técnica.";

  const styles = {
    header: "flex items-center justify-center h-8 w-8 bg-green-500 rounded-full relative group",
    floating: "fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 bg-green-500 rounded-full shadow-lg group",
    inline: "flex items-center justify-center space-x-2 bg-green-500 py-3 px-6 rounded-lg text-white font-medium hover:bg-green-600 transition-all duration-300"
  };

  if (type === 'inline') {
    return (
      <a 
        href={whatsappLink}
        target="_blank" 
        rel="noopener noreferrer"
        className={styles.inline}
      >
        <MessageCircle className="w-5 h-5" />
        <span>Fale Conosco no WhatsApp</span>
      </a>
    );
  }

  return (
    <a 
      href={whatsappLink}
      target="_blank" 
      rel="noopener noreferrer"
      className={styles[type]}
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="text-white w-5 h-5" />
      <div className="absolute inset-0 rounded-full bg-green-400/30 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
      <div className="absolute -inset-1 bg-green-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
      
      {type === 'floating' && (
        <span className="absolute -top-10 right-0 min-w-max bg-black text-white text-xs py-2 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Fale conosco
          <span className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-black"></span>
        </span>
      )}
    </a>
  );
};

export default WhatsAppButton;