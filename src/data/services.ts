import { Refrigerator, Construction as AirConditioner, Loader, Microwave, CircuitBoard, Package2 } from 'lucide-react';
import { Service } from '../types';

export const services: Service[] = [
  {
    id: 1,
    title: 'Refrigeradores e Freezers',
    description: 'Reparo especializado em unidades de refrigeração, incluindo marcas importadas como Viking e Gorenje.',
    icon: Refrigerator,
    specialization: 'Viking, Gorenje, Sub-Zero, Thermador, LG'
  },
  {
    id: 2,
    title: 'Ar Condicionado',
    description: 'Instalação, manutenção e recarga de gás para ar condicionado split e janela de todas as marcas.',
    icon: AirConditioner,
    specialization: 'Daikin, Mitsubishi, Carrier, Trane, Fujitsu'
  },
  {
    id: 3,
    title: 'Máquinas de Lavar e Secar',
    description: 'Reparo profissional para todos os tipos de lavadoras, secadoras e lava e seca com atendimento rápido.',
    icon: Loader,
    specialization: 'Miele, Bosch, LG, Samsung, Whirlpool'
  },
  {
    id: 4,
    title: 'Micro-ondas',
    description: 'Diagnóstico e reparo especializado para todos os tipos de micro-ondas, incluindo modelos de bancada e embutir.',
    icon: Microwave,
    specialization: 'Panasonic, Sharp, Bosch, GE, Samsung'
  },
  {
    id: 5,
    title: 'Reparo de Placas Eletrônicas',
    description: 'Reparo especializado de placas eletrônicas e módulos de controle para todas as marcas de eletrodomésticos.',
    icon: CircuitBoard,
    specialization: 'Módulos de controle, placas de display, circuitos de potência'
  },
  {
    id: 6,
    title: 'Peças Originais',
    description: 'Acesso a peças de reposição originais para todas as principais marcas, garantindo reparos confiáveis e duradouros.',
    icon: Package2,
    specialization: 'Peças originais para todas as marcas'
  }
];