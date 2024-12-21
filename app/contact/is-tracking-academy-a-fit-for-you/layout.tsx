import React, { ReactNode } from 'react';
import Container from '@/components/ui/container';
import Navbar from '@/components/global/navbar';

export default function Layout({ children }: { children: ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
