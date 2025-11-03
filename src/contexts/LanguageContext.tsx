'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ru' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translations object
const translations = {
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.about': 'О проекте',
    'nav.tokenomics': 'Токеномика',
    'nav.contact': 'Контакты',
    'header.documentation': 'Документация',
    'header.exchange': 'ПОМЕНЯТЬ COBA',
    
    // Hero
    'hero.badge': 'Криптовалюта с золотым обеспечением',
    'hero.title': 'Будущее',
    'hero.subtitle': 'Стабильных Цифровых Активов',
    'hero.description': 'COBA - децентрализованная цифровая валюта, разработанная ICC "Universum" для повышения безопасности транзакций. Каждый токен обеспечен 9,6 граммами золота с резервами, превышающими объем выпуска.',
    'hero.buyTokens': 'ПОМЕНЯТЬ токены COBA',
    'hero.downloadDocs': 'Скачать документацию',
    'hero.currentPrice': 'Текущая цена',
    'hero.totalSupply': 'Общий выпуск',
    'hero.goldPerToken': 'Золота на токен',
    
    // Token Metrics
    'metrics.title': 'Метрики токена',
    'metrics.description': 'Данные в реальном времени и ключевая статистика токена COBA, демонстрирующие нашу приверженность прозрачности и росту.',
    'metrics.currentPrice': 'Текущая цена',
    'metrics.marketCap': 'Рыночная капитализация',
    'metrics.totalSupply': 'Общий выпуск',
    'metrics.goldBacking': 'Золотое обеспечение',
    'metrics.fixed': 'Фиксированный',
    'metrics.perToken': 'На токен',
    'metrics.tokenDetails': 'Детали токена',
    'metrics.maxSupply': 'Максимальный выпуск',
    'metrics.annualEmission': 'Годовая эмиссия',
    'metrics.decimals': 'Десятичные знаки',
    'metrics.smallestUnit': 'Минимальная единица',
    'metrics.livePrice': 'Цена в реальном времени',
    
    // How It Works
    'howItWorks.title': 'Как работает COBA',
    'howItWorks.description': 'Просто, безопасно и прозрачно. Наш трехэтапный процесс обеспечивает вам все преимущества криптовалюты с золотым обеспечением.',
    'howItWorks.step1.title': 'ПОМЕНЯТЬ токены COBA',
    'howItWorks.step1.desc': 'Обменивайте токены COBA через нашу безопасную платформу используя ETH, USDT или фиатную валюту.',
    'howItWorks.step2.title': 'Верификация золотых резервов',
    'howItWorks.step2.desc': 'Каждый токен обеспечен физическими золотыми резервами, хранящимися в сертифицированных хранилищах с ежемесячными аудитами.',
    'howItWorks.step3.title': 'Держите или торгуйте',
    'howItWorks.step3.desc': 'Используйте ваши токены COBA для торговли или обменивайте на физическое золото (применяются минимальные суммы).',
    'howItWorks.whyChoose': 'Почему выбирают криптовалюту с золотым обеспечением?',
    'howItWorks.goldHistory': 'Лет золота как средства сохранения стоимости',
    'howItWorks.trading247': 'Торговля и ликвидность',
    'howItWorks.goldBacked': 'Обеспечено физическим золотом',
    
    // Features
    'features.goldBacking': 'Золотое обеспечение',
    'features.goldBackingDesc': 'Каждый токен обеспечен 9,6 граммами физического золота',
    'features.stableValue': 'Стабильная стоимость',
    'features.stableValueDesc': 'Сочетает стабильность золота с инновациями криптовалют',
    'features.fastTransactions': 'Быстрые транзакции',
    'features.fastTransactionsDesc': 'Основан на Ethereum для быстрых и безопасных переводов',
    
    
    // News
    'news.title': 'Последние новости и обновления',
    'news.description': 'Будьте в курсе развития токенов COBA, партнерских отношений и отраслевых инсайтов.',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.description': 'Получите ответы на распространенные вопросы о токенах COBA, золотом обеспечении и нашей платформе.',
    'faq.stillQuestions': 'Остались вопросы?',
    'faq.teamHelp': 'Мы готовы помочь вам понять токены COBA и начать работу с криптовалютой с золотым обеспечением.',
    'faq.contactSupport': 'Связаться с поддержкой',
    
    // Footer
    'footer.description': 'Будущее криптовалюты с золотым обеспечением. Сочетаем стабильность драгоценных металлов с инновациями блокчейн-технологий.',
    'footer.company': 'Компания',
    'footer.resources': 'Ресурсы',
    'footer.legal': 'Правовая информация',
    'footer.copyright': '© 2024 ICC "Universum" COBA Token. Все права защищены.',
    'footer.stayUpdated': 'Будьте в курсе с COBA',
    'footer.newsletterDesc': 'Получайте последние новости, обновления и аналитику о токене COBA и рынке криптовалют с золотым обеспечением.',
    'footer.enterEmail': 'Введите ваш email',
    'footer.subscribe': 'Подписаться',
    'footer.careers': 'Карьера',
    'footer.documentation': 'Документация',
    'footer.guides': 'Руководства',
    'footer.faq': 'Вопросы и ответы',
    'footer.blog': 'Блог',
    'footer.privacy': 'Политика конфиденциальности',
    'footer.terms': 'Условия использования',
    'footer.cookies': 'Политика cookies',
    'footer.disclaimer': 'Отказ от ответственности',
    
    // Roadmap
    'roadmap.title': 'Дорожная карта',
    'roadmap.description': 'Наш путь к революционизации криптовалют с золотым обеспечением через инновации и стратегические партнерства.',
    'roadmap.futureVision': 'Взгляд в будущее',
    'roadmap.futureDescription': 'Наша дорожная карта продолжается после 2024 года с планами по экологическим инициативам, международному сотрудничеству и инновационным проектам устойчивого развития.',
    
    // Roadmap Items
    'roadmap.q1.title': 'Основание ICC "Universum"',
    'roadmap.q1.description': 'Создание некоммерческой организации в сотрудничестве с Агентством Общественной Безопасности (Швейцария).',
    'roadmap.q1.item1': 'Регистрация некоммерческой организации',
    'roadmap.q1.item2': 'Партнерство с Агентством Общественной Безопасности',
    'roadmap.q1.item3': 'Формирование основной команды',
    'roadmap.q1.item4': 'Разработка концепции проекта',
    'roadmap.q2.title': 'Формирование Паевого Фонда',
    'roadmap.q2.description': 'Создание значительного фонда с драгоценными металлами, земельными участками и банковскими золотыми резервами.',
    'roadmap.q2.item1': 'Создание паевого фонда',
    'roadmap.q2.item2': 'Приобретение золотых резервов',
    'roadmap.q2.item3': 'Обеспечение земельными участками',
    'roadmap.q2.item4': 'Установление банковских партнерств',
    'roadmap.q3.title': 'Интеграция DeFi',
    'roadmap.q3.description': 'Расширение в экосистему децентрализованных финансов',
    'roadmap.q3.item1': 'Интеграция протоколов кредитования',
    'roadmap.q3.item2': 'Возможности фарминга доходности',
    'roadmap.q3.item3': 'Разработка межсетевых мостов',
    'roadmap.q3.item4': 'Распределение токенов управления',
    'roadmap.q4.title': 'Глобальная экспансия',
    'roadmap.q4.description': 'Международное расширение рынка и соответствие требованиям',
    'roadmap.q4.item1': 'Соблюдение регулятивных требований на ключевых рынках',
    'roadmap.q4.item2': 'Международные партнерства золотых хранилищ',
    'roadmap.q4.item3': 'Институциональные инвестиционные продукты',
    'roadmap.q4.item4': 'Расширенные торговые функции',
    
    // About Page
    'about.title': 'О ICC "Universum"',
    'about.subtitle': 'Революция в мире криптовалют с золотым обеспечением',
    'about.description': 'ICC "Universum" — некоммерческая организация, созданная в сотрудничестве с Агентством Общественной Безопасности (Швейцария). Наша миссия — создание устойчивой экосистемы криптовалют с золотым обеспечением, которая сочетает финансовые инновации с экологической и социальной ответственностью.',
    'about.whyChoose': 'Почему выбирают COBA',
    'about.whyDescription': 'Наш подход к криптовалютам с золотым обеспечением основан на принципах прозрачности, безопасности и устойчивого развития.',
    'about.ourJourney': 'Наш путь',
    'about.journeyDescription': 'От создания некоммерческой организации до запуска революционной криптовалюты с золотым обеспечением.',
    'about.readyToJoin': 'Готовы присоединиться к революции золотого обеспечения?',
    'about.joinDescription': 'Станьте частью будущего стабильных цифровых активов с COBA Token.',
    'about.getStarted': 'Начать сейчас',
    
    // Contact Page
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Готовы начать свой путь с COBA?',
    'contact.description': 'У нас есть эксперты, готовые ответить на ваши вопросы и помочь вам понять преимущества криптовалюты с золотым обеспечением.',
    'contact.emailUs': 'Напишите нам',
    'contact.emailDescription': 'Отправьте нам письмо, и мы ответим в течение 24 часов',
    'contact.callUs': 'Позвоните нам',
    'contact.callDescription': 'Говорите напрямую с нами в рабочее время',
    'contact.visitUs': 'Посетите нас',
    'contact.visitDescription': 'Наша штаб-квартира открыта для запланированных встреч',
    
    // Tokenomics Page
    'tokenomics.title': 'Токеномика COBA',
    'tokenomics.subtitle': 'Прозрачная и устойчивая экономическая модель',
    'tokenomics.description': 'Понимание распределения токенов, механизмов эмиссии и экономических стимулов, которые обеспечивают долгосрочную стабильность и рост экосистемы COBA.',
    'tokenomics.trading': 'Торговля',
    'tokenomics.ecoPrograms': 'Эко-программы',
    'tokenomics.defi': 'DeFi',
    'tokenomics.payments': 'Платежи',
    
    // FAQ Items
    'faq.q1.question': 'Что отличает COBA от других криптовалют?',
    'faq.q1.answer': 'COBA обеспечен физическими золотыми резервами, каждый токен представляет 9,6 грамма золота. Это обеспечивает внутреннюю стоимость и стабильность по сравнению с чисто спекулятивными криптовалютами.',
    'faq.q2.question': 'Как проверяется золотое обеспечение?',
    'faq.q2.answer': 'Наши золотые резервы хранятся в сертифицированных хранилищах и ежемесячно проверяются независимыми третьими сторонами. Все отчеты об аудите публикуются на нашем сайте для прозрачности.',
    'faq.q3.question': 'Могу ли я обменять токены COBA на физическое золото?',
    'faq.q3.answer': 'Да, квалифицированные держатели могут обменивать большие количества токенов COBA на поставку физического золота при соблюдении минимальных требований и процедур верификации.',
    'faq.q4.question': 'Что такое единица KOH?',
    'faq.q4.answer': 'KOH - это наименьшая делимая единица COBA, аналогично сатоши для Bitcoin. 1 COBA равен 1000 KOH, что позволяет проводить точные микротранзакции.',
    'faq.q5.question': 'Как работает годовая эмиссия?',
    'faq.q5.answer': 'Новые токены COBA выпускаются ежегодно со скоростью 9 миллиардов токенов в год, но только при обеспечении соответствующими золотыми резервами. Это обеспечивает устойчивый рост при сохранении обеспечения.',
    'faq.q6.question': 'Регулируется ли COBA?',
    'faq.q6.answer': 'Мы тесно сотрудничаем с регуляторами во всех юрисдикциях, где мы работаем. COBA соответствует применимым нормам по ценным бумагам и товарам.',
  },
  en: {
    // Header
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.tokenomics': 'Tokenomics',
    'nav.contact': 'Contact',
    'header.documentation': 'Documentation',
    'header.exchange': 'EXCHANGE COBA',
    
    // Hero
    'hero.badge': 'Gold-Backed Cryptocurrency',
    'hero.title': 'The Future of',
    'hero.subtitle': 'Stable Digital Assets',
    'hero.description': 'COBA - decentralized digital currency developed by ICC "Universum" to enhance transaction security. Each token is backed by 9.6 grams of gold with reserves exceeding the issuance volume.',
    'hero.buyTokens': 'EXCHANGE COBA Tokens',
    'hero.downloadDocs': 'Download Documentation',
    'hero.currentPrice': 'Current Price',
    'hero.totalSupply': 'Total Supply',
    'hero.goldPerToken': 'Gold per Token',
    
    // Token Metrics
    'metrics.title': 'Token Metrics',
    'metrics.description': 'Real-time data and key statistics for COBA token, showcasing our commitment to transparency and growth.',
    'metrics.currentPrice': 'Current Price',
    'metrics.marketCap': 'Market Cap',
    'metrics.totalSupply': 'Total Supply',
    'metrics.goldBacking': 'Gold Backing',
    'metrics.fixed': 'Fixed',
    'metrics.perToken': 'Per Token',
    'metrics.tokenDetails': 'Token Details',
    'metrics.maxSupply': 'Max Supply',
    'metrics.annualEmission': 'Annual Emission',
    'metrics.decimals': 'Decimals',
    'metrics.smallestUnit': 'Smallest Unit',
    'metrics.livePrice': 'Live Price',
    
    // How It Works
    'howItWorks.title': 'How COBA Works',
    'howItWorks.description': 'Simple, secure, and transparent. Our three-step process ensures you get all the benefits of gold-backed cryptocurrency.',
    'howItWorks.step1.title': 'EXCHANGE COBA Tokens',
    'howItWorks.step1.desc': 'Exchange COBA tokens through our secure platform using ETH, USDT, or fiat currency.',
    'howItWorks.step2.title': 'Gold Reserve Verification',
    'howItWorks.step2.desc': 'Each token is backed by physical gold reserves stored in certified vaults with monthly audits.',
    'howItWorks.step3.title': 'Hold or Trade',
    'howItWorks.step3.desc': 'Use your COBA tokens for trading or exchange for physical gold (minimum amounts apply).',
    'howItWorks.whyChoose': 'Why Choose Gold-Backed Cryptocurrency?',
    'howItWorks.goldHistory': 'Years of gold as store of value',
    'howItWorks.trading247': 'Trading and liquidity',
    'howItWorks.goldBacked': 'Backed by physical gold',
    
    // Features
    'features.goldBacking': 'Gold-Backed Security',
    'features.goldBackingDesc': 'Every token backed by 9.6g of physical gold',
    'features.stableValue': 'Stable Value',
    'features.stableValueDesc': 'Combines gold stability with crypto innovation',
    'features.fastTransactions': 'Fast Transactions',
    'features.fastTransactionsDesc': 'Ethereum-based for quick, secure transfers',
    
    
    // News
    'news.title': 'Latest News & Updates',
    'news.description': 'Stay informed about COBA token developments, partnerships, and industry insights.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Get answers to common questions about COBA tokens, gold backing, and our platform.',
    'faq.stillQuestions': 'Still have questions?',
    'faq.teamHelp': 'We are here to help you understand COBA tokens and get started with gold-backed cryptocurrency.',
    'faq.contactSupport': 'Contact Support',
    
    // Footer
    'footer.description': 'The future of gold-backed cryptocurrency. Combining the stability of precious metals with blockchain technology innovations.',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.copyright': '© 2024 ICC "Universum" COBA Token. All rights reserved.',
    'footer.stayUpdated': 'Stay Updated with COBA',
    'footer.newsletterDesc': 'Get the latest news, updates, and insights about COBA token and the gold-backed cryptocurrency market.',
    'footer.enterEmail': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.careers': 'Careers',
    'footer.documentation': 'Documentation',
    'footer.guides': 'Guides',
    'footer.faq': 'FAQ',
    'footer.blog': 'Blog',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
    'footer.disclaimer': 'Disclaimer',
    
    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.description': 'Our journey to revolutionize gold-backed cryptocurrency through innovation and strategic partnerships.',
    'roadmap.futureVision': 'Looking Ahead',
    'roadmap.futureDescription': 'Our roadmap continues beyond 2024 with plans for environmental initiatives, international cooperation, and innovative sustainable development projects.',
    
    // Roadmap Items
    'roadmap.q1.title': 'ICC "Universum" Foundation',
    'roadmap.q1.description': 'Establishment of non-profit organization in collaboration with Public Safety Agency (Switzerland).',
    'roadmap.q1.item1': 'Non-profit organization registration',
    'roadmap.q1.item2': 'Partnership with Public Safety Agency',
    'roadmap.q1.item3': 'Core team formation',
    'roadmap.q1.item4': 'Project concept development',
    'roadmap.q2.title': 'Equity Fund Formation',
    'roadmap.q2.description': 'Creation of significant fund with precious metals, land assets and banking gold reserves.',
    'roadmap.q2.item1': 'Equity fund establishment',
    'roadmap.q2.item2': 'Gold reserves acquisition',
    'roadmap.q2.item3': 'Land assets securing',
    'roadmap.q2.item4': 'Banking partnerships establishment',
    'roadmap.q3.title': 'DeFi Integration',
    'roadmap.q3.description': 'Expand into decentralized finance ecosystem',
    'roadmap.q3.item1': 'Lending protocol integration',
    'roadmap.q3.item2': 'Yield farming opportunities',
    'roadmap.q3.item3': 'Cross-chain bridge development',
    'roadmap.q3.item4': 'Governance token distribution',
    'roadmap.q4.title': 'Global Expansion',
    'roadmap.q4.description': 'International market expansion and compliance',
    'roadmap.q4.item1': 'Regulatory compliance in key markets',
    'roadmap.q4.item2': 'International gold vault partnerships',
    'roadmap.q4.item3': 'Institutional investment products',
    'roadmap.q4.item4': 'Advanced trading features',
    
    // About Page
    'about.title': 'About ICC "Universum"',
    'about.subtitle': 'Revolutionizing Gold-Backed Cryptocurrency',
    'about.description': 'ICC "Universum" is a non-profit organization created in collaboration with the Public Safety Agency (Switzerland). Our mission is to create a sustainable ecosystem of gold-backed cryptocurrencies that combines financial innovation with environmental and social responsibility.',
    'about.whyChoose': 'Why Choose COBA',
    'about.whyDescription': 'Our approach to gold-backed cryptocurrency is built on principles of transparency, security, and sustainable development.',
    'about.ourJourney': 'Our Journey',
    'about.journeyDescription': 'From establishing a non-profit organization to launching revolutionary gold-backed cryptocurrency.',
    'about.readyToJoin': 'Ready to Join the Gold-Backed Revolution?',
    'about.joinDescription': 'Become part of the future of stable digital assets with COBA Token.',
    'about.getStarted': 'Get Started',
    
    // Contact Page
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Ready to Start Your COBA Journey?',
    'contact.description': 'We have experts ready to answer your questions and help you understand the benefits of gold-backed cryptocurrency.',
    'contact.emailUs': 'Email Us',
    'contact.emailDescription': 'Send us an email and we\'ll respond within 24 hours',
    'contact.callUs': 'Call Us',
    'contact.callDescription': 'Speak directly with us during business hours',
    'contact.visitUs': 'Visit Us',
    'contact.visitDescription': 'Our headquarters are open for scheduled meetings',
    
    // Tokenomics Page
    'tokenomics.title': 'COBA Tokenomics',
    'tokenomics.subtitle': 'Transparent and Sustainable Economic Model',
    'tokenomics.description': 'Understanding token distribution, emission mechanisms, and economic incentives that ensure long-term stability and growth of the COBA ecosystem.',
    'tokenomics.trading': 'Trading',
    'tokenomics.ecoPrograms': 'Eco Programs',
    'tokenomics.defi': 'DeFi',
    'tokenomics.payments': 'Payments',
    
    // FAQ Items
    'faq.q1.question': 'What makes COBA different from other cryptocurrencies?',
    'faq.q1.answer': 'COBA is backed by physical gold reserves, with each token representing 9.6 grams of gold. This provides intrinsic value and stability compared to purely speculative cryptocurrencies.',
    'faq.q2.question': 'How is the gold backing verified?',
    'faq.q2.answer': 'Our gold reserves are stored in certified vaults and audited monthly by independent third parties. All audit reports are published on our website for transparency.',
    'faq.q3.question': 'Can I redeem COBA tokens for physical gold?',
    'faq.q3.answer': 'Yes, qualified holders can redeem large quantities of COBA tokens for physical gold delivery, subject to minimum requirements and verification procedures.',
    'faq.q4.question': 'What is the KOH unit?',
    'faq.q4.answer': 'KOH is the smallest divisible unit of COBA, similar to satoshis for Bitcoin. 1 COBA equals 1,000 KOH, allowing for precise micro-transactions.',
    'faq.q5.question': 'How does the annual emission work?',
    'faq.q5.answer': 'New COBA tokens are minted annually at a rate of 9 billion tokens per year, but only when backed by corresponding gold reserves. This ensures sustainable growth while maintaining backing.',
    'faq.q6.question': 'Is COBA regulated?',
    'faq.q6.answer': 'We work closely with regulators in all jurisdictions where we operate. COBA complies with applicable securities and commodity regulations.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ru');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
