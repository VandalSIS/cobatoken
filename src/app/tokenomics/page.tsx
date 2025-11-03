'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { Coins, TrendingUp, Shield, Users, DollarSign, Calendar, Award, Target } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { TOKEN_METRICS, TOKEN_DISTRIBUTION } from '@/lib/constants';
import { formatCurrency, formatLargeNumber, formatNumber } from '@/lib/utils';
import { useLanguage } from '@/contexts/LanguageContext';

const emissionData = [
  { year: '2024', tokens: 9000000000, cumulative: 9000000000 },
  { year: '2025', tokens: 9000000000, cumulative: 18000000000 },
  { year: '2026', tokens: 9000000000, cumulative: 27000000000 },
  { year: '2027', tokens: 6000000000, cumulative: 33000000000 },
];

const priceHistory = [
  { month: 'Jan', price: 0.0018 },
  { month: 'Feb', price: 0.0021 },
  { month: 'Mar', price: 0.0019 },
  { month: 'Apr', price: 0.0023 },
  { month: 'May', price: 0.0024 },
  { month: 'Jun', price: 0.0024 },
];

const ecoPrograms = [
  { program: 'Образовательные инициативы', impact: 'Высокий', participants: '1000+' },
  { program: 'Экологические проекты', impact: 'Средний', participants: '500+' },
  { program: 'Социальная поддержка', impact: 'Высокий', participants: '2000+' },
  { program: 'Устойчивое развитие', impact: 'Очень высокий', participants: '3000+' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <p className="text-gray-900 dark:text-white font-semibold">{label}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} style={{ color: entry.color }} className="font-medium">
            {entry.name}: {entry.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function TokenomicsPage() {
  const { t } = useLanguage();

  const utilityData = [
    { category: t('tokenomics.trading'), percentage: 45, color: '#F59E0B' },
    { category: t('tokenomics.ecoPrograms'), percentage: 25, color: '#D97706' },
    { category: t('tokenomics.defi'), percentage: 20, color: '#B45309' },
    { category: t('tokenomics.payments'), percentage: 10, color: '#92400E' },
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
              COBA
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                Tokenomics
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive analysis of COBA token economics, distribution, utility, and long-term value proposition 
              backed by physical gold reserves.
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
              Token Overview
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Essential metrics and key information about COBA token structure and backing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Coins, label: 'Общий выпуск', value: formatLargeNumber(TOKEN_METRICS.totalSupply), color: 'text-blue-600' },
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
              Token Distribution
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent allocation of COBA tokens across different categories to ensure sustainable growth and community benefit.
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
                  <CardTitle className="text-center">Distribution Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                      <Pie
                        data={TOKEN_DISTRIBUTION}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={160}
                        paddingAngle={2}
                        dataKey="percentage"
                      >
                        {TOKEN_DISTRIBUTION.map((entry, index) => (
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
                {TOKEN_DISTRIBUTION.map((item, index) => (
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
                        {formatLargeNumber(item.amount)} COBA
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
              Emission Schedule
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Controlled token release schedule ensuring sustainable growth while maintaining gold backing integrity.
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">Annual Token Emission</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart data={emissionData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis tickFormatter={(value) => formatLargeNumber(value)} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="tokens" fill="#F59E0B" name="Annual Emission" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { label: 'Annual Emission', value: formatLargeNumber(TOKEN_METRICS.annualEmission), desc: 'Tokens per year' },
              { label: 'Max Supply', value: formatLargeNumber(TOKEN_METRICS.maxSupply), desc: 'Total cap' },
              { label: 'Emission Period', value: '4 Years', desc: 'Until max supply' },
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
              Token Utility
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Multiple use cases and utility functions that drive demand and value for COBA tokens.
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
                  <CardTitle className="text-center">Utility Distribution</CardTitle>
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
                  { icon: TrendingUp, title: 'Торговля и инвестиции', desc: 'Основная торговая пара на биржах с высокой ликвидностью' },
                  { icon: Shield, title: 'Экологические программы', desc: 'Участие в программах устойчивого развития и экологических инициативах' },
                  { icon: Users, title: 'DeFi интеграция', desc: 'Возможности кредитования, заимствования и фарминга доходности' },
                  { icon: DollarSign, title: 'Платежи', desc: 'Использование для платежей и транзакций в нашей экосистеме' },
                  { icon: Award, title: 'Управление', desc: 'Голосование за обновления протокола и предложения сообщества' },
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
              Экологические программы
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Участвуйте в программах устойчивого развития и экологических инициативах ICC "Universum".
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
                        Уровень воздействия
                      </div>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Участники: {program.participants}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price History */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Динамика цены
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Исторические данные о ценах, показывающие стабильность и потенциал роста токена COBA.
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center">6-Month Price History</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={priceHistory}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis tickFormatter={(value) => formatCurrency(value)} />
                  <Tooltip content={<CustomTooltip />} />
                  <Area 
                    type="monotone" 
                    dataKey="price" 
                    stroke="#F59E0B" 
                    fill="#F59E0B" 
                    fillOpacity={0.3}
                    name="Price (USD)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
}
