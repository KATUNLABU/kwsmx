'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Typography from './Typography';
import { Card } from '@/components';

interface QuoteProps {
  quote: string;
  author?: string;
  authorTitle?: string;
  authorImage?: string;
  variant?: 'default' | 'centered' | 'card' | 'minimal';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export default function Quote({
  quote,
  author,
  authorTitle,
  authorImage,
  variant = 'default',
  size = 'md',
  className,
  animated = true
}: QuoteProps) {
  const sizeStyles = {
    sm: {
      quote: 'text-lg',
      icon: 'w-6 h-6',
      author: 'text-sm'
    },
    md: {
      quote: 'text-xl',
      icon: 'w-8 h-8', 
      author: 'text-base'
    },
    lg: {
      quote: 'text-2xl',
      icon: 'w-10 h-10',
      author: 'text-lg'
    }
  };

  const QuoteIcon = () => (
    <svg 
      className={cn(sizeStyles[size].icon, 'text-blue-500 opacity-50')} 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
    </svg>
  );

  const AuthorInfo = () => {
    if (!author) return null;

    return (
      <div className={cn(
        'flex items-center space-x-3 mt-6',
        variant === 'centered' && 'justify-center'
      )}>
        {authorImage && (
          <img
            src={authorImage}
            alt={author}
            className="w-12 h-12 rounded-full object-cover"
          />
        )}
        <div className={variant === 'centered' ? 'text-center' : ''}>
          <Typography 
            variant="span" 
            weight="semibold" 
            className={sizeStyles[size].author}
          >
            {author}
          </Typography>
          {authorTitle && (
            <Typography 
              variant="small" 
              color="muted" 
              className="block"
            >
              {authorTitle}
            </Typography>
          )}
        </div>
      </div>
    );
  };

  const QuoteContent = () => (
    <div className={cn(
      variant === 'centered' && 'text-center',
      variant === 'minimal' && 'border-l-4 border-blue-500 pl-6'
    )}>
      {variant !== 'minimal' && (
        <QuoteIcon />
      )}
      
      <Typography 
        variant="blockquote"
        className={cn(
          sizeStyles[size].quote,
          'leading-relaxed text-gray-700 mb-2',
          variant === 'minimal' && 'border-l-0 pl-0 italic'
        )}
      >
        "{quote}"
      </Typography>
      
      <AuthorInfo />
    </div>
  );

  const content = variant === 'card' ? (
    <Card className="p-8">
      <QuoteContent />
    </Card>
  ) : (
    <QuoteContent />
  );

  const containerClasses = cn(
    'max-w-4xl',
    variant === 'centered' && 'mx-auto',
    className
  );

  if (!animated) {
    return <div className={containerClasses}>{content}</div>;
  }

  return (
    <motion.div
      className={containerClasses}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {content}
    </motion.div>
  );
}
