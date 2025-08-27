import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "KSC Components Laboratory",
  description: "Laboratorio de componentes KSC con banners animados y navegación avanzada",
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
        {children}
      </body>
    </html>
  );
}
