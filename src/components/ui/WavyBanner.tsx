'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface WavyBannerProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}

export const WavyBanner: React.FC<WavyBannerProps> = ({
  title,
  subtitle,
  backgroundColor = '#1e3052',
  textColor = 'text-white',
  className,
  children
}) => {
  return (
    <section className={cn(
      'relative w-full h-screen overflow-hidden flex justify-center items-center min-h-screen',
      'px-4 sm:px-6 md:px-8 lg:px-12',
      className
    )}
    /* ⚡ AQUÍ CAMBIA EL COLOR - Main background (Slate-900 to Slate-800) */
    style={{ 
      background: 'linear-gradient(135deg, rgba(11, 32, 81, 0.95) 0%, rgba(9, 48, 110, 0.9) 50%, rgba(216, 219, 227, 0.95) 100%)'
    }}
    >
      {/* Wave Container - Responsive background */}
      <div 
        className="absolute left-0 w-full h-full"
        /* ⚡ AQUÍ CAMBIA EL COLOR - Wave container background (White/Blue to Dark) */
        style={{
          background: 'linear-gradient(135deg, rgba(28, 2, 158, 0.9) 0%, rgba(9, 41, 114, 0.8) 50%, rgba(10, 8, 109, 0.9) 100%)'
        }}
      >
        {/* Wave Span 1 - Responsive sizing with flipped effect - Azul claro */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-0 animate-wave
                     w-[300vh] h-[300vh] sm:w-[350vh] sm:h-[350vh] md:w-[400vh] md:h-[400vh] lg:w-[450vh] lg:h-[450vh]"
          style={{
            borderRadius: '38%',
            background: 'linear-gradient(45deg, rgba(60, 84, 132, 0.7) 0%, rgba(45, 69, 117, 0.6) 50%, rgba(50, 76, 124, 0.65) 100%)',
            animation: 'waveFlipped 8s linear infinite'
          }}
        />
        
        {/* Wave Span 2 - Responsive sizing with flipped effect - Azul medio */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/6 animate-wave-medium
                     w-[280vh] h-[280vh] sm:w-[330vh] sm:h-[330vh] md:w-[380vh] md:h-[380vh] lg:w-[430vh] lg:h-[430vh]"
          style={{
            borderRadius: '35%',
            background: 'linear-gradient(-45deg, rgba(40, 64, 112, 0.8) 0%, rgba(25, 49, 97, 0.5) 50%, rgba(35, 59, 107, 0.7) 100%)',
            animation: 'waveFlipped 14s linear infinite reverse'
          }}
        />
        
        {/* Wave Span 3 - Responsive sizing with flipped effect - Azul base */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/8 animate-wave-slow
                     w-[320vh] h-[320vh] sm:w-[370vh] sm:h-[370vh] md:w-[420vh] md:h-[420vh] lg:w-[470vh] lg:h-[470vh]"
          style={{
            borderRadius: '40%',
            background: 'linear-gradient(90deg, rgba(30, 48, 82, 0.6) 0%, rgba(20, 38, 72, 0.4) 50%, rgba(25, 43, 77, 0.55) 100%)',
            animation: 'waveFlipped 20s linear infinite'
          }}
        />
        
        {/* Wave Span 4 - Responsive sizing with flipped effect - Azul intenso */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/4
                     w-[260vh] h-[260vh] sm:w-[310vh] sm:h-[310vh] md:w-[360vh] md:h-[360vh] lg:w-[400vh] lg:h-[400vh]"
          style={{
            borderRadius: '42%',
            background: 'linear-gradient(135deg, rgba(15, 33, 67, 0.75) 0%, rgba(10, 28, 62, 0.45) 50%, rgba(18, 36, 70, 0.6) 100%)',
            animation: 'waveFlipped 16s linear infinite reverse'
          }}
        />
        
        {/* Wave Span 5 - Responsive sizing with flipped effect - Azul oscuro */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3
                     w-[340vh] h-[340vh] sm:w-[390vh] sm:h-[390vh] md:w-[440vh] md:h-[440vh] lg:w-[500vh] lg:h-[500vh]"
          style={{
            borderRadius: '33%',
            background: 'linear-gradient(60deg, rgba(10, 23, 52, 0.65) 0%, rgba(5, 18, 47, 0.55) 50%, rgba(12, 26, 57, 0.8) 100%)',
            animation: 'waveFlipped 12s linear infinite'
          }}
        />
      </div>

      {/* Content - Responsive text and layout */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
                     font-normal tracking-wide sm:tracking-wider md:tracking-widest 
                     mb-3 sm:mb-4 md:mb-6 text-white
                     leading-tight sm:leading-tight md:leading-tight"
          style={{ 
            fontFamily: 'Poppins, sans-serif',
            letterSpacing: '1px sm:2px md:3px'
          }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                       font-light tracking-wide opacity-90 
                       mb-4 sm:mb-6 md:mb-8 text-white
                       max-w-5xl mx-auto leading-relaxed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
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
    </section>
  );
};

export default WavyBanner;
