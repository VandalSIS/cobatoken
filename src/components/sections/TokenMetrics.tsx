'use client';

import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { TOKEN_METRICS } from '@/lib/constants';
import { formatCurrency, formatLargeNumber, formatNumber } from '@/lib/utils';

const metrics = [
  {
    icon: DollarSign,
    label: 'Current Price',
    value: formatCurrency(TOKEN_METRICS.currentPrice),
    change: '+5.2%',
    positive: true,
  },
  {
    icon: TrendingUp,
    label: 'Market Cap',
    value: formatCurrency(TOKEN_METRICS.marketCap),
    change: '+12.8%',
    positive: true,
  },
  {
    icon: Coins,
    label: 'Total Supply',
    value: formatLargeNumber(TOKEN_METRICS.totalSupply),
    change: 'Fixed',
    positive: null,
  },
  {
    icon: Users,
    label: 'Gold Backing',
    value: `${TOKEN_METRICS.goldBacking}g`,
    change: 'Per Token',
    positive: null,
  },
];

const additionalStats = [
  { label: 'Max Supply', value: formatLargeNumber(TOKEN_METRICS.maxSupply) },
  { label: 'Annual Emission', value: formatLargeNumber(TOKEN_METRICS.annualEmission) },
  { label: 'Decimals', value: TOKEN_METRICS.decimals.toString() },
  { label: 'Smallest Unit', value: TOKEN_METRICS.smallestUnit },
];

export default function TokenMetrics() {
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
            Token Metrics
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real-time data and key statistics for COBA token, showcasing our commitment to transparency and growth.
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
            Token Details
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
            <span className="text-lg font-medium">Live Price:</span>
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
