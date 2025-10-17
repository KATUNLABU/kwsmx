import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import sgMail from '@sendgrid/mail';

// Configurar SendGrid con la API Key
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

// Función para verificar reCAPTCHA v3
async function verifyRecaptcha(token: string): Promise<{ success: boolean; score?: number; error?: string }> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.warn('reCAPTCHA secret key not configured');
    return { success: true }; // Permitir si no está configurado
  }

  if (!token) {
    return { success: false, error: 'Token de reCAPTCHA ausente' };
  }

  try {
    const response = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `secret=${secretKey}&response=${token}`,
    });

    const data = await response.json();
    
    if (!data.success) {
      return { success: false, error: 'Verificação de reCAPTCHA falhou' };
    }

    // reCAPTCHA v3 retorna um score de 0.0 a 1.0
    // 1.0 é muito provavelmente uma interação legítima
    // 0.0 é muito provavelmente um bot
    const score = data.score || 0;
    
    if (score < 0.5) {
      return { success: false, score, error: 'Score de reCAPTCHA muito baixo' };
    }

    return { success: true, score };
  } catch (error) {
    console.error('Erro ao verificar reCAPTCHA:', error);
    return { success: false, error: 'Erro na verificação de reCAPTCHA' };
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message, recaptchaToken } = body;

    // Validación básica
    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: 'Todos os campos obrigatórios devem ser preenchidos' },
        { status: 400 }
      );
    }

    // Validar formato de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Por favor, forneça um email válido' },
        { status: 400 }
      );
    }

    // Verificar reCAPTCHA v3
    const recaptchaResult = await verifyRecaptcha(recaptchaToken);
    if (!recaptchaResult.success) {
      console.warn('reCAPTCHA verification failed:', recaptchaResult.error, 'Score:', recaptchaResult.score);
      return NextResponse.json(
        { error: 'Verificação de segurança falhou. Por favor, tente novamente.' },
        { status: 403 }
      );
    }

    console.log('✅ reCAPTCHA verificado com sucesso. Score:', recaptchaResult.score);

    // Construir el contenido HTML del email
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #3b82f6 0%, #22c55e 100%); color: white; padding: 30px; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #1e3a8a; }
            .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #3b82f6; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 2px solid #e5e7eb; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 Nova Consulta - Website KSC</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Nome:</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">📱 Telefone:</div>
                <div class="value">${phone || 'Não fornecido'}</div>
              </div>
              
              <div class="field">
                <div class="label">🔧 Serviço de Interesse:</div>
                <div class="value">${service}</div>
              </div>
              
              <div class="field">
                <div class="label">💬 Mensagem:</div>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              
              <div class="footer">
                <p>Este email foi enviado automaticamente através do formulário de contato do website KSC.</p>
                <p>Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}</p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `;

    // Enviar email con SendGrid
    const msg = {
      to: process.env.CONTACT_EMAIL || 'contato@katun.com',
      from: process.env.SENDGRID_FROM_EMAIL || 'contato@katun.com', // Debe estar verificado en SendGrid
      subject: `🔔 Nova Consulta de ${name} - ${service}`,
      html: emailHtml,
      text: `
Nova consulta desde o formulário de contato

Nome: ${name}
Email: ${email}
Telefone: ${phone || 'Não fornecido'}
Serviço de Interesse: ${service}

Mensagem:
${message}

---
Data: ${new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })}
      `.trim(),
    };

    await sgMail.send(msg);

    console.log('✅ Email enviado com sucesso:', { name, email, service });

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.'
    });

  } catch (error) {
    console.error('❌ Erro ao enviar email:', error);
    
    // Error más específico para debugging
    const errorMessage = error instanceof Error ? error.message : 'Erro desconhecido';
    console.error('Detalhes do erro:', errorMessage);
    
    return NextResponse.json(
      { error: 'Erro ao enviar mensagem. Por favor, tente novamente ou entre em contato pelo telefone.' },
      { status: 500 }
    );
  }
}
