import React from 'react';
import Container from '@/components/ui/container';
import TypographyH1 from '@/components/ui/typography-h1';
import TypographyP from '@/components/ui/typography-p';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const WaitlistJoined: React.FC = () => {
  return (
    <Container className='py-12 text-center'>
      <TypographyH1>Thank You for Joining the Waitlist!</TypographyH1>
      <TypographyP className='mt-4'>
        We appreciate your interest. You will be among the first to know when
        our courses are available. Stay tuned for updates and exclusive content.
      </TypographyP>
      <Link href='/'>
        <Button className='mt-6'>Go to Homepage</Button>
      </Link>
    </Container>
  );
};

export default WaitlistJoined;
