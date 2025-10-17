# 🚀 Guía de Despliegue

Esta guía cubre el proceso de despliegue del sitio web KSC a diferentes entornos.

## 📋 Tabla de Contenidos
- [Entornos](#entornos)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Variables de Entorno](#variables-de-entorno)
- [Dominio Personalizado](#dominio-personalizado)
- [Checklist Pre-Deploy](#checklist-pre-deploy)
- [Troubleshooting](#troubleshooting)

---

## 🌍 Entornos

| Entorno | Branch | URL | Auto-Deploy |
|---------|--------|-----|-------------|
| **Producción** | `master` | https://ksc.katun.com | ✅ Sí |
| **Staging** | `develop` | https://ksc-staging.vercel.app | ✅ Sí |
| **Preview** | `feature/*` | Vercel preview URL | ✅ Sí |
| **Local** | cualquiera | http://localhost:3000 | ❌ No |

---

## 🔷 Despliegue en Vercel

Vercel es la plataforma recomendada para Next.js (creada por el mismo equipo).

### Método 1: GitHub Integration (Recomendado)

#### Setup Inicial

1. **Crear cuenta en Vercel:**
   - Ve a https://vercel.com
   - Sign up con tu cuenta de GitHub

2. **Importar proyecto:**
   ```
   Dashboard → Add New → Project
   → Import Git Repository
   → Seleccionar: VendeAmigos/componentes
   ```

3. **Configurar proyecto:**
   ```
   Framework Preset: Next.js
   Root Directory: ./
   Build Command: npm run build
   Output Directory: .next
   Install Command: npm install
   ```

4. **Agregar variables de entorno:**
   ```
   Ver sección "Variables de Entorno" abajo
   ```

5. **Deploy:**
   - Click en "Deploy"
   - Esperar ~2 minutos
   - ✅ Proyecto desplegado

#### Auto-Deploy Configurado

Después del setup inicial, Vercel despliega automáticamente:

- **Commit a `master`** → Deploy a producción
- **Commit a `develop`** → Deploy a staging  
- **Commit a `feature/*`** → Deploy preview único

### Método 2: Vercel CLI

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy a preview
vercel

# 4. Deploy a producción
vercel --prod
```

---

## 🔐 Variables de Entorno

### Variables Necesarias

#### SendGrid (Obligatorio)
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=ksc@katun.com
CONTACT_EMAIL=ksc@katun.com
```

#### reCAPTCHA v3 (Opcional pero Recomendado)
```env
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6Lc...
RECAPTCHA_SECRET_KEY=6Lc...
```

### Configurar en Vercel

1. **Dashboard → Settings → Environment Variables**

2. **Agregar cada variable:**
   - **Name:** `SENDGRID_API_KEY`
   - **Value:** `SG.tu_api_key_real`
   - **Environments:** 
     - ✅ Production
     - ✅ Preview
     - ✅ Development

3. **Repetir para todas las variables**

4. **Redeploy:**
   - Dashboard → Deployments
   - Click en "..." → Redeploy

### Verificar Variables

```bash
# En Vercel logs
vercel logs <deployment-url>

# Deberías ver (sin los valores)
✓ SENDGRID_API_KEY loaded
✓ RECAPTCHA_SECRET_KEY loaded
```

---

## 🌐 Dominio Personalizado

### Configurar Dominio en Vercel

1. **Dashboard → Settings → Domains**

2. **Add Domain:**
   ```
   ksc.katun.com
   ```

3. **Configurar DNS:**

   **Opción A - Nameservers (Recomendado):**
   ```
   Cambiar nameservers en tu proveedor de dominio:
   ns1.vercel-dns.com
   ns2.vercel-dns.com
   ```

   **Opción B - CNAME:**
   ```
   Tipo: CNAME
   Name: ksc
   Value: cname.vercel-dns.com
   ```

4. **Verificar:**
   - Vercel verifica automáticamente
   - Puede tomar hasta 48 horas (usualmente ~10 minutos)

### SSL/HTTPS

Vercel provee SSL automático y gratuito:
- ✅ Certificado generado automáticamente
- ✅ Renovación automática
- ✅ HTTP → HTTPS redirect automático

---

## ✅ Checklist Pre-Deploy

### Antes de Deploy a Producción

#### Código
- [ ] ✅ Todas las features mergeadas a `develop`
- [ ] ✅ Tests pasando (si aplica)
- [ ] ✅ No hay console.logs innecesarios
- [ ] ✅ Build local exitoso: `npm run build`
- [ ] ✅ Código en `develop` probado en staging

#### Configuración
- [ ] ✅ Variables de entorno configuradas en Vercel
- [ ] ✅ SendGrid API Key verificada
- [ ] ✅ Email verificado en SendGrid
- [ ] ✅ reCAPTCHA configurado (si aplica)
- [ ] ✅ Dominio apuntando correctamente

#### Contenido
- [ ] ✅ Todos los textos revisados
- [ ] ✅ Imágenes optimizadas
- [ ] ✅ Links funcionando
- [ ] ✅ Emails de contacto correctos
- [ ] ✅ Teléfonos de WhatsApp correctos

#### SEO
- [ ] ✅ Meta tags configurados
- [ ] ✅ Sitemap generado (si aplica)
- [ ] ✅ Robots.txt configurado (si aplica)
- [ ] ✅ Open Graph tags (para redes sociales)

#### Performance
- [ ] ✅ Lighthouse score > 90
- [ ] ✅ Imágenes con lazy loading
- [ ] ✅ Fonts optimizados
- [ ] ✅ CSS/JS minificados (Next.js lo hace automático)

#### Funcionalidad
- [ ] ✅ Formulario de contacto probado
- [ ] ✅ Email enviado y recibido correctamente
- [ ] ✅ WhatsApp buttons funcionando
- [ ] ✅ Navegación responsive
- [ ] ✅ Mapa cargando correctamente
- [ ] ✅ reCAPTCHA funcionando (si aplica)

---

## 🔄 Proceso de Deploy

### Deploy a Staging (develop)

```bash
# 1. Mergear todas las features a develop
git checkout develop
git pull origin develop
git merge feature/mi-feature
git push origin develop

# 2. Vercel deploya automáticamente
# 3. Revisar en staging: https://ksc-staging.vercel.app
# 4. Probar todo en staging
```

### Deploy a Producción (master)

```bash
# 1. Crear Pull Request
# GitHub: develop → master

# 2. Code Review
# Revisar cambios, aprobar PR

# 3. Merge PR
# GitHub: Merge pull request

# 4. Vercel deploya automáticamente a producción
# 5. Verificar: https://ksc.katun.com

# 6. Crear tag de versión
git checkout master
git pull origin master
git tag -a v1.1.0 -m "Release 1.1.0: Add maps and reCAPTCHA"
git push origin v1.1.0
```

---

## 🐛 Troubleshooting

### Build Falla en Vercel

**Error:** `Module not found`
```bash
# Solución: Verificar dependencias
npm install
npm run build  # Probar localmente
```

**Error:** `Environment variable not defined`
```bash
# Solución: Verificar variables en Vercel Dashboard
Settings → Environment Variables
```

### Email no Envía en Producción

1. **Verificar variables de entorno en Vercel**
   - SENDGRID_API_KEY debe estar configurada
   - Sin espacios al inicio/final

2. **Verificar email en SendGrid**
   - Settings → Sender Authentication
   - Email debe estar verificado ✅

3. **Revisar logs**
   ```bash
   vercel logs https://tu-deployment-url.vercel.app
   ```

### Dominio no Funciona

1. **Verificar DNS:**
   ```bash
   # En terminal
   nslookup ksc.katun.com
   
   # Debe apuntar a Vercel
   ```

2. **Esperar propagación:**
   - DNS puede tomar hasta 48 horas
   - Usualmente ~10-30 minutos

3. **Verificar en Vercel:**
   - Dashboard → Domains
   - Debe mostrar ✅ Valid Configuration

### reCAPTCHA no Funciona en Producción

1. **Verificar keys en Vercel variables**
   - NEXT_PUBLIC_RECAPTCHA_SITE_KEY
   - RECAPTCHA_SECRET_KEY

2. **Verificar dominio en Google reCAPTCHA:**
   - https://www.google.com/recaptcha/admin
   - Agregar dominio de producción: `ksc.katun.com`

3. **Verificar en browser console:**
   - F12 → Console
   - No debe haber errores de reCAPTCHA

---

## 📊 Monitoreo Post-Deploy

### Métricas en Vercel

**Dashboard → Analytics:**
- Requests por segundo
- Tiempo de respuesta
- Status codes (200, 404, 500)
- Regiones de usuarios

### Métricas de SendGrid

**SendGrid Dashboard → Activity:**
- Emails enviados
- Emails entregados
- Bounces
- Opens/Clicks

### Métricas de reCAPTCHA

**Google reCAPTCHA Admin:**
- Requests por día
- Score distribution
- Detección de bots

---

## 🚀 Optimizaciones

### Performance

**Next.js automáticamente optimiza:**
- ✅ Code splitting
- ✅ Image optimization
- ✅ Static generation
- ✅ CSS minification
- ✅ JS minification

**Mejoras adicionales:**
```javascript
// next.config.ts
export default {
  images: {
    domains: ['katun.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
}
```

### Caché

Vercel configura caché automáticamente:
- Static assets: 1 año
- API routes: No cache (dinámico)
- Pages: Según getStaticProps/getServerSideProps

---

## 📝 Rollback

Si algo falla en producción:

### Método 1: Vercel Dashboard (Rápido)

```
1. Dashboard → Deployments
2. Buscar deployment anterior (que funcionaba)
3. Click "..." → Promote to Production
4. Confirmar
```

### Método 2: Git Revert

```bash
# 1. Identificar commit problemático
git log --oneline

# 2. Revertir commit
git revert <commit-hash>

# 3. Push
git push origin master

# 4. Vercel deploya automáticamente
```

### Método 3: Rollback a Tag

```bash
# 1. Ver tags
git tag

# 2. Checkout tag anterior
git checkout v1.0.0

# 3. Crear branch temporal
git checkout -b hotfix/rollback-v1.0.0

# 4. Force push a master (CUIDADO)
git push origin hotfix/rollback-v1.0.0

# 5. Crear PR urgente: master ← hotfix/rollback-v1.0.0
```

---

## 📞 Soporte

### Links Útiles

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Status:** https://www.vercel-status.com
- **Next.js Deployment:** https://nextjs.org/docs/deployment

### Contacto Vercel Support

- **Email:** support@vercel.com
- **Twitter:** @vercel
- **Discord:** https://vercel.com/discord

---

## 🎯 Resumen

### Flujo Completo de Deploy

```
1. Desarrollar en feature/mi-feature
2. Crear PR: develop ← feature/mi-feature
3. Code review y merge
4. Vercel deploya a staging automáticamente
5. Probar en staging
6. Crear PR: master ← develop
7. Code review y merge
8. Vercel deploya a producción automáticamente
9. Crear tag de versión
10. Monitorear métricas
```

### Comandos Rápidos

```bash
# Deploy preview
vercel

# Deploy producción
vercel --prod

# Ver logs
vercel logs

# Ver deployments
vercel ls

# Alias a dominio
vercel alias <deployment-url> ksc.katun.com
```

---

**¡Listo para desplegar!** 🚀

**Última actualización:** 17 de Octubre, 2025
