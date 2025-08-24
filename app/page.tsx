import { AvatarGroup, AvatarGroupTooltip } from "@/components/animate-ui/avatar-group";
import CaseStudyFeaturedVideo from "@/components/case-study/case-study-featured-video";
import DetailedCTA from "@/components/funnels/detailed-cta";
import DetailsCarousel from "@/components/funnels/details-carousal";
import SocialProof from "@/components/funnels/social-proof";
import Footer from "@/components/global/footer";
import Navbar from "@/components/global/navbar";
import AlternativesSection from "@/components/home/alternative-section";
import CaseStudyImages from "@/components/home/case-study-images";
import FeatureGridWithModal from "@/components/home/feature-grid-with-modal";
import FeatureGridWithModal2 from "@/components/home/feature-grid-with-modal-2";
import WhyChooseSection from "@/components/home/why-choose-us";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { GlowEffect } from "@/components/ui/glow-effect";
import { caseStudies } from "@/data/case-studies";
import {
  ActivitySquare,
  BarChart2,
  CheckSquare,
  Cookie,
  FileText,
  Link2,
  Network,
  PhoneCall,
  ShieldAlert,
  Star,
  TerminalSquare,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  const contactLink = (issue: string) => `/contact?issue=${encodeURIComponent(issue)}`;

  return (
    <main>
      <Navbar />
      <div className="relative overflow-hidden">
        <Container className="grid gap-4 py-6 sm:py-12">
          <div className="relative mx-auto grid max-w-5xl place-content-center gap-6 md:gap-8">
            <Badge variant="outline" className="mx-auto w-fit">
              For Marketing Agencies & Clients
            </Badge>

            <div className="relative">
              <h1 className="relative z-10 mx-auto text-center italic">
                Track Every Lead & Purchase for{" "}
                <span className="text-primary underline">Health & Wellness Business</span>
              </h1>
            </div>
            <p className="mx-auto max-w-4xl text-center">
              Data Restrictions, iOS updates, and ad blockers block up to 50% of your conversions.
              We restore up to 95% accurate tracking, cuts customer acquisition costs by 30%, and
              shows you exactly which ads drive revenue.
            </p>
            <div className="relative mx-auto flex flex-col gap-4 md:flex-row">
              <GlowEffect />

              <Button size="lg" asChild className="relative mx-auto w-fit py-2 text-center">
                <Link href={"/case-study"}>
                  See How We Fix Tracking for Businesses Similar to Yours
                </Link>
              </Button>
            </div>
            <div className="mx-auto flex flex-col items-center gap-2">
              <AvatarGroup>
                {caseStudies
                  .filter((study) =>
                    [
                      "northridgeaddiction",
                      "shepherd",
                      "saneofrance",
                      "emiratesadvisory",
                      "shakethatweight",
                      "vision4kids",
                      "zenon",
                      "superperformancereview",
                    ].includes(study.id),
                  )
                  .map((study) => (
                    <Link href={`/case-study/${study.id}`} key={study.id}>
                      <Avatar className="border-2 border-primary bg-background">
                        <AvatarImage
                          src={study.testimonial.image}
                          alt={`@${study.testimonial.author}`}
                        />
                        <AvatarFallback>{study.testimonial.author[0]}</AvatarFallback>
                        <AvatarGroupTooltip>
                          <p>{study.testimonial.author}</p>
                        </AvatarGroupTooltip>
                      </Avatar>
                    </Link>
                  ))}
              </AvatarGroup>
              <div className="flex flex-col items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <h4 className="text-sm text-muted-foreground">4.9 from 300+ reviews</h4>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <CaseStudyImages caseStudies={caseStudies} direction="right" speed="fast" />
      <Container className="sm:pt-10">
        <CaseStudyFeaturedVideo
          caseStudy={caseStudies[0]}
          verticalVideo={caseStudies[0].embedId?.muxVertical ?? false}
          darkMode={true}
        />
      </Container>
      <Container className="sm:py-10">
        <FeatureGridWithModal
          heading="8-Reasons Why Tracking Isn’t Working for Your Health & Wellness Business"
          subheading="If your Meta pixel, Ga4, Gads shows fewer Conversions than your CRM – it's not just you. Data sharing restrictions, blockers, iOS/ITP, and domain-level filters quietly break attribution in healthcare niches."
          items={[
            {
              title: "Meta Data Sharing Restrictions",
              description:
                "80% of health & wellness advertisers face stricter data signals and throttled events due to Meta's 2025 restrictions. Healthcare and other 'sensitive' categories face stricter signals. Standard events (Lead, Purchase) can be throttled or filtered, starving the algorithm and hiding real conversions.",
              image: "/images/supporting/data-sharing-restrictions.png",
              icon: <ShieldAlert />,

              ctaText: "Fix my Data Sharing Restrictions",
              ctaLink: "/offers/data-sharing-restriction?issue=Data+Sharing+Restrictions",
              ctaSubtitle: "Get a compliance-first event plan that still optimizes.",
            },
            {
              title: "iOS ATT + Safari ITP Kill Client‑Side Tracking",
              description:
                "96% of US iOS users opt out of tracking, causing major signal loss for businesses reliant on client-side pixels. Apple limits third‑party cookies and link decoration. Client‑side pixels drop 20–40% of signals on iOS/Safari, breaking attribution windows and audience learning.",
              image: "/images/supporting/ios-intellegent-tracking-prevention.png",
              icon: <ActivitySquare />,
              ctaText: "Fix my iOS/ITP Loss",
              ctaLink: contactLink("iOS/ITP Loss"),
              ctaSubtitle: "Server‑side conversion paths that survive iOS.",
            },
            {
              title: "Ad Blockers & Privacy Tools Strip Events",
              description:
                "71% of users block ads for faster browsing, stripping events and causing data incompleteness for businesses. Browser extensions and network‑level blockers remove pixel scripts entirely. Your media manager shows half the truth; budgets get cut based on missing data.",
              image: "/images/supporting/adblockers.png",
              icon: <ShieldAlert />,

              ctaText: "Fix my Ad Blocker Loss",
              ctaLink: contactLink("Ad Blocker Loss"),
              ctaSubtitle: "Recover events that never load client‑side.",
            },
            {
              title: "CAPI Misconfiguration & Event Dedup Issues",
              description:
                "50% of events can be duplicated without proper IDs, inflating metrics for misconfigured CAPI setups. Running pixel + CAPI without proper event IDs creates duplicates or, worse, drops deduped conversions. Signals conflict, optimization stalls.",
              image: "/images/supporting/deduplication-error.png",
              icon: <Network />,

              ctaText: "Fix my CAPI Setup",
              ctaLink: contactLink("CAPI Misconfiguration"),
              ctaSubtitle: "Clean, deduped server events that actually count.",
            },
            {
              title: "Missing/Fragile Data Layer on Custom Sites",
              description:
                "50% of custom sites (e.g., Next.js/React) lack stable data layers, breaking events on updates. Custom stacks (Next.js/Laravel/React) often lack a stable dataLayer. Engineers ship pages; events break on redesigns, A/B tests, or new forms.",
              image: "/images/supporting/datalayer.png",
              icon: <TerminalSquare />,

              ctaText: "Fix my Data Layer",
              ctaLink: contactLink("Data Layer Issues"),
              ctaSubtitle: "A durable event map for your entire funnel.",
            },
            {
              title: "Cross‑Domain Journeys Break Attribution",
              description:
                "40% of conversions are missed in cross-domain journeys without proper linking. Patients hop from ads → site → booking app → payment. Without first‑party routing and linker params, sessions split and conversions orphan.",
              image: "/images/supporting/cross_domain.png",
              icon: <Link2 />,

              ctaText: "Fix my Cross‑Domain Tracking",
              ctaLink: contactLink("Cross‑Domain Tracking"),
              ctaSubtitle: "Keep identity intact across every step.",
            },
            {
              title: "Consent/Cookie Mode Misalignment",
              description:
                "85% of top websites face misalignment issues, running in restricted consent states by default. CMPs set restrictive consent states by default. Pixels fire with limited storage, GA4 runs in ‘consent denied’, and remarketing lists never fill.",
              image: "/images/supporting/consent_mode.png",
              icon: <Cookie />,

              ctaText: "Fix my Consent Mode",
              ctaLink: contactLink("Consent/Cookie Mode"),
              ctaSubtitle: "Compliant tracking that still performs.",
            },

            {
              title: "Offline & Phone Leads Don’t Attribute Back",
              description:
                "60% of businesses under-attribute offline leads like calls, worsening ROAS visibility. Calls, walk‑ins, and front‑desk bookings rarely flow into ad platforms. Without offline conversions and call tracking, ROAS looks worse than reality.",
              image: "/images/supporting/offline_calls.png",
              icon: <PhoneCall />,

              ctaText: "Fix my Offline Attribution",
              ctaLink: contactLink("Offline Attribution"),
              ctaSubtitle: "Prove impact from call to chair time.",
            },
          ]}
        />
        <CaseStudyFeaturedVideo
          caseStudy={caseStudies[1]}
          verticalVideo={caseStudies[0].embedId?.muxVertical ?? false}
          darkMode={true}
        />

        <FeatureGridWithModal2
          heading="How Health & Wellness Brands Recover 40% of Lost Conversions and Lower CAC by 30%"
          subheading="Most health & wellness marketers are flying blind because tracking is broken. The Conversion Confidence Suite is our proven system that restores visibility, feeds clean data back to your ad platforms, and unlocks growth you can actually measure."
          items={[
            {
              title: "Meta Compliance Conversion Framework",
              description:
                "Our Meta Compliance Conversion Framework rebuilds your event setup with compliant custom parameters, so you recover lost conversions without violating policy. This overcomes Meta's 2025 healthcare restrictions that throttle standard conversion events and starve your campaigns of learning data. The result? Smarter campaigns that optimize properly and increase ROAS by 10–25%.",
              icon: <ShieldAlert />,
              benefits: [
                "Compliant event parameters tailored to health & wellness",
                "Advanced data cleanup to strip sensitive information",
                "Custom loader routes that bypass throttled signals",
                "Maintain optimization power under Meta's stricter rules",
                "Recover 60–80% of conversions hidden by restrictions",
              ],
              image: "/images/hero/tracking-audit.png",

              ctaText: "See How We Fixed Meta Restrictions",
              ctaLink: "/offers/data-sharing-restrictions",
            },
            {
              title: "iOS & Safari Signal Recovery System",
              description:
                "Our iOS & Safari Signal Recovery System routes everything server-side, restoring visibility and protecting attribution windows. This overcomes the challenge where 96% of iOS users opt out of tracking and Safari blocks third-party cookies, causing most health & wellness brands to lose 20–40% of their signals. That means lower CAC and remarketing lists that actually fill again.",
              icon: <ActivitySquare />,
              benefits: [
                "Server-side tracking that bypasses iOS/Safari blockers",
                "First-party subdomain setup for bulletproof data collection",
                "Preserve attribution windows even when cookies are blocked",
                "Recover 20–40% of signals lost to ATT + ITP",
                "Unlock larger, more accurate remarketing audiences",
              ],
              image: "/images/hero/measurement-planning.png",
              ctaText: "View Our iOS Tracking Case Study",
              ctaLink: "/case-study",
            },
            {
              title: "Ad Blocker Bypass Blueprint",
              description:
                "Our Ad Blocker Bypass Blueprint ensures your tracking loads from custom domains and server pipelines that blockers can't touch. This overcomes the challenge where 71% of users run ad blockers, which strip pixel events and cause incomplete reporting. You'll finally see the full picture, recover 30–50% of 'invisible' conversions, and prove true ROAS to your team.",
              icon: <ShieldAlert />,
              benefits: [
                "Custom loading that avoids blocked domains like GTM",
                "Independent server-side collection not tied to browsers",
                "Bypass ad blockers with private domain routing",
                "Future-proof setup against new privacy tools",
                "Recover 30–50% of events stripped by ad blockers",
              ],
              image: "/images/hero/unified-dashboard.png",
              ctaText: "See Ad Blocker Recovery Results",
              ctaLink: "/case-study",
            },
            {
              title: "Never-Duplicate CAPI Framework",
              description:
                "Our Never-Duplicate CAPI Framework cleans your entire pipeline, so every conversion is counted once, attributed correctly, and used to optimize campaigns. This overcomes the challenge where most health & wellness advertisers lose 30–50% of conversions from messy CAPI setups — duplicates, missing IDs, or conflicting signals. That means 20–30% more usable data and up to 25% lower CAC.",
              icon: <Network />,
              benefits: [
                "Proper event_id setup to stop duplicates",
                "Clean server events that improve optimization",
                "Deduplication between pixel + server events",
                "Eliminate wasted spend from messy signals",
                "Recover 20–30% of conversions lost to misconfigurations",
              ],
              image: "/images/hero/real-time-dashboard.png",
              ctaText: "View CAPI Success Stories",
              ctaLink: "/case-study",
            },
            {
              title: "Rock-Solid Data Layer Blueprint",
              description:
                "Our Rock-Solid Data Layer Blueprint gives you a durable event map that survives developer changes — so your tracking never breaks mid-campaign again. This overcomes the challenge where custom health & wellness sites built on Next.js, React, or Laravel often ship without stable data layers, meaning tracking breaks every time there's a redesign or form update.",
              icon: <TerminalSquare />,
              benefits: [
                "Custom data layer architecture for modern frameworks",
                "Developer-friendly docs and guides for future changes",
                "Full event mapping for your funnel from click to booking",
                "Comprehensive testing across redesigns and launches",
                "Future-proof tracking immune to developer updates",
              ],
              image: "/images/hero/gdpr-cmp.png",
              ctaText: "See Data Layer Implementations",
              ctaLink: "/case-study",
            },
            // {
            //   title: "Cross-Domain Identity Keeper",
            //   description:
            //     "Our Cross-Domain Identity Keeper preserves user identity across every step, so you can track the full patient journey and recover hidden ROAS. This overcomes the challenge where patients rarely stay on one domain — they move from ads → site → booking → payments, and without proper setup, 40% of conversions get lost.",
            //   icon: <Link2 />,
            //   benefits: [
            //     "First-party routing that keeps sessions intact",
            //     "Cross-domain parameter configuration for identity",
            //     "Proper _ga cookie passing across booking + payment apps",
            //     "Full attribution for ad → site → booking → payment",
            //     "Recover up to 40% of conversions lost mid-journey",
            //   ],
            //   image: "/images/hero/customer-support.png",
            //   ctaText: "View Cross-Domain Success Cases",
            //   ctaLink: "/case-study",
            // },
            {
              title: "Smart Consent Mode Engine",
              description:
                "Our Smart Consent Mode Engine ensures compliance (GDPR, CCPA, HIPAA) while still firing the signals that matter. This overcomes the challenge where 85% of health & wellness sites misfire tracking tags because of consent mode misalignment. That means remarketing lists fill properly and your campaigns perform without legal risk.",
              icon: <Cookie />,
              benefits: [
                "CookieYes integration for smooth user consent",
                "Google Consent Mode v2 for GA4 + Ads compliance",
                "Custom consent handling for all non-Google tags",
                "Proper state management that fills remarketing lists",
                "Stay compliant while keeping performance intact",
              ],
              image: "/images/hero/customer-support.png",

              ctaText: "See Consent Mode Results",
              ctaLink: "/case-study",
            },
            // {
            //   title: "Offline Conversion Connector",
            //   description:
            //     "Phone calls, walk-ins, and front-desk bookings often go untracked — which makes ROAS look worse than reality. Our Offline Conversion Connector ties every offline lead back to the ad that drove it. You’ll finally prove impact across the full patient journey, not just online clicks.",
            //   icon: <PhoneCall />,
            //   benefits: [
            //     "Custom webhook integration with your CRM",
            //     "Server-to-server connections without Zapier reliance",
            //     "Phone call tracking that ties back to ad clicks",
            //     "Offline conversion import for walk-ins and bookings",
            //     "Complete ROAS visibility including offline pipeline",
            //   ],
            //   image: "/images/hero/customer-support.png",
            //   ctaText: "View Offline Tracking Case Studies",
            //   ctaLink: "/case-study",
            // },
          ]}
        />
      </Container>
      <DetailsCarousel
        headerTitle="Exclusive Bonuses for Early Action-Takers: Complete Implementation Toolkit"
        headerDescription="Get our complete tracking audit template, custom data layer blueprint, 30-day implementation support, and step-by-step conversion recovery roadmap to fast-track your results and maximize your ad spend ROI."
        items={[
          {
            title: "E-commerce Conversion Checklist",
            description: "The ultimate checklist to maximize your online store's conversions.",
            icon: <CheckSquare />,
            benefits: [
              "300+ critical conversion checkpoints",
              "Insights from 15+ years of CRO experience",
              "Decrease customer acquisition costs",
              "Increase average order value and conversion rates",
            ],
            image: "/images/hero/ecommerce-conversion-checklist.png",
          },
          {
            title: "Ad Efficiency Blueprint",
            description: "A step-by-step guide to optimize every ad dollar.",
            icon: <FileText />,
            benefits: [
              "Comprehensive analysis of your tracking setup",
              "Identify and fix data leaks",
              "Custom implementation plan for robust tracking",
              "Verification and testing for seamless performance",
            ],
            image: "/images/social-sharing.png",
          },
          {
            title: "Advanced Tools & Calculators",
            description: "Pre-built tools & Calculators for effortless KPI tracking.",
            icon: <BarChart2 />,
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
      <AlternativesSection
        heading="Other Options to Consider"
        subheading="Our service is ideal for you if you prioritize:"
        values={[
          {
            number: "1",
            title: "Tailored data solutions",
            description: "Customized to address your specific business requirements",
          },
          {
            number: "2",
            title: "Strategic insights",
            description: "Going beyond data to offer clear growth-driving steps",
          },
          {
            number: "3",
            title: "Premium service",
            description: "We handle the complexities so you can concentrate on strategy",
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
