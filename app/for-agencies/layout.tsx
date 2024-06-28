import React, { ReactNode } from 'react';
import Container from '@/components/ui/container';
import Navbar from '@/components/global/navbar';
export const metadata = {
 title: 'TrackingAcademy - For Agencies ',
 description: `Services for Agencies`,
 openGraph: {
  images: ['/images/social-sharing.png'],
 },
};
export default function Layout({ children }: { children: ReactNode }) {
 return (
  <React.Fragment>
   <Navbar />
   <Container>{children}</Container>;
  </React.Fragment>
 );
}
