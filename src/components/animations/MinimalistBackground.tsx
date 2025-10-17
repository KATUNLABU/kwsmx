'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MinimalistBackgroundProps {
  dotColor?: string;
  gridSize?: number;
  animationSpeed?: number;
  opacity?: number;
}

const MinimalistBackground: React.FC<MinimalistBackgroundProps> = ({
  dotColor = 'rgba(0, 82, 155, 0.15)',
  gridSize = 60,
  animationSpeed = 3,
  opacity = 0.4
}) => {
  const [dots, setDots] = useState<{ x: number; y: number }[]>([]);

  useEffect(() => {
    const calculateDots = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const cols = Math.ceil(width / gridSize);
      const rows = Math.ceil(height / gridSize);
      
      const newDots = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          newDots.push({
            x: col * gridSize,
            y: row * gridSize
          });
        }
      }
      setDots(newDots);
    };

    calculateDots();
    window.addEventListener('resize', calculateDots);
    return () => window.removeEventListener('resize', calculateDots);
  }, [gridSize]);

  return (
    <div 
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{ opacity }}
    >
      <svg className="w-full h-full">
        {dots.map((dot, index) => (
          <motion.circle
            key={`${dot.x}-${dot.y}`}
            cx={dot.x}
            cy={dot.y}
            r="2"
            fill={dotColor}
            initial={{ scale: 1, opacity: 0.3 }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: animationSpeed,
              repeat: Infinity,
              delay: (index * 0.05) % 2, // Delay basado en index, no random
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default MinimalistBackground;
