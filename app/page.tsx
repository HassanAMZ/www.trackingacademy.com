import Navbar from "@/components/global/navbar";
import AlternativesSection from "@/components/home/alternative-section";
import WhyChooseSection from "@/components/home/why-choose-us";
import CaseStudyCarousel from "@/components/landing-page/case-study-carousel";
import DetailedCTA from "@/components/landing-page/detailed-cta";
import Hero from "@/components/landing-page/hero";
import ObjectionHandling from "@/components/landing-page/objection-handling";
import OfferDetails from "@/components/landing-page/offer-detail-item";
import ProblemAwareness from "@/components/landing-page/problem-awareness";
import ScarcityUrgency from "@/components/landing-page/scarcity-urgency";
import SocialProof from "@/components/landing-page/social-proof";
import TestimonialsCarousel from "@/components/testimonial/testimonial-carousal";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import {
  BarChart2,
  CheckSquare,
  HeadphonesIcon,
  Target,
  Zap,
} from "lucide-react";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero
        // badgeText="WARNING: What Every Business Owner Must Know"
        headingText="95% Accurate Tracking or Your Money Back – Scale Your Ads with Confidence!"
        subheadingText="Discover how our server-side tracking system recovers 30%+ of your 'invisible' conversions, slashes wasted ad spend by 20%+, and gives you the accurate data you need to scale profitably - even with iOS 18 and strict privacy laws."
        ctaButtonText="👉 Eliminate My Tracking Blindspot"
        ctaButtonLink="/contact"
        subtextForButtonCta="Recovers 30%+ of your 'invisible' conversions, slashes wasted ad spend by 20%+."
        supportingButtonText="View Client Results"
        supportingButtonLink="#case-studies"
        youtubeEmbedId="9MGpL_AmEYM"
        supportingComponent={<CaseStudyCarousel caseStudies={caseStudies} />}
      />{" "}
      {/* <CaseStudy client={caseStudies[1]} /> */}{" "}
      <ProblemAwareness
        headingText="The Hidden Costs of Inefficient Analytics and Outdated Systems"
        paragraphText="Manual processes and chaotic data overwhelm teams, draining time and money while delivering few actionable insights."
        bluePillPoints={[
          "Up to 30% of Conversions Go Untracked",
          "Ad Costs Rising – But ROAS is Dropping",
          "Chaotic Data Makes Scaling Impossible",
          "Your Competitors Are Tracking",
          "You're Spending More & Earning Less",
        ]}
        imageUrl="/images/hero/matrix.png"
        redPillPoints={[
          "Track 95%+ of Conversions Accurately",
          "Increase ROAS Without Spending More",
          "Get Data That Makes Scaling Easy",
          "Stay Compliant & Profitable",
          "Turn Every Dollar into More Revenue",
        ]}
      />{" "}
      {/* <DreamOutcome
        heading="Imagine Effortless Growth"
        subheading="Our System Ensures Precision, Saves Time, and Maximizes ROI"
        dreamOutcomeList={[
          {
            icon: "TrendingUp",
            text: "Double Your ROI Effortlessly",
            image: "/images/hero/003.png",
            description:
              "Maximize your marketing efficiency and ensure every dollar works harder for you.",
          },
          {
            icon: "Lightbulb",
            text: "Achieve Stress-Free Scaling",
            image: "/images/hero/001.png",
            description:
              "Expand your business with ease and confidence, free from operational headaches.",
          },
          {
            icon: "Target",
            text: "Reclaim 20+ Hours Monthly",
            image: "/images/hero/002.png",
            description:
              "Automate repetitive tasks and reclaim your time for high-impact activities.",
          },
        ]}
      /> */}{" "}
      <OfferDetails
        headerTitle="The Conversion Confidence Suite"
        headerDescription="A complete system designed to solve your tracking headaches, recover lost revenue, and supercharge your ROI."
        offerItems={[
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
      <OfferDetails
        headerTitle="Exclusive Bonuses for Early Action-Takers"
        headerDescription="Get over $1,200 in value with these exclusive bonuses."
        offerItems={[
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
      <Container>
        <TestimonialGrid upwork={true} />
      </Container>
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
    </main>
  );
}
