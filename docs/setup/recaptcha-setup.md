# Configuración de Google reCAPTCHA v3

Este proyecto utiliza Google reCAPTCHA v3 invisible para proteger el formulario de contacto contra spam y bots.

## ¿Qué es reCAPTCHA v3?

reCAPTCHA v3 es completamente invisible para los usuarios legítimos. En lugar de mostrar un desafío, analiza el comportamiento del usuario y asigna una puntuación (score) de 0.0 a 1.0:
- **1.0**: Muy probablemente un usuario legítimo
- **0.0**: Muy probablemente un bot

Nuestro sistema bloquea envíos con score menor a **0.5**.

## Pasos para Configurar reCAPTCHA v3

### 1. Crear una cuenta en Google reCAPTCHA

1. Visita: https://www.google.com/recaptcha/admin
2. Inicia sesión con tu cuenta de Google
3. Haz clic en el botón **"+"** para crear un nuevo sitio

### 2. Registrar tu sitio web

Completa el formulario con la siguiente información:

- **Label (Etiqueta)**: `KSC Contact Form` (o el nombre que prefieras)
- **reCAPTCHA type**: Selecciona **"reCAPTCHA v3"**
- **Domains**: Agrega tus dominios:
  ```
  localhost
  katun.com
  www.katun.com
  ```
  (Agrega todos los dominios donde se usará el formulario)
- **Owners**: Tu email de Google (ya estará pre-rellenado)
- **Accept the reCAPTCHA Terms of Service**: ✅ Acepta los términos

### 3. Obtener las Keys

Después de registrar, Google te proporcionará dos keys:

1. **Site Key** (Clave del sitio):
   - Esta es pública y se usa en el frontend
   - Comienza con algo como: `6Lc...`

2. **Secret Key** (Clave secreta):
   - Esta es privada y se usa en el backend
   - Comienza con algo como: `6Lc...`
   - ⚠️ **NUNCA** compartas esta clave públicamente

### 4. Configurar Variables de Entorno

Crea o edita el archivo `.env.local` en la raíz del proyecto:

```bash
# Google reCAPTCHA v3 Configuration
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=tu_site_key_aqui
RECAPTCHA_SECRET_KEY=tu_secret_key_aqui
```

**Ejemplo real:**
```bash
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=6LcXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
RECAPTCHA_SECRET_KEY=6LcYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
```

### 5. Reiniciar el Servidor

Después de configurar las variables de entorno, reinicia el servidor de desarrollo:

```bash
# Detén el servidor (Ctrl+C) y vuelve a iniciar
npm run dev
```

### 6. Verificar Configuración

Para verificar que reCAPTCHA está funcionando:

1. Abre el formulario de contacto en tu navegador
2. Abre las herramientas de desarrollo (F12)
3. Ve a la pestaña **Console**
4. Completa y envía el formulario
5. Deberías ver en la consola del servidor:
   ```
   ✅ reCAPTCHA verificado com sucesso. Score: 0.9
   ```

## Ajustar el Score Threshold (Opcional)

Por defecto, el sistema requiere un score mínimo de **0.5**. Puedes ajustar esto en el archivo:
`src/app/api/contact/route.ts`

```typescript
if (score < 0.5) { // Cambia 0.5 por el valor que prefieras
  return { success: false, score, error: 'Score de reCAPTCHA muito baixo' };
}
```

**Recomendaciones:**
- **0.5**: Balance entre seguridad y usabilidad (recomendado)
- **0.7**: Más estricto, puede bloquear algunos usuarios legítimos
- **0.3**: Menos estricto, permite más usuarios pero más vulnerable a bots

## Monitorear reCAPTCHA

Google proporciona un dashboard para monitorear el tráfico de reCAPTCHA:

1. Ve a: https://www.google.com/recaptcha/admin
2. Selecciona tu sitio
3. Ve a **Analytics** para ver:
   - Número de verificaciones
   - Distribución de scores
   - Detección de patrones sospechosos

## Solución de Problemas

### Error: "Token de reCAPTCHA ausente"
- Verifica que `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` esté configurada en `.env.local`
- Asegúrate de reiniciar el servidor después de agregar la variable

### Error: "Verificación de reCAPTCHA falhou"
- Verifica que `RECAPTCHA_SECRET_KEY` esté correcta en `.env.local`
- Asegúrate de que el dominio esté registrado en la consola de Google reCAPTCHA

### Error: "Score de reCAPTCHA muito baixo"
- Esto puede ocurrir con bots o comportamiento sospechoso
- Si ocurre con usuarios legítimos, considera reducir el threshold de 0.5 a 0.3

### El script de reCAPTCHA no carga
- Verifica la conexión a Internet
- Asegúrate de que no haya bloqueadores de scripts (AdBlock, etc.)
- Verifica la consola del navegador para errores

## Producción

Para producción, asegúrate de:

1. ✅ Configurar las variables de entorno en tu plataforma de hosting (Vercel, AWS, etc.)
2. ✅ Agregar el dominio de producción en la consola de Google reCAPTCHA
3. ✅ NO incluir las keys en el código fuente (usar solo variables de entorno)
4. ✅ Verificar que el dominio tenga HTTPS (requerido por reCAPTCHA)

## Recursos Adicionales

- [Documentación oficial de reCAPTCHA v3](https://developers.google.com/recaptcha/docs/v3)
- [Console de reCAPTCHA](https://www.google.com/recaptcha/admin)
- [FAQ de reCAPTCHA](https://developers.google.com/recaptcha/docs/faq)

---

**Última actualización**: Octubre 2025
