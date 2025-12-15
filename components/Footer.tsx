import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-deep-water text-white pt-24 pb-12 relative overflow-hidden">
      {/* Deep Sea Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800 via-deep-water to-black opacity-80 z-0"></div>
      
      {/* Light Rays */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-cyan-500/10 to-transparent blur-3xl z-0 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between gap-16 mb-20">
          
          {/* Brand */}
          <div className="max-w-sm space-y-6">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-white to-slate-400 rounded-xl text-deep-water flex items-center justify-center font-bold text-2xl shadow-[0_0_15px_rgba(255,255,255,0.3)]">H</div>
                <span className="font-semibold text-2xl tracking-tight text-white">Hyokai</span>
            </div>
            <p className="text-slate-400 font-light leading-relaxed">
                {t.footer.desc}
            </p>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 text-sm">
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t.footer.products}</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.howItWorks}</a></li>
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.pricing}</a></li>
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.examples}</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t.footer.learn}</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.help}</a></li>
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.beginners}</a></li>
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.community}</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">{t.footer.company}</h4>
                <ul className="space-y-4 text-slate-400">
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.about}</a></li>
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.blog}</a></li>
                    <li><a href="#" className="hover:text-cyan-300 transition-colors">{t.footer.links.contact}</a></li>
                </ul>
            </div>
          </div>

        </div>

        {/* Newsletter Bar */}
        <div className="border-t border-white/10 pt-12 pb-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-slate-400 text-sm">
                {t.footer.rights}
            </div>
            
            <div className="flex gap-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    <i className="fa-brands fa-github"></i>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-cyan-500 hover:text-white transition-all duration-300">
                    <i className="fa-brands fa-discord"></i>
                </a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;