import ContactForm from '@/components/contact/ContactForm';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import ClientTestimonial from '@/components/home/testimonaials';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import Hero from '@/components/offers/offer-001/submit-query/hero';
import { TypographyH2 } from '@/components/ui/typography';
import CallToAction from '@/components/contact/call-to-action';
import Container from '@/components/ui/container';

export default function page() {
 return (
  <main className='space-y-4 sm:space-y-8 lg:space-y-12'>
   <Hero />
   <Separator className='my-6' />
   <ClientTestimonial />
   <Container>
    <TypographyH2 className='text-center'>
     Optimize Your Tracking in 7 Days! Get Started with No Risk.
    </TypographyH2>
    <CallToAction buttonText={'Get Started'} />
   </Container>
   <FrequentlyAskedQuestions />
   <Container>
    <TypographyH2 className='text-center'>
     Optimize Your Tracking in 7 Days! Get Started with No Risk.
    </TypographyH2>
    <CallToAction buttonText={'Get Started'} />
   </Container>
  </main>
 );
}
