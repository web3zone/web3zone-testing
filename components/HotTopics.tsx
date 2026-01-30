
import React from 'react';
import { Flame, TrendingUp, Zap, MessageSquare, ArrowUpRight } from 'lucide-react';

const TRENDING_TOPICS = [
  {
    tag: "Airdrop",
    title: "EigenLayer: Poslední šance na kvalifikaci pro Season 2?",
    desc: "Vše, co potřebujete vědět o restakingu a jak maximalizovat své body před koncem období.",
    engagement: "4.2k",
    trend: "up"
  },
  {
    tag: "AI Agents",
    title: "Fetch.ai a SingularityNET: Fúze superinteligence je tady",
    desc: "Jak propojení těchto gigantů změní pole decentralizované umělé inteligence v roce 2024.",
    engagement: "2.8k",
    trend: "up"
  },
  {
    tag: "L2 Networks",
    title: "Base překonává Arbitrum v denní aktivitě",
    desc: "Ekosystém od Coinbase roste neuvěřitelným tempem. Které protokoly na Base sledovat?",
    engagement: "5.1k",
    trend: "up"
  },
  {
    tag: "Gaming",
    title: "Parallel: TCG, který skutečně vrací vlastnictví hráčům",
    desc: "Proč je Parallel považován za zlatý standard Web3 gamingu a co čekat od bety.",
    engagement: "1.9k",
    trend: "stable"
  }
];

export const HotTopics: React.FC = () => {
  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row justify-between items-end gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20">
              <Flame size={16} className="animate-pulse" />
              <span>Právě hýbe světem</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-black mb-6">Hot <span className="text-brand-blue">Topics</span></h1>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
              Nejžhavější trendy, spekulace a diskuze z hlubin Web3 ekosystému. Buďte o krok napřed před hlavním proudem.
            </p>
          </div>
          
          <div className="flex gap-4">
             <div className="px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-2xl font-bold flex items-center gap-2">
               <TrendingUp size={18} className="text-brand-blue" />
               Trendující
             </div>
             <div className="px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-2xl font-bold text-slate-400">
               Nejnovější
             </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {TRENDING_TOPICS.map((topic, i) => (
            <div key={i} className="group bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 hover:border-brand-orange transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/5 relative overflow-hidden">
               {/* Decorative glow */}
               <div className="absolute -top-24 -right-24 w-48 h-48 bg-brand-orange/5 blur-[60px] rounded-full group-hover:bg-brand-orange/10 transition-colors"></div>
               
               <div className="flex justify-between items-start mb-8">
                 <span className="px-4 py-1.5 bg-brand-blue/10 text-brand-blue rounded-xl text-xs font-black uppercase tracking-widest">{topic.tag}</span>
                 <ArrowUpRight size={24} className="text-slate-300 group-hover:text-brand-orange group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
               </div>
               
               <h3 className="text-3xl font-bold mb-4 leading-tight group-hover:text-brand-blue transition-colors">{topic.title}</h3>
               <p className="text-slate-500 dark:text-slate-400 font-medium mb-10 leading-relaxed">{topic.desc}</p>
               
               <div className="flex items-center justify-between border-t border-slate-100 dark:border-slate-800 pt-8">
                 <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-400 text-sm font-bold">
                      <MessageSquare size={16} />
                      {topic.engagement} diskuzí
                    </div>
                    <div className="flex items-center gap-2 text-brand-orange text-sm font-bold">
                      <Zap size={16} />
                      High Hype
                    </div>
                 </div>
                 <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center">
                   <div className="w-2 h-2 rounded-full bg-green-500 animate-ping"></div>
                 </div>
               </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-100 dark:bg-slate-900/50 rounded-[3rem] border-2 border-dashed border-slate-300 dark:border-slate-700 text-center">
          <p className="text-slate-500 font-bold text-lg mb-6">Máte tip na téma, které bychom měli pokrýt?</p>
          <button className="px-8 py-4 bg-brand-dark text-white dark:bg-white dark:text-brand-dark rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-all">Navrhnout téma</button>
        </div>

      </div>
    </div>
  );
};
