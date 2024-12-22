import Navbar from '@/components/global/navbar';
import Container from '@/components/ui/container';
import { Metadata } from 'next';
import React, { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Tags Archieve- TrackingAcademy',
  description: `Tag Pages for Web Analysts and Marketing People`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
  robots: 'noindex',
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
    </React.Fragment>
  );
}
