'use client';

import { motion } from 'framer-motion';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import PrivacyContentRU from '@/components/privacy/PrivacyContentRU';
import PrivacyContentEN from '@/components/privacy/PrivacyContentEN';

export default function PrivacyPage() {
  const { language } = useLanguage();

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
              {language === 'ru' ? 'Политика' : 'Privacy'}
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                {language === 'ru' ? 'Конфиденциальности' : 'Policy'}
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {language === 'ru' 
                ? 'Ваша конфиденциальность имеет основополагающее значение для наших отношений. Узнайте, как мы собираем, используем и защищаем вашу личную информацию.'
                : 'Your privacy is fundamental to our relationship. Learn how we collect, use, and protect your personal information.'}
            </p>
            <p className="text-sm text-gray-400 mt-4">
              {language === 'ru' ? 'Последнее обновление:' : 'Last updated:'} {language === 'ru' ? '29 ноября 2025' : '29 November 2025'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      {language === 'ru' ? <PrivacyContentRU /> : <PrivacyContentEN />}
    </Layout>
  );
}
