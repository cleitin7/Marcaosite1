import React from 'react';
import { Instagram, Clock, MapPin, Phone } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

const Footer: React.FC = () => {
  return (
    <footer id="contato" className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* About Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-300">Refrigeração Colônia</h3>
            <p className="mb-4">
              Soluções em assistência técnica de eletrodomésticos e refrigeração para sua casa ou empresa.
            </p>
            <div className="flex items-center gap-2">
              <a 
                href="https://www.instagram.com/refrigeracaocolonia" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-teal-300 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <span className="text-gray-400">@refrigeracaocolonia</span>
            </div>
          </div>
          
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-300">Serviços</h3>
            <ul className="space-y-2">
              <li className="hover:text-teal-300 transition-colors">
                <a href="#servicos">Geladeiras e Freezers</a>
              </li>
              <li className="hover:text-teal-300 transition-colors">
                <a href="#servicos">Ar-condicionado</a>
              </li>
              <li className="hover:text-teal-300 transition-colors">
                <a href="#servicos">Micro-ondas</a>
              </li>
              <li className="hover:text-teal-300 transition-colors">
                <a href="#servicos">Máquina de lavar e Lava e Seca</a>
              </li>
            </ul>
          </div>
          
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-300">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock size={20} className="text-teal-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Horário de Atendimento</p>
                  <p className="text-gray-400">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-400">Sábado: 8h às 12h</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-teal-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">Área de Atendimento</p>
                  <p className="text-gray-400">Rio De Janeiro e região</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="text-teal-300 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium">WhatsApp</p>
                  <p className="text-gray-400">Atendimento direto com o Marcos</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* CTA Column */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-300">Fale Conosco</h3>
            <p className="mb-4">
              Fale agora com o Marcos e resolva seu problema com rapidez e eficiência.
            </p>
            <WhatsAppButton 
              text="Chamar no WhatsApp" 
              fullWidth={true}
              className="mt-2"
            />
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Refrigeração Colônia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;