'use client';

import React from 'react';
import { cn } from '@/utils/cn';
import Typography from './Typography';

interface DividerProps {
  variant?: 'line' | 'dashed' | 'dotted' | 'gradient' | 'text' | 'icon';
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  color?: 'gray' | 'blue' | 'green' | 'purple';
  text?: string;
  icon?: React.ReactNode;
  className?: string;
  spacing?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Divider({
  variant = 'line',
  orientation = 'horizontal',
  size = 'md',
  color = 'gray',
  text,
  icon,
  className,
  spacing = 'md'
}: DividerProps) {
  const spacingStyles = {
    sm: orientation === 'horizontal' ? 'my-4' : 'mx-4',
    md: orientation === 'horizontal' ? 'my-6' : 'mx-6', 
    lg: orientation === 'horizontal' ? 'my-8' : 'mx-8',
    xl: orientation === 'horizontal' ? 'my-12' : 'mx-12'
  };

  const sizeStyles = {
    sm: orientation === 'horizontal' ? 'h-px' : 'w-px h-16',
    md: orientation === 'horizontal' ? 'h-0.5' : 'w-0.5 h-24',
    lg: orientation === 'horizontal' ? 'h-1' : 'w-1 h-32'
  };

  const colorStyles = {
    gray: 'border-gray-300',
    blue: 'border-blue-300',
    green: 'border-green-300',
    purple: 'border-purple-300'
  };

  const gradientStyles = {
    gray: 'bg-gradient-to-r from-transparent via-gray-300 to-transparent',
    blue: 'bg-gradient-to-r from-transparent via-blue-300 to-transparent',
    green: 'bg-gradient-to-r from-transparent via-green-300 to-transparent',
    purple: 'bg-gradient-to-r from-transparent via-purple-300 to-transparent'
  };

  const baseClasses = cn(
    spacingStyles[spacing],
    className
  );

  // Línea simple
  if (variant === 'line') {
    return (
      <div 
        className={cn(
          baseClasses,
          sizeStyles[size],
          `bg-${color}-300`,
          orientation === 'horizontal' ? 'w-full' : 'h-full'
        )}
      />
    );
  }

  // Línea discontinua
  if (variant === 'dashed') {
    return (
      <div 
        className={cn(
          baseClasses,
          orientation === 'horizontal' ? 'w-full border-t-2' : 'h-full border-l-2',
          'border-dashed',
          colorStyles[color]
        )}
      />
    );
  }

  // Línea punteada
  if (variant === 'dotted') {
    return (
      <div 
        className={cn(
          baseClasses,
          orientation === 'horizontal' ? 'w-full border-t-2' : 'h-full border-l-2',
          'border-dotted',
          colorStyles[color]
        )}
      />
    );
  }

  // Gradiente
  if (variant === 'gradient') {
    return (
      <div 
        className={cn(
          baseClasses,
          sizeStyles[size],
          gradientStyles[color],
          orientation === 'horizontal' ? 'w-full' : 'h-full'
        )}
      />
    );
  }

  // Con texto
  if (variant === 'text' && text) {
    return (
      <div className={cn(baseClasses, 'relative flex items-center')}>
        <div className={cn('flex-grow', sizeStyles[size], `bg-${color}-300`)} />
        <span className={cn(
          'px-4 bg-white',
          `text-${color}-600`,
          'font-medium text-sm'
        )}>
          <Typography variant="small" color="muted">
            {text}
          </Typography>
        </span>
        <div className={cn('flex-grow', sizeStyles[size], `bg-${color}-300`)} />
      </div>
    );
  }

  // Con icono
  if (variant === 'icon' && icon) {
    return (
      <div className={cn(baseClasses, 'relative flex items-center')}>
        <div className={cn('flex-grow', sizeStyles[size], `bg-${color}-300`)} />
        <span className={cn(
          'px-4 bg-white',
          `text-${color}-600`,
          'flex items-center justify-center'
        )}>
          {icon}
        </span>
        <div className={cn('flex-grow', sizeStyles[size], `bg-${color}-300`)} />
      </div>
    );
  }

  // Fallback a línea simple
  return (
    <div 
      className={cn(
        baseClasses,
        sizeStyles[size],
        `bg-${color}-300`,
        orientation === 'horizontal' ? 'w-full' : 'h-full'
      )}
    />
  );
}
