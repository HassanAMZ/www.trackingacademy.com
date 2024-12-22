import ClientTestimonial from '@/components/home/testimonaials';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="space-y-5">
      {children}
      <ClientTestimonial />
    </main>
  );
}
