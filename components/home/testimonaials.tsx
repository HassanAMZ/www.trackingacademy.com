import React from 'react';
import ClientTestimonialCard from './testimonial-card';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';

import { Separator } from '@/components/ui/separator';

export default function ClientTestimonial() {
  const clientDetails = [
    {
      client: {
        name: 'Bryce Evans',
        businessName: 'Float Canmore',
      },
      category: 'Booking',
      cms: 'WordPress',
      businessDetails:
        'Boasts over 18,000 appointments and 200+ verified 5-star reviews, highlighting their trusted reputation and high customer satisfaction.',
      imageUrl: '/images/clients/website-screenshots/floatcanmore.png',
      results:
        'Thanks for your help! Very responsive and resourceful to handle bugs and issues with our tracking systems for advertising.',
    },
    {
      client: {
        name: 'Kiran Kumar',
        businessName: 'GoVisually',
      },
      category: 'SaaS',
      cms: 'NextJS',
      businessDetails:
        'Highly regarded in its field, with numerous positive reviews and high ratings on platforms like Capterra, G2 Crowd, TrustRadius, and Product Hunt. It is praised for its intuitive user interface and effectiveness in reducing feedback and approval times.',
      imageUrl: '/images/clients/website-screenshots/govisually.png',
      results:
        "Shahzada's knowledge of everything Google Tag manager is at a very advanced level. He is also easy to communicate with. I'd work with him again.",
    },
    {
      client: {
        name: 'Daniel Gurber',
        businessName: 'Baumgarten Kinderwagen',
      },
      category: 'Ecommerce',
      cms: 'Shopify',
      businessDetails:
        'A trusted family-owned business since 1884, is dedicated to providing high-quality baby products with exceptional design and personal service, ensuring a reliable and supportive partnership for parents.',
      imageUrl: '/images/clients/website-screenshots/baumgarten-wien.png',
      results:
        'Shazada was very patient and open for any questions. This issue was resolved extremely fast and he provided a dashboard to follow along all changed that were made. Exceptional service. Thank you very much.',
    },

    {
      client: {
        name: 'Peter Selekar',
        businessName: 'Zebra Parking',
      },
      category: 'SaaS',
      cms: 'Gatsby',
      businessDetails:
        'Convenient, secure, and cost-effective parking solutions for travelers. Emphasize the proximity to the airport, quick transfer times, and high-security measures.',
      imageUrl: '/images/clients/website-screenshots/zebraparking.png',
      results:
        "Shahzada is highly professional, very responsive, and gets things done. Highly recommended and we'll keep working with him.",
    },
    {
      client: {
        name: 'Peter Selekar',
        businessName: 'Holiday Parking',
      },
      category: 'SaaS',
      cms: 'Gatsby',
      businessDetails:
        'Convenient, secure, and cost-effective parking solutions for travelers. Emphasize the proximity to the airport, quick transfer times, and high-security measures.',
      imageUrl: '/images/clients/website-screenshots/holidayparking.png',
      results:
        'Shahzada stands out for his exceptional professionalism and responsiveness. He consistently delivers results. 10/10 NPS from our side.',
    },
    {
      client: {
        name: 'Steven Leong',
        businessName: 'Grooming School',
      },
      category: 'Ecommerce',
      cms: 'Wix',
      businessDetails:
        'The school aims to equip students with the skills needed to excel in the pet grooming industry. Commitment to high-quality, practical grooming education. Emphasize hands-on learning, experienced instructors, and a curriculum designed to cover all aspects of pet grooming. ',
      imageUrl: '/images/clients/website-screenshots/groomingschool.png',
      results:
        'Shahzada finished his job with professional skill & prompt action, look forward to work with him in the future.',
    },

    {
      client: {
        name: 'Matt Cooper',
        businessName: 'Shake that Weight',
      },
      category: 'Ecommerce',
      cms: 'WordPress',
      businessDetails:
        'Has over half a million satisfied customers and 17,000+ five-star reviews, highlighting the trust and effectiveness their products have among users ',
      imageUrl: '/images/clients/website-screenshots/shakethatweight.png',
      results:
        'Excellent experience with Shahzada. He is very knowledgably in all areas of tracking and analytics; I would highly recommend him.',
    },

    {
      client: {
        name: 'Zachary Vrona',
        businessName: 'VIN Report Pro ',
      },
      category: 'SaaS',
      cms: 'WordPress',
      businessDetails:
        'An authorized provider of NMVTIS data, which underlines their credibility and compliance with industry standards.',
      imageUrl: '/images/clients/website-screenshots/vinreportpro.png',
      results:
        'Shahzada did an amazing job setting up our advanced conversion tracking for Google Ads. He was very responsive and explained everything very well.',
    },
  ];
  return (
    <Container className="space-y-2">
      <Text as="h2" variant="heading2xl" className="text-center">
        Results From Major Brands:
      </Text>

      <div className="flex flex-col items-center justify-center space-y-4 py-2">
        {clientDetails.map((client, index) => (
          <ClientTestimonialCard {...client} key={index} />
        ))}
      </div>
    </Container>
  );
}
