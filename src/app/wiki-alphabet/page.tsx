'use client';

import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

export default function WikiAlphabetPage() {
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

      <HeroBannerWaves
        title="Wiki Alphabet - Plataforma de Ensino Digital"
        subtitle="Base de conhecimento colaborativa e plataforma LMS que centraliza informações e potencializa o aprendizado organizacional."
        gradientFrom="#ea580c"
        gradientTo="#f97316"
        waveColor="rgba(255, 255, 255, 0.1)"
        breadcrumbs={[
          { label: 'Soluções', href: '/solucoes' },
          { label: 'Wiki Alphabet', href: '/wiki-alphabet' }
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
              <div className="relative w-32 h-32 mb-8 bg-white rounded-2xl shadow-xl p-6 border-2 border-orange-200">
                <Image
                  src="/images/services/plataforma-ensino.png"
                  alt="Wiki Alphabet"
                  fill
                  className="object-contain p-2"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-[#004990] mb-6">
                Conhecimento Centralizado e Aprendizado Contínuo
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Wiki Alphabet é a plataforma completa que une base de conhecimento colaborativa 
                e sistema LMS (Learning Management System) para capacitar suas equipes e preservar 
                o conhecimento organizacional.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Crie cursos, treinamentos e documentação técnica em minutos. Promova colaboração 
                em tempo real e cultive uma cultura de aprendizado contínuo na sua empresa.
              </p>

              <div className="flex gap-4">
                <Button variant="primary" size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700">
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
              className="bg-gradient-to-br from-orange-500 to-orange-700 p-10 rounded-2xl shadow-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-8">Impacto no Aprendizado</h3>
              
              <div className="space-y-6">
                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">50%</div>
                  <p className="text-lg opacity-90">Redução no tempo de onboarding</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">85%</div>
                  <p className="text-lg opacity-90">Taxa de conclusão de cursos</p>
                </div>

                <div className="border-b border-white/20 pb-6">
                  <div className="text-5xl font-bold mb-2">10x</div>
                  <p className="text-lg opacity-90">Velocidade na criação de conteúdo</p>
                </div>

                <div>
                  <div className="text-5xl font-bold mb-2">24/7</div>
                  <p className="text-lg opacity-90">Acesso ao conhecimento</p>
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
              { icon: '📚', title: 'Base de Conhecimento', description: 'Wiki colaborativa com editor visual intuitivo. Organize informações por categorias, tags e permissões personalizadas.' },
              { icon: '🎓', title: 'Criação de Cursos', description: 'Crie trilhas de aprendizado completas com vídeos, PDFs, quizzes e exercícios práticos. Templates prontos para uso.' },
              { icon: '👥', title: 'Colaboração Real-Time', description: 'Edição simultânea de documentos. Comentários, menções e notificações para trabalho em equipe eficiente.' },
              { icon: '🔍', title: 'Busca Semântica', description: 'Encontre informações relevantes mesmo sem saber os termos exatos. IA contextual para resultados precisos.' },
              { icon: '📝', title: 'Versionamento Completo', description: 'Histórico de todas as alterações. Compare versões, restaure conteúdo anterior e audite mudanças facilmente.' },
              { icon: '🎮', title: 'Gamificação', description: 'Sistema de pontos, badges e rankings. Aumente engajamento com desafios e recompensas personalizadas.' },
              { icon: '📜', title: 'Certificados Digitais', description: 'Emita certificados automáticos ao concluir cursos. Validade jurídica com assinatura digital e QR Code.' },
              { icon: '📊', title: 'Analytics Avançado', description: 'Acompanhe progresso individual e por equipe. Identifique lacunas de conhecimento e otimize treinamentos.' },
              { icon: '🔗', title: 'Integrações LMS', description: 'SCORM, xAPI (Tin Can) e LTI compatível. Integre com Teams, Slack e ferramentas corporativas.' }
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

      <section className="py-20 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <Container>
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Por Que Escolher Wiki Alphabet?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Onboarding Acelerado', description: 'Reduza em 50% o tempo de integração de novos colaboradores. Todo conhecimento necessário centralizado e acessível.' },
              { title: 'Conhecimento Preservado', description: 'Evite perda de conhecimento quando funcionários saem. Documentação completa sempre atualizada e disponível.' },
              { title: 'Equipes Capacitadas', description: 'Treinamentos contínuos e acessíveis 24/7. Desenvolva competências críticas para o negócio de forma estruturada.' },
              { title: 'Cultura de Aprendizado', description: 'Promova mindset de desenvolvimento contínuo. Gamificação e social learning aumentam engajamento.' },
              { title: 'ROI Comprovado', description: 'Economia com treinamentos presenciais e viagens. Escale conhecimento sem aumentar custos proporcionalmente.' },
              { title: 'Suporte Completo', description: 'Implementação guiada pela KSC. Treinamento de administradores e criadores de conteúdo incluído.' }
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
            className="bg-gradient-to-br from-gray-50 to-orange-50 p-12 rounded-2xl text-center border border-orange-200"
          >
            <h2 className="text-4xl font-bold text-[#004990] mb-6">
              Pronto para Potencializar o Aprendizado?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Solicite uma demonstração gratuita e descubra como o Wiki Alphabet pode 
              transformar a gestão de conhecimento e treinamentos da sua empresa.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg" className="bg-gradient-to-r from-orange-600 to-orange-700">
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
