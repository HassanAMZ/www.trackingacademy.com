import { ReactNode } from 'react';
import React from 'react';
import Container from '@/components/ui/container';
import Navbar from '@/components/global/navbar';

export const metadata = {
  title: 'For Freelancers - TrackingAcademy',
  description: `Courses, Training and more.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      {children}
    </React.Fragment>
  );
}
