'use client';

import Layout from '@/components/layout/Layout';
import Hero from '@/components/sections/Hero';
import TokenMetrics from '@/components/sections/TokenMetrics';
import HowItWorks from '@/components/sections/HowItWorks';
import Roadmap from '@/components/sections/Roadmap';
import Team from '@/components/sections/Team';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import News from '@/components/sections/News';

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <TokenMetrics />
      <HowItWorks />
      <Roadmap />
      <Team />
      <Testimonials />
      <FAQ />
      <News />
    </Layout>
  );
}
