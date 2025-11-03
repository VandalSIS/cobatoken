'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Главная', href: '/' },
  { name: 'О проекте', href: '/about' },
  { name: 'Токеномика', href: '/tokenomics' },
  { name: 'Контакты', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg dark:bg-gray-900/95'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="https://0zv9fxypnefwkgxn.public.blob.vercel-storage.com/coba/boooo.png"
                alt="COBA Logo"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
                priority
              />
            </motion.div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              COBA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span className="text-sm font-medium">RU</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50"
                  >
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-lg">
                      🇷🇺 Русский
                    </button>
                    <button className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-lg">
                      🇺🇸 English
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <Button variant="outline" size="sm">
              Документация
            </Button>
            <Button size="sm">
              ПОМЕНЯТЬ COBA
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden rounded-lg p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-4 py-4 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-gray-700 hover:text-gold-600 dark:text-gray-300 dark:hover:text-gold-400 transition-colors duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <div className="flex items-center justify-between p-2 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Язык:</span>
                  <div className="flex space-x-2">
                    <button className="px-2 py-1 text-xs bg-gold-500 text-white rounded">RU</button>
                    <button className="px-2 py-1 text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">EN</button>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  Документация
                </Button>
                <Button size="sm" className="w-full">
                  ПОМЕНЯТЬ COBA
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
