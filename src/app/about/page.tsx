'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, TrendingUp, Award, Globe, Lock, Zap, Leaf, BookOpen, Heart } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { useLanguage } from '@/contexts/LanguageContext';

const values = [
  {
    icon: Shield,
    title: 'Безопасность прежде всего',
    description: 'Многоподписные кошельки, регулярные аудиты и протоколы безопасности институционального уровня защищают ваши инвестиции.',
  },
  {
    icon: Leaf,
    title: 'Экологическая ответственность',
    description: 'Внедрение экологически чистых технологий и реализация масштабных экологических инициатив для будущих поколений.',
  },
  {
    icon: Users,
    title: 'Социальная значимость',
    description: 'Поддержка местных сообществ через образовательные и культурные инициативы, развитие предпринимательства.',
  },
  {
    icon: TrendingUp,
    title: 'Устойчивое развитие',
    description: 'Контролируемые темпы эмиссии и золотое обеспечение гарантируют долгосрочное сохранение и рост стоимости.',
  },
];

const features = [
  {
    icon: Award,
    title: 'Паевой фонд',
    description: 'Значительный фонд, включающий товарные запасы, драгоценные металлы, земельные участки и банковские золотые резервы.',
    stats: '100% обеспечение',
  },
  {
    icon: Globe,
    title: 'Международное сотрудничество',
    description: 'Партнерство с Агентством Общественной Безопасности (Швейцария) и международными организациями.',
    stats: 'Глобальный охват',
  },
  {
    icon: BookOpen,
    title: 'Образовательные программы',
    description: 'Семинары, тренинги и вебинары с участием экспертов в области экологии и финансовых технологий.',
    stats: 'Непрерывное обучение',
  },
  {
    icon: Heart,
    title: 'Социальная ответственность',
    description: 'Предотвращение бедности, развитие местного предпринимательства и поддержка образовательных инициатив.',
    stats: 'Забота о сообществах',
  },
];

const milestones = [
  {
    year: '2024',
    title: 'Основание ICC "Universum"',
    description: 'Создание некоммерческой организации в сотрудничестве с Агентством Общественной Безопасности (Швейцария).',
  },
  {
    year: '2024 Q2',
    title: 'Формирование Паевого Фонда',
    description: 'Создание значительного фонда с драгоценными металлами, земельными участками и банковскими золотыми резервами.',
  },
  {
    year: '2024 Q3',
    title: 'Запуск токенов COBA',
    description: 'Введение в оборот криптовалюты COBA с золотым покрытием (1 токен = 9,6 грамм золота).',
  },
  {
    year: '2024 Q4',
    title: 'Экологические программы',
    description: 'Запуск масштабных экологических инициатив и образовательных программ для устойчивого развития.',
  },
];

export default function AboutPage() {
  const { t } = useLanguage();
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
                  Присоединиться к сообществу
                </Button>
                <Button variant="outline" size="lg">
                  Скачать документацию
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

      {/* About ICC Universum */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              О ICC "Universum"
            </h2>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none dark:prose-invert"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                ICC "Universum" - некоммерческая организация, объединяющая группы взаимосвязанных компаний, объединений и творческих коллективов пайщиков, 
                в сотрудничестве с Агентством Общественной Безопасности (Швейцария), был основан высококвалифицированным, социально ориентированным 
                коллективом специалистов с целью реализации обширного комплекса программ и высокотехнологичных проектов, нацеленных на улучшение качества 
                жизни и создание комфортной, экологически чистой среды обитания человека, а также на раскрытие его творческого потенциала.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                На базе ICC "Universum" был сформирован значительный Паевой Фонд, включающий товарные запасы пайщиков, драгоценные и редкоземельные металлы, 
                земельные участки сельскохозяйственного и промышленного назначения, месторождения драгоценных камней, металлов, торфа, кремния, марганца и прочее, 
                долговые обязательства: NATIONAL BOND OF DAIICHI KANGYO BANK, TOKYO, JAPAN (N157602-861) и NATIONAL BOND OF DAIICHI KANGYO BANK, TOKYO, JAPAN (N157602-887), 
                а также Сертифицированный Документарный Тратта UCC-2 Ford Motor Company, дебиторская задолженность от глобальной финансовой системы 
                (код транзакции №TV-BCT AN 10-01-07-0054-02.17), и достаточные объемы банковских золотых резервов для 100-процентного обеспечения всего объема 
                введенных в оборот крипто-векселей в виде токенов.
              </p>
              
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                В рамках созданной финансово-логистической платформы были введены в оборот собственные токены криптовалюты COBA, обеспеченные золотым покрытием 
                (1 токен = 9,6 грамм золота), с резервами, превышающими объем выпуска, а также паевыми и уставными фондами группы компаний кооперативов.
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The principles that guide our decisions and shape our commitment to our community.
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
                    <CardContent className="p-8">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-gold-100 dark:bg-gold-900/20 rounded-xl">
                          <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-3">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {feature.title}
                            </h3>
                            <span className="text-sm font-medium text-gold-600 dark:text-gold-400 bg-gold-100 dark:bg-gold-900/20 px-3 py-1 rounded-full">
                              {feature.stats}
                            </span>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
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


