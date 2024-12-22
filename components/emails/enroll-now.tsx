import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Timestamp } from 'firebase/firestore';

type EmailTemplateProps = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  currentOccupation: string;
  interestedCourse: string;
  skills: string;
  referralSource: string;
  education: string;
  learningGoals: string;
  preferredLearningStyle: string;
  budget: string;
  availability: string;
  courseDurationPreference: string;
  experienceLevel: string;
  languagePreference: string;
  courseFormatPreference: string;
  additionalComments?: string;
  expectations: string;
  futureGoals: string;
  createdAt: Timestamp;
};

export default function WaitListEmail({
  firstName,
  lastName,
  email,
  phone,
  currentOccupation,
  interestedCourse,
  skills,
  referralSource,
  education,
  learningGoals,
  preferredLearningStyle,
  budget,
  availability,
  courseDurationPreference,
  experienceLevel,
  languagePreference,
  courseFormatPreference,
  additionalComments,
  expectations,
  futureGoals,
  createdAt,
}: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>Thank you for joining our waitlist!</Preview>
      <Body>
        <Container>
          <Heading>Welcome to the Tracking Academy Waitlist!</Heading>
          <Text>
            Dear {firstName} {lastName},
          </Text>
          <Text>
            Thank you for your interest in our courses. You are now on our waitlist, and we will
            notify you as soon as registration opens. Here are the details we have on file:
          </Text>

          <Section>
            <Heading as="h2">Personal Information</Heading>
            <Text>
              <strong>Email:</strong> {email}
            </Text>
            <Text>
              <strong>Phone:</strong> {phone}
            </Text>
            <Text>
              <strong>Current Occupation:</strong> {currentOccupation}
            </Text>
            <Text>
              <strong>Interested Course:</strong> {interestedCourse}
            </Text>
            <Text>
              <strong>Skills:</strong> {skills}
            </Text>
          </Section>

          <Section>
            <Heading as="h2">Background</Heading>
            <Text>
              <strong>Referral Source:</strong> {referralSource}
            </Text>
            <Text>
              <strong>Education:</strong> {education}
            </Text>
          </Section>

          <Section>
            <Heading as="h2">Course Preferences</Heading>
            <Text>
              <strong>Learning Goals:</strong> {learningGoals}
            </Text>
            <Text>
              <strong>Preferred Learning Style:</strong> {preferredLearningStyle}
            </Text>
            <Text>
              <strong>Budget:</strong> {budget}
            </Text>
            <Text>
              <strong>Availability:</strong> {availability} hours per week
            </Text>
            <Text>
              <strong>Course Duration Preference:</strong> {courseDurationPreference}
            </Text>
            <Text>
              <strong>Experience Level:</strong> {experienceLevel}
            </Text>
            <Text>
              <strong>Language Preference:</strong> {languagePreference}
            </Text>
            <Text>
              <strong>Course Format Preference:</strong> {courseFormatPreference}
            </Text>
            {additionalComments && (
              <Text>
                <strong>Additional Comments:</strong> {additionalComments}
              </Text>
            )}
          </Section>

          <Section>
            <Heading as="h2">Goals</Heading>
            <Text>
              <strong>Expectations from the Course:</strong> {expectations}
            </Text>
            <Text>
              <strong>Future Goals:</strong> {futureGoals}
            </Text>
          </Section>

          <Section>
            <Heading as="h2">Join Date</Heading>
            <Text>{createdAt.toDate().toLocaleString()}</Text>
          </Section>

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
