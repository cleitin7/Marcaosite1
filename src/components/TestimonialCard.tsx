import React from 'react';
import { Testimonial } from '../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, isActive }) => {
  return (
    <div className="min-w-full px-4">
      <div className={`
        bg-gradient-to-br from-gray-900 to-gray-950 
        border border-gray-800
        rounded-lg p-8 md:p-10
        transition-all duration-500
        h-full flex flex-col justify-between
        ${isActive ? 'shadow-lg shadow-sky-900/5 scale-100 opacity-100' : 'scale-95 opacity-40'}
      `}>
        {/* Quote */}
        <div className="mb-6">
          <svg className="w-8 h-8 text-sky-400/30 mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <p className="text-gray-300 text-lg leading-relaxed">{testimonial.quote}</p>
        </div>
        
        {/* Client */}
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="relative w-12 h-12 rounded-full bg-gradient-to-r from-sky-900 to-sky-700 flex items-center justify-center overflow-hidden">
              <span className="text-xl font-bold text-white">{testimonial.name.charAt(0)}</span>
              <div className="absolute inset-0 bg-sky-400/10 blur-sm"></div>
            </div>
          </div>
          <div className="ml-4">
            <h4 className="text-white font-medium">{testimonial.name}</h4>
            <p className="text-gray-500 text-sm">{testimonial.title}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;