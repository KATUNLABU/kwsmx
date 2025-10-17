# 🧹 Script de Limpieza - KSC Website

## Archivos y Carpetas a ELIMINAR (páginas de demo/testing)

### Ejecutar estos comandos en PowerShell:

```powershell
# Ir a la carpeta del proyecto
cd "C:\Users\dxdeloer\OneDrive - Katun Corporation\Desktop\ksc-components"

# ELIMINAR páginas de demo y testing que NO son parte del sitio KSC
Remove-Item -Recurse -Force "src\app\components"
Remove-Item -Recurse -Force "src\app\demo"
Remove-Item -Recurse -Force "src\app\wavy-test"
Remove-Item -Recurse -Force "src\app\animated-bg-demo"

# ELIMINAR archivo de página principal por defecto (ya que usamos /ksc)
Remove-Item -Force "src\app\page.tsx"

# ELIMINAR documentos de testing (opcional, puedes conservarlos)
# Remove-Item -Force "TESTING-SETUP.md"
# Remove-Item -Force "TECHNICAL-DOCS.md"

# VERIFICAR que todo compile
npm run build
```

---

## 📁 Estructura Final del Proyecto (Solo KSC)

Después de la limpieza, tu proyecto quedará así:

```
ksc-components/
├── public/
│   ├── KSC.svg
│   ├── foto1.JPG
│   ├── foto2.png
│   ├── file.svg
│   ├── globe.svg
│   ├── window.svg
│   └── logos/
│       ├── kpax-logo.svg
│       ├── megaged-logo.svg
│       ├── papercut-logo.svg
│       └── wiki-alphabet-logo.svg
│
├── src/
│   ├── app/
│   │   ├── ksc/                    ✅ HOME
│   │   │   └── page.tsx
│   │   ├── solucoes/               ✅ SOLUCIONES LANDING
│   │   │   └── page.tsx
│   │   ├── papercut/               ✅ SOLUCIÓN 1
│   │   │   └── page.tsx
│   │   ├── kpax/                   ✅ SOLUCIÓN 2
│   │   │   └── page.tsx
│   │   ├── megaged/                ✅ SOLUCIÓN 3
│   │   │   └── page.tsx
│   │   ├── wiki-alphabet/          ✅ SOLUCIÓN 4
│   │   │   └── page.tsx
│   │   ├── contato/                ✅ CONTACTO
│   │   │   └── page.tsx
│   │   ├── quem-somos/             ✅ QUIÉNES SOMOS
│   │   │   └── page.tsx
│   │   ├── fornecedores/           ✅ PROVEEDORES
│   │   │   └── page.tsx
│   │   ├── layout.tsx              ✅ Layout principal
│   │   ├── globals.css             ✅ Estilos
│   │   └── favicon.ico             ✅ Favicon
│   │
│   ├── components/
│   │   ├── ui/                     ✅ Componentes UI
│   │   │   ├── NavBar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroBannerWaves.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Button.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── FlipCards.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Typography.tsx
│   │   │   ├── Badge.tsx
│   │   │   ├── Breadcrumb.tsx
│   │   │   └── ... (otros)
│   │   │
│   │   ├── blocks/                 ✅ Bloques
│   │   │   ├── FAQBlock.tsx
│   │   │   ├── FeaturesBlock.tsx
│   │   │   └── ... (otros)
│   │   │
│   │   └── animations/             ✅ Animaciones
│   │       ├── FadeIn.tsx
│   │       ├── Counter.tsx
│   │       └── CounterExample.tsx
│   │
│   ├── hooks/                      ✅ Custom hooks
│   │   ├── useIntersectionObserver.ts
│   │   └── usePerformanceMonitor.ts
│   │
│   ├── lib/                        ✅ Utilidades
│   │   └── utils.ts
│   │
│   └── utils/                      ✅ Más utilidades
│       ├── cn.ts
│       ├── config.ts
│       └── designSystem.ts
│
├── node_modules/                   ❌ (Git ignore)
├── .next/                          ❌ (Git ignore)
│
├── package.json                    ✅ Config
├── package-lock.json               ✅ Config
├── tsconfig.json                   ✅ Config TypeScript
├── next.config.ts                  ✅ Config Next.js
├── tailwind.config.ts              ✅ Config Tailwind
├── postcss.config.mjs              ✅ Config PostCSS
├── eslint.config.mjs               ✅ Config ESLint
├── .gitignore                      ✅ Git ignore
│
├── DEPLOYMENT-GUIDE-KSC.md         📄 Guía de deployment
├── CLEANUP-SCRIPT.md               📄 Este archivo
└── README.md                       📄 Readme

Total páginas KSC: 9 páginas funcionales
```

---

## 🔄 Redirección de Home

Como eliminamos `src/app/page.tsx`, necesitas configurar una redirección:

### Opción 1: Crear redirect en `next.config.ts`

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/ksc',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
```

### Opción 2: Crear página de redirect simple

```typescript
// src/app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  redirect('/ksc');
}
```

---

## ✅ Verificación Post-Limpieza

```powershell
# 1. Verificar que no hay errores
npm run build

# 2. Probar en desarrollo
npm run dev

# 3. Verificar estas URLs:
# http://localhost:3000/         → debe redirigir a /ksc
# http://localhost:3000/ksc      → Home ✅
# http://localhost:3000/solucoes → Landing ✅
```

---

## 📦 Comandos para Git

```powershell
# Después de limpiar, sube los cambios:

# Ver archivos modificados
git status

# Agregar todos los cambios
git add .

# Commit
git commit -m "Clean up: Remove demo pages, keep only KSC production pages"

# Push al repositorio
git push origin master
```

---

## 📊 Comparación Antes vs Después

### ANTES (con demos):
- 46+ archivos page.tsx
- Páginas de testing y componentes de demo
- ~150 MB proyecto completo

### DESPUÉS (solo KSC):
- 9 páginas principales KSC
- Sin archivos de demo
- ~50-70 MB proyecto optimizado

---

## 🎯 Resultado Final

Tu proyecto contendrá ÚNICAMENTE:
- ✅ 9 páginas del sitio KSC
- ✅ Componentes necesarios
- ✅ Configuración optimizada
- ✅ Assets (imágenes, logos)
- ❌ Sin demos
- ❌ Sin testing pages
- ❌ Sin archivos innecesarios

---

**¿Quieres que ejecute la limpieza automáticamente?**
Puedo crear un script PowerShell que lo haga todo por ti.
