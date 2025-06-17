"use client";

import TestimonialsCarousel2 from "@/components/for-freelancers/testimonials-carousal-2";
import DetailedCTA from "@/components/funnels/detailed-cta";
import DetailsCarousel from "@/components/funnels/details-carousal";
import ObjectionHandling from "@/components/funnels/objection-handling";
import ScarcityUrgency from "@/components/funnels/scarcity-urgency";
import SocialProof from "@/components/funnels/social-proof";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import TrackingTable from "@/components/global/tracking-table";
import AlternativesSection from "@/components/home/alternative-section";
import Hero from "@/components/home/hero";
import WhyChooseSection from "@/components/home/why-choose-us";
import { Button } from "@/components/ui/button";
import {
  BarChart2,
  CheckSquare,
  HeadphonesIcon,
  Target,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero
        eyebrow="Still flying blind on Ads?"
        heading={
          <h1 className="mx-auto text-center lg:mx-0 lg:text-left">
            Fix Broken Website Tracking in 7 days —{" "}
            <span className="text-primary"> or your money back </span>
          </h1>
        }
        subheading={
          <h4 className="text-muted-foreground mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            Our
            <span className="text-primary"> “See Every Sale” </span>
            setup gives eCommerce brands 95%+ accurate conversion data — so you
            can stop wasting ad spend, scale with confidence, and Stay Complient
            with GDPR & CCPA.
          </h4>
        }
        carousel={<TestimonialsCarousel2 />}
        benefits={[
          "ROAS 30% Increase",
          "100% Done For You",
          "GDPR & CCPA Compliant",
          "One-time setup cost",
          "Slace Effortlessly",
          "Get 95%+ Accuracy",
        ]}
        customCtaButton={
          <Button
            className="mx-auto flex w-fit max-w-4xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold lg:mx-0 lg:items-start lg:text-left"
            asChild
          >
            <Link href={"/services"}>
              <div>
                Ready to Scale Smarter?
                <span className="mt-2 block text-sm font-medium opacity-90">
                  Done-for-you tracking setup + growth tools. Just 5 Client
                  Every Month.
                </span>
              </div>
            </Link>
          </Button>
        }
        supportingComponent={<TrackingTable />}
      />
      <DetailsCarousel
        headerTitle="The Conversion Confidence Suite"
        headerDescription="A complete system designed to solve your tracking headaches, recover lost revenue, and supercharge your ROI."
        items={[
          {
            title: "Conversion Tracking Audit",
            description:
              "Identify gaps and implement advanced tracking solutions for 95% accuracy.",
            icon: <Zap />,
            benefits: [
              "Comprehensive analysis of your tracking setup",
              "Identify and fix data leaks",
              "Custom implementation plan for robust tracking",
              "Verification and testing for seamless performance",
            ],
            image: "/images/hero/tracking-audit.png",
          },
          {
            title: "Measurement Planning",
            description:
              "Develop a comprehensive strategy for your tracking setup to ensure accurate and actionable data.",
            icon: <Target />,
            benefits: [
              "Identify and define key metrics for tracking",
              "Plan the measurement strategy across platforms",
              "Set clear objectives for campaign tracking",
              "Ensure alignment with business goals and ROI objectives",
            ],
            image: "/images/hero/measurement-planning.png",
          },
          {
            title: "Server-Side Tracking Setup",
            description:
              "Implement Google Analytics 4, Google Tag Manager, Meta Pixel, and Conversion API for precise, server-side tracking.",
            icon: <BarChart2 />,
            benefits: [
              "Implement GA4 and GTM for precise tracking",
              "Set up Meta Pixel and Conversion API for server-side tracking",
              "Ensure accurate conversion tracking post-iOS 18 updates",
              "Test and verify for seamless data flow and accuracy",
            ],
            image: "/images/hero/unified-dashboard.png",
          },
          {
            title: "Real-Time Insights Dashboards",
            description:
              "Custom dashboards providing instant clarity on performance, ROAS, and campaign effectiveness.",
            icon: <BarChart2 />,
            benefits: [
              "Live performance metrics for ad campaigns",
              "Customizable KPI tracking and alerts",
              "Audience behavior analysis and segmentation",
              "Automated performance alerts for optimization",
            ],
            image: "/images/hero/real-time-dashboard.png",
          },
          // {
          //   title: "A single source of truth",
          //   description:
          //     "Seamlessly unify platforms like Google Analytics, Facebook Ads, and CRMs.",
          //   icon: BookOpen,
          //   benefits: [
          //     "Step-by-step integration of major platforms",
          //     "Custom API connections for unique tech stacks",
          //     "Optimization for streamlined data flow",
          //     "Training to maintain integrations seamlessly",
          //   ],
          //   image: "/images/hero/unified-dashboard.png",
          // },
          {
            title: "GDPR Cookie Consent CMP",
            description:
              "Ensure full GDPR, CCPA & ePrivacy compliance with a seamless Consent Management Platform (CMP).",
            icon: <CheckSquare />,
            benefits: [
              "Automated consent banner setup",
              "Customizable for your brand & legal needs",
              "Blocks non-compliant tracking until user approval",
              "Google Consent Version 2 implementation",
              "Fully compliant with GDPR, CCPA & ePrivacy regulations",
            ],
            image: "/images/hero/gdpr-cmp.png",
          },
          {
            title: "Priority Automation Support",
            description:
              "Tools, templates, and expert support to streamline workflows and automate processes.",
            icon: <HeadphonesIcon />,
            benefits: [
              "Personalized automation strategy",
              "Time-saving workflow automations",
              "Pre-built automation templates",
              "24/7 expert support for troubleshooting",
            ],
            image: "/images/hero/customer-support.png",
          },
        ]}
      />
      <ScarcityUrgency
        title="Limited to Only 5 Projects Per Month"
        description="To ensure personalized attention and maximize results, this offer is limited to 5 businesses Every Month."
        spotsLeft={5}
        daysRemaining={10}
        ctaButtonText="Get Accurate Conversion Data"
        buttonLink="/contact"
        iconSize={12}
      />{" "}
      <SocialProof
        sectionTitle="Our Clients Are Seeing Results – Will You Be Next?"
        sectionDescription="Here's how we've transformed other businesses like yours."
      />
      <ScarcityUrgency
        title="Limited to Only 5 Projects Per Month"
        description="To ensure personalized attention and maximize results, this offer is limited to 5 businesses Every Month."
        spotsLeft={5}
        daysRemaining={10}
        ctaButtonText="Stop Wasting Ad Budget Today"
        buttonLink="/contact"
        iconSize={12}
      />
      <DetailsCarousel
        headerTitle="Exclusive Bonuses for Early Action-Takers"
        headerDescription="Get over $1,200 in value with these exclusive bonuses."
        items={[
          {
            title: "E-commerce Conversion Checklist",
            description:
              "The ultimate checklist to maximize your online store's conversions.",
            icon: <CheckSquare />,
            price: "$500",
            benefits: [
              "300+ critical conversion checkpoints",
              "Insights from 15+ years of CRO experience",
              "Decrease customer acquisition costs",
              "Increase average order value and conversion rates",
            ],
            image: "/images/hero/ecommerce-conversion-checklist.png",
          },
          // {
          //   title: "Ad Efficiency Blueprint",
          //   description: "A step-by-step guide to optimize every ad dollar.",
          //   icon: FileText,
          //   price: "$800",
          //   benefits: [
          //     "Comprehensive analysis of your tracking setup",
          //     "Identify and fix data leaks",
          //     "Custom implementation plan for robust tracking",
          //     "Verification and testing for seamless performance",
          //   ],
          //   image: "/images/social-sharing.png",
          // },
          {
            title: "Advanced Tools & Calculators",
            description:
              "Pre-built tools & Calculators for effortless KPI tracking.",
            icon: <BarChart2 />,
            price: "$700",
            benefits: [
              "Live performance metrics for ad campaigns",
              "Customizable KPI tracking and alerts",
              "Audience behavior analysis and segmentation",
              "Automated performance alerts for optimization",
            ],
            image: "/images/hero/tools-and-calculators.png",
          },
        ]}
      />{" "}
      <WhyChooseSection
        heading="Why Work With Us?"
        subheading="We bridge the gap between your data insights and marketing strategy, delivering key metrics and actionable recommendations."
        eyebrow="What Sets Us Apart"
        value={[
          "A dedicated data team that understands marketing needs",
          "Proven frameworks to align business strategies with precise measurement",
          "Relieve yourself from data headaches and focus on scaling your business with sharp insights",
        ]}
        image="/images/hero/unified-dashboard.png"
      />{" "}
      <ObjectionHandling
        sectionTitle="Our Guarantees – Your Success is Risk-Free"
        guarantees={[
          // {
          //   title: "Double ROI Guarantee",
          //   description:
          //     "Double your return on ad spend in 90 days, or we work with you for free until you do.",
          //   icon: TrendingUp,
          // },
          {
            title: "30 Day Money Back Guarantee",
            description:
              "If the tracking is not 95% accurate in 30 days, we will give you all the money back.",
            image: "/images/hero/money-back.png",
          },
        ]}
      />{" "}
      <AlternativesSection
        heading="Other Options to Consider"
        subheading="Our service is ideal for you if you prioritize:"
        values={[
          {
            number: "1",
            title: "Tailored data solutions",
            description:
              "Customized to address your specific business requirements",
          },
          {
            number: "2",
            title: "Strategic insights",
            description:
              "Going beyond data to offer clear growth-driving steps",
          },
          {
            number: "3",
            title: "Premium service",
            description:
              "We handle the complexities so you can concentrate on strategy",
          },
          {
            number: "4",
            title: "Scalable partnerships",
            description: "We adapt as your data needs grow and evolve",
          },
        ]}
        alternatives={[
          {
            title: "In-house marketing team",
            content:
              "A great option if you have the expertise, resources, and time to build, manage, and refine a comprehensive data measurement system (data collection, storage, cleaning, and visualization).",
          },
          {
            title: "Pre-built tools",
            content:
              "Our solution is perfect for those who prefer focusing on marketing and growth rather than wrestling with data intricacies. We manage the entire data strategy and provide unbiased, actionable feedback on your next steps.",
          },
          {
            title: "Full-service agencies",
            content:
              "These agencies handle campaigns and creativity but often lack deep expertise in analytics. While their focus is broad, we specialize in crafting seamless data infrastructures and insightful dashboards tailored to your unique metrics, offering clarity and precise recommendations unmatched by generalist agencies.",
          },
          {
            title: "Freelancers",
            content:
              "Freelancers excel in one-off analytics tasks but may lack the strategic perspective to develop integrated, enterprise-level data systems aligned with your business goals. We prioritize understanding your model deeply, crafting bespoke data solutions, and maintaining an ongoing partnership that consistently provides actionable insights—not just sporadic projects.",
          },
        ]}
      />{" "}
      <SocialProof
        sectionTitle="Our Clients Are Seeing Results – Will You Be Next?"
        sectionDescription="Here's how we've transformed other businesses like yours."
        upwork={true}
      />
      <DetailedCTA
        heading="Fix Your Tracking, Maximize Your ROI"
        subheading="Act now to secure your spot and exclusive bonuses."
        listItems={[
          "Track 95% of conversions with accuracy",
          "Save 20+ hours per month",
          "Boost your ad spend ROI",
          "Get peace of mind with guaranteed results",
        ]}
        buttonText="Secure Your Spot Today!"
        buttonLink="/contact"
        footerText="Limited to 5 spots per month. Don't wait!"
      />
      <Footer />
    </main>
  );
}
