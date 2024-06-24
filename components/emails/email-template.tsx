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
 userName: any;
 email: any;
 websiteLink: any;
 integrationType: any;
 projectDescription: any;
 budget: any;
 createdAt: Timestamp;
};

export default function EmailTemplate({
 userName,
 email,
 websiteLink,
 integrationType,
 projectDescription,
 budget,
 createdAt,
}: EmailTemplateProps) {
 return (
  <Html>
   <Head />
   <Preview>Thank you for joining our waitlist and for your patience</Preview>
   <Body>
    <Container>
     <Heading>Thank you for contacting us!</Heading>
     <Text> Dear {userName},</Text>
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
