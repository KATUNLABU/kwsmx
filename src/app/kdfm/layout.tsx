import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KDFM MPS Monitor - Gestión Inteligente de Impresión | KSC',
  description: 'Plataforma completa de monitoreo y gestión de servicios de impresión gestionados (MPS) con inteligencia artificial y análisis predictivo.',
  keywords: ['KDFM', 'MPS Monitor', 'Gestión de Impresión', 'Managed Print Services', 'Monitoreo de Impresoras', 'Análisis Predictivo'],
};

export default function KDFMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
