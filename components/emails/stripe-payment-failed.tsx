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

type PaymentFailedEmailProps = {
  name: string;
  amount: string;
  currency: string;
  paymentIntentId: string;
  error?: string;
};

const baseUrl = "https://trackingacademy.com";

export default function PaymentFailedEmail({
  name,
  amount,
  currency,
  paymentIntentId,
  error,
}: PaymentFailedEmailProps) {
  return (
    <Html>
      <Head>
        <title>Payment Failed - Please Try Again</title>
      </Head>
      <Preview>
        Payment failed for {currency} {amount}. Please try again or contact
        support.
      </Preview>
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
            <Heading style={heading}>Payment Failed</Heading>
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              We were unable to process your payment. Please try again or
              contact our support team if you continue to experience issues.
            </Text>
          </Section>

          {/* Payment Details */}
          <Section style={detailsSection}>
            <Heading as="h2" style={subheading}>
              Payment Details
            </Heading>
            <Text style={detailItem}>
              <strong>Amount:</strong> {currency} {amount}
            </Text>
            <Text style={detailItem}>
              <strong>Payment ID:</strong> {paymentIntentId}
            </Text>
            {error && (
              <Text style={errorText}>
                <strong>Error:</strong> {error}
              </Text>
            )}
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Heading as="h2" style={subheading}>
              Try Again
            </Heading>
            <Text style={paragraph}>
              You can retry your payment or contact our support team for
              assistance.
            </Text>
            <Button href={`${baseUrl}/landing-page/payment`} style={ctaButton}>
              Retry Payment
            </Button>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Need help? Contact our support team,
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
  color: "#dc2626",
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

const errorText = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#dc2626",
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
