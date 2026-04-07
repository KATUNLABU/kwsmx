'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
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
    title: 'KPAX Fleet',
    logo: '/images/services/gestao-equipamentos.png',
    description: 'Plataforma inteligente de gestión de equipos de impresión con monitoreo en tiempo real y mantenimiento predictivo.',
    features: [
      'Monitoreo 24/7 de la flota',
      'Alertas inteligentes automáticas',
      'Análisis predictivo de fallas',
      'Gestión completa de suministros'
    ],
    website: '/kpax',
    category: 'Gestión de Equipos',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'papercut',
    title: 'PaperCut MF',
    logo: '/images/services/gestao-impressao.png',
    description: 'Solución líder mundial en gestión de impresión que reduce costos en hasta un 30% y garantiza una impresión segura y sustentable.',
    features: [
      'Reducción de costos de hasta un 30%',
      'Impresión segura con autenticación',
      'Reportes detallados en tiempo real',
      'Sustentabilidad y cumplimiento'
    ],
    website: '/papercut',
    category: 'Gestión de Impresión',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'myq',
    title: 'MyQ',
    logo: '/images/services/myq-logo.png',
    description: 'Solución completa de gestión de impresión con interfaz personalizada y flujos de digitalización inteligentes.',
    features: [
      'Interfaz personalizada por usuario',
      'Workflows de digitalización OCR',
      'Impresión segura y móvil',
      'Reportes de costos detallados'
    ],
    website: '/myq',
    category: 'Gestión de Impresión',
    color: 'from-red-500 to-red-700'
  },
  {
    id: 'kdfm',
    title: 'KDFM',
    logo: '/images/services/kdfm-logo.png',
    description: 'Gestión eficiente y monitoreo de dispositivos de impresión para optimizar recursos y reducir costos.',
    features: [
      'Monitoreo proactivo',
      'Gestión de suministros automatizada',
      'Análisis detallado de uso',
      'Optimización de flota'
    ],
    website: '/kdfm',
    category: 'Monitoreo de Dispositivos',
    color: 'from-gray-500 to-gray-700'
  }
];

interface FlipCardsProps {
  className?: string;
}

export const FlipCards: React.FC<FlipCardsProps> = ({ className }) => {
  const [flippedCard, setFlippedCard] = useState<string | null>(null);
  const [activeIconIndex, setActiveIconIndex] = useState(0);

  // Ciclo de animación de íconos: cada 2 segundos cambia a la siguiente carta
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIconIndex((prev) => (prev + 1) % cardsData.length);
    }, 2000); // Cambia cada 2 segundos

    return () => clearInterval(interval);
  }, []);

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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#004990] mb-4">
            Nuestras <span className="text-blue-600">Soluciones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conozca nuestra gama completa de soluciones empresariales desarrolladas 
            para optimizar y modernizar su organización con tecnología de punta.
          </p>
        </motion.div>

        {/* Cards Grid - Adaptado para 4 cards de forma simétrica */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 justify-items-center max-w-6xl mx-auto">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative h-80 w-full max-w-[320px] perspective-1000"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={handleCardLeave}
            >
              <motion.div
                className="relative w-full h-full preserve-3d cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
                animate={{
                  rotateY: flippedCard === card.id ? 180 : 0
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                {/* Front Face */}
                <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl shadow-xl overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
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

                    {/* Logo Container - Fondo blanco unificado */}
                    <div className="w-36 h-24 bg-white rounded-2xl flex items-center justify-center mb-4 shadow-2xl relative overflow-hidden p-3 border-2 border-white/30" style={{ backfaceVisibility: 'hidden' }}>
                      <div className="relative w-32 h-20">
                        <Image 
                          src={card.logo} 
                          alt={`${card.title} Logo`}
                          fill
                          className="object-contain"
                          style={{ backfaceVisibility: 'hidden' }}
                        />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-center mb-2 relative" style={{ backfaceVisibility: 'hidden' }}>
                      {card.title}
                    </h3>

                    {/* Category */}
                    <span className="text-sm bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm relative" style={{ backfaceVisibility: 'hidden' }}>
                      {card.category}
                    </span>

                    {/* Ícono giratorio - Animación en ciclo */}
                    <motion.div 
                      className="absolute top-3 right-3 text-white/70"
                      animate={{
                        rotate: activeIconIndex === index ? 360 : 0
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut"
                      }}
                    >
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </motion.div>
                  </div>
                </div>

                {/* Back Face - Ajustado para mostrar botón completo */}
                <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl shadow-xl overflow-hidden" style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}>
                  <div className="w-full h-full bg-white p-4 flex flex-col">
                    {/* Header con logo más grande */}
                    <div className="flex items-center mb-2">
                      <div className="w-20 h-14 bg-white rounded-xl flex items-center justify-center mr-2 overflow-hidden p-1.5 border-2 border-gray-200 shadow-sm">
                        <div className="relative w-16 h-10">
                          <Image 
                            src={card.logo} 
                            alt={`${card.title} Logo`}
                            fill
                            className="object-contain"
                            style={{ backfaceVisibility: 'hidden' }}
                          />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-bold text-[#004990] text-sm leading-tight">{card.title}</h4>
                        <p className="text-[10px] text-gray-500">{card.category}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-[11px] mb-2 leading-snug line-clamp-2">
                      {card.description}
                    </p>

                    {/* Features */}
                    <div className="mb-2 flex-1 overflow-hidden">
                      <h5 className="font-semibold text-[#004990] text-[11px] mb-1">Características Principales:</h5>
                      <ul className="space-y-0.5">
                        {card.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-[10px] text-gray-600 leading-tight">
                            <div className="w-1 h-1 bg-blue-500 rounded-full mr-1.5 flex-shrink-0 mt-1" />
                            <span className="line-clamp-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button - Más visible y siempre visible */}
                    <motion.a
                      href={card.website}
                      className={cn(
                        'w-full py-2.5 px-4 rounded-lg text-white text-xs font-bold text-center bg-gradient-to-r transition-all duration-300 shadow-lg mt-auto',
                        card.color,
                        'hover:shadow-xl hover:scale-[1.02]'
                      )}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explorar Solución →
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
          <a href="/contacto">
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Contactar Especialista
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FlipCards;
