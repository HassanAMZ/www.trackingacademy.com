// @/data/offers.ts
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
  "default-offer": {
    slug: "default-restricted-niche",
    niche: "Restricted Industries",
    package: "RestrictedPixel Pro",
    businessType: "business",
    businessTypePlural: "businesses",
    icon: "🚫",
    eyebrow: "Running Meta Ads in a Restricted Niche?",
    headline: {
      prefix: "Track Every",
      conversion: ["Lead", "Purchase"],
      suffix: "for Your Restricted Niche",
    },
    subheading:
      'Even if Meta has flagged your niche as restricted, blocked your domain, or disabled your events—we install <strong class="text-primary underline">RestrictedPixel Pro</strong> to fix your Meta Ads Conversions for your restricted business.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Schedule Your Call To Fix Your Restricted Niche Meta Ads Tracking",
      secondary:
        "Start tracking conversions in Meta Ads & Events Manager again, even in restricted niches",
    },
    benefits: [
      "Track all conversions in restricted industries",
      "Fix Data Sharing Restrictions",
      "Full Compliance with Niche Regulations",
    ],
    problemStatement: {
      title: "Why Your Restricted Niche Facebook Ads Are Failing",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting businesses in health & wellness, financial services, CBD, politics, and other sensitive categories—blocking critical conversion tracking and causing massive performance drops.",
      alerts: [
        {
          title: "Niche-specific restrictions applied",
          description:
            "Standard events blocked: Lead Generation, Purchase, Contact, and custom conversions across health, finance, CBD, wellness, and political niches",
          icon: "AlertTriangle",
        },
        {
          title: "Custom events can't be used with ads features",
          description:
            "Hundreds of thousands of conversion events blocked across restricted categories",
          icon: "XCircle",
        },
        {
          title: "Revenue Loss: $3,000-$15,000+ monthly",
          description: "Wasted ad spend due to poor optimization in restricted industries",
          icon: "DollarSign",
        },
        {
          title: "Conversion Data Loss: 75-98% of events",
          description:
            "Critical business insights completely missing from restricted niche campaigns",
          icon: "Database",
        },
      ],
    },
    solution: {
      badge: "Niche-Compliant Solution",
      title: 'The "RestrictedPixel Pro" System for Restricted Industries',
      description:
        "Our specialized approach restores your Facebook Pixel tracking for businesses in health & wellness, financial services, CBD, politics, and other restricted categories while maintaining full regulatory compliance.",
      steps: [
        {
          day: 1,
          title: "Restricted Niche Audit & Compliance Assessment",
          description:
            'We conduct a comprehensive onboarding call to analyze your current tracking configuration, identify niche-specific compliance requirements (HIPAA, GDPR, financial regulations), and qualify your business for our "RestrictedPixel Pro" solution.',
          icon: "Search",
        },
        {
          day: 2,
          title: "Compliant Advanced Tracking Setup",
          description:
            "Our experts implement a complete niche-compliant tracking system that captures every lead, sale, and conversion while respecting Meta's restrictions. We handle all technical aspects for your restricted niche business end-to-end.",
          icon: "Settings",
        },
        {
          day: 3,
          title: "Launch & Optimize Compliant Tracking",
          description:
            "Your restricted niche tracking system goes live, capturing every ad interaction within compliance guidelines. We provide monitoring guidelines and optimization recommendations for maximum performance while staying compliant.",
          icon: "TrendingUp",
        },
      ],
    },
    finalCta: {
      title: "Stop Losing Conversions to Meta's Restrictions",
      description:
        "Get your free audit now and discover exactly how many conversions your restricted niche business is losing to Meta's data sharing restrictions.",
    },
    calendar: {
      title: "Schedule Your Free Restricted Niche Meta Tracking Setup",
      description:
        "Get your free audit now and discover exactly how many conversions your business is losing to Meta's niche-specific tracking restrictions.",
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
          "Most dental practices see their patient tracking restored within a week. The process includes: audit (Day 1), HIPAA-compliant implementation (Day 2), and testing (Day 3). Complex dental practice setups may take up to 7 days.",
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
    niche: "Addiction Treatment",
    package: "RehabPixel Pro",
    businessType: "rehab center",
    businessTypePlural: "rehab centers",
    icon: "🏥",
    eyebrow: "Running Meta Ads for Your Rehab Center?",
    headline: {
      prefix: "Track Every",
      conversion: ["Inquiry", "Lead", "Admission"],
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
          "Most rehabilitation centers see their patient tracking restored within a week. The process includes: audit (Day 1), HIPAA-compliant implementation (Day 2), and testing (Day 3). Complex multi-facility setups may take up to 7 days.",
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
      "northridgeaddiction",
      "zenon",
      "saneofrance",
      "peachandcream",
      "emiratesadvisory",
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
    niche: "CBD & Hemp E-commerce",
    package: "CBDPixel Pro",
    businessType: "CBD e-commerce store",
    businessTypePlural: "CBD e-commerce stores",
    icon: "🌿",
    eyebrow: "Running Meta Ads for Your CBD E-commerce Store?",
    headline: {
      prefix: "Track Every",
      conversion: ["Purchase", "Conversion"],
      suffix: "for Your CBD E-commerce Store",
    },
    subheading:
      'Even if Meta has restricted your CBD domain, blocked URL parameters, or disabled your events—we install <strong class="text-primary underline">CBDPixel Pro</strong> to fix your Meta Ads Purchase Tracking for CBD and hemp e-commerce stores.',
    videoId: "tdQufJ-qadE",
    cta: {
      primary: "Schedule Your Call To Fix Your CBD E-commerce Meta Ads Tracking",
      secondary: "Start tracking CBD purchases in Meta Ads & Events Manager again",
    },
    benefits: [
      "Track all CBD purchases",
      "Fix Data Sharing Restrictions",
      "Compliance-Ready Setup",
    ],
    problemStatement: {
      title: "Why Your CBD E-commerce Store Facebook Ads Are Failing",
      description:
        "Meta's 2025 data sharing restrictions are specifically targeting CBD and hemp e-commerce stores, blocking critical purchase tracking data and causing massive performance drops in hemp product marketing.",
      alerts: [
        {
          title: "Hemp & CBD e-commerce restrictions applied",
          description: "Standard events blocked: Purchase, Add to Cart, Complete Registration",
          icon: "AlertTriangle",
        },
        {
          title: "Custom CBD e-commerce events can't be used with ads features",
          description: "Hundreds of thousands of CBD purchase events blocked",
          icon: "XCircle",
        },
        {
          title: "Revenue Loss: $3,000-$12,000+ monthly",
          description: "Wasted ad spend due to poor CBD purchase optimization",
          icon: "DollarSign",
        },
        {
          title: "Purchase Data Loss: 75-92% of conversions",
          description: "Critical CBD e-commerce insights completely missing",
          icon: "Database",
        },
      ],
    },
    solution: {
      badge: "Compliance-Ready Solution",
      title: 'The "CBDPixel Pro" System for CBD & Hemp E-commerce',
      description:
        "Our specialized approach restores your Facebook Pixel tracking for CBD e-commerce stores while maintaining full regulatory compliance, hemp advertising guidelines, and all Meta advertising policies.",
      steps: [
        {
          day: 1,
          title: "CBD E-commerce Audit & Compliance Assessment",
          description:
            'We conduct a comprehensive onboarding call to analyze your current CBD e-commerce tracking configuration, identify regulatory compliance requirements, and qualify your store for our "CBDPixel Pro" solution.',
          icon: "Search",
        },
        {
          day: 2,
          title: "Compliance-Ready Advanced Setup",
          description:
            "Our experts implement a complete compliance-ready tracking system that captures every CBD purchase, product view, and customer conversion. We handle all technical aspects for your CBD e-commerce store end-to-end.",
          icon: "Settings",
        },
        {
          day: 3,
          title: "Launch & Optimize CBD Purchase Tracking",
          description:
            "Your CBD e-commerce tracking system goes live, capturing every customer purchase interaction while maintaining strict regulatory compliance. We provide monitoring guidelines and optimization recommendations for maximum revenue performance.",
          icon: "TrendingUp",
        },
      ],
    },
    finalCta: {
      title: "Stop Losing CBD Purchases to Broken Tracking",
      description:
        "Get your free audit now and discover exactly how many CBD purchases your e-commerce store is losing to Facebook's data sharing restrictions.",
    },
    calendar: {
      title: "Schedule Your Free CBD E-commerce Meta Tracking Setup",
      description:
        "Get your free audit now and discover exactly how many purchases your CBD e-commerce store is losing to Meta's tracking restrictions.",
    },
    faq: [
      {
        question: "How quickly can you fix my CBD e-commerce tracking?",
        answer:
          "Most CBD e-commerce stores see their purchase tracking restored within a week. The process includes: audit (Day 1), compliance-ready implementation (Day 2), and testing (Day 3). Complex multi-product CBD stores may take up to 7 days.",
        icon: "Zap",
      },
      {
        question: "Will this violate Meta's hemp/CBD e-commerce policies?",
        answer:
          "No. Our solution is 100% compliant with all Meta hemp/CBD e-commerce policies, regulatory guidelines, and data protection regulations. We work within Meta's framework specifically designed for compliant CBD e-commerce businesses.",
        icon: "Shield",
      },
      {
        question: "What kind of results should my CBD e-commerce store expect?",
        answer:
          "CBD e-commerce stores typically see 80-95% of their purchase tracking accuracy restored, ROAS recovery to pre-restriction levels, and the ability to build custom customer audiences again. Results vary by product mix and implementation complexity.",
        icon: "TrendingUp",
      },
      {
        question: "What if it doesn't work for my CBD e-commerce store?",
        answer:
          "We offer a 30-day money-back guarantee. If we can't significantly improve your CBD e-commerce purchase tracking within 30 days, you get a full refund. We've successfully helped 40+ CBD e-commerce stores, with a 96.8% success rate.",
        icon: "DollarSign",
      },
      {
        question: "Do you provide ongoing support for CBD e-commerce stores?",
        answer:
          "Yes. All CBD e-commerce implementations include 90 days of monitoring and support to ensure your purchase tracking remains stable and compliant. We also provide guidance on maintaining compliance as hemp regulations evolve.",
        icon: "RefreshCw",
      },
    ],
    testimonialSection: {
      title: "CBD E-commerce Stores Recovered Their Meta Tracking",
      description:
        "From small CBD startups to large hemp e-commerce companies, we've restored compliant tracking for every client. See how we recovered their purchase ROAS while maintaining full regulatory compliance.",
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
      "CBD e-commerce marketing",
      "hemp product advertising",
      "CBD online store ads",
      "CBD ecommerce tracking",
      "hemp e-commerce marketing",
      "CBD compliance advertising",
    ],
  },
};
