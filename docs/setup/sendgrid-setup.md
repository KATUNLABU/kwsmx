# ✅ CHECKLIST FINAL - ACTIVAR FORMULARIO DE CONTACTO

## 🎯 TODO ESTÁ CONFIGURADO - SOLO FALTAN ESTOS PASOS

---

## 📧 EMAILS CONFIGURADOS:

✅ **Email principal para recibir consultas:** `ksc@katun.com`
✅ **Email que envía:** `ksc@katun.com` (debe verificarse en SendGrid)
✅ **Email alternativo de Kauan:** `kauan.vinicius@katun.com`

---

## 📱 WHATSAPP CONFIGURADO:

✅ **Número principal:** +55 (11) 98173-9425 (ksc@katun.com)
✅ **Número alternativo:** +55 (11) 97047-6396 (kauan.vinicius@katun.com)

**Nota:** El botón de WhatsApp en el formulario usa el número principal (98173-9425)

---

## 🗺️ MAPA CONFIGURADO:

✅ **Ubicación en el mapa:** Av. Ermano Marchetti, 1435 - Água Branca, São Paulo - SP
✅ **Mapa interactivo de Google Maps** en página de contacto
✅ **Indicaciones de cómo llegar:** Metrô, Carro, Horarios

---

## 🛡️ SEGURIDAD CON RECAPTCHA V3:

✅ **reCAPTCHA v3 invisible** implementado para proteger contra spam y bots
✅ **Sin interrupciones para usuarios:** Verificación completamente automática
✅ **Score mínimo:** 0.5 (bloquea bots, permite usuarios legítimos)

Ver archivo `RECAPTCHA-SETUP.md` para instrucciones detalladas de configuración.

---

## ⚡ PASOS PARA ACTIVAR EL FORMULARIO:

### **PASO 1: Crear cuenta en SendGrid (5 minutos)**

1. Ve a: **https://sendgrid.com**
2. Click en **"Start for Free"** o **"Sign Up"**
3. Completa el registro:
   - Email: `ksc@katun.com` o `kauan.vinicius@katun.com`
   - Crear contraseña
4. Verificar tu email (revisa bandeja de entrada)
5. Completar el cuestionario inicial de SendGrid

---

### **PASO 2: Obtener API Key de SendGrid (3 minutos)**

1. Una vez dentro de SendGrid, ir al menú:
   ```
   Settings → API Keys
   ```

2. Click en **"Create API Key"**

3. Configurar:
   - **API Key Name:** `KSC Website Contact Form`
   - **API Key Permissions:** Seleccionar **"Restricted Access"**
   - Buscar **"Mail Send"** y marcarlo ✅
   - Los demás permisos déjalos sin marcar

4. Click en **"Create & View"**

5. **¡MUY IMPORTANTE!** La API Key se muestra solo UNA vez:
   ```
   Ejemplo: SG.aBcDeFgHiJkLmNoPqRsTuVwXyZ1234567890abcdefghijklmnopqrstuvwxyz
   ```
   
6. **COPIAR LA API KEY COMPLETA**

7. Abrir el archivo `.env.local` en tu proyecto:
   ```
   c:\Users\dxdeloer\OneDrive - Katun Corporation\Desktop\ksc-components\.env.local
   ```

8. Reemplazar esta línea:
   ```env
   SENDGRID_API_KEY=your_sendgrid_api_key_here
   ```
   
   Con tu API Key real:
   ```env
   SENDGRID_API_KEY=SG.tu_api_key_real_aqui
   ```

9. **Guardar el archivo** `.env.local`

---

### **PASO 3: Verificar Email en SendGrid (2 minutos)**

**Opción A - Verificación Rápida (Recomendada para empezar):**

1. En SendGrid, ir a:
   ```
   Settings → Sender Authentication → Verify a Single Sender
   ```

2. Click en **"Get Started"**

3. Completar el formulario:
   ```
   From Name: KSC - Katun Service Company
   From Email Address: ksc@katun.com
   Reply To: ksc@katun.com
   
   Company Name: Katun Corporation
   Company Address: Av. Ermano Marchetti, 1435
   City: São Paulo
   State: SP
   Zip Code: 05038-001
   Country: Brazil
   ```

4. Click en **"Create"**

5. **Revisar el email de `ksc@katun.com`**
   - SendGrid enviará un email de verificación
   - Abrir el email
   - Click en el link de verificación

6. Una vez verificado, aparecerá como **"Verified"** ✅ en SendGrid

**Opción B - Verificación de Dominio Completo (Para producción):**

Si prefieres verificar todo el dominio `katun.com`:
1. Settings → Sender Authentication → Domain Authentication
2. Seguir las instrucciones para agregar registros DNS
3. Esto permite enviar desde cualquier email @katun.com

---

## 🚀 PASO 4: Configurar reCAPTCHA v3 (Opcional pero Recomendado - 10 minutos)

El formulario incluye protección con reCAPTCHA v3 invisible. Para activarlo:

1. **Crear cuenta en Google reCAPTCHA:**
   - Ve a: https://www.google.com/recaptcha/admin
   - Inicia sesión con tu cuenta de Google
   - Click en **"+"** para crear un nuevo sitio

2. **Registrar tu sitio:**
   - Label: `KSC Contact Form`
   - reCAPTCHA type: **"reCAPTCHA v3"**
   - Domains: Agregar `localhost`, `katun.com`, `www.katun.com`
   - Aceptar términos

3. **Obtener las Keys:**
   - **Site Key**: Para el frontend (pública)
   - **Secret Key**: Para el backend (privada - NO compartir)

4. **Configurar en `.env.local`:**
   ```env
   NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
   RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
   ```

5. **Reiniciar el servidor**

**📖 Ver `RECAPTCHA-SETUP.md` para instrucciones detalladas paso a paso**

**Nota:** El formulario funciona sin reCAPTCHA, pero es altamente recomendado para proteger contra spam.

---

## 🚀 PASO 5: Probar el Formulario

1. **Reiniciar el servidor de desarrollo:**
   ```powershell
   # En la terminal, presionar Ctrl + C para detener
   # Luego ejecutar:
   npm run dev
   ```

2. **Abrir en el navegador:**
   ```
   http://localhost:3000/contato
   ```

3. **Verificar el mapa:**
   - Debe aparecer un mapa interactivo de Google Maps
   - Mostrando Av. Ermano Marchetti, 1435
   - Puedes hacer zoom y mover el mapa

4. **Llenar el formulario con datos de prueba:**
   - Nombre: Tu nombre
   - Email: Tu email
   - Teléfono: Tu teléfono
   - Servicio: Seleccionar cualquier opción
   - Mensaje: Escribir un mensaje de prueba

4. **Click en "📧 Enviar Mensagem"**

5. **Verificar que aparezca notificación verde:** ✅ "Mensagem enviada com sucesso!"

6. **Revisar el email en `ksc@katun.com`:**
   - Deberías recibir el email con los datos del formulario
   - Si no llega, revisar carpeta de SPAM

7. **Probar el botón de WhatsApp:**
   - Click en el botón verde "WhatsApp"
   - Debe abrir WhatsApp con el mensaje pre-llenado
   - Número destino: +55 (11) 98173-9425

---

## 📊 MONITOREO

### Ver emails enviados en SendGrid:

1. Ir a: **Activity** en el menú de SendGrid
2. Verás todos los emails enviados con estado:
   - ✅ **Delivered** - Entregado correctamente
   - 📬 **Opened** - El destinatario lo abrió
   - ❌ **Bounced** - Email rebotado (error)
   - 🚫 **Dropped** - Descartado por SendGrid

### Logs en el servidor:

En la terminal donde corre `npm run dev` verás:
```
✅ Email enviado com sucesso: { name: 'João Silva', email: 'joao@empresa.com', service: 'PaperCut MF' }
```

O errores si algo falla:
```
❌ Erro ao enviar email: [detalles del error]
```

---

## 🔍 SOLUCIÓN DE PROBLEMAS

### ❌ Error: "Unauthorized" o "Invalid API Key"
**Causa:** API Key incorrecta o no configurada
**Solución:**
1. Verificar que la API Key en `.env.local` esté correcta
2. No debe tener espacios al inicio o final
3. Debe comenzar con `SG.`
4. Reiniciar el servidor después de cambiar `.env.local`

---

### ❌ Error: "The from email does not match a verified Sender Identity"
**Causa:** Email `ksc@katun.com` no está verificado en SendGrid
**Solución:**
1. Completar el Paso 3 (Verificación de email)
2. Revisar el email de verificación en `ksc@katun.com`
3. Click en el link de verificación
4. Esperar a que aparezca como "Verified" en SendGrid

---

### ❌ No recibo los emails
**Verificar:**
1. ✅ Revisar **carpeta de SPAM** en `ksc@katun.com`
2. ✅ Ver en SendGrid → Activity si los emails fueron enviados
3. ✅ Verificar logs en la terminal del servidor
4. ✅ Confirmar que `CONTACT_EMAIL=ksc@katun.com` en `.env.local`

---

### ❌ El botón de WhatsApp no funciona
**Verificar:**
1. ✅ Que el número de WhatsApp esté activo: +55 (11) 98173-9425
2. ✅ Que WhatsApp esté instalado en el dispositivo
3. ✅ En móvil, debe abrir la app automáticamente
4. ✅ En PC, debe abrir WhatsApp Web

---

## 🚀 DESPLIEGUE EN PRODUCCIÓN (Vercel)

Cuando subas a producción:

### 1. Configurar Variables de Entorno en Vercel:

1. Ve a: **https://vercel.com**
2. Selecciona tu proyecto
3. Settings → Environment Variables
4. Agregar estas variables:

   **SendGrid:**
   ```
   Variable Name: SENDGRID_API_KEY
   Value: SG.tu_api_key_aqui
   Environment: Production, Preview, Development
   
   Variable Name: SENDGRID_FROM_EMAIL
   Value: ksc@katun.com
   Environment: Production, Preview, Development
   
   Variable Name: CONTACT_EMAIL
   Value: ksc@katun.com
   Environment: Production, Preview, Development
   ```

   **reCAPTCHA (si lo configuraste):**
   ```
   Variable Name: NEXT_PUBLIC_RECAPTCHA_SITE_KEY
   Value: tu_site_key_aqui
   Environment: Production, Preview, Development
   
   Variable Name: RECAPTCHA_SECRET_KEY
   Value: tu_secret_key_aqui
   Environment: Production, Preview, Development
   ```

   **WhatsApp:**
   ```
   Variable Name: WHATSAPP_NUMBER_KSC
   Value: 5511981739425
   Environment: Production, Preview, Development
   ```

5. Click en **"Save"**

6. **Redeploy** el proyecto (Vercel lo hace automáticamente)

---

## 📧 EJEMPLO DE EMAIL QUE SE RECIBIRÁ

```
De: KSC - Katun Service Company <ksc@katun.com>
Para: ksc@katun.com
Asunto: 🔔 Nova Consulta de João Silva - PaperCut MF - Gestão de Impressão

[Email con diseño HTML profesional]

━━━━━━━━━━━━━━━━━━━━━━━━━━
📧 Nova Consulta - Website KSC
━━━━━━━━━━━━━━━━━━━━━━━━━━

👤 Nome: João Silva

📧 Email: joao@empresa.com

📱 Telefone: +55 (11) 98765-4321

🔧 Serviço de Interesse: 
PaperCut MF - Gestão de Impressão

💬 Mensagem:
Gostaria de agendar uma demonstração 
do PaperCut MF para nossa empresa. 
Temos aproximadamente 50 colaboradores 
e 10 impressoras.

━━━━━━━━━━━━━━━━━━━━━━━━━━
Este email foi enviado automaticamente 
através do formulário de contato do 
website KSC.

Data: 17/10/2025 14:30:15
━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 💬 EJEMPLO DE MENSAJE DE WHATSAPP

Cuando alguien hace click en el botón de WhatsApp, se abrirá con este mensaje:

```
Olá! Vim através do site da KSC.

🔹 Nome: João Silva
🔹 Email: joao@empresa.com
🔹 Telefone: +55 (11) 98765-4321
🔹 Interesse: PaperCut MF - Gestão de Impressão

Mensagem: Gostaria de agendar uma 
demonstração do PaperCut MF...
```

---

## ✅ CHECKLIST FINAL

Marca cuando completes cada paso:

- [ ] **Paso 1:** Cuenta de SendGrid creada ✓
- [ ] **Paso 2:** API Key obtenida y configurada en `.env.local` ✓
- [ ] **Paso 3:** Email `ksc@katun.com` verificado en SendGrid ✓
- [ ] **Paso 4:** reCAPTCHA v3 configurado (opcional) ✓
- [ ] **Paso 5:** Servidor reiniciado con `npm run dev` ✓
- [ ] **Paso 6:** Mapa verificado en http://localhost:3000/contato ✓
- [ ] **Paso 7:** Formulario probado y email recibido ✓
- [ ] **Paso 8:** Botón de WhatsApp probado ✓
- [ ] **Paso 9:** Variables configuradas en Vercel (para producción) ✓

---

## 🎉 ¡RESUMEN DE LO QUE YA ESTÁ LISTO!

### ✅ Código completamente implementado:
- API Route con SendGrid integrado
- Formulario con notificaciones toast animadas
- Validación de campos
- Manejo de errores
- Email HTML profesional con diseño
- Botón de WhatsApp funcional
- Loading states con spinner
- Reset automático del formulario
- Mensajes en portugués
- **🛡️ reCAPTCHA v3 invisible para protección contra spam**
- **🗺️ Mapa interactivo de Google Maps con la ubicación**
- **📍 Indicaciones de cómo llegar (Metrô, Carro, Horarios)**

### ✅ Configuración lista:
- Número de WhatsApp: +55 (11) 98173-9425
- Emails configurados: ksc@katun.com
- Variables de entorno preparadas
- Mapa con coordenadas correctas
- Documentación completa (RECAPTCHA-SETUP.md)

### 🔴 Solo necesitas:
1. **Crear cuenta en SendGrid** (5 min)
2. **Obtener y configurar API Key** (3 min)
3. **Verificar email** (2 min)
4. **[Opcional] Configurar reCAPTCHA** (10 min)

**Total: 10-20 minutos y el formulario está funcionando** 🚀

---

## 📞 ¿NECESITAS AYUDA?

- **Documentación SendGrid:** https://docs.sendgrid.com
- **Soporte SendGrid:** https://support.sendgrid.com
- **Archivos del proyecto:**
  - API Route: `src/app/api/contact/route.ts`
  - Formulario: `src/components/ui/ContactForm.tsx`
  - Variables: `.env.local`

---

**¡Ya casi está! Solo necesitas los 3 pasos de SendGrid y todo funcionará perfectamente!** 🎯
