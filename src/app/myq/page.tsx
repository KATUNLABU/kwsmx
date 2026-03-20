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

// Reason data
const reasons = [
  {
    number: "01",
    title: "Experiência de Usuário Personalizada",
    description: "Ninguém deveria perder tempo tentando descobrir como usar uma copiadora. Com o MyQ, seus usuários têm acesso a uma interface intuitiva e fácil de usar, personalizada com fluxos de trabalho específicos para cada perfil."
  },
  {
    number: "02",
    title: "Controle de Custos e Sustentabilidade",
    description: "Reduza o desperdício de impressões desnecessárias. Com relatórios detalhados, você nunca perderá o rastro da atividade. Implemente políticas baseadas em regras para reduzir custos e minimizar sua pegada ambiental."
  },
  {
    number: "03",
    title: "Gestão de Dispositivos e Sistemas",
    description: "O MyQ oferece controle total sobre seu ambiente de impressão. Sua equipe de TI obtém uma visão completa da frota, incluindo status, alertas, contadores e níveis de suprimentos, tudo em uma interface web amigável."
  },
  {
    number: "04",
    title: "Segurança de Dados",
    description: "Proteja dados sensíveis e garanta conformidade com a LGPD. O MyQ fortalece a segurança da rede e exige autenticação para liberar trabalhos, prevenindo vazamentos de informações e garantindo governança."
  },
  {
    number: "05",
    title: "Impressão Conveniente e Segura",
    description: "Envie trabalhos para uma fila segura e libere-os em qualquer impressora da rede (Find-Me Printing) via crachá, PIN ou celular. Segurança e conveniência andando juntas para o usuário final."
  },
  {
    number: "06",
    title: "Flexibilidade e Mobilidade",
    description: "Suporte total para BYOD e impressão móvel. Seja de um notebook, tablet ou smartphone, o MyQ garante que seus usuários possam imprimir o que precisarem, de onde estiverem, com total segurança."
  },
  {
    number: "07",
    title: "Digitalização e Fluxos de Trabalho",
    description: "Digitalize com um toque para e-mail, pastas ou nuvem. Elimine a tentativa e erro com perfis de digitalização personalizados que automatizam tarefas complexas para cada departamento."
  },
  {
    number: "08",
    title: "Escalabilidade e Adaptabilidade",
    description: "Do pequeno escritório a grandes corporações com 25.000+ usuários. O MyQ escala com seu crescimento e se integra a diversas marcas de hardware, mantendo uma experiência consistente."
  },
  {
    number: "09",
    title: "Gestão de Mudanças",
    description: "Use dados reais para tomar decisões inteligentes. Otimize processos, planeje custos e alinhe o ambiente de impressão às necessidades da organização, minimizando a resistência a mudanças."
  },
  {
    number: "10",
    title: "Processamento e OCR",
    description: "Transformação digital real com OCR avançado. Extraia dados automaticamente de documentos digitalizados e armazene-os onde precisar, eliminando a digitação manual e erros."
  },
  {
    number: "11",
    title: "Design Personalizável",
    description: "O software deve refletir sua marca. Personalize a interface dos terminais com seu logotipo, cores e ícones, criando um ambiente familiar que reforça a identidade da sua organização."
  }
];

const myqDownloads = [
  {
    id: 'v10-2-p21',
    version: 'Versão 10.2 (Patch 21)',
    fileName: 'MyQ Print Server 10.2 (patch 21).exe',
    href: '/downloads/instalador.exe"',
  },
];

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
        { label: 'MyQ', href: '/myq', image: '/images/services/myq-logo.png' },
        { label: 'KDFM', href: '/kdfm', image: '/images/services/kdfm-logo.png' },
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
        gradientFrom="#ca1616" // red-600
        gradientTo="#6a2f2f"   // red-500
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' },
          { label: 'MyQ', href: '/myq' }
        ]}
      />

      {/* Download CTA Section - FREE 2 YEARS */}
      <section className="py-16 md:py-24 bg-gray-50 relative overflow-hidden">
        <Container className="max-w-full px-0">
          <div className="relative shadow-2xl flex flex-col lg:flex-row w-full">
            
            {/* Left Block - White Background with Red Text */}
            <motion.div 
              className="w-full lg:w-3/5 p-10 md:p-20 bg-white text-gray-900 relative z-10 flex flex-col justify-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Subtle Texture */}
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #dc2626 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>
              
              <div className="relative z-10 max-w-2xl mx-auto lg:mx-0">
                <div className="inline-block bg-red-100 px-5 py-2 rounded-full text-sm font-bold mb-6 border border-red-200 text-red-700 flex items-center gap-2 w-fit">
                  <span>🎁</span> Oferta Especial Exclusiva
                </div>
                
                <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-gray-900">
                  Experimente o MyQ <br/>
                  <motion.span 
                    className="text-red-600 inline-block origin-left"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                  >
                    Grátis por 2 Anos!
                  </motion.span>
                </h2>
                
                <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mb-8">
                  Transforme a gestão de impressão da sua empresa hoje mesmo. 
                  Sem custos ocultos, acesso total às funcionalidades premium da versão Enterprise.
                </p>

                <div className="flex flex-wrap gap-6 text-sm font-semibold text-gray-500">
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Versão 10.2</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Windows Server</span>
                  <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-green-500"></div> Suporte Dedicado</span>
                </div>
              </div>
            </motion.div>
            
            {/* Right Block - Red Background with White/Action */}
            <motion.div 
              className="w-full lg:w-2/5 p-10 md:p-20 bg-gradient-to-br from-red-600 to-red-700 flex flex-col items-center justify-center relative overflow-hidden"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-800/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(45deg, #ffffff 25%, transparent 25%, transparent 50%, #ffffff 50%, #ffffff 75%, transparent 75%, transparent)', backgroundSize: '60px 60px' }}></div>

              <motion.div 
                className="relative z-10 w-full max-w-md flex flex-col items-center text-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2">Comece Agora</h3>
                <p className="text-red-100 mb-8">Download instantâneo e seguro</p>
                
                <Button size="lg" className="w-full bg-white text-red-600 hover:bg-red-50 hover:text-red-700 hover:shadow-2xl shadow-xl border-none text-xl py-8 font-bold rounded-xl transition-all group relative overflow-hidden">
                  <a href="#download" className="text-inherit no-underline flex items-center justify-center gap-4 w-full h-full relative z-10">
                    <span className="bg-red-100 p-2 rounded-lg text-red-600 group-hover:bg-red-200 transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </span>
                    <span className="tracking-wide">BAIXAR AGORA</span>
                  </a>
                  {/* Button Shine Effect */}
                  <div className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 group-hover:animate-shimmer" style={{ animationDuration: '1s' }}></div>
                </Button>
                
                <p className="text-red-200/80 text-xs mt-6">
                  Ao clicar em baixar, você concorda com nossos Termos de Serviço e Política de Privacidade.
                </p>
              </motion.div>
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

      {/* 11 Reasons Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-red-50 rounded-bl-[100px] -z-10 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gray-50 rounded-tr-[100px] -z-10 opacity-50"></div>

        <Container>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-red-600 font-bold tracking-wider text-sm uppercase mb-2 block">Diferenciais Competitivos</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              11 Razões para Escolher <span className="text-red-600 relative">MyQ<span className="absolute bottom-1 left-0 w-full h-3 bg-red-100 -z-10 opacity-60"></span></span>
            </h2>
            <p className="text-xl text-gray-600">
              Descubra por que o MyQ é a escolha preferida de milhares de organizações em todo o mundo para transformar sua gestão de impressão.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {reasons.map((reason, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 rounded-2xl bg-white border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-10 font-black text-6xl text-gray-300 group-hover:text-red-200 transition-colors">
                  {reason.number}
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 font-bold text-xl mb-6 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300">
                  {reason.number}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-red-600 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Key Value Propositions Summary */}
          <div className="bg-gray-900 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 rounded-full blur-[100px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-6">Por que MyQ se destaca?</h3>
                <p className="text-gray-300 mb-8 text-lg">
                  Reconhecido pela Keypoint Intelligence por seu excelente design e facilidade de uso, o MyQ oferece uma plataforma completa que integra gestão, segurança e mobilidade.
                </p>
                <Button variant="primary" size="lg" className="bg-red-600 hover:bg-red-700 border-none">
                  <a href="#download" className="text-inherit no-underline">Experimente Agora</a>
                </Button>
              </div>
              
              <ul className="space-y-4">
                {[
                  "Integração nativa com as principais marcas de MFP",
                  "Recuperação de custos e cotas de impressão",
                  "Múltiplas filas para diferentes processos",
                  "Regras de impressão robustas e flexíveis",
                  "Suporte a terminais de hardware para legados",
                  "Relatórios flexíveis com parâmetros personalizáveis",
                  "App móvel poderoso para Android e iOS",
                  "Cliente desktop para Windows, Mac e Linux"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200">
                    <svg className="w-6 h-6 text-green-400 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Technical Requirements Section */}
      <section id="download" className="py-20 bg-slate-50 border-t border-slate-200">
        <Container>
          <div className="mb-12 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-6 py-4">
              <h3 className="text-lg font-bold text-slate-800">Versões Disponíveis</h3>
              <span className="text-sm font-medium text-slate-500">Download oficial</span>
            </div>
            <ul className="divide-y divide-slate-100">
              {myqDownloads.map((item, index) => (
                <li key={item.id} className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-red-100 text-sm font-bold text-red-700">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-base font-semibold text-slate-900">{item.version}</p>
                      <p className="text-sm text-slate-500">{item.fileName}</p>
                    </div>
                  </div>
                  <a
                    href={item.href}
                    download={item.fileName}
                    className="inline-flex items-center justify-center rounded-lg bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700"
                  >
                    Baixar
                  </a>
                </li>
              ))}
            </ul>
          </div>

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
      </section>

      <Footer />
    </>
  );
}
