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
    
    // Features
    'features.goldBacking': 'Золотое обеспечение',
    'features.goldBackingDesc': 'Каждый токен обеспечен 9,6 граммами физического золота',
    'features.stableValue': 'Стабильная стоимость',
    'features.stableValueDesc': 'Сочетает стабильность золота с инновациями криптовалют',
    'features.fastTransactions': 'Быстрые транзакции',
    'features.fastTransactionsDesc': 'Основан на Ethereum для быстрых и безопасных переводов',
    
    // Team
    'team.title': 'Наша команда',
    'team.description': 'Опытные специалисты в области экологии, финансовых технологий и устойчивого развития, работающие над созданием лучшего будущего.',
    
    // News
    'news.title': 'Последние новости и обновления',
    'news.description': 'Будьте в курсе развития токенов COBA, партнерских отношений и отраслевых инсайтов.',
    
    // FAQ
    'faq.title': 'Часто задаваемые вопросы',
    'faq.description': 'Получите ответы на распространенные вопросы о токенах COBA, золотом обеспечении и нашей платформе.',
    'faq.stillQuestions': 'Остались вопросы?',
    'faq.teamHelp': 'Наша команда готова помочь вам понять токены COBA и начать работу с криптовалютой с золотым обеспечением.',
    'faq.contactSupport': 'Связаться с поддержкой',
    
    // Footer
    'footer.description': 'Будущее криптовалюты с золотым обеспечением. Сочетаем стабильность драгоценных металлов с инновациями блокчейн-технологий.',
    'footer.company': 'Компания',
    'footer.resources': 'Ресурсы',
    'footer.legal': 'Правовая информация',
    'footer.copyright': '© 2024 ICC "Universum" COBA Token. Все права защищены.',
    
    // Roadmap
    'roadmap.title': 'Дорожная карта',
    'roadmap.description': 'Наш путь к революционизации криптовалют с золотым обеспечением через инновации и стратегические партнерства.',
    'roadmap.futureVision': 'Взгляд в будущее',
    'roadmap.futureDescription': 'Наша дорожная карта продолжается после 2024 года с планами по экологическим инициативам, международному сотрудничеству и инновационным проектам устойчивого развития.',
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
    
    // Features
    'features.goldBacking': 'Gold-Backed Security',
    'features.goldBackingDesc': 'Every token backed by 9.6g of physical gold',
    'features.stableValue': 'Stable Value',
    'features.stableValueDesc': 'Combines gold stability with crypto innovation',
    'features.fastTransactions': 'Fast Transactions',
    'features.fastTransactionsDesc': 'Ethereum-based for quick, secure transfers',
    
    // Team
    'team.title': 'Our Team',
    'team.description': 'Experienced professionals in ecology, financial technology, and sustainable development working to create a better future.',
    
    // News
    'news.title': 'Latest News & Updates',
    'news.description': 'Stay informed about COBA token developments, partnerships, and industry insights.',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.description': 'Get answers to common questions about COBA tokens, gold backing, and our platform.',
    'faq.stillQuestions': 'Still have questions?',
    'faq.teamHelp': 'Our team is here to help you understand COBA tokens and get started with gold-backed cryptocurrency.',
    'faq.contactSupport': 'Contact Support',
    
    // Footer
    'footer.description': 'The future of gold-backed cryptocurrency. Combining the stability of precious metals with blockchain technology innovations.',
    'footer.company': 'Company',
    'footer.resources': 'Resources',
    'footer.legal': 'Legal',
    'footer.copyright': '© 2024 ICC "Universum" COBA Token. All rights reserved.',
    
    // Roadmap
    'roadmap.title': 'Roadmap',
    'roadmap.description': 'Our journey to revolutionize gold-backed cryptocurrency through innovation and strategic partnerships.',
    'roadmap.futureVision': 'Looking Ahead',
    'roadmap.futureDescription': 'Our roadmap continues beyond 2024 with plans for environmental initiatives, international cooperation, and innovative sustainable development projects.',
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
