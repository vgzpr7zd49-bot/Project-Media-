
// Recommended Title Tag: Contacto e Orçamentos · Project Media | Fotógrafo de Eventos Porto
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, CheckCircle, Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  dataEvento: string;
  localizacao: string;
  mensagem: string;
}

interface FormErrors {
  nome?: string;
  email?: string;
  dataEvento?: string;
  mensagem?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    tipoEvento: 'Casamento',
    dataEvento: '',
    localizacao: '',
    mensagem: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const minDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 14);
    return date.toISOString().split('T')[0];
  };

  const validate = (name: string, value: string) => {
    let error = '';
    if (name === 'nome' && !value.trim()) {
      error = 'O nome completo é obrigatório.';
    }
    if (name === 'email') {
      if (!value.trim()) {
        error = 'O email é obrigatório.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = 'Email inválido.';
      }
    }
    if (name === 'dataEvento') {
      const selectedDate = new Date(value);
      const minAllowed = new Date();
      minAllowed.setDate(minAllowed.getDate() + 14);
      if (!value) {
        error = 'A data do evento é obrigatória.';
      } else if (selectedDate < minAllowed) {
        error = 'A data deve ser pelo menos 14 dias a partir de hoje.';
      }
    }
    if (name === 'mensagem') {
      if (!value.trim()) {
        error = 'A mensagem é obrigatória.';
      } else if (value.length < 50) {
        error = 'Mínimo 50 caracteres.';
      }
    }
    return error;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    const error = validate(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: FormErrors = {};
    Object.keys(formData).forEach(key => {
      const k = key as keyof FormData;
      const error = validate(k, formData[k]);
      if (error) newErrors[k as keyof FormErrors] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        tipoEvento: 'Casamento',
        dataEvento: '',
        localizacao: '',
        mensagem: '',
      });
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20 bg-black min-h-screen font-['Poppins']">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-8 text-white">Pedido de Orçamento</h2>
            
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-zinc-900/50 border border-green-500/30 p-12 rounded-2xl flex flex-col items-center text-center space-y-6"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <CheckCircle size={80} className="text-green-500" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-white">Mensagem enviada.</h3>
                  <p className="text-zinc-400">Responderemos em breve.</p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-sm uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
                  >
                    Enviar outro pedido
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Nome Completo *</label>
                      <input 
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        className={`w-full bg-zinc-900/50 border ${errors.nome ? 'border-red-800' : 'border-zinc-800'} rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white`}
                        placeholder="Seu nome"
                      />
                      {errors.nome && <p className="text-red-500 text-xs mt-1">{errors.nome}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Email *</label>
                      <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-zinc-900/50 border ${errors.email ? 'border-red-800' : 'border-zinc-800'} rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white`}
                        placeholder="seu@email.com"
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Telefone</label>
                      <input 
                        type="tel"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white"
                        placeholder="+351 9xx xxx xxx"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Tipo de Evento</label>
                      <select 
                        name="tipoEvento"
                        value={formData.tipoEvento}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white appearance-none"
                      >
                        <option value="Casamento">Casamento</option>
                        <option value="Batizado/Aniversário">Batizado/Aniversário</option>
                        <option value="Evento Empresarial">Evento Empresarial</option>
                        <option value="Concerto/Show">Concerto/Show</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Data Prevista *</label>
                      <input 
                        type="date"
                        name="dataEvento"
                        min={minDate()}
                        value={formData.dataEvento}
                        onChange={handleChange}
                        className={`w-full bg-zinc-900/50 border ${errors.dataEvento ? 'border-red-800' : 'border-zinc-800'} rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white [color-scheme:dark]`}
                      />
                      {errors.dataEvento && <p className="text-red-500 text-xs mt-1">{errors.dataEvento}</p>}
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Localização</label>
                      <input 
                        type="text"
                        name="localizacao"
                        value={formData.localizacao}
                        onChange={handleChange}
                        className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white"
                        placeholder="Cidade / Local"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 ml-1">Entre em Contacto *</label>
                    <textarea 
                      name="mensagem"
                      rows={5}
                      value={formData.mensagem}
                      onChange={handleChange}
                      className={`w-full bg-zinc-900/50 border ${errors.mensagem ? 'border-red-800' : 'border-zinc-800'} rounded-lg px-4 py-3 outline-none focus:border-[#FAE8BB] transition-colors text-white resize-none`}
                      placeholder="Conte-nos mais sobre o seu evento (mínimo 50 caracteres)..."
                    ></textarea>
                    <div className="flex justify-between items-center">
                      {errors.mensagem ? (
                        <p className="text-red-500 text-xs">{errors.mensagem}</p>
                      ) : (
                        <p className="text-zinc-600 text-[10px] uppercase tracking-wider">Mínimo 50 caracteres</p>
                      )}
                      <p className={`text-[10px] uppercase tracking-wider ${formData.mensagem.length >= 50 ? 'text-green-500' : 'text-zinc-600'}`}>
                        {formData.mensagem.length} caracteres
                      </p>
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting || !formData.nome || !formData.email || formData.mensagem.length < 50 || Object.values(errors).some(e => e)}
                    className="w-full bg-[#FAE8BB] text-black py-4 rounded-lg font-bold uppercase tracking-[0.2em] text-sm flex items-center justify-center group hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Enviando...' : (
                      <>
                        Enviar Pedido
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Right Column: Info */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-center space-y-12 lg:pl-12"
          >
            <div>
              <p className="text-zinc-500 text-xs uppercase tracking-[0.3em] mb-4">Contacto</p>
              <h1 className="text-4xl md:text-6xl font-serif text-white leading-tight">Vamos criar algo <br /><span className="italic">memorável</span>.</h1>
            </div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-zinc-900 p-3 rounded-full">
                  <Mail className="text-[#FAE8BB]" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Contacto Geral</p>
                  <a href="mailto:geral@projectmediainc.com" className="text-lg text-white hover:text-[#FAE8BB] transition-colors font-medium">geral@projectmediainc.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-zinc-900 p-3 rounded-full">
                  <Phone className="text-[#FAE8BB]" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Telefone</p>
                  <p className="text-lg text-white">+351 912 345 678</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-zinc-900 p-3 rounded-full">
                  <MapPin className="text-[#FAE8BB]" size={20} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-zinc-500 mb-1">Localização</p>
                  <p className="text-lg text-white">Porto, Portugal</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-zinc-900">
              <p className="text-xs uppercase tracking-widest text-zinc-500 mb-6">Redes Sociais</p>
              <div className="flex space-x-6">
                <a href="#" className="text-zinc-400 hover:text-[#FAE8BB] transition-colors">
                  <Instagram size={24} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-[#FAE8BB] transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-zinc-400 hover:text-[#FAE8BB] transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
