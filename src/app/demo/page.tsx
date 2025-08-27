'use client';

import React from 'react';
import { 
  WavyBanner,
  HeroSection, 
  ContactForm, 
  Counter, 
  FadeIn, 
  Card,
  Button
} from '@/components';

export default function DemoPage() {
  const handleContactSubmit = (data: any) => {
    console.log('Contact form submitted:', data);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen">
      {/* Wavy Banner - New Component */}
      <WavyBanner
        title="KSC"
        subtitle="Katun Solution Center"
        backgroundColor="bg-[#4973ff]"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button 
            variant="outline" 
            size="lg"
            className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Explorar Servicios
          </Button>
          <Button 
            variant="primary" 
            size="lg"
            className="bg-white text-blue-900 hover:bg-gray-100"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Contactar Ahora
          </Button>
        </div>
      </WavyBanner>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Resultados que Hablan por Sí Solos
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <FadeIn delay={0.1}>
              <Counter end={150} suffix="+" label="Proyectos Completados" />
            </FadeIn>
            <FadeIn delay={0.2}>
              <Counter end={98} suffix="%" label="Satisfacción del Cliente" />
            </FadeIn>
            <FadeIn delay={0.3}>
              <Counter end={24} suffix="/7" label="Soporte Técnico" />
            </FadeIn>
            <FadeIn delay={0.4}>
              <Counter end={5} suffix=" años" label="Experiencia" />
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
              Nuestros Servicios
            </h2>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card padding="lg" shadow="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🌐</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Desarrollo Web</h3>
                  <p className="text-gray-600 mb-6">
                    Sitios web modernos, responsivos y optimizados para SEO utilizando las últimas tecnologías.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    <li>• Next.js y React</li>
                    <li>• Diseño responsivo</li>
                    <li>• Optimización SEO</li>
                    <li>• Performance óptimo</li>
                  </ul>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card padding="lg" shadow="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">📈</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Marketing Digital</h3>
                  <p className="text-gray-600 mb-6">
                    Estrategias de marketing digital para hacer crecer tu negocio y aumentar tus ventas online.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    <li>• Google Ads</li>
                    <li>• Email Marketing</li>
                    <li>• WhatsApp Business</li>
                    <li>• Analytics y reporting</li>
                  </ul>
                </div>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card padding="lg" shadow="lg">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Soporte Técnico</h3>
                  <p className="text-gray-600 mb-6">
                    Mantenimiento y soporte continuo para garantizar el funcionamiento óptimo de tus soluciones.
                  </p>
                  <ul className="text-left space-y-2 text-sm text-gray-700">
                    <li>• Monitoreo 24/7</li>
                    <li>• Actualizaciones</li>
                    <li>• Backup automático</li>
                    <li>• Soporte especializado</li>
                  </ul>
                </div>
              </Card>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ¿Listo para Comenzar tu Proyecto?
              </h2>
              <p className="text-xl text-gray-600">
                Contáctanos y descubre cómo podemos ayudarte a hacer crecer tu negocio.
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.3}>
            <ContactForm onSubmit={handleContactSubmit} />
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold text-white mb-6">
              ¿Tienes una Idea? ¡Hagámosla Realidad!
            </h2>
            <p className="text-xl text-blue-200 mb-8">
              Nos especializamos en convertir ideas en soluciones digitales exitosas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-900"
                onClick={() => window.open('mailto:info@katun.com', '_blank')}
              >
                Contactar por Email
              </Button>
              <Button 
                variant="primary" 
                size="lg"
                className="bg-green-600 hover:bg-green-700"
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              >
                WhatsApp
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
