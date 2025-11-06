'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { TOKEN_METRICS } from '@/lib/constants';
import { formatCurrency, formatLargeNumber, formatNumber } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

export default function TokenMetrics() {
  const { t, language } = useLanguage();

  const metrics = [
    {
      icon: DollarSign,
      label: t('metrics.currentPrice'),
      value: formatCurrency(TOKEN_METRICS.currentPrice),
      change: '+5.2%',
      positive: true,
    },
    {
      icon: TrendingUp,
      label: t('metrics.marketCap'),
      value: formatCurrency(TOKEN_METRICS.marketCap),
      change: '+12.8%',
      positive: true,
    },
    {
      icon: Coins,
      label: t('metrics.totalSupply'),
      value: formatLargeNumber(TOKEN_METRICS.totalSupply, language),
      change: t('metrics.fixed'),
      positive: null,
    },
    {
      icon: Users,
      label: t('metrics.goldBacking'),
      value: `${TOKEN_METRICS.goldBacking}г`,
      change: t('metrics.perToken'),
      positive: null,
    },
  ];

  const additionalStats = [
    { label: t('metrics.maxSupply'), value: formatLargeNumber(TOKEN_METRICS.maxSupply, language) },
    { label: t('metrics.annualEmission'), value: formatLargeNumber(TOKEN_METRICS.annualEmission, language) },
    { label: t('metrics.decimals'), value: TOKEN_METRICS.decimals.toString() },
    { label: t('metrics.smallestUnit'), value: TOKEN_METRICS.smallestUnit },
  ];
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('metrics.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('metrics.description')}
          </p>
        </motion.div>

        {/* Main Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="relative overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-gold-100 dark:bg-gold-900/20 rounded-lg">
                        <Icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                      </div>
                      {metric.positive !== null && (
                        <span
                          className={`text-sm font-medium ${
                            metric.positive
                              ? 'text-green-600 dark:text-green-400'
                              : 'text-red-600 dark:text-red-400'
                          }`}
                        >
                          {metric.change}
                        </span>
                      )}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {metric.value}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </p>
                    </div>
                    {metric.positive === null && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                        {metric.change}
                      </p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            {t('metrics.tokenDetails')}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {additionalStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Live Price Ticker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 bg-gold-gradient rounded-2xl p-6 text-white text-center"
        >
          <div className="flex items-center justify-center space-x-4">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-3 h-3 bg-green-400 rounded-full"
            />
            <span className="text-lg font-medium">{t('metrics.livePrice')}:</span>
            <span className="text-2xl font-bold">
              {formatCurrency(TOKEN_METRICS.currentPrice)}
            </span>
            <span className="text-green-300">+5.2% (24h)</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
