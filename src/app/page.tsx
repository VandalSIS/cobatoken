'use client';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import TokenMetrics from '@/components/sections/TokenMetrics';
import HowItWorks from '@/components/sections/HowItWorks';
import Roadmap from '@/components/sections/Roadmap';
import FAQ from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <TokenMetrics />
      <HowItWorks />
      <Roadmap />
      <FAQ />
    </Layout>
  );
}
