"use client";

import CaseStudyCarousel from "@/components/case-study/case-study-carousel";
import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import CouponOptInForm from "@/components/funnels/coupon-optin";
import DetailedCTA from "@/components/funnels/detailed-cta";
import ObjectionHandling from "@/components/funnels/objection-handling";
import OfferDetails from "@/components/funnels/offer-detail-item";
import ProblemAwareness from "@/components/funnels/problem-awareness";
import { ProcessSteps } from "@/components/funnels/process-steps";
import ScarcityUrgency from "@/components/funnels/scarcity-urgency";
import SocialProof from "@/components/funnels/social-proof";
import AdSpendCalculator from "@/components/global/ad-spend-calculator";
import MarketingFeatures from "@/components/global/marketing-features";
import TrackingTable from "@/components/global/tracking-table";
import AlternativesSection from "@/components/home/alternative-section";
import Hero from "@/components/home/hero";
import WhyChooseSection from "@/components/home/why-choose-us";
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
import {
  ArrowUpRight,
  BarChart2,
  BarChart3,
  CheckSquare,
  Code,
  Database,
  HeadphonesIcon,
  Quote,
  Share2,
  ShieldIcon,
  Target,
  Zap,
} from "lucide-react";
import Image from "next/image"; // Make sure this is imported at the top

import { usePathname } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathname = usePathname();
  const service = services.find((s) => s.name === "Basic Tracking Audit");
  const redirectUrl = `${pathname.replace(/\/$/, "")}/payment?product_id=${service?.product_id}&price_id=${service?.price_id}`;

  return (
    <main>
      <Hero
        eyebrow="Still flying blind on Meta ads?"
        heading={
          <h1 className="text-center lg:text-left mx-auto lg:mx-0">
            Fix Broken Facebook Tracking in 3 Days —{" "}
            <span className="text-primary"> or Your Money Back </span>
          </h1>
        }
        subheading={
          <h4 className="mx-auto lg:mx-0 text-muted-foreground max-w-3xl text-center lg:text-left">
            Our
            <span className="text-primary"> “See Every Sale” </span>
            Setup gives eCommerce brands 95%+ accurate conversion data — so you
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
        supportingComponent={<AdSpendCalculator cta={false} />}
      />
      <div className="w-full max-w-full overflow-hidden py-12">
        <CaseStudyCarousel caseStudies={caseStudies} />
      </div>
      <MarketingFeatures />
      <ProblemAwareness
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
      />{" "}
      <ProcessSteps />{" "}
      <div className="py-24">
        <AdSpendCalculator />
      </div>
      <OfferDetails
        headerTitle="3-Day 'See Every Sale' Tracking System"
        headerDescription="A complete system designed to fix Facebook's data sharing restrictions and restore 95%+ accurate data for every key event — all done-for-you in just 3 days."
        offerItems={[
          {
            title: "3-Day Tracking Implementation",
            description:
              "Restore full funnel visibility with a compliant, future-proof tracking system in just 3 days.",
            icon: <Zap />,
            benefits: [
              "Comprehensive audit of your current setup",
              "Custom tracking implementation for your specific needs",
              "Full recovery of middle and bottom funnel events",
              "Works for banned, blocked, or blacklisted niches",
            ],
            image: "/images/hero/tracking-audit.png",
          },
          {
            title: "Looker Studio Ecommerce Dashboard",
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
          {
            title: "Premium Support",
            description:
              "Get expert help with implementation and ongoing assistance to ensure your tracking stays accurate.",
            icon: <HeadphonesIcon />,
            benefits: [
              "Dedicated support for implementation",
              "Training on using your new tracking setup",
              "Troubleshooting assistance",
              "Ongoing optimization recommendations",
            ],
            image: "/images/hero/customer-support.png",
          },
        ]}
      />
      <ScarcityUrgency
        title="Limited Time Offer: $300 Off for First 10 Customers Only"
        description="To ensure personalized attention and maximize results, this offer is limited to the first 10 businesses and expires at the end of the month."
        spotsLeft={10}
        daysRemaining={14}
        iconSize={12}
        buttonLink="see-every-sale/book-a-meeting"
        ctaButtonText="🚀 Start Scaling with a Free Strategy Call"
        subtextForButtonCta="Claim $300 off for the first 10 clients — offer expires this month!"
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
        buttonLink="see-every-sale/book-a-meeting"
        ctaButtonText="🎯 Get Your Free Ad Tracking Consultation"
        subtextForButtonCta="Secure $300 off and 95% accuracy — only for the first 10 this month!"
      />
      <OfferDetails
        headerTitle="Total Value: $9,100 - Yours for Just $1,200"
        headerDescription="Here's everything included in your 3-Day 'See Every Sale' Tracking System."
        offerItems={[
          {
            title: "3-Day Tracking Implementation",
            description:
              "Restore your full funnel visibility with a compliant tracking system.",
            icon: <Zap />,
            price: "$1,500",
            benefits: [
              "Comprehensive audit of your current setup",
              "Custom tracking implementation",
              "Full recovery of middle and bottom funnel events",
              "Works for banned, blocked, or blacklisted niches",
            ],
            image: "/images/hero/tracking-audit.png",
          },
          {
            title: "Looker Studio Ecommerce Dashboard",
            description:
              "Visualize your sales data with a custom, easy-to-read dashboard.",
            icon: <BarChart2 />,
            price: "$2,000",
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
              "Ensure precise Google Analytics 4 tracking for reliable data.",
            icon: <Target />,
            price: "$1,200",
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
              "Implement accurate Google Ads conversion tracking for maximum PPC performance.",
            icon: <Target />,
            price: "$1,200",
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
            price: "$1,200",
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
            description: "Optimize your funnel with our proven checklist.",
            icon: <CheckSquare />,
            price: "$1,500",
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
              "Access powerful tools to analyze and scale your campaigns.",
            icon: <BarChart2 />,
            price: "$500",
            benefits: [
              "ROAS calculators and forecasting tools",
              "Customer lifetime value tracking",
              "Budget allocation optimizers",
              "Campaign performance analyzers",
            ],
            image: "/images/hero/tools-and-calculators.png",
          },
        ]}
      />{" "}
      <WhyChooseSection
        heading="Why Choose Our Tracking Solution?"
        subheading="We specialize in helping ecommerce brands restore their Meta ads tracking and scale with confidence."
        eyebrow="What Sets Us Apart"
        value={[
          "100% client satisfaction with proven ROAS improvements",
          "Policy-safe approach that doesn't violate Meta's guidelines",
          "Works for banned, blocked, or blacklisted niches",
          "Future-proofed against Apple & browser tracking restrictions",
          "30% more conversion tracking than standard Meta setups",
        ]}
        image="/images/hero/unified-dashboard.png"
      />{" "}
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
        buttonText={`📅 Book Your Free Strategy Session Today`}
        buttonLink="see-every-sale/book-a-meeting"
      />
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
