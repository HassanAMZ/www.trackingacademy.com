import React from 'react';
import Container from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import TypographyH1 from '@/components/ui/typography-h1';
import TypographyP from '@/components/ui/typography-p';
import Navbar from '@/components/global/navbar';

export default function NotFound() {
 return (
  <React.Fragment>
   <Navbar />
   <Container className='flex flex-col items-center justify-center h-screen text-center space-y-6'>
    <TypographyH1 className='text-6xl font-bold text-primary'>
     404 - Tracking Error
    </TypographyH1>
    <TypographyP>
     Oops! Looks like the tracking pixel went AWOL. The page you're looking for
     doesn't exist. But don't worry, we've already notified our data analysts to
     look into this. In the meantime, let's get you back on track.
    </TypographyP>
    <div className='flex gap-6'>
     <Link href='/' passHref>
      <Button className='mt-4'>Go Back Home</Button>
     </Link>
     <Link href='/blog' passHref>
      <Button className='mt-4'>Or Go Blogs</Button>
     </Link>
    </div>
   </Container>
  </React.Fragment>
 );
}
