// components/EmailTemplate.tsx
import { Body, Container, Head, Heading, Html, Preview, Text } from '@react-email/components';
import { Timestamp } from 'firebase/firestore';

type ContactUsEmailProps = {
  name: string;
  company: string;
  website: string;
  interest: string;
  projectDescription: string;
  collaborationType: string;
  budget: string;
  email: string;
  createdAt: Timestamp;
};

export default function ContactUsNewEmail({
  name,
  company,
  website,
  interest,
  projectDescription,
  collaborationType,
  budget,
  email,
  createdAt,
}: ContactUsEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Someone will reach out to you regarding your query...</Preview>
      <Body>
        <Container>
          <Heading>Thank you for contacting us!</Heading>
          <Text>Dear {name},</Text>
          <Text>Thank you for reaching out to us. Here are the details of your query:</Text>
          <ul>
            <li>
              <Text>Company: {company}</Text>
            </li>
            <li>
              <Text>Website: {website}</Text>
            </li>
            <li>
              <Text>Interest: {interest}</Text>
            </li>
            <li>
              <Text>Project Description: {projectDescription}</Text>
            </li>
            <li>
              <Text>Collaboration Type: {collaborationType}</Text>
            </li>
            <li>
              <Text>Budget: {budget}</Text>
            </li>
            <li>
              <Text>Email: {email}</Text>
            </li>
            <li>
              <Text>Timestamp: {createdAt.toDate().toLocaleString()}</Text>
            </li>
          </ul>
          <Text className="text-sm">Our team will get back to you shortly.</Text>
          <Text className="text-sm">
            Best Regards,
            <br />
            Shahzada Ali Hassan
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
