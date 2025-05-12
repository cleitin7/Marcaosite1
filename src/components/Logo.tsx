import React from 'react';
import { WrenchIcon } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <WrenchIcon className="w-8 h-8 text-white" />
        <div className="absolute inset-0 bg-sky-400/30 blur-lg rounded-full -z-10 opacity-70 animate-pulse"></div>
      </div>
      <span className="text-white font-bold text-xl tracking-tight">Refrigeração Colônia</span>
    </div>
  );
};

export default Logo;