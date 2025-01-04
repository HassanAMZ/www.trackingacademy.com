import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Text from '../ui/text';

export default function ContactMe() {
  return (
    <div className="space-y-2 self-start rounded-lg p-6 shadow-md lg:sticky lg:top-8">
      <Text as="h3" variant="headingMd" className="flex items-center">
        <Mail className="mr-2 h-5 w-5" />
        Contact Me
      </Text>
      <Text as="p" variant="bodySm">
        Have questions or want to discuss this topic further? I'd love to hear from you!
      </Text>
      <Button className="w-full" asChild>
        <Link href="/contact">Send a Message</Link>
      </Button>
    </div>
  );
}
