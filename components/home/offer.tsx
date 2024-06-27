import React, { FC } from 'react';
import YoutubeEmbed from '../global/youtube-embed';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import {
  Rocket,
  Target,
  Smile,
  ShieldCheck,
  Headset,
  Globe,
  BarChart,
  CheckCircle,
  Layers,
  FileText,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import TypographyH2 from '../ui/typography-h2';
import TypographyH3 from '../ui/typography-h3';
import TypographyP from '../ui/typography-p';

export default function Offer() {
  return (
    <Container className='pt-4 space-y-6'>
      <TypographyH2 className='text-center'>
        Ready to see how it works?{' '}
        <span className='text-primary'>Watch the video</span>
      </TypographyH2>

      <div className='flex justify-center items-center min-h-max'>
        <YoutubeEmbed embedId='9MGpL_AmEYM' className='max-w-4xl w-full' />
      </div>

      <div className='text-center space-y-6'>
        <TypographyH2>
          Improve Your Tracking with Proven Results. Here's How:
        </TypographyH2>
        <TypographyP>
          We ensure your tracking is accurate with an easy setup, full testing,
          and low maintenance. Our system helps you make better decisions and
          increase your profits.
        </TypographyP>

        <div className='grid gap-6 md:grid-cols-3'>
          <FeatureCard
            icon={<Rocket className='h-12 w-12 text-primary mb-4' />}
            title='Quick Setup'
            description='We set up your tracking system in 7 days. Our team handles everything to ensure it works smoothly with no downtime.'
            dialogTitle='Quick Setup'
            dialogDescription='Our expert team will set up your tracking system in just 7 days, ensuring it works smoothly with no downtime. We handle everything, so you can focus on your business.'
          />
          <FeatureCard
            icon={<Target className='h-12 w-12 text-primary mb-4' />}
            title='High Accuracy'
            description='Get 95% accuracy, which helps you make better decisions and increase your profits. Our system is easy to maintain with low costs.'
            dialogTitle='High Accuracy'
            dialogDescription='Achieve 95% accuracy in your tracking, allowing you to make better decisions and increase your profits. Our system is designed for easy maintenance and low costs.'
          />
          <FeatureCard
            icon={<Smile className='h-12 w-12 text-primary mb-4' />}
            title='Ease of Use'
            description={`Our system is simple and doesn\'t require much technical knowledge. It grows with your business while staying accurate and efficient.`}
            dialogTitle='Ease of Use'
            dialogDescription={`Our user-friendly system is simple to use and doesn\'t require much technical knowledge. It grows with your business while maintaining accuracy and efficiency.`}
          />
        </div>

        <TypographyH2 className='text-center'>
          Enjoy the End Results
        </TypographyH2>
        <TypographyP>
          We make sure your tracking is 95% accurate so you get the right data
          every time. Plus, our support team is here to help you all day, every
          day.
        </TypographyP>

        <div className='grid gap-6 md:grid-cols-2'>
          <FeatureCard
            icon={<ShieldCheck className='h-12 w-12 text-primary mb-4' />}
            title='Guaranteed Accuracy'
            description='We guarantee 95% tracking accuracy within 7 days, or you get a full refund. Your satisfaction is our priority.'
            dialogTitle='Guaranteed Accuracy'
            dialogDescription='We guarantee 95% tracking accuracy within 7 days or you get a full refund. Your satisfaction is our top priority.'
          />
          <FeatureCard
            icon={<Headset className='h-12 w-12 text-primary mb-4' />}
            title='24/7 Support'
            description='Our customer service team is available 24/7 to help you. Experience the difference our system can make for your business.'
            dialogTitle='24/7 Support'
            dialogDescription='Our customer service team is available 24/7 to assist you. Experience the difference our dedicated support can make for your business.'
          />
        </div>

        <TypographyH2>
          Look at what we have worked with in the Past
        </TypographyH2>
        <TypographyP>
          We have worked with all kinds of tech stacks such as Shopify, Google
          Analytics, and Salesforce. We know many tools and technologies to help
          you best.
        </TypographyP>

        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          <FeatureCard
            icon={<Globe className='h-12 w-12 text-primary mb-4' />}
            title='Content Management Systems'
            description='Shopify, WooCommerce, WordPress, Instapage, Unbounce, HubSpot CMS, Wix, Squarespace, HTML5, CSS3, JavaScript (React.js, Vue.js, Angular), Drupal, Magento, Joomla, BigCommerce.'
            dialogTitle='Content Management Systems'
            dialogDescription='We have experience with various content management systems including Shopify, WooCommerce, WordPress, and more. We can help you integrate tracking with these platforms efficiently.'
          />
          <FeatureCard
            icon={<BarChart className='h-12 w-12 text-primary mb-4' />}
            title='Analytics Platforms'
            description='Google Analytics 4, FB Pixel & Conversion API, TikTok Pixel & Event API, Pinterest & Conversion API, Mixpanel, Matomo, Optimizely, Hotjar, Snowplow Analytics, Little Data, Twitter Pixel & S2S, Snapchat Pixel & Conversion API, Adobe Analytics.'
            dialogTitle='Analytics Platforms'
            dialogDescription='Our team is skilled in using various analytics platforms such as Google Analytics 4, Facebook Pixel, TikTok Pixel, and more to provide comprehensive tracking solutions.'
          />
          <FeatureCard
            icon={<CheckCircle className='h-12 w-12 text-primary mb-4' />}
            title='Conversion Tracking'
            description='Google Ads, YouTube Ads, Microsoft Bing Ads, LinkedIn Ads, Meta Ads, Twitter Ads, Heap, Crazy Egg, Clicky, Snapchat Ads, Criteo, AdRoll, Outbrain.'
            dialogTitle='Conversion Tracking'
            dialogDescription='We offer expertise in conversion tracking for platforms like Google Ads, YouTube Ads, Microsoft Bing Ads, and others to help optimize your marketing efforts.'
          />
          <FeatureCard
            icon={<Layers className='h-12 w-12 text-primary mb-4' />}
            title='Tag Management & Integrations'
            description='Google Tag Manager, Segment.io, Zapier, Stape.io, Tealium, Salesforce Marketing Cloud, Amazon AWS, Google Cloud Platforms, Adobe Launch, Piwik PRO Tag Manager.'
            dialogTitle='Tag Management & Integrations'
            dialogDescription='Our team can help you with tag management and integrations using tools like Google Tag Manager, Segment.io, and more to ensure seamless data collection and analysis.'
          />
          <FeatureCard
            icon={<FileText className='h-12 w-12 text-primary mb-4' />}
            title='Reporting & Dashboard'
            description='Microsoft Power BI, Tableau, Google Looker Studio, SQL Reporting, BigQuery, Zoho Analytics.'
            dialogTitle='Reporting & Dashboard'
            dialogDescription='We specialize in setting up reporting and dashboards using tools like Microsoft Power BI, Tableau, and Google Looker Studio to provide you with clear and actionable insights.'
          />
          <FeatureCard
            icon={<Zap className='h-12 w-12 text-primary mb-4' />}
            title='3rd Party Platforms'
            description='Gravity Forms, HubSpot Forms, Tripetto, Typeform, MailChimp, Contact7Forms, AWeber, JotForm, Infusionsoft.'
            dialogTitle='3rd Party Platforms'
            dialogDescription='We integrate tracking with various third-party platforms such as Gravity Forms, HubSpot Forms, Typeform, and others to streamline your data collection process.'
          />
        </div>

        <TypographyH2>
          Book a free consultation now and secure your spot before it's too
          late!
        </TypographyH2>

        <Link href='/contact'>
          <Button className='px-10 py-4 w-full'>Schedule A Meeting</Button>
        </Link>
      </div>
      <Separator />
    </Container>
  );
}

interface FeatureCardPorps {
  icon: React.ReactElement;
  title: string;
  description: string;
  dialogTitle: string;
  dialogDescription: string;
}

const FeatureCard: FC<FeatureCardPorps> = ({
  icon,
  title,
  description,
  dialogTitle,
  dialogDescription,
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex flex-col items-center p-6 border rounded-lg shadow-lg cursor-pointer'>
          {icon}
          <TypographyH3 className='text-primary mb-2'>{title}</TypographyH3>
          <TypographyP applyMargin={false}>{description}</TypographyP>
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
