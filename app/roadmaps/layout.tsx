import Navbar from '@/components/global/navbar';
import React, { ReactNode } from 'react';

export const metadata = {
  title: 'Roadmaps - TrackingAcademy',
  description: `Tools Build for Analysts to make the life easier.`,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <>{children}</>
    </React.Fragment>
  );
}
