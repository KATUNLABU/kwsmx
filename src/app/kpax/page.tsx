'use client';

import type { Metadata } from 'next';
import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import FeatureShowcase from '@/components/ui/FeatureShowcase';
import FleetMonitoringIllustration from '@/components/illustrations/FleetMonitoring';

export default function KPAXPage() {
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
      ],
    },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Fornecedores', href: '/fornecedores' },
    { label: 'Contato', href: '/contato' },
  ];

  return (
    <>
      <NavBar menuItems={menuItems} logo="/KSC.svg" />

      {/* Hero Banner */}
      <HeroBannerWaves
        title="KPAX Fleet - Gestão Inteligente de Equipamentos"
        subtitle="Monitoramento remoto, manutenção preditiva e otimização de frota em tempo real para máxima eficiência operacional."
        gradientFrom="#1d4ed8"
        gradientTo="#3b82f6"
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' },
          { label: 'KPAX Fleet', href: '/kpax' }
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
                  src="/images/services/gestao-equipamentos.png"
                  alt="KPAX Fleet"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-[#004990] mb-6">
                Transforme a Gestão da Sua Frota de Equipamentos
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O KPAX Fleet é a solução completa para monitoramento, gestão e otimização de 
                frotas de impressoras e multifuncionais. Com tecnologia de ponta, oferecemos 
                visibilidade total do seu parque de equipamentos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Reduza custos operacionais, aumente a disponibilidade dos equipamentos e tome 
                decisões estratégicas baseadas em dados reais e atualizados em tempo real.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
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
              className="bg-gradient-to-br from-blue-500 to-blue-700 p-10 rounded-2xl shadow-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-8">Impacto Mensurável</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">40%</div>
                  <p className="text-lg opacity-90">Redução em tempo de inatividade</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <p className="text-lg opacity-90">Monitoramento contínuo</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">95%</div>
                  <p className="text-lg opacity-90">Disponibilidade de equipamentos</p>
                </div>

                <div>
                  <div className="text-5xl font-bold mb-2">30%</div>
                  <p className="text-lg opacity-90">Economia em suprimentos</p>
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
              Tecnologia avançada para máxima eficiência operacional
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '📡',
                title: 'Monitoramento Remoto',
                description: 'Acompanhe em tempo real o status de todos os equipamentos. Níveis de toner, contador de páginas, erros e alertas centralizados.'
              },
              {
                icon: '🔧',
                title: 'Manutenção Preditiva',
                description: 'Algoritmos inteligentes preveem falhas antes que aconteçam. Agende manutenções preventivas e evite paradas não planejadas.'
              },
              {
                icon: '📊',
                title: 'Dashboard Executivo',
                description: 'KPIs e métricas estratégicas em dashboards customizáveis. Visão completa da performance da frota em tempo real.'
              },
              {
                icon: '📦',
                title: 'Gestão de Suprimentos',
                description: 'Controle automático de estoque de toner e peças. Pedidos automáticos quando níveis atingem limite mínimo configurado.'
              },
              {
                icon: '⚠️',
                title: 'Alertas Inteligentes',
                description: 'Notificações proativas por email, SMS ou WhatsApp. Configure regras personalizadas para cada tipo de evento.'
              },
              {
                icon: '📝',
                title: 'Gestão de SLA',
                description: 'Acompanhe e garanta o cumprimento de SLAs contratuais. Relatórios automáticos de desempenho e disponibilidade.'
              },
              {
                icon: '📈',
                title: 'Análise de Tendências',
                description: 'Identifique padrões de uso e falhas recorrentes. Insights para otimização da frota e planejamento de investimentos.'
              },
              {
                icon: '🔐',
                title: 'Segurança Avançada',
                description: 'Acesso controlado por perfis e permissões. Logs de auditoria completos para todas as operações realizadas.'
              },
              {
                icon: '🌐',
                title: 'Multi-Locação',
                description: 'Gerencie equipamentos em múltiplas filiais ou clientes. Visão consolidada e segmentada conforme necessidade.'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">{feature.title}</h3>
                <p className="text-gray-700 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Fleet Monitoring Showcase */}
      <FeatureShowcase
        title="Monitoramento em Tempo Real"
        description="Visualize o status completo da sua frota em um único painel. Acompanhe níveis de toner, status de equipamentos, alertas automáticos e muito mais. Receba notificações proativas antes que problemas afetem a produtividade da sua equipe."
        imagePosition="left"
        gradient="from-blue-50 to-white"
        icon={
          <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        }
      >
        <FleetMonitoringIllustration />
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
                Veja o KPAX Fleet em Funcionamento
              </h2>
              <p className="text-xl text-gray-600">
                Descubra como gerenciar sua frota de equipamentos de forma inteligente
              </p>
            </div>

            <div className="relative group">
              {/* Video Container with Shadow and Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-200 bg-gradient-to-br from-blue-50 to-white p-2">
                <div className="relative rounded-xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/1l0HHgri0Gw"
                    title="KPAX - Gestão de Equipamentos de Impressão | KSC | PT-BR"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-200 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-300 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Image Section with Real Photo */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl lg:order-1"
            >
              <Image
                src="/foto2.png"
                alt="Gestão de equipamentos em ação"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:order-0"
            >
              <h3 className="text-3xl font-bold text-[#004990] mb-6">
                Eficiência Operacional Comprovada
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                O KPAX Fleet oferece visibilidade total da sua frota de equipamentos com 
                monitoramento em tempo real e alertas inteligentes que previnem paradas não planejadas.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Reduza tempo de inatividade em até 40% e otimize a gestão de suprimentos com 
                pedidos automáticos baseados em dados reais de consumo.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700 text-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Por Que Escolher KPAX Fleet?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl opacity-90 max-w-3xl mx-auto"
            >
              Benefícios tangíveis para seu negócio
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Redução de Downtime',
                description: 'Diminua em até 40% o tempo de inatividade dos equipamentos através de manutenção preditiva e resolução proativa de problemas.'
              },
              {
                title: 'Otimização de Custos',
                description: 'Economize até 30% em suprimentos com gestão inteligente de estoque e compras baseadas em dados reais de consumo.'
              },
              {
                title: 'Aumento de Produtividade',
                description: 'Equipes técnicas mais eficientes com roteamento inteligente de chamados e priorização automática de atendimentos.'
              },
              {
                title: 'Visibilidade Total',
                description: 'Dashboards em tempo real com KPIs estratégicos. Tome decisões informadas com base em dados precisos e atualizados.'
              },
              {
                title: 'Escalabilidade',
                description: 'Solução que cresce com seu negócio. De 10 a 10.000+ equipamentos gerenciados com a mesma eficiência.'
              },
              {
                title: 'Suporte Especializado',
                description: 'Equipe técnica da KSC altamente qualificada. Treinamento completo e suporte 24/7 em português.'
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
            className="bg-gradient-to-br from-gray-50 to-blue-50 p-12 rounded-2xl text-center border border-blue-200"
          >
            <h2 className="text-4xl font-bold text-[#004990] mb-6">
              Pronto para Otimizar Sua Gestão de Equipamentos?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Solicite uma demonstração gratuita e descubra como o KPAX Fleet pode 
              transformar a gestão da sua frota de equipamentos.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-blue-600 to-blue-700">
                <a href="/contato" className="text-inherit no-underline">Solicitar Demonstração</a>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
