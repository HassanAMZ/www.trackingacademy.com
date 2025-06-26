import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

type SubscriptionCreatedEmailProps = {
  name: string;
  subscriptionId: string;
  planName: string;
  amount: string;
  currency: string;
  nextBillingDate: Date;
};

const baseUrl = "https://trackingacademy.com";

export default function SubscriptionCreatedEmail({
  name,
  subscriptionId,
  planName,
  amount,
  currency,
  nextBillingDate,
}: SubscriptionCreatedEmailProps) {
  return (
    <Html>
      <Head>
        <title>Welcome to {planName} - Subscription Confirmed</title>
      </Head>
      <Preview>Welcome to {planName}! Your subscription is now active.</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* Header */}
          <Section style={header}>
            <Img
              src={`${baseUrl}/logo.png`}
              width="100"
              height="100"
              alt="Tracking Academy Logo"
              style={logo}
            />
          </Section>

          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heading}>Welcome to {planName}!</Heading>
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              Your subscription has been successfully created and is now active. Welcome to the
              Tracking Academy family!
            </Text>
          </Section>

          {/* Subscription Details */}
          <Section style={detailsSection}>
            <Heading as="h2" style={subheading}>
              Subscription Details
            </Heading>
            <Text style={detailItem}>
              <strong>Plan:</strong> {planName}
            </Text>
            <Text style={detailItem}>
              <strong>Amount:</strong> {currency} {amount}
            </Text>
            <Text style={detailItem}>
              <strong>Subscription ID:</strong> {subscriptionId}
            </Text>
            <Text style={detailItem}>
              <strong>Next Billing Date:</strong> {nextBillingDate.toLocaleDateString()}
            </Text>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Heading as="h2" style={subheading}>
              Get Started
            </Heading>
            <Text style={paragraph}>
              Access your dashboard to start using all the features included in your plan.
            </Text>
            <Button href={`${baseUrl}/dashboard`} style={ctaButton}>
              Access Dashboard
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Welcome aboard!
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
  color: "#10b981",
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

const ctaSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #eaeaea",
  textAlign: "center" as const,
};

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#484848",
  marginBottom: "20px",
};

const detailItem = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#484848",
  marginBottom: "8px",
};

const ctaButton = {
  backgroundColor: "#10b981",
  borderRadius: "4px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  margin: "16px 0",
};

const link = {
  color: "#10b981",
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
