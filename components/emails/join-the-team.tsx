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

type JoinTheTeamProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  applyingPosition: string;
  createdAt: Timestamp;
};

export default function JoinTheTeam({
  firstName,
  lastName,
  phone,
  email,
  applyingPosition,
  createdAt,
}: JoinTheTeamProps) {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for applying for the {applyingPosition} position...
      </Preview>
      <Body>
        <Container>
          <Heading>Thank you for your application!</Heading>
          <Text>
            Dear {firstName} {lastName},
          </Text>
          <Text>
            We have received your application for the {applyingPosition}{" "}
            position. Here are the details you provided:
          </Text>
          <ul>
            <li>
              <Text>Position Applied: {applyingPosition}</Text>
            </li>

            <li>
              <Text>
                Application Timestamp: {createdAt.toDate().toLocaleString()}
              </Text>
            </li>
          </ul>
          <Text className="text-sm">
            Our team will review your application and get back to you shortly.
          </Text>
          <Text className="text-sm">
            Best Regards,
            <br />
            The Hiring Team
          </Text>
        </Container>
      </Body>
    </Html>
  );
}
