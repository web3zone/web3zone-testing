
import React, { useState } from 'react';
import { 
  Brain, 
  Database, 
  ShieldAlert, 
  UserRoundCheck, 
  Bot, 
  Zap, 
  Glasses, 
  Link as LinkIcon,
  ChevronRight,
  Sparkles,
  Cpu
} from 'lucide-react';

interface TechNode {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: 'orange' | 'blue';
  description: string;
  details: string[];
  // Relative positions for the "map" look, adjusted to avoid clipping
  x: string;
  y: string;
}

const TECH_DATA: TechNode[] = [
  {
    id: 'ai',
    name: 'Umělá inteligence',
    icon: <Brain size={20} />,
    color: 'orange',
    x: '22%', y: '28%',
    description: 'Nervový systém moderního digitálního světa.',
    details: ['Generativní modely', 'On-chain analýza', 'Automatizace DAO', 'LLM integrace']
  },
  {
    id: 'data',
    name: 'Datacentra',
    icon: <Database size={20} />,
    color: 'blue',
    x: '50%', y: '18%',
    description: 'Infrastruktura pro neomezený růst dat.',
    details: ['Edge computing', 'Zelené chlazení', 'IPFS storage', 'High-speed nodes']
  },
  {
    id: 'cyber',
    name: 'Kyberbezpečnost',
    icon: <ShieldAlert size={20} />,
    color: 'orange',
    x: '78%', y: '28%',
    description: 'Neprůstřelná ochrana vašich aktiv.',
    details: ['ZK Proofs', 'MPC technologie', 'Smart Contract Audits', 'Secure ID']
  },
  {
    id: 'humanoids',
    name: 'Humanoidi',
    icon: <UserRoundCheck size={20} />,
    color: 'blue',
    x: '85%', y: '50%',
    description: 'Propojení biologické a digitální inteligence.',
    details: ['Mechanická jemnost', 'Emocionální AI', 'Robotická rozhraní', 'Neural links']
  },
  {
    id: 'robotics',
    name: 'Robotika',
    icon: <Bot size={20} />,
    color: 'orange',
    x: '75%', y: '78%',
    description: 'Fyzická ruka digitální revoluce.',
    details: ['Industry 4.0', 'Autonomní doručení', 'Coboti', 'Mikrorobotika']
  },
  {
    id: 'energy',
    name: 'Energetika',
    icon: <Zap size={20} />,
    color: 'blue',
    x: '50%', y: '85%',
    description: 'Čistá energie pro digitální budoucnost.',
    details: ['Smart Grids', 'Energy Markets', 'Solar mining', 'Battery tech']
  },
  {
    id: 'vr',
    name: 'Virtuální realita',
    icon: <Glasses size={20} />,
    color: 'orange',
    x: '25%', y: '78%',
    description: 'Nová dimenze lidské zkušenosti.',
    details: ['Metaverse', 'VR Training', 'Digital Twins', 'Haptic feedback']
  },
  {
    id: 'blockchain',
    name: 'Blockchain',
    icon: <LinkIcon size={20} />,
    color: 'blue',
    x: '15%', y: '50%',
    description: 'Základní vrstva důvěry a vlastnictví.',
    details: ['DeFi protokoly', 'Tokenizace aktiv', 'DAO governance', 'Digital assets']
  }
];

export const Technologies: React.FC = () => {
  const [activeTech, setActiveTech] = useState<TechNode>(TECH_DATA[0]);

  return (
    <section className="py-24 px-4 min-h-screen relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20">
            <Sparkles size={16} />
            <span>Mapujeme horizonty</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">
            Mapa <span className="text-brand-blue">Technologií</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Objevte klíčové pilíře, na kterých stavíme Web3zone. Každá technologie je propojená částí většího celku.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Dynamic Map Visualization */}
          <div className="lg:col-span-7 h-[500px] lg:h-[700px] relative bg-slate-100/50 dark:bg-slate-900/30 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden group shadow-inner">
            
            {/* SVG Connections Layer */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30">
              <defs>
                <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FF6B00" />
                  <stop offset="100%" stopColor="#00A3FF" />
                </linearGradient>
              </defs>
              {TECH_DATA.map((tech, i) => (
                <line 
                  key={`line-${i}`}
                  x1="50%" y1="50%" 
                  x2={tech.x} y2={tech.y} 
                  stroke="url(#line-grad)" 
                  strokeWidth="2" 
                  strokeDasharray="4 8"
                  className="animate-pulse-slow"
                />
              ))}
            </svg>

            {/* Central Core */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
              <div className="w-20 h-20 lg:w-28 lg:h-28 bg-brand-dark rounded-full border-4 border-brand-orange flex items-center justify-center shadow-2xl shadow-brand-orange/20 animate-pulse">
                <Cpu className="text-brand-orange" size={40} />
              </div>
            </div>

            {/* Tech Nodes */}
            {TECH_DATA.map((tech) => (
              <button
                key={tech.id}
                onClick={() => setActiveTech(tech)}
                style={{ left: tech.x, top: tech.y }}
                className={`
                  absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 transition-all duration-500 z-30
                `}
              >
                {/* Node Icon */}
                <div className={`
                  w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center transition-all duration-500
                  ${activeTech.id === tech.id 
                    ? (tech.color === 'orange' ? 'bg-brand-orange text-white scale-110 shadow-xl shadow-brand-orange/40' : 'bg-brand-blue text-white scale-110 shadow-xl shadow-brand-blue/40') 
                    : 'bg-white dark:bg-slate-800 text-slate-400 shadow-md border border-slate-200 dark:border-slate-700'
                  }
                `}>
                  {tech.icon}
                </div>
                
                {/* Visible Node Label */}
                <div className={`
                  whitespace-nowrap text-[10px] lg:text-[11px] font-black uppercase tracking-widest px-3 py-1.5 rounded-xl transition-all duration-300 backdrop-blur-md
                  ${activeTech.id === tech.id 
                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 scale-105 shadow-lg' 
                    : 'bg-slate-200/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 opacity-80'
                  }
                `}>
                  {tech.name}
                </div>
              </button>
            ))}
          </div>

          {/* Side Info Panel */}
          <div className="lg:col-span-5">
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden transition-all duration-500">
               {/* Background accent */}
               <div className={`absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 pointer-events-none ${activeTech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}`}></div>
               
               <div className="relative z-10">
                 <div className="flex items-center gap-5 mb-8">
                   <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${activeTech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}`}>
                     {activeTech.icon}
                   </div>
                   <div>
                     <h2 className="text-3xl font-black">{activeTech.name}</h2>
                     <div className={`h-1 w-12 mt-1 rounded-full ${activeTech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}`}></div>
                   </div>
                 </div>

                 <p className="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10">
                   {activeTech.description}
                 </p>

                 <div className="space-y-4 mb-12">
                   {activeTech.details.map((detail, idx) => (
                     <div key={idx} className="flex items-center gap-3 group">
                       <div className={`w-2 h-2 rounded-full transition-transform group-hover:scale-150 ${activeTech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}`}></div>
                       <span className="font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">{detail}</span>
                     </div>
                   ))}
                 </div>

                 <button className={`
                   w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group
                   ${activeTech.color === 'orange' ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/20' : 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20'}
                 `}>
                   Více o této technologii
                   <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </div>
            </div>
            
            <div className="mt-8 p-6 bg-slate-100 dark:bg-slate-800/50 rounded-3xl border border-slate-200 dark:border-slate-800 flex items-center gap-4">
               <div className="text-2xl">💡</div>
               <p className="text-sm font-medium text-slate-500 dark:text-slate-400">V mapě jsou nyní viditelné názvy všech klíčových technologií pro snazší orientaci.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
