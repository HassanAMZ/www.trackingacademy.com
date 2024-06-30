'use client';

import Navbar from '@/components/global/navbar';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Link from 'next/link';
import React from 'react';

export default function Page() {
 return (
  <div>
   <Navbar />

   <h3 className='text-3xl font-bold text-center container-primary py-6'>
    Active Offers
   </h3>
   <Container className='container-primary py-4'>
    <div className='space-y-4'>
     <Button asChild>
      <Link href='/offers/95-accurate-tracking-in-7-days'>Offer 1</Link>
     </Button>
    </div>
   </Container>
  </div>
 );
}
