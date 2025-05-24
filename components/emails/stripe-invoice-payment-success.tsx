import {
  Body,
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

type InvoicePaymentSuccessEmailProps = {
  name: string;
  amount: string;
  currency: string;
  invoiceId: string;
  subscriptionId?: string;
};

const baseUrl = "https://trackingacademy.com";

export default function InvoicePaymentSuccessEmail({
  name,
  amount,
  currency,
  invoiceId,
  subscriptionId,
}: InvoicePaymentSuccessEmailProps) {
  return (
    <Html>
      <Head>
        <title>Invoice Payment Confirmation</title>
      </Head>
      <Preview>
        Your invoice payment of {currency} {amount} has been processed
        successfully.
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
            <Heading style={heading}>Invoice Payment Confirmed</Heading>
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              Your invoice payment has been successfully processed. Thank you
              for your continued subscription!
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
              <strong>Invoice ID:</strong> {invoiceId}
            </Text>
            {subscriptionId && (
              <Text style={detailItem}>
                <strong>Subscription ID:</strong> {subscriptionId}
              </Text>
            )}
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Thank you for your continued trust,
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
