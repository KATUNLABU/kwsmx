'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Card, Typography, Container } from '@/components';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface FeaturesBlockProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  layout?: '2-column' | '3-column' | '4-column' | 'hero-side';
  variant?: 'default' | 'cards' | 'minimal' | 'centered';
  className?: string;
  animated?: boolean;
}

export default function FeaturesBlock({
  title,
  subtitle,
  features,
  layout = '3-column',
  variant = 'default',
  className,
  animated = true
}: FeaturesBlockProps) {
  const layoutClasses = {
    '2-column': 'grid-cols-1 md:grid-cols-2',
    '3-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4-column': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
    'hero-side': 'grid-cols-1 lg:grid-cols-2'
  };

  const FeatureItem = ({ feature, index }: { feature: Feature; index: number }) => {
    const isCardVariant = variant === 'cards';
    const isCentered = variant === 'centered';

    const itemContent = (
      <div className={cn(
        'group',
        isCardVariant && 'h-full',
        isCentered && 'text-center'
      )}>
        {isCardVariant ? (
          <Card className={cn(
            'p-6 h-full transition-all duration-300 hover:shadow-lg',
            feature.highlighted && 'border-blue-500 bg-blue-50'
          )}>
            <div className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center mb-4 text-2xl',
              feature.highlighted 
                ? 'bg-blue-500 text-white' 
                : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600',
              isCentered && 'mx-auto'
            )}>
              {feature.icon}
            </div>
            <Typography variant="h5" className="mb-3 group-hover:text-blue-600 transition-colors">
              {feature.title}
            </Typography>
            <Typography variant="p" color="secondary" className="leading-relaxed">
              {feature.description}
            </Typography>
          </Card>
        ) : (
          <div className="space-y-4">
            <div className={cn(
              'w-12 h-12 rounded-lg flex items-center justify-center text-2xl',
              variant === 'minimal' 
                ? 'bg-transparent text-blue-600' 
                : 'bg-blue-100 text-blue-600',
              isCentered && 'mx-auto'
            )}>
              {feature.icon}
            </div>
            <div>
              <Typography variant="h5" className="mb-3">
                {feature.title}
              </Typography>
              <Typography variant="p" color="secondary" className="leading-relaxed">
                {feature.description}
              </Typography>
            </div>
          </div>
        )}
      </div>
    );

    if (!animated) {
      return itemContent;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {itemContent}
      </motion.div>
    );
  };

  if (layout === 'hero-side') {
    const heroFeature = features[0];
    const sideFeatures = features.slice(1);

    return (
      <Container className={className}>
        {(title || subtitle) && (
          <motion.div
            initial={animated ? { opacity: 0, y: 20 } : {}}
            whileInView={animated ? { opacity: 1, y: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            {title && (
              <Typography variant="h2" className="mb-4">
                {title}
              </Typography>
            )}
            {subtitle && (
              <Typography variant="lead" color="secondary" className="max-w-3xl mx-auto">
                {subtitle}
              </Typography>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Feature */}
          <motion.div
            initial={animated ? { opacity: 0, x: -20 } : {}}
            whileInView={animated ? { opacity: 1, x: 0 } : {}}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center lg:text-left">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-3xl text-white mb-6 mx-auto lg:mx-0">
                {heroFeature.icon}
              </div>
              <Typography variant="h3" className="mb-4">
                {heroFeature.title}
              </Typography>
              <Typography variant="lead" color="secondary" className="mb-6">
                {heroFeature.description}
              </Typography>
            </div>
          </motion.div>

          {/* Side Features */}
          <div className="space-y-6">
            {sideFeatures.map((feature, index) => (
              <FeatureItem key={index} feature={feature} index={index + 1} />
            ))}
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container className={className}>
      {(title || subtitle) && (
        <motion.div
          initial={animated ? { opacity: 0, y: 20 } : {}}
          whileInView={animated ? { opacity: 1, y: 0 } : {}}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          {title && (
            <Typography variant="h2" className="mb-4">
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="lead" color="secondary" className="max-w-3xl mx-auto">
              {subtitle}
            </Typography>
          )}
        </motion.div>
      )}

      <div className={cn('grid gap-8', layoutClasses[layout])}>
        {features.map((feature, index) => (
          <FeatureItem key={index} feature={feature} index={index} />
        ))}
      </div>
    </Container>
  );
}
