'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface CardData {
  id: string;
  title: string;
  logo: string;
  description: string;
  features: string[];
  website: string;
  category: string;
  color: string;
}

const cardsData: CardData[] = [
  {
    id: 'kpax',
    title: 'KPAX Solutions',
    logo: '/logos/kpax-logo.svg',
    description: 'Plataforma de gestión empresarial integral con análisis avanzados y automatización de procesos.',
    features: [
      'Dashboard en tiempo real',
      'Automatización de workflows',
      'Análisis predictivo',
      'Integración multi-plataforma'
    ],
    website: 'https://kpax.com',
    category: 'Enterprise Software',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'papercut',
    title: 'PaperCut Print',
    logo: '/logos/papercut-logo.svg',
    description: 'Solución líder en gestión de impresión que optimiza costos y mejora la seguridad documental.',
    features: [
      'Control de costos',
      'Impresión segura',
      'Seguimiento detallado',
      'Gestión ambiental'
    ],
    website: 'https://papercut.com',
    category: 'Print Management',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'megaged',
    title: 'MegaGED System',
    logo: '/logos/megaged-logo.svg',
    description: 'Sistema de gestión electrónica de documentos que digitaliza y organiza toda tu información.',
    features: [
      'Digitalización automática',
      'Búsqueda inteligente',
      'Workflow documental',
      'Compliance normativo'
    ],
    website: 'https://megaged.com',
    category: 'Document Management',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'wiki-alphabet',
    title: 'Wiki Alphabet',
    logo: '/logos/wiki-alphabet-logo.svg',
    description: 'Base de conocimiento colaborativa que centraliza la información y facilita el aprendizaje organizacional.',
    features: [
      'Base de conocimiento',
      'Colaboración en tiempo real',
      'Búsqueda semántica',
      'Versionado inteligente'
    ],
    website: 'https://wiki-alphabet.com',
    category: 'Knowledge Management',
    color: 'from-orange-500 to-orange-700'
  }
];

interface FlipCardsProps {
  className?: string;
}

export const FlipCards: React.FC<FlipCardsProps> = ({ className }) => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);

  const handleCardHover = (cardId: string) => {
    setFlippedCard(cardId);
  };

  const handleCardLeave = () => {
    setFlippedCard(null);
  };

  return (
    <div className={cn('py-16 px-4', className)}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nuestras <span className="text-blue-600">Soluciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubre nuestra gama completa de herramientas empresariales diseñadas 
            para optimizar y modernizar tu organización.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative h-80 perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
            >
              <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer"
                animate={{
                  rotateY: flippedCard === card.id ? 180 : 0
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden">
                  <div className={cn(
                    'w-full h-full bg-gradient-to-br p-6 flex flex-col items-center justify-center text-white relative',
                    card.color
                  )}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <defs>
                          <pattern id={`pattern-${card.id}`} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill="currentColor" />
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill={`url(#pattern-${card.id})`} />
                      </svg>
                    </div>

                    {/* Logo Container */}
                    <div className="w-32 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4 shadow-lg relative z-10 overflow-hidden">
                      <img 
                        src={card.logo} 
                        alt={`${card.title} Logo`}
                        className="w-28 h-12 object-contain"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.currentTarget.style.display = 'none';
                          const fallback = e.currentTarget.parentNode?.querySelector('.fallback-logo') as HTMLElement;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      <div className="fallback-logo hidden w-12 h-12 bg-white rounded-lg items-center justify-center">
                        <span className="text-gray-700 font-bold text-lg">
                          {card.title.split(' ').map(word => word[0]).join('')}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-center mb-2 relative z-10">
                      {card.title}
                    </h3>

                    {/* Category */}
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm relative z-10">
                      {card.category}
                    </span>

                    {/* Hover Indicator */}
                    <motion.div 
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white/80"
                      animate={{
                        y: [0, -5, 0]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Back Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl overflow-hidden">
                  <div className="w-full h-full bg-white p-6 flex flex-col">
                    {/* Header */}
                    <div className="flex items-center mb-4">
                      <div className="w-16 h-8 bg-gray-50 rounded-lg flex items-center justify-center mr-3 overflow-hidden">
                        <img 
                          src={card.logo} 
                          alt={`${card.title} Logo`}
                          className="w-14 h-6 object-contain"
                          onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.style.display = 'none';
                            const fallback = e.currentTarget.parentNode?.querySelector('.fallback-logo-back') as HTMLElement;
                            if (fallback) fallback.style.display = 'flex';
                          }}
                        />
                        <div className="fallback-logo-back hidden w-full h-full items-center justify-center">
                          <span className="text-gray-700 font-bold text-xs">
                            {card.title.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{card.title}</h4>
                        <p className="text-xs text-gray-500">{card.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-4 flex-1">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-900 text-sm mb-2">Características:</h5>
                      <ul className="space-y-1">
                        {card.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-xs text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <motion.a
                      href={card.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        'w-full py-2 px-4 rounded-lg text-white text-sm font-medium text-center bg-gradient-to-r transition-all duration-300',
                        card.color,
                        'hover:shadow-lg hover:scale-105'
                      )}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explorar Solución
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 mb-6">
            ¿Necesitas más información sobre nuestras soluciones?
          </p>
          <motion.button
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Contactar Especialista
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCards;
