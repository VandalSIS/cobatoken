'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, MessageCircle, Twitter, Linkedin, Github } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CONTACT_INFO, SOCIAL_LINKS } from '@/lib/constants';
import { ContactFormData } from '@/types';
import { useLanguage } from '@/contexts/LanguageContext';



const socialLinks = [
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  { icon: MessageCircle, href: SOCIAL_LINKS.telegram, label: 'Telegram' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
];

export default function ContactPage() {
  const { t } = useLanguage();

  const contactSchema = z.object({
    name: z.string().min(2, t('contact.validation.nameMin')),
    email: z.string().email(t('contact.validation.emailInvalid')),
    subject: z.string().min(5, t('contact.validation.subjectMin')),
    message: z.string().min(10, t('contact.validation.messageMin')),
    interestType: z.string().min(1, t('contact.validation.interestRequired')),
  });

  const interestTypes = [
    { value: 'investment', label: t('contact.interest.investment') },
    { value: 'partnership', label: t('contact.interest.partnership') },
    { value: 'technical', label: t('contact.interest.technical') },
    { value: 'media', label: t('contact.interest.media') },
    { value: 'general', label: t('contact.interest.general') },
    { value: 'other', label: t('contact.interest.other') },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.emailUs'),
      description: t('contact.emailDescription'),
      contact: CONTACT_INFO.email,
      href: `mailto:${CONTACT_INFO.email}`,
    },
  ];
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
              {t('contact.title')}
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                {t('contact.subtitle')}
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              {t('contact.description')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {t('contact.multipleWays')}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              {t('contact.communicationDescription')}
            </p>
          </motion.div>

          <div className="flex justify-center">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="text-center hover:shadow-xl transition-all duration-300 max-w-md">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gold-100 dark:bg-gold-900/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                        {method.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {method.description}
                      </p>
                      <a
                        href={method.href}
                        className="text-gold-600 dark:text-gold-400 hover:text-gold-700 dark:hover:text-gold-300 font-medium transition-colors"
                      >
                        {method.contact}
                      </a>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

    </Layout>
  );
}
