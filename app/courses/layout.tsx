import { ReactNode } from 'react';
import React from 'react';
import Container from '@/components/ui/container';
import Navbar from '@/components/global/navbar';

export const metadata = {
  title: 'Courses - TrackingAcademy',
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
