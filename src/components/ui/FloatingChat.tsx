'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface FloatingChatProps {
  initialDelay?: number;
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left';
  primaryColor?: string;
  className?: string;
  onQuoteRequest?: () => void;
}

const FloatingChat: React.FC<FloatingChatProps> = ({
  initialDelay = 8,
  position = 'bottom-right',
  primaryColor = '#3b82f6',
  className,
  onQuoteRequest
}) => {
  const [showNotification, setShowNotification] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Posición del chat
  const positionClasses = {
    'bottom-right': 'bottom-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-right': 'top-6 right-6',
    'top-left': 'top-6 left-6'
  };

  // Mostrar notificación después del delay inicial
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(true);
      // Auto-ocultar la notificación después de 4 segundos
      setTimeout(() => setShowNotification(false), 4000);
    }, initialDelay * 1000);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  const handleClick = () => {
    onQuoteRequest?.();
    // Aquí puedes agregar lógica adicional como abrir un modal, redirigir, etc.
    console.log('Solicitud de cotización');
  };

  return (
    <div className={cn('fixed z-50', positionClasses[position], className)}>
      {/* Notificación pequeña tipo toast */}
      <AnimatePresence>
        {showNotification && !isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: position.includes('right') ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: position.includes('right') ? 20 : -20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="mb-3 bg-white rounded-lg shadow-lg border border-gray-200 px-3 py-2 max-w-48"
            style={{ 
              transformOrigin: position.includes('right') ? 'bottom right' : 'bottom left'
            }}
          >
            <div className="flex items-center space-x-2">
              <div 
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: primaryColor }}
              />
              <p className="text-sm text-gray-700 font-medium">
                Solicitar Cotización
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Burbuja flotante simplificada */}
      <motion.button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-14 h-14 rounded-full text-white shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center relative overflow-hidden"
        style={{ backgroundColor: primaryColor }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ 
          y: [0, -5, 0], 
          boxShadow: [
            '0 10px 30px rgba(0,0,0,0.2)', 
            '0 15px 40px rgba(0,0,0,0.3)', 
            '0 10px 30px rgba(0,0,0,0.2)'
          ]
        }}
        transition={{ 
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {/* Patrón de fondo */}
        <div className="absolute inset-0 opacity-20">
          <svg width="100%" height="100%" viewBox="0 0 100 100">
            <defs>
              <pattern id="bubble-pattern" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                <circle cx="7.5" cy="7.5" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#bubble-pattern)" />
          </svg>
        </div>

        <motion.svg 
          className="w-6 h-6 relative z-10" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
        </motion.svg>

        {/* Indicador de notificación activa */}
        {showNotification && (
          <motion.div
            className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <motion.div
              className="w-2 h-2 bg-white rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        )}
      </motion.button>
    </div>
  );
};

export default FloatingChat;
