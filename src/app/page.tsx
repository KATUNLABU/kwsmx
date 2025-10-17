'use client';

import React from 'react';
import { Button, Card, ServiceCard, FadeIn, WavyBanner, FloatingChat, AppLayout, useToast } from '@/components';
import WavyBannerPhoto from '@/components/ui/WavyBannerPhoto';
import WavyBannerPNG from '@/components/ui/WavyBannerPNG';
import FlipCards from '@/components/ui/FlipCards';

export default function Home() {
  const { showToast } = useToast();

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50">
      
      {/* Floating Chat */}
      <FloatingChat 
        onQuoteRequest={() => {
          // Scroll to contact form or open modal
          document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onChatOpen={() => {
          console.log('Chat abierto');
        }}
        onChatClose={() => {
          console.log('Chat cerrado');
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
                Biblioteca de Componentes KSC
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Componentes reutilizables diseñados para crear experiencias digitales excepcionales 
                para Katun Solution Center. Cada componente está optimizado para conversión y engagement.
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

          {/* Service Cards */}
          <FadeIn>
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-[#004990]">Tarjetas de Servicios</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ServiceCard
                  icon="🚀"
                  title="Desarrollo Web"
                  description="Creamos sitios web modernos y optimizados"
                  features={[
                    "Diseño responsivo",
                    "SEO optimizado",
                    "Carga rápida",
                    "Integración CMS"
                  ]}
                />
                <ServiceCard
                  icon="📱"
                  title="Aplicaciones Móviles"
                  description="Apps nativas e híbridas de alta calidad"
                  features={[
                    "iOS y Android",
                    "UX intuitiva",
                    "Integración API",
                    "Push notifications"
                  ]}
                />
                <ServiceCard
                  icon="💡"
                  title="Consultoría Digital"
                  description="Estrategias digitales que generan resultados"
                  features={[
                    "Análisis de mercado",
                    "Estrategia digital",
                    "Optimización conversión",
                    "ROI garantizado"
                  ]}
                />
              </div>
            </Card>
          </FadeIn>

          {/* Flip Cards Section */}
          <FadeIn>
            <FlipCards />
          </FadeIn>

          {/* Performance Metrics */}
          <FadeIn>
            <Card className="p-8 bg-gradient-to-r from-blue-50 to-purple-50 border-none">
              <h2 className="text-2xl font-bold mb-6 text-[#004990]">Métricas de Rendimiento</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <div className="text-gray-600">Performance Score</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <div className="text-gray-600">Accessibility</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
                  <div className="text-gray-600">Best Practices</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
                  <div className="text-gray-600">SEO Score</div>
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
  );
}
