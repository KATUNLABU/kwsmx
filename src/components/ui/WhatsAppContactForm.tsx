'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

interface WhatsAppContactFormProps {
  className?: string;
  phoneNumber?: string;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const WhatsAppContactForm: React.FC<WhatsAppContactFormProps> = ({ 
  className,
  phoneNumber = '5511970476396' // +55 (11) 97047-6396
}) => {
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir mensaje para WhatsApp
    const whatsappMessage = encodeURIComponent(
      `Olá! Vim através do site da KSC.\n\n` +
      `📋 *Dados de Contato:*\n` +
      `• Nome: ${formData.name}\n` +
      `• Email: ${formData.email}\n` +
      `• Telefone: ${formData.phone || 'Não informado'}\n` +
      `• Serviço de Interesse: ${formData.service}\n\n` +
      `💬 *Mensagem:*\n${formData.message}`
    );

    // Abrir WhatsApp en nueva pestaña
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <motion.form 
      className={cn('space-y-6', className)} 
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
    >
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
            className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder:text-gray-400" 
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
            className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder:text-gray-400" 
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
            className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all placeholder:text-gray-400" 
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
            className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all appearance-none cursor-pointer"
          >
            <option value="" className="text-gray-500">Selecione um serviço</option>
            <option value="PaperCut MF - Gestão de Impressão">PaperCut MF - Gestão de Impressão</option>
            <option value="KPAX Fleet - Gestão de Equipamentos">KPAX Fleet - Gestão de Equipamentos</option>
            <option value="MegaGED - Gestão Eletrônica de Documentos">MegaGED - Gestão Eletrônica de Documentos</option>
            <option value="Wiki Alphabet - Plataforma de Ensino">Wiki Alphabet - Plataforma de Ensino</option>
            <option value="Consultoria">Consultoria</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-semibold text-[#004990] mb-2">
          Mensagem *
        </label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
          rows={4} 
          className="w-full px-4 py-3 text-[#004990] bg-white border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none placeholder:text-gray-400" 
          placeholder="Conte-nos sobre seu projeto ou necessidades..." 
        />
      </div>
      
      <motion.button 
        type="submit"
        className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3" 
        whileHover={{ scale: 1.02 }} 
        whileTap={{ scale: 0.98 }}
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        Enviar via WhatsApp
      </motion.button>

      <div className="mt-4 p-3 bg-green-50 rounded-lg border border-green-200">
        <p className="text-sm text-green-800 flex items-start gap-2">
          <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>
            <strong>Atendimento Instantâneo:</strong> Ao clicar em "Enviar via WhatsApp", você será redirecionado ao nosso WhatsApp com sua mensagem preenchida. Responderemos rapidamente!
          </span>
        </p>
      </div>
    </motion.form>
  );
};

export default WhatsAppContactForm;
