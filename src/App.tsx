import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  useEffect(() => {
    // Update document title
    document.title = 'TechFix | Expert Appliance Repair Services';
    
    // Add custom CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      @keyframes glow-pulse {
        0% { opacity: 0.6; }
        50% { opacity: 1; }
        100% { opacity::0.6; }
      }
      
      @keyframes bounce-slow {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(6px); }
      }
      
      .animate-glow-pulse {
        animation: glow-pulse 2s ease-in-out infinite;
      }
      
      .animate-bounce-slow {
        animation: bounce-slow 2s ease-in-out infinite;
      }
      
      .animate-fade-in {
        opacity: 1 !important;
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <WhatsAppButton type="floating" />
    </div>
  );
}

export default App;