# 📁 Carpeta de Imágenes de Servicios

Esta carpeta contiene las imágenes representativas de cada solución KSC.

## 📋 Imágenes Requeridas

Coloca las siguientes imágenes en esta carpeta:

### 1. **gestao-impressao.jpg**
- **Servicio:** Gestão de Impressão (PaperCut MF)
- **Descripción:** Imagen que represente gestión de impresoras, control de costos, impresión segura
- **Sugerencias:** 
  - Impresoras corporativas en oficina moderna
  - Dashboard de gestión de impresión
  - Persona usando sistema de impresión segura
- **Dimensiones recomendadas:** 800x600px o 1200x900px
- **Color predominante:** Verde (#22C55E) para coincidir con la marca

---

### 2. **gestao-equipamentos.jpg**
- **Servicio:** Gestão de Equipamentos (KPAX Fleet)
- **Descripción:** Imagen que represente monitoreo de equipos, alertas inteligentes, gestión de flotas
- **Sugerencias:**
  - Panel de control con métricas en tiempo real
  - Técnico monitoreando equipos de impresión
  - Dashboard con alertas y notificaciones
- **Dimensiones recomendadas:** 800x600px o 1200x900px
- **Color predominante:** Azul (#0066CC) para coincidir con la marca

---

### 3. **gestao-documentos.jpg**
- **Servicio:** Gestão Eletrônica de Documentos (MegaGED)
- **Descripción:** Imagen que represente gestión documental electrónica, digitalización, workflows
- **Sugerencias:**
  - Persona escaneando documentos
  - Archivos digitales organizados
  - Sistema de gestión documental moderno
  - Workflow de aprobación de documentos
- **Dimensiones recomendadas:** 800x600px o 1200x900px
- **Color predominante:** Morado (#6B46C1) para coincidir con la marca

---

### 4. **plataforma-ensino.jpg**
- **Servicio:** Plataforma de Ensino Digital (Wiki Alphabet)
- **Descripción:** Imagen que represente plataforma de conocimiento, colaboración, enseñanza digital
- **Sugerencias:**
  - Equipo colaborando con tecnología
  - Base de conocimiento digital
  - Personas aprendiendo con dispositivos digitales
  - Wiki o plataforma de e-learning
- **Dimensiones recomendadas:** 800x600px o 1200x900px
- **Color predominante:** Naranja (#EA580C) para coincidir con la marca

---

## 🎨 Especificaciones Técnicas

### Formato
- **Tipo de archivo:** JPG (preferido) o PNG
- **Calidad:** Alta (mínimo 72dpi, preferible 150dpi)
- **Peso:** Máximo 500KB por imagen (optimizado para web)

### Dimensiones
- **Recomendado:** 1200x900px (ratio 4:3)
- **Mínimo:** 800x600px
- **Máximo:** 1920x1440px

### Estilo Visual
- Fotografía profesional o ilustraciones de alta calidad
- Iluminación clara y moderna
- Ambiente corporativo/tecnológico
- Sin texto superpuesto (el texto se agregará con CSS)
- Colores que complementen la paleta de marca KSC

---

## 📍 Ubicación de las Imágenes

Las imágenes se utilizan en:

1. **Página HOME** - Sección "Nossas Soluções" (FlipCards)
   - Ubicación: `/ksc/page.tsx`
   - Tarjetas con efecto flip 3D
   - Imagen mostrada en el frente de cada tarjeta

2. **NavBar** - Menú desplegable "Soluções"
   - Ubicación: Componente `NavBar`
   - Miniaturas (40x40px en desktop, 32x32px en móvil)
   - Se muestran junto al nombre del servicio

---

## 🔄 Cómo Reemplazar las Imágenes

1. Asegúrate de que las nuevas imágenes tengan los nombres exactos:
   - `gestao-impressao.jpg`
   - `gestao-equipamentos.jpg`
   - `gestao-documentos.jpg`
   - `plataforma-ensino.jpg`

2. Coloca los archivos en: 
   ```
   /public/images/services/
   ```

3. Las imágenes se cargarán automáticamente al recargar la página

---

## 🎯 Mapeo de Servicios

| Nombre de Archivo | Servicio Anterior | Servicio Actual | Color |
|-------------------|-------------------|-----------------|-------|
| `gestao-impressao.jpg` | PaperCut | Gestão de Impressão | Verde #22C55E |
| `gestao-equipamentos.jpg` | KPAX | Gestão de Equipamentos | Azul #0066CC |
| `gestao-documentos.jpg` | MegaGED | Gestão Eletrônica de Documentos | Morado #6B46C1 |
| `plataforma-ensino.jpg` | Wiki Alphabet | Plataforma de Ensino Digital | Naranja #EA580C |

---

## 📝 Notas Importantes

- Las imágenes se mostrarán con un overlay oscuro en las tarjetas para mejorar la legibilidad del texto
- En el NavBar, las imágenes aparecen como thumbnails pequeños (40x40px)
- Si una imagen no se carga, no aparecerá (failsafe implementado)
- Las imágenes deben ser representativas del servicio pero no contener logos de marca específicos

---

## 🚀 Optimización

Para optimizar las imágenes antes de subirlas:

### Herramientas recomendadas:
- **TinyPNG** (https://tinypng.com/) - Compresión sin pérdida de calidad
- **Squoosh** (https://squoosh.app/) - Compresión y conversión avanzada
- **ImageOptim** (Mac) - Optimización local

### Comando para optimización local (si tienes ImageMagick):
```bash
convert input.jpg -resize 1200x900 -quality 85 output.jpg
```

---

**Última actualización:** Octubre 2025
**Creado por:** KSC Development Team
