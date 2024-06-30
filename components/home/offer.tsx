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
import FeatureCard from './feature-card';

export default function Offer() {
 return (
  <Container className='space-y-6'>
   <div className='text-center space-y-6'>
    <TypographyH2>
     Improve Your Tracking with Proven Results. Here's How:
    </TypographyH2>
    {/* <TypographyP>
     We ensure your tracking is accurate with an easy setup, full testing, and
     low maintenance. Our system helps you make better decisions and increase
     your profits.
    </TypographyP> */}

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

    <TypographyH2 className='text-center'>Enjoy the End Results</TypographyH2>
    {/* <TypographyP>
     We make sure your tracking is 95% accurate so you get the right data every
     time. Plus, our support team is here to help you all day, every day.
    </TypographyP> */}

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
   </div>
  </Container>
 );
}
