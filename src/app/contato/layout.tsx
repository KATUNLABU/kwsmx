import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contato - KSC | Entre em Contato com Nossos Especialistas',
  description: 'Entre em contato com a equipe KSC. Solicite demonstrações, cotações ou consultoria especializada em gestão de impressão, equipamentos e documentos.',
  keywords: ['Contato KSC', 'Demonstração PaperCut', 'Cotação KPAX', 'Consultoria Gestão Impressão', 'Suporte Técnico KSC', 'Fale Conosco'],
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
