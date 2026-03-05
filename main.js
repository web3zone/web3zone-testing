
import { BLOG_POSTS, FEATURE_DATA, TECH_DATA, AI_MODELS, TECH_NEWS, TRANSLATIONS } from './data.js';

const state = {
    currentPage: 'home',
    isDarkMode: localStorage.getItem('theme') !== 'light',
    isMenuOpen: false,
    activeTech: TECH_DATA['cs'][0],
    language: 'cs'
};

function init() {
    updateTheme();
    
    window.addEventListener('popstate', () => {
        const page = window.location.pathname.replace('/', '') || 'home';
        state.currentPage = page;
        render();
    });

    const initialPage = window.location.pathname.replace('/', '') || 'home';
    state.currentPage = initialPage;
    render();
}

function updateTheme() {
    if (state.isDarkMode) {
        document.documentElement.classList.add('dark');
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', state.isDarkMode ? 'dark' : 'light');
}

function navigateTo(page) {
    state.currentPage = page;
    state.isMenuOpen = false;
    const path = page === 'home' ? '/' : `/${page}`;
    history.pushState(null, '', path);
    window.scrollTo(0, 0);
    render();
}

function toggleTheme() {
    state.isDarkMode = !state.isDarkMode;
    updateTheme();
    render();
}

function toggleMenu() {
    state.isMenuOpen = !state.isMenuOpen;
    render();
}

const Logo = (className = "h-14") => `
  <div class="flex items-center gap-4 ${className}">
    <div class="relative h-full aspect-square">
      <svg viewBox="0 0 100 115" class="h-full w-auto drop-shadow-md" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logo-gradient" x1="50" y1="0" x2="50" y2="115" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stop-color="#FF9100" />
            <stop offset="100%" stop-color="#D64100" />
          </linearGradient>
          <filter id="logo-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur in="SourceAlpha" stdDeviation="2" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feComponentTransfer><feFuncA type="linear" slope="0.3" /></feComponentTransfer>
            <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>
        <path d="M10 38.5L50 15L90 38.5V54L50 30.5L10 54V38.5ZM10 61L50 37.5L90 61V76.5L50 53L10 76.5V61ZM10 83.5L50 60L90 83.5V99L50 115L10 92V83.5Z" fill="url(#logo-gradient)" filter="url(#logo-shadow)" />
      </svg>
    </div>
    <div class="flex flex-col -space-y-2 justify-center select-none">
      <span class="text-transparent bg-clip-text bg-gradient-to-b from-[#FF9100] to-[#F05100] font-[900] text-[32px] leading-[1] tracking-tight">WEB3</span>
      <span class="text-transparent bg-clip-text bg-gradient-to-b from-[#10A0FF] to-[#0070F0] font-[800] text-[28px] leading-[1] tracking-tight">zone</span>
    </div>
  </div>
`;

function renderNavbar() {
    const t = TRANSLATIONS[state.language];
    const menuItems = [
        { id: 'blog', label: 'blog', color: 'blue' },
        { id: 'technologies', label: state.language === 'cs' ? 'technologické novinky' : 'tech news', color: 'blue' },
        { id: 'about', label: t.footer_about.toLowerCase(), color: 'orange' },
        { id: 'contact', label: state.language === 'cs' ? 'kontakt' : 'contact', color: 'blue' },
    ];

    return `
    <nav class="sticky top-0 z-50 w-full backdrop-blur-xl bg-brand-light/80 dark:bg-brand-dark/80 border-b border-slate-200 dark:border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-24">
          <button onclick="window.navigateTo('home')" class="hover:opacity-90 transition-opacity flex items-center h-full py-4">
            ${Logo("h-16")}
          </button>

          <div class="hidden md:flex items-center space-x-8 lg:space-x-12">
            ${menuItems.map(item => `
              <button onclick="window.navigateTo('${item.id}')" class="text-[10px] lg:text-xs font-black uppercase tracking-[0.25em] transition-colors ${state.currentPage === item.id ? (item.color === 'blue' ? 'text-brand-blue' : 'text-brand-orange') : 'text-slate-500 hover:text-brand-orange'}">
                ${item.label}
              </button>
            `).join('')}
          </div>

          <div class="flex items-center gap-2 sm:gap-5">
            <button onclick="window.toggleLanguage()" class="p-3 sm:p-3.5 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:scale-110 active:scale-95 transition-all shadow-sm flex items-center gap-2 group">
              <i data-lucide="languages" class="w-5 h-5 group-hover:text-brand-orange transition-colors"></i>
              <span class="text-[10px] font-black uppercase tracking-widest hidden sm:block">${state.language.toUpperCase()}</span>
            </button>
            <button onclick="window.toggleTheme()" class="p-3 sm:p-3.5 rounded-2xl bg-slate-200/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 hover:scale-110 active:scale-95 transition-all shadow-sm">
              <i data-lucide="${state.isDarkMode ? 'sun' : 'moon'}" class="w-5 h-5"></i>
            </button>
            <button onclick="window.toggleMenu()" class="md:hidden p-3 rounded-2xl bg-brand-orange/10 text-brand-orange transition-all active:scale-90">
              <i data-lucide="${state.isMenuOpen ? 'x' : 'menu'}" class="w-6 h-6"></i>
            </button>
          </div>
        </div>
      </div>

      <div class="absolute top-full left-0 w-full md:hidden bg-white/95 dark:bg-brand-dark/95 backdrop-blur-2xl border-b border-slate-200 dark:border-slate-800 overflow-hidden transition-all duration-500 ease-in-out ${state.isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}">
        <div class="px-6 py-10 flex flex-col gap-6">
          ${menuItems.map(item => `
            <button onclick="window.navigateTo('${item.id}')" class="flex items-center justify-between w-full p-4 rounded-2xl font-black uppercase text-sm tracking-widest transition-all ${state.currentPage === item.id ? 'bg-brand-orange/10 text-brand-orange' : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'}">
              ${item.label}
              <div class="w-2 h-2 rounded-full ${item.color === 'blue' ? 'bg-brand-blue' : 'bg-brand-orange'}"></div>
            </button>
          `).join('')}
        </div>
      </div>
    </nav>
    `;
}

function renderHero() {
    const t = TRANSLATIONS[state.language];
    const latestPost = BLOG_POSTS[state.language][0];
    return `
    <section class="relative pt-16 pb-24 lg:pt-32 lg:pb-40 px-4 overflow-hidden">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div class="z-10">
          <div class="inline-flex items-center gap-2 bg-brand-orange/10 dark:bg-brand-orange/20 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20">
            <i data-lucide="zap" class="w-4 h-4"></i>
            <span>${t.hero_badge}</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold leading-[1.1] mb-8">
            ${t.hero_title.replace('Web3', '<span class="block text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-orange-400 to-brand-blue">Web3</span>')}
          </h1>
          <p class="text-lg lg:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">${t.hero_desc}</p>
          <div class="flex flex-col sm:flex-row gap-4">
            <button onclick="window.navigateTo('technologies')" class="px-8 py-4 bg-brand-orange hover:bg-orange-600 text-white rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-orange/20 group w-full sm:w-auto">
              <i data-lucide="map" class="w-5 h-5 group-hover:rotate-12 transition-transform"></i>
              ${t.hero_btn_map}
            </button>
            <button onclick="window.navigateTo('blog')" class="px-8 py-4 bg-brand-blue/10 dark:bg-brand-blue/20 text-brand-blue rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all border border-brand-blue/20 hover:bg-brand-blue/30 w-full sm:w-auto">
              ${t.hero_btn_blog}
              <i data-lucide="arrow-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
        <div class="relative">
          <div class="relative z-10 animate-float">
            <div class="relative w-full aspect-square max-w-lg mx-auto">
              <div class="absolute inset-0 bg-gradient-to-br from-brand-orange to-brand-blue rounded-[3rem] rotate-45 opacity-20 blur-2xl animate-spin-slow"></div>
              <div class="relative z-20 w-full h-full bg-slate-100 dark:bg-[#0A0D14] rounded-[2.5rem] border border-white/20 dark:border-slate-800 p-8 shadow-2xl backdrop-blur-3xl overflow-hidden group">
                <div class="h-full flex flex-col items-center justify-center relative">
                  <div class="absolute top-0 right-0 p-4 bg-brand-orange/10 dark:bg-brand-orange/5 border border-brand-orange/20 rounded-2xl backdrop-blur-md z-30 transition-transform group-hover:scale-105 text-right">
                    <div class="text-brand-orange font-bold text-[10px] uppercase tracking-widest mb-1">${state.language === 'cs' ? 'POSLEDNÍ AKTUALITA' : 'LATEST UPDATE'}</div>
                    <div class="text-xl font-black text-slate-900 dark:text-white">#${latestPost.id.toString().padStart(4, '0')}</div>
                  </div>
                  <div class="absolute bottom-10 left-0 p-4 bg-brand-blue/10 dark:bg-brand-blue/5 border border-brand-blue/20 rounded-2xl backdrop-blur-md z-30 transition-transform group-hover:scale-105">
                    <div class="text-brand-blue font-bold text-[10px] uppercase tracking-widest mb-1">${state.language === 'cs' ? 'KATEGORIE' : 'CATEGORY'}</div>
                    <div class="text-xl font-black text-slate-900 dark:text-white">${latestPost.category.toUpperCase()}</div>
                  </div>
                  <div class="relative w-64 h-64 mb-10">
                    <svg class="absolute inset-0 w-full h-full -rotate-90">
                      <circle cx="50%" cy="50%" r="48%" fill="none" stroke="currentColor" stroke-width="8" class="text-slate-200 dark:text-slate-800" />
                      <circle cx="50%" cy="50%" r="48%" fill="none" stroke="url(#hero-ring-grad)" stroke-width="8" stroke-dasharray="301.59" stroke-dashoffset="75" stroke-linecap="round" class="animate-pulse" />
                      <defs><linearGradient id="hero-ring-grad" x1="0%" y1="0%" x2="100%" y2="0%"><stop offset="0%" stop-color="#FF6B00" /><stop offset="100%" stop-color="#00A3FF" /></linearGradient></defs>
                    </svg>
                    <div class="absolute inset-[15%] rounded-full overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-inner group-hover:scale-110 transition-transform duration-500">
                      <img src="${latestPost.image}" alt="latest blog" class="w-full h-full object-cover" />
                      <div class="absolute inset-0 bg-brand-blue/20 mix-blend-overlay"></div>
                    </div>
                  </div>
                  <div class="text-center px-4">
                    <h3 class="text-2xl lg:text-3xl font-black mb-3 text-slate-900 dark:text-white line-clamp-1">${latestPost.title}</h3>
                    <p class="text-slate-500 dark:text-slate-400 text-sm mb-8 line-clamp-2 max-w-xs mx-auto">${latestPost.excerpt}</p>
                    <button onclick="window.navigateTo('blog')" class="px-6 py-3 bg-brand-blue/10 hover:bg-brand-blue text-brand-blue hover:text-white border border-brand-blue/20 rounded-xl font-bold text-sm transition-all flex items-center gap-2 mx-auto">
                      ${t.read_more} <i data-lucide="external-link" class="w-4 h-4"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `;
}

function renderFeatures() {
    const t = TRANSLATIONS[state.language];
    return `
    <section class="py-24 px-4 bg-slate-100/30 dark:bg-[#080B14]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-brand-orange font-bold tracking-widest uppercase text-sm mb-4">${t.features_badge}</h2>
          <p class="text-4xl lg:text-5xl font-extrabold mb-6">${t.features_title}</p>
          <div class="w-24 h-1.5 bg-brand-blue mx-auto rounded-full"></div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${FEATURE_DATA[state.language].map(feature => `
            <div class="group p-8 rounded-[2rem] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-brand-blue transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-blue/5">
              <div class="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${feature.color === 'orange' ? 'bg-brand-orange/10' : 'bg-brand-blue/10'}">
                <i data-lucide="${feature.icon}" class="w-7 h-7 ${feature.color === 'orange' ? 'text-brand-orange' : 'text-brand-blue'}"></i>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-brand-blue transition-colors">${feature.title}</h3>
              <p class="text-slate-500 dark:text-slate-400 leading-relaxed">${feature.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
    `;
}

function renderStats() {
    const t = TRANSLATIONS[state.language];
    return `
    <section class="py-20 px-4">
      <div class="max-w-7xl mx-auto bg-gradient-to-r from-brand-orange to-brand-blue rounded-[3rem] p-12 text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full -mr-20 -mt-20"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-[80px] rounded-full -ml-20 -mb-20"></div>
        <div class="relative z-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          <div><div class="text-5xl font-black mb-2">120K+</div><div class="text-orange-100 font-medium">${t.stats_users}</div></div>
          <div><div class="text-5xl font-black mb-2">500M+</div><div class="text-orange-100 font-medium">${t.stats_volume}</div></div>
          <div><div class="text-5xl font-black mb-2">45+</div><div class="text-orange-100 font-medium">${t.stats_networks}</div></div>
          <div><div class="text-5xl font-black mb-2">24/7</div><div class="text-orange-100 font-medium">${t.stats_support}</div></div>
        </div>
      </div>
    </section>
    `;
}

function renderCommunity() {
    const t = TRANSLATIONS[state.language];
    return `
    <section class="py-24 px-4 overflow-hidden relative">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div class="flex-1 text-center lg:text-left">
          <h2 class="text-4xl lg:text-6xl font-extrabold mb-8">${t.community_title.replace('Web3zone', '<span class="text-brand-blue">Web3zone</span>')}</h2>
          <p class="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0">${t.community_desc}</p>
          <div class="flex flex-wrap justify-center lg:justify-start gap-4">
            <button class="flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"><i data-lucide="message-square" class="w-5 h-5"></i>Discord</button>
            <button class="flex items-center gap-3 bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"><i data-lucide="send" class="w-5 h-5"></i>Telegram</button>
            <button class="flex items-center gap-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"><i data-lucide="twitter" class="w-5 h-5"></i>Twitter</button>
          </div>
        </div>
        <div class="flex-1 relative">
           <div class="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
             <div class="absolute inset-0 bg-brand-blue/20 rounded-full animate-pulse-slow"></div>
             <div class="absolute inset-4 bg-brand-orange/20 rounded-full animate-pulse-slow delay-75"></div>
             <div class="absolute inset-0 flex items-center justify-center">
                <div class="w-48 h-48 bg-white dark:bg-slate-800 rounded-3xl shadow-2xl p-6 rotate-12 flex flex-col justify-between border border-slate-200 dark:border-slate-700">
                   <div class="flex justify-between items-start"><div class="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center">🤝</div><span class="text-xs text-slate-400 font-bold">INVITE</span></div>
                   <div class="space-y-2"><div class="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded"></div><div class="h-2 w-3/4 bg-slate-100 dark:bg-slate-700 rounded"></div></div>
                   <button class="w-full bg-brand-blue text-white py-2 rounded-lg text-xs font-bold">${state.language === 'cs' ? 'PŘIJMOUT POZVÁNKU' : 'ACCEPT INVITE'}</button>
                </div>
             </div>
             <div class="absolute top-10 right-10 w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg"><img src="https://picsum.photos/seed/p1/100/100" alt="avatar" /></div>
             <div class="absolute bottom-10 left-10 w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg"><img src="https://picsum.photos/seed/p2/100/100" alt="avatar" /></div>
             <div class="absolute top-1/2 -left-4 w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-lg"><img src="https://picsum.photos/seed/p3/100/100" alt="avatar" /></div>
           </div>
        </div>
      </div>
    </section>
    `;
}

function renderFooter() {
    const t = TRANSLATIONS[state.language];
    return `
    <footer class="pt-32 pb-12 px-4 border-t border-slate-200 dark:border-slate-800 bg-brand-light dark:bg-brand-dark overflow-hidden relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          <div class="space-y-8">
            <button onclick="window.navigateTo('home')">${Logo("h-16")}</button>
            <p class="text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed font-medium">${t.footer_desc}</p>
            <div class="flex items-center gap-4">
              <a href="#" class="p-3.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl hover:text-brand-orange hover:shadow-xl transition-all"><i data-lucide="twitter" class="w-5 h-5"></i></a>
              <a href="#" class="p-3.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl hover:text-brand-blue hover:shadow-xl transition-all"><i data-lucide="send" class="w-5 h-5"></i></a>
              <a href="#" class="p-3.5 bg-slate-200/50 dark:bg-slate-800/50 rounded-2xl hover:text-brand-orange hover:shadow-xl transition-all"><i data-lucide="github" class="w-5 h-5"></i></a>
            </div>
          </div>
          <div class="lg:pl-10">
            <h4 class="font-black text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500 mb-10">${t.footer_platform}</h4>
            <ul class="space-y-6 text-slate-600 dark:text-slate-300 font-bold">
              <li><button onclick="window.navigateTo('home')" class="hover:text-brand-orange transition-colors">${state.language === 'cs' ? 'Vzdělávání' : 'Education'}</button></li>
              <li><button onclick="window.navigateTo('technologies')" class="hover:text-brand-orange transition-colors">${state.language === 'cs' ? 'Technologie' : 'Technologies'}</button></li>
              <li><a href="#" class="hover:text-brand-orange transition-colors">DAO ${state.language === 'cs' ? 'Hlasování' : 'Voting'}</a></li>
              <li><a href="#" class="hover:text-brand-orange transition-colors">Marketplace</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-black text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500 mb-10">${t.footer_about}</h4>
            <ul class="space-y-6 text-slate-600 dark:text-slate-300 font-bold">
              <li><a href="#" class="hover:text-brand-blue transition-colors">${state.language === 'cs' ? 'Náš tým' : 'Our Team'}</a></li>
              <li><button onclick="window.navigateTo('blog')" class="hover:text-brand-blue transition-colors">Blog</button></li>
              <li><a href="#" class="hover:text-brand-blue transition-colors">${state.language === 'cs' ? 'Zprávy' : 'News'}</a></li>
              <li><button onclick="window.navigateTo('contact')" class="hover:text-brand-blue transition-colors">${state.language === 'cs' ? 'Kontakt' : 'Contact'}</button></li>
            </ul>
          </div>
          <div>
            <h4 class="font-black text-xs uppercase tracking-[0.35em] text-slate-400 dark:text-slate-500 mb-10">${t.footer_newsletter}</h4>
            <p class="text-sm text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">${t.footer_newsletter_desc}</p>
            <form class="relative group" onsubmit="event.preventDefault()">
              <input type="email" placeholder="${state.language === 'cs' ? 'Váš email' : 'Your email'}" class="w-full bg-slate-200/50 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-blue rounded-3xl py-6 pl-8 pr-16 outline-none transition-all font-bold placeholder:text-slate-400" />
              <button class="absolute right-3 top-3 p-4 bg-brand-orange text-white rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-brand-orange/30"><i data-lucide="mail" class="w-[18px] h-[18px]"></i></button>
            </form>
          </div>
        </div>
        <div class="flex flex-col md:flex-row justify-between items-center pt-16 border-t border-slate-200 dark:border-slate-800 gap-10">
          <div class="text-slate-400 dark:text-slate-500 text-[11px] font-black uppercase tracking-[0.45em]">© ${new Date().getFullYear()} Web3zone. All Rights Reserved.</div>
          <div class="flex gap-12 text-[11px] font-black uppercase tracking-[0.45em] text-slate-400 dark:text-slate-500">
            <a href="#" class="hover:text-brand-blue transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-brand-blue transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
    `;
}

function renderBlog() {
    const t = TRANSLATIONS[state.language];
    return `
    <section class="py-24 px-4 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20">
          <div class="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-blue/20">
            <i data-lucide="book-open" class="w-4 h-4"></i><span>${t.blog_badge}</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold mb-8">${t.blog_title.replace('Blog', `<span class="text-brand-orange">${state.language === 'cs' ? 'Blog' : 'Blog'}</span>`)}</h1>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">${t.blog_desc}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          ${BLOG_POSTS[state.language].map(post => `
            <article class="group bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] overflow-hidden hover:border-brand-orange transition-all duration-500 flex flex-col hover:shadow-2xl hover:shadow-brand-orange/5">
              <div class="relative h-64 overflow-hidden">
                <img src="${post.image}" alt="${post.title}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div class="absolute top-6 left-6"><span class="bg-brand-orange text-white text-xs font-black uppercase tracking-widest px-4 py-2 rounded-xl shadow-lg shadow-brand-orange/20">${post.category}</span></div>
              </div>
              <div class="p-8 flex-1 flex flex-col">
                <div class="flex items-center gap-2 text-slate-400 text-sm mb-4 font-bold"><i data-lucide="calendar" class="w-3.5 h-3.5 text-brand-blue"></i>${post.date}</div>
                <h3 class="text-2xl font-bold mb-4 group-hover:text-brand-orange transition-colors line-clamp-2">${post.title}</h3>
                <p class="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 flex-1 line-clamp-3">${post.excerpt}</p>
                <button onclick="window.navigateTo('${post.id === 1 ? 'blog-detail' : 'blog'}')" class="flex items-center gap-2 text-brand-blue font-black uppercase text-xs tracking-widest hover:gap-4 transition-all">${t.read_more} <i data-lucide="arrow-right" class="w-4 h-4"></i></button>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    </section>
    `;
}

function renderAbout() {
    const t = TRANSLATIONS[state.language];
    const values = [
      { icon: "target", title: state.language === 'cs' ? "Vize" : "Vision", text: state.language === 'cs' ? "Demokratizace přístupu k technologiím budoucnosti pro každého Čecha." : "Democratizing access to future technologies for everyone.", color: "orange" },
      { icon: "shield", title: state.language === 'cs' ? "Transparentnost" : "Transparency", text: state.language === 'cs' ? "Věříme v otevřený kód a decentralizaci jako základ spravedlivého internetu." : "We believe in open source and decentralization as the foundation of a fair internet.", color: "blue" },
      { icon: "heart", title: state.language === 'cs' ? "Komunita" : "Community", text: state.language === 'cs' ? "Web3zone není jen web, je to prostor pro sdílení a vzájemný růst." : "Web3zone is not just a website, it's a space for sharing and mutual growth.", color: "orange" },
      { icon: "rocket", title: state.language === 'cs' ? "Inovace" : "Innovation", text: state.language === 'cs' ? "Neustále sledujeme nejnovější trendy a přinášíme je srozumitelně k vám." : "We constantly monitor the latest trends and bring them to you clearly.", color: "blue" }
    ];

    return `
    <div class="py-24 px-4 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h1 class="text-5xl lg:text-8xl font-black mb-8 leading-tight">${t.about_title.replace(state.language === 'cs' ? 'zóna' : 'zone', `<span class="text-brand-orange">${state.language === 'cs' ? 'zóna' : 'zone'}</span>`)}</h1>
            <div class="space-y-6 text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium mb-10">
              ${state.language === 'cs' ? `
              <p>Jsme digitální nomádi a technologičtí vizionáři, kteří vyrostli na základech interaktivního webu, ale odmítají zůstat v jeho stínu. Ve Web3zone nás spojuje vášeň pro objevování hranic možného. Sledujeme, jak se staré pořádky centralizovaných platforem postupně transformují, a na jejich místě vyrůstá prostor, který konečně patří lidem, nikoliv korporacím.</p>
              <p>Přechod z <span class="text-brand-blue font-bold">Webu 2.0</span> na <span class="text-brand-orange font-bold">Web 3.0</span> pro nás není jen technickou aktualizací, je to evoluce digitální svobody. Zatímco minulá dekáda nás naučila sdílet a tvořit, ta nadcházející nám dává nástroje k tomu, abychom svou digitální stopu a aktiva skutečně vlastnili. Ve světě blockchainu, smart kontraktů a decentralizovaných identit vidíme příležitost vrátit internetu jeho původní slib – být otevřeným místem pro každého.</p>
              <p>Naším posláním je být vaším bezpečným průvodcem v divokých vodách decentralizace. Nejsme jen pozorovatelé, jsme aktivní nadšenci, kteří chtějí tuto vzrušující transformaci zpřístupnit široké veřejnosti. Chceme, abyste se v novém internetu cítili jako doma, rozuměli jeho zákonitostem a dokázali využít jeho plný potenciál ve svůj prospěch.</p>
              ` : `
              <p>We are digital nomads and technological visionaries who grew up on the foundations of the interactive web but refuse to stay in its shadow. At Web3zone, we are united by a passion for exploring the boundaries of the possible. We watch as the old orders of centralized platforms gradually transform, and in their place, a space grows that finally belongs to the people, not corporations.</p>
              <p>The transition from <span class="text-brand-blue font-bold">Web 2.0</span> to <span class="text-brand-orange font-bold">Web 3.0</span> is not just a technical update for us, it's an evolution of digital freedom. While the past decade taught us to share and create, the upcoming one gives us the tools to truly own our digital footprint and assets. In the world of blockchain, smart contracts, and decentralized identities, we see an opportunity to return the internet to its original promise – to be an open place for everyone.</p>
              <p>Our mission is to be your safe guide in the wild waters of decentralization. We are not just observers, we are active enthusiasts who want to make this exciting transformation accessible to the general public. We want you to feel at home in the new internet, understand its laws, and be able to use its full potential to your advantage.</p>
              `}
            </div>
            <div class="flex gap-12">
              <div><div class="text-4xl font-black text-brand-blue mb-1">2023</div><div class="text-xs font-black uppercase tracking-widest text-slate-400">${t.about_founding}</div></div>
              <div><div class="text-4xl font-black text-brand-orange mb-1">10+</div><div class="text-xs font-black uppercase tracking-widest text-slate-400">${t.about_experts}</div></div>
            </div>
          </div>
          <div class="relative">
            <div class="aspect-square bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-[4rem] animate-pulse-slow"></div>
            <div class="absolute inset-8 bg-slate-200 dark:bg-slate-800 rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" alt="Team" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
            </div>
          </div>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          ${values.map(v => `
            <div class="p-10 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] hover:-translate-y-2 transition-all duration-300">
               <div class="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-6"><i data-lucide="${v.icon}" class="w-6 h-6 ${v.color === 'orange' ? 'text-brand-orange' : 'text-brand-blue'}"></i></div>
               <h3 class="text-xl font-bold mb-3">${v.title}</h3>
               <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">${v.text}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
}

function renderContact() {
    const t = TRANSLATIONS[state.language];
    return `
    <section class="py-24 px-4">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-20">
          <div class="space-y-12">
            <div>
              <h1 class="text-5xl lg:text-7xl font-extrabold mb-8">${t.contact_title.replace(state.language === 'cs' ? 'spojit' : 'connect', `<span class="block text-brand-blue">${state.language === 'cs' ? 'spojit' : 'connect'}</span>`)}</h1>
              <p class="text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-lg">${t.contact_desc}</p>
            </div>
            <div class="space-y-8">
              <div class="flex items-start gap-6 group"><div class="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange shrink-0 group-hover:scale-110 transition-transform"><i data-lucide="mail" class="w-6 h-6"></i></div><div><h4 class="font-bold text-xl mb-1">E-mail</h4><p class="text-slate-500 dark:text-slate-400">web3zoone@gmail.com</p></div></div>
              <div class="flex items-start gap-6 group"><div class="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 group-hover:scale-110 transition-transform"><i data-lucide="map-pin" class="w-6 h-6"></i></div><div><h4 class="font-bold text-xl mb-1">${state.language === 'cs' ? 'Působnost' : 'Location'}</h4><p class="text-slate-500 dark:text-slate-400">${state.language === 'cs' ? 'Česká republika' : 'Czech Republic'}</p></div></div>
            </div>
          </div>
          <div class="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-8 lg:p-12 shadow-2xl backdrop-blur-sm">
            <form onsubmit="event.preventDefault(); alert('${state.language === 'cs' ? 'Zpráva odeslána!' : 'Message sent!'}');" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2"><label class="text-xs font-black uppercase tracking-widest text-slate-400 px-2">${t.contact_form_name}</label><input required type="text" placeholder="${state.language === 'cs' ? 'Jan Novák' : 'John Doe'}" class="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-orange rounded-2xl py-4 px-6 outline-none transition-all font-medium" /></div>
                <div class="space-y-2"><label class="text-xs font-black uppercase tracking-widest text-slate-400 px-2">${t.contact_form_email}</label><input required type="email" placeholder="${state.language === 'cs' ? 'jan@priklad.cz' : 'john@example.com'}" class="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-orange rounded-2xl py-4 px-6 outline-none transition-all font-medium" /></div>
              </div>
              <div class="space-y-2"><label class="text-xs font-black uppercase tracking-widest text-slate-400 px-2">${t.contact_form_msg}</label><textarea required rows="5" placeholder="${state.language === 'cs' ? 'Napište nám podrobnosti...' : 'Write us details...'}" class="w-full bg-slate-100 dark:bg-slate-800/50 border-2 border-transparent focus:border-brand-blue rounded-2xl py-4 px-6 outline-none transition-all font-medium resize-none"></textarea></div>
              <button type="submit" class="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-2xl py-5 font-bold text-lg flex items-center justify-center gap-3 transition-all shadow-xl shadow-brand-orange/20 group">${t.contact_form_btn} <i data-lucide="send" class="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i></button>
            </form>
          </div>
        </div>
      </div>
    </section>
    `;
}

function renderTechnologies() {
    const t = TRANSLATIONS[state.language];
    return `
    <section class="py-24 px-4 min-h-screen relative overflow-hidden bg-brand-light dark:bg-brand-dark">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20 text-center lg:text-left">
          <div class="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20"><i data-lucide="sparkles" class="w-4 h-4"></i><span>${t.tech_map_badge}</span></div>
          <h1 class="text-5xl lg:text-7xl font-extrabold mb-8">${t.tech_map_title.replace(state.language === 'cs' ? 'technologií' : 'technology', `<span class="text-brand-blue">${state.language === 'cs' ? 'technologií' : 'technology'}</span>`)}</h1>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">${t.tech_map_desc}</p>
        </div>
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 h-[600px] lg:h-[750px] relative bg-slate-100/50 dark:bg-slate-900/30 rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden group shadow-inner">
            <div id="tech-map-container" class="absolute inset-0"></div>
          </div>
          <div class="lg:col-span-5" id="tech-detail-panel">
            <!-- Dynamically filled -->
          </div>
        </div>
      </div>
    </section>
    `;
}

function renderAINews() {
    const news = TECH_NEWS[state.language]['ai'] || [];
    return `
    <div class="py-24 px-4 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20">
          <div class="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange px-4 py-2 rounded-full text-sm font-bold mb-6 border border-brand-orange/20"><i data-lucide="brain" class="w-4 h-4"></i><span>${state.language === 'cs' ? 'Inteligence bez hranic' : 'Intelligence without borders'}</span></div>
          <h1 class="text-5xl lg:text-7xl font-extrabold mb-8">${state.language === 'cs' ? 'Novinky o' : 'News about'} <span class="text-brand-blue">AI</span></h1>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">${state.language === 'cs' ? 'Sledujeme nejrychleji se vyvíjející odvětví lidské historie. Od generování videa po autonomní agenty.' : 'We follow the fastest-evolving industry in human history. From video generation to autonomous agents.'}</p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          ${news.map(item => `
            <div class="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col hover:border-brand-blue transition-all duration-500 h-full">
               <div class="flex justify-between items-center mb-10">
                 <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500">${item.tag}</span>
                 <i data-lucide="${item.icon}" class="w-6 h-6 text-brand-blue"></i>
               </div>
               <h3 class="text-xl font-bold mb-4">${item.titulek}</h3>
               <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">${item.popis}</p>
               <div class="mt-auto flex flex-col gap-2">
                 <div class="flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                   <i data-lucide="calendar" class="w-3 h-3"></i>
                   ${item.datum || '21. února 2026'}
                 </div>
                 <a href="${item.zdroj}" target="_blank" class="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest">${state.language === 'cs' ? 'Zdroj' : 'Source'} <i data-lucide="external-link" class="w-4 h-4"></i></a>
               </div>
            </div>
          `).join('')}
        </div>

        <div class="mb-12">
          <h2 class="text-3xl font-black mb-8">${state.language === 'cs' ? 'Přehled modelů' : 'Model Overview'}</h2>
        </div>
        <div class="grid md:grid-cols-3 gap-8">
          ${AI_MODELS[state.language].map(model => `
            <div class="bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 hover:border-brand-blue transition-all group shadow-sm hover:shadow-xl">
              <div class="flex justify-between items-start mb-6">
                <div class="px-3 py-1 bg-brand-blue/10 text-brand-blue rounded-lg text-[10px] font-black uppercase tracking-widest">${model.provider}</div>
                <div class="flex items-center gap-1 text-brand-orange text-xs font-bold"><i data-lucide="sparkles" class="w-3.5 h-3.5"></i>${model.hype}%</div>
              </div>
              <h4 class="text-2xl font-bold mb-2 group-hover:text-brand-blue transition-colors">${model.name}</h4>
              <p class="text-slate-500 dark:text-slate-400 mb-8 text-sm leading-relaxed">${model.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
}

function renderWhatIsWeb3() {
    return `
    <div class="py-24 px-4 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-24">
          <h1 class="text-5xl lg:text-8xl font-black mb-8">${state.language === 'cs' ? 'Co je to' : 'What is'} <span class="text-brand-blue">Web3?</span></h1>
          <p class="text-xl text-slate-500 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">${state.language === 'cs' ? 'Web3 představuje další generaci internetu, kde moc přechází z rukou velkých technologických korporací zpět k uživatelům.' : 'Web3 represents the next generation of the internet, where power shifts from the hands of big tech corporations back to users.'}</p>
        </div>
        <div class="grid lg:grid-cols-3 gap-8 mb-32">
          <div class="p-10 rounded-[3rem] border-2 border-slate-200 text-center">
            <h3 class="text-3xl font-black mb-1">Web 1.0</h3>
            <div class="text-brand-orange font-bold text-sm mb-6">Read</div>
            <p class="text-slate-500">${state.language === 'cs' ? 'Statické webové stránky, uživatelé byli pouze konzumenti.' : 'Static web pages, users were only consumers.'}</p>
          </div>
          <div class="p-10 rounded-[3rem] border-2 border-brand-blue/20 text-center bg-brand-blue/5">
            <h3 class="text-3xl font-black mb-1">Web 2.0</h3>
            <div class="text-brand-orange font-bold text-sm mb-6">Read-Write</div>
            <p class="text-slate-500">${state.language === 'cs' ? 'Interaktivní web, sociální sítě. Firmy vlastní naše data.' : 'Interactive web, social networks. Companies own our data.'}</p>
          </div>
          <div class="p-10 rounded-[3rem] border-2 border-brand-orange/20 text-center bg-brand-orange/5">
            <h3 class="text-3xl font-black mb-1">Web 3.0</h3>
            <div class="text-brand-orange font-bold text-sm mb-6">Read-Write-Own</div>
            <p class="text-slate-500">${state.language === 'cs' ? 'Decentralizovaný web. Uživatelé vlastní svá data.' : 'Decentralized web. Users own their data.'}</p>
          </div>
        </div>
      </div>
    </div>
    `;
}

function renderBlogDetail() {
    const t = TRANSLATIONS[state.language];
    const post = BLOG_POSTS[state.language].find(p => p.id === 1) || BLOG_POSTS[state.language][0];
    return `
    <div class="py-24 px-4 min-h-screen">
      <div class="max-w-4xl mx-auto">
        <div class="flex justify-between items-center mb-12">
          <button onclick="window.navigateTo('blog')" class="flex items-center gap-2 text-slate-500 hover:text-brand-orange transition-colors font-bold uppercase text-xs tracking-widest">
            <i data-lucide="chevron-left" class="w-5 h-5"></i> ${state.language === 'cs' ? 'Zpět na blog' : 'Back to blog'}
          </button>
        </div>
        <article class="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 font-medium leading-relaxed space-y-8">
          <h1 class="text-4xl lg:text-6xl font-black mb-8 leading-tight">${post.title.replace('Dencun', `<span class="text-brand-blue">Dencun</span>`)}</h1>
          <p class="text-xl text-slate-900 dark:text-white font-bold mb-10">${post.excerpt}</p>
          <p>${state.language === 'cs' ? 'Upgrade Dencun, který proběhl v březnu 2024, představuje nejvýznamnější krok k masové adopci Etherea.' : 'The Dencun upgrade, which took place in March 2024, represents the most significant step towards mass adoption of Ethereum.'}</p>
          <p>${state.language === 'cs' ? 'Středobodem tohoto upgradu je EIP-4844, známý jako "Proto-Danksharding". Tato technologie zavádí tzv. "blobs", což je nový způsob, jakým L2 sítě ukládají data.' : 'At the heart of this upgrade is EIP-4844, known as "Proto-Danksharding". This technology introduces so-called "blobs", which is a new way for L2 networks to store data.'}</p>
        </article>
      </div>
    </div>
    `;
}

function renderDatacentres() {
    const news = TECH_NEWS[state.language]['data'] || [];
    return `
    <div class="py-24 px-4 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <button onclick="window.navigateTo('technologies')" class="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-all font-bold uppercase text-[10px] tracking-[0.3em] mb-12 group">
          <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-2 transition-transform"></i> ${state.language === 'cs' ? 'Zpět na mapu technologií' : 'Back to technology map'}
        </button>
        <div class="mb-20">
          <h1 class="text-5xl lg:text-7xl font-extrabold mb-8">${state.language === 'cs' ? 'Novinky z' : 'News from'} <span class="text-brand-blue uppercase">Datacenter</span></h1>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed">${state.language === 'cs' ? 'Sledujeme fyzickou vrstvu Webu 3.0 – od gigantických výpočetních center po orbitální solární farmy.' : 'We track the physical layer of Web 3.0 – from gigantic computing centers to orbital solar farms.'}</p>
        </div>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${news.map(item => `
            <div class="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col hover:border-brand-blue transition-all duration-500 h-full">
               <div class="flex justify-between items-center mb-10">
                 <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500">${item.tag}</span>
                 <i data-lucide="${item.icon}" class="w-6 h-6 text-brand-blue"></i>
               </div>
               <h3 class="text-xl font-bold mb-4">${item.titulek}</h3>
               <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">${item.popis}</p>
               <div class="mt-auto flex flex-col gap-2">
                 <div class="flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                   <i data-lucide="calendar" class="w-3 h-3"></i>
                   ${item.datum || '21. února 2026'}
                 </div>
                 <a href="${item.zdroj}" target="_blank" class="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest">${state.language === 'cs' ? 'Zdroj' : 'Source'} <i data-lucide="external-link" class="w-4 h-4"></i></a>
               </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
    `;
}

function renderTechNews(techId) {
    const tech = TECH_DATA[state.language].find(t => t.id === techId);
    if (!tech) return renderHero();

    // Special cases for existing specific layouts
    if (techId === 'ai') return renderAINews();
    if (techId === 'data') return renderDatacentres();

    const news = TECH_NEWS[state.language][techId] || [];

    return `
    <div class="py-24 px-4 min-h-screen">
      <div class="max-w-7xl mx-auto">
        <button onclick="window.navigateTo('technologies')" class="flex items-center gap-2 text-slate-500 hover:text-brand-blue transition-all font-bold uppercase text-[10px] tracking-[0.3em] mb-12 group">
          <i data-lucide="arrow-left" class="w-4 h-4 group-hover:-translate-x-2 transition-transform"></i> ${state.language === 'cs' ? 'Zpět na mapu technologií' : 'Back to technology map'}
        </button>
        <div class="mb-20">
          <div class="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue px-4 py-2 rounded-full text-[11px] font-black uppercase tracking-widest mb-6 border border-brand-blue/20">
            <i data-lucide="${tech.icon}" class="w-4 h-4"></i>
            <span>${tech.name} ${state.language === 'cs' ? 'Infrastruktura' : 'Infrastructure'}</span>
          </div>
          <h1 class="text-5xl lg:text-7xl font-extrabold mb-8 tracking-tight">
            ${state.language === 'cs' ? 'Novinky z oblasti' : 'News from the field of'} <span class="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-cyan-400 uppercase">${tech.name}</span>
          </h1>
          <p class="text-lg text-slate-500 dark:text-slate-400 max-w-2xl leading-relaxed font-medium">
            ${state.language === 'cs' ? `Sledujeme nejnovější trendy, průlomy a implementace v oblasti ${tech.name.toLowerCase()}.` : `We follow the latest trends, breakthroughs, and implementations in the field of ${tech.name.toLowerCase()}.`}
          </p>
        </div>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          ${news.length > 0 ? news.map(item => `
            <div class="group bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] p-8 flex flex-col hover:border-brand-blue transition-all duration-500 h-full">
               <div class="flex justify-between items-center mb-10">
                 <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-[9px] font-black uppercase tracking-widest text-slate-500">${item.tag}</span>
                 <i data-lucide="${item.icon}" class="w-6 h-6 text-brand-blue"></i>
               </div>
               <h3 class="text-xl font-bold mb-4">${item.titulek}</h3>
               <p class="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-8">${item.popis}</p>
               <div class="mt-auto flex flex-col gap-2">
                 <div class="flex items-center gap-2 text-slate-400 text-[10px] font-bold">
                   <i data-lucide="calendar" class="w-3 h-3"></i>
                   ${item.datum || '21. února 2026'}
                 </div>
                 <a href="${item.zdroj}" target="_blank" class="flex items-center gap-2 text-brand-blue font-bold text-xs uppercase tracking-widest">${state.language === 'cs' ? 'Zdroj' : 'Source'} <i data-lucide="external-link" class="w-4 h-4"></i></a>
               </div>
            </div>
          `).join('') : `
            <div class="p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[2.5rem] flex flex-col items-center justify-center text-center min-h-[300px] col-span-full">
                <div class="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 animate-pulse">
                    <i data-lucide="clock" class="w-10 h-10 text-slate-400"></i>
                </div>
                <h3 class="text-2xl font-black mb-4">${state.language === 'cs' ? 'Připravujeme čerstvý obsah' : 'Preparing fresh content'}</h3>
                <p class="text-slate-500 dark:text-slate-400 max-w-md mx-auto">${state.language === 'cs' ? `Právě pro vás analyzujeme nejnovější události v oblasti ${tech.name}. Brzy zde najdete hloubkové analýzy a aktuality.` : `We are currently analyzing the latest events in the field of ${tech.name}. You will soon find in-depth analysis and updates here.`}</p>
            </div>
          `}
        </div>
      </div>
    </div>
    `;
}

function render() {
    const app = document.getElementById('app');
    let content = renderNavbar();

    switch (state.currentPage) {
        case 'home':
            content += renderHero() + renderFeatures() + renderStats() + renderCommunity();
            break;
        case 'blog':
            content += renderBlog();
            break;
        case 'about':
            content += renderAbout();
            break;
        case 'contact':
            content += renderContact();
            break;
        case 'technologies':
            content += renderTechnologies();
            break;
        case 'what-is-web3':
            content += renderWhatIsWeb3();
            break;
        case 'blog-detail':
            content += renderBlogDetail();
            break;
        case 'datacentres':
            content += renderDatacentres();
            break;
        default:
            const isTechPage = TECH_DATA[state.language].some(t => t.id === state.currentPage);
            if (isTechPage) {
                content += renderTechNews(state.currentPage);
            } else {
                content += renderHero() + renderFeatures() + renderStats() + renderCommunity();
            }
    }

    content += renderFooter();
    app.innerHTML = content;
    
    // Re-initialize icons
    if (window.lucide) {
        window.lucide.createIcons();
    }

    // Special init for tech map if on that page
    if (state.currentPage === 'technologies') {
        initTechMap();
    }
}

function initTechMap() {
    const container = document.getElementById('tech-map-container');
    if (!container) return;
    
    // Simple version of the tech map for vanilla JS
    let html = `<svg class="absolute inset-0 w-full h-full pointer-events-none">`;
    TECH_DATA[state.language].forEach(tech => {
        html += `<line x1="50%" y1="50%" x2="${tech.x}" y2="${tech.y}" stroke="${tech.color === 'orange' ? "#FF6B00" : "#00A3FF"}" stroke-width="2" stroke-opacity="0.4" />`;
    });
    html += `</svg>`;
    
    TECH_DATA[state.language].forEach(tech => {
        html += `
        <button onclick="window.setActiveTech('${tech.id}')" style="left: ${tech.x}; top: ${tech.y}" class="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-2 transition-all duration-500 z-30 group">
            <div class="w-10 h-10 lg:w-12 lg:h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-2 ${state.activeTech.id === tech.id ? 'bg-brand-orange border-white text-white scale-110 shadow-[0_0_15px_rgba(255,107,0,0.5)]' : 'bg-white dark:bg-slate-800 text-slate-400 border-slate-200 dark:border-slate-700 shadow-md'}">
                <i data-lucide="${tech.icon}" class="w-4 h-4 lg:w-5 lg:h-5"></i>
            </div>
            <div class="whitespace-nowrap text-[8px] lg:text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-lg transition-all duration-300 backdrop-blur-md ${state.activeTech.id === tech.id ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-lg' : 'bg-slate-200/60 dark:bg-slate-800/60 text-slate-600 dark:text-slate-300'} opacity-100">
                ${tech.name}
            </div>
        </button>`;
    });
    container.innerHTML = html;
    updateTechPanel();
}

function updateTechPanel() {
    const panel = document.getElementById('tech-detail-panel');
    if (!panel) return;
    const tech = state.activeTech;
    
    let buttonText = state.language === 'cs' ? 'Novinky' : 'News';
    let targetPage = tech.id;

    panel.innerHTML = `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-[3rem] p-10 lg:p-14 shadow-2xl relative overflow-hidden transition-all duration-500">
            <div class="absolute top-0 right-0 w-64 h-64 blur-[100px] opacity-10 pointer-events-none ${tech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}"></div>
            <div class="relative z-10">
                <div class="flex items-center gap-5 mb-8">
                    <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-white ${tech.color === 'orange' ? 'bg-brand-orange shadow-[0_0_15px_#FF6B00]' : 'bg-brand-blue shadow-[0_0_15px_#00A3FF]'}">
                        <i data-lucide="${tech.icon}" class="w-6 h-6"></i>
                    </div>
                    <div>
                        <h2 class="text-3xl font-black">${tech.name}</h2>
                        <div class="h-1 w-12 mt-1 rounded-full ${tech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}"></div>
                    </div>
                </div>
                <p class="text-xl text-slate-600 dark:text-slate-300 font-medium leading-relaxed mb-10">${tech.description}</p>
                <div class="space-y-4 mb-12">
                    ${tech.details.map(d => `
                        <div class="flex items-center gap-3 group">
                            <div class="w-2 h-2 rounded-full transition-transform group-hover:scale-150 ${tech.color === 'orange' ? 'bg-brand-orange' : 'bg-brand-blue'}"></div>
                            <span class="font-bold text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors">${d}</span>
                        </div>
                    `).join('')}
                </div>
                <button onclick="window.navigateTo('${targetPage}')" class="w-full py-5 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all group ${tech.color === 'orange' ? 'bg-brand-orange text-white shadow-xl shadow-brand-orange/20' : 'bg-brand-blue text-white shadow-xl shadow-brand-blue/20'}">
                    ${buttonText}
                    <i data-lucide="chevron-right" class="w-5 h-5 group-hover:translate-x-1 transition-transform"></i>
                </button>
            </div>
        </div>
    `;
    if (window.lucide) window.lucide.createIcons();
}

window.navigateTo = navigateTo;
window.toggleTheme = toggleTheme;
window.toggleLanguage = () => {
    state.language = state.language === 'cs' ? 'en' : 'cs';
    // Update activeTech to the same tech in the new language
    const currentTechId = state.activeTech.id;
    state.activeTech = TECH_DATA[state.language].find(t => t.id === currentTechId) || TECH_DATA[state.language][0];
    render();
};
window.toggleMenu = toggleMenu;
window.setActiveTech = (id) => {
    state.activeTech = TECH_DATA[state.language].find(t => t.id === id);
    updateTechPanel();
    initTechMap();
};

init();
