import type { Metadata } from 'next';
import Script from 'next/script';
import NavBar from '@/components/ui/NavBar';
import Container from '@/components/ui/Container';
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Footer from '@/components/ui/Footer';
import ContactForm from '@/components/ui/ContactForm';

export const metadata: Metadata = {
  title: 'Contato - KSC | Entre em Contato com Nossos Especialistas',
  description: 'Entre em contato com a equipe KSC. Solicite demonstrações, cotações ou consultoria especializada em gestão de impressão, equipamentos e documentos.',
  keywords: ['Contato KSC', 'Demonstração PaperCut', 'Cotação KPAX', 'Consultoria Gestão Impressão', 'Suporte Técnico KSC', 'Fale Conosco'],
};

export default function ContatoPage() {
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
      
      <NavBar menuItems={menuItems} logo="/KSC.svg" />

      {/* Hero Banner */}
      <HeroBannerWaves
        title="Estamos Aqui para Ajudar Você"
        subtitle="Nossa equipe de especialistas está pronta para atender suas necessidades e transformar a gestão tecnológica da sua empresa."
        gradientFrom="#1e3052"
        gradientTo="#00529B"
        waveColor="rgba(255, 255, 255, 0.1)"
        breadcrumbs={[
          { label: 'Contato', href: '/contato' }
        ]}
      />

      {/* Main Contact Section */}
      <section id="formulario" className="py-20 bg-gradient-to-b from-white to-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Information */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-6">
                Múltiplos Canais de Atendimento
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Nossa equipe está preparada para atender você através de diversos canais de comunicação. 
                Seja para solicitar uma demonstração, tirar dúvidas sobre nossas soluções ou contratar 
                nossos serviços, estamos prontos para ajudar.
              </p>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-lg border-l-4 border-blue-500 mb-10">
                <p className="text-sm text-gray-700 font-medium">
                  ⏱️ <strong>Tempo de resposta:</strong> Retornamos todos os contatos em até 24 horas úteis
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
                      <h3 className="text-lg font-bold text-[#004990] mb-2">Nossa Sede</h3>
                      <p className="text-gray-700 mb-1">
                        <strong>Av. Ermano Marchetti, 1435</strong><br />
                        Água Branca - São Paulo, SP<br />
                        CEP: 05038-001
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
                        📍 Próximo ao Shopping Villa-Lobos
                      </p>
                      <a
                        href="https://www.google.com/maps/search/?api=1&query=Av.+Ermano+Marchetti+1435+São+Paulo+SP"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 text-green-600 hover:text-green-700 font-semibold"
                      >
                        Ver no mapa
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
                      <h3 className="text-lg font-bold text-[#004990] mb-2">Email Corporativo</h3>
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
                      <h3 className="text-lg font-bold text-[#004990] mb-2">Central de Atendimento</h3>
                      
                      <a
                        href="tel:+5511970476396"
                        className="text-purple-600 hover:text-purple-700 font-semibold text-base block mb-2"
                      >
                        +55 (11) 97047-6396
                      </a>
                      <p className="text-sm text-gray-600">
                        📞 Segunda a Sexta: 08h às 18h
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl border border-green-200">
                <h3 className="text-lg font-bold text-[#004990] mb-2">Fale Conosco pelo WhatsApp</h3>
                <p className="text-sm text-gray-600 mb-4">Atendimento rápido e direto através do WhatsApp</p>
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
                  Solicite um Contato
                </h2>
                <p className="text-lg opacity-90">
                  Preencha o formulário e receba atendimento personalizado da nossa equipe de especialistas.
                </p>
              </div>
              <div className="bg-white p-6 rounded-b-xl shadow-xl border border-gray-200">
                <div className="mb-6 flex items-start gap-3 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div className="text-sm text-gray-700">
                    <strong>O que você pode solicitar:</strong>
                    <ul className="mt-2 space-y-1">
                      <li>• Demonstração gratuita das soluções</li>
                      <li>• Cotação personalizada</li>
                      <li>• Consultoria especializada</li>
                      <li>• Informações sobre produtos</li>
                    </ul>
                  </div>
                </div>
              
                <ContactForm />
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
              Visite Nossa Sede em São Paulo
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              Estamos estrategicamente localizados na zona oeste de São Paulo, com fácil acesso.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Estacionamento no local</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Próximo ao metrô</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Acessibilidade completa</span>
              </div>
            </div>
          </div>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0174738986683!2d-46.69353892373495!3d-23.527523578804873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8e8d7e4e6b3%3A0x1c8e8c9a8e8e8e8e!2sAv.%20Ermano%20Marchetti%2C%201435%20-%20%C3%81gua%20Branca%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2005038-001!5e0!3m2!1spt-BR!2sbr!4v1729188000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da KSC - Av. Ermano Marchetti, 1435, São Paulo"
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
              <h3 className="text-lg font-bold text-[#004990] mb-2">Metrô</h3>
              <p className="text-gray-700 text-sm">
                Estação Água Branca (Linha 7 - Rubi)<br />
                10 minutos a pé
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#004990] mb-2">Carro</h3>
              <p className="text-gray-700 text-sm">
                Acesso pela Marginal Tietê<br />
                Estacionamento gratuito
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-[#004990] mb-2">Horário</h3>
              <p className="text-gray-700 text-sm">
                Segunda a Sexta: 08h às 18h<br />
                Agende sua visita com antecedência
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#004990] mb-4">
              Perguntas Frequentes sobre Atendimento
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tire suas principais dúvidas sobre como entrar em contato e solicitar nossos serviços.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  Qual o prazo de resposta após o envio do formulário?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Nossa equipe retorna todos os contatos em até 24 horas úteis. Para urgências, entre em contato 
                através dos telefones +55 (11) 98173-9425 ou +55 (11) 97047-6396, ou pelo WhatsApp.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  Como solicito uma demonstração gratuita?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Sim! Oferecemos demonstrações gratuitas e personalizadas de todas as nossas soluções. 
                Preencha o formulário acima ou ligue para agendar um horário com nossos especialistas.
                A demonstração pode ser presencial ou online, conforme sua preferência.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  Quais regiões e países vocês atendem?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Atendemos todo o território brasileiro com suporte local. Além disso, fazemos parte da rede 
                global Katun, presente em 138 países. Temos capacidade de atender clientes multinacionais 
                com operações em diversos países.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  Quanto tempo leva para implementar uma solução?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                O prazo varia conforme a complexidade e tamanho do projeto. Em média, implementações básicas 
                levam de 2 a 4 semanas, enquanto projetos complexos podem levar de 1 a 3 meses. Nossa equipe 
                fornece um cronograma detalhado durante a fase de planejamento.
              </p>
            </details>

            <details className="group bg-gray-50 p-6 rounded-xl hover:bg-gray-100 transition-colors duration-300">
              <summary className="flex justify-between items-center cursor-pointer list-none">
                <h3 className="text-lg font-bold text-[#004990]">
                  Vocês oferecem suporte técnico 24/7?
                </h3>
                <svg className="w-5 h-5 text-gray-600 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Nosso horário de atendimento é de Segunda a Sexta-feira, das 08h às 18h. Para clientes com 
                contratos de manutenção, oferecemos suporte estendido e atendimento prioritário. Entre em 
                contato para conhecer nossos planos de suporte.
              </p>
            </details>
          </div>
        </Container>
      </section>

      <Footer />
    </>
  );
}
