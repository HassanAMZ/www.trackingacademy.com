'use client';

import ContactForm from '@/components/contact/ContactForm';
import TypographyH2 from '@/components/ui/typography-h2';
import TypographyP from '@/components/ui/typography-p';
import Container from '@/components/ui/container';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import Offer from '@/components/home/offer';
import ClientTestimonial from '@/components/home/testimonaials';
import WorkHistory from '@/components/home/work-history';
import { Separator } from '@/components/ui/separator';
const Page = () => {
  return (
    <section>
      <ContactForm />
      <Separator className='my-6' />
      <ClientTestimonial />
      <FrequentlyAskedQuestions />
    </section>
  );
};

export default Page;
