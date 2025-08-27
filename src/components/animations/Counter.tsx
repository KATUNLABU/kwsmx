'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  label: string;
  suffix?: string;
  prefix?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2,
  delay = 0,
  label,
  suffix = '',
  prefix = ''
}) => {
  const counterRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    if (!counterRef.current || !isVisible) return;

    const element = counterRef.current;
    
    gsap.fromTo(element, 
      { innerText: 0 },
      {
        innerText: end,
        duration,
        delay,
        ease: "power2.out",
        snap: { innerText: 1 },
        onUpdate() {
          const value = Math.floor(parseFloat(element.innerText));
          element.innerText = `${prefix}${value}${suffix}`;
        }
      }
    );
  }, [end, duration, delay, prefix, suffix, isVisible]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current.parentElement!);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        <span ref={counterRef}>0</span>
      </div>
      <p className="text-gray-600 font-medium">{label}</p>
    </motion.div>
  );
};

export default Counter;
