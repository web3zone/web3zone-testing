
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Community } from './components/Community';
import { Contact } from './components/Contact';
import { Blog } from './components/Blog';
import { BlogDetail } from './components/BlogDetail';
import { Technologies } from './components/Technologies';
import { WhatIsWeb3 } from './components/WhatIsWeb3';
import { About } from './components/About';
import { HotTopics } from './components/HotTopics';
import { Footer } from './components/Footer';

export type PageType = 'home' | 'contact' | 'blog' | 'technologies' | 'what-is-web3' | 'about' | 'hot-topics' | 'blog-detail';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const navigateTo = (page: PageType) => setCurrentPage(page);

  return (
    <div className="min-h-screen bg-brand-light dark:bg-brand-dark text-slate-900 dark:text-slate-100 transition-colors duration-500 overflow-x-hidden">
      {/* Background blobs for visual interest */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-orange/10 blur-[120px] rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-blue/10 blur-[120px] rounded-full animate-pulse-slow"></div>
      </div>

      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} onNavigate={navigateTo} activePage={currentPage} />
      
      <main>
        {currentPage === 'home' && (
          <>
            <Hero onNavigate={navigateTo} />
            <Features />
            <Stats />
            <Community />
          </>
        )}
        {currentPage === 'contact' && <Contact />}
        {currentPage === 'blog' && <Blog onNavigate={navigateTo} />}
        {currentPage === 'blog-detail' && <BlogDetail onNavigate={navigateTo} isDarkMode={isDarkMode} />}
        {currentPage === 'technologies' && <Technologies />}
        {currentPage === 'what-is-web3' && <WhatIsWeb3 />}
        {currentPage === 'about' && <About />}
        {currentPage === 'hot-topics' && <HotTopics />}
      </main>

      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;