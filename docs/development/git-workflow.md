# 🌿 Git Workflow - Estrategia de Branches

## 📋 Tabla de Contenidos
- [Estructura de Branches](#estructura-de-branches)
- [Flujo de Trabajo](#flujo-de-trabajo)
- [Comandos Git Esenciales](#comandos-git-esenciales)
- [Convenciones de Commits](#convenciones-de-commits)
- [Pull Requests](#pull-requests)
- [Hotfixes](#hotfixes)

---

## 🌳 Estructura de Branches

Este proyecto utiliza **Git Flow** simplificado con las siguientes branches principales:

```
master (producción)
  ↑
develop (staging/desarrollo)
  ↑
feature/* (nuevas funcionalidades)
bugfix/* (corrección de bugs)
hotfix/* (correcciones urgentes en producción)
```

### Branches Principales

#### `master`
- **Propósito:** Código en producción
- **Protección:** ✅ Protegida (solo merge via PR)
- **Deploy:** Automático a producción (Vercel)
- **Regla:** Solo recibe merges desde `develop` o `hotfix/*`

#### `develop`
- **Propósito:** Integración y staging
- **Protección:** ✅ Protegida (solo merge via PR)
- **Deploy:** Automático a staging (Vercel preview)
- **Regla:** Recibe merges de `feature/*` y `bugfix/*`

### Branches de Trabajo

#### `feature/*`
- **Propósito:** Nuevas funcionalidades
- **Nomenclatura:** `feature/nombre-descriptivo`
- **Base:** Siempre desde `develop`
- **Merge a:** `develop`

**Ejemplos:**
```bash
feature/contact-form
feature/recaptcha-integration
feature/google-maps
feature/sendgrid-email
feature/navbar-redesign
```

#### `bugfix/*`
- **Propósito:** Corrección de bugs en desarrollo
- **Nomenclatura:** `bugfix/descripcion-bug`
- **Base:** Siempre desde `develop`
- **Merge a:** `develop`

**Ejemplos:**
```bash
bugfix/form-validation
bugfix/responsive-navbar
bugfix/email-encoding
```

#### `hotfix/*`
- **Propósito:** Correcciones urgentes en producción
- **Nomenclatura:** `hotfix/descripcion-urgente`
- **Base:** Desde `master`
- **Merge a:** `master` Y `develop`

**Ejemplos:**
```bash
hotfix/sendgrid-api-error
hotfix/broken-contact-form
hotfix/critical-security-fix
```

---

## 🔄 Flujo de Trabajo

### 1. Comenzar una Nueva Funcionalidad

```bash
# 1. Asegurarte de estar en develop actualizado
git checkout develop
git pull origin develop

# 2. Crear branch de feature
git checkout -b feature/nombre-funcionalidad

# 3. Trabajar en tu código
# ... hacer cambios ...

# 4. Commit de cambios
git add .
git commit -m "feat: descripción de la funcionalidad"

# 5. Push a GitHub
git push origin feature/nombre-funcionalidad

# 6. Crear Pull Request en GitHub
# develop ← feature/nombre-funcionalidad
```

### 2. Corregir un Bug en Desarrollo

```bash
# 1. Crear branch desde develop
git checkout develop
git pull origin develop
git checkout -b bugfix/nombre-bug

# 2. Corregir el bug
# ... hacer cambios ...

# 3. Commit
git add .
git commit -m "fix: descripción de la corrección"

# 4. Push y crear PR
git push origin bugfix/nombre-bug
# Crear PR: develop ← bugfix/nombre-bug
```

### 3. Hotfix en Producción (Urgente)

```bash
# 1. Crear branch desde master
git checkout master
git pull origin master
git checkout -b hotfix/descripcion-urgente

# 2. Corregir el problema
# ... hacer cambios ...

# 3. Commit
git add .
git commit -m "hotfix: descripción de la corrección urgente"

# 4. Push
git push origin hotfix/descripcion-urgente

# 5. Crear 2 Pull Requests:
# PR 1: master ← hotfix/descripcion-urgente
# PR 2: develop ← hotfix/descripcion-urgente
```

### 4. Release a Producción

```bash
# 1. Asegurarte de que develop está estable
# (todas las features y bugfixes ya mergeados y probados)

# 2. Crear Pull Request
# master ← develop

# 3. Code Review

# 4. Merge a master (esto deploya a producción)

# 5. Crear tag de versión
git checkout master
git pull origin master
git tag -a v1.0.0 -m "Release 1.0.0: descripción"
git push origin v1.0.0
```

---

## 💻 Comandos Git Esenciales

### Configuración Inicial

```bash
# Configurar nombre y email
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"

# Ver configuración
git config --list
```

### Trabajo Diario

```bash
# Ver estado actual
git status

# Ver diferencias
git diff

# Agregar archivos
git add .                    # Todos los archivos
git add archivo.tsx          # Archivo específico
git add src/components/      # Carpeta específica

# Commit
git commit -m "mensaje"

# Ver historial
git log --oneline --graph --all

# Push a GitHub
git push origin nombre-branch

# Pull cambios
git pull origin nombre-branch
```

### Gestión de Branches

```bash
# Ver todas las branches
git branch -a

# Crear nueva branch
git checkout -b nombre-branch

# Cambiar de branch
git checkout nombre-branch

# Actualizar branch local con remota
git pull origin nombre-branch

# Eliminar branch local
git branch -d nombre-branch

# Eliminar branch remota
git push origin --delete nombre-branch
```

### Sincronización

```bash
# Actualizar develop con master
git checkout develop
git pull origin develop
git merge master
git push origin develop

# Actualizar feature con develop
git checkout feature/mi-feature
git pull origin develop
# Resolver conflictos si hay
git push origin feature/mi-feature
```

### Deshacer Cambios

```bash
# Deshacer cambios no commiteados
git checkout -- archivo.tsx

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Deshacer último commit (descarta cambios)
git reset --hard HEAD~1

# Revertir un commit específico
git revert <commit-hash>
```

---

## 📝 Convenciones de Commits

Usar [Conventional Commits](https://www.conventionalcommits.org/) para mensajes claros:

### Formato

```
<tipo>(<scope>): <descripción corta>

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commit

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| `feat` | Nueva funcionalidad | `feat(contact): add reCAPTCHA v3 integration` |
| `fix` | Corrección de bug | `fix(form): resolve email encoding issue` |
| `docs` | Cambios en documentación | `docs(readme): update setup instructions` |
| `style` | Cambios de formato (no afectan código) | `style(navbar): adjust padding and colors` |
| `refactor` | Refactorización de código | `refactor(api): simplify contact route logic` |
| `test` | Agregar o modificar tests | `test(button): add unit tests` |
| `chore` | Tareas de mantenimiento | `chore(deps): update dependencies` |
| `perf` | Mejoras de rendimiento | `perf(images): optimize image loading` |

### Ejemplos Reales

```bash
# Nueva funcionalidad
git commit -m "feat(contact): add Google Maps integration"

# Corrección de bug
git commit -m "fix(form): resolve UTF-8 encoding for Portuguese characters"

# Documentación
git commit -m "docs(setup): add reCAPTCHA configuration guide"

# Estilo
git commit -m "style(global): change all text to corporate blue #004990"

# Refactorización
git commit -m "refactor(components): extract ContactForm to separate file"

# Performance
git commit -m "perf(maps): implement lazy loading for Google Maps"

# Hotfix urgente
git commit -m "hotfix(api): fix SendGrid authentication error"
```

### Buenas Prácticas

✅ **DO:**
- Usar tiempo presente: "add" no "added"
- Ser descriptivo pero conciso
- Comenzar con minúscula
- No terminar con punto
- Agregar scope cuando sea relevante

❌ **DON'T:**
- "fixed stuff"
- "wip" (work in progress)
- "asdf" o mensajes sin sentido
- Commits demasiado grandes (dividir en commits pequeños)

---

## 🔀 Pull Requests

### Crear un Pull Request

1. **Push tu branch:**
   ```bash
   git push origin feature/tu-feature
   ```

2. **Ir a GitHub:**
   - Repositorio → Pull Requests → New Pull Request

3. **Configurar PR:**
   - **Base:** `develop` (o `master` para hotfix)
   - **Compare:** `feature/tu-feature`
   - **Title:** Descripción clara
   - **Description:** Detalles del cambio

### Template de Pull Request

```markdown
## 📋 Descripción
Breve descripción de los cambios realizados.

## 🎯 Tipo de Cambio
- [ ] 🆕 Nueva funcionalidad (feature)
- [ ] 🐛 Corrección de bug (bugfix)
- [ ] 🚨 Hotfix (urgente)
- [ ] 📚 Documentación
- [ ] 🎨 Estilo/UI
- [ ] ♻️ Refactorización
- [ ] ⚡ Performance

## ✅ Checklist
- [ ] El código compila sin errores
- [ ] He probado los cambios localmente
- [ ] He actualizado la documentación (si aplica)
- [ ] He agregado tests (si aplica)
- [ ] He revisado el código yo mismo

## 📸 Screenshots (si aplica)
[Agregar capturas de pantalla]

## 📝 Notas Adicionales
Cualquier información adicional relevante.
```

### Code Review

**Para el revisor:**
- ✅ Verificar que el código sigue las convenciones
- ✅ Probar funcionalidad localmente
- ✅ Verificar que no rompe nada
- ✅ Sugerir mejoras si es necesario
- ✅ Aprobar o solicitar cambios

**Para el autor:**
- ✅ Responder a comentarios
- ✅ Hacer cambios solicitados
- ✅ Re-push después de cambios
- ✅ Notificar cuando esté listo para re-review

---

## 🚨 Hotfixes

### Proceso de Hotfix

Un hotfix es una corrección urgente que se aplica directamente a producción.

**Cuándo usar hotfix:**
- ❌ Bug crítico en producción
- ❌ Fallo de seguridad
- ❌ Error que impide uso del sitio
- ❌ Datos incorrectos mostrados

**Cuándo NO usar hotfix:**
- ✅ Bug menor que puede esperar
- ✅ Nueva funcionalidad
- ✅ Mejoras de diseño

### Pasos para Hotfix

```bash
# 1. Crear branch desde master
git checkout master
git pull origin master
git checkout -b hotfix/descripcion-breve

# 2. Hacer la corrección mínima necesaria
# Solo el cambio crítico, nada más

# 3. Commit
git add .
git commit -m "hotfix: descripción del problema corregido"

# 4. Push
git push origin hotfix/descripcion-breve

# 5. Crear PR urgente a master
# Notificar al equipo para review rápido

# 6. Después del merge a master
# Hacer otro PR: develop ← hotfix/descripcion-breve
# Esto mantiene develop sincronizado
```

### Ejemplo Real

```bash
# Problema: API de SendGrid no funciona en producción

# 1. Crear hotfix
git checkout master
git pull origin master
git checkout -b hotfix/sendgrid-api-key

# 2. Corregir archivo .env.example y documentación
# Agregar nota sobre formato correcto de API key

# 3. Commit
git commit -m "hotfix: fix SendGrid API key configuration format"

# 4. Push y crear PRs
git push origin hotfix/sendgrid-api-key
# PR 1: master ← hotfix/sendgrid-api-key (URGENTE)
# PR 2: develop ← hotfix/sendgrid-api-key (después del merge a master)
```

---

## 🏷️ Versionado

Usar [Semantic Versioning](https://semver.org/):

```
v1.0.0
│ │ │
│ │ └─ PATCH: Correcciones de bugs
│ └─── MINOR: Nuevas funcionalidades (compatible)
└───── MAJOR: Cambios que rompen compatibilidad
```

### Ejemplos

```bash
# Release inicial
git tag -a v1.0.0 -m "Initial release"

# Nueva funcionalidad
git tag -a v1.1.0 -m "Add reCAPTCHA and Google Maps"

# Corrección de bug
git tag -a v1.1.1 -m "Fix email encoding issue"

# Push tags
git push origin v1.1.1
git push origin --tags  # Push all tags
```

---

## 📊 Estado Actual de Branches

### Master (Producción)
```
v1.0.0 - Sitio web KSC completo
├── 10 páginas funcionales
├── Formulario de contacto
├── Integración SendGrid
├── Botones WhatsApp
└── Diseño corporativo
```

### Develop (Staging)
```
v1.1.0-rc - Release Candidate
├── Todo de master
├── Mapa interactivo en página de contacto
├── reCAPTCHA v3 implementado
└── Documentación completa
```

### Features Activas
```
No hay features en desarrollo actualmente
```

---

## 🔧 Configurar Branches Localmente

### Primera vez (setup completo)

```bash
# 1. Clonar repositorio
git clone https://github.com/VendeAmigos/componentes.git
cd componentes

# 2. Ver branches disponibles
git branch -a

# 3. Crear develop localmente (si no existe)
git checkout -b develop origin/develop

# 4. Volver a master
git checkout master
```

### Trabajo regular

```bash
# Siempre empezar desde develop actualizado
git checkout develop
git pull origin develop

# Crear feature
git checkout -b feature/mi-nueva-feature

# Trabajar...
# Commit...
# Push...

# Cuando termines, volver a develop
git checkout develop
```

---

## 📚 Recursos Adicionales

- [Git Flow Cheatsheet](https://danielkummer.github.io/git-flow-cheatsheet/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [GitHub Pull Request Best Practices](https://docs.github.com/en/pull-requests)
- [Semantic Versioning](https://semver.org/)

---

**Última actualización:** 17 de Octubre, 2025
