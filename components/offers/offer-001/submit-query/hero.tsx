import React from 'react';
import ContactForm from '@/components/contact/contact-form';
import FrequentlyAskedQuestions from '@/components/home/frequently-asked-questions';
import ClientTestimonial from '@/components/home/testimonaials';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Container from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import TypographyH1 from '@/components/ui/typography-h1';
import TypographyP from '@/components/ui/typography-p';
import { Button } from '@/components/ui/button';

export default function Hero() {
 return (
  <Container>
   <div className='md:grid md:grid-cols-5 flex flex-col items-start text-left justify-center gap-4 pt-4 lg:pt-8'>
    <div className='col-span-3 space-y-4'>
     <TypographyH1>
      <span>Submit the Form now and</span>{' '}
      <span className='text-primary'>Maximize Every Click </span>- Achieve 95%
      Accurate Tracking -{' '}
      <span className='text-primary'>Guaranteed Results!</span>
     </TypographyH1>

     <div className='relative border px-6 py-2 rounded-lg w-full max-w-xl bg-secondary space-y-1'>
      <div className='absolute -top-3 right-0 flex space-x-2'>⭐⭐⭐⭐⭐</div>
      <TypographyP applyMargin={false} className='italic font-semibold'>
       “Shahzada's knowledge of everything Google Tag manager is at a very
       advanced level. He is also easy to communicate with. I'd work with him
       again.”
      </TypographyP>
      <TypographyP applyMargin={false} className='text-xs pb-2'>
       Kiran Kumar, <strong>Founder at GoVisually </strong>
      </TypographyP>
      <div className='absolute -bottom-4 right-0 flex space-x-4 mb-2 mr-2'>
       <Button className='p-1 m-0 h-max font-semibold rounded-lg transform rotate-3 text-sm'>
        12.7x ROAS
       </Button>
       <Button className='p-1 m-0 h-max font-semibold rounded-lg transform -rotate-3 text-sm'>
        +64% Conversions
       </Button>
      </div>
     </div>

     <div className='grid grid-cols-1 py-2 space-y-1 place-content-center self-center'>
      <TypographyP>✔ GDPR-compliant secure tracking.</TypographyP>
      <TypographyP>✔ 24/7 Expert Assistance.</TypographyP>
      <TypographyP>✔ Weekly custom report delivery.</TypographyP>
      <TypographyP>✔ 95% tracking accuracy or your money back.</TypographyP>
     </div>

     <div className='flex items-center justify-start gap-2 self-center'>
      <div className='relative h-8 w-8'>
       <Avatar className='absolute left-0 top-0 z-1'>
        <AvatarImage
         src='/images/clients/malik-osama.jfif'
         alt='@malik-osama'
        />
        <AvatarFallback>MO</AvatarFallback>
       </Avatar>

       <Avatar className='absolute left-4 top-0 z-2'>
        <AvatarImage
         src='/images/clients/philipp-herglotz.jfif'
         alt='@philipp-herglotz'
        />
        <AvatarFallback>PH</AvatarFallback>
       </Avatar>

       <Avatar className='absolute left-8 top-0 z-3'>
        <AvatarImage
         src='/images/clients/imtiaz-ahmad.jfif'
         alt='@imtiaz-ahmad'
        />
        <AvatarFallback>IA</AvatarFallback>
       </Avatar>
      </div>
      <TypographyP applyMargin={false} className='pl-8 text-sm'>
       Over 1032 websites optimized with 95% accuracy
      </TypographyP>
     </div>
    </div>
    <ContactForm
     className='col-span-2'
     thankYouUrl='/offers/95-accurate-tracking-in-7-days/submit-query/book-a-meeting'
    />
   </div>
  </Container>
 );
}
