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
import type { Timestamp } from "firebase/firestore";

type AuditRequestEmailProps = {
  name: string;
  email: string;
  phone: string;
  websiteUrl?: string;
  createdAt: Timestamp;
};

const baseUrl = "https://trackingacademy.com";

export default function AuditRequestEmail({
  name,
  email,
  phone,
  websiteUrl,
  createdAt,
}: AuditRequestEmailProps) {
  return (
    <Html>
      <Head>
        <title>Your Website Tracking Audit Is Being Prepared</title>
      </Head>
      <Preview>
        Your website tracking audit is in progress - we'll deliver your comprehensive report within
        24 hours
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
            <Heading style={heading}>Your Audit Is In Progress!</Heading>

            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              Thank you for requesting a free website tracking audit. We've received your request
              and our expert team is now analyzing your website's tracking setup.
            </Text>
            <Text style={paragraph}>
              Our specialists are currently conducting a comprehensive analysis of{" "}
              {websiteUrl ? `${websiteUrl}` : "your website"} to identify key areas for improvement
              in your tracking implementation.
            </Text>

            <div style={highlightBox}>
              <Text style={highlightText}>
                ⏱️ Your personalized audit report will be delivered within 24 hours
              </Text>
            </div>
          </Section>

          {/* What's Being Analyzed */}
          <Section style={bonusSection}>
            <Heading as="h2" style={subheading}>
              What We're Analyzing For You:
            </Heading>
            <Text style={bonusPoint}>🔍 Complete tracking health assessment</Text>
            <Text style={bonusPoint}>📊 Data quality evaluation (web & server-side)</Text>
            <Text style={bonusPoint}>🔧 Missing tracking implementations</Text>
            <Text style={bonusPoint}>🛡️ GDPR & privacy compliance review</Text>
            <Text style={bonusPoint}>💡 Actionable improvement recommendations</Text>
            <Text style={bonusPoint}>🗺️ Priority fixes roadmap</Text>
          </Section>

          {/* What Happens Next */}
          <Section style={nextStepsSection}>
            <Heading as="h2" style={subheading}>
              What Happens Next:
            </Heading>
            <div style={timelineItem}>
              <Text style={timelineStep}>1. Analysis in Progress</Text>
              <Text style={timelineDescription}>
                Our team is currently reviewing your website's tracking setup
              </Text>
            </div>
            <div style={timelineItem}>
              <Text style={timelineStep}>2. Report Delivery (Within 24 Hours)</Text>
              <Text style={timelineDescription}>
                You'll receive a detailed audit report with personalized recommendations
              </Text>
            </div>
            <div style={timelineItem}>
              <Text style={timelineStep}>3. Free Strategy Call (Optional)</Text>
              <Text style={timelineDescription}>
                Book a call to discuss your results and implementation plan
              </Text>
            </div>
          </Section>

          {/* CTA Section */}
          <Section style={ctaSection}>
            <Heading as="h2" style={subheading}>
              Get Ready for Better Tracking
            </Heading>
            <Text style={paragraph}>
              While you wait for your audit report, you can schedule a free strategy call to discuss
              the results once they're ready.
            </Text>

            <Button style={ctaButton} href={`${baseUrl}/contact/book-a-meeting`}>
              Schedule Your Free Strategy Call
            </Button>

            <Text style={smallText}>
              Book a 15-minute call to review your audit results and create a custom implementation
              plan.
            </Text>
          </Section>

          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Questions about your audit request?
              <br />
              <span style={signature}>
                process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan"
              </span>
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

// Styles using Tailwind-inspired approach
const main = {
  backgroundColor: "#f8fafc", // bg-slate-50
  fontFamily: "system-ui, -apple-system, sans-serif",
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
  borderBottom: "1px solid #e2e8f0", // border-slate-200
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
  letterSpacing: "-0.025em", // tracking-tight
  lineHeight: "1.25", // leading-tight
  fontWeight: "700",
  color: "#0f172a", // text-slate-900
  margin: "0 0 16px 0",
};

const greeting = {
  margin: "0 0 15px",
  fontSize: "18px",
  lineHeight: "1.5",
  color: "#334155", // text-slate-700
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#475569", // text-slate-600
  marginBottom: "16px",
};

const highlightBox = {
  margin: "24px auto",
  padding: "20px",
  backgroundColor: "#fef3c7", // bg-amber-100
  border: "1px solid #f59e0b", // border-amber-500
  borderRadius: "8px",
  maxWidth: "400px",
};

const highlightText = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#92400e", // text-amber-800
  textAlign: "center" as const,
  margin: "0",
};

const nextStepsSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #e2e8f0", // border-slate-200
};

const timelineItem = {
  marginBottom: "20px",
  paddingLeft: "16px",
  borderLeft: "3px solid #0ea5e9", // border-sky-500
};

const timelineStep = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#1e293b", // text-slate-800
  marginBottom: "4px",
};

const timelineDescription = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#64748b", // text-slate-500
  margin: "0",
};

const ctaSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #e2e8f0", // border-slate-200
  textAlign: "center" as const,
};

const bonusSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #e2e8f0", // border-slate-200
};

const subheading = {
  fontSize: "20px",
  fontWeight: "600",
  color: "#1e293b", // text-slate-800
  marginBottom: "20px",
};

const bonusPoint = {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#475569", // text-slate-600
  marginBottom: "10px",
};

const ctaButton = {
  backgroundColor: "#0ea5e9", // bg-sky-500
  borderRadius: "6px",
  color: "#ffffff",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
  margin: "16px 0",
};

const smallText = {
  fontSize: "14px",
  color: "#64748b", // text-slate-500
  marginTop: "8px",
};

const link = {
  color: "#0ea5e9", // text-sky-500
  textDecoration: "underline",
};

const footer = {
  backgroundColor: "#ffffff",
  borderTop: "1px solid #e2e8f0", // border-slate-200
  padding: "20px 32px",
  textAlign: "center" as const,
  borderRadius: "0 0 8px 8px",
};

const footerText = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#64748b", // text-slate-500
};

const signature = {
  fontWeight: "500",
  color: "#334155", // text-slate-700
};

const footerLinks = {
  fontSize: "12px",
  lineHeight: "1.5",
  color: "#64748b", // text-slate-500
};
