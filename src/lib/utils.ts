import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(num);
}

export function formatCurrency(num: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(num);
}

export function formatLargeNumber(num: number, language: 'ru' | 'en' = 'en'): string {
  if (num >= 1e9) {
    const suffix = language === 'ru' ? 'млрд' : 'B';
    return (num / 1e9).toFixed(1) + suffix;
  }
  if (num >= 1e6) {
    const suffix = language === 'ru' ? 'млн' : 'M';
    return (num / 1e6).toFixed(1) + suffix;
  }
  if (num >= 1e3) {
    const suffix = language === 'ru' ? 'тыс' : 'K';
    return (num / 1e3).toFixed(1) + suffix;
  }
  return num.toString();
}

export function scrollToSection(elementId: string) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
}
