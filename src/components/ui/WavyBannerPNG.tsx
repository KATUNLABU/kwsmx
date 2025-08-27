'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface WavyBannerPNGProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  imageUrl?: string;
  imageEffect?: 'normal' | 'grayscale' | 'sepia' | 'blue-tint' | 'purple-tint' | 'custom';
  customFilter?: string;
  hoverEffect?: boolean;
}

export default function WavyBannerPNG({ 
  title, 
  subtitle, 
  children, 
  className,
  imageUrl = '/foto2.png',
  imageEffect = 'normal',
  customFilter,
  hoverEffect = true
}: WavyBannerPNGProps) {

  // Define CSS filters for different effects
  const getImageFilter = () => {
    switch (imageEffect) {
      case 'grayscale':
        return 'grayscale(100%) contrast(1.2) brightness(0.9)';
      case 'sepia':
        return 'sepia(100%) contrast(1.1) brightness(0.9) saturate(0.8)';
      case 'blue-tint':
        return 'grayscale(100%) sepia(100%) hue-rotate(200deg) saturate(0.7) brightness(0.9)';
      case 'purple-tint':
        return 'grayscale(100%) sepia(100%) hue-rotate(280deg) saturate(0.8) brightness(0.8)';
      case 'custom':
        return customFilter || 'none';
      default:
        return 'none';
    }
  };

  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center text-white overflow-hidden",
        "px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
      style={{ 
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%)'
      }}
    >
      {/* Wave Container */}
      <div 
        className="absolute left-0 w-full h-full"
        style={{
          background: 'linear-gradient(135deg, rgba(67, 56, 202, 0.9) 0%, rgba(99, 102, 241, 0.8) 50%, rgba(79, 70, 229, 0.9) 100%)'
        }}
      >
        {/* Wave Animations - 5 waves with different speeds */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-0 animate-wave
                     w-[300vh] h-[300vh] sm:w-[350vh] sm:h-[350vh] md:w-[400vh] md:h-[400vh] lg:w-[450vh] lg:h-[450vh]"
          style={{
            borderRadius: '38%',
            background: 'linear-gradient(45deg, rgba(76, 29, 149, 0.7) 0%, rgba(88, 28, 135, 0.6) 50%, rgba(67, 56, 202, 0.65) 100%)',
            animation: 'waveFlipped 8s linear infinite'
          }}
        />

        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-4 animate-wave-medium
                     w-[280vh] h-[280vh] sm:w-[320vh] sm:h-[320vh] md:w-[360vh] md:h-[360vh] lg:w-[400vh] lg:h-[400vh]"
          style={{
            borderRadius: '40%',
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.6) 0%, rgba(129, 140, 248, 0.5) 50%, rgba(165, 180, 252, 0.6) 100%)',
            animation: 'waveFlipped 14s linear infinite reverse'
          }}
        />

        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-8 animate-wave-slow
                     w-[260vh] h-[260vh] sm:w-[300vh] sm:h-[300vh] md:w-[340vh] md:h-[340vh] lg:w-[380vh] lg:h-[380vh]"
          style={{
            borderRadius: '42%',
            background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.5) 0%, rgba(167, 139, 250, 0.4) 50%, rgba(196, 181, 253, 0.5) 100%)',
            animation: 'waveFlipped 20s linear infinite'
          }}
        />

        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-12 animate-wave-slow
                     w-[240vh] h-[240vh] sm:w-[280vh] sm:h-[280vh] md:w-[320vh] md:h-[320vh] lg:w-[360vh] lg:h-[360vh]"
          style={{
            borderRadius: '44%',
            background: 'linear-gradient(45deg, rgba(168, 85, 247, 0.4) 0%, rgba(192, 132, 252, 0.3) 50%, rgba(221, 214, 254, 0.4) 100%)',
            animation: 'waveFlipped 16s linear infinite reverse'
          }}
        />

        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-16 animate-wave-medium
                     w-[220vh] h-[220vh] sm:w-[260vh] sm:h-[260vh] md:w-[300vh] md:h-[300vh] lg:w-[340vh] lg:h-[340vh]"
          style={{
            borderRadius: '46%',
            background: 'linear-gradient(45deg, rgba(196, 181, 253, 0.3) 0%, rgba(221, 214, 254, 0.2) 50%, rgba(233, 213, 255, 0.3) 100%)',
            animation: 'waveFlipped 12s linear infinite'
          }}
        />
      </div>

      {/* Content Grid - Two columns with responsive design */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          
          {/* Text Column */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Title with enhanced animation */}
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="block text-white drop-shadow-2xl">
                {title}
              </span>
            </motion.h1>

            {/* Subtitle with enhanced animation */}
            {subtitle && (
              <motion.p 
                className="text-lg sm:text-xl lg:text-2xl text-white/90 font-light max-w-lg mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                {subtitle}
              </motion.p>
            )}

            {/* Children content (buttons, etc.) */}
            {children && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {children}
              </motion.div>
            )}
          </div>

          {/* PNG Image Column with Silhouette Offset Effect */}
          <div className="order-1 lg:order-2">
            <motion.div
              className="flex justify-center items-center p-4 md:p-8 lg:p-12"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              {/* Container for PNG silhouette effect */}
              <div className="relative group cursor-pointer">
                {/* Offset silhouette - solid color PNG positioned behind */}
                <div className="absolute top-0 left-0 transform transition-transform duration-500 
                               group-hover:translate-x-4 group-hover:-translate-y-4 z-0">
                  <Image
                    src={imageUrl}
                    alt="PNG Silhouette"
                    width={400}
                    height={300}
                    className="w-full h-auto"
                    style={{
                      filter: 'brightness(0) saturate(100%) invert(27%) sepia(51%) saturate(2878%) hue-rotate(246deg) brightness(104%) contrast(97%)',
                      transition: 'transform 0.5s ease'
                    }}
                    unoptimized
                  />
                </div>
                
                {/* Original PNG image - maintains original colors */}
                <div className="relative z-10 transform transition-transform duration-500 
                               group-hover:-translate-x-2 group-hover:translate-y-2">
                  <Image
                    src={imageUrl}
                    alt="Featured PNG Image"
                    width={400}
                    height={300}
                    className="w-full h-auto transition-all duration-500 drop-shadow-2xl"
                    style={{
                      transition: 'transform 0.5s ease'
                    }}
                    onError={() => console.log('Error loading PNG image:', imageUrl)}
                    onLoad={() => console.log('PNG image loaded successfully:', imageUrl)}
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Additional decorative elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-white/30 rounded-full animate-pulse" />
      <div className="absolute top-20 right-20 w-3 h-3 bg-purple-300/40 rounded-full animate-bounce" />
      <div className="absolute bottom-20 left-20 w-2 h-2 bg-blue-300/40 rounded-full animate-ping" />
    </section>
  );
}
