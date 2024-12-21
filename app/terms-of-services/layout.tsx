import Navbar from '@/components/global/navbar';
import Container from '@/components/ui/container';
import React from 'react';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Privacy Policey - TrackingAcademy',
  description: `Become a part of the clientele and master your data`,
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
