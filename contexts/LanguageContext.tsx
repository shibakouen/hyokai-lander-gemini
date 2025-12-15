import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'jp';

type Translations = {
  nav: {
    howItWorks: string;
    solutions: string;
    pricing: string;
    getStarted: string;
  };
  hero: {
    badge: string;
    headline: string;
    subHeadline: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    demoInputLabel: string;
    demoInput: string;
    demoTag: string;
    demoOutputLabel: string;
    demoOutput: string;
    filename: string;
  };
  marquee: {
    text: string;
  };
  features: {
    subtitle: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    cards: Array<{
      title: string;
      desc: string;
      link: string;
    }>;
  };
  demo: {
    sectionTitle: string;
    headlineStart: string;
    headlineHighlight: string;
    headlineEnd: string;
    description: string;
    tabs: {
      recipes: string;
      trip: string;
      raise: string;
      email: string;
    };
    ui: {
      rawIdea: string;
      draft: string;
      waiting: string;
      optimized: string;
      standby: string;
      copy: string;
      copied: string;
    };
    examples: {
      [key: string]: {
        input: string;
        output: string;
      }
    };
  };
  pricing: {
    headline: string;
    description: string;
    month: string;
    plans: Array<{
      name: string;
      tier: string;
      price: string;
      features: string[];
      cta: string;
    }>;
  };
  footer: {
    desc: string;
    products: string;
    learn: string;
    company: string;
    links: {
      howItWorks: string;
      pricing: string;
      examples: string;
      help: string;
      beginners: string;
      community: string;
      about: string;
      blog: string;
      contact: string;
    };
    rights: string;
  };
};

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      howItWorks: 'How it works',
      solutions: 'Solutions',
      pricing: 'Pricing',
      getStarted: 'Get Started',
    },
    hero: {
      badge: 'Your Personal AI Translator',
      headline: 'Talk to AI like a friend.',
      subHeadline: 'Get results like a pro.',
      description: 'You don\'t need to learn "tech speak" to use tools like ChatGPT. Just tell Hyokai what you want in plain English, and we\'ll translate it into the perfect instructions for the computer.',
      ctaPrimary: 'Polish My Idea',
      ctaSecondary: 'Show Me an Example',
      demoInputLabel: 'You Say',
      demoInput: 'make this photo of my grandson look old',
      demoTag: 'Needs more detail',
      demoOutputLabel: 'Hyokai Says',
      demoOutput: '"Apply a sepia tone filter to the image, add digital noise for a film grain effect, and soften the edges to create a vintage 1920s photograph aesthetic."',
      filename: 'my_idea.txt',
    },
    marquee: {
      text: 'Works perfectly with the AI tools you already know',
    },
    features: {
      subtitle: 'Why Hyokai?',
      headlineStart: 'It\'s like a ',
      headlineHighlight: 'helpful translator',
      headlineEnd: ' for your biggest ideas.',
      cards: [
        {
          title: 'Just Be Yourself',
          desc: "Type exactly how you think. No need to use special commands or robot language. If you can text a friend, you can use Hyokai.",
          link: 'See how'
        },
        {
          title: 'We Fill in the Blanks',
          desc: "Forgot to say 'make it short' or 'use simple ingredients'? Hyokai adds the important details you might have missed so the AI understands you perfectly.",
          link: 'See how'
        },
        {
          title: 'No More Frustration',
          desc: "Stop repeating yourself trying to get the right answer. Clearer instructions mean the AI gives you exactly what you need on the very first try.",
          link: 'See how'
        }
      ]
    },
    demo: {
      sectionTitle: 'Live Demo',
      headlineStart: 'See the ',
      headlineHighlight: 'Magic',
      headlineEnd: ' Happen',
      description: 'Pick a scenario below and watch how Hyokai turns a rough idea into a polished prompt.',
      tabs: {
        recipes: 'Find Recipes',
        trip: 'Plan a Trip',
        raise: 'Ask for a Raise',
        email: 'Write an Email'
      },
      ui: {
        rawIdea: 'Raw Idea',
        draft: 'Draft',
        waiting: 'Waiting for input...',
        optimized: 'Optimized',
        standby: 'Standby',
        copy: 'Copy',
        copied: 'Copied!'
      },
      examples: {
        recipes: {
          input: "I have chicken and rice. What can I make?",
          output: `Act as a professional chef specializing in quick, flavorful home cooking.

Suggest 3 distinct recipes using chicken breast and white rice as the core ingredients.

For each dish, include:
- A creative title.
- A full ingredient list (assuming basic pantry staples like oil, garlic, and soy sauce).
- Step-by-step cooking instructions suitable for a beginner.
- Estimated prep and cook times (aim for under 30 minutes total).

Ensure variety: include one stir-fry, one one-pot meal, and one healthy bowl concept.

End with a 'Chef's Secret' tip for keeping chicken breast juicy.`
        },
        trip: {
          input: "I want to go somewhere warm in February",
          output: `Act as a travel expert specializing in winter escapes.

Suggest 5-7 warm destinations for a February trip (aim for average highs above 75°F/24°C).

For each destination, include:
- Why it's warm and ideal in February (weather overview, peak season notes).
- Top activities and highlights (beaches, culture, adventure).
- Estimated costs for a 7-day trip for 1-2 people (assume mid-range budget).
- Pros and cons (crowds, accessibility, weather risks).
- Visa/entry requirements for US citizens.

Prioritize variety: beach spots, cities, and islands.

At the end, ask clarifying questions: What's your starting location, budget, and interests?`
        },
        raise: {
          input: "help me ask for a raise",
          output: `Act as a Senior Career Coach and Negotiation Expert.

Create a strategic plan and script for asking for a salary increase.

Include the following sections:
1. **Preparation:** A checklist of 3 metrics/achievements to gather before the meeting.
2. **The Opening:** A script to set a positive, professional tone.
3. **The Pitch:** Specific phrasing to link the raise request to value delivered, not personal need.
4. **Objection Handling:** Scripted responses for common pushbacks like 'We have no budget' or 'Not right now'.

Tone: Confident, collaborative, and evidence-based.`
        },
        email: {
          input: "tell my boss I need friday off",
          output: `Act as a professional communication coach specializing in workplace requests.

Draft a polite, concise message to my boss requesting time off on Friday. Assume a standard professional tone unless context suggests otherwise.

Key elements to include:
- Greeting and direct request for the day off.
- Brief reason (e.g., personal matter—customize if details are provided).
- Assurance that work will be handled (e.g., deadlines met or handoff planned).
- Offer to discuss if needed.
- Professional closing.

Provide 2 versions:
1. Formal email format (with subject line).
2. Casual instant message format (e.g., for Slack or Teams).

After the drafts, suggest 1-2 tips for delivery, like timing the send.`
        }
      }
    },
    pricing: {
      headline: 'Simple, fair pricing.',
      description: 'Choose the plan that fits your creative needs. From casual dabbling to professional power-using.',
      month: '/month',
      plans: [
        {
          name: 'The Dabbler',
          tier: 'Free Tier',
          price: '$0',
          features: ['25 Messages/mo', 'Standard Translation', 'Works with ChatGPT Free'],
          cta: 'Try for Free'
        },
        {
          name: 'The Explorer',
          tier: 'Basic Tier',
          price: '$14.99',
          features: ['250 Messages/mo', 'Faster Processing', 'Priority Access', 'Email Support'],
          cta: 'Get Basic'
        },
        {
          name: 'The Creator',
          tier: 'Pro Tier',
          price: '$29.00',
          features: ['500 Messages/mo', 'Unlimited History', 'Advanced Coding Mode', 'Compare 2 AI Models'],
          cta: 'Get Pro Access'
        },
        {
          name: 'The Mastermind',
          tier: 'Premium Tier',
          price: '$59.99',
          features: ['1,200 Messages/mo', 'Priority 24/7 Support', 'Early Access Features', 'API Access', 'Team Collaboration'],
          cta: 'Go Premium'
        }
      ]
    },
    footer: {
      desc: 'Helping everyone speak AI fluently. Turning your natural thoughts into amazing results, one simple prompt at a time.',
      products: 'Product',
      learn: 'Learn',
      company: 'Company',
      links: {
        howItWorks: 'How it Works',
        pricing: 'Pricing',
        examples: 'Examples',
        help: 'Help Center',
        beginners: 'AI for Beginners',
        community: 'Community',
        about: 'About Us',
        blog: 'Blog',
        contact: 'Contact',
      },
      rights: '© 2025 Hyokai Inc. All rights reserved.'
    }
  },
  jp: {
    nav: {
      howItWorks: '仕組み',
      solutions: 'ソリューション',
      pricing: '料金プラン',
      getStarted: '始める',
    },
    hero: {
      badge: 'あなたの専属AI通訳',
      headline: 'AIと、もっと自由に話そう。',
      subHeadline: 'プロ並みの結果を、その手に。',
      description: '「プロンプトエンジニアリング」のような専門用語を覚える必要はありません。普通の言葉でHyokaiに伝えるだけで、AIが完璧に理解できる指示書に翻訳します。',
      ctaPrimary: 'アイデアを磨く',
      ctaSecondary: '例を見る',
      demoInputLabel: 'あなたの言葉',
      demoInput: '孫の写真を、昔の写真っぽく加工して',
      demoTag: '情報不足',
      demoOutputLabel: 'Hyokaiの翻訳',
      demoOutput: '「セピア色のフィルターを適用し、フィルムグレイン（粒状感）のノイズを追加してください。エッジを柔らかくして、1920年代のヴィンテージ写真のような雰囲気に仕上げてください。」',
      filename: 'idea_memo.txt',
    },
    marquee: {
      text: 'お使いのAIツールと完璧に連携します',
    },
    features: {
      subtitle: 'Hyokaiが選ばれる理由',
      headlineStart: 'あなたのアイデアを支える、',
      headlineHighlight: '優秀な通訳者',
      headlineEnd: 'のように。',
      cards: [
        {
          title: 'いつもの言葉でOK',
          desc: "友達にLINEを送るような感覚で入力してください。特別なコマンドやロボットのような言葉遣いは必要ありません。",
          link: '詳細を見る'
        },
        {
          title: '「言わなくても」伝わる',
          desc: "「短くまとめて」や「簡単な材料で」といった言葉を忘れても大丈夫。Hyokaiが文脈を読み取り、AIに必要な情報を補完します。",
          link: '詳細を見る'
        },
        {
          title: '一度で思い通りの結果を',
          desc: "何度も言い直すストレスから解放されましょう。明確な指示に変換することで、最初からAIが期待通りの答えを返してくれます。",
          link: '詳細を見る'
        }
      ]
    },
    demo: {
      sectionTitle: 'ライブデモ',
      headlineStart: '言葉が変わる、',
      headlineHighlight: '魔法',
      headlineEnd: 'を体験',
      description: 'シナリオを選んで、Hyokaiが荒削りなアイデアを洗練されたプロンプトに変える様子をご覧ください。',
      tabs: {
        recipes: 'レシピ検索',
        trip: '旅行プラン',
        raise: '昇給交渉',
        email: 'メール作成'
      },
      ui: {
        rawIdea: '元のアイデア',
        draft: '下書き',
        waiting: '入力待ち...',
        optimized: '最適化完了',
        standby: '待機中',
        copy: 'コピー',
        copied: '完了！'
      },
      examples: {
        recipes: {
          input: "鶏肉とご飯があるんだけど、何作れる？",
          output: `【役割】
家庭料理を得意とするプロのシェフとして振る舞ってください。

【依頼内容】
鶏の胸肉と白米をメイン食材とした、独自のレシピを3つ提案してください。

【各レシピの要件】
- 創造的な料理名
- 材料リスト（油、醤油、ニンニクなどの基本的な調味料は家庭にあると仮定）
- 初心者でもわかりやすい調理手順
- 準備と調理の予想時間（合計30分以内を目指す）

【バリエーション】
炒め物、ワンポット（鍋一つで作れる）料理、ヘルシーな丼もの、それぞれ1つずつ含めてください。

最後に、鶏胸肉をジューシーに仕上げる「シェフの裏技」を一言添えてください。`
        },
        trip: {
          input: "2月にどっか暖かいとこ行きたい",
          output: `【役割】
冬の旅行に詳しいトラベルエキスパートとして振る舞ってください。

【依頼内容】
2月の旅行におすすめの暖かい旅行先を5〜7箇所提案してください（平均最高気温が24°C以上の場所）。

【各提案に含める内容】
- なぜ2月におすすめなのか（天候の概要、シーズンの特徴）
- 主要なアクティビティと見どころ（ビーチ、文化、アドベンチャー）
- 1〜2名での7日間の概算費用（中程度の予算を想定）
- メリットとデメリット（混雑具合、アクセスの良さ、雨天のリスクなど）
- 日本国籍者のビザ/入国要件

【優先事項】
ビーチリゾート、都市、島など、バリエーションを持たせてください。

最後に、出発地、予算、興味のあること（リラックス、冒険など）についてユーザーに確認の質問をしてください。`
        },
        raise: {
          input: "給料上げてって言いたいんだけど",
          output: `【役割】
シニアキャリアコーチおよび交渉の専門家として振る舞ってください。

【依頼内容】
昇給を要求するための戦略プランと台本を作成してください。

【構成】
1. **準備:** 面談前に集めるべき3つの成果指標/実績のチェックリスト。
2. **導入:** 前向きでプロフェッショナルな雰囲気を作るための導入スクリプト。
3. **提案（ピッチ）:** 個人の事情ではなく、「会社への貢献」と「昇給」を結びつける具体的なフレーズ。
4. **反論への対応:** 「予算がない」「今は時期じゃない」といった一般的な断り文句への切り返し。

【トーン】
自信に満ち、協調的で、論理的なトーンで作成してください。`
        },
        email: {
          input: "金曜休み取りたいって上司に伝えたい",
          output: `【役割】
職場でのコミュニケーションを専門とするコーチとして振る舞ってください。

【依頼内容】
今週の金曜日に有給休暇を取りたい旨を上司に伝えるための、礼儀正しく簡潔なメッセージを作成してください。

【含めるべき要素】
- 挨拶と、休暇を取りたい日の明記
- 簡潔な理由（「私用のため」など。詳細があればカスタマイズ可）
- 業務への配慮（期限の厳守や引き継ぎの予定など、支障がないことの保証）
- 必要であれば相談に応じる旨
- プロフェッショナルな結びの言葉

【2つのバージョンを作成】
1. フォーマルなメール形式（件名付き）
2. カジュアルなチャット形式（SlackやTeams向け）

ドラフトの後に、送信するタイミングや対面でのフォローアップなど、承認されやすくするためのヒントを1〜2点添えてください。`
        }
      }
    },
    pricing: {
      headline: 'シンプルで公正な料金プラン',
      description: 'あなたのニーズに合ったプランをお選びください。趣味での利用からプロフェッショナルな活用まで対応します。',
      month: '/月',
      plans: [
        {
          name: 'ダブラー',
          tier: '無料プラン',
          price: '$0',
          features: ['月間25メッセージまで', '標準翻訳機能', 'ChatGPT (無料版) 対応'],
          cta: '無料で試す'
        },
        {
          name: 'エクスプローラー',
          tier: 'ベーシック',
          price: '$14.99',
          features: ['月間250メッセージ', '高速処理', '優先アクセス権', 'メールサポート'],
          cta: 'ベーシックを選ぶ'
        },
        {
          name: 'クリエイター',
          tier: 'プロ',
          price: '$29.00',
          features: ['月間500メッセージ', '履歴の無制限保存', '高度なコーディングモード', '2つのAIモデル比較'],
          cta: 'プロへのアクセス'
        },
        {
          name: 'マスターマインド',
          tier: 'プレミアム',
          price: '$59.99',
          features: ['月間1,200メッセージ', '24時間優先サポート', '新機能への早期アクセス', 'API利用権', 'チームコラボレーション'],
          cta: 'プレミアムにする'
        }
      ]
    },
    footer: {
      desc: '誰もがAIと流暢に話せる世界へ。あなたの自然な思考を、たった一つのシンプルなプロンプトで驚くような結果に変えます。',
      products: 'プロダクト',
      learn: '学ぶ',
      company: '会社情報',
      links: {
        howItWorks: '仕組み',
        pricing: '料金',
        examples: '活用例',
        help: 'ヘルプセンター',
        beginners: '初心者向けガイド',
        community: 'コミュニティ',
        about: '私たちについて',
        blog: 'ブログ',
        contact: 'お問い合わせ',
      },
      rights: '© 2025 Hyokai Inc. All rights reserved.'
    }
  }
};

const LanguageContext = createContext<{
  language: Language;
  toggleLanguage: () => void;
  t: Translations;
} | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const storedLang = localStorage.getItem('hyokai-lang') as Language;
    if (storedLang && (storedLang === 'en' || storedLang === 'jp')) {
      setLanguage(storedLang);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'jp' : 'en';
    setLanguage(newLang);
    localStorage.setItem('hyokai-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
