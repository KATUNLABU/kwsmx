import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto - KSC | Ponte en contacto con nuestros expertos',
  description: 'Comunícate con el equipo de KSC. Solicita demostraciones, cotizaciones o consultoría especializada en gestión de impresión, equipos y documentos.',
  keywords: ['Contacto KSC', 'Demostración PaperCut', 'Cotización KPAX', 'Consultoría Gestión Impresión', 'Soporte Técnico KSC', 'Contáctanos'],
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
