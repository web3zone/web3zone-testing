
import React from 'react';
import { Layout, Cpu, Users, BarChart3, Lock, Zap } from 'lucide-react';

const FEATURE_DATA = [
  {
    title: "Web3 Dashboard",
    desc: "Mějte přehled o všech svých peněženkách a aktivech na jednom místě s intuitivním rozhraním.",
    icon: <Layout className="text-brand-orange" size={28} />,
    color: "orange"
  },
  {
    title: "Nástroje pro Vývojáře",
    desc: "Integrujte naše API a SDK do svých projektů během několika minut. Rychle a bezpečně.",
    icon: <Cpu className="text-brand-blue" size={28} />,
    color: "blue"
  },
  {
    title: "Komunitní DAO",
    desc: "Hlasujte o budoucím směřování platformy. Na Web3zone rozhodují uživatelé, ne korporace.",
    icon: <Users className="text-brand-orange" size={28} />,
    color: "orange"
  },
  {
    title: "Analýza Trhu",
    desc: "Získejte real-time data z řetězce (on-chain) zpracovaná do přehledných grafů a predikcí.",
    icon: <BarChart3 className="text-brand-blue" size={28} />,
    color: "blue"
  },
  {
    title: "Maximální Bezpečí",
    desc: "Vaše privátní klíče nikdy neopouštějí vaše zařízení. Non-custodial řešení bez kompromisů.",
    icon: <Lock className="text-brand-orange" size={28} />,
    color: "orange"
  },
  {
    title: "Rychlé Transakce",
    desc: "Optimalizované routování přes L2 sítě pro minimální poplatky a bleskovou rychlost.",
    icon: <Zap className="text-brand-blue" size={28} />,
    color: "blue"
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-slate-100/30 dark:bg-[#080B14]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">Proč si vybrat nás?</h2>
          <p className="text-4xl lg:text-5xl font-extrabold mb-6">Nástroje pro digitální suverenitu</p>
          <div className="w-24 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURE_DATA.map((feature, idx) => (
            <div 
              key={idx}
              className="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-blue transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color === 'orange' ? 'bg-brand-orange/10' : 'bg-brand-blue/10'}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">{feature.title}</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};