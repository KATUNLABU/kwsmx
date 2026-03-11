# Mega Prompt: Migración y Desarrollo en Astro

Este documento contiene toda la información necesaria para que una IA avanzada pueda generar, completar y optimizar el proyecto de migración desde Next.js hacia Astro, garantizando la identidad visual, funcionalidad y rendimiento.

---

## 1. Contexto y Objetivos
**Proyecto Actual:** Sitio corporativo de Katun Solution Center (KSC) desarrollado en Next.js.
**Tecnologías Actuales:** Next.js 15, React 19, Tailwind CSS 4, Framer Motion, TypeScript.
**Objetivo de la Migración:** Pasar a **Astro 5** (o latest compatible) para mejorar el rendimiento (Islands Architecture), reducir JavaScript en el cliente y simplificar la estructura, pero **manteniendo** los componentes visuales complejos (como FlipCards, animaciones de entrada, etc.).
**Requerimiento Específico:** La página `/myq` actualmente es una redirección. Debe convertirse en una página real (Landing Page) para el producto "MyQ X".

---

## 2. Kit de Inicio (Filesystem)
Se ha generado una carpeta `astro-migration-kit` con la estructura base ya configurada. La IA debe basarse en estos archivos para expandir el proyecto.

### Estructura del Kit:
```
astro-migration-kit/
├── astro.config.mjs        # Configurado con React, Tailwind, Partytown, Vercel Adapter
├── package.json            # Dependencias alineadas (Astro + React + Framer Motion)
├── tailwind.config.mjs     # Tema corporativo (colores KSC, fuentes, animaciones)
├── tsconfig.json           # Configuración de TypeScript y Alias (@/*)
├── src/
│   ├── env.d.ts            # Tipos de Astro
│   ├── layouts/
│   │   └── Layout.astro    # Layout base HTML/SEO
│   ├── styles/
│   │   └── global.css      # CSS purgado de Next.js, incluye fixes para 3D transforms
│   ├── components/
│   │   └── ui/
│   │       └── FlipCards.tsx # Componente React migrado y corregido (bug móvil solucionado)
│   ├── utils/
│   │   └── cn.ts           # Utilidad clsx/tailwind-merge
│   └── pages/
│       └── index.astro     # (A crear) Página de inicio
```

---

## 3. Instrucciones Detalladas por Archivo/Componente

### A. Layout (`src/layouts/Layout.astro`)
- Debe envolver todas las páginas.
- Importa `../styles/global.css`.
- Acepta props `title` y `description`.
- Usa la fuente "Source Sans Pro" (configurada en global.css y tailwind).

### B. Página de Inicio (`src/pages/index.astro`)
- Debe replicar la estructura visual de la Landing Page actual.
- **Header/Navbar:** Debe ser un componente `.astro` si es estático, o `.tsx` si requiere menú móvil interactivo (usar `client:load`).
- **Hero Section:** Banner ondulado (`WavyBanner`). Puede ser estático en Astro o hidratado si tiene animaciones complejas.
- **Lista de Soluciones:** Usar el componente `<FlipCards client:visible />`. Es CRÍTICO usar `client:visible` para que las animaciones de carga funcionen al hacer scroll.
- **Footer:** Componente `.astro` estático.

### C. Página MyQ (`src/pages/myq.astro`)
Esta es la nueva página solicitada.
- **Diseño:** Debe seguir la línea gráfica de KSC (Azul `#004990`, degradados suaves).
- **Contenido Sugerido:**
  1.  **Hero:** Título "MyQ X", Subtítulo "Gestión de Impresión Inteligente", Botón "Solicitar Demo".
  2.  **Beneficios (Grid):** Iconos + Texto (Seguridad, Costos, Movilidad, OCR).
  3.  **Captura de Pantalla:** Imagen del dashboard de MyQ (placeholder o asset real).
  4.  **Testimonio/Cita:** "Optimice su flujo de trabajo en un 30%".
  5.  **CTA Final:** Formulario de contacto o botón a `/contato`.

### D. Componentes UI (React Islands)
- **FlipCards.tsx:** Ya incluido en el kit. Notar que se cambió `Image` de Next.js por etiquetas `<img>` estándar con clases para compatibilidad directa en Astro sin configuración extra de assets remotos compleja.
- **Botones:** Crear `src/components/ui/Button.tsx` (o `.astro`). Estilos bases:
  ```css
  .btn-primary { @apply bg-[#004990] text-white hover:bg-blue-800 transition-all rounded-lg px-6 py-2; }
  ```

---

## 4. Guía de Estilos y Diseño (Design System)

### Colores Corporativos
- **Primary Blue:** `#004990` (KSC Blue)
- **Accent Blue:** `#3b82f6` (Tailwind blue-500)
- **Gradient:** `from-blue-500 to-blue-700`
- **Backgrounds:** `bg-gray-50` para secciones alternas. `bg-white` para tarjetas.

### Tipografía
- **Familia:** Source Sans Pro.
- **Headings:** Bold (`font-bold`), color `#004990`.
- **Body:** Gray-scale (`text-gray-600`), leading-relaxed.

### Animaciones (Framer Motion)
- Mantener las animaciones de entrada (`initial={{ opacity: 0, y: 20 }}`).
- En Astro, asegurarse de que los componentes animados tengan directiva `client:*`.

---

## 5. Checklist de Implementación para la IA
1.  [ ] Copiar contenido de `astro-migration-kit` al proyecto destino.
2.  [ ] Instalar dependencias (`npm install`).
3.  [ ] Migrar `NavBar` y `Footer` (pueden simplificarse a Astro components si no requieren estado complejo).
4.  [ ] Crear `src/pages/index.astro` ensamblando las secciones.
5.  [ ] Crear `src/pages/myq.astro` con el contenido específico de MyQ.
6.  [ ] Asegurar que `global.css` cargue correctamente las fuentes y utilidades de Tailwind.
7.  [ ] Verificar que el bug de `backface-visibility` en FlipCards siga corregido (el código en el kit ya lo tiene).

---

## 6. Comandos para Ejecutar
```bash
npm install
npm run dev
```

Este kit está optimizado para funcionar directamente en despliegues como Vercel (configurado en `astro.config.mjs`).
