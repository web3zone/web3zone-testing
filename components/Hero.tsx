
import React from 'react';
import { ArrowRight, Zap, ExternalLink } from 'lucide-react';
import { PageType } from '../App';
import { BLOG_POSTS } from './Blog';

interface HeroProps {
  onNavigate?: (page: PageType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const latestPost = BLOG_POSTS[0];

  return (
    <section className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        
        <div className="z-10">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20">
            <Zap size={16} />
            <span>Nová éra internetu přichází</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
            Vaše zóna Web3 & technologických novinek
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-brand-blue">
              na jednom místě.
            </span>
          </h1>
          
          <p className="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            Přechod z Webu2.0 na Web3.0 již probíhá a v příštích letech bude postupně zrychlovat a přetvářet naši digitální identitu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onNavigate?.('what-is-web3')}
              className="px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-xl shadow-brand-orange/20 group w-full sm:w-auto"
            >
              Co je to Web3?
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="relative">
          {/* Abstract 3D/Geometric visual */}
          <div className="relative z-10 animate-float">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Hexagon Shape matching logo style */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-blue rounded-[3rem] rotate-45 opacity-20 blur-2xl animate-spin-slow"></div>
              
              <div className="relative z-20 w-full h-full bg-slate-100 dark:bg-[#0A0D14] rounded-[2.5rem] border border-white/20 dark:border-slate-800 p-8 shadow-2xl backdrop-blur-3xl overflow-hidden group">
                
                {/* Content Box mimicking the provided image style */}
                <div className="h-full flex flex-col items-center justify-center relative">
                  
                  {/* Floating labels mimicking the image */}
                  <div className="absolute top-0 right-0 p-4 bg-brand-orange/10 dark:bg-brand-orange/5 border border-brand-orange/20 rounded-2xl backdrop-blur-md z-30 transition-transform group-hover:scale-105">
                    <div className="text-brand-orange font-bold text-[10px] uppercase tracking-widest mb-1">POSLEDNÍ AKTUALITA</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">#{latestPost.id.toString().padStart(4, '0')}</div>
                  </div>
                  
                  <div className="absolute bottom-10 left-0 p-4 bg-brand-blue/10 dark:bg-brand-blue/5 border border-brand-blue/20 rounded-2xl backdrop-blur-md z-30 transition-transform group-hover:scale-105">
                    <div className="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-1">KATEGORIE</div>
                    <div className="text-xl font-black text-slate-900 dark:text-white">{latestPost.category.toUpperCase()}</div>
                  </div>

                  {/* Dynamic Image with Progress-like Ring */}
                  <div className="relative w-64 h-64 mb-10">
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle
                        cx="50%" cy="50%" r="48%"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="8"
                        className="text-slate-200 dark:text-slate-800"
                      />
                      <circle
                        cx="50%" cy="50%" r="48%"
                        fill="none"
                        stroke="url(#hero-ring-grad)"
                        strokeWidth="8"
                        strokeDasharray="301.59"
                        strokeDashoffset="75"
                        strokeLinecap="round"
                        className="animate-pulse"
                      />
                      <defs>
                        <linearGradient id="hero-ring-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#FF6B00" />
                          <stop offset="100%" stopColor="#00A3FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                    
                    <div className="absolute inset-[15%] rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <img 
                        src={latestPost.image} 
                        alt="latest blog" 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="text-center px-4">
                    <h3 className="text-2xl lg:text-3xl font-black mb-3 text-slate-900 dark:text-white line-clamp-1">{latestPost.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 line-clamp-2 max-w-xs mx-auto">
                      {latestPost.excerpt}
                    </p>
                    
                    <button 
                      onClick={() => onNavigate?.('blog')}
                      className="px-6 py-3 bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white border border-brand-blue/20 rounded-xl font-bold text-sm transition-all flex items-center gap-2 mx-auto"
                    >
                      Přečíst článek
                      <ExternalLink size={16} />
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Decorative rings */}
          <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-brand-orange/20 rounded-full animate-ping"></div>
          <div className="absolute -bottom-10 -left-10 w-24 h-24 border-4 border-brand-blue/20 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
