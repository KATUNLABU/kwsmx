'use client';

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
import DocumentManagementIllustration from '@/components/illustrations/DocumentManagement';
import AnimatedIcon, { AnimatedIconRef } from '@/components/ui/AnimatedIcon';

// Feature Card Component
function FeatureCard({ feature, index, solution }: { feature: { title: string; description: string }; index: number; solution: 'kpax' | 'papercut' | 'megaged' | 'wikialphabet' }) {
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

export default function MegaGEDPage() {
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
      
      {/* HubSpot Tracking Code */}
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/242609850.js"
        strategy="afterInteractive"
      />

      <HeroBannerWaves
        title="MegaGED - Gestão Eletrônica de Documentos"
        subtitle="Digitalização inteligente, armazenamento seguro e busca instantânea para transformar a gestão documental da sua empresa."
        gradientFrom="#7e22ce"
        gradientTo="#a855f7"
        waveColor="rgba(255, 255, 255, 0.25)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' },
          { label: 'MegaGED', href: '/megaged' }
        ]}
      />

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo: centered and larger (responsive) */}
              <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto mb-8">
                <Image
                  src="/images/services/gestao-documentos.png"
                  alt="MegaGED"
                  fill
                  className="object-contain"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-[#004990] mb-6">
                Transformação Digital Documental
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                O MegaGED é o sistema robusto de gestão eletrônica de documentos que digitaliza, 
                organiza e centraliza toda a informação corporativa, garantindo conformidade 
                legal e agilidade nos processos.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Elimine o papel físico, ganhe espaço, reduza custos e encontre qualquer documento 
                em segundos com busca inteligente e indexação automática por OCR.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700">
                  <a href="/contato" className="text-inherit no-underline">Solicitar Demo</a>
                </Button>
                <Button variant="outline" size="lg">
                  <a href="#recursos" className="text-inherit no-underline">Ver Recursos</a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-purple-500 to-purple-700 p-10 rounded-2xl shadow-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-8">Resultados Transformadores</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">90%</div>
                  <p className="text-lg opacity-90">Eliminação de papel físico</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">70%</div>
                  <p className="text-lg opacity-90">Redução em tempo de busca</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <p className="text-lg opacity-90">Conformidade com LGPD</p>
                </div>

                <div>
                  <div className="text-5xl font-bold mb-2">60%</div>
                  <p className="text-lg opacity-90">Economia de espaço físico</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'Digitalização Inteligente', description: 'Captura automática de documentos com detecção de tipo, rotação e melhoria de imagem. OCR avançado para texto pesquisável.' },
              { title: 'Busca Avançada', description: 'Encontre qualquer documento em segundos. Busca por texto, metadados, tags ou conteúdo indexado por OCR.' },
              { title: 'Workflow Configurável', description: 'Automatize fluxos de aprovação e processos documentais. Notificações e prazos para cada etapa do workflow.' },
              { title: 'Armazenamento Seguro', description: 'Criptografia de ponta a ponta. Backup automático e redundância para garantir integridade dos dados.' },
              { title: 'Tags Inteligentes', description: 'Classificação automática com IA. Organize documentos por projeto, cliente, departamento ou categoria personalizada.' },
              { title: 'Conformidade Legal', description: 'Atende LGPD, ISO 27001 e requisitos fiscais. Logs de auditoria completos e assinatura digital certificada.' },
              { title: 'Relatórios Gerenciais', description: 'Dashboards com métricas de uso, storage e produtividade. Insights para otimização de processos.' },
              { title: 'Integrações', description: 'Conecte com ERP, CRM e outros sistemas corporativos via API REST. Sincronização bidirecional de dados.' },
              { title: 'Acesso Mobile', description: 'Apps nativos para iOS e Android. Capture, visualize e aprove documentos de qualquer lugar.' }
            ].map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} solution="megaged" />
            ))}
          </div>
        </Container>
      </section>

      {/* Document Management Showcase */}
      <FeatureShowcase
        title="Busca Inteligente e Organização Eficiente"
        description="Encontre qualquer documento em segundos com nossa busca avançada por OCR. Organize arquivos por tags, categorias e metadados personalizados. Acompanhe métricas de digitalização e liberação de espaço físico em dashboards intuitivos."
        imagePosition="right"
        gradient="from-purple-50 to-white"
        icon={
          <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        }
      >
        <DocumentManagementIllustration />
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
                Transforme sua Gestão Documental
              </h2>
              <p className="text-xl text-gray-600">
                Veja como o MegaGED revoluciona o gerenciamento de documentos
              </p>
            </div>

            <div className="relative group">
              {/* Video Container with Shadow and Border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-white p-2">
                <div className="relative rounded-xl overflow-hidden bg-black" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/IReyeC6yCrI"
                    title="GED - Gerenciamento Eletrônico de Dados e Documentos | KSC"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
              <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-purple-300 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition-opacity" />
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
                Digitalização Sem Limites
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Com o MegaGED, elimine o papel físico e libere espaço valioso no seu escritório. 
                Nossa solução oferece digitalização inteligente com OCR avançado para busca instantânea.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Garanta conformidade total com LGPD e requisitos fiscais, mantendo todos os documentos 
                organizados, seguros e acessíveis de qualquer lugar.
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
                src="/images/imagenes solcuiones/Digitalização Sem Limites.jpeg"
                alt="Gestão documental moderna"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent"></div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-700 text-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Por Que Escolher MegaGED?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Eliminação de Papel', description: 'Reduza em até 90% o uso de papel físico. Contribua para sustentabilidade e economize com impressão e armazenamento.' },
              { title: 'Busca Instantânea', description: 'Encontre qualquer documento em segundos. Economia de até 70% no tempo gasto procurando arquivos físicos.' },
              { title: 'Conformidade Garantida', description: 'Atenda requisitos da LGPD, Receita Federal e auditorias. Assinatura digital com validade jurídica.' },
              { title: 'Economia de Espaço', description: 'Elimine arquivos físicos e libere até 60% do espaço ocupado. Reduza custos com aluguel e armazenamento.' },
              { title: 'Produtividade Aumentada', description: 'Workflows automatizados aceleram processos. Aprovações digitais e notificações automáticas.' },
              { title: 'Segurança Total', description: 'Controle de acesso por perfil. Histórico completo de quem acessou, modificou ou excluiu cada documento.' }
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

      <section className="py-20 bg-white">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gray-50 to-purple-50 p-12 rounded-2xl text-center border border-purple-200"
          >
            <h2 className="text-4xl font-bold text-[#004990] mb-6">
              Pronto para Digitalizar Sua Empresa?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Solicite uma demonstração gratuita e descubra como o MegaGED pode 
              transformar a gestão documental da sua organização.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700">
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
