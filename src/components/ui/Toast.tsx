'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
  position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
  onClose?: () => void;
}

interface ToastContextType {
  showToast: (message: string, type?: ToastProps['type'], duration?: number) => void;
}

export const ToastContext = React.createContext<ToastContextType | null>(null);

export const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};

interface ToastItem extends ToastProps {
  id: string;
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = (message: string, type: ToastProps['type'] = 'info', duration: number = 4000) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: ToastItem = { id, message, type, duration };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id));
    }, duration);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
};

interface ToastContainerProps {
  toasts: ToastItem[];
  onRemove: (id: string) => void;
  position?: ToastProps['position'];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ 
  toasts, 
  onRemove, 
  position = 'top-right' 
}) => {
  const positionClasses = {
    'top-right': 'top-40 right-4',
    'top-left': 'top-40 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4',
    'top-center': 'top-40 left-1/2 transform -translate-x-1/2',
    'bottom-center': 'bottom-4 left-1/2 transform -translate-x-1/2'
  };

  return (
    <div className={cn('fixed z-[10000] flex flex-col gap-2 max-w-sm', positionClasses[position])}>
      <AnimatePresence>
        {toasts.map((toast) => (
          <Toast
            key={toast.id}
            {...toast}
            onClose={() => onRemove(toast.id)}
          />
        ))}
      </AnimatePresence>
    </div>
  );
};

const Toast: React.FC<ToastProps & { onClose: () => void }> = ({
  message,
  type = 'info',
  onClose
}) => {
  const typeStyles = {
    success: {
      bg: 'bg-green-50 border-green-200',
      icon: '✅',
      iconBg: 'bg-green-100',
      text: 'text-green-800'
    },
    error: {
      bg: 'bg-red-50 border-red-200',
      icon: '❌',
      iconBg: 'bg-red-100',
      text: 'text-red-800'
    },
    warning: {
      bg: 'bg-yellow-50 border-yellow-200',
      icon: '⚠️',
      iconBg: 'bg-yellow-100',
      text: 'text-yellow-800'
    },
    info: {
      bg: 'bg-blue-50 border-blue-200',
      icon: 'ℹ️',
      iconBg: 'bg-blue-100',
      text: 'text-blue-800'
    }
  };

  const style = typeStyles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={cn(
        'flex items-center gap-3 p-4 rounded-lg border shadow-lg backdrop-blur-sm max-w-sm',
        style.bg
      )}
    >
      <div className={cn('w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0', style.iconBg)}>
        <span className="text-sm">{style.icon}</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <p className={cn('text-sm font-medium', style.text)}>
          {message}
        </p>
      </div>
      
      <button
        onClick={onClose}
        className={cn(
          'flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors',
          style.text
        )}
      >
        <span className="text-xs">×</span>
      </button>
    </motion.div>
  );
};

export default Toast;
