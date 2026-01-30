
import React from 'react';
import { Calendar, ArrowRight, BookOpen } from 'lucide-react';
import { PageType } from '../App';

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  category: string;
  image: string;
  excerpt: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Budoucnost Etherea po upgradu Dencun",
    date: "14. března 2024",
    category: "Technologie",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3",
    excerpt: "Podrobný pohled na to, jak nejnovější upgrade sítě Ethereum snižuje poplatky na L2 sítích a co to znamená pro běžné uživatele."
  },
  {
    id: 2,
    title: "Jak bezpečně uchovávat své první kryptoměny",
    date: "5. března 2024",
    category: "Návody",
    image: "https://images.unsplash.com/photo-1621416894522-d38a586a9242?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    excerpt: "Bezpečnost je ve Web3 na prvním místě. Naučíme vás rozdíl mezi hot a cold peněženkou a jak se vyhnout běžným scamům."
  },
  {
    id: 3,
    title: "Úvod do světa DeFi: Co jsou to liquidity pooly?",
    date: "28. února 2024",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3",
    excerpt: "Pochopte základy decentralizovaných financí. Vysvětlíme vám, jak fungují automatizovaní tvůrci trhu bez bank."
  },
  {
    id: 4,
    title: "Web 3.0 vs Web 2.0: Hlavní rozdíly, které musíte znát",
    date: "15. února 2024",
    category: "Vzdělávání",
    image: "https://images.unsplash.com/photo-1644088379091-d574269d422f?auto=format&fit=crop&q=80&w=2093&ixlib=rb-4.0.3",
    excerpt: "Internet se mění. Zjistěte, proč je decentralizace důležitá a jak Web3 vrací kontrolu nad daty zpět do rukou uživatelů."
  },
  {
    id: 5,
    title: "Bitcoin Halving 2024: Co očekávat od trhu?",
    date: "2. února 2024",
    category: "Analýza",
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3",
    excerpt: "Příští halving Bitcoinu se blíží. Podíváme se na historické souvislosti a co by tato událost mohla znamenat pro cyklus."
  },
  {
    id: 6,
    title: "AI a Blockchain: Perfektní symbióza pro rok 2024",
    date: "20. ledna 2024",
    category: "Inovace",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2232&ixlib=rb-4.0.3",
    excerpt: "Dva největší technologické trendy současnosti se propojují. Jak blockchain řeší ověřitelnost AI modelů?"
  }
];

interface BlogProps {
  onNavigate?: (page: PageType) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <section className="py-24 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-blue/20">
            <BookOpen size={16} />
            <span>Znalosti jsou moc</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold mb-8">
            Náš <span className="text-brand-orange">Blog</span>
          </h1>
          <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">
            Aktuální zprávy, hloubkové analýzy a praktické návody ze světa Web 3.0, DeFi a kryptoměn. Vše přehledně na jednom místě.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOG_POSTS.map((post) => (
            <article 
              key={post.id}
              className="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-brand-orange transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-brand-orange/5"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-6 left-6">
                  <span className="bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg shadow-brand-orange/20">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-4 font-bold">
                  <Calendar size={14} className="text-brand-blue" />
                  {post.date}
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-1 line-clamp-3">
                  {post.excerpt}
                </p>

                <button 
                  onClick={() => post.id === 1 ? onNavigate?.('blog-detail') : null}
                  className="flex items-center gap-2 text-brand-blue font-black uppercase text-xs tracking-widest hover:gap-4 transition-all"
                >
                  Přečíst více
                  <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 text-center">
          <button className="px-10 py-5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl font-bold hover:bg-brand-blue hover:text-white transition-all">
            Načíst starší články
          </button>
        </div>

      </div>
    </section>
  );
};
