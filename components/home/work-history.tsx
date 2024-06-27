import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';
const clientImages = [
  '/images/clients/001.svg',
  '/images/clients/003.svg',
  '/images/clients/004.svg',
  '/images/clients/005.svg',
  '/images/clients/002.svg',
  '/images/clients/006.svg',
];

export default function WorkHistory() {
  return (
    <Container className='grid grid-cols-3 lg:grid-cols-6 gap-2 items-center justify-center pt-4'>
      {clientImages.map((image, index) => (
        <div
          key={index}
          className='rounded-lg bg-secondary filter object-contain overflow-hidden'>
          <Image
            src={image}
            alt={`Client ${index}`}
            width={1920}
            height={540}
            className='filter brightness-200 grayscale scale-125'
          />
        </div>
      ))}
    </Container>
  );
}
