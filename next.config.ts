import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de imágenes
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Redirección de raíz a /ksc
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ksc',
        permanent: true,
      },
    ];
  },

  // Optimizaciones para producción
  compress: true,
  poweredByHeader: false,
  
  // Ignorar errores de ESLint durante el build
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Ignorar errores de TypeScript durante el build
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Output standalone para Docker (opcional)
  // Descomenta si usas Docker
  // output: 'standalone',
};

export default nextConfig;
