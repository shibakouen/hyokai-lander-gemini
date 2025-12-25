import React, { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const examples = t.hero.examples;
  const totalExamples = examples.length;

  // Go to specific example with transition
  const goToExample = useCallback((index: number) => {
    if (index === currentIndex) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 150);
  }, [currentIndex]);

  // Auto-rotate every 5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % totalExamples);
        setIsTransitioning(false);
      }, 150);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, totalExamples]);

  const currentExample = examples[currentIndex];

  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Organic Background Blobs - Visible on tablet+ */}
      <div className="hidden md:block absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[10%] left-[10%] w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[10%] w-96 h-96 bg-cyan-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[20%] left-[40%] w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 flex flex-col items-start text-left z-10 relative">
            <div className="absolute -left-10 -top-10 w-20 h-20 bg-blue-400/10 rounded-full blur-2xl"></div>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/40 backdrop-blur-md border border-white/50 rounded-full mb-8 shadow-sm hover:bg-white/60 transition-colors cursor-default">
              <span className="w-2 h-2 rounded-full bg-cb-blue animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">{t.hero.badge}</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-light text-slate-900 mb-8 leading-[1.1] tracking-tight">
              {t.hero.headline} <br />
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cb-blue via-cyan-400 to-blue-600 animate-pulse-glow">{t.hero.subHeadline}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-lg leading-relaxed border-l-2 border-blue-200 pl-6">
              {t.hero.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a href="#pricing" className="group relative px-8 py-4 bg-slate-900 text-white rounded-2xl font-semibold overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-1 text-center">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-cb-blue to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {t.hero.ctaPrimary} <i className="fa-solid fa-wand-magic-sparkles group-hover:translate-x-1 transition-transform"></i>
                </span>
              </a>
              <a href="#how-it-works" className="px-8 py-4 bg-white/30 backdrop-blur-sm border border-white/60 text-slate-700 rounded-2xl font-semibold hover:bg-white/60 hover:border-white transition-all duration-300 text-center">
                {t.hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Visual: The Ice Prism */}
          <div
            className="lg:w-1/2 w-full perspective-1000 relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Floating Elements */}
            <div className="hidden md:block absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-2xl rotate-12 blur-lg opacity-40 animate-float-delayed"></div>
            <div className="hidden md:block absolute -bottom-5 -left-5 w-32 h-32 bg-gradient-to-tr from-purple-300 to-blue-400 rounded-full blur-xl opacity-30 animate-float"></div>

            <div className="relative ice-block rounded-[2.5rem] p-3 animate-float-slow transform hover:rotate-1 transition-transform duration-700">
               {/* Internal container for content */}
               <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] border border-white/60 overflow-hidden flex flex-col">

                 {/* Top Bar (Browser/Terminal style) */}
                 <div className="h-12 bg-white/20 border-b border-white/30 flex items-center px-6 gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400/60 border border-red-400/30"></div>
                    <div className="w-3 h-3 rounded-full bg-amber-400/60 border border-amber-400/30"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-400/60 border border-emerald-400/30"></div>
                    <div className="ml-auto text-[10px] font-mono text-slate-400/80">{t.hero.filename}</div>
                 </div>

                 <div className="flex flex-col md:flex-row">
                    {/* Input Side */}
                    <div className="p-6 md:p-10 flex-1 border-b md:border-b-0 md:border-r border-white/30 bg-gradient-to-b from-transparent to-white/10">
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                            <i className="fa-regular fa-comment-dots"></i> {t.hero.demoInputLabel}
                        </div>
                        <div
                          className={`p-6 bg-slate-50/40 rounded-2xl border border-white/50 text-lg md:text-xl font-medium text-slate-700 italic font-serif leading-relaxed relative transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                        >
                          <span className="absolute -top-3 -left-2 text-4xl text-blue-200/50">"</span>
                          {currentExample.input}
                          <span className="absolute -bottom-8 -right-2 text-4xl text-blue-200/50">"</span>
                        </div>
                        <div className={`mt-6 flex items-center gap-2 text-xs text-amber-600/80 font-medium px-3 py-1 bg-amber-50/50 rounded-full w-fit border border-amber-100 transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                          <i className="fa-solid fa-bolt"></i> {currentExample.tag}
                        </div>
                    </div>

                    {/* Output Side */}
                    <div className="p-6 md:p-10 flex-1 bg-gradient-to-br from-blue-50/40 to-cyan-100/20 relative overflow-hidden">
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-150%] animate-shimmer"></div>

                        <div className="flex justify-between items-center mb-4 relative z-10">
                          <div className="text-xs font-bold text-cb-blue uppercase tracking-widest flex items-center gap-2">
                            <i className="fa-solid fa-wand-magic-sparkles"></i> {t.hero.demoOutputLabel}
                          </div>
                          <div className="w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center text-white text-xs shadow-lg shadow-emerald-200">
                            <i className="fa-solid fa-check"></i>
                          </div>
                        </div>
                        <div className={`bg-white/60 p-5 rounded-2xl border border-white/80 shadow-sm text-sm text-slate-700 leading-7 relative z-10 backdrop-blur-sm transition-opacity duration-150 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                          {currentExample.output}
                        </div>
                    </div>
                 </div>
               </div>

               {/* Reflection highlights */}
               <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-[2.5rem] pointer-events-none"></div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {examples.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToExample(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-cb-blue w-6'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to example ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;