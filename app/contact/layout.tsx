import React, { ReactNode } from 'react';
import Container from '@/components/ui/container';
import Navbar from '@/components/global/navbar';
import ClientTestimonial from '@/components/home/testimonaials';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-5">
      {children}
      <ClientTestimonial />
    </main>
  );
}
