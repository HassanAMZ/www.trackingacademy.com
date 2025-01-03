import Container from '@/components/ui/container';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
