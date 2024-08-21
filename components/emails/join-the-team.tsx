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
  gender: string; // Add this line
  applyingPosition: string;
  professionalBackground: string;
  challengingDeal: string;
  coverLetter: string;
  loomVideo: string;
  expectedSalary: string;
  salaryTarget: string;
  fiveYearPlan: string;
  createdAt: Timestamp;
};

export default function JoinTheTeam({
  firstName,
  lastName,
  phone,
  email,
  gender, // Add this line
  applyingPosition,
  professionalBackground,
  challengingDeal,
  coverLetter,
  loomVideo,
  expectedSalary,
  salaryTarget,
  fiveYearPlan,
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
              <Text>Gender: {gender}</Text>{" "}
              {/* Add this line if you want to display gender */}
            </li>
            <li>
              <Text>Position Applied: {applyingPosition}</Text>
            </li>
            <li>
              <Text>Professional Background: {professionalBackground}</Text>
            </li>
            <li>
              <Text>Challenging Deal: {challengingDeal}</Text>
            </li>
            <li>
              <Text>Cover Letter: {coverLetter}</Text>
            </li>
            <li>
              <Text>
                Loom Video:{" "}
                <a href={loomVideo} target="_blank" rel="noopener noreferrer">
                  Watch Video
                </a>
              </Text>
            </li>
            <li>
              <Text>Expected Salary: ${expectedSalary}</Text>
            </li>
            <li>
              <Text>3-Year Salary Target: ${salaryTarget}</Text>
            </li>
            <li>
              <Text>5-Year Plan: {fiveYearPlan}</Text>
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
