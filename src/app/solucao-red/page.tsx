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
  solution: 'kpax' | 'papercut' | 'megaged' | 'wikialphabet' | 'home';
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
          colorTheme="red"
        />
      </div>
      <h3 className="text-xl font-bold text-red-600 mb-3">{feature.title}</h3>
      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function SolutionRedPage() {
  const menuItems = [
    { label: 'Home', href: '/ksc' },
    {
      label: 'Soluções',
      href: '/solucoes',
      dropdown: [
        { label: 'Gestão de Impressão', href: '/papercut', image: '/images/services/gestao-impressao.png' },
        { label: 'Gestão de Equipamentos', href: '/kpax', image: '/images/services/gestao-equipamentos.png' },
        { label: 'Gestão Eletrônica de Documentos', href: '/megaged', image: '/images/services/gestao-documentos.png' },
        { label: 'Plataforma de Ensino Digital', href: '/wiki-alphabet', image: '/images/services/plataforma-ensino.png' },
        { label: 'MyQ', href: '/solucao-red', image: '/images/services/myq-logo.png' },
        { label: 'KDFM', href: '/solucao-gray', image: '/images/services/kdfm-logo.png' },
      ],
    },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Fornecedores', href: '/fornecedores' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <NavBar menuItems={menuItems} logo="/kws.svg" />
      
      {/* Hero Banner */}
      <HeroBannerWaves
        title="MyQ"
        subtitle="Solução completa de gestão de impressão com interface personalizada e fluxos de digitalização inteligentes."
        gradientFrom="#dc2626" // red-600
        gradientTo="#ef4444"   // red-500
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' },
          { label: 'MyQ', href: '/solucao-red' }
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
                  src="/images/services/myq-logo.png"
                  alt="MyQ"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-red-600 mb-6">
                Gestão Inteligente MyQ
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O MyQ é uma solução premiada de gestão de impressão que simplifica fluxos de trabalho 
                e aumenta a eficiência. Com uma interface personalizada para cada usuário, permite 
                digitalização avançada com OCR, impressão segura via dispositivos móveis e relatórios detalhados.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Ideal para empresas que buscam reduzir custos e melhorar a segurança documental, 
                o MyQ se adapta perfeitamente ao seu ambiente de impressão, oferecendo controle total 
                e facilidade de uso inigualável.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-red-600 to-red-700">
                  <a href="/contato" className="text-inherit no-underline">Solicitar Demo</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#recursos" className="text-inherit no-underline">Ver Recursos</a>
                </Button>
              </div>
            </motion.div>

            {/* Statistics Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-red-500 to-red-700 p-10 rounded-2xl shadow-2xl text-white"
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
      <section id="recursos" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-red-600 mb-6"
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
                title: 'Interface Personalizada',
                description: 'Personalize a interface de cada usuário para exibir apenas as funções necessárias, simplificando o uso diário.',
                icon: 'Dashboard Executivo',
                solution: 'kpax'
              },
              {
                title: 'Digitalização OCR',
                description: 'Digitalize documentos diretamente com OCR integrado e fluxos automatizados para seus destinos favoritos.',
                icon: 'Digitalização Inteligente',
                solution: 'megaged'
              },
              {
                title: 'Impressão Segura',
                description: 'Garanta a confidencialidade com liberação de impressão segura via crachá, PIN ou dispositivo móvel.',
                icon: 'Impressão Segura',
                solution: 'papercut'
              },
              {
                title: 'Relatórios de Custos',
                description: 'Tenha controle total com relatórios detalhados de custos por usuário, departamento e impressora.',
                icon: 'Relatórios Detalhados',
                solution: 'papercut'
              },
              {
                title: 'Mobilidade Total',
                description: 'Imprima de qualquer lugar e dispositivo móvel com total segurança e facilidade (BYOD).',
                icon: 'Impressão Mobile',
                solution: 'papercut'
              },
              {
                title: 'Sustentabilidade',
                description: 'Reduza o desperdício de papel e energia com políticas de impressão conscientes e monitoramento.',
                icon: 'Sustentabilidade',
                solution: 'papercut'
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
