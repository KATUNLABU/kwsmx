'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import { Card, Typography, Container, Button, Badge } from '@/components';

interface PricingFeature {
  text: string;
  included: boolean;
  highlighted?: boolean;
}

interface PricingPlan {
  name: string;
  description?: string;
  price: number | string;
  period?: string;
  originalPrice?: number;
  currency?: string;
  features: PricingFeature[];
  buttonText?: string;
  buttonVariant?: 'primary' | 'secondary' | 'outline';
  popular?: boolean;
  highlighted?: boolean;
  badge?: string;
}

interface PricingBlockProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  layout?: '2-column' | '3-column' | '4-column';
  variant?: 'cards' | 'minimal' | 'comparison';
  className?: string;
  animated?: boolean;
  billingToggle?: boolean;
  onPlanSelect?: (plan: PricingPlan) => void;
}

export default function PricingBlock({
  title,
  subtitle,
  plans,
  layout = '3-column',
  variant = 'cards',
  className,
  animated = true,
  billingToggle = false,
  onPlanSelect
}: PricingBlockProps) {
  const [isAnnual, setIsAnnual] = React.useState(false);

  const layoutClasses = {
    '2-column': 'grid-cols-1 md:grid-cols-2',
    '3-column': 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    '4-column': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  };

  const formatPrice = (price: number | string, plan: PricingPlan) => {
    if (typeof price === 'string') return price;
    
    const finalPrice = isAnnual && typeof price === 'number' ? price * 10 : price; // 10 meses por 12
    return `${plan.currency || '$'}${finalPrice}`;
  };

  const PricingCard = ({ plan, index }: { plan: PricingPlan; index: number }) => {
    const cardContent = (
      <div className={cn(
        'relative',
        variant === 'cards' && 'h-full'
      )}>
        {variant === 'cards' ? (
          <Card className={cn(
            'p-8 h-full flex flex-col transition-all duration-300 hover:shadow-xl',
            plan.highlighted && 'ring-2 ring-blue-500 scale-105 z-10',
            plan.popular && 'border-blue-500 bg-gradient-to-b from-blue-50 to-white'
          )}>
            {/* Badge */}
            {(plan.popular || plan.badge) && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <Badge variant="primary" className="px-4 py-1">
                  {plan.badge || 'Más Popular'}
                </Badge>
              </div>
            )}

            {/* Header */}
            <div className="text-center mb-8">
              <Typography variant="h4" className="mb-2">
                {plan.name}
              </Typography>
              {plan.description && (
                <Typography variant="p" color="secondary" className="mb-6">
                  {plan.description}
                </Typography>
              )}
              
              {/* Price */}
              <div className="mb-2">
                <div className="flex items-baseline justify-center">
                  <Typography variant="h1" className="text-4xl font-bold">
                    {formatPrice(plan.price, plan)}
                  </Typography>
                  {plan.period && (
                    <Typography variant="p" color="secondary" className="ml-2">
                      /{plan.period}
                    </Typography>
                  )}
                </div>
                {plan.originalPrice && (
                  <div className="flex justify-center mt-1">
                    <Typography variant="small" color="muted" className="line-through">
                      {plan.currency || '$'}{plan.originalPrice}
                    </Typography>
                  </div>
                )}
                {billingToggle && isAnnual && (
                  <Badge variant="success" size="sm" className="mt-2">
                    Ahorra 20%
                  </Badge>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="flex-1 mb-8">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <div className={cn(
                      'flex-shrink-0 w-5 h-5 mt-0.5 mr-3 rounded-full flex items-center justify-center',
                      feature.included 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    )}>
                      {feature.included ? (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      ) : (
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <Typography 
                      variant="p" 
                      className={cn(
                        'text-sm',
                        !feature.included && 'text-gray-400 line-through',
                        feature.highlighted && 'font-medium text-blue-600'
                      )}
                    >
                      {feature.text}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button */}
            <Button
              variant={plan.buttonVariant || (plan.highlighted ? 'primary' : 'outline')}
              className="w-full"
              onClick={() => onPlanSelect?.(plan)}
            >
              {plan.buttonText || 'Elegir Plan'}
            </Button>
          </Card>
        ) : variant === 'minimal' ? (
          <div className="text-center p-6 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
            <Typography variant="h5" className="mb-2">
              {plan.name}
            </Typography>
            <div className="mb-4">
              <Typography variant="h2" className="text-3xl font-bold">
                {formatPrice(plan.price, plan)}
              </Typography>
              {plan.period && (
                <Typography variant="small" color="secondary">
                  /{plan.period}
                </Typography>
              )}
            </div>
            <Button
              variant={plan.highlighted ? 'primary' : 'outline'}
              size="sm"
              onClick={() => onPlanSelect?.(plan)}
            >
              {plan.buttonText || 'Elegir'}
            </Button>
          </div>
        ) : (
          // Comparison table variant
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-gray-50 p-6 text-center">
              <Typography variant="h5" className="mb-2">
                {plan.name}
              </Typography>
              <Typography variant="h3" className="font-bold">
                {formatPrice(plan.price, plan)}
              </Typography>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-sm">{feature.text}</span>
                    <div className={cn(
                      'w-5 h-5 rounded-full flex items-center justify-center',
                      feature.included ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                    )}>
                      {feature.included ? '✓' : '✗'}
                    </div>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.highlighted ? 'primary' : 'outline'}
                className="w-full mt-6"
                onClick={() => onPlanSelect?.(plan)}
              >
                {plan.buttonText || 'Elegir Plan'}
              </Button>
            </div>
          </div>
        )}
      </div>
    );

    if (!animated) {
      return cardContent;
    }

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
      >
        {cardContent}
      </motion.div>
    );
  };

  return (
    <Container className={className}>
      {(title || subtitle || billingToggle) && (
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
            <Typography variant="lead" color="secondary" className="max-w-3xl mx-auto mb-8">
              {subtitle}
            </Typography>
          )}
          
          {billingToggle && (
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Typography variant="p" className={cn(!isAnnual && 'font-semibold')}>
                Mensual
              </Typography>
              <button
                onClick={() => setIsAnnual(!isAnnual)}
                className={cn(
                  'relative inline-flex h-6 w-11 items-center rounded-full transition-colors',
                  isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                )}
              >
                <span
                  className={cn(
                    'inline-block h-4 w-4 transform rounded-full bg-white transition-transform',
                    isAnnual ? 'translate-x-6' : 'translate-x-1'
                  )}
                />
              </button>
              <div className="flex items-center space-x-2">
                <Typography variant="p" className={cn(isAnnual && 'font-semibold')}>
                  Anual
                </Typography>
                <Badge variant="success" size="sm">
                  -20%
                </Badge>
              </div>
            </div>
          )}
        </motion.div>
      )}

      <div className={cn('grid gap-8', layoutClasses[layout])}>
        {plans.map((plan, index) => (
          <PricingCard key={index} plan={plan} index={index} />
        ))}
      </div>
    </Container>
  );
}
