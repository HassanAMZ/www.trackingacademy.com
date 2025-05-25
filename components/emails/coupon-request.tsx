import { services } from "@/data/services";
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
import { Timestamp } from "firebase/firestore";

type CouponRequestEmailProps = {
  name: string;
  email: string;
  phone: string;
  couponCode: string;
  createdAt: Timestamp;
};

const baseUrl = "https://trackingacademy.com";

export default function CouponRequestEmail({
  name,
  email,
  phone,
  couponCode,
  createdAt,
}: CouponRequestEmailProps) {
  const service = services.find((s) => s.name === "See Every Sale");

  return (
    <Html>
      <Head>
        <title>
          Your $300 Coupon Code for the 3-Day "See Every Sale" Tracking System
        </title>
      </Head>
      <Preview>
        Your $300 Coupon Code: {couponCode} - Fix Your Facebook's Data Sharing
        Restrictions Now!
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
          </Section>{" "}
          {/* Hero Section */}
          <Section style={heroSection}>
            <Heading style={heading}>Your $300 Coupon Is Ready!</Heading>{" "}
            <Text style={greeting}>Hi {name},</Text>
            <Text style={paragraph}>
              Thanks for your interest in our 3-Day "See Every Sale" Tracking
              System. Here's your exclusive $300 coupon code to use during
              checkout:
            </Text>{" "}
            {/* Coupon Code Box */}
            <Section style={couponBox}>
              <Text style={couponText}>{couponCode}</Text>
            </Section>{" "}
            <Text style={paragraph}>
              This coupon gives you $300 OFF the complete 3-Day "See Every Sale"
              Tracking System — helping you fix Facebook's data sharing
              restrictions and restore 95%+ accurate data for every ecommerce
              event.
            </Text>
          </Section>{" "}
          {/* CTA Section */}
          <Section style={ctaSection}>
            <Heading as="h2" style={subheading}>
              Ready to See Every Sale Again?
            </Heading>

            <Button
              style={ctaButton}
              href={`${baseUrl}/funnels/facebook/see-every-sale/payment?prefilled_promo_code=SEEEVERYSALE300OFF&product_id=${service?.product_id}&price_id=${service?.price_id}`}
            >
              Use this direct link to purchase with your coupon:
              SEEEVERYSALE300OFF
            </Button>
          </Section>{" "}
          {/* What You'll Get */}
          <Section style={bonusSection}>
            <Heading as="h2" style={subheading}>
              What You'll Get With Your Purchase:
            </Heading>
            <Text style={bonusPoint}>
              ✅ Complete "See Every Sale" Tracking System ($1,500 value - $300
              OFF with your coupon)
            </Text>
            <Text style={bonusPoint}>
              ✅ Looker Studio eCom Dashboard Setup ($2,000 Value)
            </Text>
            <Text style={bonusPoint}>
              ✅ Google Analytics 4 Ecommerce Tracking (95% Accuracy, $1,200
              Value)
            </Text>
            <Text style={bonusPoint}>
              ✅ Google Ads Conversion Tracking (95% Accuracy, $1,200 Value)
            </Text>
            <Text style={bonusPoint}>
              ✅ GDPR & CCPA Cookie Consent Setup ($1,200 Value)
            </Text>
            <Text style={bonusPoint}>
              ✅ 47-Point Ecom Conversion Checklist ($1,500 Value)
            </Text>
            <Text style={bonusPoint}>
              ✅ ROI & LTV Tracking Toolkit for Ecom Brands ($500 Value)
            </Text>
            <Text style={urgentText}>
              Limited offer for the first 10 clients only — act fast before it
              expires!
            </Text>
          </Section>{" "}
          {/* Footer */}
          <Section style={footer}>
            <Text style={footerText}>
              Looking forward to helping you restore your tracking,
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
  color: "#10b981", // Emerald color
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

const couponBox = {
  margin: "24px auto",
  padding: "16px",
  backgroundColor: "#f9f9f9",
  border: "2px dashed #10b981",
  borderRadius: "8px",
  maxWidth: "300px",
};

const couponText = {
  fontSize: "24px",
  fontWeight: "700",
  color: "#10b981",
  letterSpacing: "1px",
  textAlign: "center" as const,
  margin: "0",
};

const ctaSection = {
  backgroundColor: "#ffffff",
  padding: "24px 32px",
  borderTop: "1px solid #eaeaea",
  textAlign: "center" as const,
};

const bonusSection = {
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

const bonusPoint = {
  fontSize: "15px",
  lineHeight: "1.5",
  color: "#484848",
  marginBottom: "10px",
};

const urgentText = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#dc2626",
  marginTop: "20px",
  textAlign: "center" as const,
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

const smallText = {
  fontSize: "14px",
  color: "#666666",
  marginTop: "8px",
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
