'use client';

import type { Metadata } from 'next';
import Script from 'next/script';
import { useRef } from 'react';
import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import FeatureShowcase from '@/components/ui/FeatureShowcase';
import AnimatedIcon, { AnimatedIconRef } from '@/components/ui/AnimatedIcon';

// Feature Card Component
interface Feature {
  title: string;
  description: string;
  icon: string;
  solution: 'kpax' | 'papercut' | 'myq' | 'kdfm' | 'Inicio';
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const iconRef = useRef<AnimatedIconRef>(null);

  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 cursor-pointer"
      onMouseEnter={() => iconRef.current?.playForward()}
      onMouseLeave={() => iconRef.current?.playBackward()}
    >
      <div className="flex justify-center mb-4">
        <AnimatedIcon 
          ref={iconRef}
          iconName={feature.icon} 
          solution={feature.solution} 
          className="w-20 h-20"
          colorTheme="gray"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-600 mb-3">{feature.title}</h3>
      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function SolutionGrayPage() {
  const menuItems = [
    { label: 'Inicio', href: '/ksc' },
    {
      label: 'Soluciones',
      href: '/soluciones',
      dropdown: [
        { label: 'Gestión de Impresión', href: '/papercut', image: '/images/services/gestao-impressao.png' },
        { label: 'Gestión de Equipos', href: '/kpax', image: '/images/services/gestao-equipamentos.png' },
        { label: 'MyQ', href: '/myq', image: '/images/services/myq-logo.png' },
        { label: 'KDFM', href: '/kdfm', image: '/images/services/kdfm-logo.png' },
      ],
    },
    { label: 'Quiénes Somos', href: '/quienes-somos' },
    { label: 'Proveedores', href: '/proveedores' },
    { label: 'Contacto', href: '/contacto' },
  ];

  return (
    <>
      <NavBar menuItems={menuItems} logo="/kws.svg" />
      
      {/* Hero Banner */}
      <HeroBannerWaves
        title="KDFM"
        subtitle="Gestión eficiente y monitoreo de dispositivos de impresión para optimizar Recursos y reducir costos."
        gradientFrom="#4b5563" // gray-600
        gradientTo="#6b7280"   // gray-500
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluciones', href: '/soluciones' },
          { label: 'KDFM', href: '/kdfm' }
        ]}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo and Description */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo: centered and larger (responsive) */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-8">
                <Image
                  src="/images/services/kdfm-logo.png"
                  alt="KDFM"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-gray-600 mb-6">
                Monitoreo Inteligente KDFM
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                KDFM proporciona visibilidad total sobre su flota de impresión. Con monitoreo
                transparente y automatizado, usted puede gestionar suministros, anticipar mantenimientos
                y tomar decisiones basadas en datos reales.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Experimente una reducción significativa de los costos operativos y desperdicios,
                garantizando que sus dispositivos estén siempre funcionando con la máxima eficiencia.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-gray-600 to-gray-700">
                  <a href="/contacto" className="text-inherit no-underline">Solicitar Demo</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#Recursos" className="text-inherit no-underline">Ver Recursos</a>
                </Button>
              </div>
            </motion.div>

            {/* Statistics Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-gray-500 to-gray-700 p-10 rounded-2xl shadow-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-8">Impacto Mensurável</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <p className="text-lg opacity-90">Lorem Ipsum</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <p className="text-lg opacity-90">Dolor Sit Amet</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">50+</div>
                  <p className="text-lg opacity-90">Consectetur</p>
                </div>

                <div>
                  <div className="text-5xl font-bold mb-2">Top</div>
                  <p className="text-lg opacity-90">Adipiscing Elit</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section id="Recursos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-600 mb-6"
            >
              Recursos Principais
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Monitoreo Remoto',
                description: 'Acompanhe o status e a saúde de todos os seus dispositivos de impressão em tempo real, de qualquer lugar.',
                icon: 'Monitoreo Remoto',
                solution: 'kpax'
              },
              {
                title: 'Gestión de Suprimentos',
                description: 'Receba alertas automáticos de níveis de toner e facilite a reposição just-in-time, evitando paradas.',
                icon: 'Gestión de Suprimentos',
                solution: 'kpax'
              },
              {
                title: 'Manutenção Preditiva',
                description: 'Antecipe falhas técnicas analisando dados históricos e agende manutenções antes que o equipamento pare.',
                icon: 'Manutenção Preditiva',
                solution: 'kpax'
              },
              {
                title: 'Soporte Multi-Marca',
                description: 'Gerencie dispositivos de diferentes fabricantes em uma única interface centralizada e padronizada.',
                icon: 'Multi-Marca',
                solution: 'papercut'
              },
              {
                title: 'Controle de Custos',
                description: 'Identifique oportunidades de economia, elimine desperdícios e otimize o uso de cada equipamento.',
                icon: 'Controle de Custos',
                solution: 'papercut'
              },
              {
                title: 'Alertas Inteligentes',
                description: 'Configure notificações personalizadas para eventos críticos e mantenha o controle total da operação.',
                icon: 'Alertas Inteligentes',
                solution: 'kpax'
              }
            ].map((feature, index) => (
              <FeatureCard 
                key={index} 
                feature={feature as Feature} 
                index={index} 
              />
            ))}
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
