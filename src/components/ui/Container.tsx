'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  className?: string;
  as?: React.ElementType;
}

export default function Container({
  children,
  size = 'lg',
  padding = 'md',
  centered = true,
  className,
  as: Component = 'div'
}: ContainerProps) {
  const sizeStyles = {
    sm: 'max-w-2xl',      // ~672px
    md: 'max-w-4xl',      // ~896px  
    lg: 'max-w-6xl',      // ~1152px
    xl: 'max-w-7xl',      // ~1280px
    full: 'max-w-full'    // 100%
  };

  const paddingStyles = {
    none: '',
    sm: 'px-4 py-6',
    md: 'px-6 py-8', 
    lg: 'px-8 py-12',
    xl: 'px-12 py-16'
  };

  const classes = cn(
    'w-full',
    sizeStyles[size],
    paddingStyles[padding],
    centered && 'mx-auto',
    className
  );

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}
