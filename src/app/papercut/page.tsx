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
import PrintDashboardIllustration from '@/components/illustrations/PrintDashboard';
import AnimatedIcon, { AnimatedIconRef } from '@/components/ui/AnimatedIcon';

// Feature Card Component
function FeatureCard({ feature, index, solution }: { feature: { title: string; description: string }; index: number; solution: 'kpax' | 'papercut' | 'myq' | 'kdfm' }) {
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
          iconName={feature.title} 
          solution={solution} 
          className="w-20 h-20"
        />
      </div>
      <h3 className="text-xl font-bold text-[#004990] mb-3">{feature.title}</h3>
      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
    </motion.div>
  );
}

export default function PaperCutPage() {
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
      
      {/* HubSpot Tracking Code */}
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/242609850.js"
        strategy="afterInteractive"
      />

      {/* Hero Banner */}
      <HeroBannerWaves
        title="PaperCut MF - Gestión de Impresión Inteligente"
        subtitle="Solución líder mundial em gestão de impressão que otimiza custos, aumenta a segurança e promove sustentabilidade."
        gradientFrom="#047857"
        gradientTo="#10b981"
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluciones', href: '/soluciones' },
          { label: 'PaperCut MF', href: '/papercut' }
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
                  src="/images/services/gestao-impressao.png"
                  alt="PaperCut MF"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'center' }}
                />
              </div>
              
              <h2 className="text-4xl font-bold text-[#004990] mb-6">
                Controle Total do Seu Ambiente de Impresión
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O PaperCut MF é a solução de gestão de impressão mais implementada globalmente, 
                oferecendo controle completo sobre custos, segurança e sustentabilidade do seu 
                ambiente de impressão corporativo.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Com mais de 100 milhões de usuários em 138 países, o PaperCut MF transforma a 
                maneira como as empresas gerenciam seus Recursos de impressão, trazendo economia, 
                eficiência e responsabilidade ambiental.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-green-600 to-green-700">
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
              className="bg-gradient-to-br from-green-500 to-green-700 p-10 rounded-2xl shadow-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-8">Resultados Comprovados</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">30%</div>
                  <p className="text-lg opacity-90">Redução nos custos de impressão</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">100M+</div>
                  <p className="text-lg opacity-90">Usuários em todo o mundo</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">138</div>
                  <p className="text-lg opacity-90">Países atendidos</p>
                </div>

                <div>
                  <div className="text-5xl font-bold mb-2">6 meses</div>
                  <p className="text-lg opacity-90">ROI médio comprovado</p>
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
              className="text-4xl md:text-5xl font-bold text-[#004990] mb-6"
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
              Tudo o que você precisa para otimizar seu ambiente de impressão
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Controle de Custos',
                description: 'Monitore e controle todos os gastos com impressão em tempo real. Defina cotas, políticas e regras personalizadas por usuário ou departamento.'
              },
              {
                title: 'Impresión Segura',
                description: 'Libere documentos somente com autenticação (cartão, PIN ou biometria). Evite impressões esquecidas e garanta a confidencialidade.'
              },
              {
                title: 'Relatórios Detalhados',
                description: 'Análises completas de uso, custos e tendências. Dashboards executivos com insights para tomada de decisão estratégica.'
              },
              {
                title: 'Sustentabilidade',
                description: 'Reduza o desperdício de papel e toner. Acompanhe métricas ambientais e promova práticas sustentáveis na empresa.'
              },
              {
                title: 'Integração AD LDAP',
                description: 'Integração nativa com Active Directory e LDAP. Sincronização automática de usuários e grupos para gerenciamento simplificado.'
              },
              {
                title: 'Multi-Marca',
                description: 'Soporte a todas as principais marcas de impressoras e multifuncionais. Gestión unificada de ambientes heterogêneos.'
              },
              {
                title: 'Impresión Mobile',
                description: 'Imprima de qualquer lugar usando smartphones e tablets. Soporte a Google Cloud Print, AirPrint e aplicativo móvel próprio.'
              },
              {
                title: 'Auditoria Completa',
                description: 'Rastreie todas as impressões com logs detalhados. Conformidade com políticas de segurança e requisitos regulatórios.'
              },
              {
                title: 'Find-Me Printing',
                description: 'Imprima de qualquer impressora da rede. Liberação com cartão ou PIN em qualquer dispositivo disponível.'
              }
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} solution="papercut" />
            ))}
          </div>
        </Container>
      </section>

      {/* Dashboard Showcase */}
      <FeatureShowcase
        title="Dashboard Intuitivo e Completo"
        description="Acompanhe métricas em tempo real com dashboards personalizáveis. Visualize custos, volume de impressões, economia gerada e muito mais em uma interface moderna e fácil de usar. Tome decisões estratégicas baseadas em dados precisos e atualizados."
        imagePosition="right"
        gradient="from-green-50 to-white"
        icon={
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        }
      >
        <PrintDashboardIllustration />
      </FeatureShowcase>

      {/* Video Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                Conheça o PaperCut MF em Ação
              </h2>
              <p className="text-xl text-gray-600">
                Veja como nossa solução transforma a gestão de impressão
              </p>
            </div>

            <div className="relative group">
              {/* Video Container with Shadow and Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-green-200 bg-gradient-to-br from-green-50 to-white p-2">
                <div className="relative rounded-xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/k5Ok7T5QXLc"
                    title="All about print management at PaperCut"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-200 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-green-300 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Image Section with Real Photo */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-[#004990] mb-6">
                Transforme Seu Ambiente Corporativo
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Empresas líderes confiam no PaperCut MF para otimizar seus processos de impressão. 
                Com nossa solução, você terá controle total sobre custos, segurança e sustentabilidade.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Junte-se a milhares de organizações ao redor do mundo que já reduziram seus custos 
                em até 30% e aumentaram significativamente a eficiência operacional.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/imagenes solcuiones/Transforme Seu Ambiente Corporativo.jpeg"
                alt="Ambiente corporativo moderno"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700 text-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Por Que Escolher PaperCut MF?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              Beneficios que fazem a diferença no seu negócio
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Economia Significativa',
                description: 'Redução média de 30% nos custos com impressão. ROI comprovado em 6 meses através de políticas inteligentes e eliminação de desperdícios.'
              },
              {
                title: 'Segurança Reforçada',
                description: 'Documentos confidenciais protegidos com autenticação obrigatória. Auditoria completa de todas as atividades de impressão.'
              },
              {
                title: 'Sustentabilidade Corporativa',
                description: 'Reduza o impacto ambiental com métricas de CO₂, árvores salvas e consumo consciente. Contribua para os objetivos ESG da empresa.'
              },
              {
                title: 'Gestión Simplificada',
                description: 'Interface intuitiva e centralizada. Administre todo o ambiente de impressão de qualquer lugar através do console web.'
              },
              {
                title: 'Escalabilidade Total',
                description: 'De 5 a 50.000+ usuários. A solução cresce com seu negócio sem perda de performance ou necessidade de reestruturação.'
              },
              {
                title: 'Soporte Global',
                description: 'Documentação completa em português, treinamentos especializados e suporte técnico da KSC disponível 24/7.'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className="text-lg opacity-90 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-green-50 p-12 rounded-2xl text-center border border-green-200"
          >
            <h2 className="text-4xl font-bold text-[#004990] mb-6">
              Pronto para Otimizar Sua Gestión de Impresión?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Solicite uma demonstração gratuita e descubra como o PaperCut MF pode 
              transformar o ambiente de impressão da sua empresa.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-green-600 to-green-700">
                <a href="/contacto" className="text-inherit no-underline">Solicitar Demonstração</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
