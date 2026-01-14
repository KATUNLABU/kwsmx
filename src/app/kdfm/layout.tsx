import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'KDFM MPS Monitor - Gestão Inteligente de Impressão | KSC',
  description: 'Plataforma completa de monitoramento e gestão de serviços de impressão gerenciados (MPS) com inteligência artificial e análise preditiva.',
  keywords: ['KDFM', 'MPS Monitor', 'Gestão de Impressão', 'Managed Print Services', 'Monitoramento de Impressoras', 'Análise Preditiva'],
};

export default function KDFMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
