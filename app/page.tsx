import React from "react";
import Navbar from "@/components/global/navbar";
import Hero from "@/components/landing-page/hero";
import ProblemAwareness from "@/components/landing-page/problem-awareness";
import DreamOutcome from "@/components/landing-page/dream-outcome";
import OfferDetails from "@/components/landing-page/offer-detail-item";
import ScarcityUrgency from "@/components/landing-page/scarcity-urgency";
import SocialProof from "@/components/landing-page/social-proof";
import Bonuses from "@/components/landing-page/bonuses";
import ObjectionHandling from "@/components/landing-page/objection-handling";
import DetailedCTA from "@/components/landing-page/detailed-cta";
import TestimonialsCarousel from "@/components/offers/offer-002/testimonial-carousal";
import {
  Activity,
  ArrowUpRight,
  BarChart2,
  BookOpen,
  Clock,
  FileText,
  HeadphonesIcon,
  Lightbulb,
  Target,
  TrendingUp,
  Zap,
  Shield,
  CheckSquare,
} from "lucide-react";
import WhyChooseSection from "@/components/home/why-choose-us";
import AlternativesSection from "@/components/home/alternative-section";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <Hero
        badgeText="Stop Losing Revenue"
        headingText="Stop Losing 50% of Your Ad Spend – Track 95% of Conversions Accurately Post-iOS 18!"
        subheadingText="Our Done-for-You Server-Side Tracking System Helps You Recover Lost Revenue, Track Conversions with 95% Accuracy, and Effortlessly Boost ROI – Guaranteed."
        ctaButtonText="Book an Introduction Call"
        ctaButtonLink="/contact"
        supportingButtonText="Check Case Studies"
        supportingButtonLink="#case-studies"
        youtubeEmbedId="9MGpL_AmEYM"
        supportingComponent={
          <TestimonialsCarousel className="mx-auto max-w-2xl" />
        }
      />
      <ProblemAwareness
        headingText="The Hidden Costs of Inefficient Analytics and Outdated Systems"
        paragraphText="Manual processes and chaotic data overwhelm teams, draining time and money while delivering few actionable insights."
        redPillPoints={[
          "Weak Analytics Limit Growth",
          "Manual Tasks Drain Resources ",
          "Lack of Clear Insights",
          "Inability to Optimize Campaigns",
          "Revenue Loss ",
        ]}
        imageUrl="/images/hero/matrix.png"
        bluePillPoints={[
          "Maximize Return on Ads Spent",
          "Automated Tracking Workflow",
          "Seamless Growth ",
          "Guaranteed ROI Boost ",
          "Data-Driven Decisions",
        ]}
      />

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
      /> */}

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
      />

      <OfferDetails
        headerTitle="The Conversion Confidence Suite"
        headerDescription="A complete system designed to solve your tracking headaches, recover lost revenue, and supercharge your ROI."
        offerItems={[
          {
            title: "Conversion Tracking Audit",
            description:
              "Identify gaps and implement advanced tracking solutions for 95% accuracy.",
            icon: Zap,
            benefits: [
              "Comprehensive analysis of your tracking setup",
              "Identify and fix data leaks",
              "Custom implementation plan for robust tracking",
              "Verification and testing for seamless performance",
            ],
            image: "/images/hero/tracking-aduit.png",
          },

          {
            title: "Measurement Planning",
            description:
              "Develop a comprehensive strategy for your tracking setup to ensure accurate and actionable data.",
            icon: Target,
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
            icon: BarChart2,
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
            icon: BarChart2,
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
            title: "Priority Automation Support",
            description:
              "Tools, templates, and expert support to streamline workflows and automate processes.",
            icon: HeadphonesIcon,
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
        buttonText="Book an Introduction Call"
        buttonLink="/contact"
        iconSize={12}
      />

      <SocialProof
        sectionTitle="Our Clients Are Seeing Results – Will You Be Next?"
        sectionDescription="Here’s how we’ve transformed other businesses like yours."
        testimonials={[
          {
            quote:
              "Shahzada's work was very well-done, and he supplied a full report of the changes he made, which was impressive and above and beyond what I expected. I do think my request was a bit outside of his usual expertise and I wish we had taken some more time to clarify the project, but otherwise I'm very happy with the outcome.",
            author: "Jacob Monash",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Ali is one of the best freelancers I've worked with, his conscientiousness to get the job complete is exceptional. Thank you for your help and I hope to work again in the future, Chris.",
            author: "Chris Lister",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "He is very good in fixing any Google Tracking Code issues you have, we hired him twice and we will hire him again when we need more help. Thanks",
            author: "Hayam",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "I can't say enough good things about Shahzada. I've worked with him on a few projects, including getting up GA and also implementing custom google tags and setting up our GTM. Truthfully, some of the nuances of our projects were completely over my head, but he understood them completely and was able to execute everything smoothly, and quickly. Would 10000% recommend working with Shahzada",
            author: "Libie Motchan",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "It was great to work with him, thank you for your fast work.",
            author: "David",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Hassan may take some time to respond, but it is always within 24 hours, which is reasonable. I appreciate that he thoroughly documents his processes and performs quality assurance checks, ensuring clarity and reliability. His explanations of technical concepts are easy to understand, which is a significant advantage. Additionally, the IT team has expressed positive feedback about his work.",
            author: "Winston",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Hassan was an absolute pleasure to work with! His expertise in setting up Google Tag Manager was clear from the start, and he delivered an incredible setup that exceeded our expectations. He listened closely to our needs and implemented exactly what we were looking for. Hassan’s knowledge, professionalism, and commitment to getting the job done right made the whole process smooth and efficient. Highly recommended for anyone needing GTM expertise or analytics support!",
            author: "Nick Ahrens",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Hassan resolved a complex GTM issue in just one hour, after I had spent nearly a month working with Google Support with no success. His expertise is exceptional, and I highly recommend his services!",
            author: "Luis Boani",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "One of the best freelancers to collaborate with. Referred to others already- knows everything about tracking & attribution, works fast and delivers ahead of schedule.Solved things others took way more time for- and fixed problems instantaneously. Amazing work, Shahzada!!",
            author: "Julian Grimme",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "This guy is one of the best.. I came back 2 years later and he's still. Amazing. Can't wait to work with him again",
            author: "Derrick Kityo",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shahzada was excellent in delivering our work.He took the time to write detailed guides, amended work towards our requirements, and very patient in natute. I would definitely recommend!",
            author: "James Hague",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "What an absolute pro! Hassan understood exactly what my issue was. Something that for me, was so complicated. He made sense of what was needed, confidently went forward and solved my tracking issues in quickly and efficiently. Not only did he do the job well, but he provided me with a very comprehensive document so that I understand the work he did going forward. I feel like I found the best on Upwork.",
            author: "George Boyd",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "I had the pleasure of working with Shahzada on resolving some complex Shopify, Google Tag Manager, and Google Analytics tracking issues, and I couldn't be more satisfied with the outcome. Despite the significant time difference, Shahzada was very responsive when addressing every question and concern I had. His patience and expertise were evident throughout the process. Shahzada provided a clear and detailed plan, meticulously documented all changes, and executed the tracking setup with precision. His deep knowledge in setting up and debugging tracking systems ensured everything was handled flawlessly. I highly recommend Shahzada for anyone in need of expert consultancy in these areas. His professionalism and efficiency make him a great choice.",
            author: "Michael Quinn",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shahzada is by far the most comprehensive, transparent and skilled analytics expert Ive worked with (and I've used many over the years). He managed to save me money by understanding the problem and doing such an efficient job. I couldn't recommend high any higher.",
            author: "James Wilkinson",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "He is an expert in GTM and GA. Very easy communication. Reliable. We are still working with him",
            author: "Shawn Raj",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "This is my second time working with Shahzada. He is absolutely incredible - he made a process that should have been quite complicated and daunting completely painless. He is brilliant and I would trust him with any technical project!",
            author: "Libie Motchan",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Awesome work. Very professional and efficient. 100% recommend.",
            author: "Matthieu Chauveau",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shahzada's knowledge of everything Google Tag manager is at a very advanced level. He is also easy to communicate with. I'd work with him again.",
            author: "Kiran Kumar and GV Team",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote: "Great experience overall.",
            author: "Chukwudi",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shazada was very patient and open for any questions. This issue was resolved extremely fast and he provided a dashboard to follow along all changed that were made. Exceptional service. Thank you very much.",
            author: "Daniel Gruber",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote: "Great Work, thanks again and will be back",
            author: "Figment Homes",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shahzada stands out for his exceptional professionalism and responsiveness. He consistently delivers results. 10/10 NPS from our side.",
            author: "Peter Selekar",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shahzada is highly professional, very responsive, and gets things done. Highly recommended and we'll keep working with him.",
            author: " Peter Selekar",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Shahzada finished his job with professional skill & prompt action, look forward to work with him in the future.",
            author: "Steven Leong",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
          {
            quote:
              "Thanks for your help! Very responsive and resourceful to handle bugs and issues with our tracking systems for advertising.",
            author: "Bryce Evans",
            role: "Business Owner",
            image: "/images/social-sharing.png",
          },
        ]}
        stats={[
          { label: "Average ROI Increase", value: "60%", icon: ArrowUpRight },
          {
            label: "Time Saved Monthly",
            value: "20+ hours",
            icon: Clock,
          },
          { label: "Client Satisfaction", value: "98%", icon: TrendingUp },
        ]}
        resultsTitle="The Results Speak for Themselves"
      />
      <ScarcityUrgency
        title="Limited to Only 5 Projects Per Month"
        description="To ensure personalized attention and maximize results, this offer is limited to 5 businesses Every Month."
        spotsLeft={5}
        daysRemaining={10}
        buttonText="Book an Introduction Call"
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
              "The ultimate checklist to maximize your online store’s conversions.",
            icon: CheckSquare,
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
            icon: BarChart2,
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
      />

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
      />

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
        footerText="Limited to 5 spots per month. Don’t wait!"
      />
    </main>
  );
}
