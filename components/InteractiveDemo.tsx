import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const InteractiveDemo: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('recipes');
  const [status, setStatus] = useState<'idle' | 'scanning' | 'processing' | 'typing' | 'done'>('idle');
  const [typedOutput, setTypedOutput] = useState('');
  
  // Construct examples array dynamically based on translation
  const examples = [
    { id: 'recipes', icon: 'fa-utensils', label: t.demo.tabs.recipes, ...t.demo.examples.recipes },
    { id: 'trip', icon: 'fa-plane', label: t.demo.tabs.trip, ...t.demo.examples.trip },
    { id: 'raise', icon: 'fa-handshake', label: t.demo.tabs.raise, ...t.demo.examples.raise },
    { id: 'email', icon: 'fa-envelope', label: t.demo.tabs.email, ...t.demo.examples.email }
  ];

  const currentExample = examples.find(e => e.id === activeTab) || examples[0];
  const typingSpeed = 5; 

  // Reset state when tab changes
  useEffect(() => {
    setStatus('idle');
    setTypedOutput('');
  }, [activeTab]);

  // Handle Typing Animation
  useEffect(() => {
    if (status === 'typing') {
      let currentIndex = 0;
      const fullText = currentExample.output;
      
      const interval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTypedOutput(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setStatus('done');
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [status, currentExample.output]);

  const handleImprove = () => {
    if (status !== 'idle' && status !== 'done') return;
    
    setStatus('scanning');
    
    setTimeout(() => {
      setStatus('processing');
      setTimeout(() => {
        setStatus('typing');
      }, 1500);
    }, 600);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(currentExample.output);
  };

  return (
    <section id="solutions" className="py-24 md:py-32 relative overflow-hidden bg-slate-50/50">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-radial from-blue-100/40 to-transparent blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-[1240px] mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
           <span className="text-cb-blue font-bold tracking-widest uppercase text-xs mb-3 block">{t.demo.sectionTitle}</span>
           <h2 className="text-3xl md:text-5xl font-light text-slate-900 mb-6">
             {t.demo.headlineStart}<span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cb-blue to-purple-500">{t.demo.headlineHighlight}</span>{t.demo.headlineEnd}
           </h2>
           <p className="text-slate-600 max-w-xl mx-auto text-lg">
             {t.demo.description}
           </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {examples.map((ex) => (
            <button
              key={ex.id}
              onClick={() => setActiveTab(ex.id)}
              className={`px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300 font-medium ${
                activeTab === ex.id
                  ? 'bg-slate-800 text-white shadow-lg scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              <i className={`fa-solid ${ex.icon} ${activeTab === ex.id ? 'text-cyan-400' : 'text-slate-400'}`}></i>
              {ex.label}
            </button>
          ))}
        </div>

        {/* Demo Stage */}
        <div className="relative flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-0 lg:h-[600px] h-auto">
          
          {/* LEFT: Input (Paper Note Aesthetic) */}
          <div className="lg:w-5/12 relative z-10 flex flex-col h-[400px] lg:h-auto">
            <div className="bg-[#fff9e6] rounded-t-xl lg:rounded-l-2xl lg:rounded-tr-none border border-slate-200 shadow-md h-full relative overflow-hidden flex flex-col transform transition-transform duration-300 hover:scale-[1.01] origin-right">
                {/* Notebook Header */}
                <div className="h-12 border-b border-amber-100 bg-[#fff5d6] flex items-center px-6">
                    <div className="w-full h-1 bg-amber-200/50 rounded-full"></div>
                </div>

                {/* Notebook Content */}
                <div className="p-6 md:p-8 flex-grow relative bg-[linear-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:100%_2rem]">
                   <label className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-2 font-sans">
                     {t.demo.ui.rawIdea}
                   </label>
                   <p className="text-xl md:text-2xl font-serif text-slate-800 italic leading-loose">
                     "{currentExample.input}"
                   </p>

                   {/* Scanning Effect */}
                   {status === 'scanning' && (
                     <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent h-20 w-full animate-[scan_1s_ease-in-out]"></div>
                   )}
                </div>

                {/* Bottom Badge */}
                <div className="p-4 bg-[#fff5d6] border-t border-amber-100 flex justify-between items-center">
                    <span className="text-xs text-amber-700 font-medium flex items-center gap-1">
                        <i className="fa-solid fa-pen-nib"></i> {t.demo.ui.draft}
                    </span>
                    {status === 'idle' && (
                       <span className="text-xs text-slate-400 animate-pulse">{t.demo.ui.waiting}</span>
                    )}
                </div>
            </div>
          </div>

          {/* CENTER: Action Area */}
          <div className="lg:w-2/12 relative z-20 flex items-center justify-center -my-6 lg:my-0 h-24 lg:h-auto">
             {/* Connector Line (Desktop) */}
             <div className="hidden lg:block absolute left-0 right-0 h-[2px] bg-slate-200 top-1/2 -z-10"></div>
             
             {/* Main Button */}
             <button 
                onClick={handleImprove}
                disabled={status !== 'idle' && status !== 'done'}
                className={`relative w-20 h-20 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 z-20 ${
                    status === 'processing' 
                    ? 'bg-slate-900 scale-110 cursor-wait' 
                    : status === 'done'
                        ? 'bg-emerald-500 hover:bg-emerald-600 scale-100 cursor-pointer'
                        : 'bg-cb-blue hover:bg-cb-blue-dark hover:scale-110 cursor-pointer'
                }`}
             >
                {/* Button Icon Logic */}
                {status === 'idle' && (
                    <i className="fa-solid fa-wand-magic-sparkles text-2xl text-white animate-pulse"></i>
                )}
                
                {status === 'scanning' && (
                    <i className="fa-solid fa-eye text-2xl text-white"></i>
                )}

                {status === 'processing' && (
                    <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 border-t-cyan-400 animate-spin"></div>
                )}
                
                {(status === 'typing' || status === 'processing') && (
                     <i className="fa-solid fa-gear text-2xl text-white animate-spin-slow"></i>
                )}

                {status === 'done' && (
                    <i className="fa-solid fa-rotate-right text-2xl text-white"></i>
                )}
             </button>

             {/* Pulse Rings */}
             {status === 'processing' && (
                 <>
                    <div className="absolute w-24 h-24 rounded-full border border-cyan-400/50 animate-ping opacity-20"></div>
                    <div className="absolute w-32 h-32 rounded-full border border-purple-400/30 animate-ping animation-delay-200 opacity-10"></div>
                 </>
             )}
          </div>

          {/* RIGHT: Output (Glass Tech Aesthetic) */}
          <div className="lg:w-5/12 relative z-10 flex flex-col h-[500px] lg:h-auto">
             <div className="ice-block bg-slate-900/90 backdrop-blur-xl rounded-b-xl lg:rounded-r-2xl lg:rounded-bl-none border border-slate-700/50 shadow-2xl h-full flex flex-col overflow-hidden transform transition-transform duration-300 hover:scale-[1.01] origin-left">
                
                {/* Glass Header */}
                <div className="h-12 bg-white/5 border-b border-white/10 flex items-center px-6 justify-between">
                    <div className="flex gap-2">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-600"></div>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-cyan-400 font-mono">
                        {status === 'processing' ? 'OPTIMIZING...' : 'HYOKAI_PROMPT_V1.0'}
                    </div>
                </div>

                {/* Output Content */}
                <div className="p-6 md:p-8 flex-grow relative font-mono text-sm leading-relaxed overflow-y-auto custom-scrollbar">
                    {status === 'idle' || status === 'scanning' ? (
                        <div className="h-full flex flex-col items-center justify-center text-slate-500 space-y-4 opacity-50">
                            <i className="fa-solid fa-microchip text-4xl"></i>
                            <p>Ready to process...</p>
                        </div>
                    ) : (
                        <div className="text-cyan-50 whitespace-pre-wrap">
                            {typedOutput}
                            <span className={`${status === 'typing' ? 'opacity-100' : 'opacity-0'} inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle animate-pulse`}></span>
                        </div>
                    )}
                </div>

                {/* Footer / Actions */}
                <div className="p-4 border-t border-white/5 bg-white/5 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${status === 'done' ? 'bg-emerald-400' : 'bg-slate-500'}`}></div>
                        <span className="text-xs text-slate-400">
                            {status === 'done' ? t.demo.ui.optimized : t.demo.ui.standby}
                        </span>
                    </div>

                    {status === 'done' && (
                        <button 
                            onClick={handleCopy}
                            className="text-xs flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 transition-colors border border-emerald-500/30"
                        >
                            <i className="fa-regular fa-copy"></i> {t.demo.ui.copy}
                        </button>
                    )}
                </div>
             </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes scan {
            0% { top: 0; opacity: 0; }
            50% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .animate-spin-slow {
            animation: spin 3s linear infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.1);
            border-radius: 3px;
        }
      `}</style>
    </section>
  );
};

export default InteractiveDemo;