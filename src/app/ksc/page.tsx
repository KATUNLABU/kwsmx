'use client';

import React from 'react';
import NavBar from '@/components/ui/NavBar';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import FeaturesBlock from '@/components/blocks/FeaturesBlock';
import Counter from '@/components/animations/Counter';
import FadeIn from '@/components/animations/FadeIn';
import FlipCards from '@/components/ui/FlipCards';
import Card from '@/components/ui/Card';
import Footer from '@/components/ui/Footer';

export default function KSCHomePage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* NavBar */}
      <NavBar 
        menuItems={[
          { label: 'Home', href: '/ksc' },
          { 
            label: 'Soluções', 
            href: '/solucoes',
            dropdown: [
              { label: 'Gestão de Impressão', href: '/papercut', image: '/images/services/gestao-impressao.png' },
              { label: 'Gestão de Equipamentos', href: '/kpax', image: '/images/services/gestao-equipamentos.png' },
              { label: 'Gestão Eletrônica de Documentos', href: '/megaged', image: '/images/services/gestao-documentos.png' },
              { label: 'Plataforma de Ensino Digital', href: '/wiki-alphabet', image: '/images/services/plataforma-ensino.png' },
            ]
          },
          { label: 'Quem Somos', href: '/quem-somos' },
          { label: 'Fornecedores', href: '/fornecedores' },
          { label: 'Contato', href: '/contato' },
        ]}
      />

      {/* Hero Section - Banner com Olas Animadas */}
      <HeroBannerWaves
        title="Transformando a Gestão Empresarial com Tecnologia e Inovação"
        subtitle="Soluções integradas em gestão de impressão, equipamentos e documentos para impulsionar seu negócio."
        minHeight="60vh"
        gradientFrom="#1e3052"
        gradientTo="#00529B"
        waveColor="rgba(255, 255, 255, 0.25)"
      >
        <div className="flex gap-4 justify-center flex-wrap">
          <Button variant="secondary" size="lg">
            <a href="/solucoes" className="text-inherit no-underline">Ver Soluções</a>
          </Button>
          <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#00529B]">
            <a href="/contato" className="text-inherit no-underline">Fale Conosco</a>
          </Button>
        </div>
      </HeroBannerWaves>

      {/* Proposta de Valor */}
      <section className="py-20 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                A Solução Completa para o Seu Ambiente de Impressão e Digitalização
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integramos tecnologia, expertise e serviços especializados
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <Card className="p-8 hover:shadow-xl transition-all bg-white h-full">
                <div className="mb-6">
                  <img src="/icons/notifications/Integração de ProdutosServiços.svg" alt="Integração" className="w-16 h-16 mx-auto" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4">Integração de Produtos/Serviços</h3>
                <p className="text-gray-600 leading-relaxed">
                  De nada adianta ter um excelente produto. O mais importante é resolver problemas, 
                  entregar soluções integradas e agregadas ao mercado. A KSC nasce com esse objetivo!
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-8 hover:shadow-xl transition-all bg-white h-full">
                <div className="mb-6">
                  <img src="/icons/notifications/Serviços, Soluções e Treinamentos.svg" alt="Treinamentos" className="w-16 h-16 mx-auto" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4">Serviços, Soluções e Treinamentos</h3>
                <p className="text-gray-600 leading-relaxed">
                  Com mais de <strong>70 certificações ativas</strong>, nosso time tem a expertise necessária 
                  para solucionar problemas e capacitar a sua equipe para a nova realidade tecnológica da empresa.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="p-8 hover:shadow-xl transition-all bg-white h-full">
                <div className="mb-6">
                  <img src="/icons/notifications/Soluções de Digital & Agile WorkPlace.svg" alt="Digital WorkPlace" className="w-16 h-16 mx-auto" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4">Soluções de Digital & Agile WorkPlace</h3>
                <p className="text-gray-600 leading-relaxed">
                  O conceito de um local de trabalho ágil e digital consiste em permitir diversas otimizações 
                  físicas e tecnológicas ao seu negócio, garantindo flexibilidade e eficiência.
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Nossas Soluções - FlipCards */}
      <section id="solucoes" className="py-20 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                Nossas Soluções em Gestão Documental e Impressão
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnologias líderes de mercado para transformação digital empresarial
              </p>
            </div>
          </FadeIn>

          <FlipCards />
        </Container>
      </section>

      {/* Sobre Nós com Métricas */}
      <section id="sobre-nos" className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagen lado izquierdo */}
            <FadeIn>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/foto1.JPG" 
                  alt="KSC - Katun Solution Center"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#00529B]/80 to-transparent" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-sm font-semibold mb-1">DESDE 1987</p>
                  <h3 className="text-2xl font-bold">Transformando empresas</h3>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <h2 className="text-4xl font-bold text-[#004990] mb-6">
                  Temos a Solução que Você Precisa
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>KSC-Katun Solution Center</strong> é a divisão de serviços da Katun Brasil, 
                  cujo atende toda a necessidade do mercado de MPS tradicional e as suas novas vertentes. 
                  A associação com parceiros experientes e consolidados no âmbito tecnológico e digital, 
                  faz da KSC, uma empresa preparada para lidar com as demandas do futuro.
                </p>
                
                {/* Métricas em grid 2x2 */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#00529B] mb-2">
                      <Counter end={5000} duration={2} suffix="+" label="Projetos Entregues" />
                    </div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#00529B] mb-2">
                      <Counter end={100} duration={2} suffix="+" label="Certifi&shy;cações" />
                    </div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#00529B] mb-2">
                      <Counter end={13500} duration={2} label="Clientes" formatter={(val) => `${(val/1000).toFixed(1)}K`} />
                    </div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#00529B] mb-2">
                      <Counter end={138} duration={2} label="Países" />
                    </div>
                  </div>
                </div>

                <Button variant="primary" size="lg">
                  Conheça nossa história
                </Button>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Nossos Vetores */}
      <section className="py-20 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                Entenda os Vetores que Fazem a KSC Impulsionar Todo e Qualquer Projeto Transformador
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nossa expertise se baseia em 5 vetores estratégicos
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6">
            <FadeIn delay={0.1}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/FLEET.svg" alt="Fleet" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">FLEET</h3>
                <p className="text-gray-600 text-sm">
                  Coleta de contadores, suprimentos, peças, logística, controle de estoque e faturamento.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/CONTROL.svg" alt="Control" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">CONTROL</h3>
                <p className="text-gray-600 text-sm">
                  Muito além da bilhetagem. Habilitamos a impressão segura, impressão em nuvem, conceito 3A, LGPD e digitalização avançada.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/KNOWLEDGE.svg" alt="Knowledge" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">KNOWLEDGE</h3>
                <p className="text-gray-600 text-sm">
                  Treinamentos & Consultorias visando a transformação digital completa da sua empresa.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/HARDWARE.svg" alt="Hardware" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">HARDWARE</h3>
                <p className="text-gray-600 text-sm">
                  Toda a infraestrutura necessária para um projeto de tecnologia, desde totens de automação, leitores de aproximação ou biometria.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.5}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/DIGITAL.svg" alt="Digital" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">DIGITAL</h3>
                <p className="text-gray-600 text-sm">
                  Tudo que você precisa para uma jornada digital: smartwork, smartoffice e a evolução do GED para um trabalho mais conectado.
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Como Trabalhamos - A KSC Entrega Soluções */}
      <section className="py-20 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                A KSC Entrega Soluções
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Processo completo de transformação digital
              </p>
            </div>
          </FadeIn>

          {/* 4 Cards em grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <Card className="p-8 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-[#00529B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  1
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4 text-center">
                  Protagonistas
                </h3>
                <p className="text-gray-600 text-center">
                  Potencialize os departamentos e otimize os processos da sua empresa conosco. Tenha colaboradores protagonistas à frente de cada função.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-8 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-[#00529B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4 text-center">
                  Infra & Softwares
                </h3>
                <p className="text-gray-600 text-center">
                  Notebooks, servidores, suprimentos, peças, dispositivos etc. A KSC dispõe da expertise necessária para transformar toda a estrutura sua empresa.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="p-8 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-[#00529B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  3
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4 text-center">
                  Cloud
                </h3>
                <p className="text-gray-600 text-center">
                  Com as soluções em nuvem da KSC, otimizamos a sua empresa virtualmente, permitindo acessibilidade com segurança a qualquer hora, lugar ou dispositivo.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="p-8 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-[#00529B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4 text-center">
                  Serviços
                </h3>
                <p className="text-gray-600 text-center">
                  Gatilhos e fluxos inteligentes, soluções open-source, segurança de ambiente, OCR e scanning. Independente do desafio, a KSC tem a solução!
                </p>
              </Card>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Sección de Confianza con Imagen */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <div className="inline-block px-4 py-2 bg-blue-100 text-[#00529B] rounded-full text-sm font-semibold mb-4">
                   CONFIANÇA COMPROVADA
                </div>
                <h2 className="text-4xl font-bold text-[#004990] mb-6">
                  Empresas líderes confiam na KSC
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Mais de 13.500 empresas em 138 países já transformaram sua gestão documental com nossas soluções. 
                  Desde pequenas empresas até grandes corporações, ajudamos organizações a alcançar eficiência operacional e redução de custos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/notifications/check.svg" alt="Check" className="w-6 h-6" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004990] mb-1">Implementação Garantida</h4>
                      <p className="text-gray-600">Projetos entregues no prazo com garantia de resultados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/notifications/check.svg" alt="Check" className="w-6 h-6" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004990] mb-1">Suporte Especializado</h4>
                      <p className="text-gray-600">Time dedicado com certificações internacionais</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/notifications/check.svg" alt="Check" className="w-6 h-6" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004990] mb-1">ROI Comprovado</h4>
                      <p className="text-gray-600">Redução média de 30% nos custos operacionais</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/Empresas líderes confiam na KSC.JPG" 
                    alt="Empresas líderes confiam na KSC"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Stats flotantes */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-[#00529B] mb-1">98%</div>
                  <p className="text-sm text-gray-600">Taxa de Satisfação</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-[#00529B] mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Suporte Ativo</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <Container>
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold mb-6">
                Pronto para transformar a gestão documental da sua empresa?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Agende uma consultoria gratuita com nossos especialistas e descubra como podemos ajudar você a reduzir custos, aumentar a segurança e otimizar processos.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  Falar com Especialista
                </Button>
                <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-green-600">
                  Baixar Materiais
                </Button>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                ⚡ Resposta em até 2 horas úteis | 📞 (11) 3456-7890 | ✉️ contato@ksc.com.br
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
