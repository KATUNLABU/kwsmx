import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 5s linear infinite',
        'spin-medium': 'spin 10s linear infinite',
        'spin-slow-alt': 'spin 15s linear infinite',
        'wave': 'wave 5s linear infinite',
        'wave-medium': 'wave 10s linear infinite',
        'wave-slow': 'wave 15s linear infinite',
      },
      keyframes: {
        wave: {
          '0%': { 
            transform: 'translate(-50%, -75%) rotate(0deg)' 
          },
          '100%': { 
            transform: 'translate(-50%, -75%) rotate(360deg)' 
          },
        }
      },
      borderRadius: {
        '40%': '40%',
        '42.5%': '42.5%',
        '45%': '45%',
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'ksc-blue': '#4973ff',
        'ksc-dark': '#141414',
      }
    },
  },
  plugins: [],
}

export default config
