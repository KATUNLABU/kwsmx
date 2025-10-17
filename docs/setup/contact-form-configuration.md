# 📧 CONFIGURACIÓN DEL FORMULARIO DE CONTACTO

## ✅ Lo que se ha implementado:

### 1. API Route para procesar formularios
**Archivo:** `src/app/api/contact/route.ts`

- ✅ Endpoint POST `/api/contact`
- ✅ Validación de campos obligatorios
- ✅ Manejo de errores
- ✅ Respuestas JSON estructuradas

### 2. ContactForm actualizado
**Archivo:** `src/components/ui/ContactForm.tsx`

- ✅ Integración con API `/api/contact`
- ✅ Sistema de notificaciones (Toast)
- ✅ Animaciones con Framer Motion
- ✅ Botón WhatsApp funcional
- ✅ Estados de carga (spinner)
- ✅ Limpieza automática del formulario
- ✅ Campos en portugués
- ✅ Opciones de servicios de KSC

---

## 🔧 Configuraciones Pendientes:

### 1. **Número de WhatsApp**
📍 Ubicación: `src/components/ui/ContactForm.tsx` línea ~81

```typescript
const whatsappNumber = '5511999999999'; // TODO: Reemplazar con el número real
```

**Acción requerida:**
- Reemplazar `5511999999999` con el número real de KSC
- Formato: Código país + código área + número (sin espacios ni guiones)
- Ejemplo: `551136473291` para +55 (11) 3647-3291

---

### 2. **Servicio de Envío de Emails**

Tienes 3 opciones para enviar emails reales:

#### Opción A: **Resend** (Recomendado ⭐)
**Ventajas:**
- ✅ Fácil de configurar
- ✅ 3,000 emails gratis/mes
- ✅ API moderna y simple
- ✅ Buen soporte para Next.js

**Instalación:**
```powershell
npm install resend
```

**Configuración:**
1. Crear cuenta en [resend.com](https://resend.com)
2. Obtener API Key
3. Crear archivo `.env.local`:
```env
RESEND_API_KEY=re_xxxxxxxxxxxx
```

4. Actualizar `src/app/api/contact/route.ts`:
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Dentro del try block:
await resend.emails.send({
  from: 'contato@tudominio.com', // Dominio verificado en Resend
  to: 'contato@katun.com',
  subject: `Nova consulta de ${name}`,
  html: `
    <h2>Nova consulta desde o site</h2>
    <p><strong>Nome:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${phone || 'Não fornecido'}</p>
    <p><strong>Serviço:</strong> ${service}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${message}</p>
  `,
});
```

---

#### Opción B: **Nodemailer** (SMTP tradicional)
**Ventajas:**
- ✅ Funciona con cualquier servidor SMTP
- ✅ Compatible con Gmail, Outlook, etc.
- ✅ Sin costos adicionales (usa tu email actual)

**Instalación:**
```powershell
npm install nodemailer
npm install -D @types/nodemailer
```

**Configuración:**
1. Crear archivo `.env.local`:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu@email.com
SMTP_PASS=tu_contraseña_app
```

2. Actualizar `src/app/api/contact/route.ts`:
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Dentro del try block:
await transporter.sendMail({
  from: process.env.SMTP_USER,
  to: 'contato@katun.com',
  subject: `Nova consulta de ${name}`,
  html: emailContent,
});
```

**Nota para Gmail:**
- Necesitas una "Contraseña de aplicación"
- Ve a: https://myaccount.google.com/apppasswords
- Genera una contraseña específica para la app

---

#### Opción C: **SendGrid**
**Ventajas:**
- ✅ 100 emails gratis/día
- ✅ API robusta
- ✅ Analytics incluido

**Instalación:**
```powershell
npm install @sendgrid/mail
```

**Configuración:**
1. Crear cuenta en [sendgrid.com](https://sendgrid.com)
2. Obtener API Key
3. Crear archivo `.env.local`:
```env
SENDGRID_API_KEY=SG.xxxxxxxxxxxx
```

4. Actualizar `src/app/api/contact/route.ts`:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Dentro del try block:
await sgMail.send({
  to: 'contato@katun.com',
  from: 'contato@tudominio.com', // Verificado en SendGrid
  subject: `Nova consulta de ${name}`,
  html: emailContent,
});
```

---

## 🎯 Pasos para Implementar:

### 1. Actualizar número de WhatsApp
```typescript
// src/components/ui/ContactForm.tsx línea ~81
const whatsappNumber = '551136473291'; // Número real de KSC
```

### 2. Elegir e instalar servicio de email
```powershell
# Opción A: Resend (recomendado)
npm install resend

# Opción B: Nodemailer
npm install nodemailer
npm install -D @types/nodemailer

# Opción C: SendGrid
npm install @sendgrid/mail
```

### 3. Crear archivo `.env.local`
```env
# Para Resend:
RESEND_API_KEY=tu_api_key

# O para Nodemailer:
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=tu@email.com
SMTP_PASS=tu_contraseña_app

# O para SendGrid:
SENDGRID_API_KEY=tu_api_key
```

### 4. Actualizar API Route
Editar `src/app/api/contact/route.ts` con el código del servicio elegido

### 5. Probar
```powershell
npm run dev
```

Ir a: http://localhost:3001/contato y probar el formulario

---

## 📱 Funcionalidades Implementadas:

### ✅ Notificaciones Toast
- ✅ Aparece en la parte superior central
- ✅ Auto-desaparece en 5 segundos
- ✅ Verde para éxito, rojo para error
- ✅ Botón de cierre manual
- ✅ Animación suave de entrada/salida

### ✅ Botón de Envío
- ✅ Spinner de carga mientras envía
- ✅ Texto cambia a "Enviando..."
- ✅ Deshabilitado durante el envío
- ✅ Gradiente azul (#3b82f6 → #1e40af)

### ✅ Botón WhatsApp
- ✅ Link directo a WhatsApp Web/App
- ✅ Mensaje pre-configurado con datos del usuario
- ✅ Gradiente verde (#22c55e → #16a34a)
- ✅ Icono de WhatsApp incluido

### ✅ Validaciones
- ✅ Campos obligatorios: Nome, Email, Serviço, Mensagem
- ✅ Validación de formato de email
- ✅ Validación en frontend y backend

### ✅ Reset del Formulario
- ✅ Se limpia automáticamente tras envío exitoso
- ✅ Mantiene datos si hay error

---

## 🧪 Testing:

### Antes de configurar servicio de email:
El formulario funciona pero solo simula el envío (delay de 1s)

### Después de configurar:
1. Llenar el formulario en `/contato`
2. Click en "📧 Enviar Mensagem"
3. Ver notificación de éxito
4. Verificar email recibido en `contato@katun.com`
5. Probar botón "WhatsApp" - debe abrir WhatsApp con mensaje

---

## 🔒 Seguridad:

### ✅ Ya implementado:
- ✅ Validación de campos obligatorios
- ✅ Sanitización de datos en backend
- ✅ Variables de entorno para API keys
- ✅ Manejo de errores apropiado

### 📌 Recomendaciones adicionales:
- 🔹 Agregar CAPTCHA (Google reCAPTCHA) para evitar spam
- 🔹 Rate limiting en la API (máx X requests por IP/minuto)
- 🔹 Validar longitud máxima de campos
- 🔹 Filtrar contenido malicioso (XSS)

---

## 📊 Estado Actual:

| Componente | Estado | Notas |
|------------|--------|-------|
| API Route | ✅ Listo | Falta conectar servicio de email |
| ContactForm | ✅ Listo | Funcional con simulación |
| Notificaciones | ✅ Listo | Toast animado |
| WhatsApp | ⚠️ Config | Actualizar número real |
| Email Service | ❌ Pendiente | Elegir e implementar |

---

## 🚀 Próximos Pasos:

1. **Actualizar número WhatsApp** (5 min)
2. **Elegir servicio de email** (Resend recomendado)
3. **Instalar dependencia** (`npm install resend`)
4. **Crear cuenta y obtener API Key**
5. **Configurar `.env.local`**
6. **Actualizar código en `route.ts`**
7. **Probar en ambiente de desarrollo**
8. **Configurar variables de entorno en Vercel**
9. **Deploy a producción**

---

## 📧 Ejemplo de Email que se enviará:

```
De: contato@ksc.com.br (o tu dominio)
Para: contato@katun.com
Asunto: Nova consulta de João Silva

Nova consulta desde el formulario de contacto

Nombre: João Silva
Email: joao@empresa.com
Teléfono: +55 (11) 98765-4321
Servicio de Interés: PaperCut MF - Gestão de Impressão

Mensaje:
Gostaria de agendar uma demonstração do PaperCut MF para nossa empresa.
Temos aproximadamente 50 colaboradores e 10 impressoras.

---
Este mensaje fue enviado desde el formulario de contacto de KSC.
```

---

✅ **TODO LISTO PARA CONFIGURAR**
🎯 **Solo faltan las credenciales del servicio de email elegido**
