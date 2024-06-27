import Footer from '@/components/footer/Footer';
import ContainerLayout from '@/components/layouts/ContainerLayout';
import NavBar from '@/components/navbar/Navbar';
import Container from '@/components/ui/container';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
