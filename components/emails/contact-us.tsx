import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
  Section,
  Row,
  Column,
  Link,
  Img,
} from "@react-email/components";
import { Timestamp } from "firebase/firestore";

type ContactUsEmailProps = {
  name: string;
  roleType: string;
  website: string;
  interest: string;
  projectDescription: string;
  budget: string;
  email: string;
  phone: string;
  createdAt: Timestamp;
};

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export default function ContactUsEmail({
  name,
  roleType,
  website,
  interest,
  projectDescription,
  phone,
  budget,
  email,
  createdAt,
}: ContactUsEmailProps) {
  return (
    <Html>
      <Head>
        <title>Contact Form Submission</title>
      </Head>
      <Preview>
        {name} ! Thanks for reaching out! We'll be in touch soon.
      </Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/logo.svg`}
              width="150"
              height="50"
              alt="Logo"
              style={logo}
            />
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heading}>
              Thank You for Contacting Us, {name} !
            </Heading>
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              We've received your inquiry and appreciate you taking the time to
              reach out. Our team will review your request and get back to you
              shortly.
            </Text>
          </Section>

          {/* Details Section */}
          <Section style={detailsSection}>
            <Heading as="h2" style={subheading}>
              Your Request Details
            </Heading>
            <Row style={detailRow}>
              <Column style={detailLabel}>Role Type:</Column>
              <Column style={detailValue}>{roleType}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Website:</Column>
              <Column style={detailValue}>
                <Link href={website} style={link}>
                  {website}
                </Link>
              </Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Interest:</Column>
              <Column style={detailValue}>{interest}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Project Description:</Column>
              <Column style={detailValue}>{projectDescription}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Budget:</Column>
              <Column style={detailValue}>{budget}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Contact:</Column>
              <Column style={detailValue}>
                Email: {email}
                <br />
                Phone: {phone}
              </Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Submitted:</Column>
              <Column style={detailValue}>
                {createdAt.toDate().toLocaleString()}
              </Column>
            </Row>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Best Regards,
              <br />
              <span style={signature}>Shahzada Ali Hassan</span>
            </Text>
            <Text style={footerLinks}>
              <Link href={`${baseUrl}`} style={link}>
                Website
              </Link>{" "}
              |{" "}
              <Link href={`${baseUrl}/contact`} style={link}>
                Contact
              </Link>{" "}
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
  fontWeight: "400",
  color: "#484848",
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
};

const detailsSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #eaeaea",
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
  color: "#2563eb",
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
