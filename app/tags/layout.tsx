import { ReactNode } from 'react';
import React from 'react';
import { Metadata } from 'next';
import Container from '@/components/ui/container';

export const metadata: Metadata = {
  title: 'Tags Archieve- TrackingAcademy',
  description: `Tag Pages for Web Analysts and Marketing People`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
  robots: 'noindex',
};

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
