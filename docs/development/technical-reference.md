# Documentación Técnica - KSC Components

## 📋 Índice
- [Arquitectura](#arquitectura)
- [Componentes Disponibles](#componentes-disponibles)
- [Principios SOLID Aplicados](#principios-solid-aplicados)
- [Guías de Uso](#guías-de-uso)
- [Performance y Optimización](#performance-y-optimización)

## 🏗️ Arquitectura

### Estructura de Carpetas
```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal de pruebas
│   └── demo/              # Demo completa
├── components/            # Componentes reutilizables
│   ├── ui/               # Componentes de interfaz
│   ├── animations/       # Componentes con animaciones
│   └── index.ts          # Exportaciones centralizadas
├── hooks/                # Custom hooks
├── utils/                # Utilidades y configuración
└── types/                # Definiciones de tipos TypeScript
```

### Stack Tecnológico
- **Next.js 14+**: Framework React con App Router
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Framework de utilidades CSS
- **GSAP**: Animaciones de alto rendimiento
- **Framer Motion**: Animaciones declarativas para React

## 🧩 Componentes Disponibles

### UI Components

#### Button
```typescript
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}
```

**Características:**
- ✅ Múltiples variantes y tamaños
- ✅ Estado de carga integrado
- ✅ Soporte para iconos
- ✅ Animaciones micro-interacciones
- ✅ Accesibilidad completa

#### Card
```typescript
interface CardProps {
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  shadow?: 'sm' | 'md' | 'lg' | 'xl';
}
```

**Características:**
- ✅ Animaciones de hover opcionales
- ✅ Niveles de padding configurables
- ✅ Sistema de sombras escalable
- ✅ Composición flexible

#### ServiceCard
```typescript
interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  features?: string[];
}
```

**Características:**
- ✅ Diseño especializado para servicios
- ✅ Animaciones escalonadas
- ✅ Lista de características opcional
- ✅ Iconos personalizables

#### ContactForm
```typescript
interface ContactFormProps {
  onSubmit?: (data: ContactData) => void;
}
```

**Características:**
- ✅ Validación de formularios integrada
- ✅ Estados de carga
- ✅ Integración con WhatsApp
- ✅ Diseño responsivo

#### HeroSection
```typescript
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
  backgroundImage?: string;
}
```

**Características:**
- ✅ Gradientes y fondos personalizables
- ✅ Botones de acción configurables
- ✅ Animaciones de entrada
- ✅ Elementos flotantes animados

### Animation Components

#### FadeIn
```typescript
interface FadeInProps {
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
  delay?: number;
  distance?: number;
  triggerOnce?: boolean;
}
```

**Características:**
- ✅ Múltiples direcciones de entrada
- ✅ Control granular de timing
- ✅ Intersection Observer para performance
- ✅ Reutilizable y configurable

#### Counter
```typescript
interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  label: string;
  suffix?: string;
  prefix?: string;
}
```

**Características:**
- ✅ Animaciones numéricas suaves
- ✅ Trigger automático en scroll
- ✅ Formateo personalizable
- ✅ Performance optimizada con GSAP

## 🎯 Principios SOLID Aplicados

### 1. Single Responsibility Principle (SRP)
Cada componente tiene una responsabilidad específica:
- `Button`: Solo maneja la lógica de botones
- `Card`: Solo estructura contenedores
- `FadeIn`: Solo animaciones de entrada

### 2. Open/Closed Principle (OCP)
Los componentes son:
- **Abiertos para extensión**: Via props y composition
- **Cerrados para modificación**: Lógica interna encapsulada

```typescript
// Extensible via props
<Button variant="primary" icon={<Icon />} />

// Extensible via composition
<Card>
  <CustomContent />
</Card>
```

### 3. Liskov Substitution Principle (LSP)
Todos los componentes del mismo tipo son intercambiables:

```typescript
// Cualquier variante de Button puede reemplazar a otra
<Button variant="primary" />
<Button variant="secondary" />
<Button variant="outline" />
```

### 4. Interface Segregation Principle (ISP)
Interfaces específicas y cohesivas:

```typescript
// Interfaces pequeñas y específicas
interface ButtonProps extends HTMLButtonAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  // Solo props relevantes para Button
}
```

### 5. Dependency Inversion Principle (DIP)
Dependencias inyectadas via props:

```typescript
// Inyección de handlers
<ContactForm onSubmit={customSubmitHandler} />

// Inyección de contenido
<Card>
  {children}
</Card>
```

## 📘 Guías de Uso

### Importación de Componentes
```typescript
// Importación centralizada (recomendado)
import { Button, Card, FadeIn } from '@/components';

// Importación específica
import Button from '@/components/ui/Button';
```

### Composición de Componentes
```typescript
// Ejemplo de composición
<FadeIn direction="up">
  <Card hover padding="lg">
    <ServiceCard 
      title="Mi Servicio"
      description="Descripción del servicio"
      icon={<MyIcon />}
      features={['Feature 1', 'Feature 2']}
    />
  </Card>
</FadeIn>
```

### Personalización con Tailwind
```typescript
// Usando la función cn para merge de clases
<Button 
  className="bg-custom-color hover:bg-custom-hover"
  variant="primary"
>
  Mi Botón Personalizado
</Button>
```

## ⚡ Performance y Optimización

### Lazy Loading
```typescript
// Los componentes de animación usan Intersection Observer
<FadeIn triggerOnce={true}> {/* Se ejecuta solo una vez */}
  <HeavyComponent />
</FadeIn>
```

### Memoización
```typescript
// Usar React.memo para componentes pesados
export default React.memo(MyHeavyComponent);
```

### Code Splitting
```typescript
// Lazy loading de componentes pesados
const HeavyComponent = lazy(() => import('./HeavyComponent'));
```

### Animaciones Optimizadas
- **GSAP**: Para animaciones complejas y de alto rendimiento
- **Framer Motion**: Para micro-interacciones
- **CSS Transitions**: Para estados hover simples

### Bundle Size
- Exportaciones específicas para evitar bundle bloat
- Tree shaking habilitado
- Componentes modulares y reutilizables

## 🔧 Configuración

### Personalizar Tema
```typescript
// En tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#tu-color-primario',
          600: '#tu-color-primario-oscuro',
        }
      }
    }
  }
}
```

### Variables de Entorno
```bash
# .env.local
NEXT_PUBLIC_COMPANY_EMAIL=tu@email.com
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
```

## 🚀 Deployment

### Build Optimizado
```bash
npm run build
```

### Verificación de Performance
```bash
npm run lighthouse
```

### Análisis de Bundle
```bash
npm run analyze
```

---

**Nota:** Esta documentación se actualiza constantemente. Para la versión más reciente, consulta el repositorio del proyecto.
