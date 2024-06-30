// components/EmailTemplate.tsx
import React from 'react';
import { Timestamp } from 'firebase/firestore';
import {
 Body,
 Container,
 Head,
 Heading,
 Html,
 Preview,
 Text,
} from '@react-email/components';

type ContactUsEmailProps = {
 firstName: string;
 lastName: string;
 phone: string;
 email: string;
 websiteLink: string;
 integrationType: string;
 projectDescription: string;
 budget: string;
 createdAt: Timestamp;
};

export default function ContactUsEmail({
 firstName,
 lastName,
 phone,
 email,
 websiteLink,
 integrationType,
 projectDescription,
 budget,
 createdAt,
}: ContactUsEmailProps) {
 return (
  <Html>
   <Head />
   <Preview>Someone will reach out to you regarding your query...</Preview>
   <Body>
    <Container>
     <Heading>Thank you for contacting us!</Heading>
     <Text>
      {' '}
      Dear {firstName} {lastName},
     </Text>
     <Text>
      Thank you for reaching out to us. Here are the details of your query:
     </Text>
     <ul>
      <li>
       <Text>Website: {websiteLink}</Text>
      </li>
      <li>
       <Text>Integration Type: {integrationType}</Text>
      </li>
      <li>
       <Text>Project Description: {projectDescription}</Text>
      </li>
      <li>
       <Text>Budget: ${budget}</Text>
      </li>
      <li>
       <Text>Timestamp: {createdAt.toDate().toLocaleString()}</Text>
      </li>
     </ul>
     <Text className='text-sm'>Our team will get back to you shortly.</Text>
     <Text className='text-sm'>
      Best Regards,
      <br />
      Shahzada Ali Hassan
     </Text>
    </Container>
   </Body>
  </Html>
 );
}
