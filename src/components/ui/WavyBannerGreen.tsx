'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface WavyBannerGreenProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export default function WavyBannerGreen({ 
  title, 
  subtitle, 
  children, 
  className 
}: WavyBannerGreenProps) {
  return (
    <section 
      className={cn(
        "relative min-h-screen flex flex-col items-center justify-center text-white overflow-hidden",
        "px-4 sm:px-6 md:px-8 lg:px-12",
        className
      )}
      style={{ 
        background: 'linear-gradient(135deg, rgba(214, 213, 37, 0.9) 0%, rgba(116, 186, 107, 0.8) 50%, rgba(214, 213, 37, 0.9) 100%)'
      }}
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'linear-gradient(135deg, rgba(214, 213, 37, 0.9) 0%, rgba(116, 186, 107, 0.8) 50%, rgba(214, 213, 37, 0.9) 100%)'
        }}
      >
        {/* Wave 1 - Responsive with reduced opacity */}
        <span 
          className="absolute block opacity-25 animate-wave-8s
                     w-[300vh] h-[300vh] sm:w-[350vh] sm:h-[350vh] md:w-[400vh] md:h-[400vh] lg:w-[450vh] lg:h-[450vh]
                     top-0 left-1/2 -translate-x-1/2 -translate-y-2/3"
          style={{
            background: `linear-gradient(45deg, rgba(116, 186, 107, 0.4) 0%, rgba(116, 186, 107, 0.3) 50%, rgba(116, 186, 107, 0.35) 100%)`,
            borderRadius: '50%'
          }}
        />
        
        {/* Wave 2 - Responsive with reduced opacity */}
        <span 
          className="absolute block opacity-20 animate-wave-14s
                     w-[280vh] h-[280vh] sm:w-[330vh] sm:h-[330vh] md:w-[380vh] md:h-[380vh] lg:w-[430vh] lg:h-[430vh]
                     top-0 left-1/2 -translate-x-1/2 -translate-y-2/3"
          style={{
            background: `linear-gradient(135deg, rgba(116, 186, 107, 0.38) 0%, rgba(116, 186, 107, 0.25) 50%, rgba(116, 186, 107, 0.32) 100%)`,
            borderRadius: '50%'
          }}
        />
        
        {/* Wave 3 - Responsive with reduced opacity */}
        <span 
          className="absolute block opacity-18 animate-wave-20s
                     w-[320vh] h-[320vh] sm:w-[370vh] sm:h-[370vh] md:w-[420vh] md:h-[420vh] lg:w-[470vh] lg:h-[470vh]
                     top-0 left-1/2 -translate-x-1/2 -translate-y-3/4"
          style={{
            background: `linear-gradient(90deg, rgba(116, 186, 107, 0.36) 0%, rgba(116, 186, 107, 0.22) 50%, rgba(116, 186, 107, 0.30) 100%)`,
            borderRadius: '50%'
          }}
        />
        
        {/* Wave 4 - Responsive with reduced opacity */}
        <span 
          className="absolute block opacity-15 animate-wave-16s
                     w-[260vh] h-[260vh] sm:w-[310vh] sm:h-[310vh] md:w-[360vh] md:h-[360vh] lg:w-[400vh] lg:h-[400vh]
                     top-0 left-1/2 -translate-x-1/2 -translate-y-2/3"
          style={{
            background: `linear-gradient(225deg, rgba(116, 186, 107, 0.34) 0%, rgba(116, 186, 107, 0.20) 50%, rgba(116, 186, 107, 0.28) 100%)`,
            borderRadius: '50%'
          }}
        />
        
        {/* Wave 5 - Responsive with reduced opacity */}
        <span 
          className="absolute block opacity-25 animate-wave-12s
                     w-[340vh] h-[340vh] sm:w-[390vh] sm:h-[390vh] md:w-[440vh] md:h-[440vh] lg:w-[500vh] lg:h-[500vh]
                     top-0 left-1/2 -translate-x-1/2 -translate-y-3/4"
          style={{
            background: `linear-gradient(315deg, rgba(116, 186, 107, 0.40) 0%, rgba(116, 186, 107, 0.24) 50%, rgba(116, 186, 107, 0.33) 100%)`,
            borderRadius: '50%'
          }}
        />
      </div>

      {/* Content - Responsive */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto w-full">
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 
                     font-bold mb-3 sm:mb-4 md:mb-6 text-white
                     leading-tight sm:leading-tight md:leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        
        {subtitle && (
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 
                       mb-4 sm:mb-6 md:mb-8 text-white/90
                       max-w-5xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {subtitle}
          </motion.p>
        )}
        
        {children && (
          <motion.div
            className="mt-6 sm:mt-8 md:mt-10 w-full max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
