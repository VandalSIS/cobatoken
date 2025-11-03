'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Shield, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      icon: ShoppingCart,
      title: t('howItWorks.step1.title'),
      description: t('howItWorks.step1.desc'),
      step: '01',
    },
    {
      icon: Shield,
      title: t('howItWorks.step2.title'),
      description: t('howItWorks.step2.desc'),
      step: '02',
    },
    {
      icon: Coins,
      title: t('howItWorks.step3.title'),
      description: t('howItWorks.step3.desc'),
      step: '03',
    },
  ];
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('howItWorks.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connection Lines */}
          <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-gold-400 to-gold-600" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="text-center h-full relative z-10">
                  <CardContent className="p-8">
                    {/* Step Number */}
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="w-8 h-8 bg-gold-gradient rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                    </div>

                    {/* Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4"
                    >
                      <Icon className="h-10 w-10 text-gold-600 dark:text-gold-400" />
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20 rounded-2xl p-8"
        >
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              {t('howItWorks.whyChoose')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  5,000+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('howItWorks.goldHistory')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  24/7
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('howItWorks.trading247')}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  100%
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t('howItWorks.goldBacked')}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
