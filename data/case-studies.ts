export interface Analytics {
  period: string;
  recoveredFromAdBlockersPercentage: number;
  recoveredFromTrackingPreventionPercentage: number;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

export interface Milestone {
  day: number;
  name: string;
  description: string;
  expectedOutcome: string;
}

export interface CaseStudy {
  id: string;
  name: string;
  url: string;
  plan: string;
  title: string;
  description: string;
  imageUrl: string;
  mobileUrl: string;
  siteUrl: string;
  analytics?: Analytics;
  testimonial: Testimonial;
  platforms: string[];
  milestones: Milestone[];
  projectTimeline: {
    startDate: string;
    endDate: string;
    durationDays: number;
  };
  owner: string;
  client: string;
  budget: number;
  technologies: string[];
  challenges: string[];
  solutions: string[];
  results: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "foxyai",
    name: "Foxy.ai Tracking Setup",
    url: "https://foxy.ai",
    plan: "Pro+",
    title: "Comprehensive Tracking Solution for Foxy.ai",
    description:
      "We implemented a robust analytics and tracking infrastructure for Foxy.ai, addressing conversion tracking discrepancies and bypassing ad blockers with server-side tracking.",
    imageUrl: "/images/for-businesses/client-foxyai-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-foxyai-mobile-home.png",
    siteUrl: "https://foxy.ai",

    analytics: {
      period: "30 days",
      recoveredFromAdBlockersPercentage: 3.4,
      recoveredFromTrackingPreventionPercentage: 45.22,
    },
    testimonial: {
      quote:
        "Hassan was great to work with! He made the complex conversion tracking process smooth and stress-free, ensuring spot-on tracking that improved campaign performance.",
      author: "Sam Emara",
      role: "Client",
      image: "/images/sam-emara.jpg",
    },
    platforms: [
      "Custom Build Website",
      "Google Analytics 4",
      "Google Tag Manager",
      "Facebook Pixel",
      "Facebook Conversion API",
      "Stape",
      "PostHog",
    ],

    milestones: [
      {
        day: 1,
        name: "Access Provisioning",
        description: "Secure necessary account access for analytics platforms",
        expectedOutcome: "Full system access ready for implementation",
      },
      {
        day: 2,
        name: "Web Tracking Setup",
        description: "Configure client-side analytics and advertising tracking",
        expectedOutcome: "Client-side tracking operational",
      },
      {
        day: 2,
        name: "Server-Side Tracking Setup",
        description: "Implement server-side tracking for analytics",
        expectedOutcome: "90-95% conversion accuracy achieved",
      },
      {
        day: 1,
        name: "Consent Management Integration",
        description: "Implement consent management for GDPR & CCPA compliance",
        expectedOutcome: "Legal compliance verified",
      },
      {
        day: 1,
        name: "Event Tracking & Testing",
        description: "Configure and validate key conversion events",
        expectedOutcome: "Full tracking system functional & tested",
      },
      {
        day: 1,
        name: "Analytics Dashboard Setup",
        description: "Build real-time tracking dashboard",
        expectedOutcome: "Analytics available for reporting & optimization",
      },
    ],
    projectTimeline: {
      startDate: "Mar 28, 2025",
      endDate: "Apr 28, 2025",
      durationDays: 32,
    },
    owner: "Shahzada Ali Hassan",
    client: "Sam Emara",
    budget: 1200,
    technologies: [
      "Analytics Tagging",
      "Web Analytics",
      "Advertising Pixel",
      "Event Tracking",
      "Server-Side Tracking",
      "Consent Management",
    ],
    challenges: [
      "Significant discrepancies in tracking data, with low accuracy for purchase and signup events.",
      "High impact from ad blockers and tracking prevention.",
      "Complex checkout flow requiring precise data implementation.",
      "Need for GDPR/CCPA compliance.",
    ],
    solutions: [
      "Implemented server-side tracking to bypass ad blockers and improve data accuracy.",
      "Configured comprehensive event tracking for key user actions.",
      "Integrated consent management for GDPR/CCPA compliance.",
      "Built a real-time analytics dashboard for campaign optimization.",
    ],
    results: [
      "Achieved 95% accuracy for purchase events (up from 60%) and 92% for signups (up from 65%).",
      "Recovered 3.4% of requests from ad blockers and 45.22% from tracking prevention.",
      "Increased ROAS with accurate campaign attribution.",
      "Achieved 100% GDPR/CCPA compliance.",
    ],
  },
  {
    id: "peachandcream",
    name: "Peach and Cream Shopify Tracking",
    url: "https://peachandcream.com",
    plan: "Standard",
    title: "Shopify Pixel Tracking for Peach and Cream",
    description:
      "We resolved Meta Pixel tracking issues for Peach and Cream's Shopify store, enabling compliant ad scaling for wellness products while navigating restrictions on intimacy products.",
    imageUrl: "/images/for-businesses/client-peachandcream-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-peachandcream-mobile-home.png",
    siteUrl: "https://peachandcream.com",

    testimonial: {
      quote:
        "Super helpful, quick, and comprehensive. Shahzada solved our problem efficiently, complementing a nicely done work in an effective way.",
      author: "Mathieu Frechette",
      role: "Client",
      image: "/images/mathieu-frechette.jpg",
    },
    platforms: [
      "Shopify",
      "Google Analytics 4",
      "Google Tag Manager",
      "Facebook Pixel",
      "Facebook Conversion API",
      "Stape",
    ],

    milestones: [
      {
        day: 1,
        name: "Access Setup",
        description: "Gain access to Shopify, Meta, and analytics platforms",
        expectedOutcome: "Full access to required systems",
      },
      {
        day: 1,
        name: "Server-Side Tracking Configuration",
        description:
          "Set up server-side tracking to bypass domain restrictions",
        expectedOutcome: "Tracking operational for compliant products",
      },
      {
        day: 2,
        name: "Event Testing",
        description: "Test and validate tracking for key events",
        expectedOutcome: "Accurate tracking confirmed",
      },
    ],
    projectTimeline: {
      startDate: "Apr 27, 2025",
      endDate: "Apr 28, 2025",
      durationDays: 2,
    },
    owner: "Shahzada Ali Hassan",
    client: "Mathieu Frechette",
    budget: 1200,
    technologies: [
      "Server-Side Tracking",
      "Advertising Pixel",
      "E-commerce Platform",
    ],
    challenges: [
      "Meta Pixel blocked due to restricted intimacy products.",
      "Need to track wellness products without risking further bans.",
      "Single Shopify store for both product types.",
    ],
    solutions: [
      "Implemented server-side tracking to bypass domain restrictions.",
      "Configured tracking for wellness products only.",
      "Ensured compliance with Meta's advertising policies.",
    ],
    results: [
      "Enabled accurate tracking for wellness product ads.",
      "Avoided further Meta bans by excluding intimacy products.",
      "Set up future-proof tracking for new product additions.",
    ],
  },
  {
    id: "askdrnandi",
    name: "ClickFunnels GA4 Tracking",
    url: "https://offers.askdrnandi.com",
    plan: "Standard",
    title: "Google Analytics 4 Tracking for ClickFunnels",
    description:
      "We fixed inaccurate tracking on a ClickFunnels landing page funnel, integrating GA4 and Meta tracking with a real-time analytics dashboard.",
    imageUrl: "/images/for-businesses/client-askdrnandi-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-askdrnandi-mobile-home.png",
    siteUrl: "https://offers.askdrnandi.com",

    testimonial: {
      quote: "Hassan is a rockstar, exceptional work as always.",
      author: "Alina Islam",
      role: "Client",
      image: "/images/alina-islam.jpg",
    },
    platforms: ["ClickFunnels", "Google Analytics 4", "Google Tag Manager"],
    milestones: [
      {
        day: 1,
        name: "Access and Assessment",
        description: "Gain access and assess tracking discrepancies",
        expectedOutcome: "Identified tracking issues",
      },
      {
        day: 2,
        name: "Tracking Setup",
        description: "Configure GA4 and Meta tracking",
        expectedOutcome: "Tracking implemented",
      },
      {
        day: 3,
        name: "Dashboard Creation",
        description: "Build real-time analytics dashboard",
        expectedOutcome: "Data visualization ready",
      },
    ],
    projectTimeline: {
      startDate: "Feb 3, 2025",
      endDate: "Feb 18, 2025",
      durationDays: 15,
    },
    owner: "Shahzada Ali Hassan",
    client: "Alina Islam",
    budget: 150,
    technologies: [
      "Web Analytics",
      "Advertising Pixel",
      "Funnel Platform",
      "Analytics Dashboard",
    ],
    challenges: [
      "Inaccurate tracking on ad platforms and GA4.",
      "Lack of dataLayer support in ClickFunnels.",
      "Need for upsell and downsell tracking.",
    ],
    solutions: [
      "Configured GA4 and Meta tracking via URL-based rules.",
      "Integrated Zapier for enhanced tracking accuracy.",
      "Created a real-time analytics dashboard.",
    ],
    results: [
      "Achieved accurate tracking for page views, add to cart, and purchases.",
      "Enabled reliable data for ad platform attribution.",
      "Provided actionable insights via a custom dashboard.",
    ],
  },
];
