import { GTMCustomEvent } from '@/components/analytics/GTMEvents';
import { Button } from '@/components/ui/button';
import Container from '@/components/ui/container';
import Text from '@/components/ui/text';
import Link from 'next/link';
import React from 'react';

const WaitlistJoined: React.FC = () => {
  return (
    <Container className="py-12 text-center">
      <Text as="h1" variant="heading3xl">
        Thank You for Joining the Waitlist!
      </Text>
      <Text as="p" variant="bodyMd" className="mt-4">
        We appreciate your interest. You will be among the first to know when our courses are
        available. Stay tuned for updates and exclusive content.
      </Text>
      <Button asChild className="mt-6">
        <Link href="/">Go to Homepage</Link>
      </Button>
      <GTMCustomEvent event_name={'waitlist_form_submission'} />
    </Container>
  );
};

export default WaitlistJoined;
