import { ReactNode } from 'react';
import React from 'react';

export const metadata = {
  title: 'Portfolio - TrackingAcademy',
  description: `Portfolio for Web Analysts and Marketing People`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
