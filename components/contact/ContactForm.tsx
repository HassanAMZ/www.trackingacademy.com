'use client';

import React, { useState, useEffect } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { createContact } from '@/actions/contact-us';
import { useRouter } from 'next/navigation';
import Container from '../ui/container';
import TypographyP from '../ui/typography-p';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';
import { Textarea } from '@/components/ui/textarea';
import { cn } from '../lib/utils';

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

interface ContactFormProps {
 thankYouUrl?: string;
 className?: string;
}

export default function ContactForm({
 thankYouUrl = '/contact/book-a-meeting',
 className,
}: ContactFormProps) {
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
  <section className={cn('max-w-4xl mx-auto p-2', className)}>
   <div className='bg-card rounded-lg p-4'>
    <form action={formAction} className='flex flex-col space-y-3'>
     <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='firstName'>
        First Name
       </Label>
       <Input required type='text' name='firstName' placeholder='John' />
      </div>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='lastName'>
        Last Name
       </Label>
       <Input required type='text' name='lastName' placeholder='Doe' />
      </div>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='email'>
        Email
       </Label>
       <Input
        required
        type='email'
        name='email'
        placeholder='example@email.com'
       />
      </div>
      <div className='grid w-full items-center'>
       <Label className='pb-2' htmlFor='phone'>
        Phone
       </Label>
       <Input required type='tel' name='phone' placeholder='123-456-7890' />
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
        name='projectDescription'
        required
        className='h-32 bg-background'
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
