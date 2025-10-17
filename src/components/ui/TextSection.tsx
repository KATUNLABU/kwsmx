'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Typography from './Typography';
import { Card } from '@/components';

interface TextSectionProps {
  title?: string;
  subtitle?: string;
  content: string | React.ReactNode;
  alignment?: 'left' | 'center' | 'right';
  variant?: 'default' | 'highlight' | 'quote' | 'card';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  animated?: boolean;
}

export default function TextSection({
  title,
  subtitle,
  content,
  alignment = 'left',
  variant = 'default',
  size = 'md',
  className,
  animated = true
}: TextSectionProps) {
  const sizeStyles = {
    sm: {
      container: 'py-8',
      title: 'h4',
      subtitle: 'lead',
      content: 'p'
    },
    md: {
      container: 'py-12',
      title: 'h3',
      subtitle: 'lead',
      content: 'p'
    },
    lg: {
      container: 'py-16',
      title: 'h2',
      subtitle: 'lead',
      content: 'p'
    }
  };

  const alignmentClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const containerClasses = cn(
    sizeStyles[size].container,
    alignmentClass[alignment],
    className
  );

  const ContentWrapper = variant === 'card' ? Card : 'div';
  const wrapperProps = variant === 'card' ? { className: 'p-8' } : {};

  const content_element = (
    <ContentWrapper {...wrapperProps}>
      <div className={containerClasses}>
        {title && (
          <Typography 
            variant={sizeStyles[size].title as any}
            className={cn(
              "mb-4",
              variant === 'highlight' && 'text-blue-600',
              variant === 'quote' && 'text-gray-700'
            )}
            align={alignment}
          >
            {title}
          </Typography>
        )}
        
        {subtitle && (
          <Typography 
            variant={sizeStyles[size].subtitle as any}
            className="mb-6 text-gray-600"
            align={alignment}
          >
            {subtitle}
          </Typography>
        )}
        
        <div className={cn(
          variant === 'quote' && 'border-l-4 border-blue-500 pl-6 italic bg-gray-50 p-6 rounded-r-lg',
          variant === 'highlight' && 'bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500'
        )}>
          {typeof content === 'string' ? (
            <Typography 
              variant={sizeStyles[size].content as any}
              className={cn(
                "leading-relaxed",
                variant === 'quote' && 'text-gray-700 text-lg'
              )}
              align={alignment}
            >
              {content}
            </Typography>
          ) : (
            content
          )}
        </div>
      </div>
    </ContentWrapper>
  );

  if (!animated) {
    return content_element;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {content_element}
    </motion.div>
  );
}
