# 🌿 CREAR BRANCHES DEL PROYECTO

Comandos para crear la estructura completa de branches para el proyecto KSC.

## 📋 Estructura de Branches Recomendada

```
master (producción) ✅ Ya existe
  ↓
develop (staging) ⚠️ Necesita crearse
  ↓
feature/* (nuevas funcionalidades)
bugfix/* (correcciones)
hotfix/* (urgente desde master)
```

---

## 🚀 PASO 1: Crear Branch `develop`

La branch `develop` es el corazón del desarrollo. Todas las features se integran aquí antes de ir a producción.

### Opción A: Crear desde GitHub (Recomendado)

1. **Ir a GitHub:**
   ```
   https://github.com/VendeAmigos/componentes
   ```

2. **Crear branch:**
   - Click en el dropdown de branches (donde dice "master")
   - Escribir: `develop`
   - Click en "Create branch: develop from master"

3. **Configurar protección:**
   - Settings → Branches → Add rule
   - Branch name pattern: `develop`
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass
   - Save changes

### Opción B: Crear desde Terminal

```bash
# 1. Asegurarte de estar en master actualizado
git checkout master
git pull origin master

# 2. Crear develop desde master
git checkout -b develop

# 3. Push a GitHub
git push origin develop

# 4. Configurar tracking
git branch --set-upstream-to=origin/develop develop

# 5. Verificar
git branch -a
# Deberías ver:
#   master
# * develop
#   remotes/origin/master
#   remotes/origin/develop
```

---

## ✅ PASO 2: Verificar Configuración

```bash
# Ver todas las branches
git branch -a

# Output esperado:
  master
* develop
  remotes/origin/HEAD -> origin/master
  remotes/origin/master
  remotes/origin/develop
```

---

## 🔧 PASO 3: Configurar Branch Develop como Default (Opcional)

### En GitHub:

1. **Settings → General → Default branch**
2. Cambiar de `master` a `develop`
3. Update
4. Confirmar

**Ventaja:** Los Pull Requests se crean automáticamente contra `develop` por defecto.

---

## 📝 PASO 4: Actualizar README

Agregar información sobre branches al README principal:

```bash
# Editar README.md
code README.md
```

Agregar sección:
```markdown
## 🌿 Branches

- **master**: Producción (https://ksc.katun.com)
- **develop**: Staging (https://ksc-staging.vercel.app)
- **feature/***: Nuevas funcionalidades
- **bugfix/***: Correcciones de bugs
- **hotfix/***: Correcciones urgentes

Ver [`docs/development/git-workflow.md`](./docs/development/git-workflow.md) para más detalles.
```

---

## 🎯 PASO 5: Crear Primera Feature (Ejemplo)

Ahora que tienes `develop`, puedes crear tu primera feature:

```bash
# 1. Asegurarte de estar en develop
git checkout develop
git pull origin develop

# 2. Crear feature
git checkout -b feature/ejemplo-feature

# 3. Hacer cambios
# ... editar archivos ...

# 4. Commit
git add .
git commit -m "feat: add example feature"

# 5. Push
git push origin feature/ejemplo-feature

# 6. Crear Pull Request en GitHub
# Base: develop
# Compare: feature/ejemplo-feature
```

---

## 🔒 PASO 6: Proteger Branches (Recomendado)

### Proteger `master`

En GitHub → Settings → Branches → Add rule:

```
Branch name pattern: master

✅ Require pull request reviews before merging
  └─ Required approving reviews: 1

✅ Require status checks to pass before merging
  └─ Require branches to be up to date before merging

✅ Require conversation resolution before merging

✅ Do not allow bypassing the above settings

✅ Restrict who can push to matching branches
  └─ Solo admins

Save changes
```

### Proteger `develop`

Misma configuración pero con:
```
Branch name pattern: develop

✅ Require pull request reviews before merging
  └─ Required approving reviews: 1

✅ Require status checks to pass before merging

Save changes
```

---

## 📊 PASO 7: Configurar Vercel para Branches

### Staging (develop)

1. **Vercel Dashboard → Settings → Git**

2. **Production Branch:**
   - Mantener: `master`

3. **Automatic Deployments:**
   - ✅ `master` → Production
   - ✅ `develop` → Preview (será tu staging)
   - ✅ Otras branches → Preview únicos

4. **Configurar dominio de staging (opcional):**
   - Settings → Domains
   - Agregar: `ksc-staging.vercel.app`
   - Assign to: `develop` branch

---

## 🎨 PASO 8: Actualizar Documentación de Branches

Ya está todo en `docs/development/git-workflow.md` y `docs/development/branch-commands.md`, pero puedes personalizar:

```bash
# Editar workflow
code docs/development/git-workflow.md

# Agregar ejemplos específicos del proyecto
# Agregar nombres de branches que uses comúnmente
# Agregar convenciones específicas de tu equipo
```

---

## ✅ CHECKLIST DE CONFIGURACIÓN COMPLETA

- [ ] ✅ Branch `develop` creada
- [ ] ✅ Branch `develop` pushed a GitHub
- [ ] ✅ Protecciones configuradas en `master`
- [ ] ✅ Protecciones configuradas en `develop`
- [ ] ✅ Vercel configurado para auto-deploy
- [ ] ✅ Dominio de staging asignado (opcional)
- [ ] ✅ README actualizado con info de branches
- [ ] ✅ Equipo notificado del nuevo workflow

---

## 🔄 FLUJO DE TRABAJO DESDE AHORA

### Para Desarrollo Normal:

```bash
# 1. Siempre empezar desde develop
git checkout develop
git pull origin develop

# 2. Crear feature
git checkout -b feature/mi-nueva-feature

# 3. Desarrollar y commit
git add .
git commit -m "feat: descripción"

# 4. Push y crear PR
git push origin feature/mi-nueva-feature
# Crear PR: develop ← feature/mi-nueva-feature

# 5. Después del merge, limpiar
git checkout develop
git pull origin develop
git branch -d feature/mi-nueva-feature
```

### Para Release a Producción:

```bash
# 1. Cuando develop esté listo para producción
# Crear PR en GitHub: master ← develop

# 2. Code review exhaustivo

# 3. Merge a master

# 4. Crear tag
git checkout master
git pull origin master
git tag -a v1.1.0 -m "Release 1.1.0: descripción"
git push origin v1.1.0

# 5. Vercel deploya automáticamente a producción
```

---

## 🆘 TROUBLESHOOTING

### "No puedo crear branch develop"

```bash
# Verificar que no exista
git branch -a | grep develop

# Si existe, hacer checkout
git checkout develop

# Si no existe, crearla
git checkout -b develop
git push origin develop
```

### "Error al push a develop"

```bash
# Actualizar primero
git pull origin develop

# Resolver conflictos si hay

# Luego push
git push origin develop
```

### "Mis cambios están en master pero quiero en develop"

```bash
# Si NO has hecho push a master
git checkout master
git reset --soft HEAD~1  # Deshacer último commit
git stash                # Guardar cambios

git checkout develop
git stash pop            # Recuperar cambios
git add .
git commit -m "feat: descripción"
git push origin develop

# Si YA hiciste push a master
# Necesitarás hacer un revert o cherry-pick
# Contacta al equipo para ayuda
```

---

## 📚 RECURSOS

- **Git Workflow:** [`docs/development/git-workflow.md`](../docs/development/git-workflow.md)
- **Branch Commands:** [`docs/development/branch-commands.md`](../docs/development/branch-commands.md)
- **Deployment:** [`docs/development/deployment.md`](../docs/development/deployment.md)

---

## 🎯 RESUMEN

1. ✅ Crear `develop` branch
2. ✅ Configurar protecciones
3. ✅ Configurar Vercel
4. ✅ Actualizar documentación
5. ✅ Empezar a usar el workflow

**¡Listo para desarrollo profesional con Git Flow!** 🚀

---

**Última actualización:** 17 de Octubre, 2025
