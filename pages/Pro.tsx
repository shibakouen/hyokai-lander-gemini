import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Pro: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Determine language from URL path
  const language = location.pathname.includes('/ja') ? 'ja' : 'en';

  // Language toggle handler
  const toggleLanguage = () => {
    if (language === 'en') {
      navigate('/pro/ja');
    } else {
      navigate('/pro');
    }
  };

  const popularBadge = language === 'en' ? 'Most Popular' : '人気No.1';

  // Pro-only pricing tiers
  const proPlans = language === 'en' ? {
    hero: {
      badge: 'Pro Plans',
      headline: 'Choose Your',
      headlineHighlight: 'Pro Plan',
      description: 'Unlock the full power of Hyokai with advanced features for power users and teams.',
      note: 'All prices in USD. Cancel anytime. 3-day free trial included.',
    },
    month: '/month',
    plans: [
      {
        name: 'Pro',
        tier: 'For Individuals',
        price: '$19.99',
        features: [
          '150 transformations/mo',
          '3 GitHub repositories',
          '5 saved contexts',
          '2 compare model slots',
          'All AI models',
          'Priority email support',
        ],
        cta: 'Start Free Trial',
        highlight: false,
      },
      {
        name: 'Pro Plus',
        tier: 'For Power Users',
        price: '$49.99',
        features: [
          '500 transformations/mo',
          '10 GitHub repositories',
          '20 saved contexts',
          '3 compare model slots',
          'All AI models',
          'Priority support',
        ],
        cta: 'Start Free Trial',
        highlight: true,
      },
      {
        name: 'Pro Team',
        tier: 'For Teams',
        price: '$79.99',
        features: [
          '1,500 transformations/mo',
          'Unlimited GitHub repos',
          'Unlimited contexts',
          '4 compare model slots',
          '5 team seats',
          'Dedicated support',
        ],
        cta: 'Start Free Trial',
        highlight: false,
      },
      {
        name: 'Pro Max',
        tier: 'For Enterprises',
        price: '$199.99',
        features: [
          '5,000 transformations/mo',
          'Unlimited everything',
          'Custom integrations',
          'All compare slots',
          'Unlimited team seats',
          'White-glove onboarding',
        ],
        cta: 'Contact Sales',
        highlight: false,
      },
    ],
    faq: {
      title: 'Frequently Asked Questions',
      items: [
        {
          question: 'What happens after my free trial?',
          answer: 'After your 3-day free trial, your card will be charged for the plan you selected. You can cancel anytime before the trial ends to avoid charges.',
        },
        {
          question: 'Can I change plans later?',
          answer: "Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
        },
        {
          question: 'What counts as a transformation?',
          answer: "Each time you submit a prompt and Hyokai transforms it into a technical prompt, that counts as one transformation. Unused transformations don't roll over.",
        },
      ],
    },
    footer: {
      desc: 'Transform your ideas into powerful AI prompts.',
      rights: '© 2025 Hyokai Inc. All rights reserved.',
    },
  } : {
    hero: {
      badge: 'Proプラン',
      headline: '',
      headlineHighlight: 'Proプラン',
      description: 'パワーユーザーとチームのための高度な機能で、Hyokaiの全力を引き出しましょう。',
      note: '価格はすべてUSD。いつでも解約可能。3日間の無料トライアル付き。',
    },
    month: '/月',
    plans: [
      {
        name: 'プロ',
        tier: '個人向け',
        price: '$19.99',
        features: [
          '月150回の変換',
          'GitHubリポジトリ3つ',
          '保存コンテキスト5つ',
          '比較モデル2スロット',
          'すべてのAIモデル',
          '優先メールサポート',
        ],
        cta: '無料トライアル開始',
        highlight: false,
      },
      {
        name: 'プロプラス',
        tier: 'パワーユーザー向け',
        price: '$49.99',
        features: [
          '月500回の変換',
          'GitHubリポジトリ10個',
          '保存コンテキスト20個',
          '比較モデル3スロット',
          'すべてのAIモデル',
          '優先サポート',
        ],
        cta: '無料トライアル開始',
        highlight: true,
      },
      {
        name: 'プロチーム',
        tier: 'チーム向け',
        price: '$79.99',
        features: [
          '月1,500回の変換',
          'GitHubリポジトリ無制限',
          'コンテキスト無制限',
          '比較モデル4スロット',
          'チームシート5名',
          '専用サポート',
        ],
        cta: '無料トライアル開始',
        highlight: false,
      },
      {
        name: 'プロマックス',
        tier: 'エンタープライズ向け',
        price: '$199.99',
        features: [
          '月5,000回の変換',
          'すべて無制限',
          'カスタム連携',
          '全比較スロット',
          'チームシート無制限',
          '専任オンボーディング',
        ],
        cta: 'お問い合わせ',
        highlight: false,
      },
    ],
    faq: {
      title: 'よくある質問',
      items: [
        {
          question: '無料トライアル後はどうなりますか？',
          answer: '3日間の無料トライアル終了後、選択したプランの料金がカードに請求されます。トライアル終了前にいつでもキャンセルして課金を避けることができます。',
        },
        {
          question: 'あとからプランを変更できますか？',
          answer: 'はい！いつでもプランのアップグレードまたはダウングレードが可能です。変更は即座に反映され、差額は日割り計算されます。',
        },
        {
          question: '「変換」とは何を指しますか？',
          answer: 'プロンプトを送信し、Hyokaiが技術的なプロンプトに変換するたびに1回の変換としてカウントされます。未使用の変換は翌月に繰り越されません。',
        },
      ],
    },
    footer: {
      desc: 'あなたのアイデアを強力なAIプロンプトに変換します。',
      rights: '© 2025 Hyokai Inc. All rights reserved.',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-purple-500/20">
        <div className="max-w-[1240px] mx-auto px-6 py-4 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">H</div>
            <span className="font-semibold text-lg text-white">Hyokai</span>
            <span className="text-purple-400 font-medium text-sm ml-1">Pro</span>
          </a>
          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 text-sm text-purple-300 hover:text-white transition-colors"
            >
              <span className="w-4 h-4">🌐</span>
              <span className="uppercase">{language}</span>
            </button>
            <a
              href="https://app.hyokai.ai"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-500 transition-colors"
            >
              {language === 'en' ? 'Go to App' : 'アプリを開く'}
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-fuchsia-500/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1240px] mx-auto px-6 text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-8 border border-purple-500/30">
            {proPlans.hero.badge}
          </div>
          <h1 className="text-5xl md:text-6xl font-light text-white mb-6 leading-tight">
            {proPlans.hero.headline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-fuchsia-400 font-normal">{proPlans.hero.headlineHighlight}</span>
          </h1>
          <p className="text-xl text-purple-200/80 max-w-2xl mx-auto mb-4">
            {proPlans.hero.description}
          </p>
          <p className="text-sm text-purple-300/60">
            {proPlans.hero.note}
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="pb-32 relative">
        <div className="max-w-[1240px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch">

            {/* TIER 1: PRO */}
            <div className="bg-slate-800/50 rounded-[2rem] p-6 md:p-8 flex flex-col items-center hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2 relative group h-full border border-purple-500/20 backdrop-blur-sm">
              <h3 className="text-xl font-medium text-white mb-2">{proPlans.plans[0].name}</h3>
              <p className="text-xs text-purple-400 mb-4 font-medium uppercase tracking-wider">{proPlans.plans[0].tier}</p>
              <div className="h-1 w-12 bg-purple-500/50 rounded-full mb-6"></div>

              <div className="text-4xl font-light text-white mb-2 tracking-tighter">{proPlans.plans[0].price}</div>
              <div className="text-sm text-purple-300/60 mb-8">{proPlans.month}</div>

              <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                <li className="flex items-center gap-3 text-white font-semibold">
                  <i className="fa-solid fa-message text-purple-400"></i> {proPlans.plans[0].features[0]}
                </li>
                {proPlans.plans[0].features.slice(1).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-purple-200/80">
                    <i className="fa-solid fa-check text-purple-400/70"></i> {item}
                  </li>
                ))}
              </ul>
              <a href="https://app.hyokai.ai" className="w-full py-3 rounded-xl border border-purple-500/50 text-purple-300 font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-colors bg-transparent text-sm block text-center">
                {proPlans.plans[0].cta}
              </a>
            </div>

            {/* TIER 2: PRO PLUS (Featured - Most Popular) */}
            <div className="rounded-[2.5rem] px-8 pb-8 pt-14 flex flex-col items-center bg-gradient-to-br from-purple-900 via-purple-800 to-fuchsia-900 text-white relative overflow-hidden shadow-2xl shadow-purple-500/30 border border-purple-400/30 transform md:scale-105 z-10 h-full">
              <div className="absolute top-4 right-4 text-[9px] font-bold tracking-widest text-fuchsia-300 border border-fuchsia-400/50 px-2 py-1 rounded-full uppercase bg-fuchsia-900/50 backdrop-blur-sm">
                {popularBadge}
              </div>

              {/* Glow effect */}
              <div className="absolute top-20 left-1/2 -translate-x-1/2 w-32 h-32 bg-fuchsia-500/30 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-semibold mb-2 relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-fuchsia-200">{proPlans.plans[1].name}</h3>
              <p className="text-xs text-fuchsia-200/70 mb-4 font-medium uppercase tracking-wider relative z-10">{proPlans.plans[1].tier}</p>
              <div className="h-1 w-12 bg-fuchsia-400 rounded-full mb-6 relative z-10 shadow-[0_0_10px_rgba(232,121,249,0.8)]"></div>

              <div className="text-5xl font-light mb-2 relative z-10 tracking-tighter text-white">
                {proPlans.plans[1].price.split('.')[0]}<span className="text-lg text-fuchsia-200/50 font-normal">.{proPlans.plans[1].price.split('.')[1]}</span>
              </div>
              <div className="text-sm text-fuchsia-200/50 mb-8 relative z-10">{proPlans.month}</div>

              <ul className="space-y-4 mb-8 text-left w-full relative z-10 pl-2 text-sm flex-grow">
                <li className="flex items-center gap-3 text-white font-bold text-base">
                  <i className="fa-solid fa-message text-fuchsia-300"></i> {proPlans.plans[1].features[0]}
                </li>
                {proPlans.plans[1].features.slice(1).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-fuchsia-50/90">
                    <div className="w-5 h-5 rounded-full bg-fuchsia-500 flex items-center justify-center text-white text-[10px] shadow-lg shadow-fuchsia-500/50">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="https://app.hyokai.ai" className="w-full py-4 rounded-xl bg-gradient-to-r from-fuchsia-500 to-purple-500 text-white font-bold hover:shadow-[0_0_20px_rgba(232,121,249,0.5)] transition-all duration-300 relative z-10 border border-white/20 text-sm block text-center">
                {proPlans.plans[1].cta}
              </a>
            </div>

            {/* TIER 3: PRO TEAM */}
            <div className="bg-slate-800/50 rounded-[2rem] p-6 md:p-8 flex flex-col items-center hover:bg-slate-800/70 transition-all duration-300 transform hover:-translate-y-2 relative group h-full border border-emerald-500/30 backdrop-blur-sm">
              <h3 className="text-xl font-medium text-white mb-2">{proPlans.plans[2].name}</h3>
              <p className="text-xs text-emerald-400 mb-4 font-medium uppercase tracking-wider">{proPlans.plans[2].tier}</p>
              <div className="h-1 w-12 bg-emerald-500/50 rounded-full mb-6"></div>

              <div className="text-4xl font-light text-white mb-2 tracking-tighter">{proPlans.plans[2].price}</div>
              <div className="text-sm text-purple-300/60 mb-8">{proPlans.month}</div>

              <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                <li className="flex items-center gap-3 text-white font-semibold">
                  <i className="fa-solid fa-message text-emerald-400"></i> {proPlans.plans[2].features[0]}
                </li>
                {proPlans.plans[2].features.slice(1).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-purple-200/80">
                    <i className="fa-solid fa-check text-emerald-400/70"></i> {item}
                  </li>
                ))}
              </ul>
              <a href="https://app.hyokai.ai" className="w-full py-3 rounded-xl border border-emerald-500/50 text-emerald-300 font-semibold hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-colors bg-transparent text-sm block text-center">
                {proPlans.plans[2].cta}
              </a>
            </div>

            {/* TIER 4: PRO MAX */}
            <div className="rounded-[2rem] p-6 md:p-8 flex flex-col items-center bg-gradient-to-b from-slate-900 to-slate-950 text-white relative overflow-hidden border border-amber-500/30 group h-full">
              {/* Subtle shine animation */}
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <h3 className="text-xl font-medium text-amber-100 mb-2">{proPlans.plans[3].name}</h3>
              <p className="text-xs text-amber-400 mb-4 font-medium uppercase tracking-wider">{proPlans.plans[3].tier}</p>
              <div className="h-1 w-12 bg-amber-500 rounded-full mb-6"></div>

              <div className="text-4xl font-light text-white mb-2 tracking-tighter">{proPlans.plans[3].price}</div>
              <div className="text-sm text-amber-300/50 mb-8">{proPlans.month}</div>

              <ul className="space-y-4 mb-8 text-left w-full text-sm flex-grow">
                <li className="flex items-center gap-3 text-white font-bold text-base">
                  <i className="fa-solid fa-bolt text-amber-400"></i> {proPlans.plans[3].features[0]}
                </li>
                {proPlans.plans[3].features.slice(1).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-amber-100/80">
                    <i className="fa-solid fa-star text-amber-400 text-xs"></i> {item}
                  </li>
                ))}
              </ul>
              <a href="mailto:hello@hyokai.ai" className="w-full py-3 rounded-xl border border-amber-500/50 text-amber-200 font-semibold hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-colors bg-amber-900/20 text-sm block text-center">
                {proPlans.plans[3].cta}
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-light text-white text-center mb-12">
            {proPlans.faq.title}
          </h2>
          <div className="space-y-4">
            {proPlans.faq.items.map((item, i) => (
              <details key={i} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/20 group backdrop-blur-sm">
                <summary className="font-medium text-white cursor-pointer list-none flex justify-between items-center">
                  {item.question}
                  <span className="text-purple-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-purple-200/70 text-sm">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-purple-500/20">
        <div className="max-w-[1240px] mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center text-white font-bold text-sm">H</div>
            <span className="font-semibold text-lg text-white">Hyokai</span>
            <span className="text-purple-400 font-medium text-sm ml-1">Pro</span>
          </div>
          <p className="text-sm text-purple-300/60 mb-4">{proPlans.footer.desc}</p>
          <p className="text-xs text-purple-400/40">{proPlans.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default Pro;
