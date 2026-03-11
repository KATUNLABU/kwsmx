'use client';

import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface AnimatedIconProps {
  iconName: string;
  solution: 'kpax' | 'papercut' | 'megaged' | 'wikialphabet' | 'home';
  className?: string;
  colorTheme?: 'blue' | 'red' | 'gray' | 'green' | 'orange';
}

export interface AnimatedIconRef {
  playForward: () => void;
  playBackward: () => void;
}

const AnimatedIcon = forwardRef<AnimatedIconRef, AnimatedIconProps>(
  ({ iconName, solution, className = 'w-20 h-20', colorTheme = 'blue' }, ref) => {
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
              // Special case: some icons have problematic first frames, use last frame instead
              const iconsWithEmptyFirstFrame = [
                'Multi-Locação',
                'Soluções de Digital & Agile WorkPlace'
              ];
              
              if (iconsWithEmptyFirstFrame.includes(iconName)) {
                // Use last frame (totalFrames - 1)
                const totalFrames = animationRef.current.totalFrames;
                animationRef.current.goToAndStop(totalFrames - 1, true);
              } else {
                animationRef.current.goToAndStop(0, true);
              }
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
      // filters
      const filters = {
        blue: 'brightness(0) saturate(100%) invert(17%) sepia(95%) saturate(2247%) hue-rotate(193deg) brightness(94%) contrast(101%)', // #004990
        red: 'brightness(0) saturate(100%) invert(19%) sepia(88%) saturate(5436%) hue-rotate(354deg) brightness(93%) contrast(93%)', // #DC2626
        gray: 'brightness(0) saturate(100%) invert(32%) sepia(9%) saturate(884%) hue-rotate(182deg) brightness(94%) contrast(87%)', // #4B5563
        green: 'brightness(0) saturate(100%) invert(49%) sepia(96%) saturate(357%) hue-rotate(81deg) brightness(94%) contrast(93%)', // #16A34A (approx)
        orange: 'brightness(0) saturate(100%) invert(48%) sepia(96%) saturate(1637%) hue-rotate(345deg) brightness(98%) contrast(96%)', // #EA580C (approx)
      };

      // Apply filter based on theme
      svgElement.style.filter = filters[colorTheme] || filters.blue;
    }
  }, [isLoaded, colorTheme]);

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
