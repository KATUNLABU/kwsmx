# 📚 KSC Components - Documentación Completa para Prop Engineering

> Documentación técnica detallada de todos los componentes disponibles en la biblioteca KSC Components, diseñada específicamente para prop engineering y esquematización de contenidos.

## 📋 Índice

1. [🎨 Componentes UI Base](#-componentes-ui-base)
2. [🏗️ Componentes de Layout](#️-componentes-de-layout)
3. [📦 Componentes de Bloques](#-componentes-de-bloques)
4. [✨ Componentes de Animación](#-componentes-de-animación)
5. [🔧 Hooks y Utilidades](#-hooks-y-utilidades)
6. [🎯 Patrones de Implementación](#-patrones-de-implementación)
7. [📖 Guías de Uso](#-guías-de-uso)

---

## 🎨 Componentes UI Base

### `Button`
**Archivo:** `src/components/ui/Button.tsx`

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}
```

**🎯 Props para Esquematización:**
- **variant**: Controla el estilo visual del botón
  - `primary`: Azul sólido, alta prominencia
  - `secondary`: Gris sólido, prominencia media
  - `outline`: Borde con fondo transparente
  - `ghost`: Sin fondo, solo texto
- **size**: Define dimensiones y padding
  - `sm`: 32px altura, texto pequeño
  - `md`: 40px altura, texto medio (default)
  - `lg`: 48px altura, texto grande
- **isLoading**: Muestra spinner y desactiva interacción
- **icon**: Elemento React para mostrar icono
- **iconPosition**: Posición del icono relativa al texto

**💡 Casos de Uso:**
- CTAs principales (`variant="primary"`)
- Acciones secundarias (`variant="outline"`)
- Navegación discreta (`variant="ghost"`)

---

### `Card`
**Archivo:** `src/components/ui/Card.tsx`

```typescript
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**🎯 Props para Esquematización:**
- **hover**: Activa animaciones de elevación al hover
- **padding**: Espaciado interno
  - `sm`: 16px
  - `md`: 24px (default)
  - `lg`: 32px
- **shadow**: Intensidad de sombra
  - `sm`: Sutil
  - `md`: Moderada (default)
  - `lg`: Prominente
  - `xl`: Máxima elevación

**💡 Casos de Uso:**
- Contenedores de información
- Tarjetas de servicios/productos
- Secciones destacadas

---

### `Typography`
**Archivo:** `src/components/ui/Typography.tsx`

```typescript
interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'lead' | 'large' | 'small' | 'blockquote' | 'code';
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}
```

**🎯 Props para Esquematización:**
- **variant**: Estilo tipográfico
  - `h1-h6`: Títulos jerárquicos
  - `p`: Párrafo estándar
  - `lead`: Texto destacado (intro)
  - `large`: Texto grande
  - `small`: Texto pequeño
  - `blockquote`: Citas
  - `code`: Código inline
- **as**: Elemento HTML semántico (sobrescribe variant)

**💡 Casos de Uso:**
- Jerarquía de títulos
- Contenido de párrafos
- Texto destacado y citas

---

### `Container`
**Archivo:** `src/components/ui/Container.tsx`

```typescript
interface ContainerProps {
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  centered?: boolean;
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **size**: Ancho máximo del contenedor
  - `sm`: 640px
  - `md`: 768px
  - `lg`: 1024px (default)
  - `xl`: 1280px
  - `full`: 100%
- **padding**: Espaciado horizontal
- **centered**: Centra horizontalmente

**💡 Casos de Uso:**
- Wrapper para secciones
- Control de ancho de contenido
- Layouts responsivos

---

### `Badge`
**Archivo:** `src/components/ui/Badge.tsx`

```typescript
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **variant**: Color y contexto
  - `default`: Gris neutro
  - `primary`: Azul principal
  - `secondary`: Gris oscuro
  - `success`: Verde
  - `warning`: Amarillo
  - `error`: Rojo
- **size**: Tamaño del badge

**💡 Casos de Uso:**
- Estados y categorías
- Etiquetas de contenido
- Indicadores visuales

---

### `NavBar`
**Archivo:** `src/components/ui/NavBar.tsx`

```typescript
interface NavBarProps {
  logo?: string;
  logoAlt?: string;
  className?: string;
  menuItems?: Array<{
    label: string;
    href: string;
    dropdown?: Array<{
      label: string;
      href: string;
    }>;
  }>;
}
```

**🎯 Props para Esquematización:**
- **logo**: URL del logo
- **menuItems**: Estructura de navegación con dropdowns opcionales
- Responsive automático (hamburger en móvil)

**💡 Casos de Uso:**
- Navegación principal del sitio
- Menús con submenús
- Branding corporativo

---

### `Footer`
**Archivo:** `src/components/ui/Footer.tsx`

```typescript
interface FooterProps {
  className?: string;
}
```

**🎯 Props para Esquematización:**
- Estructura fija con 4 columnas:
  1. Logo + descripción + redes sociales
  2. Enlaces rápidos
  3. Información de contacto
  4. Enlaces legales
- Copyright dinámico
- Diseño completamente responsivo

**💡 Casos de Uso:**
- Pie de página institucional
- Información de contacto
- Enlaces importantes

---

## 🏗️ Componentes de Layout

### `WavyBanner`
**Archivo:** `src/components/ui/WavyBanner.tsx`

```typescript
interface WavyBannerProps {
  title: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  className?: string;
  children?: React.ReactNode;
}
```

**🎯 Props para Esquematización:**
- **title**: Título principal (obligatorio)
- **subtitle**: Subtítulo opcional
- **backgroundColor**: Color de fondo (default: azul)
- **textColor**: Color del texto
- **children**: Contenido adicional (botones, etc.)

**🌊 Características Visuales:**
- Ondas animadas en CSS
- Gradientes de fondo
- Elementos flotantes animados
- Totalmente responsivo

**💡 Casos de Uso:**
- Heroes de página principal
- Cabeceras de sección
- Landing pages

---

### `HeroSection`
**Archivo:** `src/components/ui/HeroSection.tsx`

```typescript
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: {
    text: string;
    onClick: () => void;
  };
  secondaryAction?: {
    text: string;
    onClick: () => void;
  };
  backgroundImage?: string;
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **title**: Título principal
- **subtitle**: Subtítulo opcional
- **description**: Descripción extendida
- **primaryAction/secondaryAction**: Botones de acción
- **backgroundImage**: Imagen de fondo

**💡 Casos de Uso:**
- Heroes más complejos
- Páginas de aterrizaje
- Presentaciones de producto

---

## 📦 Componentes de Bloques

### `FeaturesBlock`
**Archivo:** `src/components/blocks/FeaturesBlock.tsx`

```typescript
interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlighted?: boolean;
}

interface FeaturesBlockProps {
  title?: string;
  subtitle?: string;
  features: Feature[];
  layout?: '2-column' | '3-column' | '4-column' | 'hero-side';
  variant?: 'default' | 'cards' | 'minimal' | 'centered';
  className?: string;
  animated?: boolean;
}
```

**🎯 Props para Esquematización:**
- **features**: Array de características
- **layout**: Distribución en grid
- **variant**: Estilo visual
- **animated**: Animaciones de entrada

**💡 Casos de Uso:**
- Secciones de características
- Beneficios de producto
- Servicios destacados

---

### `TeamBlock`
**Archivo:** `src/components/blocks/TeamBlock.tsx`

```typescript
interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

interface TeamBlockProps {
  title?: string;
  subtitle?: string;
  members: TeamMember[];
  layout?: '2-column' | '3-column' | '4-column';
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **members**: Array de miembros del equipo
- **layout**: Distribución en grid
- Integración con redes sociales

**💡 Casos de Uso:**
- Páginas "Sobre nosotros"
- Equipos de proyecto
- Staff corporativo

---

### `PricingBlock`
**Archivo:** `src/components/blocks/PricingBlock.tsx`

```typescript
interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  features: string[];
  popular?: boolean;
  cta: {
    text: string;
    action: () => void;
  };
}

interface PricingBlockProps {
  title?: string;
  subtitle?: string;
  plans: PricingPlan[];
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **plans**: Array de planes de precio
- **popular**: Destacar plan recomendado
- **cta**: Botón de acción por plan

**💡 Casos de Uso:**
- Páginas de precios
- Comparación de planes
- SaaS y servicios

---

### `FAQBlock`
**Archivo:** `src/components/blocks/FAQBlock.tsx`

```typescript
interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

interface FAQBlockProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  searchable?: boolean;
  categorized?: boolean;
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **items**: Array de preguntas frecuentes
- **searchable**: Funcionalidad de búsqueda
- **categorized**: Filtrado por categorías
- **category**: Agrupación opcional

**💡 Casos de Uso:**
- Secciones de ayuda
- Preguntas frecuentes
- Documentación de soporte

---

## ✨ Componentes de Animación

### `FadeIn`
**Archivo:** `src/components/animations/FadeIn.tsx`

```typescript
interface FadeInProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  distance?: number;
  triggerOnce?: boolean;
  className?: string;
}
```

**🎯 Props para Esquematización:**
- **direction**: Dirección de la animación
- **duration**: Duración en segundos
- **delay**: Retraso antes de iniciar
- **distance**: Distancia de movimiento (px)
- **triggerOnce**: Animar solo una vez

**💡 Casos de Uso:**
- Entrada de secciones
- Revelado de contenido
- Animaciones de scroll

---

### `Counter`
**Archivo:** `src/components/animations/Counter.tsx`

```typescript
interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  label: string;
  suffix?: string;
  prefix?: string;
  className?: string;
  formatter?: (value: number) => string;
}
```

**🎯 Props para Esquematización:**
- **end**: Número final del contador
- **duration**: Duración de la animación
- **label**: Etiqueta descriptiva
- **suffix/prefix**: Texto antes/después del número
- **formatter**: Función de formateo personalizada

**💡 Casos de Uso:**
- Estadísticas
- Métricas de empresa
- Contadores de logros

---

### `FlipCards`
**Archivo:** `src/components/ui/FlipCards.tsx`

```typescript
interface CardData {
  id: string;
  title: string;
  logo: string;
  description: string;
  features: string[];
  website: string;
  category: string;
  color: string;
}

interface FlipCardsProps {
  className?: string;
}
```

**🎯 Props para Esquematización:**
- Datos predefinidos de tarjetas empresariales
- Animación de flip 3D
- Categorías y colores personalizados

**💡 Casos de Uso:**
- Showcase de clientes
- Portfolio de proyectos
- Catálogo de servicios

---

### `SectorCarousel`
**Archivo:** `src/components/ui/SectorCarousel.tsx`

```typescript
interface SectorCarouselProps {
  className?: string;
}
```

**🎯 Props para Esquematización:**
- Carrusel automático de logos
- Logos predefinidos de sectores
- Animación infinite loop

**💡 Casos de Uso:**
- Logos de clientes
- Tecnologías utilizadas
- Partners comerciales

---

## 🔧 Hooks y Utilidades

### `useIntersectionObserver`
**Archivo:** `src/hooks/useIntersectionObserver.ts`

```typescript
interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}
```

**🎯 Props para Esquematización:**
- **threshold**: Porcentaje visible para trigger (0-1)
- **rootMargin**: Margen del área de observación
- **triggerOnce**: Ejecutar callback solo una vez

**💡 Casos de Uso:**
- Lazy loading
- Animaciones en scroll
- Analytics de visualización

---

### `useToast`
**Archivo:** `src/components/ui/Toast.tsx`

```typescript
interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'warning' | 'info';
  duration?: number;
}
```

**🎯 Props para Esquematización:**
- **message**: Texto del toast
- **type**: Tipo visual y semántico
- **duration**: Duración en ms (default: 3000)

**💡 Casos de Uso:**
- Feedback de acciones
- Notificaciones del sistema
- Confirmaciones

---

## 🎯 Patrones de Implementación

### 1. **Composición de Componentes**
```typescript
// Patrón recomendado para construir interfaces
<FadeIn direction="up" delay={0.2}>
  <Container size="lg" padding="xl">
    <Card hover shadow="lg">
      <Typography variant="h2">Título</Typography>
      <Typography variant="p">Contenido</Typography>
      <Button variant="primary" size="lg">
        Acción
      </Button>
    </Card>
  </Container>
</FadeIn>
```

### 2. **Sistema de Design Tokens**
```typescript
// Valores consistentes a través de todos los componentes
const SIZES = {
  sm: 'small',
  md: 'medium', 
  lg: 'large',
  xl: 'extra-large'
};

const VARIANTS = {
  primary: 'brand-primary',
  secondary: 'brand-secondary',
  outline: 'transparent-border'
};
```

### 3. **Prop Drilling vs Context**
```typescript
// Para datos globales, usar Context
<ToastProvider>
  <App />
</ToastProvider>

// Para props específicas, usar prop drilling
<Button variant="primary" onClick={handleClick}>
  Acción
</Button>
```

---

## 📖 Guías de Uso

### 🎨 **Para Diseñadores (Prop Engineering)**

#### **Mapeo de Propiedades UI**
1. **Colores**: Usar variants semánticos (`primary`, `secondary`, etc.)
2. **Espaciado**: Usar sistema de spacing (`sm`, `md`, `lg`, `xl`)
3. **Tipografía**: Usar jerarquía semántica (`h1-h6`, `p`, `lead`)
4. **Estados**: Usar props booleanos (`hover`, `loading`, `disabled`)

#### **Esquematización de Contenido**
```typescript
// Ejemplo de esquema para una landing page
interface LandingPageSchema {
  hero: {
    component: 'WavyBanner';
    props: {
      title: string;
      subtitle: string;
      backgroundColor: string;
    };
    children: Button[];
  };
  features: {
    component: 'FeaturesBlock';
    props: {
      title: string;
      features: Feature[];
      layout: '3-column';
    };
  };
  testimonials: {
    component: 'FlipCards';
  };
  cta: {
    component: 'Card';
    children: [Typography, Button];
  };
}
```

### 🛠️ **Para Desarrolladores**

#### **Importación Optimizada**
```typescript
// Usar barrel exports para imports limpios
import { 
  WavyBanner, 
  Button, 
  Card, 
  FadeIn,
  useToast 
} from '@/components';
```

#### **Customización con Tailwind**
```typescript
// Usar className para overrides específicos
<Button 
  variant="primary"
  className="bg-gradient-to-r from-purple-500 to-pink-500"
>
  Botón Gradient Custom
</Button>
```

#### **Composition Pattern**
```typescript
// Preferir composición sobre configuración
<Card>
  <CardHeader>
    <Typography variant="h3">Título</Typography>
  </CardHeader>
  <CardContent>
    <Typography variant="p">Contenido</Typography>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Acción</Button>
  </CardFooter>
</Card>
```

---

## 🔍 Componentes por Caso de Uso

### **📄 Landing Pages**
- `WavyBanner` - Hero principal
- `FeaturesBlock` - Características del producto
- `FlipCards` - Testimonios/clientes
- `Counter` - Estadísticas
- `SectorCarousel` - Logos de clientes

### **📝 Páginas de Contenido**
- `Container` - Layout responsivo
- `Typography` - Jerarquía de contenido
- `Card` - Secciones destacadas
- `Badge` - Categorías y etiquetas

### **🛍️ E-commerce**
- `PricingBlock` - Planes y precios
- `Button` - CTAs de compra
- `Badge` - Estados de producto
- `Toast` - Feedback de acciones

### **👥 Páginas Corporativas**
- `TeamBlock` - Equipo de trabajo
- `FAQBlock` - Preguntas frecuentes
- `ContactForm` - Formularios de contacto
- `Footer` - Información corporativa

### **📱 Aplicaciones Web**
- `NavBar` - Navegación principal
- `FloatingChat` - Soporte al cliente
- `Toast` - Notificaciones
- `FadeIn` - Animaciones de interfaz

---

## 🎯 Conclusión

Esta biblioteca está diseñada con principios de **atomic design** y **component-driven development**, permitiendo:

1. **Reutilización máxima** de componentes
2. **Consistencia visual** a través de design tokens
3. **Flexibilidad** mediante composición
4. **Performance** optimizada con lazy loading
5. **Accesibilidad** integrada en todos los componentes

**Para prop engineering:** Usa esta documentación para mapear requisitos de diseño a props específicos y crear esquemas de contenido estructurados.

**Para desarrollo:** Combina componentes mediante composición para crear interfaces complejas manteniendo simplicidad y mantenibilidad.

---

*Documentación generada para KSC Components v1.0 - Actualizada: Octubre 2025*