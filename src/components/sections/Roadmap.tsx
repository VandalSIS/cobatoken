'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Clock, Calendar } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';

const statusIcons = {
  completed: CheckCircle,
  'in-progress': Clock,
  upcoming: Calendar,
};

const statusColors = {
  completed: 'text-green-500 bg-green-100 dark:bg-green-900/20',
  'in-progress': 'text-blue-500 bg-blue-100 dark:bg-blue-900/20',
  upcoming: 'text-gray-500 bg-gray-100 dark:bg-gray-800',
};

export default function Roadmap() {
  const { t } = useLanguage();

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'completed':
        return t('roadmap.status.completed');
      case 'in-progress':
        return t('roadmap.status.in-progress');
      case 'upcoming':
        return t('roadmap.status.upcoming');
      default:
        return status;
    }
  };

  // Create roadmap data dynamically with translations
  const roadmapData = [
    {
      id: '1',
      quarter: 'Q1',
      year: 2021,
      title: t('roadmap.q1.title'),
      description: t('roadmap.q1.description'),
      status: 'completed' as 'completed' | 'in-progress' | 'upcoming',
      items: [
        t('roadmap.q1.item1'),
        t('roadmap.q1.item2'),
        t('roadmap.q1.item3'),
        t('roadmap.q1.item4'),
      ],
    },
    {
      id: '2',
      quarter: 'Q2',
      year: 2022,
      title: t('roadmap.q2.title'),
      description: t('roadmap.q2.description'),
      status: 'completed' as 'completed' | 'in-progress' | 'upcoming',
      items: [
        t('roadmap.q2.item1'),
        t('roadmap.q2.item2'),
        t('roadmap.q2.item3'),
        t('roadmap.q2.item4'),
      ],
    },
    {
      id: '3',
      quarter: 'Q3',
      year: 2024,
      title: t('roadmap.q3.title'),
      description: t('roadmap.q3.description'),
      status: 'completed' as 'completed' | 'in-progress' | 'upcoming',
      items: [
        t('roadmap.q3.item1'),
        t('roadmap.q3.item2'),
        t('roadmap.q3.item3'),
        t('roadmap.q3.item4'),
      ],
    },
    {
      id: '4',
      quarter: 'Q4',
      year: 2025,
      title: t('roadmap.q4.title'),
      description: t('roadmap.q4.description'),
      status: 'upcoming' as 'completed' | 'in-progress' | 'upcoming',
      items: [
        t('roadmap.q4.item1'),
        t('roadmap.q4.item2'),
        t('roadmap.q4.item3'),
        t('roadmap.q4.item4'),
      ],
    },
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
            {t('roadmap.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('roadmap.description')}
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gold-300 dark:bg-gold-600" />

          <div className="space-y-12">
            {roadmapData.map((item, index) => {
              const StatusIcon = statusIcons[item.status];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 z-10">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${statusColors[item.status]}`}>
                      <StatusIcon className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 ${isEven ? 'md:mr-8' : 'md:ml-8'} md:w-1/2`}>
                    <Card className="relative">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="text-2xl font-bold text-gold-600 dark:text-gold-400">
                              {item.quarter}
                            </span>
                            <span className="text-lg text-gray-600 dark:text-gray-400">
                              {item.year}
                            </span>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              item.status === 'completed'
                                ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                                : item.status === 'in-progress'
                                ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400'
                                : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'
                            }`}
                          >
                            {getStatusLabel(item.status)}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                          {item.description}
                        </p>

                        <ul className="space-y-2">
                          {item.items.map((task, taskIndex) => (
                            <motion.li
                              key={taskIndex}
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: index * 0.1 + taskIndex * 0.05 }}
                              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <div className="w-1.5 h-1.5 bg-gold-500 rounded-full flex-shrink-0" />
                              <span>{task}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center bg-gold-gradient rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-4">{t('roadmap.futureVision')}</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            {t('roadmap.futureDescription')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
