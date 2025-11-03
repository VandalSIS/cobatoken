import { TokenMetrics, RoadmapItem, TokenDistribution, NewsItem } from '@/types';

export const TOKEN_METRICS: TokenMetrics = {
  name: 'COBA',
  symbol: 'COBA',
  totalSupply: 9000000000, // 9 billion
  maxSupply: 33000000000, // 33 billion
  currentPrice: 0.0024, // Example price in USD
  marketCap: 21600000, // Example market cap
  goldBacking: 9.6, // grams of gold per COBA
  decimals: 3,
  smallestUnit: 'KOH',
  annualEmission: 9000000000, // 9 billion per year
};


export const ROADMAP: RoadmapItem[] = [
  {
    id: '1',
    quarter: 'Q1',
    year: 2024,
    title: 'Foundation & Launch',
    description: 'Initial token launch and infrastructure setup',
    status: 'completed',
    items: [
      'Smart contract development and audit',
      'Initial gold reserves acquisition',
      'Website and community launch',
      'DEX listings and liquidity provision',
    ],
  },
  {
    id: '2',
    quarter: 'Q2',
    year: 2024,
    title: 'Exchange Integration',
    description: 'Major exchange listings and partnerships',
    status: 'in-progress',
    items: [
      'Tier 1 centralized exchange listings',
      'Strategic partnerships with gold dealers',
      'Mobile wallet integration',
      'Программы экологического развития',
    ],
  },
  {
    id: '3',
    quarter: 'Q3',
    year: 2024,
    title: 'DeFi Integration',
    description: 'Expand into decentralized finance ecosystem',
    status: 'upcoming',
    items: [
      'Lending protocol integration',
      'Yield farming opportunities',
      'Cross-chain bridge development',
      'Governance token distribution',
    ],
  },
  {
    id: '4',
    quarter: 'Q4',
    year: 2024,
    title: 'Global Expansion',
    description: 'International market expansion and compliance',
    status: 'upcoming',
    items: [
      'Regulatory compliance in key markets',
      'International gold vault partnerships',
      'Institutional investment products',
      'Advanced trading features',
    ],
  },
];



export const TOKEN_DISTRIBUTION: TokenDistribution[] = [
  {
    category: 'Public Sale',
    percentage: 45,
    amount: 14850000000,
    color: '#F59E0B',
  },
  {
    category: 'Reserve Fund',
    percentage: 25,
    amount: 8250000000,
    color: '#D97706',
  },
  {
    category: 'Development Fund',
    percentage: 15,
    amount: 4950000000,
    color: '#B45309',
  },
  {
    category: 'Development',
    percentage: 10,
    amount: 3300000000,
    color: '#92400E',
  },
  {
    category: 'Marketing',
    percentage: 5,
    amount: 1650000000,
    color: '#78350F',
  },
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: '1',
    title: 'COBA Token Launches Revolutionary Gold-Backed Cryptocurrency',
    excerpt: 'New ERC-20 token provides stability through physical gold reserves while maintaining blockchain efficiency.',
    date: '2024-01-15',
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?w=600&h=400&fit=crop',
    source: 'Крипто новости',
    url: '#',
  },
  {
    id: '2',
    title: 'Объявлено о крупном партнерстве биржи для торговли COBA',
    excerpt: 'Стратегическое партнерство обеспечит повышенную ликвидность и глобальный доступ к рынку для держателей токенов COBA.',
    date: '2024-02-03',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop',
    source: 'Блокчейн сегодня',
    url: '#',
  },
  {
    id: '3',
    title: 'COBA запускает экологические программы',
    excerpt: 'Держатели токенов могут участвовать в программах устойчивого развития и поддержке экологических инициатив.',
    date: '2024-02-20',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
    source: 'Еженедельник DeFi',
    url: '#',
  },
];

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/cobatoken',
  telegram: 'https://t.me/cobatoken',
  discord: 'https://discord.gg/cobatoken',
  medium: 'https://medium.com/@cobatoken',
  github: 'https://github.com/cobatoken',
  linkedin: 'https://linkedin.com/company/cobatoken',
};

export const CONTACT_INFO = {
  email: 'info@cobagold.com',
  address: '123 Blockchain Avenue, Suite 456, Crypto City, CC 12345',
  phone: '+1 (555) 123-COBA',
};
