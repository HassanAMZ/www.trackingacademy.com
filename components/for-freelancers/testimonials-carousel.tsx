'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Card, CardContent } from '@/components/ui/card';
import TypographyP from '../ui/typography-p';
import { Star } from 'lucide-react';
import Image from 'next/image';
const testimonials = [
 {
  text: '“I learned more in a week than I did in years of trial and error.”',
  author: 'Greg Fisher, CMO at Atlantic Studio',
  image: '/images/clients/malik-osama.jfif',
 },
 {
  text: '“This program transformed our marketing approach completely.”',
  author: 'Sarah Lee, Marketing Director',
  image: '/images/clients/philipp-herglotz.jfif',
 },
 {
  text: '“Outstanding insights and practical tools for any business.”',
  author: 'Michael Brown, CEO at Innovatech',
  image: '/images/clients/imtiaz-ahmad.jfif',
 },
 {
  text: '“A must-have training for anyone serious about analytics.”',
  author: 'Emily Davis, Data Analyst',
  image: '/images/clients/imtiaz-ahmad.jpg',
 },
 {
  text: '“Incredible value and top-notch support from the team.”',
  author: 'James Wilson, Product Manager',
  image: '/images/clients/jamie-norsa.jfif',
 },
 {
  text: '“Our conversion rates have doubled since the training.”',
  author: 'Laura Johnson, E-commerce Specialist',
  image: '/images/clients/david-bodnar.jfif',
 },
];

export function TestimonialsCarousel() {
 const [emblaRef] = useEmblaCarousel({ loop: true }, [
  Autoplay({ delay: 5000, stopOnInteraction: true }),
 ]);

 return (
  <div className='relative overflow-hidden' ref={emblaRef}>
   <div className='flex '>
    {testimonials.map((testimonial, index) => (
     <div className='min-w-full' key={index}>
      <Image
       src={testimonial.image}
       alt={testimonial.author}
       className='rounded-t-lg object-cover'
       layout='responsive'
       width={500}
       height={200}
      />
      <Card className='relative shadow-lg space-y-4'>
       <div className='absolute -top-4 right-4 flex space-x-1'>
        <Star />
        <Star />
        <Star />
        <Star />
        <Star />
       </div>
       <CardContent>
        <TypographyP className='italic font-semibold'>
         {testimonial.text}
        </TypographyP>
        <TypographyP className='text-xs mt-4'>{testimonial.author}</TypographyP>
       </CardContent>
      </Card>
     </div>
    ))}
   </div>
  </div>
 );
}
