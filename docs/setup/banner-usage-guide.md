# Guía de Uso: Banners Hero Optimizados

## 📋 Resumen

Se han creado **2 banners Hero** optimizados con animaciones fluidas, sin empalmes y con mejor SEO:

1. **HeroBannerOptimized** - Partículas flotantes y grid geométrico
2. **HeroBannerWaves** - Animación de olas realistas con SVG

---

## 🌊 Banner 1: HeroBannerWaves (RECOMENDADO)

### Características
- ✅ Animación de **3 capas de olas SVG** con movimiento suave
- ✅ Gradiente radial de fondo con efecto de profundidad
- ✅ Patrón de puntos sutil (opacity: 5%)
- ✅ **Sin empalmes** - espaciado inteligente entre elementos
- ✅ Badge con blur y borde
- ✅ Scroll indicator con texto "Scroll"
- ✅ Totalmente responsive

### Props Disponibles

```typescript
interface HeroBannerWavesProps {
  title: string;                    // Título principal (SEO)
  subtitle?: string;                 // Subtítulo descriptivo
  children?: React.ReactNode;        // Botones o CTAs
  className?: string;                // Clases CSS adicionales
  minHeight?: string;                // Altura mínima (default: '100vh')
  waveColor?: string;                // Color de las olas (default: 'rgba(255, 255, 255, 0.1)')
  gradientFrom?: string;             // Color inicial gradiente (default: 'rgba(11, 32, 81, 1)')
  gradientTo?: string;               // Color final gradiente (default: 'rgba(0, 82, 155, 1)')
}
```

### Ejemplo de Uso

```tsx
import HeroBannerWaves from '@/components/ui/HeroBannerWaves';
import Button from '@/components/ui/Button';

<HeroBannerWaves
  title="Transformação Digital MPS: Soluções Kyocera FleetServices"
  subtitle="Gestão inteligente de impressão com KPAX e digitalização avançada."
  minHeight="100vh"
  waveColor="rgba(255, 255, 255, 0.1)"
  gradientFrom="rgba(11, 32, 81, 1)"
  gradientTo="rgba(0, 82, 155, 1)"
>
  <div className="flex gap-4 justify-center flex-wrap">
    <Button variant="secondary" size="lg">
      <a href="#sobre-nos">Conheça a KSC</a>
    </Button>
    <Button variant="outline" size="lg">
      <a href="#solucoes">Nossas Soluções</a>
    </Button>
  </div>
</HeroBannerWaves>
```

### Personalización de Colores

```tsx
// Verde (PaperCut)
<HeroBannerWaves
  waveColor="rgba(34, 197, 94, 0.15)"
  gradientFrom="rgba(21, 128, 61, 1)"
  gradientTo="rgba(34, 197, 94, 1)"
  {...props}
/>

// Morado (MegaGED)
<HeroBannerWaves
  waveColor="rgba(139, 92, 246, 0.15)"
  gradientFrom="rgba(88, 28, 135, 1)"
  gradientTo="rgba(107, 70, 193, 1)"
  {...props}
/>

// Naranja (Wiki Alphabet)
<HeroBannerWaves
  waveColor="rgba(249, 115, 22, 0.15)"
  gradientFrom="rgba(194, 65, 12, 1)"
  gradientTo="rgba(234, 88, 12, 1)"
  {...props}
/>
```

---

## ✨ Banner 2: HeroBannerOptimized

### Características
- ✅ **50 partículas flotantes** animadas con Framer Motion
- ✅ Grid geométrico SVG de fondo
- ✅ 2 círculos blur animados para profundidad
- ✅ **Sin empalmes** - padding y margin optimizados
- ✅ Badge con glassmorphism
- ✅ Scroll indicator con animación vertical
- ✅ Totalmente responsive

### Props Disponibles

```typescript
interface HeroBannerOptimizedProps {
  title: string;                    // Título principal (SEO)
  subtitle?: string;                 // Subtítulo descriptivo
  children?: React.ReactNode;        // Botones o CTAs
  className?: string;                // Clases CSS adicionales
  minHeight?: string;                // Altura mínima (default: '100vh')
}
```

### Ejemplo de Uso

```tsx
import HeroBannerOptimized from '@/components/ui/HeroBannerOptimized';
import Button from '@/components/ui/Button';

<HeroBannerOptimized
  title="Expertise, Tecnologia e Inteligência Digital"
  subtitle="Soluções integradas para transformação do seu negócio."
  minHeight="100vh"
>
  <div className="flex gap-4 justify-center flex-wrap">
    <Button variant="primary" size="lg">
      Começar Agora
    </Button>
    <Button variant="outline" size="lg">
      Saiba Mais
    </Button>
  </div>
</HeroBannerOptimized>
```

---

## 🎨 Comparación de Banners

| Característica | HeroBannerWaves | HeroBannerOptimized |
|----------------|-----------------|---------------------|
| **Animación** | Olas SVG realistas | Partículas flotantes |
| **Performance** | ⚡ Excelente | ⚡ Muy buena |
| **Personalización** | 🎨🎨🎨 Alta | 🎨🎨 Media |
| **Complejidad Visual** | 🌊 Elegante y fluida | ✨ Moderna y tech |
| **Props Configurables** | 8 props | 5 props |
| **Uso Recomendado** | Páginas corporativas | Productos tech |
| **Tamaño Código** | ~280 líneas | ~180 líneas |

---

## 🔧 Mejoras Implementadas (Anti-empalme)

### Antes ❌
```tsx
<div className="relative z-10 text-center">
  <h1>Título</h1>
  <p>Subtítulo</p>
  {children}
  <div className="absolute bottom-8">Scroll</div>  ⚠️ Se empalma!
</div>
```

### Después ✅
```tsx
<div className="relative z-10 text-center py-20">
  <h1 className="mb-8">Título</h1>
  <p className="mb-12">Subtítulo</p>
  <div className="mb-20">{children}</div>  ✅ Espaciado seguro
  <div className="mt-16 pt-4">Scroll</div>  ✅ Separación clara
</div>
```

### Cambios Clave:
1. ✅ **py-20** - Padding vertical del contenedor
2. ✅ **mb-8, mb-12, mb-20** - Márgenes entre elementos
3. ✅ **mt-16 pt-4** - Separación del scroll indicator
4. ✅ **px-4** - Padding horizontal en textos para móvil
5. ✅ Eliminado `position: absolute` del scroll indicator

---

## 📱 Responsive Design

Ambos banners incluyen breakpoints optimizados:

```tsx
// Títulos
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"

// Subtítulos  
className="text-lg sm:text-xl md:text-2xl"

// Espaciado
className="px-4 sm:px-6 md:px-8 lg:px-12"

// Botones
className="flex gap-4 flex-wrap"  // Envuelve en móvil
```

---

## 🚀 SEO Keywords Integradas

Ambos banners están optimizados para SEO con las siguientes keywords:

- ✅ **Transformação Digital MPS**
- ✅ **Kyocera FleetServices**
- ✅ **Papercut KSC**
- ✅ **KPAX gestão de parque de impressão**
- ✅ **Gestão inteligente de impressão**
- ✅ **Digitalização avançada**
- ✅ **Serviços gerenciados**

---

## 📦 Instalación

Los componentes ya están exportados en `src/components/index.ts`:

```typescript
export { default as HeroBannerWaves } from './ui/HeroBannerWaves';
export { default as HeroBannerOptimized } from './ui/HeroBannerOptimized';
```

---

## 🎯 Cuándo Usar Cada Banner

### Usa **HeroBannerWaves** cuando:
- ✅ Necesites una presentación elegante y corporativa
- ✅ Quieras transmitir fluidez y continuidad
- ✅ El contenido sea sobre servicios o soluciones B2B
- ✅ Necesites personalizar colores por producto
- ✅ **Ejemplo:** Página HOME, landing pages de servicios

### Usa **HeroBannerOptimized** cuando:
- ✅ Necesites un look más tecnológico y moderno
- ✅ El producto sea software o herramientas digitales
- ✅ Quieras un efecto más dinámico y energético
- ✅ Prefieras simplicidad en la implementación
- ✅ **Ejemplo:** Páginas de productos tech, demos, SaaS

---

## 🐛 Troubleshooting

### Problema: Las olas no se ven
**Solución:** Verifica que `waveColor` tenga suficiente opacidad
```tsx
waveColor="rgba(255, 255, 255, 0.1)"  // ✅ Correcto
waveColor="rgba(255, 255, 255, 0.01)" // ❌ Muy tenue
```

### Problema: Los botones se empalman con el scroll indicator
**Solución:** Asegúrate de usar `mb-20` en el contenedor de children
```tsx
<div className="mb-20">{children}</div>
```

### Problema: El texto se sale en móvil
**Solución:** Agrega `px-4` a títulos y subtítulos
```tsx
<h1 className="... px-4">
```

---

## 📝 Notas Finales

- ⚡ Ambos banners usan **Framer Motion** para animaciones fluidas
- 🎨 Los colores están alineados con la paleta de marca KSC
- 📱 100% responsive en todos los dispositivos
- ♿ Accesible con indicadores visuales claros
- 🚀 Optimizado para performance (GPU acceleration)

**Archivo creado:** `BANNER-USAGE-GUIDE.md`
