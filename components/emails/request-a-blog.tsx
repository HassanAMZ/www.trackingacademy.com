// components/EmailTemplate.tsx
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';
import { Timestamp } from 'firebase/firestore';

type EmailTemplateProps = {
  searchTerm: string;
  email: string;
  createdAt: Timestamp;
};

export default function RequestABlogEmail({ searchTerm, email, createdAt }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for requesting a blog topic!</Preview>
      <Body>
        <Container>
          <Heading>Blog Topic Request Received!</Heading>
          <Text>Dear {email},</Text>
          <Text>
            Thank you for your interest in our blog. We have received your request for a blog topic
            on "{searchTerm}". Our team will review your request, and we'll notify you once the blog
            is published. Here are the details we have on file:
          </Text>
          <ul>
            <li>
              <Text>Email: {email}</Text>
            </li>
            <li>
              <Text>Requested Topic: {searchTerm}</Text>
            </li>
            <li>
              <Text>Request Date: {createdAt.toDate().toLocaleString()}</Text>
            </li>
          </ul>
          <Text className="text-sm">
            Stay tuned for updates, and feel free to contact us if you have any questions in the
            meantime.
          </Text>
          <Text className="text-sm">
            Best Regards,
            <br />
            The Tracking Academy Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
