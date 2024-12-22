import Container from '@/components/ui/container';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Blog Archieve- TrackingAcademy',
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
