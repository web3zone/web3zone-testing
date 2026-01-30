
import React, { useEffect } from 'react';
import { Calendar, ChevronLeft, Share2, MessageCircle, Clock, Tag, Twitter } from 'lucide-react';
import { PageType } from '../App';

interface BlogDetailProps {
  onNavigate: (page: PageType) => void;
  isDarkMode?: boolean;
}

export const BlogDetail: React.FC<BlogDetailProps> = ({ onNavigate, isDarkMode }) => {
  // Trigger twitter widgets to re-scan the DOM for the new blockquote
  useEffect(() => {
    // @ts-ignore
    if (window.twttr && window.twttr.widgets) {
      // @ts-ignore
      window.twttr.widgets.load();
    }
  }, []);

  return (
    <div className="py-24 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button & Actions */}
        <div className="flex justify-between items-center mb-12">
          <button 
            onClick={() => onNavigate('blog')}
            className="flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors font-bold uppercase text-xs tracking-widest"
          >
            <ChevronLeft size={20} />
            Zpět na blog
          </button>
          
          <div className="flex gap-4">
            <button className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:text-brand-blue transition-all"><Share2 size={18} /></button>
            <button className="p-3 bg-slate-100 dark:bg-slate-800 rounded-xl hover:text-brand-orange transition-all"><MessageCircle size={18} /></button>
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-6 border border-brand-orange/20">
            <Tag size={14} />
            <span>Technologie</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-black mb-8 leading-tight">
            Budoucnost Etherea po upgradu <span className="text-brand-blue">Dencun</span>
          </h1>
          
          <div className="flex flex-wrap items-center gap-8 text-slate-500 font-bold text-sm border-b border-slate-200 dark:border-slate-800 pb-10">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-brand-blue" />
              14. března 2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={18} className="text-brand-orange" />
              8 min čtení
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-brand-blue/20 flex items-center justify-center text-xs">WZ</div>
              Redakce Web3zone
            </div>
          </div>
        </div>

        {/* Article Content */}
        <article className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-medium leading-relaxed space-y-8">
          <p className="text-xl text-slate-900 dark:text-white font-bold mb-10">
            Upgrade Dencun, který proběhl v březnu 2024, představuje nejvýznamnější krok k masové adopci Etherea od doby "The Merge". Jeho hlavním cílem je vyřešit největší bolest uživatelů – vysoké poplatky.
          </p>

          <p>
            Středobodem tohoto upgradu je EIP-4844, známý jako "Proto-Danksharding". Tato technologie zavádí tzv. "blobs" (binary large objects), což je nový způsob, jakým L2 sítě (jako Arbitrum, Optimism nebo Base) ukládají data na hlavní řetězec Etherea. Namísto drahého "calldata" nyní sítě využívají tyto dočasné datové bloky, které po určité době zmizí.
          </p>

          <div className="my-16 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] overflow-hidden">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                <span className="text-3xl">🎙️</span>
                Podcast: Hloubková analýza upgradu
              </h3>
              <p className="text-slate-500 mb-8">Poslechněte si náš speciální díl podcastu, kde rozebíráme technické detaily a dopady na trh.</p>
              
              {/* YouTube Embed Container */}
              <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/RnMgWgMA1kM" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          <h3 className="text-2xl font-black text-slate-900 dark:text-white">Co to znamená pro běžného uživatele?</h3>
          <p>
            Pro koncového uživatele je výsledek okamžitý a drastický. Poplatky na L2 sítích klesly o více než 90 %. Swap na Uniswapu přes síť Base, který dříve stál 1-2 dolary, nyní vyjde na zlomky centů. To otevírá dveře pro aplikace, které byly dříve ekonomicky nemyslitelné – od mikroplateb v gamingu až po decentralizované sociální sítě.
          </p>

          <div className="my-16 flex flex-col items-center">
            <div className="w-full max-w-xl p-8 bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-[3rem] relative overflow-hidden">
              <div className="flex items-center gap-3 mb-6">
                <Twitter className="text-brand-blue" size={24} />
                <span className="font-black uppercase tracking-widest text-xs text-slate-400">Pohled z komunity</span>
              </div>
              
              {/* Twitter Embed */}
              <div className="flex justify-center min-h-[250px]">
                <blockquote className="twitter-tweet" data-theme={isDarkMode ? "dark" : "light"}>
                  <a href="https://x.com/Kam_Investovat/status/2017127940606103934?s=20"></a>
                </blockquote>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 my-12">
            <div className="p-8 bg-brand-orange/5 border border-brand-orange/20 rounded-3xl">
              <h4 className="font-bold text-brand-orange mb-3">Výhody</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Extrémně levné transakce na L2</li>
                <li>Větší propustnost celé sítě</li>
                <li>Lepší škálovatelnost pro firmy</li>
              </ul>
            </div>
            <div className="p-8 bg-brand-blue/5 border border-brand-blue/20 rounded-3xl">
              <h4 className="font-bold text-brand-blue mb-3">Výzvy</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Potřeba aktualizace všech L2 protokolů</li>
                <li>Krátkodobé snížení pálení ETH</li>
                <li>Komplexita pro nové vývojáře</li>
              </ul>
            </div>
          </div>

          <p>
            Dencun není koncem cesty, ale pouze začátkem nové éry. Ethereum se definitivně stává "settlement vrstvou" pro tisíce dalších sítí, které na něm budou stavět. Budoucnost je v modularitě a Dencun je základním kamenem tohoto nového světa.
          </p>
        </article>

        {/* Author Bio */}
        <div className="mt-24 p-10 bg-slate-100 dark:bg-slate-900/50 rounded-[3rem] border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-orange to-brand-blue flex items-center justify-center text-3xl shrink-0 text-white font-black">WZ</div>
          <div className="text-center md:text-left">
            <h4 className="text-xl font-black mb-2">Redakce Web3zone</h4>
            <p className="text-slate-500 dark:text-slate-400">Tým odborníků na blockchain, DeFi a kryptoměny. Naším cílem je přinášet ty nejsrozumitelnější informace o složitých technologiích.</p>
          </div>
        </div>

      </div>
    </div>
  );
};