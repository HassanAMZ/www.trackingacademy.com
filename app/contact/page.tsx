import ContactForm from '@/components/contact/ContactForm';
import CallToAction from '@/components/offers/CallToAction';
import ClientTestimonial from '@/components/offers/ClientTestimonial';
import Divider from '@/components/offers/Divider';
import TypographyH1 from '@/components/ui/typography-h1';
import React from 'react';

export default function page() {
 return (
  <main>
   <section className='pt-6 pb-2 space-y-2'>
    <TypographyH1 className='text-center'>
     <span className='text-primary'>Get 95% Accurate Tracking</span> in 7 Days –
     Guaranteed! Turn your data into{' '}
     <span className='text-primary'>easy-to-use insights </span>.{' '}
     <span className='text-primary'>Submit your query </span>to Get Started...
    </TypographyH1>
   </section>

   <ContactForm />

   <Divider />
   <ClientTestimonial />
   <CallToAction />
  </main>
 );
}
