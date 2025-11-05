'use client';

import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface AnimatedIconProps {
  iconName: string;
  solution: 'kpax' | 'papercut' | 'megaged' | 'wikialphabet' | 'home';
  className?: string;
}

export interface AnimatedIconRef {
  playForward: () => void;
  playBackward: () => void;
}

const AnimatedIcon = forwardRef<AnimatedIconRef, AnimatedIconProps>(
  ({ iconName, solution, className = 'w-20 h-20' }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<AnimationItem | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Map solution names to folder names
  const folderMap: Record<string, string> = {
    kpax: 'Iconos KPAX',
    papercut: 'iconos papercut',
    megaged: 'iconos megaged',
    wikialphabet: 'iconos wikialphabet',
    home: 'iconos home'
  };

  // Expose methods to parent component
  useImperativeHandle(ref, () => ({
    playForward: () => {
      if (animationRef.current && isLoaded) {
        animationRef.current.setDirection(1);
        animationRef.current.play();
      }
    },
    playBackward: () => {
      if (animationRef.current && isLoaded) {
        animationRef.current.setDirection(-1);
        animationRef.current.play();
      }
    }
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const loadAnimation = async () => {
      try {
        const folderName = folderMap[solution];
        const iconPath = `/icons/${folderName}/${iconName}.json`;
        
        // Fetch the JSON data
        const response = await fetch(iconPath);
        
        if (!response.ok) {
          console.warn(`Icon not found: ${iconPath}`);
          setHasError(true);
          return;
        }

        const animationData = await response.json();

        // Validate animation data
        if (!animationData || !animationData.layers || animationData.layers.length === 0) {
          console.warn(`Invalid animation data for: ${iconPath}`);
          setHasError(true);
          return;
        }

        // Clean up previous animation if exists
        if (animationRef.current) {
          animationRef.current.destroy();
        }

        // Create new animation with error handling
        try {
          animationRef.current = lottie.loadAnimation({
            container: containerRef.current!,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            animationData: animationData,
          });

          // Listen for load complete
          animationRef.current.addEventListener('DOMLoaded', () => {
            setIsLoaded(true);
            // Go to first frame to make icon visible immediately
            if (animationRef.current) {
              animationRef.current.goToAndStop(0, true);
            }
          });

          // Listen for errors
          animationRef.current.addEventListener('data_failed', () => {
            console.warn(`Failed to load animation data: ${iconPath}`);
            setHasError(true);
          });
        } catch (lottieError) {
          console.error('Lottie load error:', lottieError);
          setHasError(true);
        }
      } catch (error) {
        console.error('Error loading animation:', error);
        setHasError(true);
      }
    };

    loadAnimation();

    return () => {
      if (animationRef.current) {
        animationRef.current.destroy();
      }
    };
  }, [iconName, solution]);

  // Apply color filter to SVG after loading
  useEffect(() => {
    if (!containerRef.current || !isLoaded) return;

    const svgElement = containerRef.current.querySelector('svg');
    if (svgElement) {
      // Apply filter to change all colors to #004990 blue
      svgElement.style.filter = 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(2247%) hue-rotate(193deg) brightness(94%) contrast(101%)';
    }
  }, [isLoaded]);

  // Fallback icon if animation fails to load
  if (hasError) {
    return (
      <div className={`${className} flex items-center justify-center`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-full h-full text-[#004990]"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`${className}`}
      aria-label={iconName}
    />
  );
});

AnimatedIcon.displayName = 'AnimatedIcon';

export default AnimatedIcon;
