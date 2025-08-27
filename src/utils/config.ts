// Configuración global para componentes KSC
export const KSCConfig = {
  // Información de la empresa
  company: {
    name: 'Katun Solution Center',
    shortName: 'KSC',
    email: 'info@katun.com',
    phone: '+1 (555) 123-4567',
    whatsapp: '1234567890',
    website: 'https://katun.com',
    address: 'Tu dirección aquí'
  },

  // Colores del tema
  theme: {
    primary: {
      50: '#eff6ff',
      100: '#dbeafe',
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      900: '#1e3a8a'
    },
    secondary: {
      50: '#f9fafb',
      100: '#f3f4f6',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      900: '#111827'
    }
  },

  // Servicios disponibles
  services: [
    {
      id: 'desarrollo-web',
      name: 'Desarrollo Web',
      description: 'Soluciones web modernas y responsivas utilizando las últimas tecnologías.',
      icon: '🌐',
      features: [
        'Next.js y React',
        'Diseño responsivo',
        'Optimización SEO',
        'Performance óptimo'
      ]
    },
    {
      id: 'marketing-digital',
      name: 'Marketing Digital',
      description: 'Estrategias de marketing digital para hacer crecer tu negocio online.',
      icon: '📈',
      features: [
        'Google Ads',
        'Email Marketing',
        'WhatsApp Business',
        'Analytics y reporting'
      ]
    },
    {
      id: 'soporte-tecnico',
      name: 'Soporte Técnico',
      description: 'Mantenimiento y soporte continuo para tus soluciones digitales.',
      icon: '🔧',
      features: [
        'Monitoreo 24/7',
        'Actualizaciones',
        'Backup automático',
        'Soporte especializado'
      ]
    }
  ],

  // Configuración de animaciones
  animations: {
    duration: {
      fast: 0.3,
      normal: 0.5,
      slow: 0.8
    },
    easing: {
      smooth: 'power2.out',
      bounce: 'elastic.out(1, 0.3)',
      spring: 'back.out(1.7)'
    }
  },

  // Configuración de formularios
  forms: {
    validation: {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      phone: /^\+?[\d\s\-\(\)]+$/
    },
    messages: {
      required: 'Este campo es requerido',
      invalidEmail: 'Ingresa un email válido',
      invalidPhone: 'Ingresa un teléfono válido'
    }
  },

  // URLs y enlaces
  links: {
    demo: '/demo',
    github: 'https://github.com/katun/ksc-components',
    documentation: '/docs'
  }
};

export type ServiceType = typeof KSCConfig.services[0];
export type CompanyInfo = typeof KSCConfig.company;
