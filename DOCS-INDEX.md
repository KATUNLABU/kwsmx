# 📚 ÍNDICE DE DOCUMENTACIÓN

Toda la documentación del proyecto KSC organizada en un solo lugar.

## 🗂️ Estructura de Carpetas

```
docs/
├── README.md                                      # 📘 Documentación principal
├── QUICK-START.md                                 # 🚀 Inicio rápido
│
├── setup/                                         # ⚙️ Configuraciones
│   ├── banner-usage-guide.md                     # Banner de hero sections
│   ├── contact-form-configuration.md             # Formulario de contacto
│   ├── recaptcha-setup.md                        # reCAPTCHA v3 (anti-spam)
│   ├── sendgrid-guia-completa.md                 # SendGrid detallado
│   └── sendgrid-setup.md                         # SendGrid (emails)
│
├── development/                                   # 👨‍💻 Desarrollo
│   ├── branch-commands.md                        # Comandos Git útiles
│   ├── cleanup-script-guide.md                   # Script de limpieza
│   ├── components-guide.md                       # Guía de componentes UI
│   ├── components-reference.md                   # Referencia completa
│   ├── create-branches.md                        # 🆕 Crear branches
│   ├── deployment-vercel.md                      # Deploy a Vercel
│   ├── deployment.md                             # Despliegue general
│   ├── files-upload-checklist.md                 # Checklist de archivos
│   ├── git-workflow.md                           # Flujo de trabajo Git
│   ├── quick-deploy-guide.md                     # Deploy rápido
│   ├── technical-reference.md                    # Referencia técnica
│   └── testing-setup.md                          # Setup de testing
│
└── changelog/                                     # 📝 Historial de cambios
    ├── 2025-10-17-mapa-recaptcha.md              # Mapa + reCAPTCHA
    ├── 2025-10-17-resumen-completo.md            # Resumen implementación
    ├── 2025-10-banner-breadcrumbs-update.md      # Banner y breadcrumbs
    ├── 2025-10-banner-soluciones.md              # Banner de soluciones
    ├── 2025-10-banner-spacing-gradients.md       # Spacing y gradientes
    ├── 2025-10-breadcrumbs-flipcards-animaciones.md  # Animaciones
    ├── 2025-10-bug-fixes.md                      # Correcciones de bugs
    ├── 2025-10-estructura-final.md               # Estructura final
    ├── 2025-10-flipcards-gradiente.md            # FlipCards gradiente
    ├── 2025-10-flipcards-optimization.md         # Optimización FlipCards
    ├── 2025-10-flipcards-texturas.md             # Texturas FlipCards
    ├── 2025-10-flipcards-unificacion.md          # Unificación FlipCards
    ├── 2025-10-flipcards-update.md               # Actualización FlipCards
    ├── 2025-10-footer-completo.md                # Footer completo
    ├── 2025-10-hydration-fix.md                  # Fix de hydration
    ├── 2025-10-imagenes-favicon.md               # Imágenes y favicon
    ├── 2025-10-landing-solucoes.md               # Landing page soluciones
    ├── 2025-10-navbar-mejoras.md                 # Mejoras del navbar
    ├── 2025-10-paginas-solucoes-contato.md       # Páginas soluciones
    ├── 2025-10-resumen-final.md                  # Resumen final
    ├── 2025-10-resumen-visual.txt                # Resumen visual
    ├── 2025-10-rutas-fix.md                      # Fix de rutas
    └── 2025-10-ux-improvements.md                # Mejoras de UX

📊 Total: 42 archivos de documentación
```

---

## 🚀 INICIO RÁPIDO

### Para Nuevos Desarrolladores

1. **Lee primero:** [`docs/QUICK-START.md`](./docs/QUICK-START.md)
   - Setup inicial del proyecto
   - Instalación de dependencias
   - Variables de entorno
   - Primer run local

2. **Configura servicios:** 
   - [`docs/setup/sendgrid-setup.md`](./docs/setup/sendgrid-setup.md) - Emails (10 min)
   - [`docs/setup/recaptcha-setup.md`](./docs/setup/recaptcha-setup.md) - Anti-spam (10 min)

3. **Aprende el flujo:**
   - [`docs/development/git-workflow.md`](./docs/development/git-workflow.md) - Branches y PRs
   - [`docs/development/branch-commands.md`](./docs/development/branch-commands.md) - Comandos útiles

---

## 📖 GUÍAS DE CONFIGURACIÓN

### SendGrid (Obligatorio)
**📄 Archivo:** [`docs/setup/sendgrid-setup.md`](./docs/setup/sendgrid-setup.md)

**Para qué sirve:** Enviar emails desde el formulario de contacto

**Tiempo estimado:** 10 minutos

**Pasos clave:**
1. Crear cuenta en SendGrid
2. Obtener API Key
3. Verificar email sender
4. Configurar variables de entorno
5. Probar envío

---

### reCAPTCHA v3 (Recomendado)
**📄 Archivo:** [`docs/setup/recaptcha-setup.md`](./docs/setup/recaptcha-setup.md)

**Para qué sirve:** Protección invisible contra spam y bots

**Tiempo estimado:** 10 minutos

**Pasos clave:**
1. Crear cuenta en Google reCAPTCHA
2. Registrar sitio web
3. Obtener Site Key y Secret Key
4. Configurar variables de entorno
5. Verificar funcionamiento

---

## 🔧 GUÍAS DE DESARROLLO

### Git Workflow
**📄 Archivo:** [`docs/development/git-workflow.md`](./docs/development/git-workflow.md)

**Contenido:**
- Estructura de branches (master, develop, feature/*, bugfix/*, hotfix/*)
- Flujo de trabajo completo
- Convenciones de commits
- Pull Requests
- Versionado semántico

---

### Comandos de Branches
**📄 Archivo:** [`docs/development/branch-commands.md`](./docs/development/branch-commands.md)

**Contenido:**
- Comandos Git esenciales
- Crear y gestionar branches
- Resolver conflictos
- Atajos y aliases
- Cheat sheet rápido

---

### Guía de Componentes
**📄 Archivo:** [`docs/development/components-guide.md`](./docs/development/components-guide.md)

**Contenido:**
- Componentes UI (NavBar, ContactForm, Footer, etc.)
- Componentes de bloque (FAQBlock, FeaturesBlock, etc.)
- Componentes de animación (FadeIn, Counter, etc.)
- Hooks personalizados
- Utilidades

---

### Despliegue
**📄 Archivo:** [`docs/development/deployment.md`](./docs/development/deployment.md)

**Contenido:**
- Despliegue en Vercel
- Configuración de variables de entorno
- Dominios personalizados
- Checklist pre-deploy
- Rollback y troubleshooting

---

## 📝 REGISTRO DE CAMBIOS

### Octubre 17, 2025 - Mapa y reCAPTCHA

**📄 Resumen técnico:** [`docs/changelog/2025-10-17-mapa-recaptcha.md`](./docs/changelog/2025-10-17-mapa-recaptcha.md)

**📄 Resumen completo:** [`docs/changelog/2025-10-17-resumen-completo.md`](./docs/changelog/2025-10-17-resumen-completo.md)

**Cambios principales:**
- ✅ Mapa interactivo de Google Maps en página de contacto
- ✅ Ubicación exacta: Av. Ermano Marchetti, 1435
- ✅ Información de cómo llegar (Metrô, Carro, Horarios)
- ✅ reCAPTCHA v3 invisible implementado
- ✅ Protección anti-spam en formulario
- ✅ Sistema de scores para detectar bots
- ✅ Documentación completa creada

---

## 📚 DOCUMENTACIÓN COMPLETA

### README Principal
**📄 Archivo:** [`docs/README.md`](./docs/README.md)

**Contenido:**
- Introducción al proyecto
- Estructura del proyecto
- Tecnologías utilizadas
- Guías rápidas
- Links a toda la documentación
- Troubleshooting general

---

## 🎯 CASOS DE USO

### "Soy nuevo en el proyecto"
1. Lee [`docs/QUICK-START.md`](./docs/QUICK-START.md)
2. Sigue [`docs/setup/sendgrid-setup.md`](./docs/setup/sendgrid-setup.md)
3. Opcionalmente [`docs/setup/recaptcha-setup.md`](./docs/setup/recaptcha-setup.md)
4. Familiarízate con [`docs/development/components-guide.md`](./docs/development/components-guide.md)

---

### "Necesito crear una nueva feature"
1. Lee [`docs/development/git-workflow.md`](./docs/development/git-workflow.md)
2. Usa [`docs/development/branch-commands.md`](./docs/development/branch-commands.md) como referencia
3. Revisa [`docs/development/components-guide.md`](./docs/development/components-guide.md) para reusar componentes

---

### "Necesito desplegar a producción"
1. Lee [`docs/development/deployment.md`](./docs/development/deployment.md)
2. Sigue el checklist pre-deploy
3. Verifica variables de entorno en Vercel

---

### "Necesito configurar emails"
1. Sigue [`docs/setup/sendgrid-setup.md`](./docs/setup/sendgrid-setup.md) paso a paso
2. Si tienes problemas, revisa sección de troubleshooting

---

### "Quiero proteger el formulario contra spam"
1. Sigue [`docs/setup/recaptcha-setup.md`](./docs/setup/recaptcha-setup.md)
2. Configura las keys en `.env.local`
3. Verifica funcionamiento en development

---

## 🔍 BÚSQUEDA RÁPIDA

### Configuración Inicial
- Instalar dependencias → [`docs/QUICK-START.md`](./docs/QUICK-START.md)
- SendGrid → [`docs/setup/sendgrid-setup.md`](./docs/setup/sendgrid-setup.md)
- reCAPTCHA → [`docs/setup/recaptcha-setup.md`](./docs/setup/recaptcha-setup.md)

### Desarrollo
- Crear branch → [`docs/development/git-workflow.md#comenzar-una-nueva-funcionalidad`](./docs/development/git-workflow.md)
- Comandos Git → [`docs/development/branch-commands.md`](./docs/development/branch-commands.md)
- Componentes → [`docs/development/components-guide.md`](./docs/development/components-guide.md)

### Despliegue
- Deploy a Vercel → [`docs/development/deployment.md#despliegue-en-vercel`](./docs/development/deployment.md)
- Variables de entorno → [`docs/development/deployment.md#variables-de-entorno`](./docs/development/deployment.md)
- Dominio → [`docs/development/deployment.md#dominio-personalizado`](./docs/development/deployment.md)

### Troubleshooting
- Problemas de build → [`docs/development/deployment.md#troubleshooting`](./docs/development/deployment.md)
- Problemas de Git → [`docs/development/branch-commands.md#solución-de-problemas`](./docs/development/branch-commands.md)
- Email no envía → [`docs/setup/sendgrid-setup.md`](./docs/setup/sendgrid-setup.md)

---

## 📞 INFORMACIÓN DEL PROYECTO

### Detalles
- **Cliente:** Katun Corporation
- **Proyecto:** KSC (Katun Service Company) Website
- **Repositorio:** https://github.com/VendeAmigos/componentes
- **Branch principal:** `master` (producción)
- **Branch de desarrollo:** `develop` (staging)

### Contacto
- **Email principal:** ksc@katun.com
- **Email comercial:** kauan.vinicius@katun.com
- **WhatsApp principal:** +55 (11) 98173-9425
- **WhatsApp alternativo:** +55 (11) 97047-6396

### Tecnologías
- **Framework:** Next.js 15.5.0
- **React:** 19.0.0
- **TypeScript:** 5.x
- **Tailwind CSS:** 3.x
- **Framer Motion:** 11.x
- **SendGrid:** Email delivery
- **Google reCAPTCHA v3:** Spam protection

---

## ✅ CHECKLIST COMPLETO

### Para Development
- [ ] Código cloneado y dependencias instaladas
- [ ] `.env.local` configurado con variables necesarias
- [ ] SendGrid configurado y probado
- [ ] reCAPTCHA configurado (opcional)
- [ ] Servidor corriendo: `npm run dev`
- [ ] Git configurado con nombre y email

### Para Production
- [ ] Todas las features mergeadas a `develop`
- [ ] `develop` probado en staging
- [ ] Pull Request `master ← develop` creado
- [ ] Code review completado y aprobado
- [ ] Variables de entorno configuradas en Vercel
- [ ] Dominio configurado y apuntando
- [ ] SSL/HTTPS verificado
- [ ] Formulario de contacto probado en producción
- [ ] Performance auditado (Lighthouse)
- [ ] Tag de versión creado

---

## 🎓 RECURSOS ADICIONALES

### Documentación Externa
- [Next.js Docs](https://nextjs.org/docs) - Framework principal
- [React Docs](https://react.dev) - Biblioteca UI
- [Tailwind CSS](https://tailwindcss.com) - Estilos
- [Framer Motion](https://www.framer.com/motion/) - Animaciones
- [SendGrid Docs](https://docs.sendgrid.com) - Emails
- [reCAPTCHA Docs](https://developers.google.com/recaptcha/docs/v3) - Anti-spam

### Git y GitHub
- [Git Handbook](https://guides.github.com/introduction/git-handbook/)
- [GitHub Flow](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Semantic Versioning](https://semver.org/)

### Vercel
- [Vercel Docs](https://vercel.com/docs)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables](https://vercel.com/docs/concepts/projects/environment-variables)

---

## 🔄 ACTUALIZACIÓN DE DOCUMENTACIÓN

Esta documentación se actualiza regularmente. Para contribuir:

1. Crear branch `docs/actualizar-documentacion`
2. Hacer cambios en archivos de `docs/`
3. Crear Pull Request
4. Esperar aprobación
5. Merge a `develop`

---

## 📊 ESTADÍSTICAS

- **Total de archivos de documentación:** 10
- **Guías de setup:** 2
- **Guías de desarrollo:** 4
- **Registro de cambios:** 2
- **Última actualización:** 17 de Octubre, 2025

---

**¿No encuentras lo que buscas?** 

Revisa el [`docs/README.md`](./docs/README.md) principal o busca en los archivos específicos de cada sección.

---

**Última actualización:** 17 de Octubre, 2025
