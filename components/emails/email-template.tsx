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

type ContactUsEmailProps = {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  websiteLink: string;
  integrationType: string;
  projectDescription: string;
  budget: string;
  currentSetup: string;
  meetingPreference: string;
  monthlyVisitors: string;
  businessModel: string;
  topMarketingChannels: string;
  currentChallenges: string;
  conversionRateChanges?: string;
  tagManagementSystem?: string;
  trackingGoal?: string;
  specificRequirements?: string;
  implementationTimeline?: string;
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
  currentSetup,
  meetingPreference,
  monthlyVisitors,
  businessModel,
  topMarketingChannels,
  currentChallenges,
  conversionRateChanges,
  tagManagementSystem,
  trackingGoal,
  specificRequirements,
  implementationTimeline,
  createdAt,
}: ContactUsEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>Someone will reach out to you regarding your query...</Preview>
      <Body>
        <Container>
          <Heading>Thank you for contacting us!</Heading>
          <Text>Dear {firstName},</Text>
          <Text>
            Thank you for reaching out to us. Here are the details of your
            query:
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
              <Text>Current Setup: {currentSetup}</Text>
            </li>
            <li>
              <Text>Meeting Preference: {meetingPreference}</Text>
            </li>
            <li>
              <Text>Monthly Visitors: {monthlyVisitors}</Text>
            </li>
            <li>
              <Text>Business Model: {businessModel}</Text>
            </li>
            <li>
              <Text>Top Marketing Channels: {topMarketingChannels}</Text>
            </li>
            <li>
              <Text>Current Challenges: {currentChallenges}</Text>
            </li>
            {conversionRateChanges && (
              <li>
                <Text>Conversion Rate Changes: {conversionRateChanges}</Text>
              </li>
            )}
            {tagManagementSystem && (
              <li>
                <Text>Tag Management System: {tagManagementSystem}</Text>
              </li>
            )}
            {trackingGoal && (
              <li>
                <Text>Tracking Goal: {trackingGoal}</Text>
              </li>
            )}
            {specificRequirements && (
              <li>
                <Text>Specific Requirements: {specificRequirements}</Text>
              </li>
            )}
            {implementationTimeline && (
              <li>
                <Text>Implementation Timeline: {implementationTimeline}</Text>
              </li>
            )}
            <li>
              <Text>Timestamp: {createdAt.toDate().toLocaleString()}</Text>
            </li>
          </ul>
          <Text className="text-sm">
            Our team will get back to you shortly.
          </Text>
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
