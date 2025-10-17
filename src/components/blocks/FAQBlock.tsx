'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../ui/Card';
import Typography from '../ui/Typography';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';

type FAQItem = {
  id: string;
  question: string;
  answer: string | React.ReactNode;
  category?: string;
  featured?: boolean;
};

type FAQCategory = {
  id: string;
  name: string;
  color?: string;
};

type FAQBlockProps = {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  categories?: FAQCategory[];
  variant?: 'accordion' | 'cards' | 'minimal';
  showSearch?: boolean;
  allowMultipleOpen?: boolean;
  maxHeight?: string;
  className?: string;
};

export default function FAQBlock({
  title = 'Preguntas Frecuentes',
  subtitle,
  items,
  categories = [],
  variant = 'accordion',
  showSearch = true,
  allowMultipleOpen = false,
  maxHeight,
  className
}: FAQBlockProps) {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      if (!allowMultipleOpen) {
        newOpenItems.clear();
      }
      newOpenItems.add(index);
    }
    
    setOpenItems(newOpenItems);
  };

  const filteredItems = items.filter(item => {
    const matchesCategory = selectedCategory === 'all' || 
                           !item.category || 
                           item.category === selectedCategory;
    
    const matchesSearch = !searchTerm ||
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (typeof item.answer === 'string' && item.answer.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesCategory && matchesSearch;
  });

  const renderFAQItem = (item: FAQItem, index: number) => {
    const isOpen = openItems.has(index);

    if (variant === 'cards') {
      return (
        <div 
          key={item.id}
          className="cursor-pointer"
          onClick={() => toggleItem(index)}
        >
          <Card className={cn(
            'p-6 h-full transition-all duration-300 hover:shadow-lg',
            item.featured && 'border-blue-500 bg-blue-50',
            isOpen && 'shadow-lg'
          )}>
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <Typography variant="h6" className="mb-3 group-hover:text-blue-600 transition-colors">
                  {item.question}
                </Typography>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {typeof item.answer === 'string' ? (
                        <Typography variant="p" color="secondary" className="leading-relaxed">
                          {item.answer}
                        </Typography>
                      ) : (
                        item.answer
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <div className={cn(
                'ml-4 flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full transition-all duration-300',
                isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-gray-200 text-gray-500'
              )}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      );
    }

    if (variant === 'minimal') {
      return (
        <div 
          key={item.id}
          className="py-4 border-b border-gray-200 cursor-pointer group"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-center justify-between">
            <Typography variant="h6" className="group-hover:text-blue-600 transition-colors">
              {item.question}
            </Typography>
            <div className={cn(
              'ml-4 flex-shrink-0 transition-transform duration-300',
              isOpen && 'rotate-180'
            )}>
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-4"
              >
                {typeof item.answer === 'string' ? (
                  <Typography variant="p" color="secondary" className="leading-relaxed">
                    {item.answer}
                  </Typography>
                ) : (
                  item.answer
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    // Accordion variant (default)
    return (
      <Card key={item.id} className={cn(
        'mb-4 overflow-hidden transition-all duration-300',
        isOpen && 'shadow-lg',
        item.featured && 'border-blue-500'
      )}>
        <button
          className="w-full p-6 text-left hover:bg-gray-50 transition-colors"
          onClick={() => toggleItem(index)}
        >
          <div className="flex items-center justify-between">
            <Typography variant="h6" className="flex-1 pr-4">
              {item.question}
            </Typography>
            <div className={cn(
              'flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300',
              isOpen ? 'bg-blue-500 text-white rotate-180' : 'bg-gray-100 text-gray-500'
            )}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border-t border-gray-200"
            >
              <div className="p-6 pt-4">
                {typeof item.answer === 'string' ? (
                  <Typography variant="p" color="secondary" className="leading-relaxed">
                    {item.answer}
                  </Typography>
                ) : (
                  item.answer
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    );
  };

  return (
    <Container size="lg" className={cn('py-16', className)}>
      {/* Header */}
      <div className="text-center mb-12">
        <Typography variant="h2" className="mb-4">
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="lead" color="secondary" className="max-w-2xl mx-auto">
            {subtitle}
          </Typography>
        )}
      </div>

      {/* Search and Filters */}
      {(showSearch || categories.length > 0) && (
        <div className="mb-8 space-y-4">
          {showSearch && (
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Buscar preguntas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          )}

          {categories.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={cn(
                  'px-4 py-2 rounded-full text-sm font-medium transition-all',
                  selectedCategory === 'all'
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                )}
              >
                Todas
              </button>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-all',
                    selectedCategory === category.id
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  )}
                  style={{
                    backgroundColor: selectedCategory === category.id && category.color ? category.color : undefined
                  }}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* FAQ Items */}
      <div className={cn(
        variant === 'cards' ? 'grid grid-cols-1 md:grid-cols-2 gap-6' : 'max-w-3xl mx-auto',
        maxHeight && 'overflow-y-auto',
      )} style={{ maxHeight }}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => renderFAQItem(item, index))
        ) : (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.462-.688-6.264-1.875C7.668 11.496 9.75 10 12 10s4.332 1.496 6.264 3.125C16.462 14.312 14.34 15 12 15z" />
            </svg>
            <Typography variant="h6" color="secondary" className="mb-2">
              No se encontraron preguntas
            </Typography>
            <Typography variant="p" color="secondary">
              Intenta con otros términos de búsqueda o selecciona una categoría diferente.
            </Typography>
          </div>
        )}
      </div>

      {/* Stats */}
      {filteredItems.length > 0 && (
        <div className="text-center mt-8 pt-8 border-t border-gray-200">
          <Typography variant="small" color="secondary">
            Mostrando {filteredItems.length} de {items.length} preguntas
          </Typography>
        </div>
      )}
    </Container>
  );
}
