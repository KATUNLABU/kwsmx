'use client';

import Script from 'next/script';
import { useState } from 'react';
import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import WhatsAppContactForm from '@/components/ui/WhatsAppContactForm';

export default function ContatoPage() {
  const [activeTab, setActiveTab] = useState<'whatsapp' | 'hubspot'>('whatsapp');

  const menuItems = [
    { label: 'Inicio', href: '/ksc' },
    {
      label: 'Soluciones',
      href: '#',
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
      {/* HubSpot Tracking Code */}
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/242609850.js"
        strategy="afterInteractive"
      />
      
      {/* HubSpot Forms Embed Script */}
      <Script
        id="hs-forms-embed"
        src="https://js-na2.hsforms.net/forms/embed/developer/242609850.js"
        strategy="afterInteractive"
        defer
      />
      
      <NavBar menuItems={menuItems} logo="/kws.svg" />

      {/* Hero Banner */}
      <HeroBannerWaves
        title="Estamos aquí para ayudarte"
        subtitle="Nuestro equipo de expertos está listo para atender tus necesidades y transformar la gestión tecnológica de tu empresa."
        gradientFrom="#1e3052"
        gradientTo="#00529B"
        waveColor="rgba(255, 255, 255, 0.1)"
        breadcrumbs={[
          { label: 'Contacto', href: '/contacto' }
        ]}
      />

      {/* Main Contact Section */}
      <section id="formulario" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-6">
                Múltiples Canales de Atención
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nuestro equipo está preparado para atenderte a través de diversos canales de comunicación. 
                Ya sea para solicitar una demostración, aclarar dudas sobre nuestras soluciones o contratar 
                nuestros servicios, estamos listos para ayudarte.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-blue-500 mb-10">
                <p className="text-sm text-gray-700 font-medium">
                  ⏱️ <strong>Tiempo de respuesta:</strong> Respondemos todos los contactos en hasta 24 horas hábiles.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {/* Address */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#004990] mb-2">Nuestra Sede</h3>
                      <p className="text-gray-700 mb-1">
                        <strong>Pna Holding México, Calle Cto Aguascalientes Nte 137</strong><br />
                        Parque industrial de Valle de Aguascalientes, Fraccionamiento Industrial<br />
                        20358 Aguascalientes, Ags.
                      </p>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Pna+Holding+México+Calle+Cto+Aguascalientes+Nte+137+Ags"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-green-600 hover:text-green-700 font-semibold"
                      >
                        Ver en el mapa
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#004990] mb-2">Correo Corporativo</h3>
                      <a
                        href="mailto:ksc@katun.com"
                        className="text-blue-600 hover:text-blue-700 font-semibold text-lg block mb-2"
                      >
                        ksc@katun.com
                      </a>
                      <p className="text-sm text-gray-600">
                        Comercial: <a href="mailto:kauan.vinicius@katun.com" className="text-blue-600 hover:underline">kauan.vinicius@katun.com</a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-purple-500 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#004990] mb-2">Centro de Atención</h3>
                      
                      <a
                        href="tel:+5511970476396"
                        className="text-purple-600 hover:text-purple-700 font-semibold text-base block mb-2"
                      >
                        +55 (11) 97047-6396
                      </a>
                      <p className="text-sm text-gray-600">
                        📞 Lunes a Viernes: 08:00 a 18:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-[#004990] mb-2">Contáctanos por WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-4">Atención rápida y directa a través de WhatsApp</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  
                  
                  <a
                    href="https://wa.me/5511970476396"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 rounded-lg hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg"
                  >
                    <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <div className="text-left">
                      <div className="font-semibold">Comercial</div>
                      <div className="text-sm opacity-90">+55 (11) 97047-6396</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white p-6 rounded-t-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-3">
                  Solicita que te contactemos
                </h2>
                <p className="text-lg opacity-90">
                  Elige la mejor forma de contacto y recibe atención personalizada.
                </p>
              </div>

              {/* Tabs de navegación */}
              <div className="bg-gray-100 flex border-b border-gray-300">
                <button
                  onClick={() => setActiveTab('whatsapp')}
                  className={`flex-1 py-4 px-6 font-semibold text-center transition-all ${
                    activeTab === 'whatsapp'
                      ? 'bg-white text-green-600 border-b-4 border-green-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    <span>WhatsApp</span>
                  </div>
                </button>
                <button
                  onClick={() => setActiveTab('hubspot')}
                  className={`flex-1 py-4 px-6 font-semibold text-center transition-all ${
                    activeTab === 'hubspot'
                      ? 'bg-white text-blue-600 border-b-4 border-blue-600'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>Correo</span>
                  </div>
                </button>
              </div>

              <div className="bg-white p-6 rounded-b-xl shadow-xl border border-gray-200">
                {activeTab === 'whatsapp' ? (
                  <>
                    <div className="mb-6 flex items-start gap-3 p-4 bg-green-50 rounded-lg border-l-4 border-green-500">
                      <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <div className="text-sm text-gray-700">
                        <strong>Atención Rápida vía WhatsApp:</strong>
                        <p className="mt-1">Completa el formulario a continuación y serás redirigido a nuestro WhatsApp con tu mensaje listo. ¡Respuesta instantánea!</p>
                      </div>
                    </div>
                    <WhatsAppContactForm phoneNumber="5511970476396" />
                  </>
                ) : (
                  <>
                    <div className="mb-6 flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      <div className="text-sm text-gray-700">
                        <strong>Formulario Protegido:</strong>
                        <ul className="mt-2 space-y-1">
                          <li>• Demostración gratuita de las soluciones</li>
                          <li>• Cotización personalizada</li>
                          <li>• Consultoría especializada</li>
                          <li>• Información sobre productos</li>
                        </ul>
                      </div>
                    </div>
              
                    {/* HubSpot Embedded Form with reCAPTCHA */}
                    <div 
                      className="hs-form-html" 
                      data-region="na2" 
                      data-form-id="4ff6e317-4f6a-4db2-800a-a12dfba1bc44" 
                      data-portal-id="242609850"
                    ></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-4">
              Visita Nuestra Sede en Aguascalientes
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Estamos ubicados estratégicamente en el Parque industrial de Valle de Aguascalientes, con fácil acceso.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Estacionamiento en el lugar</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                  <span>Cerca de parada de camión</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Accesibilidad completa</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://maps.google.com/maps?q=Pna+Holding+M%C3%A9xico+Aguascalientes&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=&amp;output=embed" 
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localización de Pna Holding - Aguascalientes"
            ></iframe>
          </div>
          
          {/* How to Get There */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#004990] mb-2">Transporte Público (YoVoy)</h3>
              <p className="text-gray-700 text-sm">
                Rutas 01, 05, 11 y 34<br />
                Parada sobre 45 Norte (Cto. Aguascalientes)
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#004990] mb-2">Automóvil</h3>
              <p className="text-gray-700 text-sm">
                Acceso principal por Carr. 45 Norte<br />
                Estacionamiento gratuito interno
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#004990] mb-2">Horario</h3>
              <p className="text-gray-700 text-sm">
                Lunes a Viernes: 08:00 a 18:00<br />
                Programa tu visita con anticipación
              </p>
            </div>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-4">
              Preguntas Frecuentes sobre Atención
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Resuelve tus principales dudas sobre cómo contactarnos y solicitar nuestros servicios.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  ¿Cuál es el tiempo de respuesta después de enviar el formulario?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Nuestro equipo responde a todos los contactos en un máximo de 24 horas hábiles. Para urgencias, 
                comunícate a través de los teléfonos +55 (11) 98173-9425 o +55 (11) 97047-6396, o vía WhatsApp.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  ¿Cómo solicito una demostración gratuita?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                ¡Sí! Ofrecemos demostraciones gratuitas y personalizadas de todas nuestras soluciones. 
                Completa el formulario anterior o llámanos para programar un horario con nuestros expertos. 
                La demostración puede ser presencial o en línea, según tu preferencia.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  ¿Qué regiones y países atienden?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Atendemos todo el territorio brasileño con soporte local. Además, formamos parte de la red 
                global de Katun, presente en 138 países. Tenemos la capacidad de atender clientes 
                multinacionales con operaciones en diversos países.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  ¿Cuánto tiempo toma implementar una solución?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                El plazo varía según la complejidad y el tamaño del proyecto. En promedio, las implementaciones 
                básicas toman de 2 a 4 semanas, mientras que proyectos complejos pueden tardar de 1 a 3 meses. 
                Nuestro equipo proporciona un cronograma detallado durante la fase de planificación.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  ¿Ofrecen soporte técnico 24/7?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Nuestro horario de atención es de Lunes a Viernes, de 08:00 a 18:00. Para clientes con 
                contratos de mantenimiento, ofrecemos soporte extendido y atención prioritaria. Comunícate 
                con nosotros para conocer nuestros planes de soporte.
              </p>
            </details>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
