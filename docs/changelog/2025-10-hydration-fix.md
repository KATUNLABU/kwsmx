# 🔧 Solución: Error de Hidratación en Next.js

## ❌ Error Original

```
Hydration failed because the server rendered HTML didn't match the client.
```

Este error ocurre cuando el HTML generado en el servidor (SSR) no coincide con el HTML generado en el cliente durante la hidratación.

---

## 🔍 Causas Comunes

### 1. **Math.random()** ❌
```tsx
// INCORRECTO - Genera valores diferentes en servidor y cliente
const particles = Array.from({ length: 50 }, (_, i) => ({
  x: Math.random() * 100,
  delay: Math.random() * 2
}));
```

### 2. **new Date()** ❌
```tsx
// INCORRECTO - La fecha puede diferir entre servidor y cliente
const currentYear = new Date().getFullYear();
```

### 3. **window o document** ❌
```tsx
// INCORRECTO - No existe en el servidor
if (window.innerWidth > 768) { ... }
```

---

## ✅ Soluciones Implementadas

### 1. **HeroBannerOptimized.tsx** - Partículas Aleatorias

**Antes (con error):**
```tsx
const HeroBannerOptimized = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));
  
  return (
    {particles.map(particle => ...)}
  );
};
```

**Después (corregido):**
```tsx
import { useState, useEffect } from 'react';

const HeroBannerOptimized = () => {
  const [particles, setParticles] = useState([]);

  // ✅ Generar partículas solo en el cliente
  useEffect(() => {
    const generatedParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }));
    setParticles(generatedParticles);
  }, []);

  return (
    {particles.map(particle => ...)}
  );
};
```

**Cambios clave:**
- ✅ Estado inicial vacío: `useState([])`
- ✅ `useEffect` ejecuta solo en cliente
- ✅ Servidor renderiza sin partículas, cliente las agrega

---

### 2. **MinimalistBackground.tsx** - Delays Aleatorios

**Antes (con error):**
```tsx
<motion.circle
  transition={{
    delay: Math.random() * 2  // ❌ Diferente cada render
  }}
/>
```

**Después (corregido):**
```tsx
<motion.circle
  key={`${dot.x}-${dot.y}`}  // ✅ Key estable
  transition={{
    delay: (index * 0.05) % 2  // ✅ Delay determinístico basado en index
  }}
/>
```

**Cambios clave:**
- ✅ Delay basado en `index` (consistente)
- ✅ Key única y estable
- ✅ Sin Math.random() en props de componentes

---

### 3. **Footer.tsx** - Año Actual

**Antes (con error):**
```tsx
const Footer = () => {
  const currentYear = new Date().getFullYear(); // ❌ Puede diferir
  
  return (
    <p>© {currentYear} KSC</p>
  );
};
```

**Después (corregido):**
```tsx
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(2025); // ✅ Valor por defecto

  useEffect(() => {
    setCurrentYear(new Date().getFullYear()); // ✅ Actualizar en cliente
  }, []);

  return (
    <p>© {currentYear} KSC</p>
  );
};
```

**Cambios clave:**
- ✅ Valor por defecto: `useState(2025)`
- ✅ Actualización en cliente con `useEffect`
- ✅ Servidor y cliente usan mismo año inicialmente

---

## 🎯 Patrón General de Solución

### Regla de Oro:
> **Todo lo que dependa de valores aleatorios, fechas, o APIs del navegador debe generarse en `useEffect`**

### Template de Solución:

```tsx
'use client';
import { useState, useEffect } from 'react';

const MyComponent = () => {
  // 1. Estado inicial con valor por defecto estable
  const [dynamicValue, setDynamicValue] = useState(defaultValue);

  // 2. Generar valor dinámico solo en el cliente
  useEffect(() => {
    const newValue = generateDynamicValue(); // Math.random(), Date, etc.
    setDynamicValue(newValue);
  }, []);

  // 3. Renderizar con valor estable
  return <div>{dynamicValue}</div>;
};
```

---

## 📋 Checklist de Hidratación

Antes de hacer deploy, verifica:

- [ ] ✅ No hay `Math.random()` en el render inicial
- [ ] ✅ No hay `new Date()` en el render inicial
- [ ] ✅ No hay `window` o `document` sin verificación
- [ ] ✅ Keys de listas son estables y únicas
- [ ] ✅ HTML del servidor == HTML del cliente (inicial)
- [ ] ✅ `useEffect` para valores dinámicos
- [ ] ✅ Estados con valores por defecto estables

---

## 🐛 Debugging

### Cómo identificar el componente problemático:

1. **Ver el error en consola:**
   ```
   Warning: Text content did not match. 
   Server: "2024" Client: "2025"
   ```

2. **React DevTools:**
   - El componente con error aparece resaltado
   - Muestra la diferencia entre servidor y cliente

3. **Buscar patrones:**
   ```bash
   # Buscar Math.random
   grep -r "Math.random" src/
   
   # Buscar new Date
   grep -r "new Date" src/
   
   # Buscar window
   grep -r "window\." src/
   ```

---

## 🚀 Verificación

Después de los cambios, verifica:

```bash
# Limpiar caché
npm run build
rm -rf .next

# Construir producción
npm run build

# Ejecutar en producción
npm start
```

**Indicadores de éxito:**
- ✅ No aparece error de hidratación en consola
- ✅ No hay flash de contenido (FOUC)
- ✅ Animaciones arrancan suavemente
- ✅ No hay warnings en React DevTools

---

## 📊 Archivos Corregidos

| Archivo | Problema | Solución |
|---------|----------|----------|
| `HeroBannerOptimized.tsx` | Math.random() en partículas | useState + useEffect |
| `MinimalistBackground.tsx` | Math.random() en delays | Delay basado en index |
| `Footer.tsx` | new Date() para año | useState(2025) + useEffect |

---

## 💡 Mejores Prácticas

### ✅ DO:
```tsx
// Usar useEffect para valores dinámicos
useEffect(() => {
  setRandomValue(Math.random());
}, []);

// Verificar window antes de usar
if (typeof window !== 'undefined') {
  window.addEventListener('scroll', handler);
}

// Usar valores por defecto estables
const [year, setYear] = useState(2025);
```

### ❌ DON'T:
```tsx
// No usar Math.random directamente
const value = Math.random();

// No usar Date directamente
const year = new Date().getFullYear();

// No acceder a window sin verificar
window.scrollTo(0, 0);
```

---

## 🔗 Referencias

- [Next.js Hydration Error Docs](https://nextjs.org/docs/messages/react-hydration-error)
- [React Hydration Mismatch](https://react.dev/reference/react-dom/client/hydrateRoot#avoiding-hydration-errors)
- [SSR Best Practices](https://nextjs.org/docs/app/building-your-application/rendering/server-components)

---

**Última actualización:** Octubre 2025  
**Estado:** ✅ Todos los errores de hidratación corregidos
