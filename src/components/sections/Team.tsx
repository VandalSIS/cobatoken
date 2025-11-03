'use client';

import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/Card';
import { TEAM_MEMBERS } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Team() {
  const { t } = useLanguage();
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
            {t('team.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            {t('team.description')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="text-center group hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  {/* Profile Image */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="relative mb-6"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gold-gradient opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300" />
                  </motion.div>

                  {/* Member Info */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-gold-600 dark:text-gold-400 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.linkedin && (
                      <motion.a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gold-100 dark:hover:bg-gold-900/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400" />
                      </motion.a>
                    )}
                    {member.twitter && (
                      <motion.a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gold-100 dark:hover:bg-gold-900/20 transition-colors"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Twitter className="h-5 w-5 text-gray-600 dark:text-gray-400 hover:text-gold-600 dark:hover:text-gold-400" />
                      </motion.a>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Advisory Board Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Advisory Board
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our advisors bring decades of experience from traditional finance, regulatory compliance, and blockchain innovation.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gold-50 to-gold-100 dark:from-gold-900/20 dark:to-gold-800/20 rounded-2xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  50+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Years combined experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  $2B+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Assets under management
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">
                  15+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Successful exits
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
