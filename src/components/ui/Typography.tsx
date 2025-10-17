'use client';

import React from 'react';
import { cn } from '@/utils/cn';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'small' | 'lead' | 'blockquote' | 'code';
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
  weight?: 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  color?: 'primary' | 'secondary' | 'muted' | 'accent' | 'success' | 'warning' | 'error';
  align?: 'left' | 'center' | 'right' | 'justify';
  className?: string;
  as?: React.ElementType;
}

const variantStyles = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight',
  h2: 'text-3xl md:text-4xl lg:text-5xl font-bold leading-tight',
  h3: 'text-2xl md:text-3xl lg:text-4xl font-bold leading-tight',
  h4: 'text-xl md:text-2xl lg:text-3xl font-semibold leading-tight',
  h5: 'text-lg md:text-xl lg:text-2xl font-semibold leading-tight',
  h6: 'text-base md:text-lg lg:text-xl font-semibold leading-tight',
  p: 'text-base leading-relaxed',
  span: 'text-base',
  small: 'text-sm',
  lead: 'text-lg md:text-xl leading-relaxed font-light',
  blockquote: 'text-lg md:text-xl leading-relaxed border-l-4 border-gray-300 pl-6 italic',
  code: 'text-sm font-mono bg-gray-100 px-2 py-1 rounded'
};

const sizeStyles = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl'
};

const weightStyles = {
  light: 'font-light',
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
  extrabold: 'font-extrabold'
};

const colorStyles = {
  primary: 'text-[#004990]',
  secondary: 'text-gray-700',
  muted: 'text-gray-500',
  accent: 'text-blue-600',
  success: 'text-green-600',
  warning: 'text-yellow-600',
  error: 'text-red-600'
};

const alignStyles = {
  left: 'text-left',
  center: 'text-center',
  right: 'text-right',
  justify: 'text-justify'
};

export default function Typography({
  children,
  variant = 'p',
  size,
  weight,
  color = 'primary',
  align = 'left',
  className,
  as,
  ...props
}: TypographyProps) {
  const getComponent = () => {
    if (as) return as;
    if (variant === 'lead') return 'p';
    if (variant === 'blockquote') return 'blockquote';
    if (variant === 'code') return 'code';
    return variant;
  };

  const Component = getComponent();

  const classes = cn(
    variantStyles[variant],
    size && sizeStyles[size],
    weight && weightStyles[weight],
    colorStyles[color],
    alignStyles[align],
    className
  );

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}
