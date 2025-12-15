import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pt-4 px-4 transition-all duration-500">
      <header className={`w-full max-w-[1240px] transition-all duration-500 rounded-2xl ${
        scrolled 
          ? 'ice-block py-3 px-6 shadow-lg' 
          : 'bg-transparent py-5 px-6'
      }`}>
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group relative">
            <div className="absolute inset-0 bg-cb-blue blur-xl opacity-20 group-hover:opacity-40 transition-opacity rounded-full"></div>
            <div className="relative w-10 h-10 bg-gradient-to-tr from-cb-blue to-cyan-300 rounded-xl rotate-3 group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center text-white font-bold text-xl border border-white/40 shadow-inner">
              <span className="-rotate-3 group-hover:-rotate-12 transition-transform duration-300">H</span>
            </div>
            <span className="font-semibold text-xl tracking-tight text-slate-800 group-hover:text-cb-blue transition-colors">Hyokai</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            <a href="#how-it-works" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cb-blue hover:bg-white/40 transition-all">
              {t.nav.howItWorks}
            </a>
            <a href="#solutions" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cb-blue hover:bg-white/40 transition-all">
              {t.nav.solutions}
            </a>
            <a href="#pricing" className="px-4 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cb-blue hover:bg-white/40 transition-all">
              {t.nav.pricing}
            </a>

            {/* Language Toggle Desktop */}
            <button 
              onClick={toggleLanguage}
              className="ml-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-cb-blue hover:bg-white/40 transition-all flex items-center gap-2"
              aria-label="Toggle Language"
            >
              <i className="fa-solid fa-globe"></i>
              <span className="uppercase">{language}</span>
            </button>

            <a 
              href="#contact" 
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-cb-blue to-cyan-400 text-white rounded-xl font-semibold shadow-[0_4px_14px_0_rgba(12,162,231,0.39)] hover:shadow-[0_6px_20px_rgba(12,162,231,0.23)] hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">{t.nav.getStarted}</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </nav>

          {/* Mobile Toggle & Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
             <button 
                onClick={toggleLanguage}
                className="text-slate-600 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/30"
              >
                 <span className="font-bold uppercase text-sm">{language === 'en' ? 'JP' : 'EN'}</span>
            </button>
            <button 
              className="text-2xl text-slate-700 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/30 p-4"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <i className={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileMenuOpen(false)} />
      
      {/* Mobile Menu Panel */}
      <div className={`fixed top-24 left-4 right-4 ice-block rounded-2xl p-6 flex flex-col gap-4 z-50 transform transition-all duration-300 md:hidden ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'}`}>
        <a href="#how-it-works" className="text-lg font-medium text-slate-700 p-4 hover:bg-white/40 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.nav.howItWorks}</a>
        <a href="#solutions" className="text-lg font-medium text-slate-700 p-4 hover:bg-white/40 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.nav.solutions}</a>
        <a href="#pricing" className="text-lg font-medium text-slate-700 p-4 hover:bg-white/40 rounded-lg transition-colors" onClick={() => setMobileMenuOpen(false)}>{t.nav.pricing}</a>
        <a href="#contact" className="text-lg font-medium text-cb-blue p-4 bg-blue-50/50 rounded-lg" onClick={() => setMobileMenuOpen(false)}>{t.nav.getStarted}</a>
      </div>
    </div>
  );
};

export default Navbar;