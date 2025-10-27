'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface HeroBannerWavesProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  minHeight?: string;
  waveColor?: string;
  gradientFrom?: string;
  gradientTo?: string;
  breadcrumbs?: BreadcrumbItem[];
}

const HeroBannerWaves: React.FC<HeroBannerWavesProps> = ({
  title,
  subtitle,
  children,
  className,
  minHeight = '100vh',
  waveColor = 'rgba(255, 255, 255, 0.1)',
  gradientFrom = 'rgba(11, 32, 81, 1)',
  gradientTo = 'rgba(0, 82, 155, 1)',
  breadcrumbs = []
}) => {
  return (
    <section
      className={cn(
        'relative w-full overflow-hidden flex items-center justify-center',
        className
      )}
      style={{
        minHeight,
        background: `linear-gradient(135deg, ${gradientFrom} 0%, ${gradientTo} 100%)`
      }}
    >
      {/* Breadcrumbs - Con z-index 60 para estar sobre el navbar (z-50) */}
      {breadcrumbs.length > 0 && (
        <div className="absolute top-20 sm:top-24 left-4 sm:left-6 z-[60]">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm bg-black/20 backdrop-blur-sm px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
            <Link
              href="/ksc"
              className="text-white/80 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
            >
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
              </svg>
              <span className="group-hover:underline hidden sm:inline">Home</span>
            </Link>

            {breadcrumbs.map((item, index) => {
              const isLast = index === breadcrumbs.length - 1;
              return (
                <React.Fragment key={item.href}>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white/60" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  {isLast ? (
                    <span className="text-white font-semibold">{item.label}</span>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white hover:underline transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </div>
      )}
      {/* Animated Wave Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Wave 1 - Slow */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 50% 120%, ${waveColor} 0%, transparent 50%)`,
            opacity: 0.4,
          }}
          animate={{
            x: ['-50%', '50%'],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Wave 2 - Medium */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 50% 110%, ${waveColor} 0%, transparent 45%)`,
            opacity: 0.35,
          }}
          animate={{
            x: ['50%', '-50%'],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Wave 3 - Fast */}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: `radial-gradient(circle at 50% 100%, ${waveColor} 0%, transparent 40%)`,
            opacity: 0.3,
          }}
          animate={{
            x: ['-30%', '30%'],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* SVG Wave Animation - More realistic */}
        <svg
          className="absolute bottom-0 w-full"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          style={{ height: '40%' }}
        >
          <motion.path
            fill={waveColor}
            fillOpacity="0.5"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,64L48,85.3C96,107,192,149,288,165.3C384,181,480,171,576,144C672,117,768,75,864,69.3C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,96C1248,75,1344,53,1392,42.7L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.path
            fill={waveColor}
            fillOpacity="0.35"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,154.7C672,160,768,224,864,240C960,256,1056,224,1152,208C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.5,
            }}
          />
        </svg>
      </div>

      {/* Subtle dots pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="wave-dots" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="2" fill="white"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#wave-dots)" />
        </svg>
      </div>

      {/* Content Container - Con espaciado ajustado para breadcrumbs */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center py-20 pt-32">
        {/* Espaciador para breadcrumbs - solo visible si hay breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div className="h-8 sm:h-12"></div>
        )}
        
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-8 text-white px-4"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          {title}
        </motion.h1>

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl font-light text-white/90 leading-relaxed max-w-4xl mx-auto mb-12 px-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {subtitle}
          </motion.p>
        )}

        {/* Children (buttons, etc) */}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            {children}
          </motion.div>
        )}

        {/* Scroll Indicator - Swipe en móvil, Scroll en desktop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-8 sm:mt-12"
        >
          <motion.div
            animate={{
              y: [0, 12, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 text-white/70 hover:text-white/90 transition-colors"
          >
            {/* Texto diferente según dispositivo */}
            <span className="text-xs sm:text-sm uppercase tracking-wider font-medium">
              <span className="block sm:hidden">Desliza</span>
              <span className="hidden sm:block">Scroll</span>
            </span>
            {/* Icono diferente según dispositivo */}
            <div className="relative">
              {/* Swipe icon para móvil */}
              <svg 
                className="w-6 h-6 sm:hidden" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path>
              </svg>
              {/* Scroll icon para desktop */}
              <svg 
                className="w-6 h-6 hidden sm:block" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes wave-flow {
          0%, 100% { transform: translateX(0) scale(1); }
          50% { transform: translateX(-25%) scale(1.1); }
        }
      `}</style>
    </section>
  );
};

export default HeroBannerWaves;
