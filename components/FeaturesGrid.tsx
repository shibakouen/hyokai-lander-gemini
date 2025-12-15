import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const featureIcons = [
  'fa-hand-sparkles',
  'fa-puzzle-piece',
  'fa-face-smile-beam'
];

const featureShapes = [
  'rounded-tl-[3rem] rounded-br-[3rem] rounded-tr-2xl rounded-bl-2xl',
  'rounded-2xl',
  'rounded-tr-[3rem] rounded-bl-[3rem] rounded-tl-2xl rounded-br-2xl'
];

const FeaturesGrid: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="py-32 relative">
      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="mb-20 text-center md:text-left">
          <span className="text-cb-blue font-bold tracking-widest uppercase text-xs mb-3 block">{t.features.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 leading-tight">
            {t.features.headlineStart}
            <span className="font-semibold decoration-cb-blue/30 underline decoration-4 underline-offset-4">{t.features.headlineHighlight}</span>
             <br/>{t.features.headlineEnd}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {t.features.cards.map((f, i) => (
            <div 
                key={i} 
                className={`ice-block p-8 md:p-10 flex flex-col items-start group ice-card-hover ${featureShapes[i]} relative overflow-hidden`}
                style={{ marginTop: i === 1 ? '3rem' : '0' }} // Offset the middle card only on desktop is handled via grid, but logic here assumes desktop or flex. 
                // Wait, in mobile grid-cols-1, this marginTop will push the second card down. 
                // I will add a className override for mobile
            >
              {/* Internal Glow */}
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-tl from-cb-blue/20 to-transparent rounded-full blur-2xl group-hover:bg-cb-blue/30 transition-colors duration-500"></div>
              
              <div className="w-16 h-16 rounded-2xl bg-white/60 border border-white shadow-lg flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 relative z-10">
                <i className={`fa-solid ${featureIcons[i]} text-2xl text-transparent bg-clip-text bg-gradient-to-br from-cb-blue to-cyan-500`}></i>
              </div>
              
              <h3 className="text-2xl font-semibold text-slate-800 mb-4 relative z-10">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed relative z-10">
                {f.desc}
              </p>
              
              <div className="mt-8 pt-6 border-t border-slate-200/50 w-full relative z-10 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <span className="text-sm font-bold text-cb-blue flex items-center gap-2">
                    {f.link} <i className="fa-solid fa-arrow-right text-xs"></i>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Small Fix for mobile margin top issue logic inside loop */}
      <style>{`
        @media (max-width: 768px) {
            .ice-block[style*="margin-top"] {
                margin-top: 0 !important;
            }
        }
      `}</style>
    </section>
  );
};

export default FeaturesGrid;