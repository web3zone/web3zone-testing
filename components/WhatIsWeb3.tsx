
import React from 'react';
import { 
  ShieldCheck, 
  Coins, 
  Users2, 
  Key, 
  Smartphone, 
  Globe2, 
  Zap, 
  ArrowRight,
  Database,
  History,
  Fingerprint
} from 'lucide-react';

const EVOLUTION_DATA = [
  {
    version: "Web 1.0",
    label: "Read",
    period: "1990 - 2004",
    desc: "Statické webové stránky, které byly jako digitální noviny. Uživatelé byli pouze konzumenti.",
    icon: <History className="text-slate-400" />,
    color: "bg-slate-500/10 border-slate-500/20"
  },
  {
    version: "Web 2.0",
    label: "Read-Write",
    period: "2004 - Současnost",
    desc: "Interaktivní web, sociální sítě a cloud. Firmy jako Google a Meta vlastní naše data.",
    icon: <Smartphone className="text-brand-blue" />,
    color: "bg-brand-blue/10 border-brand-blue/20"
  },
  {
    version: "Web 3.0",
    label: "Read-Write-Own",
    period: "Budoucnost",
    desc: "Decentralizovaný web postavený na blockchainu. Uživatelé vlastní svá data i digitální aktiva.",
    icon: <Globe2 className="text-brand-orange" />,
    color: "bg-brand-orange/10 border-brand-orange/20"
  }
];

const PILLARS = [
  {
    title: "Decentralizace",
    icon: <Database className="text-brand-blue" />,
    text: "Žádná centrální autorita neřídí síť. Data jsou uložena napříč tisíci uzly."
  },
  {
    title: "Digitální Vlastnictví",
    icon: <Key className="text-brand-orange" />,
    text: "Díky NFT a tokenům skutečně vlastníte své digitální položky nezávisle na platformách."
  },
  {
    title: "Důvěryhodnost",
    icon: <ShieldCheck className="text-brand-blue" />,
    text: "Místo důvěry v instituce důvěřujete matematice a transparentnímu kódu (smart kontrakty)."
  },
  {
    title: "Identita (DID)",
    icon: <Fingerprint className="text-brand-orange" />,
    text: "Jedna identita pro celý internet bez nutnosti zakládat účty u každé služby zvlášť."
  }
];

export const WhatIsWeb3: React.FC = () => {
  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20">
            <Zap size={16} />
            <span>Průvodce budoucností</span>
          </div>
          <h1 className="text-5xl lg:text-8xl font-black mb-8">
            Co je to <span className="text-brand-blue">Web3?</span>
          </h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            Web3 představuje další generaci internetu, kde moc přechází z rukou velkých technologických korporací zpět k uživatelům. Je to internet postavený na svobodě, soukromí a skutečném vlastnictví.
          </p>
        </div>

        {/* Evolution Timeline */}
        <div className="grid lg:grid-cols-3 gap-8 mb-32">
          {EVOLUTION_DATA.map((item, idx) => (
            <div 
              key={idx}
              className={`p-10 rounded-[3rem] border-2 flex flex-col items-center text-center group transition-all duration-500 hover:-translate-y-4 ${item.color}`}
            >
              <div className="w-20 h-20 rounded-2xl bg-white dark:bg-slate-800 shadow-xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="font-black text-xs uppercase tracking-[0.3em] mb-2 opacity-50">{item.period}</div>
              <h3 className="text-3xl font-black mb-1">{item.version}</h3>
              <div className="text-brand-orange font-bold text-sm mb-6">{item.label}</div>
              <p className="text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* The Pillars of Web3 */}
        <div className="bg-slate-100 dark:bg-slate-900/50 rounded-[4rem] p-12 lg:p-24 border border-slate-200 dark:border-slate-800">
           <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-4xl lg:text-5xl font-black mb-8">
                  Hlavní pilíře <br/>
                  <span className="text-brand-orange">Webu 3.0</span>
                </h2>
                <div className="space-y-10">
                  {PILLARS.map((pillar, idx) => (
                    <div key={idx} className="flex gap-6 group">
                      <div className="w-14 h-14 shrink-0 rounded-2xl bg-white dark:bg-slate-800 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        {pillar.icon}
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-2">{pillar.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 font-medium">{pillar.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
             </div>

             <div className="relative">
                <div className="relative z-10 p-2 bg-gradient-to-br from-brand-orange to-brand-blue rounded-[3.5rem] shadow-2xl overflow-hidden group">
                   <div className="bg-white dark:bg-brand-dark rounded-[3.2rem] p-10">
                      <div className="flex justify-between items-center mb-10">
                         <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-400"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                           <div className="w-3 h-3 rounded-full bg-green-400"></div>
                         </div>
                         <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">Decentralized Console</div>
                      </div>
                      
                      <div className="font-mono text-sm space-y-4 text-brand-blue">
                         <div className="flex gap-3">
                           <span className="text-brand-orange">$</span>
                           <span>connecting to blockchain...</span>
                         </div>
                         <div className="flex gap-3 text-slate-400">
                           <span className="text-brand-orange">$</span>
                           <span>[OK] Wallet connected (0x4f...9e)</span>
                         </div>
                         <div className="flex gap-3">
                           <span className="text-brand-orange">$</span>
                           <span className="animate-pulse">waiting for confirmation...</span>
                         </div>
                         <div className="h-40 bg-slate-50 dark:bg-slate-800/50 rounded-2xl flex items-center justify-center border border-dashed border-slate-200 dark:border-slate-700">
                            <Coins size={48} className="text-brand-orange animate-bounce" />
                         </div>
                      </div>
                   </div>
                </div>
                {/* Background decorative elements */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-blue/20 blur-[60px] rounded-full"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-orange/20 blur-[60px] rounded-full"></div>
             </div>
           </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 text-center py-20 bg-brand-dark rounded-[3rem] relative overflow-hidden">
           <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-brand-blue/10 opacity-50"></div>
           <div className="relative z-10 px-6">
              <h2 className="text-4xl lg:text-6xl font-black text-white mb-8">
                Jste připraveni na <span className="text-brand-orange">změnu?</span>
              </h2>
              <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
                Svět Web3 se mění každým dnem. Sledujte náš blog pro nejnovější návody a analýzy, které vám pomohou držet krok.
              </p>
              <button className="px-10 py-5 bg-white text-brand-dark rounded-2xl font-black uppercase text-sm tracking-widest hover:bg-brand-orange hover:text-white transition-all shadow-2xl flex items-center gap-4 mx-auto group">
                Chci se dozvědět více na blogu
                <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </button>
           </div>
        </div>

      </div>
    </div>
  );
};
