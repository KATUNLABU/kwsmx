# 🚀 Guía de Deployment - KSC Website

## 📋 Páginas del Sitio KSC (9 páginas principales)

### Páginas Creadas y Listas para Producción:

1. **Home** - `/ksc` - Página principal con banner optimizado (90vh)
2. **Soluciones Landing** - `/solucoes` - Vista general de todas las soluciones
3. **PaperCut** - `/papercut` - Gestión de Impressão (Banner Verde)
4. **KPAX** - `/kpax` - Gestão de Equipamentos (Banner Azul)
5. **MegaGED** - `/megaged` - Gestão Eletrônica de Documentos (Banner Morado)
6. **Wiki Alphabet** - `/wiki-alphabet` - Plataforma de Ensino Digital (Banner Naranja)
7. **Contato** - `/contato` - Página de contacto mejorada
8. **Quem Somos** - `/quem-somos` - Acerca de KSC
9. **Fornecedores** - `/fornecedores` - Proveedores

---

## 📁 Estructura de Archivos para Deployment

### 1. ARCHIVOS DE PÁGINAS (src/app/)
```
src/app/
├── ksc/page.tsx                    ✅ Home principal
├── solucoes/page.tsx               ✅ Landing de soluciones
├── papercut/page.tsx               ✅ Solución 1 - Verde
├── kpax/page.tsx                   ✅ Solución 2 - Azul
├── megaged/page.tsx                ✅ Solución 3 - Morado
├── wiki-alphabet/page.tsx          ✅ Solución 4 - Naranja
├── contato/page.tsx                ✅ Contacto mejorado
├── quem-somos/page.tsx             ✅ Quiénes somos
├── fornecedores/page.tsx           ✅ Proveedores
├── layout.tsx                      ✅ Layout principal
├── globals.css                     ✅ Estilos globales
└── favicon.ico                     ✅ Favicon
```

### 2. COMPONENTES UTILIZADOS (src/components/ui/)
```
src/components/ui/
├── NavBar.tsx                      ✅ Navegación con dropdown
├── HeroBannerWaves.tsx            ✅ Banner con gradientes únicos
├── Footer.tsx                      ✅ Footer corporativo
├── Container.tsx                   ✅ Contenedor responsive
├── Button.tsx                      ✅ Botones
├── ContactForm.tsx                 ✅ Formulario de contacto
├── FlipCards.tsx                   ✅ Tarjetas animadas (home)
├── Card.tsx                        ✅ Tarjetas
├── Typography.tsx                  ✅ Tipografía
├── Badge.tsx                       ✅ Badges
├── Breadcrumb.tsx                  ✅ Breadcrumbs
├── Divider.tsx                     ✅ Divisores
├── OptimizedImage.tsx              ✅ Imágenes optimizadas
├── Quote.tsx                       ✅ Citas
├── List.tsx                        ✅ Listas
└── SectorCarousel.tsx              ✅ Carrusel (si se usa)
```

### 3. BLOQUES Y ANIMACIONES (src/components/)
```
src/components/
├── blocks/
│   ├── FAQBlock.tsx                ✅ Preguntas frecuentes
│   ├── FeaturesBlock.tsx           ✅ Características
│   ├── PricingBlock.tsx            ✅ Precios (si se usa)
│   └── TeamBlock.tsx               ✅ Equipo (si se usa)
└── animations/
    ├── FadeIn.tsx                  ✅ Animación fade in
    ├── Counter.tsx                 ✅ Contador animado
    └── CounterExample.tsx          ✅ Ejemplo contador
```

### 4. UTILIDADES Y CONFIGURACIÓN
```
src/
├── lib/
│   └── utils.ts                    ✅ Utilidades generales
├── utils/
│   ├── cn.ts                       ✅ Clase names utility
│   ├── config.ts                   ✅ Configuración
│   └── designSystem.ts             ✅ Sistema de diseño
└── hooks/
    ├── useIntersectionObserver.ts  ✅ Hook para animaciones
    └── usePerformanceMonitor.ts    ✅ Monitor de performance
```

### 5. ARCHIVOS PÚBLICOS (public/)
```
public/
├── KSC.svg                         ✅ Logo principal
├── foto1.JPG                       ✅ Fotos
├── foto2.png                       ✅ Fotos
├── file.svg                        ✅ Iconos
├── globe.svg                       ✅ Iconos
├── window.svg                      ✅ Iconos
└── logos/
    ├── kpax-logo.svg               ✅ Logo KPAX
    ├── megaged-logo.svg            ✅ Logo MegaGED
    ├── papercut-logo.svg           ✅ Logo PaperCut
    └── wiki-alphabet-logo.svg      ✅ Logo Wiki Alphabet
```

### 6. CONFIGURACIÓN DEL PROYECTO
```
Raíz del proyecto:
├── package.json                    ✅ Dependencias
├── tsconfig.json                   ✅ Config TypeScript
├── next.config.ts                  ✅ Config Next.js
├── tailwind.config.ts              ✅ Config Tailwind
├── postcss.config.mjs              ✅ Config PostCSS
├── eslint.config.mjs               ✅ Config ESLint
└── .gitignore                      ✅ Git ignore
```

---

## 🗂️ Archivos que NO se suben a producción

**EXCLUIR de Git/Deploy:**
```
node_modules/               ❌ Dependencias (se instalan en servidor)
.next/                      ❌ Build cache (se genera en deploy)
.env.local                  ❌ Variables de entorno locales
.DS_Store                   ❌ Archivos de sistema Mac
*.log                       ❌ Logs
.turbo/                     ❌ Cache de Turbopack
coverage/                   ❌ Reportes de testing
```

**PÁGINAS DE TESTING/DEMO (no necesarias):**
```
src/app/components/         ❌ Página de demostración de componentes
src/app/demo/              ❌ Demos
src/app/wavy-test/         ❌ Test de wavy
src/app/animated-bg-demo/  ❌ Demo de fondo animado
```

---

## 📦 Dependencias Necesarias (package.json)

### Dependencias de Producción:
```json
{
  "dependencies": {
    "next": "15.5.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^11.18.0",
    "clsx": "^2.1.1",
    "tailwind-merge": "^2.7.0"
  }
}
```

### Dependencias de Desarrollo:
```json
{
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "typescript": "^5",
    "tailwindcss": "^3.4.1",
    "postcss": "^8",
    "autoprefixer": "^10.4.20",
    "eslint": "^9"
  }
}
```

---

## 🚀 Pasos para Deployment

### Opción 1: Vercel (Recomendado para Next.js)

1. **Preparar el repositorio:**
   ```bash
   git init
   git add .
   git commit -m "KSC website ready for production"
   git branch -M master
   git remote add origin https://github.com/VendeAmigos/componentes.git
   git push -u origin master
   ```

2. **Deploy en Vercel:**
   - Ir a [vercel.com](https://vercel.com)
   - Conectar repositorio GitHub
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"
   - ✅ Listo en 2-3 minutos

3. **Configurar dominio personalizado:**
   - En Vercel Dashboard → Settings → Domains
   - Agregar: `ksc.katun.com` o dominio deseado
   - Configurar DNS según instrucciones

### Opción 2: Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Node version:** `20.x`

### Opción 3: Servidor Propio (VPS/Cloud)

```bash
# 1. Clonar repositorio en servidor
git clone https://github.com/VendeAmigos/componentes.git
cd componentes

# 2. Instalar dependencias
npm install --production

# 3. Crear build de producción
npm run build

# 4. Iniciar en modo producción
npm start

# O con PM2 (recomendado):
npm install -g pm2
pm2 start npm --name "ksc-website" -- start
pm2 save
pm2 startup
```

### Opción 4: Docker

```dockerfile
# Dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

```bash
# Comandos Docker
docker build -t ksc-website .
docker run -p 3000:3000 ksc-website
```

---

## ✅ Checklist Pre-Deployment

### Configuración:
- [ ] Variables de entorno configuradas (si las hay)
- [ ] `next.config.ts` optimizado para producción
- [ ] Imágenes optimizadas y comprimidas
- [ ] Logos en `/public/logos/` funcionando
- [ ] Favicon correcto en `/app/favicon.ico`

### Páginas:
- [ ] `/ksc` - Home funciona correctamente
- [ ] `/solucoes` - Landing de soluciones carga
- [ ] `/papercut` - Banner verde se ve bien
- [ ] `/kpax` - Banner azul se ve bien
- [ ] `/megaged` - Banner morado se ve bien
- [ ] `/wiki-alphabet` - Banner naranja se ve bien
- [ ] `/contato` - Formulario funciona
- [ ] `/quem-somos` - Contenido correcto
- [ ] `/fornecedores` - Contenido correcto

### Navegación:
- [ ] NavBar funciona en todas las páginas
- [ ] Dropdown "Soluções" muestra "Todas as Soluções"
- [ ] Links entre páginas funcionan
- [ ] Footer en todas las páginas
- [ ] Breadcrumbs en páginas de soluciones

### Performance:
- [ ] Build sin errores: `npm run build`
- [ ] Sin errores de TypeScript
- [ ] Sin errores de ESLint
- [ ] Lighthouse Score > 90
- [ ] Imágenes con lazy loading

### SEO:
- [ ] Meta tags en cada página (opcional: agregar metadata)
- [ ] Sitemap.xml (opcional)
- [ ] Robots.txt (opcional)

---

## 📊 Testing Local

```bash
# 1. Build de producción local
npm run build

# 2. Probar build localmente
npm start

# 3. Abrir en navegador
# http://localhost:3000/ksc
```

---

## 🌐 URLs del Sitio

**Producción (después de deploy):**
```
https://tu-dominio.com/ksc              → Home
https://tu-dominio.com/solucoes         → Soluciones
https://tu-dominio.com/papercut         → PaperCut
https://tu-dominio.com/kpax             → KPAX
https://tu-dominio.com/megaged          → MegaGED
https://tu-dominio.com/wiki-alphabet    → Wiki Alphabet
https://tu-dominio.com/contato          → Contacto
https://tu-dominio.com/quem-somos       → Quiénes Somos
https://tu-dominio.com/fornecedores     → Fornecedores
```

---

## 📱 Responsive Testing

**Breakpoints a verificar:**
- 📱 Mobile: 375px, 414px
- 📱 Tablet: 768px, 1024px
- 💻 Desktop: 1280px, 1440px, 1920px

---

## 🔧 Comandos Útiles

```bash
# Desarrollo
npm run dev                 # Servidor de desarrollo

# Producción
npm run build              # Crear build optimizado
npm start                  # Iniciar servidor producción
npm run lint               # Verificar código

# Testing
npm test                   # Correr tests (si existen)
```

---

## 📞 Soporte Post-Deployment

**Monitoreo recomendado:**
- Vercel Analytics (si usas Vercel)
- Google Analytics
- Sentry (para errores)
- Lighthouse CI (performance)

**Actualizaciones:**
```bash
# Actualizar contenido
git pull origin master
npm run build
pm2 restart ksc-website
```

---

## 🎯 Próximos Pasos Opcionales

### Mejoras SEO:
1. Agregar `metadata` export a cada página
2. Crear `sitemap.xml`
3. Agregar `robots.txt`
4. Open Graph images para redes sociales

### Mejoras de Performance:
1. Implementar ISR (Incremental Static Regeneration)
2. Agregar Service Worker para PWA
3. Optimizar fuentes con `next/font`

### Analíticas:
1. Google Analytics 4
2. Meta Pixel (si es necesario)
3. Hotjar o similar para heatmaps

---

## ✨ Estado Actual

**✅ PROYECTO LISTO PARA PRODUCCIÓN**

- 9 páginas completas y funcionales
- Navegación integrada con dropdown
- Diseño responsive
- Animaciones con Framer Motion
- Componentes reutilizables
- TypeScript configurado
- ESLint configurado
- Tailwind CSS optimizado
- Sin errores de compilación

**Última actualización:** Octubre 14, 2025
**Versión Next.js:** 15.5.0
**Versión React:** 19.0.0

---

## 📧 Contacto

Para dudas sobre deployment:
- Repositorio: https://github.com/VendeAmigos/componentes
- Branch: master

---

**¡Tu sitio KSC está listo para el mundo! 🚀**
