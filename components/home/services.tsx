import React from "react";
import TypographyH2 from "../ui/typography-h2";
import TypographyP from "../ui/typography-p";
import FeatureCard from "./feature-card";
import {
  BarChart,
  CheckCircle,
  FileText,
  Globe,
  Layers,
  Zap,
} from "lucide-react";
import Container from "../ui/container";

export default function Services() {
  return (
    <Container className="text-center">
      <TypographyH2>Look at what we have worked with in the Past</TypographyH2>
      {/* <TypographyP>
    We have worked with all kinds of tech stacks such as Shopify, Google
    Analytics, and Salesforce. We know many tools and technologies to help you
    best.
   </TypographyP> */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          icon={<Globe className="mb-4 h-12 w-12 text-primary" />}
          title="Content Management Systems"
          description="Shopify, WooCommerce, WordPress, Instapage, Unbounce, HubSpot CMS, Wix, Squarespace, HTML5, CSS3, JavaScript (React.js, Vue.js, Angular), Drupal, Magento, Joomla, BigCommerce."
          dialogTitle="Content Management Systems"
          dialogDescription="We have experience with various content management systems including Shopify, WooCommerce, WordPress, and more. We can help you integrate tracking with these platforms efficiently."
        />
        <FeatureCard
          icon={<BarChart className="mb-4 h-12 w-12 text-primary" />}
          title="Analytics Platforms"
          description="Google Analytics 4, FB Pixel & Conversion API, TikTok Pixel & Event API, Pinterest & Conversion API, Mixpanel, Matomo, Optimizely, Hotjar, Snowplow Analytics, Little Data, Twitter Pixel & S2S, Snapchat Pixel & Conversion API, Adobe Analytics."
          dialogTitle="Analytics Platforms"
          dialogDescription="Our team is skilled in using various analytics platforms such as Google Analytics 4, Facebook Pixel, TikTok Pixel, and more to provide comprehensive tracking solutions."
        />
        <FeatureCard
          icon={<CheckCircle className="mb-4 h-12 w-12 text-primary" />}
          title="Conversion Tracking"
          description="Google Ads, YouTube Ads, Microsoft Bing Ads, LinkedIn Ads, Meta Ads, Twitter Ads, Heap, Crazy Egg, Clicky, Snapchat Ads, Criteo, AdRoll, Outbrain."
          dialogTitle="Conversion Tracking"
          dialogDescription="We offer expertise in conversion tracking for platforms like Google Ads, YouTube Ads, Microsoft Bing Ads, and others to help optimize your marketing efforts."
        />
        <FeatureCard
          icon={<Layers className="mb-4 h-12 w-12 text-primary" />}
          title="Tag Management & Integrations"
          description="Google Tag Manager, Segment.io, Zapier, Stape.io, Tealium, Salesforce Marketing Cloud, Amazon AWS, Google Cloud Platforms, Adobe Launch, Piwik PRO Tag Manager."
          dialogTitle="Tag Management & Integrations"
          dialogDescription="Our team can help you with tag management and integrations using tools like Google Tag Manager, Segment.io, and more to ensure seamless data collection and analysis."
        />
        <FeatureCard
          icon={<FileText className="mb-4 h-12 w-12 text-primary" />}
          title="Reporting & Dashboard"
          description="Microsoft Power BI, Tableau, Google Looker Studio, SQL Reporting, BigQuery, Zoho Analytics."
          dialogTitle="Reporting & Dashboard"
          dialogDescription="We specialize in setting up reporting and dashboards using tools like Microsoft Power BI, Tableau, and Google Looker Studio to provide you with clear and actionable insights."
        />
        <FeatureCard
          icon={<Zap className="mb-4 h-12 w-12 text-primary" />}
          title="3rd Party Platforms"
          description="Gravity Forms, HubSpot Forms, Tripetto, Typeform, MailChimp, Contact7Forms, AWeber, JotForm, Infusionsoft."
          dialogTitle="3rd Party Platforms"
          dialogDescription="We integrate tracking with various third-party platforms such as Gravity Forms, HubSpot Forms, Typeform, and others to streamline your data collection process."
        />
      </div>
    </Container>
  );
}
