# 🚀 KSC Website - Katun Solution Center

Sitio web corporativo completo para **Katun Solution Center (KSC)** con 9 páginas funcionales, diseño responsive y animaciones profesionales.

![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-61dafb?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

---

## 📋 Páginas del Sitio (9 páginas)

1. 🏠 **Home** - `/ksc` - Página principal con banner optimizado
2. 💼 **Soluciones** - `/solucoes` - Landing de todas las soluciones
3. 🖨️ **PaperCut MF** - `/papercut` - Gestión de Impressão (Banner Verde)
4. 📊 **KPAX Fleet** - `/kpax` - Gestão de Equipamentos (Banner Azul)
5. 📁 **MegaGED** - `/megaged` - Gestão Eletrônica de Documentos (Banner Morado)
6. 🎓 **Wiki Alphabet** - `/wiki-alphabet` - Plataforma de Ensino (Banner Naranja)
7. 📧 **Contato** - `/contato` - Formulario de contacto mejorado
8. 🏢 **Quem Somos** - `/quem-somos` - Acerca de KSC
9. 🤝 **Fornecedores** - `/fornecedores` - Proveedores

---

## ✨ Características

### 🎨 Design
- ✅ Diseño responsive (Mobile/Tablet/Desktop)
- ✅ Banners únicos con gradientes por solución
- ✅ Animaciones fluidas con Framer Motion
- ✅ Navegación con dropdown interactivo
- ✅ Footer corporativo completo

### ⚡ Performance
- ✅ Next.js 15 con Turbopack
- ✅ Lazy loading de imágenes
- ✅ Code splitting automático
- ✅ Optimizado para SEO

### 🛠️ Tecnología
- ✅ TypeScript para type-safety
- ✅ Tailwind CSS para estilos
- ✅ Framer Motion para animaciones
- ✅ Componentes reutilizables
- ✅ Arquitectura escalable

---

## 🚀 Inicio Rápido

### Desarrollo Local

```bash
# 1. Instalar dependencias
npm install

# 2. Ejecutar servidor de desarrollo
npm run dev

# 3. Abrir en navegador
http://localhost:3000/ksc
```

### Build de Producción

```bash
# Crear build optimizado
npm run build

# Ejecutar servidor de producción
npm start
```

---

## 📁 Estructura del Proyecto

```
ksc-components/
├── src/
│   ├── app/                        # Páginas (App Router)
│   │   ├── ksc/                    # Home
│   │   ├── solucoes/               # Soluciones landing
│   │   ├── papercut/               # Solución PaperCut
│   │   ├── kpax/                   # Solución KPAX
│   │   ├── megaged/                # Solución MegaGED
│   │   ├── wiki-alphabet/          # Solución Wiki Alphabet
│   │   ├── contato/                # Contacto
│   │   ├── quem-somos/             # Quiénes somos
│   │   └── fornecedores/           # Proveedores
│   │
│   ├── components/
│   │   ├── ui/                     # Componentes UI (26)
│   │   ├── blocks/                 # Bloques (4)
│   │   └── animations/             # Animaciones (3)
│   │
│   ├── hooks/                      # Custom hooks
│   ├── lib/                        # Utilidades
│   └── utils/                      # Más utilidades
│
├── public/                         # Assets estáticos
│   ├── KSC.svg                     # Logo principal
│   └── logos/                      # Logos de soluciones
│
└── Documentación/
    ├── DEPLOYMENT-GUIDE-KSC.md     # Guía completa de deploy
    ├── QUICK-DEPLOY.md             # Deploy rápido
    ├── FILES-TO-UPLOAD.md          # Qué archivos subir
    ├── CLEANUP-SCRIPT.md           # Limpieza de proyecto
    └── RESUMEN-FINAL.md            # Resumen completo
```

---

## 🎯 Componentes Principales

### NavBar
Navegación principal con:
- Dropdown interactivo para soluciones
- Link directo a "Todas as Soluções"
- Detección de scroll (cambia de transparente a blanco)
- Responsive con menú hamburguesa

### HeroBannerWaves
Banner hero con:
- Gradientes personalizables por página
- Animación de ondas SVG
- Breadcrumbs integrados
- Altura configurable

### Footer
Footer corporativo con:
- Links a todas las páginas
- Información de contacto
- Redes sociales
- Copyright y legal

### FlipCards
Tarjetas animadas con:
- Efecto flip 3D
- Contenido front y back
- Animación al hover
- Grid responsive

---

## 🎨 Paleta de Colores por Solución

| Solución | Color Principal | Gradiente |
|----------|----------------|-----------|
| PaperCut | Verde 🟢 | `#10b981` → `#059669` |
| KPAX | Azul 🔵 | `#3b82f6` → `#1d4ed8` |
| MegaGED | Morado 🟣 | `#a855f7` → `#7e22ce` |
| Wiki Alphabet | Naranja 🟠 | `#f97316` → `#ea580c` |

---

## 📦 Deployment

### Opción 1: Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy a producción
vercel --prod
```

### Opción 2: Docker

```bash
# Build y ejecutar
docker-compose up -d

# Ver logs
docker-compose logs -f
```

### Opción 3: Servidor Propio

```bash
npm install
npm run build
npm start
```

**📘 Para más opciones de deployment, ver:** `DEPLOYMENT-GUIDE-KSC.md`

---

## 🧹 Limpieza de Proyecto (Opcional)

Si quieres eliminar páginas de demo y mantener solo las 9 páginas KSC:

```powershell
# Ejecutar script de limpieza
.\cleanup.ps1
```

Esto eliminará:
- `/components` (demo de componentes)
- `/demo` (página demo)
- `/wavy-test` (test)
- `/animated-bg-demo` (demo)

---

## 📊 Stack Tecnológico

| Tecnología | Versión | Uso |
|------------|---------|-----|
| Next.js | 15.5.0 | Framework React con App Router |
| React | 19.0.0 | Biblioteca UI |
| TypeScript | 5.x | Tipado estático |
| Tailwind CSS | 3.4.1 | Estilos utility-first |
| Framer Motion | 11.18.0 | Animaciones |
| ESLint | 9.x | Linting |
| PostCSS | 8.x | Procesamiento CSS |

---

## 🌐 URLs del Sitio

### Desarrollo Local
```
http://localhost:3000/              → Redirect a /ksc
http://localhost:3000/ksc           → Home
http://localhost:3000/solucoes      → Soluciones
http://localhost:3000/papercut      → PaperCut
http://localhost:3000/kpax          → KPAX
http://localhost:3000/megaged       → MegaGED
http://localhost:3000/wiki-alphabet → Wiki Alphabet
http://localhost:3000/contato       → Contacto
http://localhost:3000/quem-somos    → Quiénes Somos
http://localhost:3000/fornecedores  → Proveedores
```

---

## 📝 Scripts Disponibles

```bash
# Desarrollo
npm run dev              # Servidor desarrollo con Turbopack

# Producción
npm run build           # Build optimizado
npm start               # Servidor producción

# Calidad
npm run lint            # Verificar código ESLint
```

---

## 🔧 Configuración

### next.config.ts
- Redirect de `/` a `/ksc`
- Configuración de imágenes externas
- Compresión habilitada
- Output standalone para Docker (opcional)

### tailwind.config.ts
- Configuración de colores personalizados
- Breakpoints responsive
- Plugins adicionales

### tsconfig.json
- Strict mode habilitado
- Path aliases configurados
- Target ES2022

---

## 📱 Responsive Breakpoints

| Dispositivo | Ancho | Breakpoint Tailwind |
|-------------|-------|---------------------|
| Mobile S | 320px | `sm:` |
| Mobile M | 375px | `sm:` |
| Mobile L | 425px | `sm:` |
| Tablet | 768px | `md:` |
| Laptop | 1024px | `lg:` |
| Desktop | 1440px | `xl:` |
| 4K | 2560px | `2xl:` |

---

## 🎯 Métricas de Performance

**Objetivos de Lighthouse:**
- ⚡ Performance: > 90
- ♿ Accessibility: > 90
- 🎨 Best Practices: > 90
- 🔍 SEO: > 90

---

## 🤝 Contribución

Este es un proyecto corporativo para **Katun Solution Center**.

### Para agregar nuevas funcionalidades:

1. Crear branch desde `master`
2. Implementar cambios con TypeScript
3. Probar en múltiples dispositivos
4. Crear Pull Request
5. Code review y merge

---

## 📚 Documentación Adicional

- 📘 **[DEPLOYMENT-GUIDE-KSC.md](./DEPLOYMENT-GUIDE-KSC.md)** - Guía completa de deployment
- ⚡ **[QUICK-DEPLOY.md](./QUICK-DEPLOY.md)** - Deploy rápido en 5 minutos
- 📤 **[FILES-TO-UPLOAD.md](./FILES-TO-UPLOAD.md)** - Lista de archivos para Git
- 🧹 **[CLEANUP-SCRIPT.md](./CLEANUP-SCRIPT.md)** - Cómo limpiar el proyecto
- 📋 **[RESUMEN-FINAL.md](./RESUMEN-FINAL.md)** - Resumen completo del proyecto

---

## 🐛 Solución de Problemas

### Error: Module not found
```bash
rm -rf node_modules
npm install
```

### Error: Port 3000 in use
```powershell
Stop-Process -Name node -Force
npm run dev
```

### Error: Build failed
```bash
npm run build -- --debug
```

---

## 📞 Contacto y Soporte

**Repositorio:** https://github.com/VendeAmigos/componentes  
**Branch:** master  
**Empresa:** Katun Solution Center (KSC)

---

## 📄 Licencia

© 2025 Katun Solution Center. Todos los derechos reservados.

---

## ✅ Estado del Proyecto

```
✅ 9 páginas completas y funcionales
✅ Navegación integrada (NavBar + Footer)
✅ Diseño responsive
✅ Animaciones implementadas
✅ TypeScript sin errores
✅ Build exitoso
✅ Listo para producción
```

**Versión:** 1.0.0  
**Última actualización:** Octubre 14, 2025  
**Estado:** 🚀 Production Ready

---

**🎉 ¡Sitio web KSC listo para el mundo! 🚀**
