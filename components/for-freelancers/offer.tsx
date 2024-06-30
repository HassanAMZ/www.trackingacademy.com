import React, { FC } from 'react';
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
} from 'lucide-react';
import Link from 'next/link';
import TypographyH1 from '../ui/typography-h1';
import TypographyH2 from '../ui/typography-h2';
import TypographyH3 from '../ui/typography-h3';
import TypographyP from '../ui/typography-p';
import YoutubeEmbed from '../global/youtube-embed';
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from '@/components/ui/dialog';

export default function ForFreelancersOffer() {
 return (
  <Container className='pt-4 space-y-6 text-center'>
   <TypographyH2>
    Ready to see what you'll get?{' '}
    <span className='text-primary'>Watch the video</span>
   </TypographyH2>

   <div className='flex justify-center items-center min-h-max'>
    <YoutubeEmbed embedId='9MGpL_AmEYM' className='max-w-4xl w-full' />
   </div>
   <TypographyH1>Master Analytics and Tracking in 12 Weeks!</TypographyH1>

   <TypographyP>
    Learn from experts and boost your skills with real-world projects.
   </TypographyP>

   <div className='grid gap-6 md:grid-cols-3'>
    <FeatureCard
     icon={<Rocket className='h-12 w-12 text-primary mb-4' />}
     title='Expert Training'
     description={`Learn from top professionals with years of experience in analytics and tracking. Gain insights that you won\'t find anywhere else.`}
     dialogTitle='Expert Training'
     dialogDescription={`In this section, you will learn from the top professionals in the field of analytics and tracking. Our instructors have years of experience and provide valuable insights that you won\'t find anywhere else.`}
    />
    <FeatureCard
     icon={<Target className='h-12 w-12 text-primary mb-4' />}
     title='Hands-On Practice'
     description='Apply your skills on real projects. Get practical experience that prepares you for real-world scenarios.'
     dialogTitle='Hands-On Practice'
     dialogDescription='This module focuses on practical application of skills. You will work on real projects to gain hands-on experience that prepares you for real-world scenarios.'
    />
    <FeatureCard
     icon={<Smile className='h-12 w-12 text-primary mb-4' />}
     title='Full Curriculum'
     description={`Covers all analytics and tracking. From basics to advanced techniques, you\'ll learn everything you need to succeed.`}
     dialogTitle='Full Curriculum'
     dialogDescription='Our curriculum covers all aspects of analytics and tracking, from the basics to advanced techniques. You will learn everything you need to succeed in this field.'
    />
   </div>

   <TypographyH2>Solve Your Tracking Problems</TypographyH2>

   <div className='grid gap-6 md:grid-cols-3'>
    <FeatureCard
     icon={<ShieldCheck className='h-12 w-12 text-primary mb-4' />}
     title='Easy Guides'
     description='Step-by-step setup instructions. Simplify complex processes with our clear and concise guides.'
     dialogTitle='Easy Guides'
     dialogDescription='Our easy guides provide step-by-step setup instructions that simplify complex processes. Follow our clear and concise guides to set up your tracking system efficiently.'
    />
    <FeatureCard
     icon={<Headset className='h-12 w-12 text-primary mb-4' />}
     title='Advanced Techniques'
     description='Learn high accuracy methods. Discover the secrets to achieving top-level accuracy in your tracking.'
     dialogTitle='Advanced Techniques'
     dialogDescription='Learn advanced techniques to achieve high accuracy in your tracking. Discover the secrets used by top professionals to ensure precise data collection.'
    />
    <FeatureCard
     icon={<Globe className='h-12 w-12 text-primary mb-4' />}
     title='Ongoing Support'
     description='Join a community of experts. Get continuous support and never feel alone in your learning journey.'
     dialogTitle='Ongoing Support'
     dialogDescription='Join our community of experts and receive ongoing support throughout your learning journey. You will never feel alone with our continuous assistance.'
    />
   </div>

   <div className='grid gap-6 md:grid-cols-3'>
    <FeatureCard
     icon={<ShieldCheck className='h-12 w-12 text-primary mb-4' />}
     title='Skill Guarantee'
     description={`Improve or get your money back. We\'re confident in our training, and we stand by it.`}
     dialogTitle='Skill Guarantee'
     dialogDescription='We are confident in our training. Improve your skills or get your money back. Your satisfaction is our priority.'
    />
    <FeatureCard
     icon={<Headset className='h-12 w-12 text-primary mb-4' />}
     title='Lifetime Access'
     description='Keep all resources and support. Access your training materials anytime, forever.'
     dialogTitle='Lifetime Access'
     dialogDescription='Enjoy lifetime access to all training resources and support. Access your materials anytime, forever.'
    />
    <FeatureCard
     icon={<Globe className='h-12 w-12 text-primary mb-4' />}
     title='Get Certified'
     description='Earn a certificate when you finish. Show your new skills to potential clients and employers.'
     dialogTitle='Get Certified'
     dialogDescription='Earn a certificate upon successful completion of the course. Showcase your new skills to potential clients and employers.'
    />
   </div>

   <div className='grid gap-6 md:grid-cols-3'>
    <FeatureCard
     icon={<Rocket className='h-12 w-12 text-primary mb-4' />}
     title='Free Consultation'
     description='One-on-one to meet your needs. Get personalized advice and guidance.'
     dialogTitle='Free Consultation'
     dialogDescription='Enjoy a free one-on-one consultation to meet your specific needs. Get personalized advice and guidance from our experts.'
    />
    <FeatureCard
     icon={<Headset className='h-12 w-12 text-primary mb-4' />}
     title='Exclusive Resources'
     description='Tutorials, best practices, and case studies. Access premium content that deepens your knowledge.'
     dialogTitle='Exclusive Resources'
     dialogDescription='Access exclusive resources including tutorials, best practices, and case studies. Deepen your knowledge with our premium content.'
    />
    <FeatureCard
     icon={<Globe className='h-12 w-12 text-primary mb-4' />}
     title='Monthly Webinars'
     description='Live sessions with experts. Stay up-to-date with the latest trends and techniques.'
     dialogTitle='Monthly Webinars'
     dialogDescription='Participate in monthly webinars with industry experts. Stay up-to-date with the latest trends and techniques in analytics and tracking.'
    />
   </div>

   <TypographyH2>
    Enroll now to master conversion tracking and analytics! Take the next step
    and join our training program today.
   </TypographyH2>

   <Button asChild className='px-10 py-4 w-full'>
    <Link href='/for-freelancers/enroll-now'>Enroll Now</Link>
   </Button>

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
