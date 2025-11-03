'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Twitter, MessageCircle, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SOCIAL_LINKS, CONTACT_INFO } from '@/lib/constants';
import { useLanguage } from '@/contexts/LanguageContext';

const socialIcons = [
  { name: 'Twitter', icon: Twitter, href: SOCIAL_LINKS.twitter },
  { name: 'Telegram', icon: MessageCircle, href: SOCIAL_LINKS.telegram },
  { name: 'Github', icon: Github, href: SOCIAL_LINKS.github },
  { name: 'LinkedIn', icon: Linkedin, href: SOCIAL_LINKS.linkedin },
];

export default function Footer() {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: t('nav.about'), href: '/about' },
      { name: t('nav.tokenomics'), href: '/tokenomics' },
      { name: t('footer.careers'), href: '/careers' },
    ],
    resources: [
      { name: t('footer.documentation'), href: '/whitepaper.pdf' },
      { name: t('footer.guides'), href: '/docs' },
      { name: t('footer.faq'), href: '/#faq' },
      { name: t('footer.blog'), href: '/blog' },
    ],
    legal: [
      { name: t('footer.privacy'), href: '/privacy' },
      { name: t('footer.terms'), href: '/terms' },
      { name: t('footer.cookies'), href: '/cookies' },
      { name: t('footer.disclaimer'), href: '/disclaimer' },
    ],
  };
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              {t('footer.stayUpdated')}
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              {t('footer.newsletterDesc')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t('footer.enterEmail')}
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
              />
              <Button className="whitespace-nowrap">
                {t('footer.subscribe')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
              >
                <Image
                  src="https://0zv9fxypnefwkgxn.public.blob.vercel-storage.com/coba/boooo.png"
                  alt="COBA Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
              </motion.div>
              <span className="text-xl font-bold text-white">COBA</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <MapPin size={16} />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>{CONTACT_INFO.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>{CONTACT_INFO.phone}</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.resources')}</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
            {socialIcons.map((social) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={24} />
                </motion.a>
              );
            })}
          </div>
          <p className="text-gray-400 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
