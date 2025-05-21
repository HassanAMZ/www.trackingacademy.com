import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import { Timestamp } from "firebase/firestore";

type ContactUsEmailProps = {
  name: string;
  website: string;
  issues: string;
  urgency: string;
  budget: string;
  email: string;
  createdAt: Timestamp;
};

const baseUrl = "https://trackingacademy.com";

export default function ContactUsEmail({
  name,
  website,
  issues,
  urgency,
  budget,
  email,
  createdAt,
}: ContactUsEmailProps) {
  return (
    <Html>
      <Head>
        <title>Tracking Setup Inquiry</title>
      </Head>
      <Preview>
        {name}! Thanks for reaching out about your tracking setup. We'll be in
        touch soon.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="100"
              height="100"
              alt="Logo"
              style={logo}
            />
          </Section>{" "}
          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heading}>Let's Fix Your Tracking!</Heading>{" "}
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              Thanks for reaching out about improving your ad tracking. We've
              received your information and our team will review your tracking
              needs right away.
            </Text>
            <Text style={paragraph}>
              We specialize in helping businesses recover lost conversions and
              optimize ad spend through proper tracking implementation.
            </Text>
          </Section>{" "}
          {/* Details Section */}
          <Section style={detailsSection}>
            <Heading as="h2" style={subheading}>
              Your Inquiry Details
            </Heading>
            <Row style={detailRow}>
              <Column style={detailLabel}>Website:</Column>
              <Column style={detailValue}>
                <Link href={website} style={link}>
                  {website}
                </Link>
              </Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Issues:</Column>
              <Column style={detailValue}>{issues}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Urgency Level:</Column>
              <Column style={detailValue}>{urgency}/10</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Ad Spent Budget:</Column>
              <Column style={detailValue}>{budget}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Email:</Column>
              <Column style={detailValue}>{email}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Submitted:</Column>
              <Column style={detailValue}>
                {createdAt.toDate().toLocaleString()}
              </Column>
            </Row>
          </Section>{" "}
          {/* Next Steps */}
          <Section style={nextStepsSection}>
            <Heading as="h2" style={subheading}>
              Next Steps
            </Heading>
            <Text style={paragraph}>
              Our team will contact you within 24 hours to discuss your tracking
              issues and how we can help recover your lost conversions.
            </Text>
          </Section>{" "}
          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Looking forward to helping you fix your tracking,
              <br />
              <span style={signature}>Shahzada Ali Hassan</span>
              <br />
              Tracking & Analytics Specialist
            </Text>
            <Text style={footerLinks}>
              <Link href={`${baseUrl}`} style={link}>
                Website
              </Link>{" "}
              |{" "}
              <Link href={`${baseUrl}/blog`} style={link}>
                Blog
              </Link>{" "}
              |{" "}
              <Link href={`${baseUrl}/contact`} style={link}>
                Contact
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "600px",
};

const header = {
  backgroundColor: "#ffffff",
  padding: "20px",
  borderRadius: "8px 8px 0 0",
  borderBottom: "1px solid #eaeaea",
};

const logo = {
  margin: "0 auto",
  display: "block",
};

const heroSection = {
  backgroundColor: "#ffffff",
  padding: "32px",
  textAlign: "center" as const,
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#10b981", // Emerald color to match submit button
  padding: "17px 0 0",
};

const greeting = {
  margin: "0 0 15px",
  fontSize: "18px",
  lineHeight: "1.4",
  color: "#484848",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.4",
  color: "#484848",
  marginBottom: "16px",
};

const detailsSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #eaeaea",
};

const nextStepsSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #eaeaea",
};

const bulletPoints = {
  fontSize: "16px",
  lineHeight: "1.8",
  color: "#484848",
};

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#484848",
  marginBottom: "20px",
};

const detailRow = {
  marginBottom: "8px",
};

const detailLabel = {
  width: "30%",
  fontSize: "14px",
  color: "#666666",
  fontWeight: "500",
};

const detailValue = {
  width: "70%",
  fontSize: "14px",
  color: "#484848",
};

const link = {
  color: "#10b981", // Emerald color
  textDecoration: "underline",
};

const footer = {
  backgroundColor: "#ffffff",
  borderTop: "1px solid #eaeaea",
  padding: "20px 32px",
  textAlign: "center" as const,
  borderRadius: "0 0 8px 8px",
};

const footerText = {
  fontSize: "14px",
  lineHeight: "24px",
  color: "#666666",
};

const signature = {
  fontWeight: "500",
  color: "#484848",
};

const footerLinks = {
  fontSize: "12px",
  lineHeight: "24px",
  color: "#666666",
};
