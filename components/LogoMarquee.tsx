import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const logos = [
  { name: 'ChatGPT', color: 'bg-emerald-600' },
  { name: 'Claude', color: 'bg-orange-600' },
  { name: 'Gemini', color: 'bg-blue-600' },
  { name: 'Perplexity', color: 'bg-cyan-600' },
  { name: 'Copilot', color: 'bg-pink-600' },
  { name: 'Llama', color: 'bg-blue-500' },
  { name: 'Mistral', color: 'bg-yellow-500' },
];

const LogoMarquee: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 overflow-hidden relative">
      {/* Pipe Background */}
      <div className="absolute inset-y-0 left-0 w-full bg-slate-900/5 backdrop-blur-sm -skew-y-2 transform origin-left scale-110 border-y border-white/20"></div>
      
      <div className="max-w-[1240px] mx-auto px-6 text-center mb-8 relative z-10">
        <h3 className="text-slate-500 text-sm font-medium tracking-widest uppercase">
          {t.marquee.text}
        </h3>
      </div>
      
      <div className="relative flex w-full overflow-hidden py-4">
        <div className="flex animate-marquee min-w-full shrink-0 items-center justify-around gap-10 md:gap-20">
          {[...logos, ...logos].map((logo, idx) => (
            <div key={`${logo.name}-${idx}`} className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 group cursor-default">
               <div className={`w-10 h-10 rounded-xl ${logo.color} flex items-center justify-center text-white text-sm font-bold shadow-lg shadow-black/5 rotate-3 group-hover:rotate-0 transition-transform`}>
                 {logo.name[0]}
               </div>
               <span className="text-slate-700 font-bold text-xl tracking-tight group-hover:text-black transition-colors">{logo.name}</span>
            </div>
          ))}
        </div>
        
        {/* Fog Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-r from-[#f0f9ff] to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-10 md:w-40 bg-gradient-to-l from-[#f0f9ff] to-transparent z-10"></div>
      </div>
    </section>
  );
};

export default LogoMarquee;