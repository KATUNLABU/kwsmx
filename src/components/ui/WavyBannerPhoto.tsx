'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface WavyBannerPhotoProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  imageUrl?: string;
}

export default function WavyBannerPhoto({ 
  title, 
  subtitle, 
  children, 
  className,
  imageUrl = '/foto1.JPG' 
}: WavyBannerPhotoProps) {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex items-center justify-center text-white overflow-hidden",
        "px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
      /* ⚡ AQUÍ CAMBIA EL COLOR - Main background (Same as WavyBanner) */
      style={{ 
        background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(30, 41, 59, 0.9) 50%, rgba(15, 23, 42, 0.95) 100%)'
      }}
    >
      {/* Wave Container - Same animated background as WavyBanner */}
      <div 
        className="absolute left-0 w-full h-full"
        /* ⚡ AQUÍ CAMBIA EL COLOR - Wave container background (Same as WavyBanner) */
        style={{
          background: 'linear-gradient(135deg, rgba(28, 2, 158, 0.9) 0%, rgba(9, 41, 114, 0.8) 50%, rgba(10, 8, 109, 0.9) 100%)'
        }}
      >
        {/* Wave Span 1 - Responsive sizing with flipped effect (Same as WavyBanner) */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-0 animate-wave
                     w-[300vh] h-[300vh] sm:w-[350vh] sm:h-[350vh] md:w-[400vh] md:h-[400vh] lg:w-[450vh] lg:h-[450vh]"
          style={{
            borderRadius: '38%',
            background: 'linear-gradient(45deg, rgba(30, 48, 82, 0.7) 0%, rgba(30, 48, 82, 0.6) 50%, rgba(30, 48, 82, 0.65) 100%)',
            animation: 'waveFlipped 8s linear infinite'
          }}
        />
        
        {/* Wave Span 2 - Responsive sizing with flipped effect (Same as WavyBanner) */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/6 animate-wave-medium
                     w-[280vh] h-[280vh] sm:w-[330vh] sm:h-[330vh] md:w-[380vh] md:h-[380vh] lg:w-[430vh] lg:h-[430vh]"
          style={{
            borderRadius: '35%',
            background: 'linear-gradient(-45deg, rgba(30, 48, 82, 0.8) 0%, rgba(30, 48, 82, 0.5) 50%, rgba(30, 48, 82, 0.7) 100%)',
            animation: 'waveFlipped 14s linear infinite reverse'
          }}
        />
        
        {/* Wave Span 3 - Responsive sizing with flipped effect (Same as WavyBanner) */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/8 animate-wave-slow
                     w-[320vh] h-[320vh] sm:w-[370vh] sm:h-[370vh] md:w-[420vh] md:h-[420vh] lg:w-[470vh] lg:h-[470vh]"
          style={{
            borderRadius: '40%',
            background: 'linear-gradient(90deg, rgba(30, 48, 82, 0.6) 0%, rgba(30, 48, 82, 0.4) 50%, rgba(30, 48, 82, 0.55) 100%)',
            animation: 'waveFlipped 20s linear infinite'
          }}
        />
        
        {/* Wave Span 4 - Responsive sizing with flipped effect (Same as WavyBanner) */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/4
                     w-[260vh] h-[260vh] sm:w-[310vh] sm:h-[310vh] md:w-[360vh] md:h-[360vh] lg:w-[400vh] lg:h-[400vh]"
          style={{
            borderRadius: '42%',
            background: 'linear-gradient(135deg, rgba(30, 48, 82, 0.75) 0%, rgba(30, 48, 82, 0.45) 50%, rgba(30, 48, 82, 0.6) 100%)',
            animation: 'waveFlipped 16s linear infinite reverse'
          }}
        />
        
        {/* Wave Span 5 - Responsive sizing with flipped effect (Same as WavyBanner) */}
        <span 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/3
                     w-[340vh] h-[340vh] sm:w-[390vh] sm:h-[390vh] md:w-[440vh] md:h-[440vh] lg:w-[500vh] lg:h-[500vh]"
          style={{
            borderRadius: '33%',
            background: 'linear-gradient(60deg, rgba(30, 48, 82, 0.65) 0%, rgba(30, 48, 82, 0.55) 50%, rgba(30, 48, 82, 0.8) 100%)',
            animation: 'waveFlipped 12s linear infinite'
          }}
        />
      </div>

      {/* Content Container - Two Column Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-screen py-12">
        
        {/* Text Content Column */}
        <div className="text-center lg:text-left px-4 sm:px-6 md:px-8 lg:px-0">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
                       font-bold mb-4 sm:mb-6 md:mb-8 text-white
                       leading-tight drop-shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 
                         mb-6 sm:mb-8 md:mb-10 text-white/95
                         leading-relaxed drop-shadow-md"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {subtitle}
            </motion.p>
          )}
          
          {children && (
            <motion.div
              className="w-full max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {children}
            </motion.div>
          )}
        </div>

        {/* Image Column with Hover Effect */}
        {/* 📸 PON LA FOTO AQUÍ - Cambia imageUrl="/foto1.jpg " */}
        <motion.div 
          className="flex justify-center items-center p-4 md:p-8 lg:p-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Container with transform effect */}
          <div className="bg-blue-200/20 rounded-lg shadow-2xl w-full md:w-4/5 lg:w-full transform duration-500 hover:translate-x-3 hover:-translate-y-3 pointer-events-none backdrop-blur-sm">
            {/* Image with reverse transform */}
            <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px] xl:h-[500px] 
                           rounded-lg overflow-hidden shadow-2xl transform duration-500 hover:-translate-x-6 hover:translate-y-6 pointer-events-auto">
              <Image
                src={imageUrl || "/foto1.JPG"}
                alt="Featured Image"
                fill
                className="object-cover transition-transform duration-500"
                priority
                onError={() => console.log('Error loading image:', imageUrl)}
                onLoad={() => console.log('Image loaded successfully:', imageUrl)}
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
