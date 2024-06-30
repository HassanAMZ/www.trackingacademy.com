import { Metadata } from 'next';

import Navbar from '@/components/global/navbar';
import Container from '@/components/ui/container';
import React from 'react';
import { ReactNode } from 'react';

export const metadata: Metadata = {
 title: 'Services we Offer - TrackingAcademy',
 description: `helping businesses improve their data using better tracking practices`,
 openGraph: {
  images: ['/images/social-sharing.png'],
 },
};
export default function Layout({ children }: { children: ReactNode }) {
 return (
  <React.Fragment>
   <Navbar />
   <Container>{children}</Container>
  </React.Fragment>
 );
}
