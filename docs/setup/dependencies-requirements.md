# 📦 DEPENDENCIAS Y REQUISITOS DEL PROYECTO KSC

Documento completo con todas las dependencias, versiones y requisitos necesarios para ejecutar el proyecto.

---

## 🖥️ REQUISITOS DEL SISTEMA

### Sistema Operativo
- ✅ **Windows 10/11** (preferido)
- ✅ **macOS** 10.15 o superior
- ✅ **Linux** (Ubuntu 20.04+, Debian, Fedora)

### Software Base (Obligatorio)

#### 1. Node.js
```bash
Versión requerida: >= 18.17.0
Versión recomendada: 20.x LTS o superior
```

**¿Cómo verificar?**
```bash
node --version
# Debe mostrar: v20.x.x o superior
```

**¿Dónde descargar?**
- Windows/macOS: https://nodejs.org/
- Linux (Ubuntu/Debian):
  ```bash
  curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```

#### 2. npm (Incluido con Node.js)
```bash
Versión requerida: >= 9.0.0
Versión recomendada: 10.x o superior
```

**¿Cómo verificar?**
```bash
npm --version
# Debe mostrar: 10.x.x o superior
```

#### 3. Git
```bash
Versión requerida: >= 2.30.0
Versión recomendada: Última estable
```

**¿Cómo verificar?**
```bash
git --version
# Debe mostrar: git version 2.x.x
```

**¿Dónde descargar?**
- Windows: https://git-scm.com/download/win
- macOS: `brew install git` o Xcode Command Line Tools
- Linux: `sudo apt-get install git`

---

## 📚 DEPENDENCIAS DE PRODUCCIÓN

Estas dependencias son necesarias para que la aplicación funcione en producción.

### 1. Next.js (Framework)
```json
"next": "15.5.0"
```
- **¿Para qué?** Framework React con SSR, SSG, y App Router
- **Características usadas:**
  - App Router (src/app/)
  - Server Components
  - API Routes
  - Image Optimization
  - Turbopack (desarrollo rápido)

### 2. React & React DOM
```json
"react": "19.1.0"
"react-dom": "19.1.0"
```
- **¿Para qué?** Biblioteca para construir interfaces de usuario
- **Versión:** React 19 (última estable)
- **Características usadas:**
  - Hooks (useState, useEffect, useRef, etc.)
  - Server Components
  - Client Components

### 3. SendGrid Mail
```json
"@sendgrid/mail": "^8.1.6"
```
- **¿Para qué?** Envío de emails desde el formulario de contacto
- **Configuración requerida:**
  - API Key de SendGrid (ver `sendgrid-setup.md`)
  - Variable de entorno: `SENDGRID_API_KEY`
  - Email verificado en SendGrid

**Instalación manual (si es necesaria):**
```bash
npm install @sendgrid/mail
```

### 4. Framer Motion
```json
"framer-motion": "^12.23.12"
```
- **¿Para qué?** Animaciones fluidas y transiciones
- **Componentes que lo usan:**
  - `FadeIn.tsx` (animaciones de entrada)
  - `Counter.tsx` (contadores animados)
  - `FlipCards.tsx` (tarjetas con efecto flip)
  - Transiciones de página

**Características usadas:**
- `motion.div`, `motion.section`
- `useInView` hook
- `AnimatePresence`
- Spring animations

### 5. GSAP (GreenSock Animation Platform)
```json
"gsap": "^3.13.0"
"@types/gsap": "^1.20.2"
```
- **¿Para qué?** Animaciones avanzadas y timeline
- **Componentes que lo usan:**
  - `AnimatedCrossBackground.tsx`
  - `MinimalistBackground.tsx`
  - Animaciones de hero sections

**Características usadas:**
- Timeline animations
- ScrollTrigger (opcional)
- Ease functions

### 6. Utility Libraries

#### clsx
```json
"clsx": "^2.1.1"
```
- **¿Para qué?** Construcción condicional de clases CSS
- **Uso:** Combinar clases de Tailwind dinámicamente

**Ejemplo:**
```typescript
clsx('base-class', {
  'active-class': isActive,
  'disabled-class': isDisabled
})
```

#### tailwind-merge
```json
"tailwind-merge": "^3.3.1"
```
- **¿Para qué?** Merge inteligente de clases de Tailwind
- **Uso:** Resolver conflictos de clases CSS
- **Utilizado en:** `src/utils/cn.ts`

**Ejemplo:**
```typescript
import { cn } from '@/utils/cn'
cn('p-4 text-red-500', 'text-blue-500')
// Resultado: 'p-4 text-blue-500' (text-blue sobrescribe text-red)
```

---

## 🛠️ DEPENDENCIAS DE DESARROLLO

Estas dependencias solo se usan durante el desarrollo, no en producción.

### 1. TypeScript
```json
"typescript": "^5"
```
- **¿Para qué?** Tipado estático de JavaScript
- **Archivos de configuración:**
  - `tsconfig.json` (configuración del compilador)
  - `next-env.d.ts` (tipos de Next.js)

**Comandos útiles:**
```bash
# Verificar errores de tipo
npx tsc --noEmit

# Ver versión
npx tsc --version
```

### 2. Tipos de TypeScript
```json
"@types/node": "^20"
"@types/react": "^19"
"@types/react-dom": "^19"
"@types/gsap": "^1.20.2"
```
- **¿Para qué?** Definiciones de tipos para Node.js, React y GSAP
- **Instalación:** Automática con `npm install`

### 3. ESLint (Linting)
```json
"eslint": "^9"
"eslint-config-next": "15.5.0"
"@eslint/eslintrc": "^3"
```
- **¿Para qué?** Análisis de código y detección de errores
- **Configuración:** `eslint.config.mjs`

**Comandos útiles:**
```bash
# Ejecutar linter
npm run lint

# Arreglar errores automáticamente
npm run lint -- --fix
```

### 4. Tailwind CSS
```json
"tailwindcss": "^4"
"@tailwindcss/postcss": "^4"
```
- **¿Para qué?** Framework CSS utility-first
- **Archivos de configuración:**
  - `tailwind.config.ts` (configuración de Tailwind)
  - `postcss.config.mjs` (configuración de PostCSS)
  - `src/app/globals.css` (estilos globales)

**Características usadas:**
- Utility classes
- Custom colors (azul KSC: #004990)
- Responsive design
- Dark mode (clase 'dark')

---

## 🌐 SERVICIOS EXTERNOS REQUERIDOS

### 1. SendGrid (Obligatorio para emails)
- **¿Para qué?** Envío de emails desde el formulario de contacto
- **Costo:** Gratis hasta 100 emails/día
- **Configuración:** Ver [`sendgrid-setup.md`](./sendgrid-setup.md)

**Variables de entorno requeridas:**
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=noreply@tudominio.com
SENDGRID_TO_EMAIL=contacto@tudominio.com
```

### 2. Google reCAPTCHA v3 (Obligatorio para anti-spam)
- **¿Para qué?** Protección contra bots en el formulario
- **Costo:** Gratis (hasta 1M requests/mes)
- **Configuración:** Ver [`recaptcha-setup.md`](./recaptcha-setup.md)

**Variables de entorno requeridas:**
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxE
RECAPTCHA_SECRET_KEY=6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxE
```

### 3. Vercel (Opcional - para deployment)
- **¿Para qué?** Hosting y deployment automático
- **Costo:** Gratis para proyectos personales/hobby
- **Configuración:** Ver [`deployment.md`](../development/deployment.md)

### 4. Google Maps (Integrado)
- **¿Para qué?** Mostrar ubicación en página de contacto
- **Costo:** Gratis (iframe embedded)
- **Configuración:** Ya integrado en `src/app/contato/page.tsx`

---

## 📝 VARIABLES DE ENTORNO

### Archivo: `.env.local` (crear en raíz del proyecto)

```env
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# SENDGRID (EMAILS)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# API Key de SendGrid (obtener en https://sendgrid.com)
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxxxxxxxxx

# Email desde el cual se enviarán los mensajes
SENDGRID_FROM_EMAIL=noreply@tudominio.com

# Email que recibirá los mensajes del formulario
SENDGRID_TO_EMAIL=contacto@tudominio.com

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# GOOGLE RECAPTCHA V3 (ANTI-SPAM)
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# Site Key (pública - se usa en el frontend)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxE

# Secret Key (privada - se usa en el backend)
RECAPTCHA_SECRET_KEY=6LxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxE

# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# NEXT.JS
# ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
# URL del sitio en producción
NEXT_PUBLIC_SITE_URL=https://tudominio.com

# Ambiente (development, production)
NODE_ENV=development
```

**Ver:** `.env.example` para una plantilla completa

---

## 🚀 INSTALACIÓN PASO A PASO

### 1. Verificar Requisitos del Sistema

```bash
# Verificar Node.js
node --version
# Debe mostrar: v18.x.x o superior

# Verificar npm
npm --version
# Debe mostrar: 9.x.x o superior

# Verificar Git
git --version
# Debe mostrar: git version 2.x.x
```

### 2. Clonar el Repositorio

```bash
# Opción A: Clonar desde GitHub
git clone https://github.com/VendeAmigos/componentes.git
cd componentes

# Opción B: Si ya tienes el proyecto
cd ksc-components
```

### 3. Instalar Dependencias

```bash
# Instalar todas las dependencias
npm install

# Esto instalará:
# - 7 dependencias de producción
# - 8 dependencias de desarrollo
# - ~1,500 paquetes en total (incluyendo subdependencias)
```

**Tiempo estimado:** 2-5 minutos (dependiendo de tu conexión)

**Tamaño del `node_modules/`:** ~500-800 MB

### 4. Configurar Variables de Entorno

```bash
# Copiar el archivo de ejemplo
cp .env.example .env.local

# Editar .env.local con tus claves
code .env.local
```

**Configurar:**
1. SendGrid API Key → Ver [`sendgrid-setup.md`](./sendgrid-setup.md)
2. reCAPTCHA Keys → Ver [`recaptcha-setup.md`](./recaptcha-setup.md)

### 5. Ejecutar en Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# El sitio estará disponible en:
# http://localhost:3000
```

### 6. Build para Producción (Opcional)

```bash
# Compilar para producción
npm run build

# Iniciar en modo producción
npm start
```

---

## 🔍 VERIFICACIÓN DE INSTALACIÓN

### Checklist Completo

```bash
# 1. Node.js instalado
node --version
# ✅ Debe mostrar v18.x.x o superior

# 2. npm instalado
npm --version
# ✅ Debe mostrar 9.x.x o superior

# 3. Git instalado
git --version
# ✅ Debe mostrar git version 2.x.x

# 4. Dependencias instaladas
npm list --depth=0
# ✅ Debe mostrar todas las dependencias

# 5. Proyecto inicia sin errores
npm run dev
# ✅ Debe iniciar en http://localhost:3000

# 6. TypeScript compila sin errores
npx tsc --noEmit
# ✅ No debe mostrar errores

# 7. ESLint pasa sin errores
npm run lint
# ✅ No debe mostrar errores críticos
```

---

## 📊 RESUMEN DE DEPENDENCIAS

### Dependencias de Producción (7)
| Paquete | Versión | Propósito |
|---------|---------|-----------|
| next | 15.5.0 | Framework React con SSR |
| react | 19.1.0 | Biblioteca de UI |
| react-dom | 19.1.0 | React para DOM |
| @sendgrid/mail | ^8.1.6 | Envío de emails |
| framer-motion | ^12.23.12 | Animaciones |
| gsap | ^3.13.0 | Animaciones avanzadas |
| clsx | ^2.1.1 | Utility para clases CSS |
| tailwind-merge | ^3.3.1 | Merge de clases Tailwind |

### Dependencias de Desarrollo (8)
| Paquete | Versión | Propósito |
|---------|---------|-----------|
| typescript | ^5 | Tipado estático |
| @types/node | ^20 | Tipos de Node.js |
| @types/react | ^19 | Tipos de React |
| @types/react-dom | ^19 | Tipos de React DOM |
| @types/gsap | ^1.20.2 | Tipos de GSAP |
| eslint | ^9 | Linting de código |
| eslint-config-next | 15.5.0 | Config ESLint para Next.js |
| tailwindcss | ^4 | Framework CSS |
| @tailwindcss/postcss | ^4 | PostCSS para Tailwind |

### Total de Paquetes Instalados
- **Directos:** 15 paquetes
- **Subdependencias:** ~1,485 paquetes
- **Tamaño en disco:** ~600 MB

---

## 🆘 TROUBLESHOOTING

### Error: "node: command not found"
**Problema:** Node.js no está instalado o no está en el PATH

**Solución:**
```bash
# Descargar e instalar Node.js
# Windows/macOS: https://nodejs.org/
# Linux: sudo apt-get install nodejs npm
```

### Error: "npm ERR! code EACCES"
**Problema:** Permisos insuficientes (Linux/macOS)

**Solución:**
```bash
# Opción 1: Usar sudo (no recomendado)
sudo npm install

# Opción 2: Cambiar permisos de npm (recomendado)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
echo 'export PATH=~/.npm-global/bin:$PATH' >> ~/.bashrc
source ~/.bashrc
```

### Error: "Module not found"
**Problema:** Dependencias no instaladas correctamente

**Solución:**
```bash
# Limpiar cache y reinstalar
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Error: "Port 3000 already in use"
**Problema:** El puerto 3000 está ocupado

**Solución:**
```bash
# Opción 1: Usar otro puerto
PORT=3001 npm run dev

# Opción 2: Matar el proceso en el puerto 3000
# Windows:
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/macOS:
lsof -ti:3000 | xargs kill -9
```

### Error: "Cannot find module 'next'"
**Problema:** Next.js no está instalado

**Solución:**
```bash
npm install next@15.5.0 react@19.1.0 react-dom@19.1.0
```

### Error: TypeScript "Cannot find name..."
**Problema:** Tipos de TypeScript faltantes

**Solución:**
```bash
npm install --save-dev @types/node @types/react @types/react-dom
```

---

## 📚 DOCUMENTACIÓN RELACIONADA

- **Setup inicial:** [`docs/QUICK-START.md`](../QUICK-START.md)
- **SendGrid:** [`docs/setup/sendgrid-setup.md`](./sendgrid-setup.md)
- **reCAPTCHA:** [`docs/setup/recaptcha-setup.md`](./recaptcha-setup.md)
- **Deployment:** [`docs/development/deployment.md`](../development/deployment.md)
- **Git workflow:** [`docs/development/git-workflow.md`](../development/git-workflow.md)

---

## 🔄 ACTUALIZACIÓN DE DEPENDENCIAS

### Verificar actualizaciones disponibles

```bash
# Ver dependencias desactualizadas
npm outdated

# Ver versiones disponibles de un paquete
npm view <paquete> versions
```

### Actualizar dependencias

```bash
# Actualizar todas las dependencias minor/patch
npm update

# Actualizar una dependencia específica
npm install <paquete>@latest

# Actualizar Next.js
npm install next@latest react@latest react-dom@latest

# Actualizar devDependencies
npm install --save-dev typescript@latest @types/react@latest
```

### Verificar después de actualizar

```bash
# Verificar que todo funciona
npm run dev
npm run build
npm run lint
```

---

## 💡 CONSEJOS

### 1. Usar nvm (Node Version Manager)
Facilita cambiar entre versiones de Node.js

```bash
# Instalar nvm
# Windows: https://github.com/coreybutler/nvm-windows
# macOS/Linux: https://github.com/nvm-sh/nvm

# Usar versión específica
nvm install 20
nvm use 20
```

### 2. Limpiar caché regularmente

```bash
# Limpiar caché de npm
npm cache clean --force

# Limpiar caché de Next.js
rm -rf .next
```

### 3. Usar .nvmrc para versión de Node

Crear archivo `.nvmrc` en la raíz:
```
20.10.0
```

Luego otros developers pueden hacer:
```bash
nvm use
```

### 4. Verificar integridad de dependencias

```bash
# Verificar que package-lock.json está sincronizado
npm ci

# Auditar seguridad
npm audit

# Arreglar vulnerabilidades automáticamente
npm audit fix
```

---

## 📈 PRÓXIMOS PASOS

Después de instalar todas las dependencias:

1. ✅ **Configurar servicios externos**
   - [`sendgrid-setup.md`](./sendgrid-setup.md)
   - [`recaptcha-setup.md`](./recaptcha-setup.md)

2. ✅ **Leer documentación de desarrollo**
   - [`git-workflow.md`](../development/git-workflow.md)
   - [`components-guide.md`](../development/components-guide.md)

3. ✅ **Ejecutar el proyecto**
   ```bash
   npm run dev
   ```

4. ✅ **Hacer tu primer commit**
   - Ver [`branch-commands.md`](../development/branch-commands.md)

---

**Última actualización:** 17 de Octubre, 2025  
**Autor:** Equipo KSC  
**Soporte:** Ver [`docs/README.md`](../README.md)
