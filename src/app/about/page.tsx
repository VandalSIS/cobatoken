'use client';

import { motion } from 'framer-motion';
import { Shield, Target, Users, TrendingUp, Award, Globe, Lock, Zap } from 'lucide-react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import Team from '@/components/sections/Team';

const values = [
  {
    icon: Shield,
    title: 'Security First',
    description: 'Multi-signature wallets, regular audits, and institutional-grade security protocols protect your investments.',
  },
  {
    icon: Target,
    title: 'Transparency',
    description: 'Monthly gold reserve audits, real-time metrics, and open-source smart contracts ensure complete transparency.',
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'Governance decisions are made collectively by token holders through our decentralized voting system.',
  },
  {
    icon: TrendingUp,
    title: 'Sustainable Growth',
    description: 'Controlled emission rates and gold backing ensure long-term value preservation and growth.',
  },
];

const features = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Our team has successfully launched multiple fintech products serving millions of users.',
    stats: '5+ Years Experience',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Operating in multiple jurisdictions with full regulatory compliance and international partnerships.',
    stats: '15+ Countries',
  },
  {
    icon: Lock,
    title: 'Secure Infrastructure',
    description: 'Bank-grade security with cold storage, multi-sig wallets, and comprehensive insurance coverage.',
    stats: '99.9% Uptime',
  },
  {
    icon: Zap,
    title: 'Fast Settlement',
    description: 'Lightning-fast transactions on Ethereum network with low fees and instant confirmations.',
    stats: '<1 Min Settlement',
  },
];

const milestones = [
  {
    year: '2023',
    title: 'Company Founded',
    description: 'COBA Token was established with the vision of bridging traditional gold investments and modern blockchain technology.',
  },
  {
    year: '2024 Q1',
    title: 'Token Launch',
    description: 'Successfully launched COBA token with initial gold reserves and smart contract deployment on Ethereum.',
  },
  {
    year: '2024 Q2',
    title: 'Exchange Listings',
    description: 'Listed on major cryptocurrency exchanges, providing global liquidity and accessibility.',
  },
  {
    year: '2024 Q3',
    title: 'DeFi Integration',
    description: 'Integrated with leading DeFi protocols, enabling staking, lending, and yield farming opportunities.',
  },
];

export default function AboutPage() {
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
                About
                <span className="block bg-gold-gradient bg-clip-text text-transparent">
                  COBA Token
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We're revolutionizing digital assets by combining the timeless value of gold with cutting-edge blockchain technology. 
                COBA Token represents the future of stable, transparent, and accessible cryptocurrency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">
                  Join Our Community
                </Button>
                <Button variant="outline" size="lg">
                  Download Whitepaper
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

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To democratize access to gold-backed digital assets while maintaining the highest standards 
                of security, transparency, and regulatory compliance. We believe that everyone should have 
                access to stable, asset-backed cryptocurrency that preserves value over time.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                By bridging traditional precious metals investing with modern blockchain technology, 
                we're creating a new paradigm for digital asset stability and utility.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                To become the global standard for gold-backed cryptocurrency, fostering financial inclusion 
                and stability in the digital asset ecosystem. We envision a future where stable, 
                asset-backed tokens are the foundation of decentralized finance.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Through continuous innovation and strategic partnerships, we aim to expand the utility 
                and accessibility of gold-backed digital assets worldwide.
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
              Why Choose COBA
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence, security, and innovation sets us apart in the cryptocurrency space.
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Key milestones in our mission to revolutionize gold-backed cryptocurrency.
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

      {/* Team Section */}
      <Team />

      {/* CTA Section */}
      <section className="py-20 bg-gold-gradient text-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the Gold-Backed Revolution?
            </h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Be part of the future of stable digital assets. Start your journey with COBA token today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg">
                Buy COBA Tokens
              </Button>
              <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-gold-600">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
