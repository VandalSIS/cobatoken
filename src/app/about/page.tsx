'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, TrendingUp, Award, Globe, Lock, Zap, Leaf, BookOpen, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';




export default function AboutPage() {
  const { t } = useLanguage();
  
  const values = [
    {
      icon: Shield,
      title: t('about.values.security.title'),
      description: t('about.values.security.desc'),
    },
    {
      icon: Leaf,
      title: t('about.values.ecology.title'),
      description: t('about.values.ecology.desc'),
    },
    {
      icon: Users,
      title: t('about.values.social.title'),
      description: t('about.values.social.desc'),
    },
    {
      icon: TrendingUp,
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.desc'),
    },
  ];

  const features = [
    {
      icon: Award,
      title: t('about.features.fund.title'),
      description: t('about.features.fund.desc'),
      stats: t('about.features.fund.stats'),
    },
    {
      icon: Globe,
      title: t('about.features.cooperation.title'),
      description: t('about.features.cooperation.desc'),
      stats: t('about.features.cooperation.stats'),
    },
    {
      icon: BookOpen,
      title: t('about.features.education.title'),
      description: t('about.features.education.desc'),
      stats: t('about.features.education.stats'),
    },
    {
      icon: Heart,
      title: t('about.features.responsibility.title'),
      description: t('about.features.responsibility.desc'),
      stats: t('about.features.responsibility.stats'),
    },
  ];

  const milestones = [
    {
      year: '2021 Q1',
      title: t('about.milestones.foundation.title'),
      description: t('about.milestones.foundation.desc'),
    },
    {
      year: '2022 Q2',
      title: t('about.milestones.fund.title'),
      description: t('about.milestones.fund.desc'),
    },
    {
      year: '2024 Q3',
      title: t('about.milestones.launch.title'),
      description: t('about.milestones.launch.desc'),
    },
    {
      year: '2025 Q4',
      title: t('about.milestones.programs.title'),
      description: t('about.milestones.programs.desc'),
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t('about.title')}
                <span className="block bg-gold-gradient bg-clip-text text-transparent">
                  {t('about.subtitle')}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {t('about.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  {t('about.joinCommunity')}
                </Button>
                <Button variant="outline" size="lg">
                  {t('about.downloadDocs')}
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
                alt="Modern office representing COBA Token headquarters"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gold-500/20 blur-3xl rounded-full transform scale-150" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About ICC Universum - Detailed */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              О ПРОЕКТЕ
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none dark:prose-invert text-left prose-headings:text-left prose-p:text-left prose-ul:text-left prose-li:text-left"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                {t('about.detailedDesc.intro')}
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                {t('about.detailedDesc.fund')}
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                {t('about.detailedDesc.coba')}
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-left">
                {t('about.detailedDesc.purpose')}
              </p>

              {/* Goals */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4 text-left">
                {t('about.goals.title')}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 text-left">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.goals.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.goals.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.goals.item3')}</span>
                </li>
              </ul>

              {/* Advantages */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4 text-left">
                {t('about.advantages.title')}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 text-left">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.advantages.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.advantages.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.advantages.item3')}</span>
                </li>
              </ul>

              {/* Prospects */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4 text-left">
                {t('about.prospects.title')}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 text-left">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.prospects.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.prospects.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.prospects.item3')}</span>
                </li>
              </ul>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                {t('about.education')}
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                {t('about.community')}
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-left">
                {t('about.platform')}
              </p>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed text-left">
                {t('about.ecology')}
              </p>

              {/* Activities */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4 text-left">
                {t('about.activities.title')}
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300 mb-8 text-left">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.activities.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.activities.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.activities.item3')}</span>
                </li>
              </ul>

              {/* Social Programs */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-4 text-left">
                {t('about.social.title')}
              </h3>
              <ul className="space-y-3 text-lg text-gray-600 dark:text-gray-300 mb-8 text-left">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.social.item1')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.social.item2')}</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-2">-</span>
                  <span>{t('about.social.item3')}</span>
                </li>
              </ul>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                {t('about.conclusion')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('about.coreValues')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('about.coreValuesDesc')}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center h-full">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
               {t('about.whyChoose')}
             </h2>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
               {t('about.whyDescription')}
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 md:p-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-gold-100 dark:bg-gold-900/20 rounded-xl">
                          <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                        </div>
                        <div className="flex-1 text-left min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white text-left">
                              {feature.title}
                            </h3>
                            <span className="text-xs sm:text-sm font-medium text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/20 px-3 py-1 rounded-full self-start sm:self-auto whitespace-nowrap">
                              {feature.stats}
                            </span>
                          </div>
                          <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 leading-relaxed text-left">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
               {t('about.ourJourney')}
             </h2>
             <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
               {t('about.journeyDescription')}
             </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gold-300 dark:bg-gold-600" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>

                  <div className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                    <Card>
                      <CardHeader>
                        <div className="flex items-center space-x-4">
                          <span className="text-2xl font-bold text-gold-600 dark:text-gold-400">
                            {milestone.year}
                          </span>
                          <CardTitle className="text-xl">
                            {milestone.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 bg-gold-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
             <h2 className="text-3xl md:text-4xl font-bold mb-6">
               {t('about.readyToJoin')}
             </h2>
             <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
               {t('about.joinDescription')}
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="secondary" size="lg">
                 {t('hero.buyTokens')}
               </Button>
               <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-gold-600">
                 {t('about.getStarted')}
               </Button>
             </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}


