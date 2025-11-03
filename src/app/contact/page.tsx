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

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  interestType: z.string().min(1, 'Please select an interest type'),
});

const interestTypes = [
  { value: 'investment', label: 'Инвестиционные возможности' },
  { value: 'partnership', label: 'Партнерские запросы' },
  { value: 'technical', label: 'Техническая поддержка' },
  { value: 'media', label: 'Медиа и пресса' },
  { value: 'general', label: 'Общие вопросы' },
  { value: 'other', label: 'Другое' },
];

const contactMethods = [
  {
    icon: Mail,
    title: 'Email Us',
    description: 'Send us an email and we\'ll respond within 24 hours',
    contact: CONTACT_INFO.email,
    href: `mailto:${CONTACT_INFO.email}`,
  },
  {
    icon: Phone,
    title: 'Call Us',
    description: 'Speak directly with our team during business hours',
    contact: CONTACT_INFO.phone,
    href: `tel:${CONTACT_INFO.phone}`,
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    description: 'Our headquarters are open for scheduled meetings',
    contact: CONTACT_INFO.address,
    href: '#',
  },
];

const socialLinks = [
  { icon: Twitter, href: SOCIAL_LINKS.twitter, label: 'Twitter' },
  { icon: MessageCircle, href: SOCIAL_LINKS.telegram, label: 'Telegram' },
  { icon: Linkedin, href: SOCIAL_LINKS.linkedin, label: 'LinkedIn' },
  { icon: Github, href: SOCIAL_LINKS.github, label: 'GitHub' },
];

export default function ContactPage() {
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
              Get in
              <span className="block bg-gold-gradient bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Have questions about COBA token? Want to explore partnership opportunities? 
              Our team is here to help you navigate the future of gold-backed cryptocurrency.
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
              Multiple Ways to Reach Us
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Choose the communication method that works best for you. We're committed to providing prompt, helpful responses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Card className="text-center h-full hover:shadow-xl transition-all duration-300">
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

      {/* Contact Form */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Send Us a Message
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </motion.div>

          <Card>
            <CardHeader>
              <CardTitle className="text-center text-2xl">Contact Form</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200">
                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-800 dark:text-red-200">
                    Sorry, there was an error sending your message. Please try again.
                  </span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.name
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500 focus:border-gold-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      {...register('email')}
                      className={`w-full px-4 py-3 rounded-lg border ${
                        errors.email
                          ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                          : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500 focus:border-gold-500'
                      } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="interestType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Interest Type *
                  </label>
                  <select
                    id="interestType"
                    {...register('interestType')}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.interestType
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500 focus:border-gold-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2`}
                  >
                    <option value="">Select an interest type</option>
                    {interestTypes.map((type) => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.interestType && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.interestType.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    {...register('subject')}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.subject
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500 focus:border-gold-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2`}
                    placeholder="Brief subject of your message"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={6}
                    {...register('message')}
                    className={`w-full px-4 py-3 rounded-lg border ${
                      errors.message
                        ? 'border-red-300 focus:ring-red-500 focus:border-red-500'
                        : 'border-gray-300 dark:border-gray-600 focus:ring-gold-500 focus:border-gold-500'
                    } bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2`}
                    placeholder="Please provide details about your inquiry..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  isLoading={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  {!isSubmitting && <Send className="ml-2 h-5 w-5" />}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Social Media & Community */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Join Our Community
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connect with us on social media for the latest updates, news, and community discussions.
            </p>
          </motion.div>

          <div className="flex justify-center space-x-8">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon className="h-8 w-8 text-gold-600 dark:text-gold-400 group-hover:text-gold-700 dark:group-hover:text-gold-300 transition-colors" />
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                    {social.label}
                  </p>
                </motion.a>
              );
            })}
          </div>

          {/* FAQ CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gold-gradient rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Quick Questions?</h3>
            <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
              Before reaching out, check our FAQ section for answers to common questions about COBA token.
            </p>
            <Button variant="secondary" size="lg">
              View FAQ
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
