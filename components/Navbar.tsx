
import React from 'react';
import { Sun, Moon, Menu } from 'lucide-react';
import { PageType } from '../App';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  onNavigate: (page: PageType) => void;
  activePage: PageType;
}

export const Logo: React.FC<{ className?: string }> = ({ className = "h-14" }) => (
  <div className={`flex items-center gap-4 ${className}`}>
    <div className="relative h-full aspect-square">
      <svg 
        viewBox="0 0 100 115" 
        className="h-full w-auto drop-shadow-md" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logo-gradient" x1="50" y1="0" x2="50" y2="115" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#FF9100" />
            <stop offset="100%" stopColor="#D64100" />
          </linearGradient>
          <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer>
              <feFuncA type="linear" slope="0.3" />
            </feComponentTransfer>
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path 
          d="M10 38.5L50 15L90 38.5V54L50 30.5L10 54V38.5ZM10 61L50 37.5L90 61V76.5L50 53L10 76.5V61ZM10 83.5L50 60L90 83.5V99L50 115L10 92V83.5Z" 
          fill="url(#logo-gradient)" 
          filter="url(#logo-shadow)"
        />
        <path d="M90 38.5V54M10 61V76.5" stroke="url(#logo-gradient)" strokeWidth="0.1" />
      </svg>
    </div>
    
    <div className="flex flex-col -space-y-2 justify-center select-none">
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#FF9100] to-[#F05100] font-[900] text-[32px] leading-[1] tracking-tight">WEB3</span>
      <span className="text-transparent bg-clip-text bg-gradient-to-b from-[#10A0FF] to-[#0070F0] font-[800] text-[28px] leading-[1] tracking-tight">zone</span>
    </div>
  </div>
);

export const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleTheme, onNavigate, activePage }) => {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-brand-light/80 dark:bg-brand-dark/80 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <button onClick={() => onNavigate('home')} className="hover:opacity-90 transition-opacity flex items-center h-full py-4">
            <Logo className="h-16" />
          </button>

          <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
            <button onClick={() => onNavigate('home')} className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${activePage === 'home' ? 'text-brand-orange' : 'text-slate-500 hover:text-brand-orange'}`}>domů</button>
            <button onClick={() => onNavigate('blog')} className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${activePage === 'blog' ? 'text-brand-blue' : 'text-slate-500 hover:text-brand-blue'}`}>blog</button>
            <button onClick={() => onNavigate('hot-topics')} className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${activePage === 'hot-topics' ? 'text-brand-orange' : 'text-slate-500 hover:text-brand-orange'}`}>hot topics</button>
            <button onClick={() => onNavigate('technologies')} className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${activePage === 'technologies' ? 'text-brand-blue' : 'text-slate-500 hover:text-brand-blue'}`}>technologie</button>
            <button onClick={() => onNavigate('about')} className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${activePage === 'about' ? 'text-brand-orange' : 'text-slate-500 hover:text-brand-orange'}`}>o nás</button>
            <button onClick={() => onNavigate('contact')} className={`text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${activePage === 'contact' ? 'text-brand-blue' : 'text-slate-500 hover:text-brand-blue'}`}>kontakt</button>
          </div>

          <div className="flex items-center gap-5">
            <button 
              onClick={toggleTheme}
              className="p-3.5 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:scale-110 active:scale-95 transition-all shadow-sm"
              aria-label="Toggle Theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="md:hidden p-2 text-slate-600 dark:text-slate-300">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
