'use client';

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  distance?: number;
  triggerOnce?: boolean;
}

const FadeIn: React.FC<FadeInProps> = ({
  children,
  direction = 'up',
  duration = 0.8,
  delay = 0,
  distance = 30,
  triggerOnce = true
}) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    // Set initial state
    const initialState: { [key: string]: any } = {
      opacity: 0
    };

    const finalState: { [key: string]: any } = {
      opacity: 1,
      duration,
      delay,
      ease: 'power2.out'
    };

    // Set direction-specific initial and final states
    switch (direction) {
      case 'up':
        initialState.y = distance;
        finalState.y = 0;
        break;
      case 'down':
        initialState.y = -distance;
        finalState.y = 0;
        break;
      case 'left':
        initialState.x = distance;
        finalState.x = 0;
        break;
      case 'right':
        initialState.x = -distance;
        finalState.x = 0;
        break;
    }

    gsap.set(element, initialState);

    // Create intersection observer for scroll trigger
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(element, finalState);
            if (triggerOnce) {
              observer.disconnect();
            }
          } else if (!triggerOnce) {
            gsap.set(element, initialState);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [direction, duration, delay, distance, triggerOnce]);

  return (
    <div ref={elementRef}>
      {children}
    </div>
  );
};

export default FadeIn;
