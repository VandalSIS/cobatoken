export interface TokenMetrics {
  name: string;
  symbol: string;
  totalSupply: number;
  maxSupply: number;
  currentPrice: number;
  marketCap: number;
  goldBacking: number;
  decimals: number;
  smallestUnit: string;
  annualEmission: number;
}


export interface RoadmapItem {
  id: string;
  quarter: string;
  year: number;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'upcoming';
  items: string[];
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  interestType: string;
}

export interface LocalizedContent {
  ru: string;
  en: string;
}

export interface NewsItem {
  id: string;
  title: LocalizedContent;
  excerpt: LocalizedContent;
  date: string;
  image: string;
  source: LocalizedContent;
  url: string;
}


export interface TokenDistribution {
  category: string;
  percentage: number;
  amount: number;
  color: string;
}
