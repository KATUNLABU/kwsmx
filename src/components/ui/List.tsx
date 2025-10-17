'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Typography from './Typography';

interface ListItem {
  id?: string | number;
  content: string | React.ReactNode;
  icon?: React.ReactNode;
  highlighted?: boolean;
}

interface ListProps {
  items: ListItem[];
  variant?: 'bullet' | 'numbered' | 'check' | 'arrow' | 'custom';
  size?: 'sm' | 'md' | 'lg';
  spacing?: 'tight' | 'normal' | 'loose';
  className?: string;
  animated?: boolean;
  title?: string;
}

const defaultIcons = {
  bullet: '•',
  numbered: (index: number) => `${index + 1}.`,
  check: '✓',
  arrow: '→',
  custom: ''
};

export default function List({
  items,
  variant = 'bullet',
  size = 'md',
  spacing = 'normal',
  className,
  animated = true,
  title
}: ListProps) {
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const spacingStyles = {
    tight: 'space-y-1',
    normal: 'space-y-3',
    loose: 'space-y-6'
  };

  const iconStyles = {
    bullet: 'text-blue-500',
    numbered: 'text-blue-600 font-semibold',
    check: 'text-green-500',
    arrow: 'text-blue-500',
    custom: ''
  };

  const containerClasses = cn(
    spacingStyles[spacing],
    className
  );

  return (
    <div className={containerClasses}>
      {title && (
        <Typography variant="h4" className="mb-6">
          {title}
        </Typography>
      )}
      
      <ul className={cn('list-none', spacingStyles[spacing])}>
        {items.map((item, index) => {
          const itemContent = (
            <li
              key={item.id || index}
              className={cn(
                'flex items-start space-x-3',
                sizeStyles[size],
                item.highlighted && 'bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500'
              )}
            >
              {/* Icono */}
              <span className={cn(
                'flex-shrink-0 mt-1',
                iconStyles[variant],
                variant === 'numbered' && 'min-w-[24px]'
              )}>
                {item.icon || (
                  variant === 'numbered' 
                    ? defaultIcons.numbered(index)
                    : defaultIcons[variant]
                )}
              </span>
              
              {/* Contenido */}
              <div className="flex-1">
                {typeof item.content === 'string' ? (
                  <Typography 
                    variant="p" 
                    className={cn(
                      'leading-relaxed',
                      item.highlighted && 'font-medium'
                    )}
                  >
                    {item.content}
                  </Typography>
                ) : (
                  item.content
                )}
              </div>
            </li>
          );

          if (!animated) {
            return itemContent;
          }

          return (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1 
              }}
            >
              {itemContent}
            </motion.div>
          );
        })}
      </ul>
    </div>
  );
}
