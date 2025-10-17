'use client';

import React, { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/utils/cn';

interface OptimizedImageProps extends Omit<ImageProps, 'onError'> {
  fallback?: React.ReactNode;
  fallbackText?: string;
  containerClassName?: string;
  showFallbackOnError?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className,
  containerClassName,
  fallback,
  fallbackText,
  showFallbackOnError = true,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  const renderFallback = () => {
    if (fallback) return fallback;
    
    if (fallbackText) {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-500 font-medium">
          {fallbackText}
        </div>
      );
    }

    // Generate initials from alt text
    const initials = alt
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);

    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 text-gray-600 font-bold text-lg">
        {initials}
      </div>
    );
  };

  if (hasError && showFallbackOnError) {
    return (
      <div className={cn('relative overflow-hidden', containerClassName)}>
        {renderFallback()}
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden', containerClassName)}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          'transition-opacity duration-300',
          isLoading ? 'opacity-0' : 'opacity-100',
          className
        )}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </div>
  );
};

export default OptimizedImage;
