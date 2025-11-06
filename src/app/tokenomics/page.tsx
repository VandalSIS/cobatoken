'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { Coins, TrendingUp, Shield, Users, DollarSign, Calendar, Award, Target } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TOKEN_METRICS } from '@/lib/constants';
import { formatCurrency, formatLargeNumber, formatNumber } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const emissionData = [
  { year: '2024', tokens: 9000000000, cumulative: 9000000000 },
  { year: '2025', tokens: 9000000000, cumulative: 18000000000 },
  { year: '2026', tokens: 9000000000, cumulative: 27000000000 },
  { year: '2027', tokens: 6000000000, cumulative: 33000000000 },
];

const CustomTooltip = ({ active, payload, label, language }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white font-semibold text-base mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="font-medium text-sm">
            {entry.name}: {formatLargeNumber(entry.value, language || 'en')}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TokenomicsPage() {
  const { t, language } = useLanguage();

  const ecoPrograms = [
    { program: t('tokenomics.ecoPrograms.educational'), impact: t('tokenomics.ecoPrograms.high'), participants: '1000+' },
    { program: t('tokenomics.ecoPrograms.environmental'), impact: t('tokenomics.ecoPrograms.medium'), participants: '500+' },
    { program: t('tokenomics.ecoPrograms.social'), impact: t('tokenomics.ecoPrograms.high'), participants: '2000+' },
    { program: t('tokenomics.ecoPrograms.sustainable'), impact: t('tokenomics.ecoPrograms.veryHigh'), participants: '3000+' },
  ];

  const utilityData = [
    { category: t('tokenomics.trading'), percentage: 45, color: '#F59E0B' },
    { category: t('tokenomics.ecoPrograms'), percentage: 25, color: '#D97706' },
    { category: t('tokenomics.defi'), percentage: 20, color: '#B45309' },
    { category: t('tokenomics.payments'), percentage: 10, color: '#92400E' },
  ];

  const tokenDistribution = [
    {
      category: t('tokenomics.publicSale'),
      percentage: 45,
      amount: 14850000000,
      color: '#F59E0B',
    },
    {
      category: t('tokenomics.reserveFund'),
      percentage: 25,
      amount: 8250000000,
      color: '#D97706',
    },
    {
      category: t('tokenomics.developmentFund'),
      percentage: 15,
      amount: 4950000000,
      color: '#B45309',
    },
    {
      category: t('tokenomics.development'),
      percentage: 10,
      amount: 3300000000,
      color: '#92400E',
    },
    {
      category: t('tokenomics.marketing'),
      percentage: 5,
      amount: 1650000000,
      color: '#78350F',
    },
  ];
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23F59E0B' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('tokenomics.title')}
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('tokenomics.comprehensive')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('tokenomics.overview')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('tokenomics.overviewDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Coins, label: 'Общий выпуск', value: formatLargeNumber(TOKEN_METRICS.totalSupply, language), color: 'text-blue-600' },
              { icon: DollarSign, label: 'Текущая цена', value: formatCurrency(TOKEN_METRICS.currentPrice), color: 'text-green-600' },
              { icon: Shield, label: 'Золотое обеспечение', value: `${TOKEN_METRICS.goldBacking}г`, color: 'text-gold-600' },
              { icon: TrendingUp, label: 'Рыночная капитализация', value: formatCurrency(TOKEN_METRICS.marketCap), color: 'text-purple-600' },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className={`w-12 h-12 ${metric.color} bg-opacity-10 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                        <Icon className={`h-6 w-6 ${metric.color}`} />
                      </div>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {metric.label}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Token Distribution */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('tokenomics.distribution')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('tokenomics.distributionDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{t('tokenomics.distributionBreakdown')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={tokenDistribution}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={160}
                        paddingAngle={2}
                        dataKey="percentage"
                      >
                        {tokenDistribution.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                {tokenDistribution.map((item, index) => (
                  <motion.div
                    key={item.category}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="font-medium text-gray-900 dark:text-white">
                        {item.category}
                      </span>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900 dark:text-white">
                        {item.percentage}%
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {formatLargeNumber(item.amount, language)} COBA
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emission Schedule */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('tokenomics.emission')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('tokenomics.emissionDesc')}
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">{t('tokenomics.annualEmission')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={emissionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="year" 
                    tick={{ fill: '#6B7280', fontSize: 14, fontWeight: 500 }}
                  />
                  <YAxis 
                    tickFormatter={(value) => formatLargeNumber(value, language)}
                    tick={{ fill: '#6B7280', fontSize: 14, fontWeight: 500 }}
                    width={80}
                  />
                  <Tooltip 
                    content={<CustomTooltip language={language} />}
                  />
                  <Bar dataKey="tokens" fill="#F59E0B" name={t('tokenomics.annualEmissionLabel')} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: t('tokenomics.annualEmissionLabel'), value: formatLargeNumber(TOKEN_METRICS.annualEmission, language), desc: t('tokenomics.tokensPerYear') },
              { label: t('tokenomics.maxSupplyLabel'), value: formatLargeNumber(TOKEN_METRICS.maxSupply, language), desc: t('tokenomics.totalCap') },
              { label: t('tokenomics.emissionPeriod'), value: t('tokenomics.fourYears'), desc: t('tokenomics.untilMaxSupply') },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-2xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                      {stat.value}
                    </div>
                    <div className="font-medium text-gray-900 dark:text-white mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.desc}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Token Utility */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('tokenomics.utility')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('tokenomics.utilityDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">{t('tokenomics.utilityDistribution')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={utilityData}
                        cx="50%"
                        cy="50%"
                        outerRadius={120}
                        dataKey="percentage"
                      >
                        {utilityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip content={<CustomTooltip />} />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                {[
                  { icon: Shield, title: t('tokenomics.ecoProgramsTitle'), desc: t('tokenomics.ecoProgramsDesc') },
                  { icon: Users, title: t('tokenomics.defiIntegration'), desc: t('tokenomics.defiIntegrationDesc') },
                  { icon: DollarSign, title: t('tokenomics.paymentsTitle'), desc: t('tokenomics.paymentsDesc') },
                  { icon: Award, title: t('tokenomics.governance'), desc: t('tokenomics.governanceDesc') },
                ].map((utility, index) => {
                  const Icon = utility.icon;
                  return (
                    <motion.div
                      key={utility.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="p-2 bg-gold-100 dark:bg-gold-900/20 rounded-lg">
                        <Icon className="h-6 w-6 text-gold-600 dark:text-gold-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {utility.title}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {utility.desc}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Eco Programs */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('tokenomics.ecoProgramsTitle')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('tokenomics.ecoProgramsDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecoPrograms.map((program, index) => (
              <motion.div
                key={program.program}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gold-gradient" />
                  <CardContent className="p-6">
                    <div className="mb-4">
                      <Calendar className="h-8 w-8 text-gold-600 dark:text-gold-400 mx-auto mb-2" />
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {program.program}
                      </h3>
                    </div>
                    <div className="mb-4">
                      <div className="text-2xl font-bold text-gold-600 dark:text-gold-400 mb-1">
                        {program.impact}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t('tokenomics.impactLevel')}
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {t('tokenomics.participants')}: {program.participants}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
