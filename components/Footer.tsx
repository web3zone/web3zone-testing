
import React from 'react';
import { Send, Twitter, Github, Mail } from 'lucide-react';
import { Logo } from './Navbar';
import { PageType } from '../App';

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="pt-32 pb-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-brand-light dark:bg-brand-dark overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div className="space-y-8">
            <button onClick={() => onNavigate('home')}>
              <Logo className="h-16" />
            </button>
            <p className="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-medium">
              První ucelená česká platforma zaměřená na vzdělávání a rozvoj v decentralizovaném světě Web 3.0.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-3.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl hover:text-brand-orange hover:shadow-xl transition-all"><Twitter size={20} /></a>
              <a href="#" className="p-3.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl hover:text-brand-blue hover:shadow-xl transition-all"><Send size={20} /></a>
              <a href="#" className="p-3.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl hover:text-brand-orange hover:shadow-xl transition-all"><Github size={20} /></a>
            </div>
          </div>

          <div className="lg:pl-10">
            <h4 className="font-black text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500 mb-10">Platforma</h4>
            <ul className="space-y-6 text-slate-600 dark:text-slate-300 font-bold">
              <li><button onClick={() => onNavigate('home')} className="hover:text-brand-orange transition-colors">Vzdělávání</button></li>
              <li><button onClick={() => onNavigate('technologies')} className="hover:text-brand-orange transition-colors">Technologie</button></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">DAO Hlasování</a></li>
              <li><a href="#" className="hover:text-brand-orange transition-colors">Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500 mb-10">O nás</h4>
            <ul className="space-y-6 text-slate-600 dark:text-slate-300 font-bold">
              <li><a href="#" className="hover:text-brand-blue transition-colors">Náš tým</a></li>
              <li><button onClick={() => onNavigate('blog')} className="hover:text-brand-blue transition-colors">Blog</button></li>
              <li><a href="#" className="hover:text-brand-blue transition-colors">Zprávy</a></li>
              <li><button onClick={() => onNavigate('contact')} className="hover:text-brand-blue transition-colors">Kontakt</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500 mb-10">Newsletter</h4>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
              Neutečou vám žádné airdropy ani novinky ze světa Web3.
            </p>
            <form className="relative group" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Váš email"
                className="w-full bg-slate-200/50 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-blue rounded-3xl py-6 pl-8 pr-16 outline-none transition-all font-bold placeholder:text-slate-400"
              />
              <button className="absolute right-3 top-3 p-4 bg-brand-orange text-white rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-brand-orange/30">
                <Mail size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-200 dark:border-slate-800 gap-10">
          <div className="text-slate-400 dark:text-slate-500 text-[11px] font-black uppercase tracking-[0.45em]">
            © {new Date().getFullYear()} Web3zone. All Rights Reserved.
          </div>
          <div className="flex gap-12 text-[11px] font-black uppercase tracking-[0.45em] text-slate-400 dark:text-slate-500">
            <a href="#" className="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
