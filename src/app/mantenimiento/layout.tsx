import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página em Manutenção | KSC',
  description: 'Esta página está temporariamente em manutenção. Entre em contato com nosso especialista para mais informações.',
};

export default function ManutencaoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
