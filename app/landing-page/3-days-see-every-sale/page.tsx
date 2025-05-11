import React from "react";
import Navbar from "@/components/global/navbar";
import Hero from "@/components/landing-page/hero";
import ProblemAwareness from "@/components/landing-page/problem-awareness";
import OfferDetails from "@/components/landing-page/offer-detail-item";
import ScarcityUrgency from "@/components/landing-page/scarcity-urgency";
import SocialProof from "@/components/landing-page/social-proof";
import ObjectionHandling from "@/components/landing-page/objection-handling";
import DetailedCTA from "@/components/landing-page/detailed-cta";
import TestimonialsCarousel from "@/components/testimonial/testimonial-carousal";
import {
  BarChart2,
  CheckSquare,
  HeadphonesIcon,
  Target,
  Zap,
} from "lucide-react";
import WhyChooseSection from "@/components/home/why-choose-us";
import AlternativesSection from "@/components/home/alternative-section";
import { testimonials } from "@/data/testimonials";
import CaseStudy from "@/components/global/CaseStudy";
import caseStudies from "@/data/case-studies";

export default function HomePage() {
  return (
    <main>
      <Hero
        badgeText="WARNING: Domain Restricted? Cannot See Conversions?"
        headingText="$300 Off – 3-Day 'See Your Sales Again' Tracking Setup"
        subheadingText="Restore accurate tracking for AddToCart, InitiateCheckout, and Purchase events. Get your Meta algorithm the data it needs to optimize for better ROAS and conversions – all with a 95% accuracy guarantee or your money back."
        ctaButtonText="Claim Your $300 Off Today"
        ctaButtonLink="3-days-see-every-sale/contact"
        supportingButtonText="View Client Results"
        supportingButtonLink="#case-studies"
        youtubeEmbedId="9MGpL_AmEYM"
        supportingComponent={
          <TestimonialsCarousel className="mx-auto max-w-2xl" />
        }
      />

      {/* <CaseStudy client={caseStudies[1]} /> */}

      <ProblemAwareness
        headingText="The Hidden Costs of Restricted Domains & Lost Conversion Data"
        paragraphText="Without accurate funnel tracking, your Meta ads lack the data to optimize for conversions, resulting in wasted budget and poor ROAS."
        redPillPoints={[
          "Can't See AddToCart, Checkout & Purchase Events",
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
          "Outperform Competitors With Better Data",
        ]}
      />

      <OfferDetails
        headerTitle="3-Day 'See Your Sales Again' Tracking Setup"
        headerDescription="A complete system designed to solve your domain restriction issues, recover lost conversion data, and supercharge your Meta ads ROAS."
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
              "Compliant with Meta's latest policies",
            ],
            image: "/images/hero/tracking-aduit.png",
          },
          {
            title: "Looker Studio Ecommerce Report",
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
            title: "E-commerce Conversion Checklist",
            description:
              "Optimize your funnel with our proven checklist to boost conversions and ROAS.",
            icon: CheckSquare,
            benefits: [
              "300+ critical conversion checkpoints",
              "Insights from top converting stores",
              "Decrease customer acquisition costs",
              "Increase average order value and conversion rates",
            ],
            image: "/images/hero/ecommerce-conversion-checklist.png",
          },
          {
            title: "Advanced Tools & Calculators",
            description:
              "Access powerful tools to analyze and scale your ad campaigns with confidence.",
            icon: BarChart2,
            benefits: [
              "ROAS calculators and forecasting tools",
              "Budget allocation optimizers",
              "Campaign performance analyzers",
              "Audience insights tools",
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
        buttonText="Claim Your $300 Off Now"
        buttonLink="3-days-see-every-sale/contact"
        iconSize={12}
      />

      <SocialProof
        sectionTitle="Health & Wellness Businesses Trust Our Tracking Solution"
        sectionDescription="See how we've helped businesses just like yours restore tracking and scale their ad campaigns."
        testimonials={testimonials}
      />
      <ScarcityUrgency
        title="Only 10 Spots Available at $300 Off"
        description="Secure your spot before prices return to $1,500. This discount expires at the end of the month."
        spotsLeft={10}
        daysRemaining={14}
        buttonText="See Your Sales Again"
        buttonLink="3-days-see-every-sale/contact"
        iconSize={12}
      />
      <OfferDetails
        headerTitle="Total Value: $3,200 - Yours for Just $1,200"
        headerDescription="Here's everything included in your 3-Day 'See Your Sales Again' Tracking Setup."
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
              "Compliant with Meta's latest policies",
            ],
            image: "/images/hero/tracking-aduit.png",
          },
          {
            title: "Looker Studio Ecommerce Report",
            description:
              "Visualize your sales data with a custom, easy-to-read dashboard.",
            icon: BarChart2,
            price: "$500",
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
            price: "$500",
            benefits: [
              "Proper GA4 implementation and configuration",
              "Custom event tracking tailored to your business",
              "Cross-domain tracking if needed",
              "Integration with your Meta ads for complete data",
            ],
            image: "/images/hero/measurement-planning.png",
          },
          {
            title: "E-commerce Conversion Checklist",
            description: "Optimize your funnel with our proven checklist.",
            icon: CheckSquare,
            price: "$500",
            benefits: [
              "300+ critical conversion checkpoints",
              "Insights from top converting stores",
              "Decrease customer acquisition costs",
              "Increase average order value and conversion rates",
            ],
            image: "/images/hero/ecommerce-conversion-checklist.png",
          },
          {
            title: "Advanced Tools & Calculators",
            description:
              "Access powerful tools to analyze and scale your campaigns.",
            icon: BarChart2,
            price: "$700",
            benefits: [
              "ROAS calculators and forecasting tools",
              "Budget allocation optimizers",
              "Campaign performance analyzers",
              "Audience insights tools",
            ],
            image: "/images/hero/tools-and-calculators.png",
          },
        ]}
      />

      <WhyChooseSection
        heading="Why Choose Our Tracking Solution?"
        subheading="We specialize in helping health and wellness businesses restore their Meta ads tracking and scale with confidence."
        eyebrow="What Sets Us Apart"
        value={[
          "100% client satisfaction with proven ROAS improvements",
          "Expert team that understands Meta's policies and restrictions",
          "Advanced tracking methods that stay compliant and future-proof",
          "Rapid 3-day implementation to get you back on track fast",
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
        heading="Your Options When Facing Domain Restrictions"
        subheading="Our service is ideal for health and wellness businesses who:"
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
            title: "Value expertise",
            description:
              "Work with specialists in Meta ads tracking and compliance",
          },
        ]}
        alternatives={[
          {
            title: "Do It Yourself",
            content:
              "A viable option if you have technical expertise and time to navigate Meta's complex tracking requirements and server-side implementations. Most business owners waste weeks trying before seeking professional help.",
          },
          {
            title: "Hire a General Agency",
            content:
              "While agencies can help with ad creative and campaigns, most lack the specialized knowledge needed to solve domain restriction issues and implement proper tracking that remains compliant with Meta's policies.",
          },
          {
            title: "Stop Running Meta Ads",
            content:
              "Some businesses simply give up on Meta ads when facing tracking issues. This means missing out on one of the most effective marketing channels for health and wellness businesses.",
          },
          {
            title: "Our 3-Day Solution",
            content:
              "We specialize exclusively in solving tracking issues for health and wellness businesses. With our proven system, you'll have accurate tracking in just 3 days without the headaches, wasted time, or missed opportunities.",
          },
        ]}
      />

      <DetailedCTA
        heading="Claim Your $300 Off Today"
        subheading="Restore Your Meta Ads Tracking in Just 3 Days"
        listItems={[
          "See your AddToCart, Checkout & Purchase events again",
          "Get the data Meta needs to optimize your campaigns",
          "Make informed scaling decisions with accurate tracking",
          "Increase ROAS with our proven tracking system",
          "95% accuracy guaranteed or your money back",
        ]}
        buttonText="Claim Your $300 Off Now"
        buttonLink="3-days-see-every-sale/contact"
        footerText="Limited to first 10 customers. Offer expires at the end of the month!"
      />
    </main>
  );
}
