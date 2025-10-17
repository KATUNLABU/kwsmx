'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCrossBackgroundProps {
  dotSize?: number; // Tamaño base del punto en rem
  dotColor?: string;
  activeColor?: string;
  gap?: number; // Espacio entre puntos en rem
  speed?: number; // Velocidad de animación en segundos
  className?: string;
}

export default function AnimatedCrossBackground({
  dotSize = 3,
  dotColor = 'rgba(0, 82, 155, 0.2)', // KSC Blue con opacidad
  activeColor = 'rgba(0, 82, 155, 1)',
  gap = 4,
  speed = 0.3,
  className = ''
}: AnimatedCrossBackgroundProps) {
  const [activeVerticalIndex, setActiveVerticalIndex] = useState(0);
  const [activeHorizontalIndex, setActiveHorizontalIndex] = useState(0);

  // Puntos verticales (de arriba hacia abajo)
  const verticalPoints = [
    { x: 0, y: -5 },
    { x: 0, y: -4 },
    { x: 0, y: -3 },
    { x: 0, y: -2 },
    { x: 0, y: -1 },
    { x: 0, y: 0 }, // Centro
    { x: 0, y: 1 },
    { x: 0, y: 2 },
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
  ];

  // Puntos horizontales (de derecha a izquierda)
  const horizontalPoints = [
    { x: 5, y: 0 },
    { x: 4, y: 0 },
    { x: 3, y: 0 },
    { x: 2, y: 0 },
    { x: 1, y: 0 },
    { x: 0, y: 0 }, // Centro (compartido)
    { x: -1, y: 0 },
    { x: -2, y: 0 },
    { x: -3, y: 0 },
    { x: -4, y: 0 },
    { x: -5, y: 0 },
  ];

  // Animación vertical (arriba hacia abajo)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveVerticalIndex((prev) => (prev + 1) % verticalPoints.length);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [verticalPoints.length, speed]);

  // Animación horizontal (derecha hacia izquierda)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHorizontalIndex((prev) => (prev + 1) % horizontalPoints.length);
    }, speed * 1000);

    return () => clearInterval(interval);
  }, [horizontalPoints.length, speed]);

  // Función para calcular la escala de cada punto basado en su distancia al punto activo
  const getPointScale = (x: number, y: number) => {
    let scale = 1;

    // Calcular distancia al punto activo vertical
    const activeVertical = verticalPoints[activeVerticalIndex];
    if (x === activeVertical.x) {
      const distanceY = Math.abs(y - activeVertical.y);
      if (distanceY === 0) {
        scale = Math.max(scale, 1.5); // Punto activo más grande
      } else if (distanceY === 1) {
        scale = Math.max(scale, 1.2); // Puntos adyacentes medianos
      }
    }

    // Calcular distancia al punto activo horizontal
    const activeHorizontal = horizontalPoints[activeHorizontalIndex];
    if (y === activeHorizontal.y) {
      const distanceX = Math.abs(x - activeHorizontal.x);
      if (distanceX === 0) {
        scale = Math.max(scale, 1.5); // Punto activo más grande
      } else if (distanceX === 1) {
        scale = Math.max(scale, 1.2); // Puntos adyacentes medianos
      }
    }

    return scale;
  };

  // Función para obtener el color del punto
  const getPointColor = (x: number, y: number) => {
    const activeVertical = verticalPoints[activeVerticalIndex];
    const activeHorizontal = horizontalPoints[activeHorizontalIndex];
    
    const isVerticalActive = x === activeVertical.x && y === activeVertical.y;
    const isHorizontalActive = x === activeHorizontal.x && y === activeHorizontal.y;
    
    if (isVerticalActive || isHorizontalActive) {
      return activeColor;
    }
    return dotColor;
  };

  // Combinar puntos únicos (evitar duplicados en el centro)
  const allPoints = [...verticalPoints];
  horizontalPoints.forEach(point => {
    if (!allPoints.some(p => p.x === point.x && p.y === point.y)) {
      allPoints.push(point);
    }
  });

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {allPoints.map((point) => {
          const scale = getPointScale(point.x, point.y);
          const color = getPointColor(point.x, point.y);

          return (
            <motion.div
              key={`${point.x}-${point.y}`}
              className="absolute rounded-full"
              style={{
                left: `${point.x * gap}rem`,
                top: `${point.y * gap}rem`,
                width: `${dotSize}rem`,
                height: `${dotSize}rem`,
                transform: 'translate(-50%, -50%)',
              }}
              animate={{
                scale: scale,
                backgroundColor: color,
              }}
              transition={{
                scale: {
                  duration: speed * 1.5, // Transición más lenta para efecto orgánico
                  ease: [0.43, 0.13, 0.23, 0.96], // Curva de animación más suave
                },
                backgroundColor: {
                  duration: speed * 1.2,
                  ease: 'easeInOut',
                },
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
