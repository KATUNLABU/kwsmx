import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'MyQ - Solução Completa de Gestão de Impressão | KSC',
  description: 'Plataforma moderna e intuitiva para impressão segura, mobilidade e controle total sobre seu ambiente de impressão com mais de 200.000 instalações no mundo.',
  keywords: ['MyQ', 'Impressão Segura', 'Pull Printing', 'Impressão Mobile', 'Gestão de Documentos', 'Digitalização Inteligente'],
};

export default function MyQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
