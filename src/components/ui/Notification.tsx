'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface NotificationProps {
  show: boolean;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  onClose?: () => void;
  duration?: number;
}

const Notification: React.FC<NotificationProps> = ({
  show,
  type,
  message,
  onClose,
  duration = 5000
}) => {
  React.useEffect(() => {
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        onClose?.();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  // SVG Icons
  const icons = {
    success: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    )
  };

  const typeConfig = {
    success: {
      bg: 'bg-green-500',
      icon: icons.success,
      title: 'Sucesso!'
    },
    error: {
      bg: 'bg-red-500',
      icon: icons.error,
      title: 'Erro!'
    },
    info: {
      bg: 'bg-blue-500',
      icon: icons.info,
      title: 'Informação'
    },
    warning: {
      bg: 'bg-yellow-500',
      icon: icons.warning,
      title: 'Atenção'
    }
  };

  const config = typeConfig[type];

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          className="fixed bottom-6 left-6 z-[10000] max-w-md"
        >
          <div
            className={cn(
              'flex items-start gap-4 p-5 rounded-xl shadow-2xl backdrop-blur-md',
              'border border-white/20',
              config.bg,
              'text-white'
            )}
          >
            {/* Icono */}
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              {config.icon}
            </div>

            {/* Contenido */}
            <div className="flex-1 min-w-0 pt-1">
              <h4 className="text-sm font-bold mb-1 text-white">
                {config.title}
              </h4>
              <p className="text-sm text-white/90 leading-relaxed">
                {message}
              </p>
            </div>

            {/* Botón cerrar */}
            {onClose && (
              <button
                onClick={onClose}
                className="flex-shrink-0 w-6 h-6 rounded-full hover:bg-white/20 transition-colors flex items-center justify-center"
                aria-label="Fechar"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>

          {/* Barra de progreso */}
          {duration > 0 && (
            <motion.div
              initial={{ scaleX: 1 }}
              animate={{ scaleX: 0 }}
              transition={{ duration: duration / 1000, ease: 'linear' }}
              className="h-1 bg-white/30 rounded-b-xl origin-left"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Notification;
