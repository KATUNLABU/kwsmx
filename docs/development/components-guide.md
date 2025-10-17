# 🧩 Guía de Componentes

Documentación completa de todos los componentes reutilizables del proyecto KSC.

## 📋 Tabla de Contenidos
- [Componentes UI](#componentes-ui)
- [Componentes de Bloque](#componentes-de-bloque)
- [Componentes de Animación](#componentes-de-animación)
- [Hooks Personalizados](#hooks-personalizados)
- [Utilidades](#utilidades)

---

## 🎨 Componentes UI

### NavBar

Navegación principal con menú responsive y dropdown.

**Ubicación:** `src/components/ui/NavBar.tsx`

**Props:**
```typescript
interface NavBarProps {
  menuItems: MenuItem[];
  logo?: string;
  backgroundColor?: string;
}

interface MenuItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}
```

**Uso:**
```tsx
<NavBar 
  menuItems={[
    { label: 'Home', href: '/ksc' },
    { 
      label: 'Soluções', 
      href: '#',
      dropdown: [
        { label: 'PaperCut MF', href: '/papercut' },
        { label: 'KPAX Fleet', href: '/kpax' }
      ]
    }
  ]}
  logo="/KSC.svg"
/>
```

**Características:**
- ✅ Responsive (mobile menu hamburger)
- ✅ Dropdown animado
- ✅ Sticky on scroll
- ✅ Logo configurable

---

### ContactForm

Formulario de contacto con SendGrid y reCAPTCHA v3.

**Ubicación:** `src/components/ui/ContactForm.tsx`

**Props:**
```typescript
interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactData) => void;
}
```

**Uso:**
```tsx
<ContactForm 
  className="max-w-2xl"
  onSubmit={(data) => console.log(data)}
/>
```

**Características:**
- ✅ Validación de campos
- ✅ Integración SendGrid
- ✅ reCAPTCHA v3 invisible
- ✅ WhatsApp button
- ✅ Toast notifications
- ✅ Loading states

---

### HeroBannerWaves

Banner hero con efecto de ondas animadas.

**Ubicación:** `src/components/ui/HeroBannerWaves.tsx`

**Props:**
```typescript
interface HeroBannerWavesProps {
  title: string;
  subtitle: string;
  gradientFrom?: string;
  gradientTo?: string;
  waveColor?: string;
  breadcrumbs?: Breadcrumb[];
}
```

**Uso:**
```tsx
<HeroBannerWaves
  title="Bem-vindo à KSC"
  subtitle="Soluções inteligentes para sua empresa"
  gradientFrom="#1e3052"
  gradientTo="#00529B"
  waveColor="rgba(255, 255, 255, 0.1)"
  breadcrumbs={[
    { label: 'Home', href: '/ksc' },
    { label: 'Contato', href: '/contato' }
  ]}
/>
```

---

### Container

Contenedor responsive con max-width.

**Ubicación:** `src/components/ui/Container.tsx`

**Props:**
```typescript
interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}
```

**Uso:**
```tsx
<Container maxWidth="xl" className="py-20">
  {/* Contenido */}
</Container>
```

---

### ServiceCard

Tarjeta de servicio con icono y descripción.

**Ubicación:** `src/components/ui/ServiceCard.tsx`

**Props:**
```typescript
interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link?: string;
  color?: string;
}
```

**Uso:**
```tsx
<ServiceCard
  icon={<PaperClipIcon />}
  title="Gestão de Impressão"
  description="Controle total sobre impressões"
  link="/papercut"
  color="blue"
/>
```

---

### FlipCards

Tarjetas con efecto flip 3D.

**Ubicación:** `src/components/ui/FlipCards.tsx`

**Props:**
```typescript
interface FlipCardsProps {
  cards: FlipCard[];
}

interface FlipCard {
  id: number;
  frontImage: string;
  frontTitle: string;
  frontSubtitle: string;
  backTitle: string;
  backDescription: string;
  backFeatures: string[];
  buttonText: string;
  buttonLink: string;
  accentColor: string;
}
```

**Uso:**
```tsx
<FlipCards cards={[
  {
    id: 1,
    frontImage: '/papercut-logo.svg',
    frontTitle: 'PaperCut MF',
    frontSubtitle: 'Gestão de Impressão',
    backTitle: 'Características',
    backDescription: 'Controle completo...',
    backFeatures: ['Feature 1', 'Feature 2'],
    buttonText: 'Saiba Mais',
    buttonLink: '/papercut',
    accentColor: '#004990'
  }
]} />
```

---

### Footer

Pie de página con links y redes sociales.

**Ubicación:** `src/components/ui/Footer.tsx`

**Uso:**
```tsx
<Footer />
```

**Características:**
- ✅ Links de navegación
- ✅ Información de contacto
- ✅ Redes sociales (si aplica)
- ✅ Copyright dinámico

---

### Badge

Etiqueta pequeña con texto.

**Ubicación:** `src/components/ui/Badge.tsx`

**Props:**
```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
}
```

**Uso:**
```tsx
<Badge variant="success">Nuevo</Badge>
<Badge variant="error" size="sm">Urgente</Badge>
```

---

### Button

Botón personalizado con variantes.

**Ubicación:** `src/components/ui/Button.tsx`

**Props:**
```typescript
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
}
```

**Uso:**
```tsx
<Button variant="primary" size="lg">
  Enviar Mensagem
</Button>
```

---

### Card

Tarjeta genérica con shadow y bordes.

**Ubicación:** `src/components/ui/Card.tsx`

**Props:**
```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}
```

**Uso:**
```tsx
<Card padding="lg">
  <h3>Título</h3>
  <p>Contenido</p>
</Card>
```

---

## 📦 Componentes de Bloque

### FAQBlock

Bloque de preguntas frecuentes con acordeón.

**Ubicación:** `src/components/blocks/FAQBlock.tsx`

**Props:**
```typescript
interface FAQBlockProps {
  title?: string;
  subtitle?: string;
  faqs: FAQ[];
}

interface FAQ {
  question: string;
  answer: string;
}
```

**Uso:**
```tsx
<FAQBlock
  title="Perguntas Frequentes"
  subtitle="Tire suas dúvidas"
  faqs={[
    {
      question: 'Como funciona?',
      answer: 'Explicação detalhada...'
    }
  ]}
/>
```

---

### FeaturesBlock

Bloque de características con iconos.

**Ubicación:** `src/components/blocks/FeaturesBlock.tsx`

**Props:**
```typescript
interface FeaturesBlockProps {
  title?: string;
  features: Feature[];
  columns?: 2 | 3 | 4;
}

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}
```

**Uso:**
```tsx
<FeaturesBlock
  title="Nossas Características"
  columns={3}
  features={[
    {
      icon: <CheckIcon />,
      title: 'Fácil de Usar',
      description: 'Interface intuitiva'
    }
  ]}
/>
```

---

### PricingBlock

Bloque de planes de precios.

**Ubicación:** `src/components/blocks/PricingBlock.tsx`

**Props:**
```typescript
interface PricingBlockProps {
  plans: PricingPlan[];
}

interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  ctaText: string;
  ctaLink: string;
}
```

**Uso:**
```tsx
<PricingBlock plans={[
  {
    name: 'Básico',
    price: 'R$ 99/mês',
    features: ['Feature 1', 'Feature 2'],
    highlighted: false,
    ctaText: 'Começar',
    ctaLink: '/contato'
  }
]} />
```

---

### TeamBlock

Bloque de equipo con fotos.

**Ubicación:** `src/components/blocks/TeamBlock.tsx`

**Props:**
```typescript
interface TeamBlockProps {
  title?: string;
  members: TeamMember[];
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
}
```

**Uso:**
```tsx
<TeamBlock
  title="Nossa Equipe"
  members={[
    {
      name: 'João Silva',
      role: 'CEO',
      image: '/team/joao.jpg',
      bio: 'Experiência de 20 anos...'
    }
  ]}
/>
```

---

## ✨ Componentes de Animación

### FadeIn

Animación de aparición con Framer Motion.

**Ubicación:** `src/components/animations/FadeIn.tsx`

**Props:**
```typescript
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}
```

**Uso:**
```tsx
<FadeIn delay={0.2} direction="up">
  <h1>Título Animado</h1>
</FadeIn>
```

---

### Counter

Contador animado con números.

**Ubicación:** `src/components/animations/Counter.tsx`

**Props:**
```typescript
interface CounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
}
```

**Uso:**
```tsx
<Counter end={1000} suffix="+" duration={2} />
```

---

## 🪝 Hooks Personalizados

### useIntersectionObserver

Detecta cuando un elemento entra en el viewport.

**Ubicación:** `src/hooks/useIntersectionObserver.ts`

**Uso:**
```typescript
const ref = useRef(null);
const isVisible = useIntersectionObserver(ref, { threshold: 0.5 });

return (
  <div ref={ref}>
    {isVisible && <p>¡Elemento visible!</p>}
  </div>
);
```

---

### usePerformanceMonitor

Monitorea el rendimiento del componente.

**Ubicación:** `src/hooks/usePerformanceMonitor.ts`

**Uso:**
```typescript
usePerformanceMonitor('ComponentName');
```

---

## 🛠️ Utilidades

### cn (Class Names)

Combina classnames con Tailwind.

**Ubicación:** `src/utils/cn.ts`

**Uso:**
```typescript
import { cn } from '@/utils/cn';

<div className={cn(
  'base-class',
  isActive && 'active-class',
  className
)} />
```

---

### designSystem

Configuración del sistema de diseño.

**Ubicación:** `src/utils/designSystem.ts`

**Exporta:**
```typescript
export const colors = {
  primary: '#004990',
  secondary: '#10b981',
  // ...
};

export const spacing = {
  xs: '0.5rem',
  sm: '1rem',
  // ...
};
```

**Uso:**
```typescript
import { colors } from '@/utils/designSystem';

<div style={{ color: colors.primary }} />
```

---

## 📝 Convenciones

### Nomenclatura de Componentes

```typescript
// ✅ Correcto (PascalCase)
function MyComponent() {}
export default MyComponent;

// ❌ Incorrecto
function mycomponent() {}
function my_component() {}
```

### Estructura de Archivo

```typescript
'use client'; // Si necesita interactividad

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

// Interfaces
interface MyComponentProps {
  title: string;
  description?: string;
}

// Componente
const MyComponent: React.FC<MyComponentProps> = ({ 
  title, 
  description 
}) => {
  return (
    <div className="...">
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </div>
  );
};

export default MyComponent;
```

### Props Opcionales

```typescript
// Usar valores por defecto
interface Props {
  title: string;
  size?: 'sm' | 'md' | 'lg';
}

const Component: React.FC<Props> = ({ 
  title, 
  size = 'md' // Valor por defecto
}) => {
  // ...
};
```

---

## 🎨 Estilos

### Tailwind CSS

El proyecto usa Tailwind CSS para estilos:

```tsx
// ✅ Correcto - Usar Tailwind
<div className="flex items-center gap-4 p-6 rounded-lg">

// ❌ Evitar - CSS inline
<div style={{ display: 'flex', padding: '24px' }}>
```

### Colores Corporativos

```tsx
// Azul corporativo
<h1 className="text-[#004990]">

// Verde corporativo
<span className="text-[#10b981]">

// Gradientes
<div className="bg-gradient-to-r from-blue-600 to-green-600">
```

---

## 📚 Recursos

### Crear Nuevo Componente

1. **Crear archivo:**
   ```bash
   touch src/components/ui/MyNewComponent.tsx
   ```

2. **Usar template:**
   ```typescript
   'use client';
   
   import React from 'react';
   import { cn } from '@/utils/cn';
   
   interface MyNewComponentProps {
     // Props aquí
   }
   
   const MyNewComponent: React.FC<MyNewComponentProps> = (props) => {
     return (
       <div>
         {/* Contenido */}
       </div>
     );
   };
   
   export default MyNewComponent;
   ```

3. **Exportar en index:**
   ```typescript
   // src/components/index.ts
   export { default as MyNewComponent } from './ui/MyNewComponent';
   ```

4. **Usar en páginas:**
   ```typescript
   import { MyNewComponent } from '@/components';
   
   <MyNewComponent />
   ```

---

**Última actualización:** 17 de Octubre, 2025
