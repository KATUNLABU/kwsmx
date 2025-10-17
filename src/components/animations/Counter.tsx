'use client';

import React, { useEffect, useRef, useCallback, useMemo } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface CounterProps {
  /** The target number to count to */
  end: number;
  /** Animation duration in seconds */
  duration?: number;
  /** Delay before animation starts in seconds */
  delay?: number;
  /** Label text displayed below the counter */
  label: string;
  /** Text to display after the number */
  suffix?: string;
  /** Text to display before the number */
  prefix?: string;
  /** Custom CSS classes */
  className?: string;
  /** Custom number formatting function */
  formatter?: (value: number) => string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  delay = 0,
  label,
  suffix = '',
  prefix = '',
  className = '',
  formatter
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  
  // Use the custom intersection observer hook
  const { isIntersecting: isVisible, ref: setContainerRef } = useIntersectionObserver({ 
    threshold: 0.3,
    triggerOnce: true 
  });

  // Format the number with custom formatter or default
  const formatNumber = useCallback((value: number): string => {
    if (formatter) return formatter(value);
    return `${prefix}${Math.floor(value)}${suffix}`;
  }, [prefix, suffix, formatter]);

  // Animation configuration
  const animationConfig = useMemo(() => ({
    duration: Math.max(0.5, duration), // Minimum duration for better UX
    delay: Math.max(0, delay),
    ease: "power2.out",
  }), [duration, delay]);

  // Start counter animation
  const startAnimation = useCallback(() => {
    if (!counterRef.current || !isVisible || end <= 0) return;

    const element = counterRef.current;
    
    // Clean up any existing animation
    if (animationRef.current) {
      animationRef.current.kill();
    }
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      // Instantly show final value for users who prefer reduced motion
      element.innerText = formatNumber(end);
      return;
    }

    animationRef.current = gsap.fromTo(element, 
      { innerText: 0 },
      {
        innerText: end,
        ...animationConfig,
        snap: { innerText: 1 },
        onUpdate() {
          const currentValue = parseFloat(element.innerText);
          element.innerText = formatNumber(currentValue);
        },
        onComplete() {
          // Ensure final value is exact
          element.innerText = formatNumber(end);
        }
      }
    );
  }, [end, animationConfig, formatNumber, isVisible]);

  useEffect(() => {
    startAnimation();
    
    // Cleanup animation on unmount
    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [startAnimation]);

  return (
    <motion.div
      ref={setContainerRef}
      className={`text-center ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      role="region"
      aria-live="polite"
      aria-label={`Counter showing ${label}`}
    >
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        <span 
          ref={counterRef}
          aria-label={`Current count: ${formatNumber(end)}`}
        >
          {formatNumber(0)}
        </span>
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

export default Counter;
