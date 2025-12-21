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
    demoOutputLabel: string;
    filename: string;
    examples: Array<{
      input: string;
      tag: string;
      output: string;
    }>;
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
      ctaPrimary: 'Try it Free',
      ctaSecondary: 'Show Me an Example',
      demoInputLabel: 'You Say',
      demoOutputLabel: 'Hyokai Says',
      filename: 'my_idea.txt',
      examples: [
        {
          input: 'make this photo of my grandson look old',
          tag: 'Needs more detail',
          output: `Act as an expert photo editor specializing in vintage and retro effects for beginners.

I want to make a photo of my grandson look old/vintage (like an old family photo from decades ago).

Provide a complete beginner-friendly guide:

**1. Style Options**
- Explain 3-4 vintage looks (sepia, black & white, faded color, film grain) with when each works best

**2. Free Tools to Use**
- Recommend 2-3 free apps (phone) and 2-3 free websites (computer)
- Note which is easiest for complete beginners

**3. Step-by-Step Tutorial**
- Pick the easiest tool and walk through the process
- Include specific settings/sliders to adjust
- Before/after expectations

**4. Pro Tips**
- Common mistakes beginners make
- How to make it look authentically old (not just filtered)

Keep language simple. Assume I've never edited a photo before.`,
        },
        {
          input: 'I have chicken and some vegetables, what should I cook?',
          tag: 'Too vague',
          output: `Act as an expert home chef specializing in simple, healthy meals.

I have chicken (assume boneless/skinless unless specified) and some basic vegetables (e.g., onions, carrots, bell peppers, broccoli, garlic—suggest based on common pantry staples if unspecified).

Suggest 4-5 quick dinner recipes (under 45 minutes prep-to-plate) that primarily use these ingredients.

For each recipe, provide:
- Recipe name
- Servings (for 2-4 people)
- Full ingredients list (highlight what's from my staples + any minimal pantry additions like oil, salt, spices)
- Step-by-step instructions (numbered, easy to follow)
- Estimated time and difficulty (easy/medium)
- Nutritional highlights (e.g., high protein, low carb)
- Why it fits: flavor profile and substitutions if veggies vary

Prioritize variety: one stir-fry, one bake, one soup/stew, one salad, one grill.

Present in a clean table format for easy scanning, followed by your top recommendation and any tips for customization.`,
        },
        {
          input: 'write an email saying I\'ll be late to work',
          tag: 'Missing context',
          output: `Act as an expert professional communication coach.

Help me write an email to my manager/boss explaining I'll be late to work today.

Provide:

**1. Subject Line Options**
- 2-3 clear, professional subject lines

**2. Email Templates**
- Version A: Brief delay (15-30 min late)
- Version B: Significant delay (1+ hour late)
- Version C: Uncertain arrival time

Each should include:
- Professional greeting
- Clear statement of the situation
- Expected arrival time (placeholder)
- Offer to make up time or address urgent matters remotely
- Professional sign-off

**3. What NOT to Include**
- Over-explaining or TMI
- Overly apologetic language that sounds unprofessional

**4. Timing Tips**
- When to send (before vs. during expected start time)
- Whether to also text/call

Keep it concise and workplace-appropriate. Tone: professional but not stiff.`,
        },
        {
          input: 'plan a weekend trip somewhere warm',
          tag: 'Needs specifics',
          output: `Act as an expert travel planner specializing in quick getaways.

Help me plan a weekend trip somewhere warm.

Structure your response as:

**1. Quick Questions First**
Ask me about:
- Where I'm traveling from
- Budget range (budget/mid-range/luxury)
- Travel dates (or "flexible")
- Solo, couple, family, or friends trip?
- Interests: beach relaxation, adventure, nightlife, culture, food?

**2. Top 5 Destination Recommendations**
For each destination, include:
- Why it's great for a weekend
- Average temps during my travel window
- Flight time estimate from major hubs
- Budget breakdown (flights + hotel + food per day)
- Must-do activities
- Best for: [type of traveler]

**3. Sample 2-Day Itinerary**
For your #1 recommendation, provide a realistic Saturday-Sunday plan.

**4. Booking Tips**
- Best sites for deals
- How far in advance to book
- Money-saving hacks

Present recommendations in a comparison table for easy decision-making.`,
        },
        {
          input: 'find a birthday gift for my wife',
          tag: 'Too broad',
          output: `Act as an expert gift consultant specializing in thoughtful, personalized presents.

Help me find the perfect birthday gift for my wife.

**First, answer these quick questions:**
- Her main hobbies/interests?
- Your budget range?
- Does she prefer: experiences, practical items, or sentimental gifts?
- Anything she's mentioned wanting lately?
- Any gifts that were hits or misses in the past?

**Then provide recommendations organized by category:**

1. **Experience Gifts** (3-4 ideas)
   - What it is, estimated cost, why it's special

2. **Personalized/Sentimental** (3-4 ideas)
   - Custom items that show thought

3. **Practical Luxury** (3-4 ideas)
   - Upgraded versions of everyday items

4. **Surprise Factor** (2-3 ideas)
   - Unexpected gifts she wouldn't buy herself

For each gift, include:
- Price range
- Where to buy
- Personalization options
- Delivery time (important for planning!)

End with a "Can't Go Wrong" recommendation if you're still unsure.`,
        },
        {
          input: 'make my resume sound better',
          tag: 'Needs direction',
          output: `Act as an expert career coach and resume writer with 10+ years of hiring experience.

Help me improve my resume to sound more professional and impactful.

**What I need from you first:**
- Paste your current resume content (or the sections you want improved)
- What job/industry are you targeting?
- Years of experience level?

**Then I will provide:**

1. **Rewritten Bullet Points**
   - Transform passive descriptions into action-driven statements
   - Add quantifiable achievements where possible
   - Use power verbs that stand out

2. **Before/After Examples**
   - Show the transformation for each point

3. **Missing Elements Check**
   - Skills you might be underselling
   - Keywords for your industry (ATS optimization)
   - Formatting suggestions

4. **Summary/Objective Rewrite**
   - Modern, punchy professional summary

5. **Red Flags to Fix**
   - Common mistakes that make resumes get rejected

Include 3-5 industry-specific power verbs and a checklist for final polish.`,
        },
        {
          input: 'write a caption for my vacation photo',
          tag: 'Missing tone',
          output: `Act as an expert social media content creator specializing in engaging, authentic captions.

Help me write the perfect caption for my vacation photo.

**Quick details I need:**
- What's in the photo? (beach, food, landmark, group shot, etc.)
- Where was it taken?
- Vibe you want: funny, inspirational, low-key, romantic, adventurous?
- Platform: Instagram, Facebook, or other?
- Want hashtags? If yes, how many?

**I'll provide 5-6 caption options:**

1. **Funny/Witty** - Gets laughs and engagement
2. **Simple & Clean** - Minimal, aesthetic vibe
3. **Inspirational** - Travel-quote style
4. **Storytelling** - Personal moment captured
5. **Engagement-Focused** - Question to spark comments
6. **Hashtag-Optimized** - For maximum reach

Each caption will be:
- Under 150 characters (or longer if you prefer)
- Ready to copy-paste
- Matched to your photo's mood

Plus: Best posting times and 10-15 relevant hashtags organized by category (location, mood, travel).`,
        },
        {
          input: 'explain crypto to me simply',
          tag: 'Needs approach',
          output: `Explain cryptocurrency (crypto) in simple, beginner-friendly terms, like you're talking to someone who's never heard of it before.

Use everyday language, short sentences, and fun analogies (e.g., compare blockchain to a shared notebook that no one can erase).

Cover these key points step-by-step:

- **What is crypto?** Basics: digital money not controlled by banks/governments.
- **How does it work?** Blockchain explained simply (decentralized ledger, mining/validation).
- **Popular examples**: Bitcoin (digital gold), Ethereum (smart contracts/apps).
- **How to get started**: Wallets, buying on exchanges (e.g., Coinbase), sending/receiving.
- **Pros and cons**: Fast/global payments vs. volatility, scams, energy use.
- **Real-world uses**: Payments, investments, NFTs/DeFi (keep simple).

End with 3 practical tips for beginners and common mistakes to avoid.

Include 1-2 simple visuals or diagrams described in text (e.g., "Imagine a chain of blocks..."). Keep total explanation under 800 words.`,
        },
        {
          input: 'write a thank you note for a gift',
          tag: 'Lacks detail',
          output: `Act as an expert in personal correspondence and etiquette.

Help me write a heartfelt thank you note for a gift I received.

**Tell me:**
- What was the gift?
- Who gave it? (relationship: friend, family, coworker, etc.)
- Was it for a specific occasion? (birthday, wedding, holiday, just because)
- Handwritten note or email/text?

**I'll provide:**

1. **3 Thank You Note Versions**
   - Warm & Personal (close relationships)
   - Professional & Gracious (coworkers, acquaintances)
   - Short & Sweet (quick text/message)

Each will include:
- Opening that specifically mentions the gift
- Why it means something to you (personal touch)
- How you'll use it or how it made you feel
- Warm closing that maintains the relationship

2. **Timing Guidance**
   - How soon to send
   - Handwritten vs. digital etiquette

3. **What to Avoid**
   - Generic phrases that feel impersonal
   - Over-the-top language that seems fake

Keep each version 3-5 sentences. Natural tone, not stiff or formal unless requested.`,
        },
        {
          input: 'how do I fix a leaky faucet?',
          tag: 'Needs structure',
          output: `Act as an expert plumber and DIY home repair coach for complete beginners.

Explain how to fix a leaky faucet step-by-step, assuming I've never done any plumbing before.

**Structure your guide as:**

1. **Identify Your Faucet Type**
   - Show how to tell if it's compression, ball, cartridge, or ceramic disk
   - Include visual descriptions for each

2. **Tools & Materials Needed**
   - Complete list with estimated costs
   - Where to buy (hardware store basics)
   - What you probably already have at home

3. **Safety First**
   - How to turn off water supply (under sink AND main)
   - Protecting the sink/counter

4. **Step-by-Step Repair**
   - Numbered instructions with details
   - Common mistakes at each step
   - "What it should look like" descriptions

5. **Troubleshooting**
   - "Still leaking?" next steps
   - When it's actually a bigger problem

6. **When to Call a Plumber**
   - Signs this is beyond DIY
   - What to expect cost-wise

Include time estimate (30-60 min for most fixes) and difficulty rating. Use simple, non-technical language throughout.`,
        },
        {
          input: 'help me write a complaint letter',
          tag: 'Missing context',
          output: `Act as an expert consumer advocate and professional communication specialist.

Help me write an effective complaint letter that gets results.

**First, tell me:**
- Company/business name?
- What happened? (product issue, bad service, billing error, etc.)
- When did it happen? (dates)
- Order number, account number, or reference?
- What resolution do you want? (refund, replacement, apology, policy change)
- Have you already contacted them? What happened?

**I'll provide:**

1. **Formal Complaint Letter**
   - Professional header with your info and theirs
   - Clear subject line
   - Opening: State the issue in one sentence
   - Body: Facts, dates, impact on you
   - Resolution: Specific ask with deadline
   - Closing: Professional but firm

2. **Email Version**
   - Same content, adapted for email format

3. **Escalation Templates**
   - Follow-up if no response
   - Escalation to manager/corporate
   - Social media message (if needed)

4. **Supporting Documentation Checklist**
   - What to attach as evidence

5. **Know Your Rights**
   - Relevant consumer protection basics
   - Where to escalate if company ignores you (BBB, credit card dispute, etc.)

Tone: Firm but professional. Never threatening or emotional—just factual and clear.`,
        },
        {
          input: 'suggest movies for date night',
          tag: 'Too open-ended',
          output: `Act as an expert film curator specializing in perfect movie pairings for couples.

Suggest movies for date night that we'll both enjoy.

**Quick questions:**
- What streaming services do you have? (Netflix, Prime, Hulu, etc.)
- Preferred mood tonight: light/fun, romantic, thrilling, thought-provoking?
- Any genres to avoid? (horror, too sad, etc.)
- New releases or classics okay?
- How long? (90 min quick watch vs. 2+ hour epic)

**I'll provide 8-10 recommendations organized by vibe:**

1. **Guaranteed Crowd-Pleasers** (2-3 films)
   - Safe bets you'll both like

2. **Romantic but Not Cheesy** (2-3 films)
   - Modern love stories with depth

3. **Fun & Light** (2-3 films)
   - Comedies, adventures, feel-good

4. **Hidden Gems** (2 films)
   - Lesser-known films worth discovering

For each movie:
- Title, year, runtime
- Streaming availability
- One-sentence pitch (spoiler-free)
- "Perfect for" couples who like...
- Content heads-up if needed (violence, sad ending, etc.)

End with my #1 pick for tonight and a "pair it with" snack/drink suggestion.`,
        },
      ],
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
      headline: 'Simple, transparent pricing.',
      description: 'Start with a 3-day free trial. All plans include access to every AI model. Cancel anytime.',
      month: '/month',
      plans: [
        {
          name: 'Starter',
          tier: 'For Getting Started',
          price: '$9.99',
          features: ['150 transformations/mo', 'All AI models', 'Coding & General modes', 'History sync', 'Email support'],
          cta: 'Start Free Trial'
        },
        {
          name: 'Pro',
          tier: 'For Power Users',
          price: '$24.99',
          features: ['500 transformations/mo', 'All AI models', 'GitHub context integration', 'History sync', 'Priority support'],
          cta: 'Start Free Trial'
        },
        {
          name: 'Business',
          tier: 'For Teams',
          price: '$49.99',
          features: ['1,500 transformations/mo', 'All AI models', 'GitHub context integration', 'Custom instructions', 'Priority support'],
          cta: 'Start Free Trial'
        },
        {
          name: 'Max',
          tier: 'For Heavy Users',
          price: '$99.99',
          features: ['5,000 transformations/mo', 'All AI models', 'Custom instructions', 'Dedicated support', 'Early access to new features'],
          cta: 'Start Free Trial'
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
      ctaPrimary: '無料で試す',
      ctaSecondary: '例を見る',
      demoInputLabel: 'あなたの言葉',
      demoOutputLabel: 'Hyokaiの翻訳',
      filename: 'idea_memo.txt',
      examples: [
        {
          input: '孫の写真を、昔の写真っぽく加工して',
          tag: '情報不足',
          output: `【役割】
初心者向けのヴィンテージ・レトロ加工を得意とする写真編集のエキスパートとして振る舞ってください。

【依頼内容】
孫の写真を、昔の家族写真のようなヴィンテージ風に加工したいです。

【提供してほしい内容】

**1. スタイルの選択肢**
- セピア、白黒、色あせ、フィルム粒子など3〜4種類のヴィンテージ風を、それぞれどんな場面に合うか説明

**2. 使えるツール**
- 無料アプリ（スマホ用）2〜3個、無料サイト（PC用）2〜3個を推薦
- 完全な初心者に最も簡単なものを明記

**3. ステップバイステップの手順**
- 最も簡単なツールを選び、具体的な操作方法を解説
- 調整すべき設定やスライダーを明記
- ビフォー・アフターのイメージ

**4. プロのコツ**
- 初心者がやりがちな失敗
- 「フィルターっぽく」ではなく本当に古い写真に見せるコツ

簡単な言葉で説明してください。写真編集の経験がないことを前提としてください。`,
        },
        {
          input: '鶏肉と野菜があるんだけど、何作ればいい？',
          tag: '曖昧すぎる',
          output: `【役割】
シンプルで健康的な家庭料理を得意とする料理のエキスパートとして振る舞ってください。

【依頼内容】
鶏肉（特に指定がなければ鶏むね肉と仮定）と基本的な野菜（玉ねぎ、にんじん、ピーマン、ブロッコリー、にんにくなど一般的な常備野菜）があります。

これらの食材をメインに使った、45分以内で作れる夕食レシピを4〜5品提案してください。

【各レシピに含める内容】
- レシピ名
- 分量（2〜4人前）
- 材料リスト（手持ちの食材と、油・塩・スパイスなど最小限の追加調味料を区別）
- 手順（番号付きで分かりやすく）
- 調理時間と難易度（簡単/普通）
- 栄養面のポイント（高タンパク、低糖質など）
- おすすめの理由と野菜の代用案

【バリエーション】
炒め物、オーブン料理、スープ/煮込み、サラダ、グリルをそれぞれ1品ずつ。

見やすい表形式で提示し、最後にイチオシとカスタマイズのコツを添えてください。`,
        },
        {
          input: '遅刻するってメール書いて',
          tag: '文脈不足',
          output: `【役割】
ビジネスコミュニケーションのエキスパートとして振る舞ってください。

【依頼内容】
今日、仕事に遅刻することを上司に伝えるメールを作成してください。

【提供してほしい内容】

**1. 件名の選択肢**
- 明確でプロフェッショナルな件名を2〜3パターン

**2. メールテンプレート**
- パターンA：少しの遅れ（15〜30分）
- パターンB：大幅な遅れ（1時間以上）
- パターンC：到着時間が不明な場合

各パターンに含める要素：
- 適切な挨拶
- 状況の明確な説明
- 到着予定時刻（プレースホルダー）
- 時間を埋め合わせる提案、または緊急の件はリモートで対応する旨
- プロフェッショナルな結び

**3. 書くべきでないこと**
- 言い訳の長い説明
- 過度に謝りすぎて卑屈に見える表現

**4. 送信タイミングのコツ**
- 始業前 vs 始業時間中に送る場合の違い
- 電話やメッセージも必要かどうか

簡潔で職場にふさわしい内容に。トーン：プロフェッショナルだが堅すぎない。`,
        },
        {
          input: '週末どっか暖かいとこ旅行したい',
          tag: '具体性不足',
          output: `【役割】
週末旅行を得意とするトラベルプランナーのエキスパートとして振る舞ってください。

【依頼内容】
週末に暖かい場所へ旅行したいです。

【回答の構成】

**1. まず確認したいこと**
以下について教えてください：
- 出発地はどこですか？
- 予算帯（節約/中程度/贅沢）
- 旅行日程（または「柔軟」）
- 一人旅、カップル、家族、友人グループ？
- 希望するアクティビティ：ビーチでのんびり、アドベンチャー、ナイトライフ、文化、グルメ？

**2. おすすめの旅行先5選**
各候補地について：
- 週末旅行に最適な理由
- 旅行時期の平均気温
- 主要都市からのフライト時間目安
- 予算目安（航空券＋宿泊＋1日の食費）
- 外せないアクティビティ
- こんな人におすすめ

**3. サンプル2日間プラン**
イチオシの候補地について、現実的な土日プランを提案

**4. 予約のコツ**
- お得なサイト
- どのくらい前に予約すべきか
- 節約のコツ

比較しやすい表形式で提示してください。`,
        },
        {
          input: '妻への誕生日プレゼント探して',
          tag: '範囲が広い',
          output: `【役割】
心のこもったパーソナライズドギフトを得意とするギフトコンサルタントのエキスパートとして振る舞ってください。

【依頼内容】
妻への誕生日プレゼントを探しています。

**まず、以下について教えてください：**
- 奥様の趣味や興味は？
- 予算帯は？
- 体験型、実用品、記念品のどれが好み？
- 最近欲しがっていたものは？
- 過去に喜ばれたギフト、イマイチだったギフトは？

**回答に基づき、カテゴリ別に提案します：**

1. **体験ギフト**（3〜4アイデア）
   - 内容、予算目安、特別な理由

2. **パーソナライズ/記念品**（3〜4アイデア）
   - 心遣いが伝わるカスタムアイテム

3. **実用的な贅沢品**（3〜4アイデア）
   - 日用品のワンランク上バージョン

4. **サプライズ系**（2〜3アイデア）
   - 自分では買わない意外性のあるギフト

各ギフトに含める情報：
- 価格帯
- 購入場所
- カスタマイズオプション
- 配送期間（計画に重要！）

最後に、迷ったらこれ！という「間違いない」おすすめを添えてください。`,
        },
        {
          input: '履歴書をもっとよくして',
          tag: '方向性不明',
          output: `【役割】
10年以上の採用経験を持つキャリアコーチ兼履歴書ライターのエキスパートとして振る舞ってください。

【依頼内容】
履歴書をより魅力的でインパクトのあるものに改善したいです。

**まず必要な情報：**
- 現在の履歴書の内容（改善したい箇所）を共有してください
- 志望する職種/業界は？
- 経験年数は？

**提供する内容：**

1. **職歴の書き直し**
   - 受動的な記述をアクション重視の文に変換
   - 可能な限り数値化した実績を追加
   - 目立つパワーワードを使用

2. **ビフォー・アフター例**
   - 各項目の変換を比較表示

3. **不足要素のチェック**
   - アピールしきれていないスキル
   - 業界向けのキーワード（ATS対策）
   - フォーマットの改善点

4. **自己PRの書き直し**
   - 現代的でインパクトのある職務要約

5. **要注意ポイント**
   - 書類選考で落とされやすい一般的なミス

業界別のパワーワード3〜5個と、最終チェックリストを含めてください。`,
        },
        {
          input: '旅行写真のキャプション書いて',
          tag: 'トーン不明',
          output: `【役割】
魅力的で本物感のあるキャプションを得意とするSNSコンテンツクリエイターのエキスパートとして振る舞ってください。

【依頼内容】
旅行写真に最適なキャプションを作成してください。

**確認したいこと：**
- 写真の内容は？（ビーチ、料理、観光地、グループ写真など）
- 撮影場所は？
- 希望する雰囲気：面白い系、インスピレーション系、さりげない系、ロマンチック、冒険的？
- 投稿先：Instagram、Facebook、その他？
- ハッシュタグは必要？必要なら何個くらい？

**5〜6パターンのキャプションを提案：**

1. **面白い/ウィット系** - 笑いとエンゲージメント狙い
2. **シンプル＆クリーン** - ミニマルでおしゃれ
3. **インスピレーション系** - 旅の名言風
4. **ストーリーテリング** - その瞬間を切り取った個人的な話
5. **エンゲージメント重視** - コメントを誘う質問形式
6. **ハッシュタグ最適化** - リーチ最大化向け

各キャプション：
- 150文字以内（長めがお好みなら調整可）
- コピペですぐ使える
- 写真の雰囲気にマッチ

おまけ：ベストな投稿時間と、カテゴリ別（場所、雰囲気、旅行）の関連ハッシュタグ10〜15個。`,
        },
        {
          input: '仮想通貨を簡単に説明して',
          tag: 'アプローチ不明',
          output: `仮想通貨（暗号資産）について、聞いたことがない人でも分かるように、シンプルで初心者向けの言葉で説明してください。

日常的な言葉、短い文、楽しい例え（例：ブロックチェーンを「誰も消せない共有ノート」に例える）を使ってください。

以下のポイントをステップごとに説明：

- **仮想通貨とは？** 基本：銀行や政府が管理しないデジタルなお金
- **どう動く？** ブロックチェーンを簡単に（分散型台帳、マイニング/承認の仕組み）
- **代表例**：ビットコイン（デジタルゴールド）、イーサリアム（スマートコントラクト/アプリ）
- **始め方**：ウォレット、取引所（例：Coincheck）での購入、送金・受取
- **メリットとデメリット**：高速・国境なし決済 vs 価格変動、詐欺、電力消費
- **実際の使われ方**：決済、投資、NFT/DeFi（シンプルに）

最後に、初心者向けの実践的なアドバイス3つと、避けるべきよくある失敗を添えてください。

テキストで表現した簡単な図や図解を1〜2個含めてください（例：「ブロックがつながった鎖をイメージして...」）。全体で800文字以内に収めてください。`,
        },
        {
          input: 'プレゼントのお礼状書いて',
          tag: '詳細不足',
          output: `【役割】
手紙のマナーや個人的な文通を得意とするエキスパートとして振る舞ってください。

【依頼内容】
いただいたプレゼントへの心のこもったお礼状を書きたいです。

**教えてください：**
- 何をもらいましたか？
- 誰からですか？（関係性：友人、家族、同僚など）
- 特定のお祝い事でしたか？（誕生日、結婚式、お歳暮、ふとした贈り物）
- 手書きのお礼状？それともメール/メッセージ？

**提供する内容：**

1. **3パターンのお礼状**
   - 温かく親しみやすい（親しい関係向け）
   - プロフェッショナルで丁寧（同僚、知人向け）
   - 短くて可愛い（LINEやメッセージ向け）

各パターンに含める要素：
- プレゼントに具体的に触れる書き出し
- なぜ嬉しかったか（個人的なタッチ）
- どう使うか、どんな気持ちになったか
- 関係を大切にする温かい結び

2. **タイミングのガイダンス**
   - いつまでに送るべきか
   - 手書き vs デジタルのマナー

3. **避けるべきこと**
   - 形式的すぎて心がこもっていない表現
   - 大げさすぎて嘘っぽくなる言葉

各パターン3〜5文。自然なトーンで、堅すぎないように（ご希望がなければ）。`,
        },
        {
          input: '蛇口の水漏れどうやって直す？',
          tag: '構成不足',
          output: `【役割】
完全な初心者向けの配管工＆DIYホームリペアコーチのエキスパートとして振る舞ってください。

【依頼内容】
水漏れする蛇口の直し方を、配管作業をしたことがない前提でステップバイステップで説明してください。

**構成：**

1. **蛇口のタイプを見分ける**
   - コンプレッション、ボール、カートリッジ、セラミックディスクの見分け方
   - 各タイプの見た目の特徴

2. **必要な工具と材料**
   - 完全なリスト（おおよその費用付き）
   - 購入場所（ホームセンターの基本品）
   - 家にありそうなもの

3. **まず安全確認**
   - 水の止め方（シンク下＆元栓）
   - シンク/カウンターの保護

4. **修理の手順**
   - 番号付きの詳細な手順
   - 各ステップでのありがちなミス
   - 「こうなっていればOK」の説明

5. **トラブルシューティング**
   - 「まだ漏れる？」次のステップ
   - 実はもっと大きな問題のサイン

6. **業者を呼ぶべきとき**
   - DIYでは難しいサイン
   - 業者に頼む場合の費用目安

所要時間の目安（多くの場合30〜60分）と難易度レーティングを含めてください。全体を通して専門用語を避け、シンプルな言葉で説明してください。`,
        },
        {
          input: 'クレームの手紙書くの手伝って',
          tag: '状況不明',
          output: `【役割】
消費者アドボケート兼プロフェッショナルなコミュニケーションスペシャリストのエキスパートとして振る舞ってください。

【依頼内容】
結果が出る効果的なクレームレターの作成を手伝ってください。

**まず教えてください：**
- 会社/店舗名は？
- 何が起きましたか？（商品の問題、サービスの悪さ、請求ミスなど）
- いつ起きましたか？（日付）
- 注文番号、アカウント番号、参照番号は？
- どんな解決を求めていますか？（返金、交換、謝罪、対応改善）
- すでに連絡しましたか？その結果は？

**提供する内容：**

1. **正式なクレームレター**
   - あなたと相手の情報を含むヘッダー
   - 明確な件名
   - 冒頭：問題を一文で述べる
   - 本文：事実、日付、あなたへの影響
   - 解決策：具体的な要求と期限
   - 結び：プロフェッショナルだが毅然と

2. **メール版**
   - 同内容をメール形式に調整

3. **エスカレーションテンプレート**
   - 返答がない場合のフォローアップ
   - 上長/本社へのエスカレーション
   - SNSでのメッセージ（必要な場合）

4. **添付書類チェックリスト**
   - 証拠として添付すべきもの

5. **あなたの権利を知る**
   - 関連する消費者保護の基本
   - 会社が無視した場合のエスカレーション先（消費者センター、クレジットカード会社への異議申し立てなど）

トーン：毅然としつつプロフェッショナル。脅したり感情的にならず、事実に基づいて明確に。`,
        },
        {
          input: 'デートにおすすめの映画教えて',
          tag: '選択肢多すぎ',
          output: `【役割】
カップルにぴったりの映画を提案する映画キュレーターのエキスパートとして振る舞ってください。

【依頼内容】
二人で楽しめるデートナイト向けの映画を提案してください。

**確認したいこと：**
- 利用できる動画配信サービスは？（Netflix、Prime Video、U-NEXTなど）
- 今夜の気分：軽い/楽しい、ロマンチック、スリリング、考えさせられる？
- 避けたいジャンルは？（ホラー、悲しすぎる、など）
- 新作でも名作でもOK？
- 上映時間は？（90分でサクッと vs 2時間超の大作）

**雰囲気別に8〜10本を提案：**

1. **鉄板で間違いなし**（2〜3本）
   - 二人とも楽しめる安定の作品

2. **ロマンチックだけどベタすぎない**（2〜3本）
   - 深みのある現代的なラブストーリー

3. **楽しい＆軽い**（2〜3本）
   - コメディ、アドベンチャー、ハートウォーミング

4. **隠れた名作**（2本）
   - あまり知られていないけど見る価値あり

各映画について：
- タイトル、公開年、上映時間
- 配信サービス
- ネタバレなしの一言紹介
- こんなカップルにおすすめ
- 注意点（暴力シーン、悲しい結末など）

最後に、今夜の一番のおすすめと、「これに合うおつまみ/ドリンク」の提案を添えてください。`,
        },
      ],
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
      headline: 'シンプルで透明な料金プラン',
      description: '3日間の無料トライアルでスタート。全プランで全AIモデルが使えます。いつでも解約可能。',
      month: '/月',
      plans: [
        {
          name: 'スターター',
          tier: '入門プラン',
          price: '$9.99',
          features: ['月150回の変換', '全AIモデル対応', 'コーディング＆一般モード', '履歴同期', 'メールサポート'],
          cta: '無料トライアル開始'
        },
        {
          name: 'プロ',
          tier: 'パワーユーザー向け',
          price: '$24.99',
          features: ['月500回の変換', '全AIモデル対応', 'GitHubコンテキスト連携', '履歴同期', '優先サポート'],
          cta: '無料トライアル開始'
        },
        {
          name: 'ビジネス',
          tier: 'チーム向け',
          price: '$49.99',
          features: ['月1,500回の変換', '全AIモデル対応', 'GitHubコンテキスト連携', 'カスタム指示', '優先サポート'],
          cta: '無料トライアル開始'
        },
        {
          name: 'マックス',
          tier: 'ヘビーユーザー向け',
          price: '$99.99',
          features: ['月5,000回の変換', '全AIモデル対応', 'カスタム指示', '専用サポート', '新機能への早期アクセス'],
          cta: '無料トライアル開始'
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
