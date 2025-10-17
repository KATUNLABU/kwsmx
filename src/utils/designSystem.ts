// Theme and Design System Configuration
export const theme = {
  colors: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      900: '#1e3a8a'
    },
    secondary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      500: '#64748b',
      600: '#475569',
      700: '#334155',
      900: '#0f172a'
    },
    brand: {
      ksc: '#1e3052',
      light: '#d8dbe3',
      dark: '#0b2051'
    }
  },
  
  typography: {
    fontFamily: {
      primary: 'Poppins, sans-serif',
      secondary: 'Source Sans Pro, Arial, sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem'
    }
  },
  
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '6rem'
  },
  
  animation: {
    duration: {
      fast: '0.15s',
      normal: '0.3s',
      slow: '0.5s',
      slower: '1s'
    },
    easing: {
      linear: 'linear',
      easeIn: 'ease-in',
      easeOut: 'ease-out',
      easeInOut: 'ease-in-out',
      spring: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)'
    }
  },
  
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px'
  }
} as const;

// Component Default Configurations
export const componentDefaults = {
  button: {
    variants: {
      primary: {
        bg: 'bg-blue-600',
        hover: 'hover:bg-blue-700',
        text: 'text-white',
        border: 'border-transparent'
      },
      secondary: {
        bg: 'bg-gray-600',
        hover: 'hover:bg-gray-700',
        text: 'text-white',
        border: 'border-transparent'
      },
      outline: {
        bg: 'bg-transparent',
        hover: 'hover:bg-blue-50',
        text: 'text-blue-600',
        border: 'border-blue-600'
      },
      ghost: {
        bg: 'bg-transparent',
        hover: 'hover:bg-gray-100',
        text: 'text-gray-700',
        border: 'border-transparent'
      }
    },
    sizes: {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg'
    }
  },
  
  card: {
    shadows: {
      sm: 'shadow-sm',
      md: 'shadow-md',
      lg: 'shadow-lg',
      xl: 'shadow-xl'
    },
    padding: {
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8'
    }
  },
  
  wavyBanner: {
    waveIntensities: {
      subtle: {
        waves: 2,
        sizes: ['250vh', '280vh'],
        durations: ['10s', '15s']
      },
      medium: {
        waves: 3,
        sizes: ['300vh', '320vh', '340vh'],
        durations: ['8s', '14s', '20s']
      },
      intense: {
        waves: 5,
        sizes: ['300vh', '320vh', '340vh', '360vh', '380vh'],
        durations: ['8s', '14s', '20s', '16s', '12s']
      }
    }
  }
} as const;

// Animation Presets
export const animations = {
  fadeIn: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  },
  
  slideUp: {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' }
  },
  
  scaleIn: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5 }
  },
  
  hover: {
    scale: 1.02,
    y: -4,
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  }
} as const;

// Utility Functions
export const getResponsiveSize = (size: keyof typeof theme.typography.fontSize, responsive = true) => {
  if (!responsive) return theme.typography.fontSize[size];
  
  const sizeMap = {
    xs: 'text-xs',
    sm: 'text-sm',
    base: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-xl sm:text-2xl',
    '2xl': 'text-2xl sm:text-3xl',
    '3xl': 'text-3xl sm:text-4xl',
    '4xl': 'text-4xl sm:text-5xl md:text-6xl',
    '5xl': 'text-5xl sm:text-6xl md:text-7xl lg:text-8xl',
    '6xl': 'text-6xl sm:text-7xl md:text-8xl lg:text-9xl',
    '7xl': 'text-7xl sm:text-8xl md:text-9xl',
    '8xl': 'text-8xl sm:text-9xl',
    '9xl': 'text-9xl'
  };
  
  return sizeMap[size] || sizeMap.base;
};
