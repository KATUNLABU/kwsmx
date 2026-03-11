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
        gradientFrom="#b80e0e" // red-600
        gradientTo="#c60e0e"   // red-500
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' },
          { label: 'MyQ', href: '/solucao-red' }
        ]}
      />

      {/* Download CTA Section - FREE 2 YEARS */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 py-12 text-white relative overflow-hidden shadow-lg">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="max-w-2xl text-center md:text-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-bold mb-4 border border-white/30 text-white">
                🎁 Oferta Especial Exclusiva
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                Experimente o MyQ <span className="text-yellow-300">Grátis por 2 Anos!</span>
              </h2>
              <p className="text-white/90 text-lg">
                Baixe agora a versão oficial e transforme a gestão de impressão da sua empresa. 
                Sem custos ocultos, acesso total às funcionalidades premium.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="bg-white text-red-600 hover:bg-red-50 hover:text-red-700 shadow-2xl border-none text-xl px-10 py-6 font-bold rounded-full transition-all">
                <a href="#download" className="text-inherit no-underline flex items-center gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  <span>BAIXAR AGORA</span>
                </a>
              </Button>
              <p className="text-white/70 text-xs text-center mt-3 font-medium">Versão 10.2 • Windows Server</p>
            </motion.div>
          </div>
        </Container>
      </section>

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
                

      {/* Technical Requirements Section */}
      <section id="download" className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-4">Pré-requisitos de Instalação</h2>
            <p className="text-slate-600 max-w-3xl mx-auto text-lg">
              Para garantir o desempenho ideal do MyQ X, verifique se o seu ambiente atende aos requisitos técnicos recomendados abaixo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Server Specifications */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
            >
              <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-3 border-b border-red-100 pb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 01-2 2v4a2 2 0 012 2h14a2 2 0 012-2v-4a2 2 0 01-2-2m-2-4h.01M17 16h.01" /></svg>
                Especificações do Servidor
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span> Sistema Operacional
                  </h4>
                  <p className="text-slate-600 ml-4">Windows Server 2016 / 2019 / 2022 (com atualizações recentes)</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span> Componentes Necessários
                  </h4>
                  <ul className="ml-8 list-disc text-slate-600 space-y-1">
                    <li>Microsoft .NET Runtime 8, ASP .NET Core 8</li>
                    <li>Windows Desktop Runtime 8</li>
                    <li>Java Runtime Environment (JRE) 8</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span> Hardware
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2 ml-4">
                    <div className="bg-slate-50 p-4 rounded-lg border border-slate-100">
                      <span className="block font-bold text-slate-700 text-sm mb-1 uppercase tracking-wide">Padrão</span>
                      <p className="text-slate-600">4 GB RAM</p>
                      <p className="text-slate-600">4 Núcleos CPU</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                      <span className="block font-bold text-red-700 text-sm mb-1 uppercase tracking-wide">Alta Demanda*</span>
                      <p className="text-slate-700">8 GB RAM</p>
                      <p className="text-slate-700">8 Núcleos CPU</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500 mt-2 ml-4">*Para 400+ impressoras, Job Parser ativo, OCR intenso ou uso de API elevado.</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-red-500 rounded-full"></span> Armazenamento
                  </h4>
                  <p className="text-slate-600 ml-4">Mínimo 3 GB livres. <span className="font-semibold text-slate-800">Recomendado: 100 GB</span> (SSD para alto desempenho).</p>
                </div>
              </div>
            </motion.div>

            {/* Network & Software */}
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-3 border-b border-red-100 pb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                  Capacidade & Navegadores
                </h3>
                <div className="grid grid-cols-2 gap-6">
                 <div>
                    <h5 className="font-bold text-slate-700 mb-1">Usuários/Grupos</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>Até 100.000 usuários</li>
                      <li>Até 40.000 grupos</li>
                      <li>Max 50 grupos/usuário</li>
                    </ul>
                 </div>
                 <div>
                    <h5 className="font-bold text-slate-700 mb-1">Navegadores</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>Chrome 91+</li>
                      <li>Edge 91+</li>
                      <li>Firefox 57+</li>
                      <li>Safari 15+</li>
                    </ul>
                 </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold text-red-600 mb-6 flex items-center gap-3 border-b border-red-100 pb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  Portas de Rede (TCP)
                </h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    { p: 515, d: 'Jobs' }, { p: '8080/8090', d: 'Web' }, { p: 3050, d: 'DB' }, 
                    { p: 25, d: 'SMTP' }, { p: 9100, d: 'RAW' }, { p: 389, d: 'LDAP' }, 
                    { p: 636, d: 'LDAPS' }, { p: 443, d: 'IPPS' }, { p: 161, d: 'SNMP' }
                  ].map((port, i) => (
                    <div key={i} className="px-3 py-1.5 bg-slate-100 text-slate-700 rounded-md text-sm font-mono border border-slate-200 flex items-center gap-2 group relative cursor-help">
                      <span className="font-bold">{port.p}</span>
                      <span className="text-xs text-slate-400 border-l border-slate-300 pl-2">{port.d}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-slate-50 text-xs text-slate-500">
                  <span className="font-semibold">Outras:</span> 21 (FTP), 11108 (Terminais), 11112 (LPM), 49152-65535 (FTP Data). 
                  <span className="block mt-1">Protocolo ICMP habilitado para PING.</span>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>title: 'Digitalização OCR',
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
