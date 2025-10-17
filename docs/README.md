# 📚 DOCUMENTACIÓN DEL PROYECTO KSC

Bienvenido a la documentación del sitio web de KSC (Katun Service Company).

## 📂 Estructura de Documentación

```
docs/
├── README.md                    # Este archivo (índice principal)
├── QUICK-START.md              # Inicio rápido para nuevos desarrolladores
├── setup/                      # Guías de configuración
│   ├── sendgrid-setup.md      # Configuración de SendGrid para emails
│   └── recaptcha-setup.md     # Configuración de reCAPTCHA v3
├── development/                # Guías de desarrollo
│   ├── git-workflow.md        # Flujo de trabajo con Git y branches
│   ├── components-guide.md    # Guía de componentes
│   └── deployment.md          # Guía de despliegue
└── changelog/                  # Registro de cambios
    ├── 2025-10-17-mapa-recaptcha.md
    └── 2025-10-17-resumen-completo.md
```

---

## 🚀 Inicio Rápido

### 1. Clonar y configurar el proyecto

```bash
# Clonar el repositorio
git clone https://github.com/VendeAmigos/componentes.git
cd componentes

# Instalar dependencias
npm install

# Copiar variables de entorno
cp .env.example .env.local
```

### 2. Configurar variables de entorno

Edita `.env.local` con tus credenciales:

```env
# SendGrid (necesario para formulario de contacto)
SENDGRID_API_KEY=tu_api_key_aqui
SENDGRID_FROM_EMAIL=ksc@katun.com
CONTACT_EMAIL=ksc@katun.com

# reCAPTCHA v3 (opcional pero recomendado)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
```

Ver guías detalladas en:
- `docs/setup/sendgrid-setup.md`
- `docs/setup/recaptcha-setup.md`

### 3. Ejecutar en desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

---

## 📖 Guías de Configuración

### SendGrid (Obligatorio)
Para que el formulario de contacto funcione y envíe emails.

**📄 Ver:** [`docs/setup/sendgrid-setup.md`](./setup/sendgrid-setup.md)

**Tiempo:** 10 minutos

### reCAPTCHA v3 (Recomendado)
Protección invisible contra spam y bots en el formulario.

**📄 Ver:** [`docs/setup/recaptcha-setup.md`](./setup/recaptcha-setup.md)

**Tiempo:** 10 minutos

---

## 🔧 Desarrollo

### Flujo de trabajo con Git
Aprende cómo trabajar con branches, commits y pull requests.

**📄 Ver:** [`docs/development/git-workflow.md`](./development/git-workflow.md)

### Estructura del proyecto

```
src/
├── app/                    # Páginas de Next.js 15 (App Router)
│   ├── ksc/               # Página principal de KSC
│   ├── contato/           # Página de contacto
│   ├── quem-somos/        # Página "Quem Somos"
│   ├── papercut/          # Producto PaperCut MF
│   ├── kpax/              # Producto KPAX Fleet
│   ├── megaged/           # Producto MegaGED
│   ├── wiki-alphabet/     # Producto Wiki Alphabet
│   ├── fornecedores/      # Página de proveedores
│   ├── solucoes/          # Página de soluciones
│   └── api/               # API Routes
│       └── contact/       # Endpoint del formulario
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI
│   ├── blocks/           # Bloques de contenido
│   └── animations/       # Componentes animados
├── hooks/                # Custom React Hooks
├── lib/                  # Utilidades y helpers
└── utils/                # Funciones utilitarias
```

---

## 🎨 Componentes Principales

### UI Components
- `NavBar` - Navegación principal con menú responsive
- `Footer` - Pie de página con links y redes sociales
- `ContactForm` - Formulario de contacto con reCAPTCHA
- `HeroBannerWaves` - Banner hero con efecto de ondas
- `FlipCards` - Tarjetas con efecto flip
- `ServiceCard` - Tarjetas de servicios
- `Container` - Contenedor responsive

### Blocks
- `FAQBlock` - Sección de preguntas frecuentes
- `FeaturesBlock` - Bloque de características
- `PricingBlock` - Bloque de precios
- `TeamBlock` - Bloque de equipo

### Animations
- `FadeIn` - Animación de aparición
- `Counter` - Contador animado
- `CounterExample` - Ejemplo de contador

---

## 🎨 Sistema de Diseño

### Colores Corporativos

```css
Azul Corporativo: #004990  /* Color principal de marca */
Verde Corporativo: #10b981 /* Color secundario */
Gradientes: Blue → Cyan → Turquoise → Green
```

### Tipografía
- Headings: Azul corporativo (#004990)
- Body text: Gray-700
- Links: Blue-600

### Espaciado
- Container max-width: 1280px
- Secciones: py-20 (padding vertical)
- Cards: p-6 (padding interno)

---

## 🚀 Despliegue

### Vercel (Recomendado)

El proyecto está optimizado para Vercel:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

**Configurar variables de entorno en Vercel:**
1. Dashboard → Settings → Environment Variables
2. Agregar todas las variables de `.env.local`
3. Redeploy

**📄 Guía completa:** [`docs/development/deployment.md`](./development/deployment.md)

---

## 📋 Checklist de Producción

Antes de desplegar a producción:

- [ ] ✅ SendGrid configurado y probado
- [ ] ✅ reCAPTCHA configurado (opcional)
- [ ] ✅ Variables de entorno en Vercel
- [ ] ✅ Dominio configurado
- [ ] ✅ SSL/HTTPS activo
- [ ] ✅ Emails de prueba enviados
- [ ] ✅ Formulario probado en producción
- [ ] ✅ Performance auditado (Lighthouse)
- [ ] ✅ SEO verificado
- [ ] ✅ Analytics configurado (opcional)

---

## 🔍 Solución de Problemas

### El servidor no inicia
```bash
# Limpiar cache y reinstalar
rm -rf .next node_modules
npm install
npm run dev
```

### Errores de compilación
```bash
# Verificar versiones
node -v   # Debe ser >= 18.17.0
npm -v    # Debe ser >= 9.x

# Actualizar dependencias
npm update
```

### El formulario no envía emails
1. Verificar API Key de SendGrid en `.env.local`
2. Verificar que el email esté verificado en SendGrid
3. Revisar logs en la terminal del servidor
4. Verificar carpeta de SPAM

### reCAPTCHA no funciona
1. Verificar keys en `.env.local`
2. Reiniciar el servidor después de agregar keys
3. Verificar que el dominio esté registrado en Google reCAPTCHA
4. Ver guía completa: `docs/setup/recaptcha-setup.md`

---

## 📞 Contacto y Soporte

### Información del Proyecto
- **Cliente:** Katun Corporation
- **Producto:** KSC (Katun Service Company) Website
- **Repositorio:** https://github.com/VendeAmigos/componentes
- **Branch principal:** `master`

### Emails de Contacto
- **Principal:** ksc@katun.com
- **Comercial:** kauan.vinicius@katun.com

### WhatsApp
- **Principal:** +55 (11) 98173-9425
- **Alternativo:** +55 (11) 97047-6396

---

## 📝 Changelog

Ver todos los cambios en: [`docs/changelog/`](./changelog/)

### Últimas actualizaciones

**17 de Octubre, 2025:**
- ✅ Mapa interactivo agregado en página de contacto
- ✅ reCAPTCHA v3 invisible implementado
- ✅ Protección anti-spam en formulario
- ✅ Documentación completa creada

Ver detalles: [`docs/changelog/2025-10-17-resumen-completo.md`](./changelog/2025-10-17-resumen-completo.md)

---

## 🤝 Contribuir

### Flujo de trabajo

1. Crear branch desde `develop`
2. Hacer cambios
3. Crear Pull Request
4. Code review
5. Merge a `develop`
6. Deploy a staging
7. Merge a `master` (producción)

Ver guía completa: [`docs/development/git-workflow.md`](./development/git-workflow.md)

---

## 📚 Recursos Adicionales

### Tecnologías Utilizadas
- **Framework:** Next.js 15.5.0
- **React:** 19.0.0
- **TypeScript:** 5.x
- **Tailwind CSS:** 3.x
- **Framer Motion:** 11.x (animaciones)
- **SendGrid:** Envío de emails
- **Google reCAPTCHA v3:** Protección anti-spam

### Links Útiles
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [SendGrid Docs](https://docs.sendgrid.com)
- [reCAPTCHA Docs](https://developers.google.com/recaptcha/docs/v3)

---

## 📄 Licencia

Este proyecto es propiedad de Katun Corporation. Todos los derechos reservados.

---

**Última actualización:** 17 de Octubre, 2025
