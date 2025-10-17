# 🌿 Gestión de Branches - Comandos Rápidos

Referencia rápida de comandos Git para gestionar branches en el proyecto KSC.

## 📋 Estado Actual de Branches

### Branches Principales

```bash
# Ver todas las branches
git branch -a

# Branches principales
master    # Producción
develop   # Staging/Desarrollo
```

### Crear Branch Develop (Si no existe)

```bash
# Crear develop desde master
git checkout master
git pull origin master
git checkout -b develop
git push origin develop

# Configurar develop como branch principal de desarrollo
git branch --set-upstream-to=origin/develop develop
```

---

## 🚀 Comandos para Desarrollo Diario

### Iniciar Nueva Feature

```bash
# 1. Actualizar develop
git checkout develop
git pull origin develop

# 2. Crear branch de feature
git checkout -b feature/nombre-descriptivo

# Ejemplos de nombres:
# feature/add-analytics
# feature/improve-seo
# feature/new-product-page
# feature/payment-integration
```

### Trabajar en Feature

```bash
# Ver estado actual
git status

# Ver cambios
git diff

# Agregar archivos
git add .                    # Todos
git add src/components/      # Carpeta específica
git add archivo.tsx          # Archivo específico

# Commit con mensaje descriptivo
git commit -m "feat(component): add new feature"

# Push a GitHub
git push origin feature/nombre-descriptivo

# Si es tu primer push de esta branch
git push -u origin feature/nombre-descriptivo
```

### Mantener Feature Actualizada

```bash
# Mientras trabajas en una feature, develop puede avanzar
# Mantén tu feature actualizada:

git checkout feature/mi-feature
git pull origin develop      # Traer cambios de develop
# Si hay conflictos, resolverlos
git push origin feature/mi-feature
```

---

## 🐛 Corregir Bugs

### Bug en Desarrollo

```bash
# Crear branch desde develop
git checkout develop
git pull origin develop
git checkout -b bugfix/descripcion-bug

# Ejemplos:
# bugfix/fix-form-validation
# bugfix/resolve-mobile-menu
# bugfix/correct-email-format
```

### Bug Urgente en Producción (Hotfix)

```bash
# Crear branch desde master
git checkout master
git pull origin master
git checkout -b hotfix/descripcion-urgente

# Ejemplos:
# hotfix/fix-sendgrid-error
# hotfix/broken-contact-form
# hotfix/critical-security-patch

# Después del merge a master, también merge a develop:
git checkout develop
git pull origin develop
git merge hotfix/descripcion-urgente
git push origin develop
```

---

## 🔀 Merge y Pull Requests

### Crear Pull Request

```bash
# 1. Push tu branch
git push origin feature/mi-feature

# 2. Ir a GitHub
# Repository → Pull Requests → New Pull Request
# Base: develop
# Compare: feature/mi-feature

# 3. Llenar información
# - Título descriptivo
# - Descripción de cambios
# - Screenshots (si aplica)

# 4. Request review
# - Asignar reviewer
# - Esperar aprobación
```

### Preparar Release a Producción

```bash
# 1. Asegurarse que develop está estable
git checkout develop
git pull origin develop

# 2. Crear Pull Request en GitHub
# Base: master
# Compare: develop

# 3. Code Review exhaustivo

# 4. Después del merge, crear tag
git checkout master
git pull origin master
git tag -a v1.1.0 -m "Release 1.1.0: descripción"
git push origin v1.1.0
```

---

## 🔍 Inspección y Diagnóstico

### Ver Historial

```bash
# Historial completo con gráfico
git log --oneline --graph --all --decorate

# Últimos 10 commits
git log --oneline -10

# Historial de un archivo
git log --follow -- path/to/file.tsx

# Buscar por mensaje
git log --grep="recaptcha"
```

### Ver Diferencias

```bash
# Cambios no staged
git diff

# Cambios staged
git diff --staged

# Diferencia entre branches
git diff develop...feature/mi-feature

# Diferencia de un archivo específico
git diff HEAD -- src/components/ContactForm.tsx
```

### Ver Branches

```bash
# Branches locales
git branch

# Branches remotas
git branch -r

# Todas las branches
git branch -a

# Branches con último commit
git branch -v

# Branches ya mergeadas a develop
git branch --merged develop

# Branches NO mergeadas a develop
git branch --no-merged develop
```

---

## 🧹 Limpieza

### Eliminar Branches Locales

```bash
# Eliminar branch local (después de merge)
git branch -d feature/mi-feature

# Forzar eliminación (si no está mergeada)
git branch -D feature/mi-feature

# Eliminar branches ya mergeadas
git branch --merged develop | grep -v "\* develop" | xargs -n 1 git branch -d
```

### Eliminar Branches Remotas

```bash
# Eliminar branch en GitHub
git push origin --delete feature/mi-feature

# Limpiar referencias a branches remotas eliminadas
git fetch --prune
```

### Sincronizar con Remoto

```bash
# Actualizar información de branches remotas
git fetch --all

# Ver branches remotas eliminadas
git remote prune origin --dry-run

# Limpiar branches remotas eliminadas
git remote prune origin
```

---

## ⚡ Atajos y Aliases

### Configurar Aliases Útiles

```bash
# Aliases globales
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.st status
git config --global alias.unstage 'reset HEAD --'
git config --global alias.last 'log -1 HEAD'
git config --global alias.visual 'log --oneline --graph --all --decorate'

# Usar aliases
git co develop        # git checkout develop
git br                # git branch
git ci -m "message"   # git commit -m "message"
git st                # git status
git visual            # Ver historial gráfico
```

---

## 🔄 Sincronización

### Actualizar Todo

```bash
# Actualizar branch actual
git pull

# Actualizar todas las branches
git fetch --all

# Actualizar y limpiar
git fetch --all --prune
```

### Sincronizar Fork (Si aplica)

```bash
# Agregar upstream (una vez)
git remote add upstream https://github.com/VendeAmigos/componentes.git

# Actualizar desde upstream
git fetch upstream
git checkout develop
git merge upstream/develop
git push origin develop
```

---

## 🆘 Solución de Problemas

### Conflictos de Merge

```bash
# Durante merge, si hay conflictos:
# 1. Ver archivos con conflictos
git status

# 2. Abrir archivos y resolver conflictos manualmente
# Buscar marcadores: <<<<<<< ======= >>>>>>>

# 3. Después de resolver
git add archivo-resuelto.tsx

# 4. Continuar merge
git commit

# 5. Push
git push
```

### Deshacer Cambios

```bash
# Deshacer cambios no commiteados en archivo
git checkout -- archivo.tsx

# Deshacer todos los cambios no commiteados
git reset --hard HEAD

# Deshacer último commit (mantiene cambios)
git reset --soft HEAD~1

# Deshacer último commit (descarta cambios)
git reset --hard HEAD~1

# Revertir commit específico (crea nuevo commit)
git revert <commit-hash>
```

### Cambiar de Branch con Cambios

```bash
# Opción 1: Guardar cambios temporalmente
git stash
git checkout otra-branch
# ... hacer algo ...
git checkout mi-branch-original
git stash pop

# Opción 2: Commit temporal
git add .
git commit -m "WIP: trabajo en progreso"
git checkout otra-branch
# ... hacer algo ...
git checkout mi-branch-original
git reset HEAD~1  # Deshacer commit temporal
```

### Recuperar Branch Eliminada

```bash
# Ver branches eliminadas recientemente
git reflog

# Recuperar branch
git checkout -b nombre-branch <commit-hash-del-reflog>
```

---

## 📊 Estadísticas

### Ver Contribuciones

```bash
# Commits por autor
git shortlog -sn

# Cambios por autor
git log --author="Tu Nombre" --oneline

# Estadísticas de archivos modificados
git log --stat

# Ver quién modificó cada línea de un archivo
git blame archivo.tsx
```

---

## 🎯 Workflow Completo Ejemplo

### Ejemplo Real: Agregar Nueva Feature

```bash
# 1. INICIO
git checkout develop
git pull origin develop
git checkout -b feature/add-analytics

# 2. DESARROLLO (múltiples commits)
# ... hacer cambios en código ...
git add .
git commit -m "feat(analytics): add Google Analytics"

# ... más cambios ...
git add .
git commit -m "feat(analytics): add event tracking"

# 3. MANTENER ACTUALIZADO
git pull origin develop
# Resolver conflictos si hay
git push origin feature/add-analytics

# 4. PULL REQUEST
# Ir a GitHub y crear PR: develop ← feature/add-analytics

# 5. CODE REVIEW
# Hacer cambios solicitados en review
git add .
git commit -m "fix(analytics): address review comments"
git push origin feature/add-analytics

# 6. MERGE (después de aprobación)
# En GitHub: Merge Pull Request

# 7. LIMPIEZA LOCAL
git checkout develop
git pull origin develop
git branch -d feature/add-analytics

# 8. LISTO PARA SIGUIENTE FEATURE
git checkout -b feature/next-feature
```

---

## 📝 Cheat Sheet Rápido

```bash
# BÁSICO
git status                          # Ver estado
git add .                           # Agregar todos
git commit -m "mensaje"             # Commit
git push                            # Push a remoto

# BRANCHES
git branch                          # Ver branches locales
git checkout -b nueva-branch        # Crear y cambiar
git checkout branch-existente       # Cambiar
git branch -d branch-local          # Eliminar local
git push origin --delete branch     # Eliminar remota

# SYNC
git pull                            # Traer cambios
git pull origin develop             # Traer de develop
git fetch --all                     # Actualizar info remota

# HISTORIAL
git log --oneline --graph           # Ver historial
git diff                            # Ver cambios

# DESHACER
git checkout -- archivo             # Deshacer archivo
git reset --soft HEAD~1             # Deshacer commit
git stash                           # Guardar temporal
git stash pop                       # Recuperar temporal
```

---

## 🔗 Links Útiles

- **Git Docs:** https://git-scm.com/doc
- **GitHub Docs:** https://docs.github.com
- **Git Flow:** https://nvie.com/posts/a-successful-git-branching-model/
- **Interactive Git:** https://learngitbranching.js.org/

---

**Última actualización:** 17 de Octubre, 2025
