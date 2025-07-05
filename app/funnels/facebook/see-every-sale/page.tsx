"use client";

import React from "react";
import { caseStudies } from "@/data/case-studies";
import {
  ArrowRight,
  BarChart2,
  CheckSquare,
  Phone,
  Settings,
  Target,
  TrendingUp,
} from "lucide-react";
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
import TrackingTable from "@/components/global/tracking-table";
import YoutubeEmbed from "@/components/global/youtube-embed";
import AlternativesSection from "@/components/home/alternative-section";
import Hero from "@/components/home/hero";
import TestimonialGrid from "@/components/testimonial/testimonial-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";

const ctaVariants = [
  {
    title: "🎁 Unlock $7,900 in Value — $300 Off Today Only",
    subtitle: "Only 10 brands qualify. When they’re gone, they’re gone.",
  },
  {
    title: "💰 Save $300 Instantly — Plus Get $7,600 in Revenue Tools Free",
    subtitle: "We’re giving this to just 10 eComm brands — before the timer hits zero.",
  },
  {
    title: "🧠 Smart Brands Claim This Fast: $300 OFF + $7,600 Toolkit",
    subtitle: "Proven to boost tracking accuracy & ROAS. Limited-time offer.",
  },
  {
    title: "⏳ Last Call: $300 OFF + $7,600 Scaling Bonus Pack",
    subtitle: "Only available for the first 10 brands that act. Don’t miss it.",
  },
  {
    title: "🚨 $300 Discount + $7,600 in Free Resources — Ends Soon",
    subtitle: "First come, first served. Setup your tracking the right way.",
  },
  {
    title: "🔥 $300 Discount + $7,600 in Free Resources — Ends Soon",
    subtitle: "First come, first served. Setup your tracking the right way.",
  },
  {
    title: "✅ Fix Your Tracking — and Save $300 Instantly",
    subtitle: "We’ll include $7,600 in battle-tested bonuses, free. Only 10 spots.",
  },
  {
    title: "🎟️ Secure $7,900 in Value — Setup + Bonuses for Just One Payment",
    subtitle: "Only 10 eComm brands get access. Don’t wait.",
  },
  {
    title: "🚀 Ready to Scale Smarter? Get $300 Off + $7,600 Free",
    subtitle: "Done-for-you tracking setup + growth tools. Just 10 brands allowed.",
  },
  {
    title: "💼 $300 Off + $7,600 in Expert-Level Tools — Yours Today",
    subtitle: "Only if you’re one of the first 10 to act.",
  },
  {
    title: "🔒 Lock In $7,900 in Value — Before It Disappears",
    subtitle: "$300 discount + $7,600 in bonuses. High demand — extremely limited.",
  },
];
export default function HomePage() {
  const ProcessFlow = () => {
    const steps = [
      {
        number: "1",
        title: "Onboarding Call",
        description:
          "During the onboarding call, we'll analyze your current setup, understand your goals, and create a custom measurement plan tailored to your business.",
        icon: <Phone className="h-6 w-6" />,
        color: "bg-primary",
      },
      {
        number: "2",
        title: "Tracking Setup",
        description:
          "Our team implements everything for you. No work required on your end - we handle the entire technical setup in just 7 days, so you get the 95% accurate results.",
        icon: <Settings className="h-6 w-6" />,
        color: "bg-secondary",
      },
      {
        number: "3",
        title: "Watch ROAS Increase",
        description:
          "Sit back and watch your Ads perform better with bulletproof tracking and crystal-clear attribution data and increase ROAS.",
        icon: <TrendingUp className="h-6 w-6" />,
        color: "bg-primary",
      },
    ];

    return (
      <Container className="from-primary/5 to-background grid min-h-screen place-content-center gap-6 bg-linear-to-b py-32">
        {/* Header */}
        <div className="mmx-to mb-8 space-y-8 text-center">
          <h1>
            How
            <span className="text-primary"> "See Every Sale" </span>
            Tracking Setup Work?
          </h1>
          <h4 className="text-muted-foreground">
            Super simple process - we do all the heavy lifting so you can focus on growing your
            business
          </h4>
        </div>
        <YoutubeEmbed embedId="tdQufJ-qadE" className="pb-12" /> {/* Process Steps */}
        <div className="flex flex-col items-stretch justify-center gap-8 lg:flex-row lg:gap-6">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              {/* Card */}
              <div className="mx-auto flex-1 lg:mx-0">
                <Card className="relative h-full overflow-hidden border-0 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <CardHeader className="relative pb-4">
                    {/* Step Number */}
                    <div className="mb-4 flex items-center justify-between">
                      <div className="text-muted-foreground/20 text-7xl select-none">
                        {step.number}
                      </div>
                    </div>

                    <CardTitle>{step.title}</CardTitle>
                  </CardHeader>

                  <CardContent className="relative pt-0">
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Arrow between cards */}
              {index < steps.length - 1 && (
                <>
                  {/* Desktop Arrow */}
                  <div className="hidden items-center justify-center px-4 lg:flex">
                    <ArrowRight className="text-primary h-6 w-6" />
                  </div>
                  {/* Mobile Arrow
                  <div className="lg:hidden flex items-center justify-center py-4">
                    <div className="bg-primary p-3 shadow rotate-90">
                      <ArrowRight className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div> */}
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </Container>
    );
  };

  return (
    <main>
      <Hero
        eyebrow="7 days Web Tracking Transformation"
        heading={
          <h1 className="mx-auto text-center lg:mx-0 lg:text-left">
            Fix Broken Website Tracking with 95% Accuracy —{" "}
            <span className="text-primary"> or your money back </span>
          </h1>
        }
        subheading={
          <h4 className="text-muted-foreground mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
            Our
            <span className="text-primary"> “See Every Sale” </span>
            setup gives eCommerce brands 95%+ accurate conversion data — so you can stop wasting ad
            spend, scale with confidence, and Stay Complient with GDPR & CCPA.
          </h4>
        }
        carousel={<TestimonialsCarousel2 />}
        benefits={[
          "ROAS 30% Increase",
          "GDPR & CCPA Compliant",
          "Completed in 7 days",
          "One-time setup cost",
          "Slace Effortlessly",
          "Get 95%+ Accuracy",
        ]}
        customCtaButton={
          <CouponOptInForm
            buttonElement={
              <Button className="mx-auto flex w-fit max-w-4xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold lg:mx-0 lg:items-start lg:text-left">
                <div>
                  {ctaVariants[6].title}
                  <span className="mt-2 block text-sm font-medium opacity-90">
                    {ctaVariants[6].subtitle}
                  </span>
                </div>
              </Button>
            }
          />
        }
        supportingComponent={<TrackingTable />}
      />
      <div className="min-h-screen w-full max-w-full overflow-hidden py-12">
        <Container className="flex max-w-4xl flex-col items-center space-y-6 pb-12 text-center">
          <h1>Trusted by 1,000+ eCommerce Stores </h1>
          <h4 className="text-muted-foreground max-w-3xl">
            See exactly how we restored tracking for ecommerce brands and the measurable impact on
            their ROAS, conversion rates, and scaling success.
          </h4>
        </Container>
        <CaseStudyCarousel caseStudies={caseStudies} />
      </div>
      <ProblemAwareness
        headingText="The Hidden Costs of Missing Conversion Data"
        paragraphText="Without accurate funnel tracking, your Meta ads lack the data to optimize for conversions, resulting in wasted budget and poor ROAS."
        bluePillPoints={[
          "Ads Can't Optimize Effectively for Conversions",
          "Wasting Ads Budget on Poorly Targeted Audiences",
          "Can't See Add to Cart & Purchase Events in Analytics",
          "Unable to Scale Due to Missing Crucial Data Reports",
          "Competitors With Better Tracking Outperform You",
        ]}
        imageUrl="/images/hero/matrix.png"
        redPillPoints={[
          "Restore 95%+ Accurate Conversion Tracking to Ads",
          "Give Meta the Data it Needs to Optimize Your Campaigns",
          "Make Informed Scaling Decisions for Your Business",
          "Stay Compliant With Meta's Policies and Regulations",
          "Track 40% More Conversions Than Typical Setups",
        ]}
      />{" "}
      <div className="from-primary/5 to-background bg-linear-to-b py-16">
        <AdSpendCalculator
          cta={true}
          customCtaButton={
            <CouponOptInForm
              buttonElement={
                <Button className="mx-auto flex w-fit max-w-4xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold">
                  <div>
                    {ctaVariants[5].title}
                    <span className="mt-2 block text-sm font-medium opacity-90">
                      {ctaVariants[5].subtitle}
                    </span>
                  </div>
                </Button>
              }
            />
          }
        />
      </div>
      <DetailsCarousel
        headerTitle="How See Every Sale Help You Fix Everything that's Wrong with your Tracking Setup?"
        headerDescription="A complete system designed to fix Broken Tracking and restore 95%+ accurate data for every key event — all done-for-you in just 7 days."
        items={[
          {
            title: "95% Accurate Ads Conversion Tracking",
            description:
              "Unlock 95%+ accurate conversion tracking across Google & Facebook Ads with advanced adstacking techniques.",
            icon: <Target />,
            benefits: [
              "95%+ accurate multi-platform conversion tracking",
              "Custom tracking setup for both Meta and Google Ads",
              "Adstacking strategies for holistic attribution",
              "Enhanced campaign optimization with unified data",
            ],
            image: "/images/hero/measurement-planning.png",
            customCtaButton: (
              <CouponOptInForm
                buttonElement={
                  <Button className="flex w-fit max-w-4xl cursor-pointer flex-col items-start p-6 text-left text-xl font-bold text-wrap whitespace-pre-wrap">
                    <span className="line-clamp-1">{ctaVariants[1].title}</span>
                    <span className="mt-2 line-clamp-1 block text-sm font-medium opacity-90">
                      {ctaVariants[1].subtitle}
                    </span>
                  </Button>
                }
              />
            ),
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
            image: "/images/hero/unified-dashboard.png",
            customCtaButton: (
              <CouponOptInForm
                buttonElement={
                  <Button className="flex w-fit max-w-4xl cursor-pointer flex-col items-start p-6 text-left text-xl font-bold text-wrap whitespace-pre-wrap">
                    <span className="line-clamp-1">{ctaVariants[0].title}</span>
                    <span className="mt-2 line-clamp-1 block text-sm font-medium opacity-90">
                      {ctaVariants[0].subtitle}
                    </span>
                  </Button>
                }
              />
            ),
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
            image: "/images/hero/gdpr-cmp.png",
            customCtaButton: (
              <CouponOptInForm
                buttonElement={
                  <Button className="flex w-fit max-w-4xl cursor-pointer flex-col items-start p-6 text-left text-xl font-bold text-wrap whitespace-pre-wrap">
                    <span className="line-clamp-1">{ctaVariants[2].title}</span>
                    <span className="mt-2 line-clamp-1 block text-sm font-medium opacity-90">
                      {ctaVariants[2].subtitle}
                    </span>
                  </Button>
                }
              />
            ),
          },
          {
            title: "Looker Studio eCommerce Dashboard",
            description:
              "Visualize your sales data with a custom, easy-to-read dashboard tailored for your business.",
            icon: <BarChart2 />,
            benefits: [
              "Custom dashboard for your specific KPIs",
              "Live performance metrics for ad campaigns",
              "Audience behavior analysis and segmentation",
              "Automated performance alerts for optimization",
            ],
            image: "/images/hero/real-time-dashboard.png",
            customCtaButton: (
              <CouponOptInForm
                buttonElement={
                  <Button className="flex w-fit max-w-4xl cursor-pointer flex-col items-start p-6 text-left text-xl font-bold text-wrap whitespace-pre-wrap">
                    <span className="line-clamp-1">{ctaVariants[3].title}</span>
                    <span className="mt-2 line-clamp-1 block text-sm font-medium opacity-90">
                      {ctaVariants[3].subtitle}
                    </span>
                  </Button>
                }
              />
            ),
          },

          {
            title: "UTM Builder & UTM Validator Tracking Toolkit",
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
            customCtaButton: (
              <CouponOptInForm
                buttonElement={
                  <Button className="flex w-fit max-w-4xl cursor-pointer flex-col items-start p-6 text-left text-xl font-bold text-wrap whitespace-pre-wrap">
                    <span className="line-clamp-1">{ctaVariants[4].title}</span>
                    <span className="mt-2 line-clamp-1 block text-sm font-medium opacity-90">
                      {ctaVariants[4].subtitle}
                    </span>
                  </Button>
                }
              />
            ),
          },
        ]}
      />
      <ProcessFlow />
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
        customButton={
          <CouponOptInForm
            buttonElement={
              <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary mx-auto flex w-fit max-w-5xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold">
                <div>
                  🚀 Ready to Scale Smarter? Get $300 Off + $7,600 Free
                  <span className="mt-2 block text-sm font-medium opacity-90">
                    Done-for-you tracking setup + growth tools. Just 10 brands allowed.
                  </span>
                </div>
              </Button>
            }
          />
        }
      />
      <ObjectionHandling
        guarantees={[
          {
            title: "100% Money Back Guarantee",
            description:
              "If we don't deliver 95% accurate conversion tracking within 7 days, you get a 100% refund – no questions asked.",
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
            description: "Get back on track in just 7 days with our rapid implementation",
          },
          {
            number: "2",
            title: "Demand accuracy",
            description: "Our 95% accuracy guarantee ensures reliable data for scaling",
          },
          {
            number: "3",
            title: "Want a turn-key solution",
            description: "We handle the complexities so you can focus on your business",
          },
          {
            number: "4",
            title: "Are in banned or restricted niches",
            description: "Our system works even if you've been banned or throttled",
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
              "We specialize exclusively in solving tracking issues for ecommerce brands. With our proven system, you'll have accurate tracking in just 7 days without the headaches, wasted time, or policy violations.",
          },
        ]}
      />{" "}
      <DetailedCTA
        heading="Claim Your $300 Off Today"
        subheading="Restore Your Meta Ads Tracking in Just 7 days"
        listItems={[
          "See your ViewContent, AddToCart, Checkout & Purchase events again",
          "Get the data Meta needs to optimize your campaigns",
          "Make informed scaling decisions with accurate tracking",
          "Works for banned, blocked, or blacklisted niches",
          "95% accuracy guaranteed or your money back",
        ]}
        footerText="Limited to first 10 customers. Offer expires at the end of the month!"
        customButton={
          <CouponOptInForm
            buttonElement={
              <Button className="mx-auto flex w-fit max-w-5xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold text-wrap whitespace-pre-wrap">
                💼 $300 Off + $7,600 in Expert-Level Tools — Yours Today
                <span className="mt-2 block text-sm font-medium opacity-90">
                  Only if you’re one of the first 10 to act.
                </span>
              </Button>
            }
          />
        }
      />
      <Container className="from-primary/5 to-background space-y-12 bg-linear-to-b py-24">
        <div className="mx-auto max-w-4xl space-y-6 pb-6 text-center">
          <h1>Join 300+ Happy Clients Who Fixed Their Tracking </h1>
          <h4 className="text-muted-foreground">
            See why leading ecommerce brands choose us to solve their Tracking nightmares and unlock
            consistent, scalable growth.
          </h4>
        </div>
      </Container>
      <TestimonialGrid upwork={true} />
      <ScarcityUrgency
        title="Limited Time Offer: $300 Off for First 10 Customers Only"
        description="To ensure personalized attention and maximize results, this offer is limited to the first 10 businesses and expires at the end of the month."
        spotsLeft={10}
        daysRemaining={14}
        iconSize={12}
        customButton={
          <CouponOptInForm
            buttonElement={
              <Button className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary mx-auto flex w-fit max-w-5xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold">
                <div>
                  ✅ Fix Your Tracking — and Save $300 Instantly
                  <span className="mt-2 block text-sm font-medium opacity-90">
                    We’ll include $7,600 in battle-tested bonuses, free. Only 10 spots.
                  </span>
                </div>
              </Button>
            }
          />
        }
      />{" "}
    </main>
  );
}
