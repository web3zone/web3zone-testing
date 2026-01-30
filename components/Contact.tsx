
import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (formState === 'success') {
    return (
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="max-w-md w-full text-center space-y-8 animate-float">
          <div className="w-24 h-24 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 size={48} className="text-brand-blue" />
          </div>
          <h2 className="text-4xl font-extrabold">Zpráva odeslána!</h2>
          <p className="text-slate-500 dark:text-slate-400 text-lg">
            Děkujeme za váš zájem. Náš tým se vám ozve co nejdříve na uvedený e-mail.
          </p>
          <button 
            onClick={() => setFormState('idle')}
            className="px-8 py-4 bg-brand-orange text-white rounded-2xl font-bold shadow-xl shadow-brand-orange/20 hover:bg-orange-600 transition-all"
          >
            Poslat další zprávu
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          <div className="space-y-12">
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">
                Pojďme se 
                <span className="block text-brand-blue">spojit.</span>
              </h1>
              <p className="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">
                Máte dotaz k Web3, hledáte partnerství nebo potřebujete poradit s přechodem vaší firmy do decentralizovaného světa? Jsme tu pro vás.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:scale-110 transition-transform">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">E-mail</h4>
                  <p className="text-slate-500 dark:text-slate-400">info@web3zone.cz</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Kanceláře</h4>
                  <p className="text-slate-500 dark:text-slate-400">Pravá 12, Praha 7<br/>Česká republika</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-14 h-14 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 flex items-center justify-center text-slate-400 shrink-0 group-hover:scale-110 transition-transform">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Telefon</h4>
                  <p className="text-slate-500 dark:text-slate-400">+420 777 123 456</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Vaše jméno</label>
                  <input 
                    required
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    type="text" 
                    placeholder="Jan Novák"
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-orange rounded-2xl py-4 px-6 outline-none transition-all font-medium"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Váš e-mail</label>
                  <input 
                    required
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email" 
                    placeholder="jan@priklad.cz"
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-orange rounded-2xl py-4 px-6 outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Předmět</label>
                <input 
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  type="text" 
                  placeholder="Jak vám můžeme pomoci?"
                  className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-blue rounded-2xl py-4 px-6 outline-none transition-all font-medium"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-black uppercase tracking-widest text-slate-400 px-2">Zpráva</label>
                <textarea 
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Napište nám podrobnosti..."
                  className="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-blue rounded-2xl py-4 px-6 outline-none transition-all font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={formState === 'submitting'}
                className="w-full bg-brand-orange hover:bg-orange-600 disabled:bg-slate-400 text-white rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-orange/20 group"
              >
                {formState === 'submitting' ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Odeslat zprávu
                    <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
