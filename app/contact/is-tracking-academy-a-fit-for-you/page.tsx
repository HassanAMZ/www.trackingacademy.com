import ClientTestimonial from '@/components/home/testimonaials';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Link from 'next/link';

export default function page() {
  return (
    <main className="py-4">
      <ClientTestimonial />
      <Container>
        <Button asChild className="w-full">
          <Link href="/contact">Book a Call</Link>
        </Button>
      </Container>
    </main>
  );
}
