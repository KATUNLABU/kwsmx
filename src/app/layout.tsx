import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ToastProvider } from '@/components';
import { SpeedInsights } from "@vercel/speed-insights/next";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "KWS - Katun Workplace Solutions",
  description: "Soluciones Integradas en Gestión de Impresión y Transformación Digital",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${sourceSans.variable} font-sans antialiased`}
        style={{ fontFamily: 'var(--font-source-sans), "Source Sans Pro", Arial, sans-serif' }}
      >
        <ToastProvider>
          {children}
        </ToastProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
