// @/data/offers.ts
export interface OfferData {
  slug: string;
  industry: string;
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
  solution: {
    badge: string;
    title: string;
    description: string;
    steps: {
      day: number;
      title: string;
      description: string;
      icon: "Search" | "Settings" | "TrendingUp";
    }[];
  };
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
}

export const offers: Record<string, OfferData> = {
  "dental-clinic-01": {
    slug: "dental-clinic",
    industry: "Dental",
    package: "DentalPixel Pro",
    businessType: "dental clinic",
    businessTypePlural: "dental clinics",
    icon: "🦷",
    eyebrow: "Running Meta Ads for Your Dental Clinic?",
    headline: {
      prefix: "Track Every",
      conversion: ["Appointment", "Patient"],
      suffix: "for Your Dental Clinic",
    },
    subheading:
      'Even if Meta has restricted your dental domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">DentalPixel Pro</strong> to fix your Meta Ads Conversions for dental practices.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Schedule Your Call To Fix Your Dental Clinic Meta Ads Tracking",
      secondary: "Start tracking dental patient conversions in Meta Ads & Events Manager again",
    },
    benefits: [
      "Track all patient conversions",
      "Fix Data Sharing Restrictions",
      "HIPAA Compliant Setup",
    ],
    problemStatement: {
      title: "Why Your Dental Clinic Facebook Ads Are Failing",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting healthcare providers like dental clinics, blocking critical patient tracking data and causing massive performance drops.",
      alerts: [
        {
          title: "Health & Medical restrictions applied",
          description:
            "Standard events blocked: Patient Lead, Appointment Booking, Treatment Purchase",
          icon: "AlertTriangle",
        },
        {
          title: "Custom dental events can't be used with ads features",
          description: "Hundreds of thousands of dental patient events blocked",
          icon: "XCircle",
        },
        {
          title: "Revenue Loss: $2,000-$8,000+ monthly",
          description: "Wasted ad spend due to poor patient acquisition optimization",
          icon: "DollarSign",
        },
        {
          title: "Patient Data Loss: 70-95% of conversions",
          description: "Critical dental practice insights completely missing",
          icon: "Database",
        },
      ],
    },
    solution: {
      badge: "HIPAA Compliant Solution",
      title: 'The "DentalPixel Pro" System for Dental Clinics',
      description:
        "Our specialized approach restores your Facebook Pixel tracking for dental practices while maintaining full HIPAA compliance and all data protection regulations.",
      steps: [
        {
          day: 1,
          title: "Dental Practice Audit & Assessment",
          description:
            'We conduct a comprehensive onboarding call to analyze your current dental practice tracking configuration, identify HIPAA compliance requirements, and qualify your practice for our "DentalPixel Pro" solution.',
          icon: "Search",
        },
        {
          day: 2,
          title: "HIPAA-Compliant Advanced Setup",
          description:
            "Our experts implement a complete HIPAA-compliant tracking system that captures every patient lead, appointment booking, and treatment purchase. We handle all technical aspects for your dental practice end-to-end.",
          icon: "Settings",
        },
        {
          day: 3,
          title: "Launch & Optimize Patient Tracking",
          description:
            "Your dental practice tracking system goes live, capturing every patient ad interaction. We provide monitoring guidelines and optimization recommendations for maximum patient acquisition performance.",
          icon: "TrendingUp",
        },
      ],
    },
    finalCta: {
      title: "Stop Losing Dental Patients to Broken Tracking",
      description:
        "Get your free audit now and discover exactly how many patients your dental clinic is losing to Facebook's data sharing restrictions.",
    },
    calendar: {
      title: "Schedule Your Free Dental Practice Meta Tracking Setup",
      description:
        "Get your free audit now and discover exactly how many patients your dental clinic is losing to Meta's tracking restrictions.",
    },
    faq: [
      {
        question: "How quickly can you fix my dental clinic tracking?",
        answer:
          "Most dental practices see their patient tracking restored within 72 hours. The process includes: audit (Day 1), HIPAA-compliant implementation (Day 2), and testing (Day 3). Complex dental practice setups may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate HIPAA or Meta's healthcare policies?",
        answer:
          "No. Our solution is 100% compliant with HIPAA, all Meta healthcare policies, and data protection regulations (GDPR, CCPA). We work within Meta's framework specifically designed for healthcare providers to restore tracking while respecting all medical privacy restrictions.",
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
          "We offer a 30-day money-back guarantee. If we can't significantly improve your dental practice tracking within 30 days, you get a full refund. We've successfully helped dental practices, with a 98.7% success rate.",
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
  },
  "rehab-center": {
    slug: "rehab-center",
    industry: "Addiction Treatment",
    package: "RehabPixel Pro",
    businessType: "rehab center",
    businessTypePlural: "rehab centers",
    icon: "🏥",
    eyebrow: "Running Meta Ads for Your Rehab Center?",
    headline: {
      prefix: "Track Every",
      conversion: ["Admission", "Lead", "Inquiry"],
      suffix: "for Your Rehab Center",
    },
    subheading:
      'Even if Meta has restricted your addiction treatment domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">RehabPixel Pro</strong> to fix your Meta Ads Conversions for rehabilitation facilities.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Schedule Your Call To Fix Your Rehab Center Meta Ads Tracking",
      secondary: "Start tracking patient admissions in Meta Ads & Events Manager again",
    },
    benefits: [
      "Track all patient admissions",
      "Fix Data Sharing Restrictions",
      "HIPAA Compliant Setup",
    ],
    problemStatement: {
      title: "Why Your Rehab Center Facebook Ads Are Failing",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting healthcare and addiction treatment providers, blocking critical patient tracking data and causing massive performance drops in rehabilitation marketing.",
      alerts: [
        {
          title: "Health & Medical restrictions applied",
          description:
            "Standard events blocked: Patient Lead, Admission Inquiry, Treatment Purchase",
          icon: "AlertTriangle",
        },
        {
          title: "Custom addiction treatment events can't be used with ads features",
          description: "Hundreds of thousands of rehab patient events blocked",
          icon: "XCircle",
        },
        {
          title: "Revenue Loss: $5,000-$15,000+ monthly",
          description: "Wasted ad spend due to poor patient acquisition optimization",
          icon: "DollarSign",
        },
        {
          title: "Patient Data Loss: 80-98% of conversions",
          description: "Critical rehabilitation center insights completely missing",
          icon: "Database",
        },
      ],
    },
    solution: {
      badge: "HIPAA Compliant Solution",
      title: 'The "RehabPixel Pro" System for Addiction Treatment Centers',
      description:
        "Our specialized approach restores your Facebook Pixel tracking for rehabilitation facilities while maintaining full HIPAA compliance, patient privacy protections, and all addiction treatment advertising regulations.",
      steps: [
        {
          day: 1,
          title: "Rehab Center Audit & Compliance Assessment",
          description:
            'We conduct a comprehensive onboarding call to analyze your current rehabilitation center tracking configuration, identify HIPAA and addiction treatment compliance requirements, and qualify your facility for our "RehabPixel Pro" solution.',
          icon: "Search",
        },
        {
          day: 2,
          title: "HIPAA-Compliant Advanced Setup",
          description:
            "Our experts implement a complete HIPAA-compliant tracking system that captures every patient inquiry, admission consultation, and treatment enrollment. We handle all technical aspects for your rehabilitation center end-to-end.",
          icon: "Settings",
        },
        {
          day: 3,
          title: "Launch & Optimize Patient Acquisition Tracking",
          description:
            "Your rehab center tracking system goes live, capturing every patient ad interaction while maintaining strict privacy compliance. We provide monitoring guidelines and optimization recommendations for maximum admission performance.",
          icon: "TrendingUp",
        },
      ],
    },
    finalCta: {
      title: "Stop Losing Patients to Broken Tracking",
      description:
        "Get your free audit now and discover exactly how many patients your rehab center is losing to Facebook's data sharing restrictions.",
    },
    calendar: {
      title: "Schedule Your Free Rehab Center Meta Tracking Setup",
      description:
        "Get your free audit now and discover exactly how many patients your rehabilitation facility is losing to Meta's tracking restrictions.",
    },
    faq: [
      {
        question: "How quickly can you fix my rehab center tracking?",
        answer:
          "Most rehabilitation centers see their patient tracking restored within 72 hours. The process includes: audit (Day 1), HIPAA-compliant implementation (Day 2), and testing (Day 3). Complex multi-facility setups may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate HIPAA or Meta's healthcare policies?",
        answer:
          "No. Our solution is 100% compliant with HIPAA, all Meta healthcare policies, addiction treatment advertising guidelines, and data protection regulations (GDPR, CCPA). We work within Meta's framework specifically designed for healthcare providers.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my rehab center expect?",
        answer:
          "Rehabilitation centers typically see 90-98% of their patient tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build custom patient audiences again. Results vary by facility size and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my rehab center?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your rehabilitation center tracking within 30 days, you get a full refund. We've successfully helped 35+ rehab centers, with a 97.2% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for rehab centers?",
        answer:
          "Yes. All rehabilitation center implementations include 90 days of monitoring and support to ensure your patient tracking remains stable and HIPAA compliant. We also provide guidance on maintaining compliance as healthcare regulations evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "Rehab Centers Recovered Their Meta Tracking",
      description:
        "From small residential facilities to large treatment networks, we've restored HIPAA-compliant tracking for every rehabilitation client. See how we recovered their patient acquisition ROAS while maintaining full compliance.",
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
      "addiction treatment ads",
      "rehabilitation facility tracking",
      "HIPAA compliant rehab ads",
      "addiction recovery advertising",
      "treatment center patient acquisition",
    ],
  },

  "cbd-business": {
    slug: "cbd-business",
    industry: "CBD & Hemp",
    package: "CBDPixel Pro",
    businessType: "CBD business",
    businessTypePlural: "CBD businesses",
    icon: "🌿",
    eyebrow: "Running Meta Ads for Your CBD Business?",
    headline: {
      prefix: "Track Every",
      conversion: ["Sale", "Lead", "Purchase"],
      suffix: "for Your CBD Business",
    },
    subheading:
      'Even if Meta has restricted your CBD domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">CBDPixel Pro</strong> to fix your Meta Ads Conversions for CBD and hemp businesses.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Schedule Your Call To Fix Your CBD Business Meta Ads Tracking",
      secondary: "Start tracking CBD sales in Meta Ads & Events Manager again",
    },
    benefits: ["Track all CBD sales", "Fix Data Sharing Restrictions", "FDA Compliant Setup"],
    problemStatement: {
      title: "Why Your CBD Business Facebook Ads Are Failing",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting CBD and hemp businesses, blocking critical sales tracking data and causing massive performance drops in cannabis marketing.",
      alerts: [
        {
          title: "Cannabis & CBD restrictions applied",
          description: "Standard events blocked: Purchase, Add to Cart, CBD Product Lead",
          icon: "AlertTriangle",
        },
        {
          title: "Custom CBD events can't be used with ads features",
          description: "Hundreds of thousands of CBD sales events blocked",
          icon: "XCircle",
        },
        {
          title: "Revenue Loss: $3,000-$12,000+ monthly",
          description: "Wasted ad spend due to poor CBD sales optimization",
          icon: "DollarSign",
        },
        {
          title: "Sales Data Loss: 75-92% of conversions",
          description: "Critical CBD business insights completely missing",
          icon: "Database",
        },
      ],
    },
    solution: {
      badge: "FDA Compliant Solution",
      title: 'The "CBDPixel Pro" System for CBD & Hemp Businesses',
      description:
        "Our specialized approach restores your Facebook Pixel tracking for CBD businesses while maintaining full FDA compliance, hemp regulations, and all cannabis advertising guidelines.",
      steps: [
        {
          day: 1,
          title: "CBD Business Audit & Compliance Assessment",
          description:
            'We conduct a comprehensive onboarding call to analyze your current CBD business tracking configuration, identify FDA and hemp compliance requirements, and qualify your business for our "CBDPixel Pro" solution.',
          icon: "Search",
        },
        {
          day: 2,
          title: "FDA-Compliant Advanced Setup",
          description:
            "Our experts implement a complete FDA-compliant tracking system that captures every CBD sale, product inquiry, and customer conversion. We handle all technical aspects for your CBD business end-to-end.",
          icon: "Settings",
        },
        {
          day: 3,
          title: "Launch & Optimize CBD Sales Tracking",
          description:
            "Your CBD business tracking system goes live, capturing every customer ad interaction while maintaining strict regulatory compliance. We provide monitoring guidelines and optimization recommendations for maximum sales performance.",
          icon: "TrendingUp",
        },
      ],
    },
    finalCta: {
      title: "Stop Losing CBD Sales to Broken Tracking",
      description:
        "Get your free audit now and discover exactly how many CBD sales your business is losing to Facebook's data sharing restrictions.",
    },
    calendar: {
      title: "Schedule Your Free CBD Business Meta Tracking Setup",
      description:
        "Get your free audit now and discover exactly how many sales your CBD business is losing to Meta's tracking restrictions.",
    },
    faq: [
      {
        question: "How quickly can you fix my CBD business tracking?",
        answer:
          "Most CBD businesses see their sales tracking restored within 72 hours. The process includes: audit (Day 1), FDA-compliant implementation (Day 2), and testing (Day 3). Complex multi-product CBD stores may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate FDA or Meta's cannabis policies?",
        answer:
          "No. Our solution is 100% compliant with FDA regulations, all Meta cannabis/CBD policies, hemp advertising guidelines, and data protection regulations. We work within Meta's framework specifically designed for compliant CBD businesses.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my CBD business expect?",
        answer:
          "CBD businesses typically see 80-95% of their sales tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build custom customer audiences again. Results vary by product mix and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my CBD business?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your CBD business tracking within 30 days, you get a full refund. We've successfully helped 40+ CBD businesses, with a 96.8% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for CBD businesses?",
        answer:
          "Yes. All CBD business implementations include 90 days of monitoring and support to ensure your sales tracking remains stable and FDA compliant. We also provide guidance on maintaining compliance as cannabis regulations evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "CBD Businesses Recovered Their Meta Tracking",
      description:
        "From small CBD startups to large hemp companies, we've restored compliant tracking for every cannabis client. See how we recovered their sales ROAS while maintaining full regulatory compliance.",
    },
    restrictionData: {
      severity: "High",
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
      "CBD business marketing",
      "hemp product advertising",
      "cannabis business ads",
      "CBD ecommerce tracking",
      "hemp industry marketing",
      "CBD compliance advertising",
    ],
  },
};
