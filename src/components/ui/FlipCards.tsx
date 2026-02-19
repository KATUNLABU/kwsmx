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
    description: 'Plataforma inteligente de gestão de equipamentos de impressão com monitoramento em tempo real e manutenção preditiva.',
    features: [
      'Monitoramento 24/7 da frota',
      'Alertas inteligentes automáticos',
      'Análise preditiva de falhas',
      'Gestão completa de suprimentos'
    ],
    website: '/kpax',
    category: 'Gestão de Equipamentos',
    color: 'from-blue-500 to-blue-700'
  },
  {
    id: 'papercut',
    title: 'PaperCut MF',
    logo: '/images/services/gestao-impressao.png',
    description: 'Solução líder mundial em gestão de impressão que reduz custos em até 30% e garante impressão segura e sustentável.',
    features: [
      'Redução de custos até 30%',
      'Impressão segura com autenticação',
      'Relatórios detalhados em tempo real',
      'Sustentabilidade e conformidade'
    ],
    website: '/papercut',
    category: 'Gestão de Impressão',
    color: 'from-green-500 to-green-700'
  },
  {
    id: 'megaged',
    title: 'MegaGED',
    logo: '/images/services/gestao-documentos.png',
    description: 'Sistema de gestão eletrônica de documentos com digitalização inteligente, workflow automatizado e conformidade LGPD.',
    features: [
      'Digitalização automática com OCR',
      'Busca inteligente instantânea',
      'Workflow documental automatizado',
      'Conformidade total com LGPD'
    ],
    website: '/megaged',
    category: 'Gestão Eletrônica de Documentos',
    color: 'from-purple-500 to-purple-700'
  },
  {
    id: 'wiki-alphabet',
    title: 'Wiki Alphabet',
    logo: '/images/services/plataforma-ensino.png',
    description: 'Plataforma de ensino digital e base de conhecimento colaborativa que centraliza informações e potencializa o aprendizado.',
    features: [
      'Base de conhecimento centralizada',
      'Colaboração em tempo real',
      'Busca semântica avançada',
      'LMS integrado para treinamentos'
    ],
    website: '/wiki-alphabet',
    category: 'Plataforma de Ensino Digital',
    color: 'from-orange-500 to-orange-700'
  },
  {
    id: 'myq',
    title: 'MyQ X',
    logo: '/images/services/gestao-impressao.png',
    description: 'Solução completa de gestão de impressão com interface personalizada e fluxos de digitalização inteligentes.',
    features: [
      'Interface personalizada por usuário',
      'Workflows de digitalização OCR',
      'Impressão segura e móvel',
      'Relatórios de custos detalhados'
    ],
    website: '/myq',
    category: 'Gestão de Impressão',
    color: 'from-blue-400 to-blue-600'
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
            Nossas <span className="text-blue-600">Soluções</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça nossa gama completa de soluções empresariais desenvolvidas 
            para otimizar e modernizar sua organização com tecnologia de ponta.
          </p>
        </motion.div>

        {/* Cards Grid - Adaptável para 5 cards */}
        <div className="flex flex-wrap justify-center gap-8">
          {cardsData.map((card, index) => (
            <motion.div
              key={card.id}
              className="relative h-80 w-full sm:w-[320px] perspective-1000"
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
                      <h5 className="font-semibold text-[#004990] text-[11px] mb-1">Recursos Principais:</h5>
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
                      Explorar Solução →
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
          <a href="/contato">
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
