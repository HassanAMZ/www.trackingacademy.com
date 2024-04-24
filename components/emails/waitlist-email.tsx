// components/EmailTemplate.tsx
import React from "react";
import { Timestamp } from "firebase/firestore";
import {
 Body,
 Container,
 Head,
 Heading,
 Html,
 Preview,
 Text,
} from "@react-email/components";

type EmailTemplateProps = {
 userName: string; // Assume userName is still relevant and used for personalization
 email: string; // Not used directly in the template but important for the email sending
 createdAt: Timestamp;
};

export default function WaitListEmail({
 userName,
 email,
 createdAt,
}: EmailTemplateProps) {
 return (
  <Html>
   <Head />
   <Preview>Thank you for joining our waitlist!</Preview>
   <Body>
    <Container>
     <Heading>Welcome to the Tracking Academy Waitlist!</Heading>
     <Text>Dear {userName},</Text>
     <Text>
      Thank you for your interest in our courses. You are now on our waitlist,
      and we will notify you as soon as registration opens. Here are the details
      we have on file:
     </Text>
     <ul>
      <li>
       <Text>Email: {email}</Text>
      </li>
      <li>
       <Text>Join Date: {createdAt.toDate().toLocaleString()}</Text>
      </li>
     </ul>
     <Text className='paragraph-secondary'>
      Stay tuned for updates, and feel free to contact us if you have any
      questions in the meantime.
     </Text>
     <Text className='paragraph-secondary'>
      Best Regards,
      <br />
      The Tracking Academy Team
     </Text>
    </Container>
   </Body>
  </Html>
 );
}
