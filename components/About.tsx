
import React from 'react';
import { Target, Heart, Rocket, Shield } from 'lucide-react';

const VALUES = [
  {
    icon: <Target className="text-brand-orange" />,
    title: "Vize",
    text: "Demokratizace přístupu k technologiím budoucnosti pro každého Čecha."
  },
  {
    icon: <Shield className="text-brand-blue" />,
    title: "Transparentnost",
    text: "Věříme v otevřený kód a decentralizaci jako základ spravedlivého internetu."
  },
  {
    icon: <Heart className="text-brand-orange" />,
    title: "Komunita",
    text: "Web3zone není jen web, je to prostor pro sdílení a vzájemný růst."
  },
  {
    icon: <Rocket className="text-brand-blue" />,
    title: "Inovace",
    text: "Neustále sledujeme nejnovější trendy a přinášíme je srozumitelně k vám."
  }
];

export const About: React.FC = () => {
  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 className="text-5xl lg:text-8xl font-black mb-8 leading-tight">
              Jsme vaše <span className="text-brand-orange">zóna</span> pro Web3.
            </h1>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10">
              Web3zone vznikl jako odpověď na potřebu kvalitního a srozumitelného obsahu o decentralizovaných technologiích v českém jazyce. Jsme mostem mezi komplexním světem blockchainu a běžným uživatelem.
            </p>
            <div className="flex gap-12">
              <div>
                <div className="text-4xl font-black text-brand-blue mb-1">2023</div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-400">Rok založení</div>
              </div>
              <div>
                <div className="text-4xl font-black text-brand-orange mb-1">10+</div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-400">Expertů v týmu</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-[4rem] animate-pulse-slow"></div>
            <div className="absolute inset-8 bg-slate-200 dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Team" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {VALUES.map((v, i) => (
            <div key={i} className="p-10 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300">
               <div className="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6">
                 {v.icon}
               </div>
               <h3 className="text-xl font-bold mb-3">{v.title}</h3>
               <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="text-center bg-brand-dark rounded-[4rem] py-24 px-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-orange/10 blur-[120px] rounded-full"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-black text-white mb-8">Naše mise je jednoduchá.</h2>
            <p className="text-slate-400 text-lg lg:text-xl font-medium leading-relaxed">
              "Věříme, že budoucnost internetu patří jeho uživatelům. Naším úkolem je poskytnout vám mapu, kompas a odvahu vydat se do světa, kde vy vlastníte svůj čas, data i identitu."
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
