'use client';

import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SolucoesPage() {
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

  const solutions = [
    {
      id: 'papercut',
      title: 'PaperCut MF',
      subtitle: 'Gestão de Impressão',
      description: 'Solução líder mundial em gestão de impressão que otimiza custos, aumenta a segurança e promove sustentabilidade no ambiente corporativo.',
      logo: '/images/services/gestao-impressao.png',
      color: 'from-green-500 to-green-700',
      features: [
        'Controle total de custos de impressão',
        'Impressão segura com autenticação',
        'Relatórios detalhados e análise de uso',
        'Redução do impacto ambiental',
        'Integração com Active Directory',
        'Suporte a múltiplas marcas de impressoras'
      ],
      benefits: [
        'Redução de até 30% nos custos de impressão',
        'Maior segurança documental',
        'Sustentabilidade corporativa',
        'ROI comprovado em 6 meses'
      ],
      href: '/papercut'
    },
    {
      id: 'kpax',
      title: 'KPAX Fleet',
      subtitle: 'Gestão de Equipamentos',
      description: 'Plataforma completa para monitoramento e gestão de frota de equipamentos de impressão e multifuncionais, otimizando operações e reduzindo custos operacionais.',
      logo: '/images/services/gestao-equipamentos.png',
      color: 'from-blue-500 to-blue-700',
      features: [
        'Monitoramento remoto em tempo real',
        'Gestão de suprimentos automatizada',
        'Manutenção preditiva inteligente',
        'Dashboard executivo com KPIs',
        'Alertas automáticos de falhas',
        'Gestão completa de SLA'
      ],
      benefits: [
        'Redução de 40% em downtime',
        'Otimização de estoque de suprimentos',
        'Manutenção proativa',
        'Maior disponibilidade dos equipamentos'
      ],
      href: '/kpax'
    },
    {
      id: 'megaged',
      title: 'MegaGED',
      subtitle: 'Gestão Eletrônica de Documentos',
      description: 'Sistema robusto de gestão eletrônica de documentos que digitaliza, organiza e centraliza toda a informação corporativa, garantindo conformidade e agilidade nos processos.',
      logo: '/images/services/gestao-documentos.png',
      color: 'from-purple-500 to-purple-700',
      features: [
        'Digitalização e captura inteligente',
        'Indexação automática com OCR',
        'Workflow documental configurável',
        'Armazenamento seguro e criptografado',
        'Busca avançada e tags inteligentes',
        'Conformidade com LGPD e ISO 27001'
      ],
      benefits: [
        'Eliminação de 90% do papel físico',
        'Busca instantânea de documentos',
        'Conformidade legal garantida',
        'Economia de espaço físico'
      ],
      href: '/megaged'
    },
    {
      id: 'wiki-alphabet',
      title: 'Wiki Alphabet',
      subtitle: 'Plataforma de Ensino Digital',
      description: 'Base de conhecimento colaborativa e plataforma de ensino que centraliza informações, facilita o treinamento corporativo e promove o aprendizado contínuo.',
      logo: '/images/services/plataforma-ensino.png',
      color: 'from-orange-500 to-orange-700',
      features: [
        'Base de conhecimento centralizada',
        'Criação de cursos e treinamentos',
        'Colaboração em tempo real',
        'Sistema de busca semântica',
        'Versionamento e histórico completo',
        'Gamificação e certificados'
      ],
      benefits: [
        'Redução de 50% no tempo de onboarding',
        'Conhecimento corporativo preservado',
        'Equipes mais capacitadas',
        'Cultura de aprendizado contínuo'
      ],
      href: '/wiki-alphabet'
    }
  ];

  return (
    <>
      <NavBar menuItems={menuItems} logo="/KSC.svg" />

      {/* Hero Banner */}
      <HeroBannerWaves
        title="Soluções Tecnológicas para Transformar Seu Negócio"
        subtitle="Conheça nossas plataformas especializadas que otimizam processos, reduzem custos e aumentam a produtividade da sua empresa."
        gradientFrom="#1e3052"
        gradientTo="#00529B"
        waveColor="rgba(255, 255, 255, 0.1)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' }
        ]}
      />

      {/* Introduction Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#004990] mb-6"
            >
              Tecnologia que Impulsiona Resultados
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 leading-relaxed"
            >
              A KSC oferece um portfólio completo de soluções tecnológicas desenvolvidas para atender 
              as necessidades específicas de gestão empresarial moderna, com foco em eficiência, 
              segurança e sustentabilidade.
            </motion.p>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20">
            {[
              { number: '138+', label: 'Países Atendidos' },
              { number: '30%', label: 'Redução de Custos' },
              { number: '10.000+', label: 'Clientes Ativos' },
              { number: '24/7', label: 'Suporte Técnico' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  {/* Logo and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-20 h-20 bg-white rounded-xl shadow-lg p-3 border-2 border-gray-200">
                      <Image
                        src={solution.logo}
                        alt={solution.title}
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-[#004990]">{solution.title}</h3>
                      <p className="text-lg text-gray-600">{solution.subtitle}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    {solution.description}
                  </p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-xl font-bold text-[#004990] mb-4 flex items-center gap-2">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Recursos Principais
                    </h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-700">
                          <span className="w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={solution.href}
                    className={`inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r ${solution.color} text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                  >
                    Saiba Mais
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>

                {/* Benefits Card */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`bg-gradient-to-br ${solution.color} p-8 rounded-2xl shadow-2xl text-white`}>
                    <h4 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      Benefícios Comprovados
                    </h4>
                    <ul className="space-y-4">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <svg className="w-6 h-6 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-lg">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Decorative Elements */}
                    <div className="mt-8 pt-6 border-t border-white/20">
                      <p className="text-sm opacity-90">
                        ⭐ Solução recomendada por empresas líderes globalmente
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Choose KSC Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-[#004990] mb-6"
            >
              Por Que Escolher a KSC?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-700 max-w-3xl mx-auto"
            >
              Somos parceiros estratégicos na transformação digital da sua empresa
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: 'Segurança Garantida',
                description: 'Certificações internacionais e conformidade com LGPD, ISO 27001 e SOC 2.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Presença Global',
                description: 'Rede Katun presente em 138 países com suporte local e expertise internacional.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: 'Suporte 24/7',
                description: 'Equipe técnica especializada disponível 24 horas por dia, 7 dias por semana.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: 'ROI Comprovado',
                description: 'Retorno sobre investimento médio em 6-12 meses com redução de até 40% em custos.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                ),
                title: 'Personalização Total',
                description: 'Soluções adaptadas às necessidades específicas de cada cliente e setor.'
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                ),
                title: 'Inovação Contínua',
                description: 'Atualizações regulares e acesso às últimas tecnologias do mercado.'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para Transformar Seu Negócio?
            </h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
              Entre em contato conosco e descubra como nossas soluções podem otimizar 
              seus processos e reduzir custos significativamente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-xl"
              >
                Fale Conosco
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="/ksc"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Voltar ao Início
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
