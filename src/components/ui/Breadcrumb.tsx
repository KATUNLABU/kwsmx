'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Typography from './Typography';

interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
  current?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode | string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  maxItems?: number;
}

export default function Breadcrumb({
  items,
  separator = '/',
  size = 'md',
  className,
  maxItems = 5
}: BreadcrumbProps) {
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  // Truncar items si excede maxItems
  const displayItems = items.length > maxItems 
    ? [
        items[0],
        { label: '...', href: undefined },
        ...items.slice(-(maxItems - 2))
      ]
    : items;

  return (
    <motion.nav 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      aria-label="Breadcrumb" 
      className={cn('flex items-center space-x-2', sizeStyles[size], className)}
    >
      <ol className="flex items-center space-x-2">
        {displayItems.map((item, index) => {
          const isLast = index === displayItems.length - 1;
          const isTruncated = item.label === '...';
          
          return (
            <motion.li 
              key={index} 
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
            >
              {/* Elemento del breadcrumb */}
              <div className="flex items-center space-x-2">
                {item.icon && (
                  <span className="text-gray-500">
                    {item.icon}
                  </span>
                )}
                
                {isTruncated ? (
                  <span className="text-gray-400">...</span>
                ) : item.href && !isLast ? (
                  <Link 
                    href={item.href}
                    className={cn(
                      'hover:text-blue-600 transition-colors',
                      'text-gray-600 hover:underline'
                    )}
                  >
                    <Typography variant="span" color="secondary">
                      {item.label}
                    </Typography>
                  </Link>
                ) : (
                  <Typography 
                    variant="span" 
                    color={isLast ? 'primary' : 'secondary'}
                    weight={isLast ? 'medium' : 'normal'}
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </Typography>
                )}
              </div>
              
              {/* Separador */}
              {!isLast && (
                <span className="text-gray-400 select-none">
                  {typeof separator === 'string' ? (
                    <Typography variant="span" color="muted">
                      {separator}
                    </Typography>
                  ) : (
                    separator
                  )}
                </span>
              )}
            </motion.li>
          );
        })}
      </ol>
    </motion.nav>
  );
}
