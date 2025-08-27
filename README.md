# KSC Components - Laboratorio de Componentes Reutilizables

Este proyecto es un laboratorio de pruebas para desarrollar componentes reutilizables para **Katun Solution Center (KSC)**, utilizando las mejores prácticas de desarrollo con Next.js, Tailwind CSS y GSAP.

## 🎯 Objetivo

Crear y probar componentes reutilizables que se utilizarán en la página web principal de KSC para:
- Generar ventas a través de correo electrónico y WhatsApp
- Crear campañas publicitarias con Google Ads
- Mostrar servicios y sectores que cubrimos
- Proporcionar soporte técnico y mantenimiento

## 🛠️ Tecnologías

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Framework de utilidades CSS
- **GSAP** - Animaciones de alto rendimiento
- **Framer Motion** - Animaciones declarativas para React
- **Principios SOLID** - Buenas prácticas de desarrollo

## 📁 Estructura del Proyecto

```
src/
├── app/                 # App Router de Next.js
├── components/         
│   ├── ui/             # Componentes de UI básicos
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── ServiceCard.tsx
│   ├── animations/     # Componentes de animación
│   │   └── FadeIn.tsx
│   └── index.ts        # Exportaciones centralizadas
├── hooks/              # Custom hooks reutilizables
│   └── useIntersectionObserver.ts
└── utils/              # Utilidades
    └── cn.ts           # Función para merge de clases CSS
```

## 🚀 Comenzar

1. **Instalar dependencias:**
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador:**
   [http://localhost:3000](http://localhost:3000)

## 📦 Componentes Disponibles

### UI Components

#### Button
Botón reutilizable con múltiples variantes y estados:
- Variantes: `primary`, `secondary`, `outline`, `ghost`
- Tamaños: `sm`, `md`, `lg`
- Estados: normal, loading, disabled
- Soporte para iconos

#### Card
Tarjeta contenedora con animaciones de hover:
- Diferentes niveles de padding y sombra
- Animaciones opcionales con Framer Motion
- Completamente personalizable

#### ServiceCard
Tarjeta especializada para mostrar servicios:
- Soporte para iconos
- Lista de características
- Animaciones de entrada escalonadas

### Animation Components

#### FadeIn
Componente de animación con GSAP:
- Direcciones: `up`, `down`, `left`, `right`
- Control de duración y delay
- Trigger automático en scroll
- Optimizado para rendimiento

### Hooks

#### useIntersectionObserver
Hook para detectar visibilidad de elementos:
- Configuración de threshold y rootMargin
- Opción de trigger único o repetido
- Útil para lazy loading y animaciones

## 🎨 Principios de Diseño

- **Reutilización**: Todos los componentes están diseñados para ser reutilizables
- **Composición**: Uso de composition pattern para flexibilidad
- **Accesibilidad**: Implementación de ARIA labels y navegación por teclado
- **Performance**: Optimización con lazy loading y animaciones eficientes
- **Tipado**: TypeScript para mejor DX y menos errores

## 🔧 Convenciones de Código

- **SOLID Principles**: Aplicados en el diseño de componentes
- **Single Responsibility**: Cada componente tiene una responsabilidad específica
- **Open/Closed**: Extensibles via props, cerrados para modificación
- **Dependency Inversion**: Inyección de dependencias via props

## 📝 Próximos Pasos

- [ ] Agregar componentes de formularios
- [ ] Implementar sistema de temas
- [ ] Crear componentes de navegación
- [ ] Desarrollar componentes de hero sections
- [ ] Agregar componentes de testimonios
- [ ] Implementar componentes de precios
- [ ] Crear sistema de grid personalizado

## 🤝 Contribución

Este es un proyecto de desarrollo interno. Para agregar nuevos componentes:

1. Seguir la estructura de carpetas establecida
2. Implementar TypeScript con tipos estrictos
3. Documentar props y uso del componente
4. Probar en diferentes dispositivos
5. Optimizar para rendimiento

---

## Documentación Original de Next.js
