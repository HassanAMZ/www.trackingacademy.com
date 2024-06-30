'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useFormState, useFormStatus } from 'react-dom';
import { createContact } from '@/actions/contact-us';
import { useRouter } from 'next/navigation';
import Container from '../ui/container';
import TypographyH2 from '../ui/typography-h2';
import TypographyP from '../ui/typography-p';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '@/components/ui/textarea';

const initialState = {
 message: '',
};

function SubmitButton() {
 const { pending } = useFormStatus();

 return (
  <Button
   type='submit'
   disabled={pending}
   className={`${pending ? 'opacity-50 cursor-not-allowed' : ''}`}>
   {pending ? 'Submitting...' : 'Submit Contact Form'}
  </Button>
 );
}

export default function ContactForm({
 thankYouUrl = '/contact/book-a-meeting',
}) {
 const [state, formAction] = useFormState(createContact, initialState);
 const [formSubmitted, setFormSubmitted] = useState(false);
 const router = useRouter();

 useEffect(() => {
  if (state?.message && !formSubmitted) {
   setFormSubmitted(true);
   router.push(thankYouUrl);
  }
 }, [state?.message, formSubmitted, router, thankYouUrl]);

 if (formSubmitted) {
  return <TypographyP>Thank you! Your request has been submitted.</TypographyP>;
 }

 return (
  <section className='md:grid md:place-content-center'>
   <div className='rounded-lg'>
    <form action={formAction} className='flex flex-col space-y-3'>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='userName'>
        Name
       </Label>
       <Input required type='text' name='userName' placeholder='John Doe' />
      </div>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='email'>
        Email
       </Label>
       <Input
        required
        type='email'
        id='email'
        name='email'
        placeholder='example@email.com'
       />
      </div>
     </div>

     <div className='flex flex-col'>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='websiteLink'>
        Website URL
       </Label>
       <Input
        required
        type='url'
        id='websiteLink'
        name='websiteLink'
        placeholder='https://www.example.com'
       />
      </div>
     </div>

     <div className='flex flex-col'>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='integrationType'>
        I want help with...
       </Label>
       <Input
        required
        type='text'
        id='integrationType'
        name='integrationType'
        placeholder='Setting up google analytics 4'
       />
      </div>
     </div>

     <div className='flex flex-col'>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='budget'>
        Expected Budget (USD)
       </Label>
       <Input
        required
        type='number'
        id='budget'
        name='budget'
        placeholder='Enter Your Budget in USD'
        min='0'
       />
      </div>
     </div>

     <div className='flex flex-col'>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='projectDescription'>
        Project Description
       </Label>
       <Textarea
        id='projectDescription'
        name='projectDescription'
        required
        className='h-32'
       />
      </div>
     </div>

     <SubmitButton />

     <TypographyP aria-live='polite' className='sr-only'>
      {state?.message}
     </TypographyP>
    </form>
   </div>
  </section>
 );
}
