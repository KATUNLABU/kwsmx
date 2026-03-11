import type { Metadata } from 'next';
import Script from 'next/script';
import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Quem Somos - KWS | Katun Workplace Solutions',
  description: 'Conheça a história da KWS - Katun Workplace Solutions. Nascemos da experiência global da Katun para liderar a revolução tecnológica no mercado de impressão.',
  keywords: ['Kyocera FleetServices especialistas', 'Outsourcing de impressão confiável', 'Gestão de impressão profissional', 'História KWS'],
};

export default function QuemSomosPage() {
  const menuItems = [
    { label: 'Home', href: '/ksc' },
    {
      label: 'Soluções',
      href: '#',
      dropdown: [
        { label: 'Gestão de Impressão', href: '/papercut', image: '/images/services/gestao-impressao.png' },
        { label: 'Gestão de Equipamentos', href: '/kpax', image: '/images/services/gestao-equipamentos.png' },
        { label: 'Gestão Eletrônica de Documentos', href: '/megaged', image: '/images/services/gestao-documentos.png' },
        { label: 'Plataforma de Ensino Digital', href: '/wiki-alphabet', image: '/images/services/plataforma-ensino.png' },
        { label: 'MyQ', href: '/solucao-red', image: '/images/services/myq-logo.png' },
        { label: 'KDFM', href: '/solucao-gray', image: '/images/services/kdfm-logo.png' },
      ],
    },
    { label: 'Quem Somos', href: '/quem-somos' },
    { label: 'Fornecedores', href: '/fornecedores' },
    { label: 'Contato', href: '/contato' },
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
        title="Construímos tudo isso com um olhar sempre atento ao futuro."
        subtitle="Conheça a história, os valores e o compromisso que nos tornaram referência em transformação digital."
        gradientFrom="#1e3052"
        gradientTo="#10b981"
        waveColor="rgba(255, 255, 255, 0.1)"
        breadcrumbs={[
          { label: 'Quem Somos', href: '/quem-somos' }
        ]}
      />

      {/* Seção 1: Nossas Raízes */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004990] mb-8">
              As nossas raízes vêm da história da Katun CORPORATION.
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              A Katun, ao longo de mais de <span className="font-bold text-green-600">44 anos</span>, construiu 
              globalmente uma respeitável posição na fabricação e venda de suprimentos. Com a evolução contínua, 
              nos renovamos em 2026 como <span className="font-bold text-[#004990]">Katun Workplace Solutions (KWS)</span>, 
              oferecendo para toda a base de clientes da Katun as mais diversas tecnologias as-a-service{' '}
              <span className="font-semibold text-green-600">(SAAS | PAAS | IAAS)</span>.
            </p>
          </div>

          {/* Timeline Visual */}
          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative">
              {/* 1981 - Katun Foundation */}
              <div className="md:text-right md:pr-12">
                <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-green-500">
                  <div className="text-5xl font-bold text-green-600 mb-2">1981</div>
                  <h3 className="text-xl font-bold text-[#004990] mb-2">Fundação da Katun</h3>
                  <p className="text-gray-600">Início da jornada de excelência em suprimentos globais</p>
                </div>
              </div>
              <div></div>

              {/* 2021 - KSC Birth */}
              <div></div>
              <div className="md:pl-12">
                <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-blue-500">
                  <div className="text-5xl font-bold text-blue-600 mb-2">2021</div>
                  <h3 className="text-xl font-bold text-[#004990] mb-2">Nascimento da KSC</h3>
                  <p className="text-gray-600">Revolução digital com soluções as-a-service</p>
                </div>
              </div>

              {/* 2025 - Present */}
              <div className="md:text-right md:pr-12">
                <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-purple-500">
                  <div className="text-5xl font-bold text-purple-600 mb-2">2025</div>
                  <h3 className="text-xl font-bold text-[#004990] mb-2">Líder em MPS</h3>
                  <p className="text-gray-600">Referência em transformação digital e gestão</p>
                </div>
              </div>
              <div></div>

              {/* 2026 - Brand Renewal */}
              <div></div>
              <div className="md:pl-12">
                <div className="inline-block bg-white p-6 rounded-xl shadow-lg border-2 border-red-500">
                  <div className="text-5xl font-bold text-red-600 mb-2">2026</div>
                  <h3 className="text-xl font-bold text-[#004990] mb-2">Renovação da Marca</h3>
                  <p className="text-gray-600">Evolução para Katun Workplace Solutions (KWS)</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Seção 2: Nosso Reconhecimento */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004990] mb-6">
              A excelência que guia nosso trabalho.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Números que refletem nosso compromisso com inovação e qualidade.
            </p>
          </div>

          {/* Metrics Grid - Continuous Gradient Flow */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Métrica 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#004990] hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-bold text-[#004990] mb-4">+5k</div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Projetos Públicos</h3>
              <p className="text-gray-600">Implementações bem-sucedidas</p>
            </div>

            {/* Métrica 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#0066cc] hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-bold text-[#0066cc] mb-4">+100</div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Certificações</h3>
              <p className="text-gray-600">Expertise reconhecida</p>
            </div>

            {/* Métrica 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#00a0d6] hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-bold text-[#00a0d6] mb-4">+13.5k</div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Clientes pelo Mundo</h3>
              <p className="text-gray-600">Confiança global</p>
            </div>

            {/* Métrica 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-[#10b981] hover:scale-105 transition-all duration-300">
              <div className="text-6xl font-bold text-[#10b981] mb-4">138</div>
              <h3 className="text-xl font-bold text-[#004990] mb-2">Países</h3>
              <p className="text-gray-600">Presença internacional</p>
            </div>
          </div>

          {/* Great Place to Work Seal */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-green-50 to-blue-50 p-10 rounded-2xl shadow-lg border border-green-200">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center shadow-xl">
                  <div className="text-white text-center">
                    <div className="text-4xl font-bold">★</div>
                    <div className="text-xs font-bold mt-1">GPTW</div>
                  </div>
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-[#004990] mb-3">
                  Great Place to Work
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A KSC herda a tradição do ambiente de trabalho colaborativo da Katun, 
                  reconhecido com o selo <span className="font-bold text-green-600">Great Place to Work</span> por{' '}
                  <span className="font-bold text-blue-600">5 anos consecutivos</span>!
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Seção 3: Nossa Cultura */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-100">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#004990] mb-6">
              Os nossos valores importam, e por isso temos grandes resultados.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nossa cultura é construída sobre princípios sólidos que guiam cada decisão.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Missão Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[#004990] hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#004990] to-[#0066cc] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#004990] mb-2">Missão</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#004990] to-[#0066cc]"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Oferecer <span className="font-semibold text-[#004990]">soluções tecnológicas inovadoras e eficientes</span>, 
                com foco no mercado de impressão, para atender às necessidades dos clientes.
              </p>
            </div>

            {/* Visão Card */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-8 border-[#10b981] hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-start gap-4 mb-6">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#22c55e] rounded-xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#004990] mb-2">Visão</h3>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#10b981] to-[#22c55e]"></div>
                </div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ser reconhecida como <span className="font-semibold text-[#10b981]">referência no mercado de tecnologia</span>, 
                fazendo parte da revolução do MPS e agregando valor aos negócios dos clientes.
              </p>
            </div>
          </div>

          {/* Core Values Pills - Gradient Flow */}
          <div className="mt-16 flex flex-wrap justify-center gap-6">
            {[
              { name: 'Inovação', gradient: 'from-[#004990] to-[#0066cc]' },
              { name: 'Excelência', gradient: 'from-[#0066cc] to-[#0080ff]' },
              { name: 'Colaboração', gradient: 'from-[#0080ff] to-[#00a0d6]' },
              { name: 'Compromisso', gradient: 'from-[#00a0d6] to-[#00c0a0]' },
              { name: 'Integridade', gradient: 'from-[#00c0a0] to-[#10b981]' },
              { name: 'Sustentabilidade', gradient: 'from-[#10b981] to-[#22c55e]' }
            ].map((value) => (
              <div
                key={value.name}
                className={`px-8 py-4 bg-gradient-to-r ${value.gradient} text-white font-semibold text-lg rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
              >
                {value.name}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pronto para fazer parte desta história?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Junte-se aos milhares de clientes que confiam na KSC para transformar seus negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-green-600 hover:bg-gray-100"
              >
                <a href="/contato">Entre em Contato</a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-green-600"
              >
                <a href="/ksc">Conheça Nossas Soluções</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
