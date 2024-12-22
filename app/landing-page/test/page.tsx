import { FileText, Grid2X2, Users } from 'lucide-react';

import BenefitsSection from '@/components/global/benefits-section';
import { ConversionApiSection } from '@/components/global/conversion-api-section';
import GuaranteeSection from '@/components/global/guarentee-section';
import { HeroSection } from '@/components/global/hero-section';
import { MarketTrendsSection } from '@/components/global/market-trends-section';
import SolutionSection from '@/components/global/solution-section';
import CaseStudiesGrid from '@/components/home/case-studies-grid';
import clients from '@/data/clients';
const mappedClients = clients.map((client) => ({
  id: client.id,
  company: {
    name: client.businessDetails.name,
    logo: client.businessDetails.images[0]?.url || client.clientDetails.images[0].url, // Use fallback if no image
    description: client.resultDetails.testimonial.content,
  },
  statistics: [
    {
      value: `${client.resultDetails.roas.value}${client.resultDetails.roas.symbol}`,
      label: 'ROAS',
    },
    {
      value: `${client.resultDetails.conversions.value}${client.resultDetails.conversions.symbol}`,
      label: 'Conversions',
    },
  ],
  image: {
    src: client.businessDetails.images[0]?.url || '',
    alt: `Client Image: ${client.businessDetails.name}`,
  },
  source: client.projectDetails.url,
}));

const steps = [
  {
    title: 'Precision Audit & Baseline Setup',
    description: 'Complete audit of your current setup and identify tracking gaps',
  },
  {
    title: 'Custom Integration with Facebook Pixel',
    description: 'Ensures Facebook Pixel and Ads Manager capture everything',
  },
  {
    title: 'Data Layer Installation',
    description: 'Custom data layer for more reliable, server-side tracking',
  },
  {
    title: 'Server-Side GTM Setup',
    description: 'Google Containers configured and hosted in the cloud',
  },
  {
    title: 'Track Key E-Commerce Events',
    description: 'Track Add to Cart, Checkout, Purchase, and more',
  },
  {
    title: 'Subdomain & Analytics Integration',
    description: 'Custom subdomain and full Google Analytics setup',
  },
  {
    title: '7-Day Monitoring & QA',
    description: 'Ensure perfect accuracy and optimize as needed',
  },
];
const benefits = [
  {
    title: "See Every Dollar's Impact",
    description:
      "With our 95%+ accuracy guarantee, you'll know exactly which ads bring the best results",
  },
  {
    title: 'Save Time and Effort',
    description: 'Our system handles all the heavy lifting and ongoing optimizations',
  },
  {
    title: 'Risk-Free Guarantee',
    description: "If we don't hit 95% tracking accuracy, you don't pay. Simple as that",
  },
  {
    title: 'Custom Analytics Dashboard',
    description: 'Get an intuitive, easy-to-read Google Analytics dashboard for instant insights',
  },
];

const trendCards = [
  {
    icon: FileText,
    title: 'Policies',
    description: 'are giving people more options to limit how their data is shared with businesses',
  },
  {
    icon: Users,
    title: 'People',
    description: 'are choosing to opt-out of receiving ads on websites',
  },
  {
    icon: Grid2X2,
    title: 'Platforms',
    description: 'are removing identity and grouping the data shared with businesses',
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col space-y-12">
      <HeroSection />
      <MarketTrendsSection trendCards={trendCards} />
      <ConversionApiSection />
      <CaseStudiesGrid caseStudies={mappedClients} />
      <SolutionSection steps={steps} />
      <BenefitsSection benefits={benefits} />
      <GuaranteeSection />
    </main>
  );
}
