import ContactForm from '@/components/contact/ContactForm';
import CallToAction from '@/components/home/call-to-action';
import ClientTestimonial from '@/components/home/testimonaials';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import TypographyH1 from '@/components/ui/typography-h1';
import React from 'react';

export default function page() {
 return (
  <main>
   <Container className='pt-6 pb-2 space-y-2'>
    <TypographyH1 className='text-center'>
     <span className='text-primary'>Get 95% Accurate Tracking</span> in 7 Days –
     Guaranteed! Turn your data into{' '}
     <span className='text-primary'>easy-to-use insights </span>.{' '}
     <span className='text-primary'>Submit your query </span>to Get Started...
    </TypographyH1>
   </Container>

   <ContactForm />

   <Separator className='my-6' />
   <ClientTestimonial />
  </main>
 );
}
