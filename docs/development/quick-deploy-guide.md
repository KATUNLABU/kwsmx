# ⚡ Guía Rápida de Deployment - KSC Website

## 🎯 Resumen Ejecutivo

**9 Páginas Listas para Producción:**
1. `/ksc` - Home
2. `/solucoes` - Landing de Soluciones
3. `/papercut` - PaperCut (Verde)
4. `/kpax` - KPAX (Azul)
5. `/megaged` - MegaGED (Morado)
6. `/wiki-alphabet` - Wiki Alphabet (Naranja)
7. `/contato` - Contacto
8. `/quem-somos` - Quiénes Somos
9. `/fornecedores` - Proveedores

---

## ⚡ Deploy en 5 Minutos (Vercel)

```bash
# 1. Instalar Vercel CLI
npm install -g vercel

# 2. Login en Vercel
vercel login

# 3. Deploy
vercel

# 4. Deploy a producción
vercel --prod
```

**✅ Listo! Tu sitio estará en:** `https://tu-proyecto.vercel.app`

---

## 🧹 Limpiar Proyecto (Opcional)

```powershell
# Ejecutar script de limpieza
.\cleanup.ps1

# O manualmente:
Remove-Item -Recurse -Force "src\app\components"
Remove-Item -Recurse -Force "src\app\demo"
Remove-Item -Recurse -Force "src\app\wavy-test"
Remove-Item -Recurse -Force "src\app\animated-bg-demo"
```

---

## 📦 Subir a GitHub

```bash
# Verificar estado
git status

# Agregar archivos
git add .

# Commit
git commit -m "KSC Website - 9 páginas de producción"

# Push
git push origin master
```

---

## 🔨 Build Local

```bash
# 1. Build de producción
npm run build

# 2. Probar build
npm start

# 3. Abrir navegador
# http://localhost:3000/ksc
```

---

## 🐳 Deploy con Docker (Opcional)

```dockerfile
# Dockerfile ya incluido en el proyecto
docker build -t ksc-website .
docker run -p 3000:3000 ksc-website
```

---

## 📱 URLs a Verificar

```
✅ http://localhost:3000/ksc              → Home
✅ http://localhost:3000/solucoes         → Soluciones
✅ http://localhost:3000/papercut         → PaperCut
✅ http://localhost:3000/kpax             → KPAX
✅ http://localhost:3000/megaged          → MegaGED
✅ http://localhost:3000/wiki-alphabet    → Wiki Alphabet
✅ http://localhost:3000/contato          → Contacto
✅ http://localhost:3000/quem-somos       → Quiénes Somos
✅ http://localhost:3000/fornecedores     → Proveedores
```

---

## ✅ Checklist Rápido

Pre-Deploy:
- [ ] `npm run build` sin errores
- [ ] `npm run dev` funciona
- [ ] 9 páginas cargan OK
- [ ] NavBar funciona en todas
- [ ] Imágenes cargando

Post-Deploy:
- [ ] Todas las URLs funcionan
- [ ] NavBar dropdown OK
- [ ] Formulario contacto funciona
- [ ] Responsive en móvil/tablet
- [ ] Performance > 90 (Lighthouse)

---

## 🚀 Plataformas de Deploy

### 1. Vercel (Recomendado)
```bash
vercel --prod
```
**Ventajas:** Deploy automático desde Git, gratis, muy rápido

### 2. Netlify
- Conectar repo GitHub
- Build: `npm run build`
- Publish: `.next`

### 3. Servidor Propio
```bash
npm install
npm run build
npm start
```

### 4. Docker
```bash
docker-compose up -d
```

---

## 💡 Comandos Útiles

```bash
# Desarrollo
npm run dev              # Servidor desarrollo

# Producción
npm run build           # Crear build
npm start               # Servidor producción

# Calidad
npm run lint            # Verificar código
npm run type-check      # Verificar TypeScript (si existe)

# Git
git status              # Ver cambios
git log --oneline       # Ver commits
git diff                # Ver diferencias
```

---

## 🔧 Solución de Problemas

### Error: Module not found
```bash
rm -rf node_modules
npm install
```

### Error: Build failed
```bash
npm run build -- --debug
```

### Error: Port 3000 in use
```bash
# PowerShell
Stop-Process -Name node -Force
npm run dev
```

### Error: TypeScript errors
```bash
npm run build -- --no-lint
```

---

## 📊 Tamaño del Proyecto

```
Código fuente:          ~10 MB
node_modules:          ~150 MB (no se sube)
Build (.next):          ~30 MB (no se sube)
Assets (public):         ~5 MB
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total en Git:           ~15 MB
Total en servidor:     ~195 MB (después de npm install)
```

---

## 🌐 Configuración de Dominio

### En Vercel:
1. Dashboard → Settings → Domains
2. Add: `ksc.katun.com`
3. Configurar DNS según instrucciones

### DNS Records:
```
Type    Name    Value
A       @       76.76.21.21
CNAME   www     cname.vercel-dns.com
```

---

## 📈 Monitoreo Post-Deploy

```bash
# Vercel Analytics
vercel analytics

# Logs en tiempo real
vercel logs

# Performance
npm run lighthouse (si está configurado)
```

---

## 🎨 Características del Sitio

✅ **Design:**
- Responsive (Mobile/Tablet/Desktop)
- Animaciones Framer Motion
- Gradientes únicos por solución
- Dark mode ready (si configurado)

✅ **Performance:**
- Next.js 15.5.0 con Turbopack
- Lazy loading de imágenes
- Code splitting automático
- SEO optimizado

✅ **Tech Stack:**
- React 19
- TypeScript 5
- Tailwind CSS 3.4
- Framer Motion 11

---

## 📞 Contacto y Soporte

**Repositorio:** https://github.com/VendeAmigos/componentes  
**Branch:** master  
**Versión:** 1.0.0  
**Última actualización:** Octubre 14, 2025

---

## 🎯 Próximos Pasos Sugeridos

1. **SEO:** Agregar metadata a cada página
2. **Analytics:** Google Analytics 4
3. **Sitemap:** Generar sitemap.xml
4. **Robots.txt:** Configurar crawling
5. **SSL:** Certificado HTTPS (automático en Vercel)
6. **CDN:** Configurado automáticamente
7. **Backup:** Sistema de respaldo
8. **Monitoring:** Uptime monitoring

---

**🚀 ¡Todo listo para producción!**

Para más detalles, consulta:
- `DEPLOYMENT-GUIDE-KSC.md` - Guía completa
- `FILES-TO-UPLOAD.md` - Lista de archivos
- `CLEANUP-SCRIPT.md` - Script de limpieza
