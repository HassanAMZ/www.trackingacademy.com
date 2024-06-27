import Hero from '@/components/for-freelancers/hero';
import Offer from '@/components/for-freelancers/offer';
import WorkHistory from '@/components/home/work-history';
import React from 'react';

export default function ForFreelancers() {
  return (
    <main className=''>
      <Hero />
      <WorkHistory />
      <Offer />
    </main>
  );
}
