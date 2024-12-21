// components/offers/offer-001/submit-query/hero.js
import React from 'react';

import ContactForm from '@/components/contact/contact-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import TestimonialsCarousel from '../../offer-002/testimonial-carousal';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
export default function Hero() {
  return (
    <Container className="sm:py py-2 lg:pt-8">
      <div className="grid items-center justify-center gap-4 pt-4 lg:grid-cols-5">
        <div className="space-y-4 lg:col-span-3">
          <Text as="h1" variant="heading3xl">
            <span>Submit the Form now and</span>{' '}
            <span className="text-primary">Maximize Every Click </span>- Achieve 95% Accurate
            Tracking - <span className="text-primary">Guaranteed Results!</span>
          </Text>

          <div className="max-w-2xl self-start pt-4 md:pt-2">
            <TestimonialsCarousel />
          </div>

          <div className="grid grid-cols-1 place-content-center space-y-1 self-center py-2">
            <Text as="p" variant="bodyMd">
              ✔ GDPR-compliant secure tracking.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ 24/7 Expert Assistance.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ Weekly custom report delivery.
            </Text>
            <Text as="p" variant="bodyMd">
              ✔ 95% tracking accuracy or your money back.
            </Text>
          </div>

          <div className="flex items-center justify-start gap-2 self-center">
            <div className="relative h-8 w-8">
              <Avatar className="z-1 absolute left-0 top-0">
                <AvatarImage src="/images/clients/malik-osama.jfif" alt="@malik-osama" />
                <AvatarFallback>MO</AvatarFallback>
              </Avatar>

              <Avatar className="z-2 absolute left-4 top-0">
                <AvatarImage src="/images/clients/philipp-herglotz.jfif" alt="@philipp-herglotz" />
                <AvatarFallback>PH</AvatarFallback>
              </Avatar>

              <Avatar className="z-3 absolute left-8 top-0">
                <AvatarImage src="/images/clients/imtiaz-ahmad.jfif" alt="@imtiaz-ahmad" />
                <AvatarFallback>IA</AvatarFallback>
              </Avatar>
            </div>
            <Text as="p" variant="bodyMd" className="pl-8 text-sm">
              Over 1032 websites optimized with 95% accuracy
            </Text>
          </div>
        </div>

        <div className="-order-1 lg:order-1 lg:col-span-2">
          <ContactForm
            thankYouUrl="/offers/95-accurate-tracking-in-7-days/submit-query/book-a-meeting"
            gtmCustomEventName="offer_form_submission"
            isItAFit={false}
            formHeader={false}
          />
        </div>
      </div>
    </Container>
  );
}
