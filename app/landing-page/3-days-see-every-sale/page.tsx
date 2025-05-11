"use client";
import AlternativesSection from "@/components/home/alternative-section";
import WhyChooseSection from "@/components/home/why-choose-us";
import DetailedCTA from "@/components/landing-page/detailed-cta";
import Hero from "@/components/landing-page/hero";
import ObjectionHandling from "@/components/landing-page/objection-handling";
import OfferDetails from "@/components/landing-page/offer-detail-item";
import ProblemAwareness from "@/components/landing-page/problem-awareness";
import ScarcityUrgency from "@/components/landing-page/scarcity-urgency";
import SocialProof from "@/components/landing-page/social-proof";
import TestimonialsCarousel from "@/components/testimonial/testimonial-carousal";
import { testimonials } from "@/data/testimonials";
import {
  BarChart2,
  CheckSquare,
  HeadphonesIcon,
  Target,
  Zap,
} from "lucide-react";
import { useState } from "react";

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main>
      <Hero
        badgeText="WARNING: Missing Meta Conversion Data Costing You Sales?"
        headingText="3-Day “See Every Sale” Tracking Setup For Facebook's Data Sharing Restrictions"
        subheadingText="Fix Your Facebook's Data Sharing Restrictions and Restore 95%+
            Accurate Data for Facebook Ads. All done-for-you, in just 3 days,
            without violating Facebook's policies or getting flagged. Track
            every ecommerce event."
        supportingComponent={
          <TestimonialsCarousel className="mx-auto max-w-2xl" />
        }
        youtubeEmbedId="9MGpL_AmEYM"
        ctaButtonLink="https://buy.stripe.com/28odUW1U72AD87ubIK?prefilled_promo_code=300OFFRESTRICTEDDATA"
        supportingButtonText="View Client Results"
        supportingButtonLink="#case-studies"
        ctaButtonText="💰 Ready to reclaim your Meta tracking (and $300 off)?"
      />

      <ProblemAwareness
        headingText="The Hidden Costs of Missing Conversion Data"
        paragraphText="Without accurate funnel tracking, your Meta ads lack the data to optimize for conversions, resulting in wasted budget and poor ROAS."
        redPillPoints={[
          "Can't See Add to Cart, Checkout & Purchase Events",
          "Meta Algorithm Can't Optimize for Conversions",
          "Wasting Ad Budget on Poorly Targeted Audiences",
          "Unable to Scale Due to Missing Data",
          "Competitors With Tracking Are Outperforming You",
        ]}
        imageUrl="/images/hero/matrix.png"
        bluePillPoints={[
          "Restore 95%+ Accurate Conversion Tracking",
          "Give Meta the Data it Needs to Optimize",
          "Make Informed Scaling Decisions",
          "Stay Compliant With Meta's Policies",
          "Track 30% More Conversions Than Standard Setups",
        ]}
      />

      <OfferDetails
        headerTitle="3-Day 'See Every Sale' Tracking System"
        headerDescription="A complete system designed to fix Facebook's data sharing restrictions and restore 95%+ accurate data for every key event — all done-for-you in just 3 days."
        offerItems={[
          {
            title: "3-Day Tracking Implementation",
            description:
              "Restore full funnel visibility with a compliant, future-proof tracking system in just 3 days.",
            icon: Zap,
            benefits: [
              "Comprehensive audit of your current setup",
              "Custom tracking implementation for your specific needs",
              "Full recovery of middle and bottom funnel events",
              "Works for banned, blocked, or blacklisted niches",
            ],
            image: "/images/hero/tracking-aduit.png",
          },
          {
            title: "Looker Studio Ecommerce Dashboard",
            description:
              "Visualize your sales data with a custom, easy-to-read dashboard tailored for your business.",
            icon: BarChart2,
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
            icon: Target,
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
            icon: Target,
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
            icon: CheckSquare,
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
            icon: CheckSquare,
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
            icon: BarChart2,
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
            icon: HeadphonesIcon,
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
        buttonLink="https://buy.stripe.com/28odUW1U72AD87ubIK?prefilled_promo_code=300OFFRESTRICTEDDATA"
        buttonText={`🎟️ Claim Your $300 Coupon for 3-Day "See Every Sale" Tracking System `}
      />

      <SocialProof
        sectionTitle="Ecommerce Brands Trust Our Tracking Solution"
        sectionDescription="See how we've helped businesses just like yours restore tracking and scale their ad campaigns."
        testimonials={testimonials}
      />
      <ScarcityUrgency
        title="Only 10 Spots Available at $300 Off"
        description="Secure your spot before prices return to $1,500. This discount expires at the end of the month!"
        spotsLeft={10}
        daysRemaining={14}
        iconSize={12}
        buttonLink="https://buy.stripe.com/28odUW1U72AD87ubIK?prefilled_promo_code=300OFFRESTRICTEDDATA"
        buttonText={`💸 Claim Your 3-Day "See Every Sale" Tracking System Now.`}
      />
      <OfferDetails
        headerTitle="Total Value: $9,100 - Yours for Just $1,200"
        headerDescription="Here's everything included in your 3-Day 'See Every Sale' Tracking System."
        offerItems={[
          {
            title: "3-Day Tracking Implementation",
            description:
              "Restore your full funnel visibility with a compliant tracking system.",
            icon: Zap,
            price: "$1,500",
            benefits: [
              "Comprehensive audit of your current setup",
              "Custom tracking implementation",
              "Full recovery of middle and bottom funnel events",
              "Works for banned, blocked, or blacklisted niches",
            ],
            image: "/images/hero/tracking-aduit.png",
          },
          {
            title: "Looker Studio Ecommerce Dashboard",
            description:
              "Visualize your sales data with a custom, easy-to-read dashboard.",
            icon: BarChart2,
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
            icon: Target,
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
            icon: Target,
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
            icon: CheckSquare,
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
            icon: CheckSquare,
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
            icon: BarChart2,
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
      />

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
      />

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
      />

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
        buttonText={`🚀 Get Started With Your "See Every Sale" `}
        buttonLink="https://buy.stripe.com/28odUW1U72AD87ubIK?prefilled_promo_code=300OFFRESTRICTEDDATA"
      />
    </main>
  );
}
