'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Script from 'next/script';
import { Button, Card, ServiceCard, FadeIn, WavyBanner, FloatingChat, AppLayout, useToast } from '@/components';
import WavyBannerPhoto from '@/components/ui/WavyBannerPhoto';
import WavyBannerPNG from '@/components/ui/WavyBannerPNG';
import FlipCards from '@/components/ui/FlipCards';
import AnimatedIcon, { AnimatedIconRef } from '@/components/ui/AnimatedIcon';

// Service Card Component with animated icon
function ServiceCardAnimated({ iconName, title, description, features }: {
  iconName: string;
  title: string;
  description: string;
  features: string[];
}) {
  const iconRef = useRef<AnimatedIconRef>(null);

  return (
    <div
      className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
      onMouseEnter={() => iconRef.current?.playForward()}
      onMouseLeave={() => iconRef.current?.playBackward()}
    >
      <div className="flex justify-center mb-4">
        <AnimatedIcon 
          ref={iconRef}
          iconName={iconName} 
          solution="home" 
          className="w-16 h-16"
        />
      </div>
      <h3 className="text-xl font-bold text-[#004990] mb-3 text-center">{title}</h3>
      <p className="text-gray-700 mb-4 text-center">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-gray-600">
            <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const { showToast } = useToast();

  return (
    <>
      <AppLayout>
      <div className="min-h-screen bg-gray-50">
      
      {/* HubSpot Tracking Code */}
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/242609850.js"
        strategy="afterInteractive"
      />
      
      {/* Floating Chat */}
      <FloatingChat 
        onQuoteRequest={() => {
          // Scroll to contact form or open modal
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />
      
      {/* Wavy Banner Section */}
      <WavyBanner
        title="KSC Components"
        subtitle="Laboratorio de Componentes"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full max-w-lg mx-auto">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3052] w-full sm:w-auto text-sm sm:text-base"
            onClick={() => window.location.href = '/demo'}
          >
            Ver Demo Completa
          </Button>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-[#1e3052] hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
            onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Componentes
          </Button>
        </div>
      </WavyBanner>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16" id="components">
        <div className="space-y-16">
          
          {/* Components Overview */}
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-[#004990] mb-4">
                Biblioteca de Componentes KWS
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Componentes reutilizables diseñados para crear experiencias digitales excepcionales 
                para Katun Workplace Solutions. Cada componente está optimizado para conversión y rendimiento.
              </p>
            </div>
          </FadeIn>

          {/* Button Components */}
          <FadeIn>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#004990]">Botones Interactivos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Button variant="primary" size="lg">Botón Primario</Button>
                <Button variant="secondary" size="lg">Botón Secundario</Button>
                <Button variant="outline" size="lg">Botón Outline</Button>
                <Button variant="ghost" size="lg">Botón Ghost</Button>
              </div>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button variant="primary" size="sm">Pequeño</Button>
                <Button variant="primary" size="md">Mediano</Button>
                <Button variant="primary" size="lg">Grande</Button>
              </div>
            </Card>
          </FadeIn>

          {/* Flip Cards Section - LO QUE VENDEMOS */}
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-[#004990] mb-3">
                Nuestras Soluciones
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Descubre las herramientas que transformarán tu negocio
              </p>
            </div>
            <FlipCards />
          </FadeIn>

          {/* Service Cards */}
          <FadeIn>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#004990]">Nuestros Servicios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCardAnimated
                  iconName="Desarrollo Web"
                  title="Desarrollo Web"
                  description="Creamos sitios web modernos y optimizados"
                  features={[
                    "Diseño responsivo",
                    "SEO optimizado",
                    "Carga rápida",
                    "Integración CMS"
                  ]}
                />
                <ServiceCardAnimated
                  iconName="Aplicaciones Móviles"
                  title="Aplicaciones Móviles"
                  description="Apps nativas e híbridas de alta calidad"
                  features={[
                    "iOS y Android",
                    "UX intuitiva",
                    "Integración API",
                    "Notificaciones push"
                  ]}
                />
                <ServiceCardAnimated
                  iconName="Consultoría Digital"
                  title="Consultoría Digital"
                  description="Estrategias digitales que generan resultados"
                  features={[
                    "Análisis de mercado",
                    "Estrategia digital",
                    "Optimización de conversión",
                    "ROI garantizado"
                  ]}
                />
              </div>
            </Card>
          </FadeIn>

          {/* Performance Metrics */}
          <FadeIn>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
              <h2 className="text-2xl font-bold mb-6 text-[#004990]">Métricas de Rendimiento</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Rendimiento</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Accesibilidad</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">Mejores Prácticas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-600">SEO</div>
                </div>
              </div>
            </Card>
          </FadeIn>

          {/* Call to Action */}
          <FadeIn>
            <Card className="text-center bg-blue-50 border-blue-200">
              <h2 className="text-3xl font-bold mb-4 text-blue-900">
                ¿Listo para comenzar tu proyecto?
              </h2>
              <p className="text-lg text-blue-700 mb-6">
                Contáctanos y descubre cómo podemos ayudarte a hacer crecer tu negocio.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => window.open('mailto:info@katun.com', '_blank')}
                >
                  Contactar por Email
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                >
                  WhatsApp
                </Button>
              </div>
            </Card>
          </FadeIn>
        </div>
      </div>

      {/* Segundo Banner Wavy - Con foto de fondo */}
      <WavyBannerPhoto
        title="Banner con Foto"
        subtitle="Banner con Imagen de Fondo"
        imageUrl="/foto1.JPG"
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full max-w-lg mx-auto">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-[#1e3052] w-full sm:w-auto text-sm sm:text-base"
            onClick={() => window.location.href = '/demo'}
          >
            Explorar Más
          </Button>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-[#1e3052] hover:bg-gray-100 w-full sm:w-auto text-sm sm:text-base"
            onClick={() => document.getElementById('components')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ver Galería
          </Button>
        </div>
      </WavyBannerPhoto>

      {/* Tercer Banner Wavy - Con imagen PNG y efectos CSS */}
      <WavyBannerPNG
        title="Banner PNG"
        subtitle="Con Efectos CSS Avanzados"
        imageUrl="/foto2.png"
        imageEffect="purple-tint"
        hoverEffect={true}
      >
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full max-w-lg mx-auto">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto text-sm sm:text-base"
            onClick={() => window.location.href = '/gallery'}
          >
            Ver Efectos
          </Button>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-purple-600 hover:bg-purple-50 w-full sm:w-auto text-sm sm:text-base"
            onClick={() => showToast('¡Efecto PNG activado!', 'success', 2000)}
          >
            Cambiar Filtro
          </Button>
        </div>
      </WavyBannerPNG>
    </div>
    </AppLayout>
    </>
  );
}