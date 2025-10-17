# Script de Limpieza Automática - KSC Website
# Elimina páginas de demo y deja solo las 9 páginas de producción

Write-Host "🧹 Iniciando limpieza del proyecto KSC..." -ForegroundColor Cyan
Write-Host ""

# Función para eliminar carpeta de forma segura
function Remove-Safely {
    param([string]$Path)
    if (Test-Path $Path) {
        Write-Host "  ❌ Eliminando: $Path" -ForegroundColor Yellow
        Remove-Item -Recurse -Force $Path
        Write-Host "     ✅ Eliminado" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  No existe: $Path" -ForegroundColor Gray
    }
}

Write-Host "📂 Eliminando páginas de demo y testing..." -ForegroundColor Magenta
Write-Host ""

# Eliminar páginas de demo
Remove-Safely "src\app\components"
Remove-Safely "src\app\demo"
Remove-Safely "src\app\wavy-test"
Remove-Safely "src\app\animated-bg-demo"

Write-Host ""
Write-Host "📄 Páginas mantenidas (9 páginas KSC):" -ForegroundColor Green
Write-Host "  ✅ /ksc (Home)" -ForegroundColor Green
Write-Host "  ✅ /solucoes (Landing)" -ForegroundColor Green
Write-Host "  ✅ /papercut (Solución 1)" -ForegroundColor Green
Write-Host "  ✅ /kpax (Solución 2)" -ForegroundColor Green
Write-Host "  ✅ /megaged (Solución 3)" -ForegroundColor Green
Write-Host "  ✅ /wiki-alphabet (Solución 4)" -ForegroundColor Green
Write-Host "  ✅ /contato (Contacto)" -ForegroundColor Green
Write-Host "  ✅ /quem-somos (Quiénes Somos)" -ForegroundColor Green
Write-Host "  ✅ /fornecedores (Proveedores)" -ForegroundColor Green

Write-Host ""
Write-Host "🔍 Verificando página principal..." -ForegroundColor Cyan

# Verificar si existe page.tsx en la raíz
if (Test-Path "src\app\page.tsx") {
    Write-Host "  ℹ️  Encontrado: src\app\page.tsx" -ForegroundColor Yellow
    Write-Host "  💡 Recomendación: Este archivo debe redirigir a /ksc" -ForegroundColor Yellow
    Write-Host "     O elimínalo y configura redirect en next.config.ts" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "🎯 Limpieza completada!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos pasos:" -ForegroundColor Cyan
Write-Host "  1. Ejecutar: npm run build" -ForegroundColor White
Write-Host "  2. Verificar: npm run dev" -ForegroundColor White
Write-Host "  3. Probar: http://localhost:3000/ksc" -ForegroundColor White
Write-Host ""
Write-Host "📦 Para subir a Git:" -ForegroundColor Cyan
Write-Host "  git add ." -ForegroundColor White
Write-Host "  git commit -m 'Clean: Remove demo pages'" -ForegroundColor White
Write-Host "  git push origin master" -ForegroundColor White
Write-Host ""
Write-Host "✨ Proyecto listo para producción!" -ForegroundColor Green
