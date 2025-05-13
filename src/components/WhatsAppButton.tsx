import React from 'react';

interface WhatsAppButtonProps {
  text: string;
  className?: string;
  fullWidth?: boolean;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  text, 
  className = '',
  fullWidth = false
}) => {
  return (
    <a
      href="https://api.whatsapp.com/message/KXH6ISPRLTGII1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center justify-center gap-2 
        px-4 py-2 rounded-full
        bg-gradient-to-r from-teal-500 to-teal-400
        text-white font-medium
        hover:from-teal-400 hover:to-teal-300
        transform hover:scale-105
        transition-all duration-300
        shadow-lg hover:shadow-teal-500/30
        relative overflow-hidden
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 21l1.65-5.65a9 9 0 1 1 3.4 2.25L3 21" />
        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
        <path d="M9.5 13.5c.5 1 1.5 1 2.5 1s2-.5 2.5-1" />
      </svg>
      {text}
      
      {/* Animation effect */}
      <span className="absolute inset-0 bg-white/20 animate-pulse-slow opacity-0 group-hover:opacity-30" />
    </a>
  );
};

export default WhatsAppButton;