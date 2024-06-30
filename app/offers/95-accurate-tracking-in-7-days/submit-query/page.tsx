import ContactForm from '@/components/contact/ContactForm';
import CallToAction from '@/components/home/call-to-action';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import ClientTestimonial from '@/components/home/testimonaials';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Hero from '@/components/offers/offer-001/submit-query/hero';

export default function page() {
 return (
  <main className='space-y-4 sm:space-y-8 lg:space-y-12'>
   <Hero />
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
