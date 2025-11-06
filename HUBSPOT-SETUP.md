# 🎯 Configuración de HubSpot para Formulario de Contacto

## ✅ Lo que ya está hecho:

1. ✅ **Tracking Script instalado** - HubSpot ya está rastreando visitas
2. ✅ **Formulario actualizado** - El código ya envía datos a HubSpot
3. ✅ **Portal ID configurado** - `242609850`

---

## 📋 Pasos que DEBES hacer en HubSpot:

### **PASO 1: Crear el Formulario en HubSpot**

1. Ve a tu cuenta de HubSpot: https://app.hubspot.com/
2. En el menú lateral: **Marketing** → **Lead Capture** → **Forms**
3. Click en **"Create form"** (Crear formulario)
4. Selecciona **"Embedded form"** (Formulario embebido)
5. Dale un nombre: **"KSC - Contact Form"**

---

### **PASO 2: Agregar Campos al Formulario**

Agrega estos campos en este orden:

#### ✅ Campos Estándar (ya existen en HubSpot):
1. **First name** (Nombre) - `firstname`
2. **Last name** (Apellido) - `lastname`  
3. **Email** - `email`
4. **Phone number** (Teléfono) - `phone`

#### 🔧 Campos Personalizados (debes crearlos):

5. **Service Interest** (Servicio de Interés)
   - Name internal: `service`
   - Label: "Servicio de Interés"
   - Type: **Dropdown select**
   - Options:
     - PaperCut MF - Gestão de Impressão
     - KPAX Fleet - Gestão de Equipamentos
     - MegaGED - Gestão Eletrônica de Documentos
     - Wiki Alphabet - Plataforma de Ensino
     - Consultoria
     - Outro

6. **Message** (Mensaje)
   - Name internal: `message`
   - Label: "Mensagem"
   - Type: **Multi-line text**

---

### **PASO 3: Configurar Opciones del Formulario**

1. **Form options**:
   - ✅ Make all fields required (Hacer todos los campos obligatorios)
   - ✅ GDPR enabled si aplica

2. **Automation** (Opcional):
   - Configurar email de notificación cuando alguien envíe el formulario
   - Configurar email automático de respuesta al usuario

3. **Click en "Publish"** (Publicar)

---

### **PASO 4: Obtener el Form GUID**

1. Una vez publicado el formulario, click en **"Share"** o **"Embed"**
2. Verás un código que se ve así:

```html
<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
<script>
  hbspt.forms.create({
    region: "na1",
    portalId: "242609850",
    formId: "12345678-abcd-1234-abcd-123456789012"  ← ESTE ES TU FORM GUID
  });
</script>
```

3. **Copia el `formId`** (el GUID largo con guiones)
4. Ejemplo: `12345678-abcd-1234-abcd-123456789012`

---

### **PASO 5: Configurar el .env.local**

1. Abre el archivo `.env.local` en tu proyecto
2. Busca la línea:
   ```bash
   NEXT_PUBLIC_HUBSPOT_FORM_ID=YOUR_FORM_GUID_HERE
   ```
3. Reemplaza `YOUR_FORM_GUID_HERE` con el GUID que copiaste:
   ```bash
   NEXT_PUBLIC_HUBSPOT_FORM_ID=12345678-abcd-1234-abcd-123456789012
   ```
4. **Guarda el archivo**

---

### **PASO 6: Reiniciar el Servidor**

En la terminal, detén el servidor (`Ctrl + C`) y reinícialo:

```bash
npm run dev
```

---

## 🧪 Probar el Formulario

1. Ve a tu sitio: http://localhost:3001/contato
2. Llena el formulario de contacto
3. Click en **"Enviar Mensagem"**
4. Ve a HubSpot → **Contacts** → **Contacts**
5. Deberías ver el nuevo contacto creado con toda la información

---

## 📊 Ver Submissions del Formulario

1. En HubSpot: **Marketing** → **Lead Capture** → **Forms**
2. Click en tu formulario "KSC - Contact Form"
3. Ve a la pestaña **"Submissions"**
4. Verás todas las personas que han enviado el formulario

---

## ⚙️ Configuración Avanzada (Opcional)

### Crear Campos Personalizados Manualmente:

Si los campos `service` y `message` no existen:

1. **Settings** (⚙️) → **Properties** → **Contact Properties**
2. Click en **"Create property"**
3. Para **Service**:
   - Object type: `Contact`
   - Group: `Contact information`
   - Label: `Service Interest`
   - Internal name: `service`
   - Field type: `Dropdown select`
   - Options: (copiar las opciones de arriba)

4. Para **Message**:
   - Object type: `Contact`
   - Group: `Contact information`
   - Label: `Message`
   - Internal name: `message`
   - Field type: `Multi-line text`

---

## 🔍 Verificar que Funciona

### En la Consola del Navegador:

```javascript
// Abre la consola (F12) y pega esto:
console.log('HubSpot Portal ID:', process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID);
console.log('HubSpot Form ID:', process.env.NEXT_PUBLIC_HUBSPOT_FORM_ID);
```

Deberías ver:
```
HubSpot Portal ID: 242609850
HubSpot Form ID: tu-guid-aqui
```

### Al enviar el formulario:

En la consola deberías ver:
```
✅ Enviado a HubSpot exitosamente
```

Si ves errores:
```
⚠️ Error al enviar a HubSpot: ...
```
Verifica que el Form GUID sea correcto.

---

## 🚀 Deployment a Producción (Vercel)

Cuando subas a producción:

1. Ve a tu proyecto en Vercel
2. **Settings** → **Environment Variables**
3. Agrega estas variables:
   - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID` = `242609850`
   - `NEXT_PUBLIC_HUBSPOT_FORM_ID` = `tu-guid-aqui`
4. Redeploy el proyecto

---

## 📞 Soporte

Si tienes problemas:

1. Verifica que el Form GUID sea correcto
2. Verifica que los campos personalizados existan en HubSpot
3. Revisa la consola del navegador para ver mensajes de error
4. Verifica que el formulario esté publicado en HubSpot

---

## ✅ Checklist Final

- [ ] Formulario creado en HubSpot
- [ ] Campos agregados (firstname, lastname, email, phone, service, message)
- [ ] Form GUID copiado
- [ ] `.env.local` actualizado con el Form GUID
- [ ] Servidor reiniciado
- [ ] Formulario probado y funcionando
- [ ] Contacto de prueba aparece en HubSpot
- [ ] Variables configuradas en Vercel (para producción)

---

**¡Listo! El formulario ahora enviará todos los contactos directamente a tu CRM de HubSpot.**
