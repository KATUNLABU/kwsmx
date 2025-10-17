'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import Typography from './Typography';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'sm' | 'md' | 'lg';
  shape?: 'rounded' | 'pill' | 'square';
  icon?: React.ReactNode;
  removable?: boolean;
  onRemove?: () => void;
  className?: string;
  outline?: boolean;
}

export default function Badge({
  children,
  variant = 'default',
  size = 'md',
  shape = 'rounded',
  icon,
  removable = false,
  onRemove,
  className,
  outline = false
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center font-medium transition-colors focus:outline-none';
  
  const sizeStyles = {
    sm: 'px-2 py-1 text-xs gap-1',
    md: 'px-3 py-1.5 text-sm gap-1.5',
    lg: 'px-4 py-2 text-base gap-2'
  };

  const shapeStyles = {
    rounded: 'rounded-md',
    pill: 'rounded-full',
    square: 'rounded-none'
  };

  const variantStyles = {
    default: outline 
      ? 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
      : 'bg-gray-100 text-gray-700 hover:bg-gray-200',
    primary: outline
      ? 'bg-white border border-blue-300 text-blue-700 hover:bg-blue-50'
      : 'bg-blue-100 text-blue-700 hover:bg-blue-200',
    secondary: outline
      ? 'bg-white border border-gray-300 text-gray-600 hover:bg-gray-50'
      : 'bg-gray-200 text-gray-600 hover:bg-gray-300',
    success: outline
      ? 'bg-white border border-green-300 text-green-700 hover:bg-green-50'
      : 'bg-green-100 text-green-700 hover:bg-green-200',
    warning: outline
      ? 'bg-white border border-yellow-300 text-yellow-700 hover:bg-yellow-50'
      : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200',
    error: outline
      ? 'bg-white border border-red-300 text-red-700 hover:bg-red-50'
      : 'bg-red-100 text-red-700 hover:bg-red-200',
    info: outline
      ? 'bg-white border border-cyan-300 text-cyan-700 hover:bg-cyan-50'
      : 'bg-cyan-100 text-cyan-700 hover:bg-cyan-200'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const classes = cn(
    baseStyles,
    sizeStyles[size],
    shapeStyles[shape],
    variantStyles[variant],
    className
  );

  return (
    <span className={classes}>
      {icon && (
        <span className={iconSizes[size]}>
          {icon}
        </span>
      )}
      
      <Typography variant="span" className="flex-1">
        {children}
      </Typography>
      
      {removable && onRemove && (
        <button
          onClick={onRemove}
          className={cn(
            'ml-1 rounded-full hover:bg-black/10 transition-colors',
            iconSizes[size],
            'flex items-center justify-center'
          )}
          aria-label="Remover"
        >
          <svg 
            className="w-3 h-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M6 18L18 6M6 6l12 12" 
            />
          </svg>
        </button>
      )}
    </span>
  );
}
