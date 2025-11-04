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
    'hero.description': 'COBA - децентрализованная цифровая валюта, разработанная ICC "Universum" для повышения, стабильности и безопасности транзакций. Цена каждого токена определяется актуальной стоимостью 9,6 грамм золота в USDT. С ежедневной корректировкой соотношения золота к USDT.',
    'hero.buyTokens': 'ПОМЕНЯТЬ токены COBA',
    'hero.downloadDocs': 'Скачать документацию',
    'hero.currentPrice': 'Текущая цена',
    'hero.totalSupply': 'Общий выпуск',
    'hero.goldPerToken': 'Золота на токен',
    'hero.videoNotSupported': 'Ваш браузер не поддерживает видео.',
    
    // Token Metrics
    'metrics.title': 'Метрики токена',
    'metrics.description': 'Данные в реальном времени и ключевая статистика токена COBA, демонстрирует нашу приверженность прозрачности.',
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
    'metrics.livePrice': 'Стоимость 9.6 грамм золота в USDT в реальном времени',
    
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
    'features.goldBackingDesc': 'Каждый токен обеспечен 9,6 граммами золота',
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
    'about.joinCommunity': 'Присоединиться к сообществу',
    'about.downloadDocs': 'Скачать документацию',
    
    // About Page Values
    'about.values.security.title': 'Безопасность прежде всего',
    'about.values.security.desc': 'Многоподписные кошельки, регулярные аудиты и протоколы безопасности институционального уровня защищают ваши инвестиции.',
    'about.values.ecology.title': 'Экологическая ответственность',
    'about.values.ecology.desc': 'Внедрение экологически чистых технологий и реализация масштабных экологических инициатив для будущих поколений.',
    'about.values.social.title': 'Социальная значимость',
    'about.values.social.desc': 'Поддержка местных сообществ через образовательные и культурные инициативы, развитие предпринимательства.',
    'about.values.sustainability.title': 'Устойчивое развитие',
    'about.values.sustainability.desc': 'Контролируемые темпы эмиссии и золотое обеспечение гарантируют долгосрочное сохранение и рост стоимости.',
    
    // About Page Features
    'about.features.fund.title': 'Паевой фонд',
    'about.features.fund.desc': 'Значительный фонд, включающий товарные запасы, драгоценные металлы, земельные участки и банковские золотые резервы.',
    'about.features.fund.stats': '100% обеспечение',
    'about.features.cooperation.title': 'Международное сотрудничество',
    'about.features.cooperation.desc': 'Партнерство с Агентством Общественной Безопасности (Швейцария) и международными организациями.',
    'about.features.cooperation.stats': 'Глобальный охват',
    'about.features.education.title': 'Образовательные программы',
    'about.features.education.desc': 'Семинары, тренинги и вебинары с участием экспертов в области экологии и финансовых технологий.',
    'about.features.education.stats': 'Непрерывное обучение',
    'about.features.responsibility.title': 'Социальная ответственность',
    'about.features.responsibility.desc': 'Предотвращение бедности, развитие местного предпринимательства и поддержка образовательных инициатив.',
    'about.features.responsibility.stats': 'Забота о сообществах',
    
    // About Page Milestones
    'about.milestones.foundation.title': 'Основание ICC "Universum"',
    'about.milestones.foundation.desc': 'Создание некоммерческой организации в сотрудничестве с Агентством Общественной Безопасности (Швейцария).',
    'about.milestones.fund.title': 'Формирование Паевого Фонда',
    'about.milestones.fund.desc': 'Создание значительного фонда с драгоценными металлами, земельными участками и банковскими золотыми резервами.',
    'about.milestones.launch.title': 'Запуск токенов COBA',
    'about.milestones.launch.desc': 'Введение в оборот криптовалюты COBA с золотым покрытием (1 токен = 9,6 грамм золота).',
    'about.milestones.programs.title': 'Экологические программы',
    'about.milestones.programs.desc': 'Запуск масштабных экологических инициатив и образовательных программ для устойчивого развития.',
    
    // About Page Detailed Description
    'about.detailedDesc.paragraph1': 'ICC "Universum" - некоммерческая организация, объединяющая группы взаимосвязанных компаний, объединений и творческих коллективов пайщиков, в сотрудничестве с Агентством Общественной Безопасности (Швейцария), был основан высококвалифицированным, социально ориентированным коллективом специалистов с целью реализации обширного комплекса программ и высокотехнологичных проектов, нацеленных на улучшение качества жизни и создание комфортной, экологически чистой среды обитания человека, а также на раскрытие его творческого потенциала.',
    'about.detailedDesc.paragraph2': 'На базе ICC "Universum" был сформирован значительный Паевой Фонд, включающий товарные запасы пайщиков, драгоценные и редкоземельные металлы, земельные участки сельскохозяйственного и промышленного назначения, месторождения драгоценных камней, металлов, торфа, кремния, марганца и прочее, долговые обязательства: NATIONAL BOND OF DAIICHI KANGYO BANK, TOKYO, JAPAN (N157602-861) и NATIONAL BOND OF DAIICHI KANGYO BANK, TOKYO, JAPAN (N157602-887), а также Сертифицированный Документарный Тратта UCC-2 Ford Motor Company, дебиторская задолженность от глобальной финансовой системы (код транзакции №TV-BCT AN 10-01-07-0054-02.17), и достаточные объемы банковских золотых резервов для 100-процентного обеспечения всего объема введенных в оборот крипто-векселей в виде токенов.',
    'about.detailedDesc.paragraph3': 'В рамках созданной финансово-логистической платформы были введены в оборот собственные токены криптовалюты COBA, обеспеченные золотым покрытием (1 токен = 9,6 грамм золота). Цена каждого токена определяется актуальной стоимостью 9,6 грамм золота в USDT, с ежедневной корректировкой соотношения золота к USDT, а также паевыми и уставными фондами группы компаний кооперативов.',
    
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
    'contact.multipleWays': 'Несколько способов связаться с нами',
    'contact.communicationDescription': 'Выберите способ общения, который лучше всего подходит для вас. Мы стремимся предоставлять быстрые и полезные ответы.',
    
    // Contact Form
    'contact.sendMessage': 'Отправить сообщение',
    'contact.sendMessageTitle': 'Отправьте нам сообщение',
    'contact.formDescription': 'Заполните форму ниже, и мы свяжемся с вами как можно скорее.',
    'contact.fullName': 'Полное имя',
    'contact.emailAddress': 'Адрес электронной почты',
    'contact.subject': 'Тема',
    'contact.message': 'Сообщение',
    'contact.interestType': 'Тип интереса',
    'contact.sending': 'Отправка...',
    'contact.thankYou': 'Спасибо! Ваше сообщение было успешно отправлено. Мы свяжемся с вами в ближайшее время.',
    'contact.errorMessage': 'Что-то пошло не так. Пожалуйста, попробуйте еще раз.',
    
    // Form Validation
    'contact.validation.nameMin': 'Имя должно содержать не менее 2 символов',
    'contact.validation.emailInvalid': 'Пожалуйста, введите действительный адрес электронной почты',
    'contact.validation.subjectMin': 'Тема должна содержать не менее 5 символов',
    'contact.validation.messageMin': 'Сообщение должно содержать не менее 10 символов',
    'contact.validation.interestRequired': 'Пожалуйста, выберите тип интереса',
    
    // Interest Types
    'contact.interest.investment': 'Инвестиционные возможности',
    'contact.interest.partnership': 'Партнерские запросы',
    'contact.interest.technical': 'Техническая поддержка',
    'contact.interest.media': 'Медиа и пресса',
    'contact.interest.general': 'Общие вопросы',
    'contact.interest.other': 'Другое',
    
    // Contact Page Social Section
    'contact.joinCommunity': 'Присоединяйтесь к нашему сообществу',
    'contact.socialDescription': 'Свяжитесь с нами в социальных сетях для получения последних обновлений, новостей и обсуждений в сообществе.',
    'contact.quickQuestions': 'Быстрые вопросы?',
    'contact.faqDescription': 'Прежде чем обращаться к нам, ознакомьтесь с разделом FAQ для получения ответов на распространенные вопросы о токене COBA.',
    'contact.viewFaq': 'Посмотреть FAQ',
    
    // Tokenomics Page
    'tokenomics.title': 'Токеномика COBA',
    'tokenomics.subtitle': 'Прозрачная и устойчивая экономическая модель',
    'tokenomics.description': 'Понимание распределения токенов, механизмов эмиссии и экономических стимулов, которые обеспечивают долгосрочную стабильность и рост экосистемы COBA.',
    'tokenomics.comprehensive': 'Комплексный анализ экономики токена COBA, распределения, полезности и долгосрочного ценностного предложения, обеспеченного физическими золотыми резервами.',
    'tokenomics.overview': 'Обзор токена',
    'tokenomics.overviewDesc': 'Основные метрики и ключевая информация о структуре и обеспечении токена COBA.',
    'tokenomics.distribution': 'Распределение токенов',
    'tokenomics.distributionDesc': 'Прозрачное распределение токенов COBA по различным категориям для обеспечения устойчивого роста и пользы сообщества.',
    'tokenomics.distributionBreakdown': 'Структура распределения',
    'tokenomics.emission': 'График эмиссии',
    'tokenomics.emissionDesc': 'Контролируемый график выпуска токенов, обеспечивающий устойчивый рост при сохранении целостности золотого обеспечения.',
    'tokenomics.annualEmission': 'Годовая эмиссия токенов',
    'tokenomics.utility': 'Полезность токена',
    'tokenomics.utilityDesc': 'Множественные варианты использования и функции полезности, которые стимулируют спрос и ценность токенов COBA.',
    'tokenomics.utilityDistribution': 'Распределение полезности',
    'tokenomics.tradingInvestments': 'Торговля и инвестиции',
    'tokenomics.tradingInvestmentsDesc': 'Основная торговая пара на биржах с высокой ликвидностью',
    'tokenomics.ecoProgramsTitle': 'Экологические программы',
    'tokenomics.ecoProgramsDesc': 'Участие в программах устойчивого развития и экологических инициативах',
    'tokenomics.defiIntegration': 'DeFi интеграция',
    'tokenomics.defiIntegrationDesc': 'Возможности кредитования, заимствования и фарминга доходности',
    'tokenomics.paymentsTitle': 'Платежи',
    'tokenomics.paymentsDesc': 'Использование для платежей и транзакций в нашей экосистеме',
    'tokenomics.governance': 'Управление',
    'tokenomics.governanceDesc': 'Голосование за обновления протокола и предложения сообщества',
    'tokenomics.annualEmissionLabel': 'Годовая эмиссия',
    'tokenomics.tokensPerYear': 'Токенов в год',
    'tokenomics.maxSupplyLabel': 'Максимальный выпуск',
    'tokenomics.totalCap': 'Общий лимит',
    'tokenomics.emissionPeriod': 'Период эмиссии',
    'tokenomics.untilMaxSupply': 'До максимального выпуска',
    'tokenomics.fourYears': '4 года',
    'tokenomics.priceHistory': 'История цен за 6 месяцев',
    'tokenomics.ecoPrograms.educational': 'Образовательные инициативы',
    'tokenomics.ecoPrograms.environmental': 'Экологические проекты',
    'tokenomics.ecoPrograms.social': 'Социальная поддержка',
    'tokenomics.ecoPrograms.sustainable': 'Устойчивое развитие',
    'tokenomics.ecoPrograms.high': 'Высокий',
    'tokenomics.ecoPrograms.medium': 'Средний',
    'tokenomics.ecoPrograms.veryHigh': 'Очень высокий',
    'tokenomics.impactLevel': 'Уровень воздействия',
    'tokenomics.participants': 'Участники',
    'tokenomics.pricePerformance': 'Динамика цены',
    'tokenomics.pricePerformanceDesc': 'Исторические данные о ценах, показывающие стабильность и потенциал роста токена COBA.',
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
    'hero.description': 'COBA - decentralized digital currency developed by ICC "Universum" to enhance stability and transaction security. The price of each token is determined by the current value of 9.6 grams of gold in USDT. With daily adjustment of the gold to USDT ratio.',
    'hero.buyTokens': 'EXCHANGE COBA Tokens',
    'hero.downloadDocs': 'Download Documentation',
    'hero.currentPrice': 'Current Price',
    'hero.totalSupply': 'Total Supply',
    'hero.goldPerToken': 'Gold per Token',
    'hero.videoNotSupported': 'Your browser does not support the video tag.',
    
    // Token Metrics
    'metrics.title': 'Token Metrics',
    'metrics.description': 'Real-time data and key statistics for COBA token, showcasing our commitment to transparency.',
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
    'metrics.livePrice': 'Value of 9.6 grams of gold in USDT in real-time',
    
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
    'features.goldBackingDesc': 'Every token backed by 9.6g of gold',
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
    'about.joinCommunity': 'Join the Community',
    'about.downloadDocs': 'Download Documentation',
    
    // About Page Values
    'about.values.security.title': 'Security First',
    'about.values.security.desc': 'Multi-signature wallets, regular audits, and institutional-grade security protocols protect your investments.',
    'about.values.ecology.title': 'Environmental Responsibility',
    'about.values.ecology.desc': 'Implementation of eco-friendly technologies and large-scale environmental initiatives for future generations.',
    'about.values.social.title': 'Social Significance',
    'about.values.social.desc': 'Support for local communities through educational and cultural initiatives, entrepreneurship development.',
    'about.values.sustainability.title': 'Sustainable Development',
    'about.values.sustainability.desc': 'Controlled emission rates and gold backing ensure long-term preservation and growth of value.',
    
    // About Page Features
    'about.features.fund.title': 'Equity Fund',
    'about.features.fund.desc': 'Significant fund including commodity stocks, precious metals, land plots, and banking gold reserves.',
    'about.features.fund.stats': '100% Backing',
    'about.features.cooperation.title': 'International Cooperation',
    'about.features.cooperation.desc': 'Partnership with the Public Safety Agency (Switzerland) and international organizations.',
    'about.features.cooperation.stats': 'Global Reach',
    'about.features.education.title': 'Educational Programs',
    'about.features.education.desc': 'Seminars, trainings, and webinars with experts in ecology and financial technologies.',
    'about.features.education.stats': 'Continuous Learning',
    'about.features.responsibility.title': 'Social Responsibility',
    'about.features.responsibility.desc': 'Poverty prevention, local entrepreneurship development, and support for educational initiatives.',
    'about.features.responsibility.stats': 'Community Care',
    
    // About Page Milestones
    'about.milestones.foundation.title': 'ICC "Universum" Foundation',
    'about.milestones.foundation.desc': 'Establishment of non-profit organization in collaboration with Public Safety Agency (Switzerland).',
    'about.milestones.fund.title': 'Equity Fund Formation',
    'about.milestones.fund.desc': 'Creation of significant fund with precious metals, land assets and banking gold reserves.',
    'about.milestones.launch.title': 'COBA Token Launch',
    'about.milestones.launch.desc': 'Introduction of COBA cryptocurrency with gold backing (1 token = 9.6 grams of gold).',
    'about.milestones.programs.title': 'Environmental Programs',
    'about.milestones.programs.desc': 'Launch of large-scale environmental initiatives and educational programs for sustainable development.',
    
    // About Page Detailed Description
    'about.detailedDesc.paragraph1': 'ICC "Universum" is a non-profit organization uniting groups of interconnected companies, associations and creative collectives of shareholders, in collaboration with the Public Safety Agency (Switzerland), founded by a highly qualified, socially oriented team of specialists with the goal of implementing an extensive complex of programs and high-tech projects aimed at improving quality of life and creating a comfortable, environmentally clean human habitat, as well as unlocking creative potential.',
    'about.detailedDesc.paragraph2': 'Based on ICC "Universum", a significant Equity Fund was formed, including commodity stocks of shareholders, precious and rare earth metals, agricultural and industrial land plots, deposits of precious stones, metals, peat, silicon, manganese and more, debt obligations: NATIONAL BOND OF DAIICHI KANGYO BANK, TOKYO, JAPAN (N157602-861) and NATIONAL BOND OF DAIICHI KANGYO BANK, TOKYO, JAPAN (N157602-887), as well as Certified Documentary Draft UCC-2 Ford Motor Company, receivables from the global financial system (transaction code №TV-BCT AN 10-01-07-0054-02.17), and sufficient volumes of banking gold reserves for 100% backing of the entire volume of crypto-bills introduced into circulation in the form of tokens.',
    'about.detailedDesc.paragraph3': 'Within the created financial-logistic platform, proprietary COBA cryptocurrency tokens were introduced into circulation, backed by gold coverage (1 token = 9.6 grams of gold). The price of each token is determined by the current value of 9.6 grams of gold in USDT, with daily adjustment of the gold to USDT ratio, as well as equity and charter funds of the cooperative companies group.',
    
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
    'contact.multipleWays': 'Multiple Ways to Reach Us',
    'contact.communicationDescription': 'Choose the communication method that works best for you. We\'re committed to providing prompt, helpful responses.',
    
    // Contact Form
    'contact.sendMessage': 'Send Message',
    'contact.sendMessageTitle': 'Send Us a Message',
    'contact.formDescription': 'Fill out the form below and we\'ll get back to you as soon as possible.',
    'contact.fullName': 'Full Name',
    'contact.emailAddress': 'Email Address',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.interestType': 'Interest Type',
    'contact.sending': 'Sending...',
    'contact.thankYou': 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.',
    'contact.errorMessage': 'Something went wrong. Please try again.',
    
    // Form Validation
    'contact.validation.nameMin': 'Name must be at least 2 characters',
    'contact.validation.emailInvalid': 'Please enter a valid email address',
    'contact.validation.subjectMin': 'Subject must be at least 5 characters',
    'contact.validation.messageMin': 'Message must be at least 10 characters',
    'contact.validation.interestRequired': 'Please select an interest type',
    
    // Interest Types
    'contact.interest.investment': 'Investment Opportunities',
    'contact.interest.partnership': 'Partnership Inquiries',
    'contact.interest.technical': 'Technical Support',
    'contact.interest.media': 'Media & Press',
    'contact.interest.general': 'General Questions',
    'contact.interest.other': 'Other',
    
    // Contact Page Social Section
    'contact.joinCommunity': 'Join Our Community',
    'contact.socialDescription': 'Connect with us on social media for the latest updates, news, and community discussions.',
    'contact.quickQuestions': 'Quick Questions?',
    'contact.faqDescription': 'Before reaching out, check our FAQ section for answers to common questions about COBA token.',
    'contact.viewFaq': 'View FAQ',
    
    // Tokenomics Page
    'tokenomics.title': 'COBA Tokenomics',
    'tokenomics.subtitle': 'Transparent and Sustainable Economic Model',
    'tokenomics.description': 'Understanding token distribution, emission mechanisms, and economic incentives that ensure long-term stability and growth of the COBA ecosystem.',
    'tokenomics.comprehensive': 'Comprehensive analysis of COBA token economics, distribution, utility, and long-term value proposition backed by physical gold reserves.',
    'tokenomics.overview': 'Token Overview',
    'tokenomics.overviewDesc': 'Essential metrics and key information about COBA token structure and backing.',
    'tokenomics.distribution': 'Token Distribution',
    'tokenomics.distributionDesc': 'Transparent allocation of COBA tokens across different categories to ensure sustainable growth and community benefit.',
    'tokenomics.distributionBreakdown': 'Distribution Breakdown',
    'tokenomics.emission': 'Emission Schedule',
    'tokenomics.emissionDesc': 'Controlled token release schedule ensuring sustainable growth while maintaining gold backing integrity.',
    'tokenomics.annualEmission': 'Annual Token Emission',
    'tokenomics.utility': 'Token Utility',
    'tokenomics.utilityDesc': 'Multiple use cases and utility functions that drive demand and value for COBA tokens.',
    'tokenomics.utilityDistribution': 'Utility Distribution',
    'tokenomics.tradingInvestments': 'Trading and Investments',
    'tokenomics.tradingInvestmentsDesc': 'Primary trading pair on exchanges with high liquidity',
    'tokenomics.ecoProgramsTitle': 'Environmental Programs',
    'tokenomics.ecoProgramsDesc': 'Participation in sustainable development and environmental initiatives',
    'tokenomics.defiIntegration': 'DeFi Integration',
    'tokenomics.defiIntegrationDesc': 'Lending, borrowing, and yield farming opportunities',
    'tokenomics.paymentsTitle': 'Payments',
    'tokenomics.paymentsDesc': 'Use for payments and transactions in our ecosystem',
    'tokenomics.governance': 'Governance',
    'tokenomics.governanceDesc': 'Voting on protocol updates and community proposals',
    'tokenomics.annualEmissionLabel': 'Annual Emission',
    'tokenomics.tokensPerYear': 'Tokens per year',
    'tokenomics.maxSupplyLabel': 'Max Supply',
    'tokenomics.totalCap': 'Total cap',
    'tokenomics.emissionPeriod': 'Emission Period',
    'tokenomics.untilMaxSupply': 'Until max supply',
    'tokenomics.fourYears': '4 Years',
    'tokenomics.priceHistory': '6-Month Price History',
    'tokenomics.ecoPrograms.educational': 'Educational Initiatives',
    'tokenomics.ecoPrograms.environmental': 'Environmental Projects',
    'tokenomics.ecoPrograms.social': 'Social Support',
    'tokenomics.ecoPrograms.sustainable': 'Sustainable Development',
    'tokenomics.ecoPrograms.high': 'High',
    'tokenomics.ecoPrograms.medium': 'Medium',
    'tokenomics.ecoPrograms.veryHigh': 'Very High',
    'tokenomics.impactLevel': 'Impact Level',
    'tokenomics.participants': 'Participants',
    'tokenomics.pricePerformance': 'Price Performance',
    'tokenomics.pricePerformanceDesc': 'Historical price data showing stability and growth potential of COBA token.',
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
