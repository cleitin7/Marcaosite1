import React from 'react';

const WhatsAppFloatingButton: React.FC = () => {
  return (
    <a
      href="https://api.whatsapp.com/message/KXH6ISPRLTGII1?autoload=1&app_absent=0"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14 md:w-16 md:h-16
        flex items-center justify-center
        rounded-full
        bg-gradient-to-r from-green-500 to-teal-400
        text-white
        shadow-lg hover:shadow-teal-500/50
        transform hover:scale-110
        transition-all duration-300
        animate-pulse-slow
      "
      aria-label="Chamar no WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
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
    </a>
  );
};

export default WhatsAppFloatingButton;