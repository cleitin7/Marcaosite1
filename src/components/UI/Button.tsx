import React from 'react';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseClasses = "group relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-md";
  
  const variantClasses = {
    primary: "bg-white text-black hover:bg-sky-50",
    secondary: "bg-sky-600 text-white hover:bg-sky-700",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
  };
  
  const sizeClasses = {
    sm: "text-sm py-2 px-4",
    md: "text-base py-3 px-6",
    lg: "text-lg py-4 px-8",
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  const handleClick = (e: React.MouseEvent) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    onClick?.();
  };
  
  const glowEffect = (
    <>
      <span className="absolute inset-0 w-full h-full rounded-md bg-gradient-to-r from-sky-400/0 via-sky-400/30 to-sky-400/0 opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 animate-glow-pulse"></span>
      <span className="absolute inset-0 -z-10 rounded-md bg-gradient-to-r from-sky-400/0 via-sky-400/10 to-sky-400/0 animate-glow-pulse"></span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} onClick={handleClick} className={buttonClasses}>
        {glowEffect}
        <span className="relative">{label}</span>
      </a>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {glowEffect}
      <span className="relative">{label}</span>
    </button>
  );
};

export default Button;