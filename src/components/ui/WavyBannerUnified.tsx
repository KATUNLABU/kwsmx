'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@/utils/cn';

export interface WavyBannerProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  
  // Background Options
  backgroundType?: 'gradient' | 'image' | 'solid';
  backgroundImage?: string;
  backgroundColor?: string;
  gradientColors?: {
    from: string;
    via?: string;
    to: string;
  };
  
  // Image Effects (when using image background)
  imageFilter?: 'normal' | 'grayscale' | 'sepia' | 'blue-tint' | 'purple-tint';
  customFilter?: string;
  hoverEffect?: boolean;
  
  // Wave Configuration
  waveIntensity?: 'subtle' | 'medium' | 'intense';
  waveColor?: string;
  
  // Text Styling
  titleSize?: 'sm' | 'md' | 'lg' | 'xl';
  textColor?: string;
  textAlignment?: 'left' | 'center' | 'right';
  
  // Layout
  layout?: 'centered' | 'split' | 'image-left' | 'image-right';
  minHeight?: string;
}

const WavyBanner: React.FC<WavyBannerProps> = ({
  title,
  subtitle,
  children,
  className,
  backgroundType = 'gradient',
  backgroundImage,
  backgroundColor = '#1e3052',
  gradientColors = {
    from: 'rgba(11, 32, 81, 0.95)',
    to: 'rgba(216, 219, 227, 0.95)'
  },
  imageFilter = 'normal',
  customFilter,
  hoverEffect = false,
  waveIntensity = 'medium',
  waveColor = 'rgba(30, 48, 82, 0.7)',
  titleSize = 'lg',
  textColor = 'white',
  textAlignment = 'center',
  layout = 'centered',
  minHeight = '100vh'
}) => {
  // Filter mappings
  const filterClasses = {
    normal: 'png-filter-normal',
    grayscale: 'png-filter-grayscale',
    sepia: 'png-filter-sepia',
    'blue-tint': 'png-filter-blue-tint',
    'purple-tint': 'png-filter-purple-tint'
  };

  // Title size mappings
  const titleSizeClasses = {
    sm: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
    md: 'text-3xl sm:text-4xl md:text-5xl lg:text-6xl',
    lg: 'text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl',
    xl: 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl'
  };

  // Wave configuration based on intensity
  const waveConfigs = {
    subtle: [
      { size: '250vh', duration: '10s', delay: '0s' },
      { size: '280vh', duration: '15s', delay: '0s' }
    ],
    medium: [
      { size: '300vh', duration: '8s', delay: '0s' },
      { size: '320vh', duration: '14s', delay: '0s' },
      { size: '340vh', duration: '20s', delay: '0s' }
    ],
    intense: [
      { size: '300vh', duration: '8s', delay: '0s' },
      { size: '320vh', duration: '14s', delay: '0s' },
      { size: '340vh', duration: '20s', delay: '0s' },
      { size: '360vh', duration: '16s', delay: '0s' },
      { size: '380vh', duration: '12s', delay: '0s' }
    ]
  };

  const getBackgroundStyle = () => {
    switch (backgroundType) {
      case 'image':
        return backgroundImage ? {
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        } : {};
      case 'solid':
        return { backgroundColor };
      case 'gradient':
      default:
        return {
          background: `linear-gradient(135deg, ${gradientColors.from} 0%, ${gradientColors.via || gradientColors.from} 50%, ${gradientColors.to} 100%)`
        };
    }
  };

  const renderContent = () => (
    <div className={cn(
      'relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12',
      layout === 'centered' && 'text-center',
      layout === 'split' && 'grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'
    )}>
      <div className={cn(
        layout === 'split' && 'space-y-6 lg:space-y-8',
        textAlignment === 'left' && 'text-left',
        textAlignment === 'center' && 'text-center',
        textAlignment === 'right' && 'text-right'
      )}>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={cn(
            titleSizeClasses[titleSize],
            'font-normal tracking-wide leading-tight mb-3 sm:mb-4 md:mb-6',
            `text-${textColor}`
          )}
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className={cn(
              'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
              'font-light tracking-wide opacity-90 leading-relaxed',
              `text-${textColor}`,
              layout === 'centered' ? 'max-w-5xl mx-auto' : 'max-w-3xl'
            )}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {subtitle}
          </motion.p>
        )}

        {children && (
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            {children}
          </motion.div>
        )}
      </div>

      {/* Image column for split layout */}
      {layout === 'split' && backgroundImage && (
        <motion.div
          className={cn(
            'order-1 lg:order-2 relative overflow-hidden rounded-2xl shadow-2xl',
            hoverEffect && 'png-hover-effect transition-all duration-500',
            filterClasses[imageFilter]
          )}
          style={{ 
            filter: customFilter || undefined,
            minHeight: '400px'
          }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Image
            src={backgroundImage}
            alt="Banner Image"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      )}
    </div>
  );

  return (
    <section
      className={cn(
        'relative w-full overflow-hidden flex items-center justify-center',
        className
      )}
      style={{
        minHeight,
        ...getBackgroundStyle()
      }}
    >
      {/* Wave Animation Container */}
      <div className="absolute left-0 w-full h-full">
        {waveConfigs[waveIntensity].map((wave, index) => (
          <span
            key={index}
            className={cn(
              'absolute bottom-0 left-1/2 -translate-x-1/2',
              `w-[${wave.size}] h-[${wave.size}]`,
              'rounded-full'
            )}
            style={{
              background: waveColor,
              animation: `waveFlipped ${wave.duration} linear infinite ${index % 2 === 0 ? '' : 'reverse'}`,
              transform: `translateX(-50%) translateY(-${index * 10}%)`,
              borderRadius: `${35 + index * 5}%`
            }}
          />
        ))}
      </div>

      {/* Content */}
      {renderContent()}
    </section>
  );
};

export default WavyBanner;
