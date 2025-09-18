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

export interface TeamMember {
  id: string;
  name: string;
  position: string;
  bio: string;
  image: string;
  linkedin?: string;
  twitter?: string;
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

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  source: string;
  url: string;
}

export interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface TokenDistribution {
  category: string;
  percentage: number;
  amount: number;
  color: string;
}
