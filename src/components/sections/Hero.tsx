'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Shield, TrendingUp, Zap, Globe, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { TOKEN_METRICS } from '@/lib/constants';
import { formatCurrency, formatLargeNumber } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Hero() {
  const { t, language, setLanguage } = useLanguage();
  const [langOpen, setLangOpen] = useState(false);

  const features = [
    {
      icon: Shield,
      title: t('features.goldBacking'),
      description: t('features.goldBackingDesc'),
    },
    {
      icon: TrendingUp,
      title: t('features.stableValue'),
      description: t('features.stableValueDesc'),
    },
    {
      icon: Zap,
      title: t('features.fastTransactions'),
      description: t('features.fastTransactionsDesc'),
    },
  ];
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              {/* Language Switcher */}
              <div className="relative mb-4 inline-block">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-full bg-gold-500/20 text-gold-400 text-sm font-medium hover:bg-gold-500/30 transition-colors"
                >
                  <Globe className="h-4 w-4" />
                  <span>{language === 'ru' ? '🇷🇺 Русский' : '🇺🇸 English'}</span>
                  <ChevronDown className="h-4 w-4" />
                </button>
                
                <AnimatePresence>
                  {langOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute left-0 mt-2 w-40 bg-gray-800 rounded-lg shadow-lg border border-gray-700 z-50"
                    >
                      <button 
                        onClick={() => {
                          setLanguage('ru');
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-700 rounded-t-lg ${
                          language === 'ru' ? 'bg-gold-500/20 text-gold-400' : 'text-gray-300'
                        }`}
                      >
                        🇷🇺 Русский
                      </button>
                      <button 
                        onClick={() => {
                          setLanguage('en');
                          setLangOpen(false);
                        }}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-gray-700 rounded-b-lg ${
                          language === 'en' ? 'bg-gold-500/20 text-gold-400' : 'text-gray-300'
                        }`}
                      >
                        🇺🇸 English
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('hero.title')}
                <span className="block bg-gold-gradient bg-clip-text text-transparent">
                  {t('hero.subtitle')}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                {t('hero.description')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Button size="lg" className="group">
                {t('hero.buyTokens')}
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-6"
            >
              <div>
                <div className="text-2xl font-bold text-gold-400">
                  {formatCurrency(TOKEN_METRICS.currentPrice)}
                </div>
                <div className="text-sm text-gray-400">{t('hero.currentPrice')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400">
                  {formatLargeNumber(TOKEN_METRICS.totalSupply)}
                </div>
                <div className="text-sm text-gray-400">{t('hero.totalSupply')}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gold-400">
                  {TOKEN_METRICS.goldBacking}г
                </div>
                <div className="text-sm text-gray-400">{t('hero.goldPerToken')}</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Video Player */}
              <div className="relative flex justify-center items-center">
                <div className="rounded-2xl overflow-hidden shadow-2xl max-w-2xl">
                  <video
                    className="w-full rounded-2xl block object-cover"
                    style={{ height: '600px' }}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  onError={() => console.error('Video failed to load')}
                >
                    <source src="/videos/coba.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-gold-gradient p-4 rounded-xl shadow-lg"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Shield className="h-8 w-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -bottom-4 -left-4 bg-blue-gradient p-4 rounded-xl shadow-lg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <TrendingUp className="h-8 w-8 text-white" />
              </motion.div>
            </div>

            {/* Background Glow */}
            <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full transform scale-150" />
          </motion.div>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gold-gradient rounded-lg">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm text-gray-300">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
