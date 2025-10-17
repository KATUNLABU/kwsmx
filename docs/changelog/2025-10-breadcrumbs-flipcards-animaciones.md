# Breadcrumbs + FlipCards - Z-Index, Animaciones y Responsive

## ✅ Cambios Realizados

### 🎯 Tres Mejoras Principales:

1. 🔧 **Breadcrumbs:** z-index aumentado para estar siempre sobre el navbar
2. 🎭 **FlipCards:** Animaciones sutiles para indicar interactividad
3. 📱 **Responsive:** Todo optimizado para móvil, tablet y desktop

---

## 1️⃣ Breadcrumbs - Z-Index Fix

### Problema:
- ❌ Breadcrumbs con `z-50` (mismo que navbar)
- ❌ NavBar los tapaba cuando scrolleaban
- ❌ No eran visibles correctamente

### Solución:

**ANTES:**
```tsx
<div className="absolute top-24 left-6 z-50">
  <nav className="flex items-center gap-2 text-sm ...">
```

**AHORA:**
```tsx
<div className="absolute top-20 sm:top-24 left-4 sm:left-6 z-[60]">
  <nav className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm ...">
```

### Cambios Específicos:

| Propiedad | ANTES | AHORA | Beneficio |
|-----------|-------|-------|-----------|
| **Z-Index** | `z-50` | `z-[60]` | Siempre sobre navbar (z-50) |
| **Top Position** | `top-24` | `top-20 sm:top-24` | Responsive para móvil |
| **Left Position** | `left-6` | `left-4 sm:left-6` | Más cerca del borde en móvil |
| **Text Size** | `text-sm` | `text-xs sm:text-sm` | Más pequeño en móvil |
| **Gap** | `gap-2` | `gap-1.5 sm:gap-2` | Más compacto en móvil |
| **Padding** | `px-4 py-2` | `px-3 sm:px-4 py-1.5 sm:py-2` | Responsive |

### Íconos Responsive:

**ANTES:**
```tsx
<svg className="w-4 h-4" ...>
<span>Home</span>
```

**AHORA:**
```tsx
<svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" ...>
<span className="hidden sm:inline">Home</span>  {/* Oculta texto en móvil */}
```

**Beneficios:**
- ✅ **Breadcrumbs siempre visibles** sobre el navbar
- ✅ **Móvil:** Solo íconos, más compacto
- ✅ **Desktop:** Íconos + texto completo
- ✅ **z-[60]** garantiza máxima prioridad visual

---

## 2️⃣ FlipCards - Animaciones de Interactividad

### Objetivo:
Indicar al usuario que las tarjetas son **interactivas** y se pueden voltear

### 3 Tipos de Animaciones Implementadas:

#### A) **Hover Lift (Elevación)**
```tsx
<motion.div
  whileHover={{ 
    y: -8,  // Se eleva 8px
    transition: { duration: 0.3 }
  }}
>
```
- ✨ Tarjeta se **levanta** al hacer hover
- 🎯 Indica que es **clickeable/interactiva**

#### B) **Breathing Scale (Respiración)**
```tsx
<motion.div
  animate={{
    scale: flippedCard === card.id ? 1 : [1, 1.02, 1]
  }}
  transition={{
    scale: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
>
```
- 💫 Escala sutil de **1 → 1.02 → 1** (2% crecimiento)
- ♾️ Se repite **infinitamente** cuando NO está volteada
- ⏱️ Duración de **2 segundos** por ciclo
- 🌊 Efecto de "respiración" sutil

#### C) **Indicador Visual (Ícono Rotación)**
```tsx
<motion.div 
  className="absolute top-3 right-3 z-10"
  animate={{ 
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5]
  }}
  transition={{ 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white/60">
    {/* Ícono de rotación circular */}
  </svg>
</motion.div>
```
- 🔄 **Ícono de flechas circulares** en esquina superior derecha
- 📍 Posición: `top-3 right-3`
- 💫 Animación de **escala y opacidad**
- 📱 Responsive: `w-5 h-5` móvil, `w-6 h-6` desktop

---

## 3️⃣ Responsive Design Completo

### Grid Layout:

**ANTES:**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```

**AHORA:**
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
```

| Breakpoint | Columnas | Gap |
|------------|----------|-----|
| **Mobile (<640px)** | 1 columna | 24px (gap-6) |
| **Tablet (≥640px)** | 2 columnas | 32px (gap-8) |
| **Desktop (≥1024px)** | 4 columnas | 32px (gap-8) |

### Card Heights:

**ANTES:**
```tsx
className="relative h-80 perspective-1000"
```

**AHORA:**
```tsx
className="relative h-80 sm:h-96 lg:h-80 perspective-1000"
```

| Device | Altura |
|--------|--------|
| **Mobile** | `h-80` (320px) |
| **Tablet** | `h-96` (384px) → +20% más alto |
| **Desktop** | `h-80` (320px) → Más compacto |

**Razón:** En tablets hay más espacio horizontal, permitimos tarjetas más altas

### Logo Sizes (Responsive):

**ANTES:**
```tsx
<div className="w-36 h-28 ...">
  <div className="relative w-32 h-24">
```

**AHORA:**
```tsx
<div className="w-28 h-20 sm:w-36 sm:h-28 ...">
  <div className="relative w-24 h-16 sm:w-32 sm:h-24">
```

| Device | Contenedor | Imagen |
|--------|------------|--------|
| **Mobile** | 112×80px | 96×64px |
| **Tablet+** | 144×112px | 128×96px |

### Typography (Responsive):

**Títulos:**
```tsx
<h3 className="text-lg sm:text-xl ...">
```
- Mobile: `text-lg` (18px)
- Desktop: `text-xl` (20px)

**Badges/Categorías:**
```tsx
<span className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 ...">
```
- Mobile: `text-xs` (12px), `px-3 py-1.5`
- Desktop: `text-sm` (14px), `px-4 py-2`

### Padding (Responsive):

**Contenido de Tarjeta:**
```tsx
<div className="p-4 sm:p-6 ...">
```
- Mobile: `p-4` (16px)
- Desktop: `p-6` (24px)

---

## 📊 Comparación Visual de Animaciones

### Estado Idle (Sin hover):

```
┌─────────────────────┐
│     🔄 (pulsando)   │  ← Ícono animado
│                     │
│    ┌───────────┐    │
│    │   LOGO    │    │  ← Respirando (scale 1→1.02→1)
│    └───────────┘    │
│                     │
│    Título Card      │
│    [Categoría]      │
└─────────────────────┘
   ↕ (respiración)
```

### Estado Hover:

```
     ↑ (elevación -8px)
┌─────────────────────┐
│     🔄 (pulsando)   │
│                     │
│    ┌───────────────┐│
│    │   LOGO   ←────┼┼─ Ya no respira
│    └───────────────┘│
│                     │
│    Título Card      │
│    [Categoría]      │
└─────────────────────┘
     ↓ (sombra más grande)
```

### Estado Flip (Volteada):

```
┌─────────────────────┐
│  LADO TRASERO       │  ← Sin animaciones
│                     │     (contenido estático)
│  Logo + Título      │
│  Descripción...     │
│  • Feature 1        │
│  • Feature 2        │
│  [Ver Más]          │
└─────────────────────┘
```

---

## 🎨 Código de Animaciones Clave

### 1. Hover Lift Animation:
```tsx
<motion.div
  whileHover={{ 
    y: -8,
    transition: { duration: 0.3 }
  }}
>
```

### 2. Breathing Scale Animation:
```tsx
<motion.div
  animate={{
    rotateY: flippedCard === card.id ? 180 : 0,
    scale: flippedCard === card.id ? 1 : [1, 1.02, 1]
  }}
  transition={{
    rotateY: { duration: 0.6, ease: "easeInOut" },
    scale: { 
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }}
>
```

### 3. Icon Pulse Animation:
```tsx
<motion.div 
  animate={{ 
    scale: [1, 1.2, 1],
    opacity: [0.5, 0.8, 0.5]
  }}
  transition={{ 
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut"
  }}
>
  <svg>...</svg>
</motion.div>
```

---

## 📱 Responsive Breakpoints Summary

### Tailwind Breakpoints Usados:

| Breakpoint | Min Width | Uso |
|------------|-----------|-----|
| **Default** | < 640px | Mobile first |
| **sm:** | ≥ 640px | Tablet |
| **lg:** | ≥ 1024px | Desktop |

### Breadcrumbs:
```
Mobile:   top-20, left-4, text-xs, gap-1.5, px-3, py-1.5
Tablet+:  top-24, left-6, text-sm, gap-2, px-4, py-2
```

### FlipCards Grid:
```
Mobile:   1 columna,  gap-6,  h-80
Tablet:   2 columnas, gap-8,  h-96
Desktop:  4 columnas, gap-8,  h-80
```

### FlipCards Content:
```
Mobile:   p-4, text-lg, text-xs, w-28 h-20
Tablet+:  p-6, text-xl, text-sm, w-36 h-28
```

---

## 🚀 Testing Checklist

### 1. **Breadcrumbs (Todas las páginas):**
- [ ] Abrir `/quem-somos`, `/contato`, `/fornecedores`
- [ ] Verificar que breadcrumbs están **sobre el navbar**
- [ ] Scrollear y confirmar que **siempre son visibles**
- [ ] En móvil: Solo deben verse **íconos** (sin texto "Home")
- [ ] En desktop: Deben verse **íconos + texto**

### 2. **FlipCards Animaciones (Home `/ksc`):**
- [ ] **Breathing:** Tarjetas deben "respirar" sutilmente (escala 1→1.02→1)
- [ ] **Hover Lift:** Al pasar el mouse, tarjeta se **eleva 8px**
- [ ] **Ícono Rotación:** Esquina superior derecha debe tener ícono **pulsando**
- [ ] **Flip:** Al hacer hover, tarjeta debe **voltear** suavemente
- [ ] **Stop Animations:** Al voltear, animaciones de respiración e ícono deben **detenerse**

### 3. **Responsive (Todas las páginas):**

#### Mobile (<640px):
- [ ] **Breadcrumbs:** Compactos, solo íconos
- [ ] **FlipCards:** 1 columna, logos más pequeños
- [ ] **Textos:** Más pequeños (`text-lg`, `text-xs`)
- [ ] **Padding:** Reducido (`p-4`)
- [ ] **Gap:** Más apretado (`gap-6`)

#### Tablet (640px-1023px):
- [ ] **Breadcrumbs:** Íconos + texto
- [ ] **FlipCards:** 2 columnas
- [ ] **Cards Height:** Más altas (`h-96`)
- [ ] **Textos:** Tamaño normal

#### Desktop (≥1024px):
- [ ] **Breadcrumbs:** Completos con texto
- [ ] **FlipCards:** 4 columnas
- [ ] **Cards Height:** Compactas (`h-80`)
- [ ] **Todo el contenido visible**

---

## ✅ Resultado Final

### Breadcrumbs:
- ✅ **z-index 60** → Siempre sobre navbar (z-50)
- ✅ **Responsive** → Compacto en móvil, completo en desktop
- ✅ **Posición ajustada** → `top-20/24`, `left-4/6`

### FlipCards Animaciones:
1. ✅ **Breathing (Respiración):** Scale 1→1.02→1 infinito (2s)
2. ✅ **Hover Lift:** Elevación -8px al hacer hover
3. ✅ **Icon Pulse:** Ícono de rotación pulsando en esquina
4. ✅ **Smooth Flip:** Volteo suave 180° en eje Y

### Responsive:
- ✅ **Mobile:** 1 columna, compacto, solo íconos
- ✅ **Tablet:** 2 columnas, más alto
- ✅ **Desktop:** 4 columnas, óptimo

### Estado del Servidor:
- ✅ Corriendo en `http://localhost:3000`
- ✅ Sin errores de compilación
- ✅ Ready in 5.6s

### Archivos Modificados:
1. ✅ `src/components/ui/HeroBannerWaves.tsx`
   - z-index: 50 → 60
   - Responsive breadcrumbs
   
2. ✅ `src/components/ui/FlipCards.tsx`
   - 3 animaciones de interactividad
   - Responsive completo
   - Grid responsive

---

## 🎯 Beneficios UX

### Antes:
- ⚠️ Breadcrumbs tapados por navbar
- ⚠️ Tarjetas estáticas, sin indicador de interactividad
- ⚠️ No optimizado para móviles

### Ahora:
- ✅ **Breadcrumbs siempre visibles** y legibles
- ✅ **Tarjetas con animaciones sutiles** que invitan a la interacción
- ✅ **Ícono de rotación** indica claramente que se pueden voltear
- ✅ **Respiración sutil** mantiene las tarjetas "vivas"
- ✅ **Hover lift** refuerza la interactividad
- ✅ **Completamente responsive** en todos los dispositivos

¡Componentes optimizados con animaciones e interactividad! 🎉
