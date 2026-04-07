'use client';

import React, { useRef } from 'react';
import Script from 'next/script';
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
import AnimatedIcon, { AnimatedIconRef } from '@/components/ui/AnimatedIcon';

// Value Proposition Card with animated icon
function ValuePropCard({ iconName, title, description, iconRef }: {
  iconName: string;
  title: string;
  description: string;
  iconRef: React.RefObject<AnimatedIconRef | null>;
}) {
  return (
    <div 
      className="p-8 hover:shadow-xl transition-all bg-white h-full cursor-pointer rounded-xl border border-gray-100"
      onMouseEnter={() => {
        if (iconRef && iconRef.current) {
          iconRef.current.playForward();
        }
      }}
      onMouseLeave={() => {
        if (iconRef && iconRef.current) {
          iconRef.current.playBackward();
        }
      }}
    >
      <div className="mb-6 flex justify-center">
        <AnimatedIcon 
          ref={iconRef}
          iconName={iconName} 
          solution="home" 
          className="w-16 h-16"
        />
      </div>
      <h3 className="text-2xl font-bold text-[#004990] mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}

export default function KSCHomePage() {
  // Refs para los 3 íconos
  const icon1Ref = useRef<AnimatedIconRef>(null);
  const icon2Ref = useRef<AnimatedIconRef>(null);
  const icon3Ref = useRef<AnimatedIconRef>(null);

  // Animación secuencial automática
  React.useEffect(() => {
    const animateSequentially = async (startFromThird = false) => {
      // Esperar solo 100ms antes de comenzar (muy rápido)
      await new Promise(resolve => setTimeout(resolve, 100));
      
      if (startFromThird) {
        // Primera carga: solo animar el ícono 3
        if (icon3Ref.current) {
          icon3Ref.current.playForward();
          await new Promise(resolve => setTimeout(resolve, 1500));
          icon3Ref.current.playBackward();
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      } else {
        // Ciclo normal: animar los 3 en orden
        // Animar ícono 1 - animación completa
        if (icon1Ref.current) {
          icon1Ref.current.playForward();
          await new Promise(resolve => setTimeout(resolve, 1500)); // Tiempo para animación completa
          icon1Ref.current.playBackward();
          await new Promise(resolve => setTimeout(resolve, 1500)); // Tiempo para volver
        }
        
        // Esperar solo 200ms antes del siguiente (menos tiempo)
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Animar ícono 2 - animación completa
        if (icon2Ref.current) {
          icon2Ref.current.playForward();
          await new Promise(resolve => setTimeout(resolve, 1500));
          icon2Ref.current.playBackward();
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        
        // Esperar solo 200ms antes del siguiente (menos tiempo)
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Animar ícono 3 - animación completa
        if (icon3Ref.current) {
          icon3Ref.current.playForward();
          await new Promise(resolve => setTimeout(resolve, 1500));
          icon3Ref.current.playBackward();
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
      }
    };

    // Ejecutar la animación inicial (solo el ícono 3)
    animateSequentially(true);

    // Repetir cada 8 segundos con la secuencia completa (reducido para menos espera)
    const interval = setInterval(() => animateSequentially(false), 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* HubSpot Tracking Code */}
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/242609850.js"
        strategy="afterInteractive"
      />
      
      <div className="min-h-screen bg-white overflow-x-hidden">
      {/* NavBar */}
      <NavBar 
        menuItems={[
          { label: 'Inicio', href: '/ksc' },
          { 
            label: 'Soluciones', 
            href: '/soluciones',
            dropdown: [
              { label: 'Gestión de Impresión', href: '/papercut', image: '/images/services/gestao-impressao.png' },
              { label: 'Gestión de Equipos', href: '/kpax', image: '/images/services/gestao-equipamentos.png' },
              { label: 'MyQ', href: '/myq', image: '/images/services/myq-logo.png' },
              { label: 'KDFM', href: '/kdfm', image: '/images/services/kdfm-logo.png' },
            ]
          },
          { label: 'Quiénes Somos', href: '/quienes-somos' },
          { label: 'Proveedores', href: '/proveedores' },
          { label: 'Contacto', href: '/contacto' },
        ]}
      />

      {/* Hero Section - Banner com Olas Animadas */}
      <HeroBannerWaves
        title="Transformando la Gestión Empresarial con Tecnología e Innovación"
        subtitle="Soluciones integradas en gestión de impresión, equipos y documentos para impulsar tu negocio."
        minHeight="60vh"
        gradientFrom="#1e3052"
        gradientTo="#00529B"
        waveColor="rgba(255, 255, 255, 0.25)"
      >
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#solucoes">
            <Button variant="secondary" size="lg">
              Ver Soluciones
            </Button>
          </a>
          <a href="/contacto">
            <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#00529B]">
              Contáctanos
            </Button>
          </a>
        </div>
      </HeroBannerWaves>

      {/* Proposta de Valor */}
      <section className="py-20 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                La Solución Completa para tu Entorno de Impresión y Digitalización
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Integramos tecnología, experiencia y servicios especializados
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0.1}>
              <ValuePropCard
                iconRef={icon1Ref}
                iconName="integracao-produtos"
                title="Integración de Productos/Servicios"
                description="De nada sirve tener un excelente producto. Lo más importante es resolver problemas, 
                  entregar soluciones integradas y agregar valor al mercado. ¡KSC nace con ese objetivo!"
              />
            </FadeIn>

            <FadeIn delay={0.2}>
              <ValuePropCard
                iconRef={icon2Ref}
                iconName="servicos-treinamentos"
                title="Servicios, Soluciones y Capacitación"
                description="Con más de <strong>70 certificaciones activas</strong>, nuestro equipo tiene la experiencia necesaria 
                  para solucionar problemas y capacitar a tu equipo para la nueva realidad tecnológica de la empresa."
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <ValuePropCard
                iconRef={icon3Ref}
                iconName="solucoes-digital"
                title="Soluciones Digitales y Espacio de Trabajo Ágil"
                description="El concepto de un lugar de trabajo ágil y digital consiste en permitir diversas optimizaciones 
                  físicas y tecnológicas en tu negocio, garantizando flexibilidad y eficiencia."
              />
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Nossas Soluções - FlipCards */}
      <section id="solucoes" className="pt-20 pb-6 bg-white">
        <Container>
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#004990] mb-4">
                Nuestras Soluciones en Gestión Documental e Impresión
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Tecnologías líderes en el mercado para la transformación digital empresarial
              </p>
            </div>
          </FadeIn>

          <FlipCards />
        </Container>
      </section>

      {/* Sobre Nós com Métricas */}
      <section id="sobre-nos" className="pt-6 pb-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Imagen lado izquierdo */}
            <FadeIn>
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/foto1.JPG" 
                  alt="KWS | Katun Workplace Solutions"
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
                  Tenemos la Solución que Necesitas
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  <strong>KWS | Katun Workplace Solutions</strong> es la división de servicios de Katun Brasil, 
                  que atiende todas las necesidades del mercado de MPS tradicional y sus nuevas vertientes. 
                  La asociación con socios experimentados y consolidados en el ámbito tecnológico y digital, 
                  hace de KWS una empresa preparada para lidiar con las demandas del futuro.
                </p>
                
                {/* Métricas em grid 2x2 */}
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#00529B] mb-2">
                      <Counter end={5000} duration={2} suffix="+" label="Proyectos Entregados" />
                    </div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-[#00529B] mb-2">
                      <Counter end={100} duration={2} suffix="+" label="Certificaciones" />
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

                <a href="/quienes-somos">
                  <Button variant="primary" size="lg">
                    Conoce nuestra historia
                  </Button>
                </a>
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
                Entiende los Vectores que Hacen que KWS Impulse Cualquier Proyecto Transformador
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestra experiencia se basa en 5 vectores estratégicos
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-5 gap-6">
            <FadeIn delay={0.1}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/FLEET.svg" alt="Fleet" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">FLOTA</h3>
                <p className="text-gray-600 text-sm">
                  Recolección de contadores, suministros, piezas, logística, control de inventario y facturación.
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
                  Mucho más allá del cobro. Habilitamos la impresión segura, impresión en la nube, concepto 3A, LGPD y digitalización avanzada.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.3}>
              <Card className="text-center p-6 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <img src="/icons/notifications/KNOWLEDGE.svg" alt="Knowledge" className="w-8 h-8" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                </div>
                <h3 className="text-xl font-bold text-[#004990] mb-3">CONOCIMIENTO</h3>
                <p className="text-gray-600 text-sm">
                  Capacitación y Consultoría enfocadas en la transformación digital completa de tu empresa.
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
                  Toda la infraestructura necesaria para un proyecto de tecnología, desde tótems de automatización, lectores de aproximación o biometría.
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
                  Todo lo que necesitas para un viaje digital: smartwork, smartoffice y la evolución de GED para un trabajo más conectado.
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
                KWS Entrega Soluciones
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Proceso completo de transformación digital
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
                  Potencia los departamentos y optimiza los procesos de tu empresa con nosotros. Ten colaboradores protagonistas al frente de cada función.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.2}>
              <Card className="p-8 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-[#00529B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  2
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4 text-center">
                  Infra y Software
                </h3>
                <p className="text-gray-600 text-center">
                  Laptops, servidores, suministros, piezas, dispositivos, etc. KWS cuenta con la experiencia necesaria para transformar toda la estructura de tu empresa.
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
                  Con las soluciones en la nube de KWS, optimizamos tu empresa virtualmente, permitiendo accesibilidad segura en cualquier momento, lugar o dispositivo.
                </p>
              </Card>
            </FadeIn>

            <FadeIn delay={0.4}>
              <Card className="p-8 hover:shadow-xl transition-shadow h-full">
                <div className="w-16 h-16 bg-[#00529B] text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold">
                  4
                </div>
                <h3 className="text-2xl font-bold text-[#004990] mb-4 text-center">
                  Servicios
                </h3>
                <p className="text-gray-600 text-center">
                  Disparadores y flujos inteligentes, soluciones open-source, seguridad funcional, OCR y escaneo. ¡Independientemente del desafío, KWS tiene la solución!
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
                   CONFIANZA COMPROBADA
                </div>
                <h2 className="text-4xl font-bold text-[#004990] mb-6">
                  Empresas líderes confían en KWS
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Más de 13.500 empresas en 138 países ya han transformado su gestión documental con nuestras soluciones. 
                  Desde pequeñas empresas hasta grandes corporaciones, ayudamos a las organizaciones a alcanzar eficiencia operativa y reducción de costos.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/notifications/check.svg" alt="Check" className="w-6 h-6" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004990] mb-1">Implementación Garantizada</h4>
                      <p className="text-gray-600">Proyectos entregados a tiempo con garantía de resultados</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/notifications/check.svg" alt="Check" className="w-6 h-6" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004990] mb-1">Soporte Especializado</h4>
                      <p className="text-gray-600">Equipo dedicado con certificaciones internacionales</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <img src="/icons/notifications/check.svg" alt="Check" className="w-6 h-6" style={{ filter: 'invert(22%) sepia(93%) saturate(1729%) hue-rotate(191deg) brightness(93%) contrast(101%)' }} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#004990] mb-1">ROI Comprobado</h4>
                      <p className="text-gray-600">Reducción promedio del 30% en los costos operativos</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative">
                <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/Empresas lideres confiam na KSC.JPG" 
                    alt="Empresas líderes confían en KWS"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                {/* Stats flotantes */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-[#00529B] mb-1">98%</div>
                  <p className="text-sm text-gray-600">Tasa de Satisfacción</p>
                </div>
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-3xl font-bold text-[#00529B] mb-1">24/7</div>
                  <p className="text-sm text-gray-600">Soporte Activo</p>
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
                ¿Listo para transformar la gestión documental de tu empresa?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Agenda una consultoría gratuita con nuestros expertos y descubre cómo podemos ayudarte a reducir costos, aumentar la seguridad y optimizar procesos.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="/contacto">
                  <Button variant="secondary" size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                    Hablar con un Experto
                  </Button>
                </a>
                <a href="/contacto">
                  <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-green-600">
                    Contáctanos
                  </Button>
                </a>
              </div>
              <p className="text-sm text-blue-200 mt-6">
                📞 (11) 3456-7890 | ✉️ contato@ksc.com.br
              </p>
            </div>
          </FadeIn>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
    </div>
    </>
  );
}
