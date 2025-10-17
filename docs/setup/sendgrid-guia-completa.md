# 🚀 GUÍA COMPLETA: CONFIGURACIÓN DE SENDGRID

## ✅ Instalación Completada

Ya se instaló el paquete `@sendgrid/mail` y se configuró el código.

---

## 📋 PASOS PARA ACTIVAR EL ENVÍO DE EMAILS

### **PASO 1: Crear cuenta en SendGrid**

1. Ve a: [https://sendgrid.com](https://sendgrid.com)
2. Click en **"Start for Free"** o **"Sign Up"**
3. Completa el registro con tu email corporativo
4. Verifica tu email

**Plan Gratuito incluye:**
- ✅ 100 emails por día (3,000 al mes)
- ✅ API completa
- ✅ Analytics básico
- ✅ Suficiente para empezar

---

### **PASO 2: Obtener tu API Key**

1. **Iniciar sesión** en SendGrid
2. En el menú lateral, ir a: **Settings → API Keys**
3. Click en **"Create API Key"**
4. Configurar:
   - **API Key Name:** `KSC Website Contact Form`
   - **API Key Permissions:** Seleccionar **"Restricted Access"**
   - Expandir **"Mail Send"** y marcar **"Mail Send"** ✅
   - Click en **"Create & View"**

5. **COPIAR LA API KEY** (se muestra solo una vez)
   ```
   Ejemplo: SG.aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcdefghijklmnopqrstuvwxyz
   ```

6. **Guardar en archivo `.env.local`:**
   - Abrir: `c:\Users\dxdeloer\OneDrive - Katun Corporation\Desktop\ksc-components\.env.local`
   - Reemplazar `your_sendgrid_api_key_here` con tu API Key real
   - Guardar el archivo

---

### **PASO 3: Verificar Dominio o Email**

**Opción A: Verificación de Dominio Completo** (Recomendado para producción)

1. Ir a: **Settings → Sender Authentication**
2. Click en **"Verify a Domain"**
3. Ingresar tu dominio: `katun.com`
4. SendGrid te dará registros DNS para agregar:
   - Registros CNAME
   - Registros TXT (SPF, DKIM)
5. Agregar esos registros en tu proveedor de DNS
6. Click en **"Verify"** después de 24-48 horas

**Opción B: Verificación de Email Individual** (Rápido para desarrollo)

1. Ir a: **Settings → Sender Authentication**
2. Click en **"Verify a Single Sender"**
3. Completar el formulario:
   - **From Name:** KSC - Katun Service Company
   - **From Email Address:** `contato@katun.com`
   - **Reply To:** `contato@katun.com`
   - **Company Address:** Av. Ermano Marchetti, 1435
   - **City:** São Paulo
   - **State:** SP
   - **Zip Code:** 05038-001
   - **Country:** Brazil

4. Click en **"Create"**
5. **Revisar tu email** y click en el link de verificación
6. Una vez verificado, aparecerá como **"Verified"** ✅

7. **Actualizar `.env.local`:**
   ```env
   SENDGRID_FROM_EMAIL=contato@katun.com
   ```

---

### **PASO 4: Configurar Variables de Entorno**

Editar el archivo `.env.local` con tus datos reales:

```env
# SendGrid Configuration
SENDGRID_API_KEY=SG.tu_api_key_real_aqui
SENDGRID_FROM_EMAIL=contato@katun.com
CONTACT_EMAIL=contato@katun.com

# WhatsApp Configuration
WHATSAPP_NUMBER=5511999999999
```

**Nota:** El archivo `.env.local` ya fue creado, solo necesitas actualizar los valores.

---

### **PASO 5: Reiniciar el Servidor**

Después de configurar las variables de entorno:

```powershell
# Detener el servidor (Ctrl + C en la terminal)
# Luego reiniciar:
npm run dev
```

---

### **PASO 6: Probar el Formulario**

1. Ir a: [http://localhost:3001/contato](http://localhost:3001/contato)
2. Completar el formulario de contacto
3. Click en **"📧 Enviar Mensagem"**
4. Deberías ver la notificación verde: ✅ "Mensagem enviada com sucesso!"
5. Revisar tu bandeja de entrada en `contato@katun.com`

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### ❌ Error: "API Key inválida"
**Solución:**
- Verificar que la API Key está correctamente copiada en `.env.local`
- No debe tener espacios al inicio o final
- Debe empezar con `SG.`
- Reiniciar el servidor después de cambiar `.env.local`

### ❌ Error: "From email not verified"
**Solución:**
- Completar el Paso 3 (Verificación de dominio/email)
- El email en `SENDGRID_FROM_EMAIL` debe estar verificado en SendGrid
- Revisar tu email para el link de verificación

### ❌ No llegan los emails
**Verificar:**
1. **Revisar carpeta de SPAM** en tu email
2. **Console de navegador:** Abrir DevTools (F12) → Ver mensajes de error
3. **Terminal del servidor:** Ver logs de errores
4. **SendGrid Dashboard:**
   - Ir a **Activity** → Ver si los emails fueron enviados
   - Ver **Suppressions** → Verificar que tu email no está bloqueado

### ❌ Error: "Rate limit exceeded"
**Solución:**
- Plan gratuito: máximo 100 emails/día
- Esperar 24 horas o upgrade de plan

---

## 📊 MONITOREO DE EMAILS

### Ver Estadísticas en SendGrid

1. Ir a: **Email API → Activity**
2. Verás todos los emails enviados con:
   - ✅ Delivered (Entregados)
   - 📬 Opened (Abiertos)
   - 🔗 Clicked (Links clickeados)
   - ❌ Bounced (Rebotados)
   - 🚫 Dropped (Descartados)

### Logs en el Servidor

Los logs aparecen en la terminal donde corre `npm run dev`:

```
✅ Email enviado com sucesso: { name: 'João Silva', email: 'joao@empresa.com', service: 'PaperCut MF' }
```

---

## 🚀 DESPLIEGUE EN PRODUCCIÓN (Vercel)

Cuando despliegues a producción:

### 1. Configurar Variables de Entorno en Vercel

1. Ir a: [https://vercel.com](https://vercel.com)
2. Seleccionar tu proyecto
3. Ir a: **Settings → Environment Variables**
4. Agregar cada variable:

   ```
   SENDGRID_API_KEY = SG.tu_api_key_aqui
   SENDGRID_FROM_EMAIL = contato@katun.com
   CONTACT_EMAIL = contato@katun.com
   WHATSAPP_NUMBER = 5511999999999
   ```

5. Click en **"Save"**
6. **Redeploy** el proyecto

### 2. Verificar Dominio de Producción

Si tu sitio está en `ksc.com.br`:
- Verificar el dominio completo en SendGrid (Paso 3, Opción A)
- Agregar registros DNS
- Actualizar `SENDGRID_FROM_EMAIL=contato@ksc.com.br`

---

## ✅ CHECKLIST FINAL

Antes de dar por finalizado:

- [ ] Cuenta de SendGrid creada
- [ ] API Key obtenida y guardada en `.env.local`
- [ ] Email o dominio verificado en SendGrid
- [ ] Variables de entorno configuradas correctamente
- [ ] Servidor reiniciado con `npm run dev`
- [ ] Formulario probado en [http://localhost:3001/contato](http://localhost:3001/contato)
- [ ] Email recibido en la bandeja de entrada
- [ ] Número de WhatsApp configurado
- [ ] Variables configuradas en Vercel (para producción)

---

## 📧 EJEMPLO DE EMAIL QUE SE ENVIARÁ

```
De: KSC - Katun Service Company <contato@katun.com>
Para: contato@katun.com
Asunto: 🔔 Nova Consulta de João Silva - PaperCut MF - Gestão de Impressão

[Email con formato HTML profesional]

Nova Consulta - Website KSC

👤 Nome: João Silva
📧 Email: joao@empresa.com
📱 Telefone: +55 (11) 98765-4321
🔧 Serviço de Interesse: PaperCut MF - Gestão de Impressão

💬 Mensagem:
Gostaria de agendar uma demonstração do PaperCut MF...

---
Data: 17/10/2025 14:30:15
Este email foi enviado automaticamente através do formulário de contato do website KSC.
```

---

## 🔐 SEGURIDAD

### ⚠️ IMPORTANTE

1. **NUNCA subir `.env.local` a GitHub**
   - Ya está incluido en `.gitignore`
   - Contiene información sensible (API Keys)

2. **No compartir tu API Key**
   - Es como una contraseña
   - Si se compromete, regenerarla en SendGrid

3. **Usar variables de entorno**
   - En desarrollo: `.env.local`
   - En producción: Variables de Vercel

4. **Limitar permisos de API Key**
   - Solo dar permisos de "Mail Send"
   - No dar "Full Access"

---

## 📞 SOPORTE

Si tienes problemas:

1. **Documentación de SendGrid:**
   - [https://docs.sendgrid.com](https://docs.sendgrid.com)

2. **Soporte de SendGrid:**
   - [https://support.sendgrid.com](https://support.sendgrid.com)

3. **Revisar código en:**
   - API Route: `src/app/api/contact/route.ts`
   - Formulario: `src/components/ui/ContactForm.tsx`
   - Variables: `.env.local`

---

## ✨ PRÓXIMOS PASOS

Después de configurar SendGrid:

1. ✅ Probar el formulario
2. ✅ Verificar recepción de emails
3. ✅ Actualizar número de WhatsApp
4. ✅ Desplegar a producción en Vercel
5. ✅ Configurar variables en Vercel
6. ✅ Probar en producción

---

**¡Todo listo para recibir consultas de clientes!** 🎉
