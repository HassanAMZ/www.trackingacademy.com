import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { Link } from 'next-view-transitions';
import Text from '../ui/text';

export default function ContactMe() {
  return (
    <div className="lg:sticky lg:top-8 self-start p-6 rounded-lg shadow-md space-y-2">
      <Text as="h3" variant="headingMd" className="flex items-center">
        <Mail className="w-5 h-5 mr-2" />
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
