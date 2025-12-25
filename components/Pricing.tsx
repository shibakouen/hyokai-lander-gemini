import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

// Stripe price IDs for standard tiers
const STRIPE_PRICE_IDS = {
  free: { monthly: 'price_1ShB7xCs88k2DV32u5SZTKze', annual: 'price_1ShB7xCs88k2DV32u5SZTKze' },
  starter: { monthly: 'price_1SgZHyCs88k2DV32g2UFt1Vr', annual: 'price_1SgZHzCs88k2DV32suTd3OoL' },
  pro: { monthly: 'price_1SgZHzCs88k2DV32K1H4Q5CB', annual: 'price_1SgZHzCs88k2DV32TPog3GYb' },
  business: { monthly: 'price_1SgZI0Cs88k2DV32Wsx1etw7', annual: 'price_1SgZI0Cs88k2DV32oekBtFHN' },
  max: { monthly: 'price_1SgZI0Cs88k2DV32AhdBxJSJ', annual: 'price_1SgZI1Cs88k2DV32YfEG9JBB' },
};

type PlanId = 'free' | 'starter' | 'pro' | 'business' | 'max';

const Pricing: React.FC = () => {
  const { t, language } = useLanguage();
  const popularBadge = language === 'en' ? 'Most Popular' : '人気No.1';
  const [isCheckoutLoading, setIsCheckoutLoading] = useState(false);

  // Open Stripe checkout for a plan
  const handleSelectPlan = async (planId: PlanId) => {
    if (isCheckoutLoading) return;
    setIsCheckoutLoading(true);

    try {
      const response = await fetch(
        'https://znjqpxlijraodmjrhqaz.supabase.co/functions/v1/stripe-checkout',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            planId,
            interval: 'monthly',
            // Let the edge function determine the redirect URL
            // (guests → /checkout-success, authenticated → /settings)
            cancelUrl: window.location.href,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (err) {
      console.error('Error opening checkout:', err);
      alert('Failed to open checkout. Please try again.');
    } finally {
      setIsCheckoutLoading(false);
    }
  };

  return (
    <section id="pricing" className="py-32 relative">
      <div className="max-w-[1240px] mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">{t.pricing.headline}</h2>
        <p className="text-lg text-slate-600 mb-20 max-w-2xl mx-auto">
            {t.pricing.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-5 items-stretch">

            {/* TIER 0: FREE */}
            <div className="ice-block rounded-[2rem] p-6 md:p-8 flex flex-col items-center hover:bg-slate-50/50 transition-all duration-300 transform hover:-translate-y-2 relative group h-full border border-slate-200/50">
                <h3 className="text-xl font-medium text-slate-800 mb-2">{t.pricing.plans[0].name}</h3>
                <p className="text-xs text-slate-500 mb-4 font-medium uppercase tracking-wider">{t.pricing.plans[0].tier}</p>
                <div className="h-1 w-12 bg-slate-300 rounded-full mb-6"></div>

                <div className="text-4xl font-light text-slate-900 mb-2 tracking-tighter">{t.pricing.plans[0].price}</div>
                <div className="text-sm text-slate-500 mb-8">{t.pricing.month}</div>

                <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                    <li className="flex items-center gap-3 text-slate-900 font-semibold">
                        <i className="fa-solid fa-message text-slate-500"></i> {t.pricing.plans[0].features[0]}
                    </li>
                    {t.pricing.plans[0].features.slice(1).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                            <i className="fa-solid fa-check text-slate-400"></i> {item}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => handleSelectPlan('free')}
                    disabled={isCheckoutLoading}
                    className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 hover:text-slate-900 transition-colors bg-white/80 text-sm block text-center disabled:opacity-50 touch-manipulation"
                >
                    {isCheckoutLoading ? '...' : t.pricing.plans[0].cta}
                </button>
            </div>

            {/* TIER 1: STARTER */}
            <div className="ice-block rounded-[2rem] p-6 md:p-8 flex flex-col items-center hover:bg-blue-50/50 transition-all duration-300 transform hover:-translate-y-2 relative group h-full border border-blue-100/50">
                <h3 className="text-xl font-medium text-slate-800 mb-2">{t.pricing.plans[1].name}</h3>
                <p className="text-xs text-cb-blue mb-4 font-medium uppercase tracking-wider">{t.pricing.plans[1].tier}</p>
                <div className="h-1 w-12 bg-cb-blue-light rounded-full mb-6"></div>

                <div className="text-4xl font-light text-slate-900 mb-2 tracking-tighter">{t.pricing.plans[1].price}</div>
                <div className="text-sm text-slate-500 mb-8">{t.pricing.month}</div>

                <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                    <li className="flex items-center gap-3 text-slate-900 font-semibold">
                        <i className="fa-solid fa-message text-cb-blue"></i> {t.pricing.plans[1].features[0]}
                    </li>
                    {t.pricing.plans[1].features.slice(1).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                            <i className="fa-solid fa-check text-cb-blue-light"></i> {item}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => handleSelectPlan('starter')}
                    disabled={isCheckoutLoading}
                    className="w-full py-3 rounded-xl border border-cb-blue-light text-cb-blue-dark font-semibold hover:bg-cb-blue hover:text-white transition-colors bg-white/80 text-sm block text-center disabled:opacity-50 touch-manipulation"
                >
                    {isCheckoutLoading ? '...' : t.pricing.plans[1].cta}
                </button>
            </div>

            {/* TIER 2: PRO (Featured - Most Popular) */}
            <div className="rounded-[2.5rem] px-8 pb-8 pt-14 flex flex-col items-center bg-gradient-to-br from-slate-900 via-cb-blue-dark to-slate-900 text-white relative overflow-hidden shadow-2xl border border-white/10 transform md:scale-105 z-10 h-full">
                <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-cyan-400 border border-cyan-400/30 px-2 py-1 rounded-full uppercase bg-cyan-900/30 backdrop-blur-sm">
                    {popularBadge}
                </div>

                {/* Glow effect */}
                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-3xl"></div>

                <h3 className="text-2xl font-semibold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-200">{t.pricing.plans[2].name}</h3>
                <p className="text-xs text-cyan-200/70 mb-4 font-medium uppercase tracking-wider relative z-10">{t.pricing.plans[2].tier}</p>
                <div className="h-1 w-12 bg-cyan-500 rounded-full mb-6 relative z-10 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

                <div className="text-5xl font-light mb-2 relative z-10 tracking-tighter text-white">
                    {t.pricing.plans[2].price.split('.')[0]}<span className="text-lg text-cyan-200/50 font-normal">.{t.pricing.plans[2].price.split('.')[1]}</span>
                </div>
                <div className="text-sm text-cyan-200/50 mb-8 relative z-10">{t.pricing.month}</div>

                <ul className="space-y-4 mb-8 text-left w-full relative z-10 pl-2 text-sm flex-grow">
                    <li className="flex items-center gap-3 text-white font-bold text-base">
                        <i className="fa-solid fa-message text-cyan-400"></i> {t.pricing.plans[2].features[0]}
                    </li>
                    {t.pricing.plans[2].features.slice(1).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-cyan-50/90">
                            <div className="w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center text-white text-[10px] shadow-lg shadow-cyan-500/50">
                                <i className="fa-solid fa-check"></i>
                            </div>
                            {item}
                        </li>
                    ))}
                </ul>

                <button
                    onClick={() => handleSelectPlan('pro')}
                    disabled={isCheckoutLoading}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-cb-blue text-white font-bold hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-300 relative z-10 border border-white/20 text-sm block text-center disabled:opacity-50 touch-manipulation"
                >
                    {isCheckoutLoading ? '...' : t.pricing.plans[2].cta}
                </button>
            </div>

            {/* TIER 3: BUSINESS */}
            <div className="ice-block rounded-[2rem] p-6 md:p-8 flex flex-col items-center hover:bg-emerald-50/50 transition-all duration-300 transform hover:-translate-y-2 relative group h-full border-2 border-emerald-100">
                <h3 className="text-xl font-medium text-slate-800 mb-2">{t.pricing.plans[3].name}</h3>
                <p className="text-xs text-emerald-600 mb-4 font-medium uppercase tracking-wider">{t.pricing.plans[3].tier}</p>
                <div className="h-1 w-12 bg-emerald-400 rounded-full mb-6"></div>

                <div className="text-4xl font-light text-slate-900 mb-2 tracking-tighter">{t.pricing.plans[3].price}</div>
                <div className="text-sm text-slate-500 mb-8">{t.pricing.month}</div>

                <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                    <li className="flex items-center gap-3 text-slate-900 font-semibold">
                        <i className="fa-solid fa-message text-emerald-500"></i> {t.pricing.plans[3].features[0]}
                    </li>
                    {t.pricing.plans[3].features.slice(1).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-600">
                            <i className="fa-solid fa-check text-emerald-400"></i> {item}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => handleSelectPlan('business')}
                    disabled={isCheckoutLoading}
                    className="w-full py-3 rounded-xl border border-emerald-400 text-emerald-700 font-semibold hover:bg-emerald-500 hover:text-white transition-colors bg-white/80 text-sm block text-center disabled:opacity-50 touch-manipulation"
                >
                    {isCheckoutLoading ? '...' : t.pricing.plans[3].cta}
                </button>
            </div>

            {/* TIER 4: MAX */}
            <div className="rounded-[2rem] p-6 md:p-8 flex flex-col items-center bg-gradient-to-b from-slate-950 to-deep-water text-white relative overflow-hidden shadow-xl border border-slate-700 group h-full">
                {/* Subtle shine animation */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                <h3 className="text-xl font-medium text-slate-200 mb-2">{t.pricing.plans[4].name}</h3>
                <p className="text-xs text-purple-300 mb-4 font-medium uppercase tracking-wider">{t.pricing.plans[4].tier}</p>
                <div className="h-1 w-12 bg-purple-500 rounded-full mb-6"></div>

                <div className="text-4xl font-light text-white mb-2 tracking-tighter">{t.pricing.plans[4].price}</div>
                <div className="text-sm text-slate-400 mb-8">{t.pricing.month}</div>

                <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                     <li className="flex items-center gap-3 text-white font-bold text-base">
                        <i className="fa-solid fa-bolt text-purple-400"></i> {t.pricing.plans[4].features[0]}
                    </li>
                    {t.pricing.plans[4].features.slice(1).map((item, i) => (
                        <li key={i} className="flex items-center gap-3 text-slate-300">
                            <i className="fa-solid fa-star text-purple-400 text-xs"></i> {item}
                        </li>
                    ))}
                </ul>
                <button
                    onClick={() => handleSelectPlan('max')}
                    disabled={isCheckoutLoading}
                    className="w-full py-3 rounded-xl border border-purple-500/50 text-purple-200 font-semibold hover:bg-purple-900/50 hover:text-white transition-colors bg-purple-900/20 text-sm block text-center disabled:opacity-50 touch-manipulation"
                >
                    {isCheckoutLoading ? '...' : t.pricing.plans[4].cta}
                </button>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Pricing;
