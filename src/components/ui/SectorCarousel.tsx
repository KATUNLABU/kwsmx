'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components';

interface SectorItem {
  id: number;
  title: string;
  description: string;
  image: string;
  color: string;
}

interface SectorCarouselProps {
  items?: SectorItem[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const defaultItems: SectorItem[] = [
  {
    id: 1,
    title: "Tecnología",
    description: "Soluciones innovadoras para el futuro digital",
    image: "/foto1.JPG",
    color: "from-blue-500 to-purple-600"
  },
  {
    id: 2,
    title: "Diseño",
    description: "Experiencias visuales que impactan y conectan",
    image: "/foto2.png",
    color: "from-green-500 to-teal-600"
  },
  {
    id: 3,
    title: "Desarrollo",
    description: "Código limpio y arquitecturas escalables",
    image: "/foto 2.png",
    color: "from-orange-500 to-red-600"
  }
];

export default function SectorCarousel({ 
  items = defaultItems, 
  autoPlay = true, 
  autoPlayInterval = 5000,
  className = ""
}: SectorCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!autoPlay || isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, isHovered, items.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  return (
    <div 
      className={`relative w-full h-96 overflow-hidden rounded-xl ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <div className={`w-full h-full bg-gradient-to-r ${items[currentIndex].color} relative`}>
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${items[currentIndex].image})` }}
            />
            
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center p-8">
              <motion.h2 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl font-bold mb-4"
              >
                {items[currentIndex].title}
              </motion.h2>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl max-w-2xl"
              >
                {items[currentIndex].description}
              </motion.p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-20"
        aria-label="Anterior"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/30 transition-all duration-300 z-20"
        aria-label="Siguiente"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      {autoPlay && !isHovered && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
          <motion.div
            className="h-full bg-white"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ 
              duration: autoPlayInterval / 1000, 
              ease: "linear",
              repeat: Infinity,
              repeatType: "loop"
            }}
          />
        </div>
      )}
    </div>
  );
}
