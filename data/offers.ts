import { DetailsCardsProps } from "@/components/funnels/details-card";
// Add these types to your offers.ts file

export interface CalculatorConfig {
  title: string;
  description: string;
  leadLabel: string;
  clientLabel: string;
  industry: string;
  type: "business" | "agency";
  urgencyMessage: string;
}

export interface RevenueCalculatorConfig {
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
  eyebrow: string;
  headline: {
    prefix: string;
    conversion: string[];
    suffix: string;
  };
  subheading: string;
  videoId: string;
  cta: {
    primary: string;
    secondary: string;
  };
  benefits: string[];
  problemStatement: {
    title: string;
    description: string;
    alerts: {
      title: string;
      description: string;
      icon: "AlertTriangle" | "XCircle" | "DollarSign" | "Database";
    }[];
  };
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
    eyebrow: "Running Meta Ads in a Restricted Niche?",
    headline: {
      prefix: "Fix",
      conversion: ["Data Sharing Restriction"],
      suffix: "and Track Every Conversion for Your Restricted Business",
    },
    subheading:
      'Even if Meta has restricted your domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">RestrictedPixel Pro</strong> to fix your Meta Ads Conversions for your restricted business.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Starting from 149$/month",
      secondary: "No upfront costs, Start tracking conversions in Meta Ads ",
    },
    benefits: [
      "Track all conversions in restricted industries",
      "Fix Data Sharing Restrictions",
      "Full Compliance with Niche Regulations",
    ],
    problemStatement: {
      title: "Data Sharing Restrictions are destroying Restricted Businesses",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting businesses in health & wellness, financial services, CBD, politics, and other sensitive categories—blocking critical conversion tracking and causing massive performance drops.",
      alerts: [
        {
          title: "Your domain gets flagged — no events fire",
          description:
            "Standard events blocked: Lead Generation, Purchase, Contact, and custom conversions across health, finance, CBD, wellness, and political niches",
          icon: "AlertTriangle",
        },
        {
          title: "Pixel shows '0 leads' — even though your phone is ringing",
          description:
            "Hundreds of thousands of conversion events blocked across restricted categories",
          icon: "XCircle",
        },
        {
          title: "Tried every other solution - new pixels, new domain, new ad account",
          description:
            "Have exhuasted all the solutions and still cannot track all the conversions",
          icon: "XCircle",
        },
        {
          title: "You're spending $2K–$10K/month… and getting nothing back",
          description: "Wasted ad spend due to poor optimization in restricted industries",
          icon: "DollarSign",
        },
      ],
    },
    solution: {
      headerTitle: 'The "RestrictedPixel Pro" System for Restricted Industries',
      headerDescription:
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
          image: "/images/hero/unified-dashboard.png",
          title: "GA4 Unified Reporting Dashboard",
          description:
            "Comprehensive tracking dashboard with GA4 integration that displays all critical metrics at a glance. Monitor your complete customer journey with real-time data synchronization and advanced attribution reporting.",
          benefits: [
            "Complete GA4 integration",
            "All metrics in one view",
            "Real-time tracking monitoring",
            "Complete customer journey tracking",
          ],
        },
        {
          image: "/images/hero/real-time-dashboard.png",
          title: "Tracking Optimization",
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
          image: "/images/hero/100-success-no-down-time.png",
          title: "100% Success & Zero Downtime Guarantee",
          description:
            "Every implementation works perfectly with zero downtime. Completely hands-off process that requires no work from your end while maintaining perfect campaign performance.",
          benefits: [
            "100% success rate guaranteed",
            "Zero downtime implementation",
            "Completely hands-off process",
            "Permanent, stable solution",
          ],
        },
        {
          image: "/images/hero/measurement-planning.png",
          title: "Restricted Niche Tracking Strategy",
          description:
            "Custom measurement planning specifically designed for restricted industries. We identify the most valuable conversion actions and create a compliance-focused tracking framework.",
          benefits: [
            "Industry-specific journey mapping",
            "Key conversion metrics identification",
            "ROI-focused tracking setup",
            "Compliance-first optimization",
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
      title: "📞 Starting from 149$/month",
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
  "health-and-wellness": {
    slug: "health-and-wellness",
    niche: "Health & Wellness",
    package: "HealthPixel Pro",
    businessType: "health & wellness business",
    businessTypePlural: "health & wellness businesses",
    icon: "💚",
    eyebrow: "Running Meta Ads for Your Health & Wellness Business?",
    headline: {
      prefix: "Fix",
      conversion: ["Data Sharing Restriction"],
      suffix: "and Track Every Customer for Your Health & Wellness Business",
    },
    subheading:
      'Even if Meta has restricted your health domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">HealthPixel Pro</strong> to fix your Meta Ads Conversions for health & wellness businesses.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Starting from 149$/month",
      secondary: "Start tracking health & wellness conversions in Meta Ads & Events Manager again",
    },
    benefits: [
      "Track all customer conversions",
      "Fix Data Sharing Restrictions",
      "HIPAA & FDA Compliant Setup",
    ],
    problemStatement: {
      title: "Data Sharing Restrictions are destroying Health & Wellness Businesses",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting health & wellness businesses, blocking critical customer tracking data and causing massive performance drops in your most important marketing channel.",
      alerts: [
        {
          title: "Your domain gets flagged — no events fire",
          description:
            "Standard events blocked: Health Consultation, Supplement Purchase, Wellness Program Signup, Nutrition Consultation",
          icon: "AlertTriangle",
        },
        {
          title: "Pixel shows '0 leads' — even though your phone is ringing",
          description: "Hundreds of thousands of health & wellness customer events blocked daily",
          icon: "XCircle",
        },
        {
          title: "You're spending $3K–$15K/month… and getting nothing back",
          description: "Wasted ad spend due to poor customer acquisition optimization",
          icon: "DollarSign",
        },
      ],
    },
    solution: {
      headerTitle: 'The "HealthPixel Pro" System for Health & Wellness Businesses',
      headerDescription:
        "Our specialized health & wellness tracking solution restores your Facebook Pixel tracking for health businesses while maintaining full HIPAA and FDA compliance, respecting Meta's healthcare restrictions.",
      items: [
        {
          image: "/images/case-study/zenon_after_2.png",
          title: "Pixel Recovery System",
          description:
            "Restore your existing pixels without creating new ones. Keep your pixel history, custom audiences, and conversion data intact while achieving 100% event recovery for health & wellness tracking.",
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
            "Attribute all conversions without creating new ads or accounts. Restore tracking on existing accounts while maintaining your account reputation and spending history in the health & wellness space.",
          benefits: [
            "No new ad accounts needed",
            "100% success rate on eligible accounts",
            "Maintain account history and reputation",
            "No account warming required",
          ],
        },
        {
          image: "/images/hero/unified-dashboard.png",
          title: "GA4 Unified Reporting Dashboard",
          description:
            "Comprehensive tracking dashboard with GA4 integration that displays all critical metrics at a glance. Monitor your health & wellness business's complete customer journey with real-time data synchronization and advanced attribution reporting.",
          benefits: [
            "Complete GA4 integration",
            "All metrics in one view",
            "Real-time tracking monitoring",
            "Complete customer journey tracking",
          ],
        },
        {
          image: "/images/hero/real-time-dashboard.png",
          title: "Tracking Optimization",
          description:
            "Bulletproof tracking solution that never gets shut down. Real-time event synchronization with complete attribution recovery and zero maintenance required for health & wellness businesses.",
          benefits: [
            "Fix the Restriction by Meta",
            "Real-time event synchronization",
            "Zero maintenance required",
            "No more lost conversions",
          ],
        },
        {
          image: "/images/hero/100-success-no-down-time.png",
          title: "100% Success & Zero Downtime Guarantee",
          description:
            "Every implementation works perfectly with zero downtime. Completely hands-off process that requires no work from your end while maintaining perfect campaign performance for your health & wellness business.",
          benefits: [
            "100% success rate guaranteed",
            "Zero downtime implementation",
            "Completely hands-off process",
            "Permanent, stable solution",
          ],
        },
        {
          image: "/images/hero/measurement-planning.png",
          title: "Health & Wellness Tracking Strategy",
          description:
            "Custom measurement planning specifically designed for health & wellness businesses. We identify the most valuable customer actions and create a tracking framework that captures every consultation booking, product purchase, and program enrollment.",
          benefits: [
            "Customer journey mapping",
            "Key health metrics identification",
            "ROI-focused tracking setup",
            "Conversion optimization for wellness",
          ],
        },
        {
          image: "/images/hero/customer-support.png",
          title: "Health & Wellness Priority Support",
          description:
            "Dedicated support team with personalized slack channel for instant communication and 24/7 technical support specifically tailored for health & wellness business marketing needs.",
          benefits: [
            "Dedicated Slack Channel",
            "Free Maintenance up to 3 months",
            "24/7 technical support",
            "Health business-specific optimization",
          ],
        },
      ],
    },
    finalCta: {
      title: "📞 Starting from 149$/month",
      description:
        "We'll audit your current setup, show you exactly what's broken, and walk you through how we'll fix it — even if you don't work with us.",
    },
    calendar: {
      title: "Schedule Your Free Health & Wellness Meta Tracking Setup",
      description: "Spots are limited — only 6 health businesses accepted per month.",
    },
    faq: [
      {
        question: "How quickly can you fix my health & wellness business tracking?",
        answer:
          "Most health & wellness businesses see their customer tracking restored within a week. The process includes: compliance audit (Day 1), HIPAA & FDA compliant implementation (Day 2), and testing (Day 3). Complex health business setups may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate HIPAA, FDA regulations, or Meta's healthcare policies?",
        answer:
          "No. Our solution is 100% compliant with HIPAA, FDA regulations for health claims, all Meta healthcare policies, and data protection regulations (GDPR, CCPA). We work within Meta's framework specifically for health & wellness providers to restore tracking while respecting all medical privacy restrictions.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my health & wellness business expect?",
        answer:
          "Health & wellness businesses typically see 85-95% of their customer tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build custom health-focused audiences again. Results vary by business size and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my health & wellness business?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your health & wellness tracking within 30 days, you get a full refund. We've successfully helped health & wellness businesses with a 98.7% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for health & wellness businesses?",
        answer:
          "Yes. All health & wellness implementations include 90 days of monitoring and support to ensure your customer tracking remains stable and compliant with HIPAA and FDA regulations. We also provide guidance on maintaining compliance as health regulations evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "Health & Wellness Businesses Recovered Their Meta Tracking",
      description:
        "From supplement companies to wellness coaches, fitness studios to nutrition consultants, we've restored HIPAA and FDA compliant tracking for every health & wellness client. See how we recovered their customer acquisition ROAS while maintaining full compliance.",
    },
    restrictionData: {
      severity: "Critical",
      affected: "91%",
    },
    caseStudyIds: [
      "zenon",
      "northridgeaddiction",
      "saneofrance",
      "emiratesadvisory",
      "peachandcream",
    ],
    keywords: [
      "health wellness marketing",
      "health business Facebook ads",
      "wellness customer tracking",
      "HIPAA compliant health ads",
      "health supplement advertising",
      "wellness coach marketing",
      "fitness business tracking",
      "nutrition consultant ads",
      "health product marketing",
      "wellness program advertising",
    ],
    calculators: {
      lead: {
        title: "Health & Wellness Lead Impact Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your health & wellness business leads",
        leadLabel: "Patient Leads",
        clientLabel: "New Patients",
        industry: "Health & Wellness",
        type: "business" as const,
        urgencyMessage:
          "Every month you delay addressing these restrictions costs your health business thousands in lost patient revenue. The compounding effect means early action is critical to minimize long-term impact on patient acquisition.",
      },
      agency: {
        title: "Health & Wellness Agency Client Retention Calculator",
        description:
          "Calculate how advertising restrictions will impact your health & wellness agency's client retention and revenue",
        leadLabel: "Client Performance",
        clientLabel: "Health & Wellness Clients",
        industry: "Health & Wellness Marketing Agency",
        type: "agency" as const,
        urgencyMessage:
          "Without a solution to ad restrictions, your health & wellness clients will see declining patient acquisition and leave for agencies that can deliver compliant results. New client acquisition becomes a nightmare when you can't prove consistent performance in this regulated space.",
      },
      revenue: {
        title: "Health & Wellness Revenue Loss Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your health & wellness business revenue",
        industry: "Health & Wellness",
        urgencyMessage:
          "Every month you delay action, your patient acquisition revenue loss compounds. The sooner you implement HIPAA-compliant tracking solutions, the faster you can recover your lost revenue and competitive edge in the health market.",
      },
    },
  },
  "dental-clinic": {
    slug: "dental-clinic",
    niche: "Dental",
    package: "DentalPixel Pro",
    businessType: "dental clinic",
    businessTypePlural: "dental clinics",
    icon: "🦷",
    eyebrow: "Running Meta Ads for Your Dental Clinic?",
    headline: {
      prefix: "Fix",
      conversion: ["Data Sharing Restriction"],
      suffix: "and Track Every Patient for Your Dental Clinic",
    },
    subheading:
      'Even if Meta has restricted your dental domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">DentalPixel Pro</strong> to fix your Meta Ads Conversions for dental practices.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Starting from 149$/month",
      secondary: "Start tracking dental patient conversions in Meta Ads & Events Manager again",
    },
    benefits: [
      "Track all patient conversions",
      "Fix Data Sharing Restrictions",
      "HIPAA Compliant Setup",
    ],
    problemStatement: {
      title: "Data Sharing Restrictions are destroying Dental Clinics",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting healthcare providers like dental clinics, blocking critical patient tracking data and causing massive performance drops.",
      alerts: [
        {
          title: "Your domain gets flagged — no events fire",
          description:
            "Standard events blocked: Patient Lead, Appointment Booking, Treatment Purchase",
          icon: "AlertTriangle",
        },
        {
          title: "Pixel shows '0 leads' — even though your phone is ringing",
          description: "Hundreds of thousands of dental patient events blocked",
          icon: "XCircle",
        },
        {
          title: "You're spending $2K–$10K/month… and getting nothing back",
          description: "Wasted ad spend due to poor patient acquisition optimization",
          icon: "DollarSign",
        },
      ],
    },
    solution: {
      headerTitle: 'The "DentalPixel Pro" System for Dental Practices',
      headerDescription:
        "Our specialized dental tracking solution restores your Facebook Pixel tracking for dental clinics while maintaining full HIPAA compliance and respecting Meta's healthcare restrictions.",
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
          image: "/images/hero/unified-dashboard.png",
          title: "GA4 Unified Reporting Dashboard",
          description:
            "Comprehensive tracking dashboard with GA4 integration that displays all critical metrics at a glance. Monitor your dental practice's complete patient journey with real-time data synchronization and advanced attribution reporting.",
          benefits: [
            "Complete GA4 integration",
            "All metrics in one view",
            "Real-time tracking monitoring",
            "Complete patient journey tracking",
          ],
        },
        {
          image: "/images/hero/real-time-dashboard.png",
          title: "Tracking Optimization",
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
          image: "/images/hero/100-success-no-down-time.png",
          title: "100% Success & Zero Downtime Guarantee",
          description:
            "Every implementation works perfectly with zero downtime. Completely hands-off process that requires no work from your end while maintaining perfect campaign performance.",
          benefits: [
            "100% success rate guaranteed",
            "Zero downtime implementation",
            "Completely hands-off process",
            "Permanent, stable solution",
          ],
        },
        {
          image: "/images/hero/measurement-planning.png",
          title: "Dental Tracking Strategy",
          description:
            "Custom measurement planning specifically designed for dental practices. We identify the most valuable patient actions and create a tracking framework that captures every appointment booking and consultation request.",
          benefits: [
            "Patient journey mapping",
            "Key dental metrics identification",
            "ROI-focused tracking setup",
            "Appointment conversion optimization",
          ],
        },
        {
          image: "/images/hero/customer-support.png",
          title: "Dental Practice Priority Support",
          description:
            "Dedicated support team, get personalized slack channel for instant communication and 24/7 technical support specifically tailored for dental practice marketing needs.",
          benefits: [
            "Dedicated Slack Channel",
            "Free Maintenance up to 3 months",
            "24/7 technical support",
            "Practice-specific optimization",
          ],
        },
      ],
    },
    finalCta: {
      title: "📞 Starting from 149$/month",
      description:
        "We'll audit your current setup, show you exactly what's broken, and walk you through how we'll fix it — even if you don't work with us.",
    },
    calendar: {
      title: "Schedule Your Free Dental Practice Meta Tracking Setup",
      description: "Spots are limited — only 7 clinics accepted per month.",
    },
    faq: [
      {
        question: "How quickly can you fix my dental clinic tracking?",
        answer:
          "Most dental practices see their patient tracking restored within a week. The process includes: audit (Day 1), HIPAA-compliant implementation (Day 2), and testing (Day 3). Complex dental practice setups may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate HIPAA or Meta's healthcare policies?",
        answer:
          "No. Our solution is 100% compliant with HIPAA, all Meta healthcare policies, and data protection regulations (GDPR, CCPA). We work within Meta's framework specifically for healthcare providers to restore tracking while respecting all medical privacy restrictions.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my dental practice expect?",
        answer:
          "Dental clinics typically see 85-95% of their patient tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build custom patient audiences again. Results vary by practice size and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my dental practice?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your dental practice tracking within 30 days, you get a full refund. We've successfully helped dental practices with a 98.7% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for dental practices?",
        answer:
          "Yes. All dental practice implementations include 90 days of monitoring and support to ensure your patient tracking remains stable and HIPAA compliant. We also provide guidance on maintaining compliance as healthcare regulations evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "Dental Practices Recovered Their Meta Tracking",
      description:
        "From small family practices to large dental groups, we've restored HIPAA-compliant tracking for every dental client. See how we recovered their patient acquisition ROAS while maintaining full compliance.",
    },
    restrictionData: {
      severity: "Critical",
      affected: "94%",
    },
    caseStudyIds: [
      "zenon",
      "northridgeaddiction",
      "saneofrance",
      "emiratesadvisory",
      "peachandcream",
    ],
    keywords: [
      "dental practice marketing",
      "dentist Facebook ads",
      "dental patient tracking",
      "HIPAA compliant dental ads",
      "dental clinic advertising",
      "dental patient acquisition",
    ],
    calculators: {
      lead: {
        title: "Dental Practice Lead Impact Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your dental practice patient leads",
        leadLabel: "Patient Leads",
        clientLabel: "New Patients",
        industry: "Dental Practice",
        type: "business" as const,
        urgencyMessage:
          "Every month you delay addressing these restrictions costs your dental practice thousands in lost patient revenue. The compounding effect means early action is critical to minimize long-term impact on patient acquisition.",
      },
      agency: {
        title: "Dental Agency Client Retention Calculator",
        description:
          "Calculate how advertising restrictions will impact your dental agency's client retention and revenue",
        leadLabel: "Client Performance",
        clientLabel: "Dental Clients",
        industry: "Dental Marketing Agency",
        type: "agency" as const,
        urgencyMessage:
          "Without a solution to ad restrictions, your dental clients will see declining patient acquisition and leave for agencies that can deliver results. New client acquisition becomes a nightmare when you can't prove consistent performance in the dental space.",
      },
      revenue: {
        title: "Dental Practice Revenue Loss Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your dental practice revenue",
        industry: "Dental Practice",
        urgencyMessage:
          "Every month you delay action, your patient revenue loss compounds. The sooner you implement HIPAA-compliant tracking solutions, the faster you can recover your lost revenue and competitive advantage in the dental market.",
      },
    },
  },
  "rehab-center": {
    slug: "rehab-center",
    niche: "Rehab & Addiction Treatment",
    package: "RehabPixel Pro",
    businessType: "rehab center",
    businessTypePlural: "rehab centers",
    icon: "🏥",
    eyebrow: "Running Meta Ads for Your Rehab Center?",
    headline: {
      prefix: "Fix",
      conversion: ["Data Sharing Restriction"],
      suffix: "and Track Every Admission for Your Rehab Center",
    },
    subheading:
      'Even if Meta has restricted your rehab domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">RehabPixel Pro</strong> to fix your Meta Ads Conversions for addiction treatment centers.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Starting from 149$/month",
      secondary: "Start tracking rehab admissions in Meta Ads & Events Manager again",
    },
    benefits: [
      "Track all patient admissions",
      "Fix Data Sharing Restrictions",
      "HIPAA & 42 CFR Part 2 Compliant",
    ],
    problemStatement: {
      title: "Data Sharing Restrictions are destroying Rehab Centers",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting addiction treatment centers, blocking critical patient tracking data and causing massive performance drops in your most important marketing channel.",
      alerts: [
        {
          title: "Your domain gets flagged — no events fire",
          description:
            "Standard events blocked: Treatment Inquiry, Admission Request, Insurance Verification, Consultation Booking",
          icon: "AlertTriangle",
        },
        {
          title: "Pixel shows '0 leads' — even though your phone is ringing",
          description: "Hundreds of thousands of rehab patient events blocked daily",
          icon: "XCircle",
        },
        {
          title: "You're spending $5K–$20K/month… and getting nothing back",
          description: "Wasted ad spend due to poor patient acquisition optimization",
          icon: "DollarSign",
        },
      ],
    },
    solution: {
      headerTitle: 'The "RehabPixel Pro" System for Addiction Treatment Centers',
      headerDescription:
        "Our specialized rehab tracking solution restores your Facebook Pixel tracking for addiction treatment centers while maintaining full HIPAA and 42 CFR Part 2 compliance, respecting Meta's healthcare restrictions.",
      items: [
        {
          image: "/images/case-study/zenon_after_2.png",
          title: "Pixel Recovery System",
          description:
            "Restore your existing pixels without creating new ones. Keep your pixel history, custom audiences, and conversion data intact while achieving 100% event recovery for addiction treatment tracking.",
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
            "Attribute all conversions without creating new ads or accounts. Restore tracking on existing accounts while maintaining your account reputation and spending history in the addiction treatment space.",
          benefits: [
            "No new ad accounts needed",
            "100% success rate on eligible accounts",
            "Maintain account history and reputation",
            "No account warming required",
          ],
        },
        {
          image: "/images/hero/unified-dashboard.png",
          title: "GA4 Unified Reporting Dashboard",
          description:
            "Comprehensive tracking dashboard with GA4 integration that displays all critical metrics at a glance. Monitor your rehab center's complete patient journey with real-time data synchronization and advanced attribution reporting.",
          benefits: [
            "Complete GA4 integration",
            "All metrics in one view",
            "Real-time tracking monitoring",
            "Complete patient journey tracking",
          ],
        },
        {
          image: "/images/hero/real-time-dashboard.png",
          title: "Tracking Optimization",
          description:
            "Bulletproof tracking solution that never gets shut down. Real-time event synchronization with complete attribution recovery and zero maintenance required for addiction treatment centers.",
          benefits: [
            "Fix the Restriction by Meta",
            "Real-time event synchronization",
            "Zero maintenance required",
            "No more lost conversions",
          ],
        },
        {
          image: "/images/hero/100-success-no-down-time.png",
          title: "100% Success & Zero Downtime Guarantee",
          description:
            "Every implementation works perfectly with zero downtime. Completely hands-off process that requires no work from your end while maintaining perfect campaign performance for your rehab center.",
          benefits: [
            "100% success rate guaranteed",
            "Zero downtime implementation",
            "Completely hands-off process",
            "Permanent, stable solution",
          ],
        },
        {
          image: "/images/hero/measurement-planning.png",
          title: "Rehab Center Tracking Strategy",
          description:
            "Custom measurement planning specifically designed for addiction treatment centers. We identify the most valuable patient actions and create a tracking framework that captures every admission inquiry and treatment consultation.",
          benefits: [
            "Patient journey mapping",
            "Key rehab metrics identification",
            "ROI-focused tracking setup",
            "Admission conversion optimization",
          ],
        },
        {
          image: "/images/hero/customer-support.png",
          title: "Rehab Center Priority Support",
          description:
            "Dedicated support team with personalized slack channel for instant communication and 24/7 technical support specifically tailored for addiction treatment center marketing needs.",
          benefits: [
            "Dedicated Slack Channel",
            "Free Maintenance up to 3 months",
            "24/7 technical support",
            "Treatment center-specific optimization",
          ],
        },
      ],
    },
    finalCta: {
      title: "📞 Starting from 149$/month",
      description:
        "We'll audit your current setup, show you exactly what's broken, and walk you through how we'll fix it — even if you don't work with us.",
    },
    calendar: {
      title: "Schedule Your Free Rehab Center Meta Tracking Setup",
      description: "Spots are limited — only 5 treatment centers accepted per month.",
    },
    faq: [
      {
        question: "How quickly can you fix my rehab center tracking?",
        answer:
          "Most addiction treatment centers see their patient tracking restored within a week. The process includes: compliance audit (Day 1), HIPAA & 42 CFR Part 2 compliant implementation (Day 2), and testing (Day 3). Complex treatment center setups may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate HIPAA, 42 CFR Part 2, or Meta's healthcare policies?",
        answer:
          "No. Our solution is 100% compliant with HIPAA, 42 CFR Part 2 (addiction treatment privacy regulations), all Meta healthcare policies, and data protection regulations (GDPR, CCPA). We work within Meta's framework specifically for addiction treatment providers to restore tracking while respecting all medical privacy restrictions.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my rehab center expect?",
        answer:
          "Addiction treatment centers typically see 85-95% of their patient tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build custom patient audiences again. Results vary by center size and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my rehab center?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your rehab center tracking within 30 days, you get a full refund. We've successfully helped addiction treatment centers with a 98.7% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for rehab centers?",
        answer:
          "Yes. All rehab center implementations include 90 days of monitoring and support to ensure your patient tracking remains stable and compliant with HIPAA and 42 CFR Part 2. We also provide guidance on maintaining compliance as healthcare regulations evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "Rehab Centers Recovered Their Meta Tracking",
      description:
        "From small outpatient facilities to large inpatient treatment centers, we've restored HIPAA and 42 CFR Part 2 compliant tracking for every rehab client. See how we recovered their patient acquisition ROAS while maintaining full compliance.",
    },
    restrictionData: {
      severity: "Critical",
      affected: "96%",
    },
    caseStudyIds: [
      "zenon",
      "northridgeaddiction",
      "saneofrance",
      "emiratesadvisory",
      "peachandcream",
    ],
    keywords: [
      "rehab center marketing",
      "addiction treatment advertising",
      "rehab patient tracking",
      "HIPAA compliant rehab ads",
      "addiction treatment Facebook ads",
      "rehab center patient acquisition",
      "42 CFR Part 2 compliant ads",
      "substance abuse treatment marketing",
    ],
    calculators: {
      lead: {
        title: "Rehab Center Lead Impact Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your rehab center patient leads",
        leadLabel: "Patient Leads",
        clientLabel: "New Admissions",
        industry: "Rehab Center",
        type: "business" as const,
        urgencyMessage:
          "Every month you delay addressing these restrictions costs your rehab center thousands in lost patient revenue. The compounding effect means early action is critical to minimize long-term impact on patient admissions.",
      },
      agency: {
        title: "Rehab Center Agency Client Retention Calculator",
        description:
          "Calculate how advertising restrictions will impact your rehab marketing agency's client retention and revenue",
        leadLabel: "Client Performance",
        clientLabel: "Rehab Center Clients",
        industry: "Rehab Marketing Agency",
        type: "agency" as const,
        urgencyMessage:
          "Without a solution to ad restrictions, your rehab center clients will see declining patient admissions and leave for agencies that can deliver compliant results. New client acquisition becomes impossible when you can't prove consistent performance in addiction treatment marketing.",
      },
      revenue: {
        title: "Rehab Center Revenue Loss Calculator",
        description:
          "Calculate the financial impact of advertising restrictions on your rehab center revenue",
        industry: "Rehab Center",
        urgencyMessage:
          "Every month you delay action, your patient admission revenue loss compounds. The sooner you implement HIPAA and 42 CFR Part 2 compliant tracking solutions, the faster you can recover your lost revenue and competitive edge in addiction treatment.",
      },
    },
  },
};
