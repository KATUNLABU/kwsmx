'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import Link from 'next/link';

interface NavBarProps {
  logo?: string;
  logoAlt?: string;
  className?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    dropdown?: Array<{
      label: string;
      href: string;
      image?: string;
    }>;
  }>;
}

export const NavBar: React.FC<NavBarProps> = ({
  logo = '/KSC.svg',
  logoAlt = 'KSC Logo',
  className,
  menuItems = [
    { label: 'Inicio', href: '/' },
    { 
      label: 'Componentes', 
      href: '/components',
      dropdown: [
        { label: 'Headers', href: '/components/headers' },
        { label: 'Botones', href: '/components/buttons' },
        { label: 'Formularios', href: '/components/forms' },
        { label: 'Grids y Cards', href: '/components/grids' },
        { label: 'Elementos de Página', href: '/components/page-elements' },
        { label: 'Componentes Clásicos', href: '/components/classic' },
        { label: 'Bloques de Página', href: '/components/blocks' }
      ]
    },
    { label: 'Demo', href: '/demo' },
    { label: 'Acerca de', href: '/about' }
  ]
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar menú móvil al hacer scroll
  useEffect(() => {
    if (isScrolled) {
      setIsMobileMenuOpen(false);
    }
  }, [isScrolled]);

  return (
    <motion.nav
      className={cn(
        'fixed top-0 left-0 right-0 z-[9999] transition-all duration-500 ease-in-out',
        className
      )}
      style={{
        background: isScrolled 
          ? 'rgba(255, 255, 255, 0.95)'  // Fondo blanco cuando hace scroll
          : 'rgba(30, 48, 82, 0.9)',     // Fondo azul oscuro inicial
        backdropFilter: 'blur(20px)',
        borderBottom: isScrolled 
          ? '1px solid rgba(30, 48, 82, 0.9)' 
          : '1px solid rgba(255, 255, 255, 0.2)'
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <motion.div 
              className="cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <img
                src={logo}
                alt={logoAlt}
                className={cn(
                  'transition-all duration-300',
                  isScrolled ? 'h-8 lg:h-10' : 'h-10 lg:h-12'
                )}
                style={{
                  filter: isScrolled 
                    ? 'brightness(0) saturate(100%) invert(15%) sepia(42%) saturate(1180%) hue-rotate(177deg) brightness(94%) contrast(97%)'  // Azul oscuro #1e3052
                    : 'brightness(0) invert(1)'  // Blanco cuando el fondo es azul oscuro
                }}
                onError={(e) => {
                  // Fallback a texto si la imagen no carga
                  e.currentTarget.style.display = 'none';
                  const textLogo = document.createElement('div');
                  textLogo.textContent = 'KSC';
                  textLogo.className = `text-2xl lg:text-3xl font-bold ${
                    isScrolled ? 'text-[#004990]' : 'text-white'
                  }`;
                  e.currentTarget.parentNode?.appendChild(textLogo);
                }}
              />
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.div className="relative menu-item-hover">
                  <motion.a
                    href={item.href}
                    className={cn(
                      'px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 relative block',
                      isScrolled 
                        ? 'text-[#004990] hover:text-blue-600' 
                        : 'text-white hover:text-blue-200',
                      item.label === 'Inicio' && (isScrolled ? 'text-orange-600' : 'text-orange-400')
                    )}
                    whileHover={{ 
                      scale: 1.02,
                      y: -1
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                    {item.dropdown && (
                      <motion.span
                        className="ml-1 inline-block"
                        animate={{ rotate: activeDropdown === item.label ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        ▼
                      </motion.span>
                    )}
                  </motion.a>
                  
                  {/* Flecha animada */}
                  <motion.div 
                    className="menu-arrow absolute -bottom-1 left-1/2 transform -translate-x-1/2"
                    initial={{ opacity: 0, y: -5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={cn(
                      'w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent',
                      isScrolled ? 'border-t-blue-600' : 'border-t-blue-200'
                    )} />
                  </motion.div>
                </motion.div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    <motion.div
                      className="absolute top-full left-0 mt-2 w-64 rounded-lg shadow-2xl z-50"
                      style={{
                        background: isScrolled 
                          ? 'rgba(255, 255, 255, 0.95)'
                          : 'rgba(30, 48, 82, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: isScrolled 
                          ? '1px solid rgba(0, 0, 0, 0.1)'
                          : '1px solid rgba(255, 255, 255, 0.3)'
                      }}
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdown.map((dropdownItem, dropIndex) => (
                        <motion.div key={dropIndex} className="relative menu-item-hover">
                          <motion.a
                            href={dropdownItem.href}
                            className={cn(
                              'flex items-center gap-3 px-4 py-3 text-sm transition-all duration-200 first:rounded-t-lg last:rounded-b-lg relative',
                              isScrolled 
                                ? 'text-[#004990] hover:text-blue-600'
                                : 'text-white/90 hover:text-white'
                            )}
                            whileHover={{ 
                              x: 3,
                              scale: 1.02
                            }}
                          >
                            {/* Imagen del servicio si existe */}
                            {dropdownItem.image && (
                              <div className="w-16 h-10 bg-white rounded-lg overflow-hidden flex-shrink-0 p-1.5 shadow-sm border border-gray-200">
                                <img 
                                  src={dropdownItem.image} 
                                  alt={dropdownItem.label}
                                  className="w-full h-full object-contain"
                                  onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                  }}
                                />
                              </div>
                            )}
                            <span className="flex-1">{dropdownItem.label}</span>
                            {/* Flechita a la derecha */}
                            <svg 
                              className="w-4 h-4 flex-shrink-0" 
                              fill="none" 
                              strokeLinecap="round" 
                              strokeLinejoin="round" 
                              strokeWidth="2" 
                              viewBox="0 0 24 24" 
                              stroke="currentColor"
                            >
                              <path d="M9 5l7 7-7 7"></path>
                            </svg>
                          </motion.a>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                'p-2 rounded-lg transition-all duration-300',
                isScrolled 
                  ? 'text-[#004990] hover:bg-gray-100'
                  : 'text-white hover:bg-white/10'
              )}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-6 h-6 flex flex-col justify-center items-center"
                animate={isMobileMenuOpen ? 'open' : 'closed'}
              >
                <motion.span
                  className="w-6 h-0.5 bg-current mb-1"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: 45, y: 6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current mb-1"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.span
                  className="w-6 h-0.5 bg-current"
                  variants={{
                    closed: { rotate: 0, y: 0 },
                    open: { rotate: -45, y: -6 }
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className={cn(
                'md:hidden mt-4 pb-4',
                isScrolled 
                  ? 'border-t border-gray-200'
                  : 'border-t border-white/20'
              )}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="pt-4 space-y-2">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <motion.div className="relative menu-item-hover">
                      <motion.a
                        href={item.href}
                        className={cn(
                          'block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 relative',
                          isScrolled 
                            ? 'text-[#004990] hover:text-blue-600'
                            : 'text-white hover:text-blue-200',
                          item.label === 'Inicio' && (isScrolled ? 'text-orange-600' : 'text-orange-400')
                        )}
                        onClick={() => setIsMobileMenuOpen(false)}
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.label}
                      </motion.a>
                      
                      {/* Flecha lateral para móvil */}
                      <motion.div 
                        className="menu-arrow absolute right-4 top-1/2 transform -translate-y-1/2"
                        initial={{ opacity: 0, x: -5 }}
                        whileHover={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className={cn(
                          'w-0 h-0 border-t-4 border-b-4 border-l-4 border-transparent',
                          isScrolled ? 'border-l-blue-600' : 'border-l-blue-200'
                        )} />
                      </motion.div>
                    </motion.div>
                    
                    {/* Mobile Dropdown */}
                    {item.dropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.dropdown.map((dropdownItem, dropIndex) => (
                          <motion.div key={dropIndex} className="relative menu-item-hover">
                            <motion.a
                              href={dropdownItem.href}
                              className={cn(
                                'flex items-center gap-3 px-4 py-2 text-sm rounded-lg transition-all duration-200 relative',
                                isScrolled 
                                  ? 'text-gray-600 hover:text-[#004990]'
                                  : 'text-white/70 hover:text-white'
                              )}
                              onClick={() => setIsMobileMenuOpen(false)}
                              whileHover={{ x: 3 }}
                              transition={{ duration: 0.2 }}
                            >
                              {/* Imagen del servicio si existe - Móvil */}
                              {dropdownItem.image && (
                                <div className="w-12 h-8 bg-white rounded-lg overflow-hidden flex-shrink-0 p-1 shadow-sm border border-gray-200">
                                  <img 
                                    src={dropdownItem.image} 
                                    alt={dropdownItem.label}
                                    className="w-full h-full object-contain"
                                    onError={(e) => {
                                      (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                  />
                                </div>
                              )}
                              <span className="flex-1">{dropdownItem.label}</span>
                              {/* Flechita a la derecha - Móvil */}
                              <svg 
                                className="w-3 h-3 flex-shrink-0" 
                                fill="none" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                viewBox="0 0 24 24" 
                                stroke="currentColor"
                              >
                                <path d="M9 5l7 7-7 7"></path>
                              </svg>
                            </motion.a>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default NavBar;
