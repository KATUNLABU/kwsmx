import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';

export const metadata: Metadata = {
  title: 'Proveedores - KWS | Katun Workplace Solutions',
  keywords: ['Socios KWS', 'Kyocera FleetServices', 'Papercut KWS', 'KPAX gestión de parque'],
};

interface Partner {
  name: string;
  description: string;
  logo: string;
  color: string;
  instagram: string;
  website: string;
  linkedin: string;
}

export default function FornecedoresPage() {
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

  const partners: Partner[] = [
    {
      name: 'KATUN CORP',
      description: 'Proveedor mundial de piezas y suministros de impresión desde 1979.',
      logo: '/logos/proveedores/katun-corp.png',
      color: 'from-blue-500 to-blue-700',
      instagram: 'https://www.instagram.com/katunbrasil',
      website: 'https://katun.com/pt/latam',
      linkedin: 'https://www.linkedin.com/company/katun-brasil',
    },
    {
      name: 'ACDI',
      description: 'Multisoluciones para el universo de MPS 4.0.',
      logo: '/logos/proveedores/acdi.png',
      color: 'from-green-500 to-green-700',
      instagram: 'https://www.instagram.com/acd_inc/',
      website: 'https://www.acd-inc.com.br/',
      linkedin: 'https://www.linkedin.com/company/acdi---access-control-devices-inc-/',
    },
    {
      name: 'DMZ',
      description: '¡Lectores Biométricos y RFID para Liberación de Impresión!',
      logo: '/logos/proveedores/dmz.png',
      color: 'from-gray-500 to-gray-700',
      instagram: 'https://www.instagram.com/dmzconnection/',
      website: 'https://dmzconnection.com/',
      linkedin: 'https://www.linkedin.com/company/dmzconnection/',
    },
    {
      name: 'YouSync',
      description: 'Integraciones y Tecnología.',
      logo: '/logos/proveedores/yousync.png',
      color: 'from-red-500 to-red-700',
      instagram: 'https://www.instagram.com/yousyncbr/',
      website: 'https://www.yousync.com.br/',
      linkedin: 'https://www.linkedin.com/company/yousync/',
    },
    {
      name: 'Tectoy Transire',
      description: 'Tótems de Autoservicio, Hardwares y Equipos diversos para POS.',
      logo: '/logos/proveedores/tectoy-transire.png',
      color: 'from-yellow-500 to-yellow-700',
      instagram: 'https://www.instagram.com/tectoy_automacao/',
      website: 'https://tectoyautomacao.com.br/',
      linkedin: 'https://www.linkedin.com/company/tectoy-automacao/',
    },
    {
      name: 'Benq',
      description: 'Proyectores, Monitores LCD y Pantallas interactivas para diversos usos.',
      logo: '/logos/proveedores/benq.png',
      color: 'from-indigo-500 to-indigo-700',
      instagram: 'https://www.instagram.com/benqbrasil/',
      website: 'https://www.benq.com/pt-br/index.html',
      linkedin: 'https://www.linkedin.com/company/benqbrasil/',
    },
  ];

  return (
    <>
      {/* HubSpot Tracking Code */}
      <Script
        id="hs-script-loader"
        src="//js-na2.hs-scripts.com/242609850.js"
        strategy="afterInteractive"
      />
      
      <NavBar menuItems={menuItems} logo="/kws.svg" />

      {/* Hero Banner */}
      <HeroBannerWaves
        title="Nuestros Socios Estratégicos y Proveedores"
        subtitle="Juntos, formamos un ecosistema completo de tecnología e innovación para transformar su negocio."
        gradientFrom="#1e3052"
        gradientTo="#3b82f6"
        waveColor="rgba(255, 255, 255, 0.1)"
        breadcrumbs={[
          { label: 'Proveedores', href: '/proveedores' }
        ]}
      />

      {/* Partners Grid Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-4">
              Ecosistema de Socios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trabajamos con los mejores del mercado para ofrecer soluciones completas e integradas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                {/* Card Header with Gradient and Logo */}
                <div className={`bg-gradient-to-r ${partner.color} p-6 text-white`}>
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold flex-1">{partner.name}</h3>
                    <div className="bg-white rounded-lg p-2 flex items-center justify-center min-w-[100px] h-[60px]">
                      <Image
                        src={partner.logo}
                        alt={`Logo ${partner.name}`}
                        width={100}
                        height={50}
                        className="object-contain max-h-[50px] w-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-gray-700 text-base leading-relaxed mb-6 min-h-[60px]">
                    {partner.description}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-4 justify-center pt-4 border-t border-gray-100">
                    {/* Instagram */}
                    <a
                      href={partner.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 hover:scale-110 transition-transform duration-300 shadow-md"
                      aria-label={`Instagram de ${partner.name}`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>

                    {/* Website */}
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 hover:scale-110 transition-transform duration-300 shadow-md"
                      aria-label={`Website de ${partner.name}`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </a>

                    {/* LinkedIn */}
                    <a
                      href={partner.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-110 transition-transform duration-300 shadow-md"
                      aria-label={`LinkedIn de ${partner.name}`}
                    >
                      <svg
                        className="w-6 h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Partner with Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-4">
              ¿Por qué somos el socio ideal?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra red de socios garantiza soluciones completas y soporte excepcional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Confianza</h3>
              <p className="text-gray-600">Socios verificados y certificados</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Innovación</h3>
              <p className="text-gray-600">Tecnologías de punta del mercado</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Colaboración</h3>
              <p className="text-gray-600">Trabajo en equipo integrado</p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-700 rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Global</h3>
              <p className="text-gray-600">Alcance en 138 países</p>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Quiere convertirse en nuestro socio?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Únase a nuestro ecosistema de innovación y tecnología.
            </p>
            <a
              href="/contacto"
              className="inline-block px-10 py-4 bg-white text-green-600 font-bold text-lg rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform"
            >
              Contáctenos
            </a>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
