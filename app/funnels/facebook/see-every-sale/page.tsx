"use client";

import CaseStudyCarousel from "@/components/case-study/case-study-carousel";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import CouponOptInForm from "@/components/funnels/coupon-optin";
import DetailedCTA from "@/components/funnels/detailed-cta";
import DetailsCarousel from "@/components/funnels/details-carousal";
import ObjectionHandling from "@/components/funnels/objection-handling";
import ProblemAwareness from "@/components/funnels/problem-awareness";
import ScarcityUrgency from "@/components/funnels/scarcity-urgency";
import SocialProof from "@/components/funnels/social-proof";
import AdSpendCalculator from "@/components/global/ad-spend-calculator";
import AlternativesSection from "@/components/home/alternative-section";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { caseStudies } from "@/data/case-studies";
import { services } from "@/data/services";
import { PersonIcon } from "@radix-ui/react-icons";
import { BarChart2, CheckSquare, Rocket, Target, Zap } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const service = services.find((s) => s.name === "See Every Sale");
  const redirectUrl = `${pathname.replace(/\/$/, "")}/payment?product_id=${service?.product_id}&price_id=${service?.price_id}&prefilled_promo_code=SEEEVERYSALE300OFF`;

  return (
    <main>
      <Hero
        eyebrow="Still flying blind on Meta ads?"
        heading={
          <h1 className="text-center lg:text-left mx-auto lg:mx-0">
            Fix broken facebook ads tracking in 3 days —{" "}
            <span className="text-primary"> or your money back </span>
          </h1>
        }
        subheading={
          <h4 className="mx-auto lg:mx-0 text-muted-foreground max-w-3xl text-center lg:text-left">
            Our
            <span className="text-primary"> “See Every Sale” </span>
            setup gives eCommerce brands 95%+ accurate conversion data — so you
            can stop wasting ad spend, scale with confidence, and finally trust
            your numbers again.
          </h4>
        }
        carousel={<TestimonialsCarousel2 />}
        benefits={[
          "Completed within 3 days",
          "100% done-for-you setup",
          "Improved ROAS by 30%",
          "One-time setup cost",
          "Scaleable Solution",
          "95%+ accuracy",
        ]}
        customCtaButton={
          <Button
            className="flex max-w-4xl flex-col items-center text-center font-bold lg:items-start lg:text-left mx-auto lg:mx-0 w-fit p-6 text-xl cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <div>
              🎟️ Claim $300 OFF + $7,600 in Free Bonuses
              <span className="mt-2 block text-sm font-medium opacity-90">
                Limited to the first 10 clients — act fast before it expires
              </span>
            </div>
          </Button>
        }
        supportingComponent={<AdSpendCalculator cta={true} />}
      />
      <div className="w-full max-w-full overflow-hidden py-12">
        <Container className="pb-12 space-y-6 text-center max-w-4xl flex flex-col items-center">
          <h1>Trusted by 1,000+ eCommerce brands </h1>
          <h4 className="max-w-3xl text-muted-foreground">
            See exactly how we restored tracking for ecommerce brands and the
            measurable impact on their ROAS, conversion rates, and scaling
            success.
          </h4>
        </Container>
        <CaseStudyCarousel caseStudies={caseStudies} />
      </div>
      <DetailsCarousel
        headerTitle="How it Works?"
        headerDescription="A complete system designed to fix Facebook's data sharing restrictions and restore 95%+ accurate data for every key event — all done-for-you in just 3 days."
        items={[
          {
            title: "Day 1: Onboarding",
            description:
              "Fix Your Facebook's Data Sharing Restrictions and Restore 95%+ Accurate Data for Facebook Ads. All done-for-you, in just 3 days, without violating Facebook's policies or getting flagged. Track every ecommerce event.",
            icon: <PersonIcon />,
            benefits: [
              "Comprehensive store and funnel analysis",
              "Ad account configuration review",
              "Current tracking stack assessment",
              "Identification of data gaps and issues",
              "Custom strategy development session",
              "Clear roadmap and timeline establishment",
            ],
            image: "/images/hero/measurement-planning.png",
          },
          {
            title: "Day 2-3: Tracking Implementation",
            description:
              "We install a future-proofed, bulletproof tracking stack with Facebook CAPI, GA4, server-side integrations, and policy-safe triggers.",
            icon: <Target />,
            benefits: [
              "Facebook Conversions API setup and optimization",
              "Google Analytics 4 advanced configuration",
              "Server-side tracking implementation",
              "Cross-platform event synchronization",
              "Policy-compliant tracking triggers",
              "Real-time data validation and testing",
            ],
            image: "/placeholder.svg",
          },
          {
            title: "Day 4+: Performance & Scaling",
            description:
              "We monitor, optimize, and scale your tracking for maximum performance while ensuring 95%+ accuracy across all platforms and campaigns.",
            icon: <Rocket />,
            benefits: [
              "Continuous performance monitoring and alerts",
              "Advanced attribution modeling setup",
              "Campaign optimization recommendations",
              "Automated reporting and dashboards",
              "Ongoing support and maintenance",
              "Monthly performance reviews and improvements",
            ],
            image: "/images/hero/customer-support.png",
          },
        ]}
      />
      {/* <ProblemAwareness
        headingText="The Hidden Costs of Missing Conversion Data"
        paragraphText="Without accurate funnel tracking, your Meta ads lack the data to optimize for conversions, resulting in wasted budget and poor ROAS."
        bluePillPoints={[
          "Can't See Add to Cart, & Purchase Events",
          "Facebook Can't Optimize for Conversions",
          "Wasting Ad Budget on Poorly Targeted Audiences",
          "Unable to Scale Due to Missing Data",
          "Competitors With Tracking Are Outperforming You",
        ]}
        imageUrl="/images/hero/matrix.png"
        redPillPoints={[
          "Restore 95%+ Accurate Conversion Tracking",
          "Give Meta the Data it Needs to Optimize",
          "Make Informed Scaling Decisions",
          "Stay Compliant With Meta's Policies",
          "Track 30% More Conversions Than Standard Setups",
        ]}
      /> */}
      <DetailsCarousel
        headerTitle="What You Get?"
        headerDescription="A complete system designed to fix Facebook's data sharing restrictions and restore 95%+ accurate data for every key event — all done-for-you in just 3 days."
        items={[
          {
            title: "Looker Studio eCom Dashboard",
            description:
              "Visualize your sales data with a custom, easy-to-read dashboard tailored for your business.",
            icon: <BarChart2 />,
            benefits: [
              "Custom dashboard for your specific KPIs",
              "Live performance metrics for ad campaigns",
              "Audience behavior analysis and segmentation",
              "Automated performance alerts for optimization",
            ],
            image: "/images/hero/unified-dashboard.png",
          },
          {
            title: "95% Accurate GA4 Tracking Setup",
            description:
              "Ensure precise Google Analytics 4 tracking to make your data reliable and actionable.",
            icon: <Target />,
            benefits: [
              "Proper GA4 implementation and configuration",
              "Custom event tracking tailored to your business",
              "Cross-domain tracking if needed",
              "Integration with your Meta ads for complete data",
            ],
            image: "/images/hero/measurement-planning.png",
          },
          {
            title: "Google Ads Conversion Tracking",
            description:
              "Implement accurate Google Ads conversion tracking to maximize your PPC performance.",
            icon: <Target />,
            benefits: [
              "95% accurate conversion tracking",
              "Custom conversion setup tailored to your business",
              "Proper attribution modeling",
              "Enhanced campaign optimization",
            ],
            image: "/images/hero/measurement-planning.png",
          },
          {
            title: "GDPR & CCPA Cookie Consent Setup",
            description:
              "Stay compliant with privacy regulations while maintaining effective tracking.",
            icon: <CheckSquare />,
            benefits: [
              "Fully compliant cookie consent system",
              "Customized for your specific business needs",
              "Balanced for both compliance and tracking effectiveness",
              "Future-proofed against privacy regulation changes",
            ],
            image: "/images/hero/ecommerce-conversion-checklist.png",
          },
          {
            title: "47-Point Ecom Conversion Checklist",
            description:
              "Optimize your funnel with our proven checklist to boost conversions and ROAS.",
            icon: <CheckSquare />,
            benefits: [
              "47 critical conversion checkpoints",
              "Insights from top converting stores",
              "Decrease customer acquisition costs",
              "Increase average order value and conversion rates",
            ],
            image: "/images/hero/ecommerce-conversion-checklist.png",
          },
          {
            title: "ROI & LTV Tracking Toolkit",
            description:
              "Access powerful tools to analyze and scale your ad campaigns with confidence.",
            icon: <BarChart2 />,
            benefits: [
              "ROAS calculators and forecasting tools",
              "Customer lifetime value tracking",
              "Budget allocation optimizers",
              "Campaign performance analyzers",
            ],
            image: "/images/hero/tools-and-calculators.png",
          },
        ]}
      />
      <ScarcityUrgency
        title="Limited Time Offer: $300 Off for First 10 Customers Only"
        description="To ensure personalized attention and maximize results, this offer is limited to the first 10 businesses and expires at the end of the month."
        spotsLeft={10}
        daysRemaining={14}
        iconSize={12}
        buttonLink={redirectUrl}
        ctaButtonText="🎟️ Get Your $300 Coupon Code"
        subtextForButtonCta="Only for the first 10 clients — claim before it expires!"
      />{" "}
      <SocialProof
        sectionTitle="Ecommerce Brands Trust Our Tracking Solution"
        sectionDescription="See how we've helped businesses just like yours restore tracking and scale their ad campaigns."
      />
      <ScarcityUrgency
        title="Only 10 Spots Available at $300 Off"
        description="Secure your spot before prices return to $1,500. This discount expires at the end of the month!"
        spotsLeft={10}
        daysRemaining={14}
        iconSize={12}
        buttonLink={redirectUrl}
        ctaButtonText="🎟️ Claim Your $300 Coupon Code Now"
        subtextForButtonCta="Only 10 spots available — get your coupon before it’s gone!"
      />
      <ObjectionHandling
        sectionTitle="Our 95% Accuracy Guarantee"
        guarantees={[
          {
            title: "100% Money Back Guarantee",
            description:
              "If we don't deliver 95% accurate conversion tracking within 3 days, you get a 100% refund – no questions asked.",
            image: "/images/hero/money-back.png",
          },
        ]}
      />{" "}
      <AlternativesSection
        heading="Your Options When Facing Meta Tracking Issues"
        subheading="Our service is ideal for ecommerce brands who:"
        values={[
          {
            number: "1",
            title: "Need fast results",
            description:
              "Get back on track in just 3 days with our rapid implementation",
          },
          {
            number: "2",
            title: "Demand accuracy",
            description:
              "Our 95% accuracy guarantee ensures reliable data for scaling",
          },
          {
            number: "3",
            title: "Want a turn-key solution",
            description:
              "We handle the complexities so you can focus on your business",
          },
          {
            number: "4",
            title: "Are in banned or restricted niches",
            description:
              "Our system works even if you've been banned or throttled",
          },
        ]}
        alternatives={[
          {
            title: "Do It Yourself",
            content:
              "A viable option if you have technical expertise and time to navigate Meta's complex tracking requirements and server-side implementations. Most business owners waste weeks trying before seeking professional help.",
          },
          {
            title: "Use Sketchy Third-Party Scripts",
            content:
              "Some solutions violate Meta's policies and put your ad account at risk of being banned. Our solution is 100% policy-compliant while still delivering accurate data.",
          },
          {
            title: "Stop Running Meta Ads",
            content:
              "Some businesses simply give up on Meta ads when facing tracking issues. This means missing out on one of the most effective marketing channels for ecommerce brands.",
          },
          {
            title: "Our 3-Day Solution",
            content:
              "We specialize exclusively in solving tracking issues for ecommerce brands. With our proven system, you'll have accurate tracking in just 3 days without the headaches, wasted time, or policy violations.",
          },
        ]}
      />{" "}
      <DetailedCTA
        heading="Claim Your $300 Off Today"
        subheading="Restore Your Meta Ads Tracking in Just 3 Days"
        listItems={[
          "See your ViewContent, AddToCart, Checkout & Purchase events again",
          "Get the data Meta needs to optimize your campaigns",
          "Make informed scaling decisions with accurate tracking",
          "Works for banned, blocked, or blacklisted niches",
          "95% accuracy guaranteed or your money back",
        ]}
        footerText="Limited to first 10 customers. Offer expires at the end of the month!"
        buttonText={`🎟️ Get My $300 Coupon Code`}
        buttonLink={redirectUrl}
      />
      <Container className="py-12">
        <TestimonialGrid upwork={true} />
      </Container>
      {/* Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-primary text-center font-bold">
              Claim Your $300 Coupon
            </DialogTitle>
          </DialogHeader>
          <CouponOptInForm redirectUrl={redirectUrl} />
        </DialogContent>
      </Dialog>
    </main>
  );
}
