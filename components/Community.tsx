
import React from 'react';
import { Send, Twitter, Github, MessageSquare } from 'lucide-react';

export const Community: React.FC = () => {
  return (
    <section className="py-24 px-4 overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-4xl lg:text-6xl font-extrabold mb-8">
            Nestaňte se jen divákem. <br/>
            <span className="text-brand-blue">Tvořte Web3zone s námi.</span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">
            Připojte se k tisícům nadšenců na Discordu a Telegramu. Sdílejte své nápady, získávejte exkluzivní airdropy a učte se od nejlepších v oboru.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <button className="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105">
              <MessageSquare size={20} />
              Discord
            </button>
            <button className="flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105">
              <Send size={20} />
              Telegram
            </button>
            <button className="flex items-center gap-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105">
              <Twitter size={20} />
              Twitter
            </button>
          </div>
        </div>

        <div className="flex-1 relative">
           <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
             <div className="absolute inset-0 bg-brand-blue/20 rounded-full animate-pulse-slow"></div>
             <div className="absolute inset-4 bg-brand-orange/20 rounded-full animate-pulse-slow delay-75"></div>
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 rotate-12 flex flex-col justify-between border border-slate-200 dark:border-slate-700">
                   <div className="flex justify-between items-start">
                     <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">🤝</div>
                     <span className="text-xs text-slate-400 font-bold">INVITE</span>
                   </div>
                   <div className="space-y-2">
                     <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div>
                     <div className="h-2 w-3/4 bg-slate-100 dark:bg-slate-700 rounded"></div>
                   </div>
                   <button className="w-full bg-brand-blue text-white py-2 rounded-lg text-xs font-bold">PŘIJMOUT POZVÁNKU</button>
                </div>
             </div>
             
             {/* Small avatars around */}
             <div className="absolute top-10 right-10 w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg">
               <img src="https://picsum.photos/seed/p1/100/100" alt="avatar" />
             </div>
             <div className="absolute bottom-10 left-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg">
               <img src="https://picsum.photos/seed/p2/100/100" alt="avatar" />
             </div>
             <div className="absolute top-1/2 -left-4 w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg">
               <img src="https://picsum.photos/seed/p3/100/100" alt="avatar" />
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};
