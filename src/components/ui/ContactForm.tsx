'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';
import Notification from './Notification';

declare global {
  interface Window {
    grecaptcha: any;
  }
}

interface ContactFormProps {
  className?: string;
  onSubmit?: (data: ContactData) => void;
}

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ className, onSubmit }) => {
  const [formData, setFormData] = React.useState<ContactData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = React.useState(false);
  const [notification, setNotification] = React.useState<{
    show: boolean;
    type: 'success' | 'error';
    message: string;
  }>({
    show: false,
    type: 'success',
    message: ''
  });

  // Cargar reCAPTCHA v3
  React.useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) {
      console.warn('reCAPTCHA site key not configured');
      return;
    }

    // Verificar si el script ya existe
    if (document.querySelector('script[src*="recaptcha"]')) {
      setRecaptchaLoaded(true);
      return;
    }

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);

    return () => {
      // Cleanup opcional
      const scripts = document.querySelectorAll('script[src*="recaptcha"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  const showNotification = (type: 'success' | 'error', message: string) => {
    setNotification({ show: true, type, message });
    setTimeout(() => {
      setNotification({ show: false, type, message: '' });
    }, 5000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Obtener token de reCAPTCHA v3
      let recaptchaToken = '';
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      
      if (siteKey && recaptchaLoaded && window.grecaptcha) {
        try {
          recaptchaToken = await window.grecaptcha.execute(siteKey, { action: 'contact_form' });
        } catch (recaptchaError) {
          console.error('reCAPTCHA error:', recaptchaError);
          showNotification('error', 'Erro na verificação de segurança. Por favor, tente novamente.');
          setIsSubmitting(false);
          return;
        }
      }

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          recaptchaToken
        }),
      });
      const data = await response.json();
      if (response.ok) {
        showNotification('success', data.message || 'Mensagem enviada com sucesso!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
        if (onSubmit) await onSubmit(formData);
      } else {
        showNotification('error', data.error || 'Erro ao enviar mensagem');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      showNotification('error', 'Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const whatsappNumber = '5511981739425';
  
  const whatsappMessage = encodeURIComponent(
    `Olá! Vim através do site da KSC.\n\n` +
    `Nome: ${formData.name || 'Não informado'}\n` +
    `Email: ${formData.email || 'Não informado'}\n` +
    `Telefone: ${formData.phone || 'Não informado'}\n` +
    `Interesse: ${formData.service || 'Não especificado'}\n\n` +
    `${formData.message ? `Mensagem: ${formData.message}` : 'Gostaria de saber mais sobre os serviços da KSC.'}`
  );

  return (
    <>
      <Notification
        show={notification.show}
        type={notification.type}
        message={notification.message}
        onClose={() => setNotification({ show: false, type: 'success', message: '' })}
        duration={5000}
      />
      <motion.form 
        className={cn('bg-white p-8 rounded-xl shadow-lg border border-gray-200', className)} 
        onSubmit={handleSubmit} 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-[#004990] mb-6">Entre em Contato</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-[#004990] mb-2">
              Nome *
            </label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400" 
              placeholder="Seu nome completo" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-[#004990] mb-2">
              Email *
            </label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400" 
              placeholder="seu@email.com" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-[#004990] mb-2">
              Telefone
            </label>
            <input 
              type="tel" 
              name="phone" 
              value={formData.phone} 
              onChange={handleChange} 
              className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all placeholder:text-gray-400" 
              placeholder="+55 (11) 99999-9999" 
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-[#004990] mb-2">
              Serviço de Interesse *
            </label>
            <select 
              name="service" 
              value={formData.service} 
              onChange={handleChange} 
              required 
              className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all appearance-none cursor-pointer"
            >
              <option value="" className="text-gray-500">Selecione um serviço</option>
              <option value="papercut" className="text-[#004990]">PaperCut MF - Gestão de Impressão</option>
              <option value="kpax" className="text-[#004990]">KPAX Fleet - Gestão de Equipamentos</option>
              <option value="megaged" className="text-[#004990]">MegaGED - Gestão Eletrônica de Documentos</option>
              <option value="wiki-alphabet" className="text-[#004990]">Wiki Alphabet - Plataforma de Ensino</option>
              <option value="consultoria" className="text-[#004990]">Consultoria</option>
              <option value="outro" className="text-[#004990]">Outro</option>
            </select>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-semibold text-[#004990] mb-2">
            Mensagem *
          </label>
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
            rows={4} 
            className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all resize-none placeholder:text-gray-400" 
            placeholder="Conte-nos sobre seu projeto ou necessidades..." 
          />
        </div>
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <motion.button 
            type="submit" 
            disabled={isSubmitting} 
            className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl" 
            whileHover={{ scale: isSubmitting ? 1 : 1.02 }} 
            whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </span>
            ) : (
              'Enviar Mensagem'
            )}
          </motion.button>
          
          <motion.a 
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex-1 bg-gradient-to-r from-green-600 to-green-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all text-center shadow-lg hover:shadow-xl flex items-center justify-center gap-2" 
            whileHover={{ scale: 1.02 }} 
            whileTap={{ scale: 0.98 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </motion.a>
        </div>
      </motion.form>
    </>
  );
};

export default ContactForm;
