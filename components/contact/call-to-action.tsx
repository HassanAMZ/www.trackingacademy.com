'use client';

import * as React from 'react';
import Link from 'next/link';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogFooter,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from '@/components/ui/dialog';
import ContactForm from './contact-form';

interface CallToActionProps {
 buttonText?: string;
 thankYouUrl?: string;
}

export default function CallToAction({
 buttonText = 'Book a Call',
 thankYouUrl = '/contact/book-a-meeting',
}: CallToActionProps) {
 return (
  <Dialog>
   <DialogTrigger asChild>
    <Button className='w-full'>
     <span className='sm:block hidden'>{buttonText}</span>
     <span className='block sm:hidden'>Contact</span>
    </Button>
   </DialogTrigger>
   <DialogContent>
    <ContactForm thankYouUrl={thankYouUrl} />
   </DialogContent>
  </Dialog>
 );
}
