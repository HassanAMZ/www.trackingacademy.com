import Navbar from '@/components/global/navbar';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import Link from 'next/link';
import React from 'react';

export default function NotFound() {
  return (
    <React.Fragment>
      <Navbar />
      <Container className="flex h-screen flex-col items-center justify-center space-y-6 text-center">
        <Text as="h1" variant="heading3xl" className="text-6xl font-bold text-primary">
          404 - Tracking Error
        </Text>
        <Text as="p" variant="bodyMd">
          Oops! Looks like the tracking pixel went AWOL. The page you're looking for doesn't exist.
          But don't worry, we've already notified our data analysts to look into this. In the
          meantime, let's get you back on track.
        </Text>
        <div className="flex gap-6">
          <Button asChild>
            <Link href="/">Go Back Home</Link>
          </Button>
          <Button asChild>
            <Link href="/blog" passHref>
              Or Go Blogs
            </Link>
          </Button>
        </div>
      </Container>
    </React.Fragment>
  );
}
