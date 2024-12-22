import Navbar from '@/components/global/navbar';
import Container from '@/components/ui/container';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'link Tree - TrackingAcademy',
  description: `Tools Build for Analysts to make the life easier.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <Container>{children}</Container>
    </React.Fragment>
  );
}
