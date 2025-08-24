import { DetailsCardsProps } from "@/components/global/details-stack";
import { AlertTriangle } from "lucide-react";

interface CalculatorConfig {
  title: string;
  description: string;
  leadLabel: string;
  clientLabel: string;
  industry: string;
  type: "business" | "agency";
  urgencyMessage: string;
}

interface RevenueCalculatorConfig {
  title: string;
  description: string;
  industry: string;
  urgencyMessage: string;
}

export interface CalculatorConfigs {
  lead?: CalculatorConfig;
  agency?: CalculatorConfig;
  revenue?: RevenueCalculatorConfig;
  [key: string]: CalculatorConfig | RevenueCalculatorConfig | undefined;
}

// Update your main OfferData interface to include calculators
export interface OfferData {
  slug: string;
  niche: string;
  businessType: string;
  businessTypePlural: string;
  package: string;
  icon: string;
  eyebrow?: string;
  headline: {
    prefix: string;
    conversion: string[];
    suffix: string;
    benefit: string;
  };
  subheading: string;
  embedId: {
    loom?: string;
    youtube?: string;
  };

  cta: {
    primary: string;
    secondary: string;
  };
  benefits: { problem: string; solution: string; benefit: string }[];
  problemStatement: DetailsCardsProps;
  solution: DetailsCardsProps;
  finalCta: {
    title: string;
    description: string;
  };
  calendar: {
    title: string;
    description: string;
  };
  faq: {
    question: string;
    answer: string;
    icon: "Zap" | "Shield" | "TrendingUp" | "DollarSign" | "RefreshCw";
  }[];
  testimonialSection: {
    title: string;
    description: string;
  };
  restrictionData: {
    severity: "Critical" | "High" | "Medium";
    affected: string;
  };
  caseStudyIds: string[];
  keywords: string[];
  // Add the new calculators property
  calculators?: CalculatorConfigs;
}

export const offers: Record<string, OfferData> = {
  "default-offer": {
    slug: "default-restricted-niche",
    niche: "Restricted Industries",
    package: "RestrictedPixel Pro",
    businessType: "business",
    businessTypePlural: "businesses",
    icon: "🚫",
    // eyebrow: "Fix now, Pay Later",
    headline: {
      prefix: "Meta Ads",
      conversion: [""],
      suffix: "",
      benefit: "not working anymore?",
    },
    subheading:
      'Meta has Categorized your domains and now you are stuck with Data Sharing Restrictions. Our ConversionPixel Pro uses advanced event masking and intelligent routing, and <strong class="text-primary underline">Fixes Your Ads Tracking</strong> ',

    embedId: { youtube: "tdQufJ-qadE", loom: "3768f5d29d724dc2837085355d614c57" },
    cta: {
      primary: "🎟️ Claim Your Free 'RestrictedPixel Pro' Tracking Setup",
      secondary: "Limited to the first 7 Restricted Business Clients - act fast before it expires",
    },
    benefits: [
      {
        problem:
          "You've tried changing domains, ad accounts, and even switching pixels… nothing worked.",
        solution: "We restore tracking using your existing pixel.",
        benefit: "You keep your custom audiences and avoid losing years of data.",
      },
      {
        problem: "You're spending money with zero return — and Meta doesn't care.",
        solution: "You only pay us once tracking is fixed and working.",
        benefit: "No risk, no waste — just accurate data or you pay nothing.",
      },
      {
        problem: "Other solutions take weeks and cost thousands upfront.",
        solution: "We install RestrictedPixel Pro and complete testing within 24 hours.",
        benefit: "Go from broken tracking to real-time conversion data in 24 hours.",
      },
    ],
    problemStatement: {
      heading: "Meta's Data Restrictions Are Crippling Restricted Niches Ads",
      subheading:
        "Since Meta's 2025 data policy update, Health, Wellness, Finance, Religion & Political Businesses have been hit with invisible penalties that silently kill campaign performance. Conversions disappear. Tracking breaks. And most businesses don't even realize it's happening — until revenue starts to drop.",
      items: [
        {
          title: "Your Domain Gets Flagged — No Events Fire",
          description:
            "Even clean, compliant landing pages get blocked. Critical events like Leads, Appointments, or Purchases never fire — breaking your tracking from day one.",
          image: "/images/hero/doamin_restricted.png",
          icon: <AlertTriangle />,
          benefits: [
            "Identify flagged domains quickly",
            "Implement workaround strategies",
            "Restore critical event tracking",
          ],
          videoUrl: "example-loom-id",
          videoType: "loom",
          price: "$499/month",
          ctaText: "Get a Free Audit",
          ctaLink: "https://yourwebsite.com/audit",
          ctaSubtitle: "Schedule a consultation to analyze your domain issues.",
        },
        {
          title: "Pixel Shows '0 Conversions' — Revenue Starts to Shrink",
          description:
            "Your booking rate is down, phones are quiet, and Meta shows zero conversions. You cut budget — thinking the ads stopped working — but the real problem is hidden tracking suppression.",
          image: "/images/hero/leads_revenue_down.png",
          icon: <AlertTriangle />,
          benefits: [
            "Diagnose pixel suppression issues",
            "Optimize ad spend allocation",
            "Recover lost conversion data",
          ],
          videoUrl: "example-youtube-id",
          videoType: "youtube",
          price: "$799/month",
          ctaText: "Book a Strategy Call",
          ctaLink: "https://yourwebsite.com/strategy-call",
          ctaSubtitle: "Learn how to bypass tracking suppression.",
        },
        {
          title: "New Domain? New Pixel? CAPI? — Nothing Works",
          description:
            "You've tried swapping domains, rebuilding ads, even setting up Conversion API. But Meta still filters out sensitive events for Your Business — leaving massive gaps in attribution.",
          image: "/images/hero/no_solution_works.png",
          icon: <AlertTriangle />,
          benefits: [
            "Configure Conversion API correctly",
            "Bypass Meta's event filters",
            "Ensure accurate attribution",
          ],
          price: "$999/month",
          ctaText: "Request a Technical Review",
          ctaLink: "https://yourwebsite.com/technical-review",
          ctaSubtitle: "Get expert help to fix your tracking setup.",
        },
        {
          title: "Performance Collapses — CPCs Up, ROAS Down",
          description:
            "Without accurate data, Meta's algorithm can't optimize. Your ads get shown to the wrong people, cost-per-click skyrockets, and your return on ad spend crashes.",
          image: "/images/hero/highcpc_lowroas.png",
          icon: <AlertTriangle />,
          benefits: [
            "Optimize ad targeting",
            "Reduce cost-per-click",
            "Improve return on ad spend",
          ],
          videoUrl: "example-loom-id-2",
          videoType: "loom",
          price: "$599/month",
          ctaText: "Start Optimization Now",
          ctaLink: "https://yourwebsite.com/optimization",
          ctaSubtitle: "Boost your ad performance with our proven strategies.",
        },
      ],
    },

    solution: {
      heading: 'The "RestrictedPixel Pro" System for Restricted Industries',
      subheading:
        "Our specialized approach restores your Facebook Pixel tracking for businesses in health & wellness, financial services, CBD, politics, and other restricted categories while maintaining full regulatory compliance.",
      items: [
        {
          image: "/images/case-study/zenon_after_2.png",
          title: "Pixel Recovery System",
          description:
            "Restore your existing pixels without creating new ones. Keep your pixel history, custom audiences, and conversion data intact while achieving 100% event recovery.",
          benefits: [
            "Works with your existing pixel setup",
            "100% event recovery to Events Manager",
            "Zero downtime during implementation",
            "Keep all custom audiences and data",
          ],
        },
        {
          image: "/images/case-study/northridgeaddiction_after_1.png",
          title: "Ad Account Attribution",
          description:
            "Attribute all conversions without creating new ads or accounts. Restore tracking on existing accounts while maintaining your account reputation and spending history.",
          benefits: [
            "No new ad accounts needed",
            "100% success rate on eligible accounts",
            "Maintain account history and reputation",
            "No account warming required",
          ],
        },
        {
          image: "/images/hero/real-time-dashboard.png",
          title: "95% Accurate Tracking",
          description:
            "Bulletproof tracking solution that never gets shut down. Real-time event synchronization with complete attribution recovery and zero maintenance required.",
          benefits: [
            "Fix the Restriction by Meta",
            "Real-time event synchronization",
            "Zero maintenance required",
            "No more lost conversions",
          ],
        },
        {
          image: "/images/hero/customer-support.png",
          title: "Restricted Industry Priority Support",
          description:
            "Dedicated support team with personalized slack channel for instant communication and 24/7 technical support specifically tailored for restricted industry marketing needs.",
          benefits: [
            "Dedicated Slack Channel",
            "Free Maintenance up to 3 months",
            "24/7 technical support",
            "Industry-specific optimization",
          ],
        },
      ],
    },
    finalCta: {
      title: "📞 Book Your Free Call & Fix Your Tracking",
      description:
        "We'll audit your current setup, show you exactly what's broken, and walk you through how we'll fix it — even if you don't work with us.",
    },
    calendar: {
      title: "Schedule Your Free Restricted Niche Meta Tracking Setup",
      description: "Spots are limited — only 7 businesses accepted per month.",
    },
    faq: [
      {
        question: "How quickly can you fix tracking for restricted industries?",
        answer:
          "Most restricted niche businesses see their conversion tracking restored within a week. The process includes: compliance audit (Day 1), niche-compliant implementation (Day 2), and testing (Day 3). Complex setups in highly regulated industries may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate Meta's policies or niche regulations?",
        answer:
          "No. Our solution is 100% compliant with Meta's restricted niche policies and all relevant regulations (HIPAA for health, financial regulations, GDPR, CCPA, etc.). We work within Meta's framework specifically designed for restricted categories to restore tracking while respecting all compliance requirements.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my restricted niche business expect?",
        answer:
          "Businesses in restricted industries typically see 80-95% of their conversion tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build compliant custom audiences again. Results vary by niche regulations and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my restricted niche business?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your restricted niche tracking within 30 days, you get a full refund. We've successfully helped businesses across health & wellness, financial services, CBD, wellness, and political niches with a 98.7% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for restricted industries?",
        answer:
          "Yes. All restricted niche implementations include 90 days of monitoring and support to ensure your tracking remains stable and compliant. We also provide guidance on maintaining compliance as niche regulations and Meta policies evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "Restricted Niche Businesses Recovered Their Meta Tracking",
      description:
        "From health & wellness to financial services, CBD businesses to political campaigns—we've restored compliant tracking for every restricted niche client. See how we recovered their ROAS while maintaining full regulatory compliance.",
    },
    restrictionData: {
      severity: "Critical",
      affected: "89%",
    },
    caseStudyIds: [
      "zenon",
      "northridgeaddiction",
      "saneofrance",
      "emiratesadvisory",
      "peachandcream",
    ],
    keywords: [
      "restricted niche marketing",
      "health wellness Facebook ads",
      "financial services tracking",
      "CBD business advertising",
      "political campaign ads",
      "compliant Meta tracking",
      "restricted niche conversions",
      "HIPAA compliant ads",
      "financial services compliance",
      "wellness business tracking",
    ],
    calculators: {
      lead: {
        title: "Restricted Business Lead Impact Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your restricted business leads",
        leadLabel: "Business Leads",
        clientLabel: "New Customers",
        industry: "Restricted Business",
        type: "business" as const,
        urgencyMessage:
          "Every month you delay addressing these restrictions costs you thousands in lost revenue. The compounding effect means early action is critical to minimize long-term impact.",
      },
      agency: {
        title: "Restricted Niche Agency Client Retention Calculator",
        description:
          "Calculate how advertising restrictions will impact your agency's client retention and revenue in restricted niches",
        leadLabel: "Client Performance",
        clientLabel: "Restricted Niche Clients",
        industry: "Restricted Niche Marketing Agency",
        type: "agency" as const,
        urgencyMessage:
          "Without a solution to ad restrictions, your restricted niche clients will see declining performance and leave for agencies that can deliver results. New client acquisition becomes impossible when you can't prove consistent performance.",
      },
      revenue: {
        title: "Restricted Business Revenue Loss Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your restricted business revenue",
        industry: "Restricted Business",
        urgencyMessage:
          "Every month you delay action, your revenue loss compounds exponentially. The sooner you implement compliant tracking solutions, the faster you can recover your lost revenue and competitive advantage.",
      },
    },
  },
};
