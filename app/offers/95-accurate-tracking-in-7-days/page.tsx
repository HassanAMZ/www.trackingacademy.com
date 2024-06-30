import Offer from '@/components/home/offer';
import ClientTestimonial from '@/components/home/testimonaials';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import CallToAction from '@/components/home/call-to-action';
import YoutubeEmbed from '@/components/global/youtube-embed';
import { Separator } from '@/components/ui/separator';
import Hero from '@/components/offers/offer-001/hero';
import TypographyH2 from '@/components/ui/typography-h2';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Container from '@/components/ui/container';

export default function Home() {
 return (
  <main className='space-y-4 sm:space-y-8 lg:space-y-12'>
   <Hero />
   <YoutubeEmbed embedId='9MGpL_AmEYM' />

   <CallToAction
    presetNumber={2}
    href={'/offers/95-accurate-tracking-in-7-days/submit-query'}
   />
   <Separator className='my-6' />
   <Offer />
   <CallToAction
    presetNumber={3}
    href={'/offers/95-accurate-tracking-in-7-days/submit-query'}
   />
   <Separator className='my-6' />
   <ClientTestimonial />
   <CallToAction
    presetNumber={4}
    href={'/offers/95-accurate-tracking-in-7-days/submit-query'}
   />
   <FrequentlyAskedQuestions />
   <CallToAction
    presetNumber={5}
    href={'/offers/95-accurate-tracking-in-7-days/submit-query'}
   />
  </main>
 );
}
