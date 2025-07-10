interface Analytics {
  period: string;
  recoveredFromAdBlockersPercentage: number;
  recoveredFromTrackingPreventionPercentage: number;
  accuracy: number;
  images?: {
    before: string[];
    after: string[];
  };
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  image: string;
}

interface Milestone {
  name: string;
  description: string;
  expectedOutcome: string;
}
export interface ProjectTimelineProps {
  startDate: string;
  endDate: string;
  durationDays: number;
}
export interface CaseStudy {
  id: string;
  name: string;
  embedId?: {
    loom?: string;
    youtube?: string;
  };
  url: string;
  plan: string;
  title: string;
  description: string;
  imageUrl: string;
  mobileUrl: string;
  siteUrl: string;
  analytics: Analytics;
  testimonial: Testimonial;
  platforms: string[];
  milestones: Milestone[];
  projectTimeline: ProjectTimelineProps;
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
    id: "zenon",
    name: "Zenon.ae",
    url: "https://zenon.ae",
    plan: "Pro",
    title:
      "Restoring Meta Ads Tracking for Digital Dental Clinic in UAE with Server-Side Conversion API",
    description:
      "Bypassing Data Sharing Restrictions and Complete migration from traditional Facebook Pixel to server-side tracking using GTM server containers and Facebook Conversion API, achieving significant data recovery from ad blockers and tracking prevention.",

    imageUrl: "/images/for-businesses/client-zenon-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-zenon-mobile-home.png",
    siteUrl: "https://zenon.ae",
    analytics: {
      period: "10 days",
      recoveredFromAdBlockersPercentage: 1.56,
      recoveredFromTrackingPreventionPercentage: 19.27,
      accuracy: 97,
      images: {
        before: ["/images/case-study/zenon_before_1.png", "/images/case-study/zenon_before_2.png"],
        after: ["/images/case-study/zenon_after_1.png", "/images/case-study/zenon_after_2.png"],
      },
    },
    testimonial: {
      quote: "Perfect. Confirmed with the tracking team theres no issue and all is tracking fine",
      author: "Anthony Adeloye",
      role: "Marketing Director, Zenon.ae",
      image: "/images/clients/anthony-adeloye.png",
    },
    platforms: [
      "Nuxt Js",
      "Facebook CAPI",
      "Google Analytics 4",
      "Stape Analytics",
      "Looker Studio",
    ],
    milestones: [
      {
        name: "Server Container Configuration",
        description:
          "Set up GTM server container with Stape hosting and custom subdomain implementation",
        expectedOutcome:
          "Functional server-side tracking infrastructure with first-party data collection",
      },
      {
        name: "Conversion API Implementation",
        description: "Complete migration from Facebook Pixel to Conversion API with event mapping",
        expectedOutcome: "Enhanced data accuracy and attribution with user information capture",
      },
      {
        name: "Quality Assurance Testing",
        description:
          "Comprehensive event testing using Facebook Events Manager and server preview mode",
        expectedOutcome: "Verified data accuracy across all tracked events and user journeys",
      },
      {
        name: "Documentation & Training Delivery",
        description:
          "Complete advertiser documentation with Looker Studio dashboard and video tutorials",
        expectedOutcome: "Client team equipped for ongoing management and optimization",
      },
    ],
    projectTimeline: {
      startDate: "2024-06-22",
      endDate: "2024-06-25",
      durationDays: 3,
    },
    owner: "Digital Analytics Team",
    client: "Zenon Dental Care & Aesthetic Dentistry",
    budget: 1200,
    technologies: ["Facebook CAPI", "Stape", "Nuxt Js", "Looker Studio"],
    challenges: [
      "23.81% of requests affected by tracking prevention measures",
      "iOS 14.5+ Safari tracking restrictions causing data loss",
      "Ad blockers preventing client-side Facebook Pixel execution",
      "Incomplete customer journey tracking affecting attribution",
      "Cookie restrictions in modern browsers",
      "Lack of user information capture for enhanced targeting",
    ],
    solutions: [
      "Implemented server-side processing to bypass client-side restrictions",
      "Set up first-party data collection through custom subdomain (metrics.zenon.ae)",
      "Created server-side routing to avoid blocked tracking scripts",
      "Integrated Facebook Click ID (fbclid) for enhanced attribution",
      "Developed custom JavaScript tags for form data capture",
      "Built comprehensive testing framework with real-time validation",
    ],
    results: [
      "Achieved 20.83% overall recovery rate from tracking prevention and ad blockers",
      "Processed 7,545 total requests over 10-day monitoring period",
      "Recovered 1,454 requests (19.27%) from tracking prevention",
      "Recovered 118 requests (1.56%) from ad blockers",
      "Successfully tracked Page View (1,960), View Item (1,233), and Generate Lead (18) events",
      "Implemented complete user journey tracking with email, phone, and name capture",
      "Created automated Looker Studio reporting dashboard",
      "Delivered comprehensive advertiser documentation with video tutorials",
      "Achieved 100% event accuracy in Facebook Events Manager testing",
    ],
  },
  {
    id: "northridgeaddiction",
    name: "Northridge Addiction Meta Pixel Tracking Recovery",
    url: "https://start.northridgeaddiction.com",
    embedId: { loom: "62b9ecb8be104082ae5e2f191f5d8b21" },
    plan: "Business",
    title: "Restoring Meta Pixel Tracking for Northridge Addiction with Server-Side Conversion API",
    description:
      "Northridge Addiction, a health and wellness website, faced restricted Meta Pixel tracking due to content-related blocks despite compliance with legit scripts. Over a multi-day engagement, we implemented server-side tracking using Custom Server and Meta Conversion API, capturing user data on the thank-you page post-Typeform submission. This achieved 95% tracking accuracy, recovering 21.72% of events from tracking prevention and 10.4% from ad blockers, enabling accurate ad attribution.",
    imageUrl: "/images/for-businesses/client-northridgeaddiction-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-northridgeaddiction-mobile-home.png",
    siteUrl: "https://start.northridgeaddiction.com",
    analytics: {
      period: "10 days",
      recoveredFromAdBlockersPercentage: 10.4,
      recoveredFromTrackingPreventionPercentage: 21.72,
      images: {
        before: [
          "/images/case-study/northridgeaddiction_before_1.png",
          "/images/case-study/northridgeaddiction_before_2.png",
        ],
        after: [
          "/images/case-study/northridgeaddiction_after_1.png",
          "/images/case-study/northridgeaddiction_after_2.png",
        ],
      },
      accuracy: 95,
    },
    testimonial: {
      quote: "This setup is cooking! Great job, very excited with the results.",
      author: "Kelly Joseph",
      role: "Marketing Manager",
      image: "/images/clients/kelly-joseph.png",
    },
    platforms: [
      "Meta Pixel",
      "Meta Conversion API",
      "Google Tag Manager",
      "Custom Server",
      "Typeform",
      "Webflow",
    ],
    milestones: [
      {
        name: "Onboarding & Audit",
        description:
          "Conducted onboarding with Kelly to understand tracking issues, audited existing Meta Pixel setup, and identified restrictions due to health-related content.",
        expectedOutcome:
          "Confirmed pixel blocks and planned server-side tracking with Meta Conversion API.",
      },
      {
        name: "Access & Pixel Configuration",
        description:
          "Secured access to Meta Events Manager and Conversion API token for pixel 1385524702668280, updated Florida ad set to pixel 1405345420657676, and configured GTM for server-side tracking.",
        expectedOutcome:
          "Enabled tracking for SubmitApplication events on Typeform submissions redirected to thank-you page.",
      },
      {
        name: "Server-Side Implementation",
        description:
          "Set up Custom Server server container, implemented Meta Conversion API, and captured user data (email, name) on thank-you page for enhanced event matching.",
        expectedOutcome: "Achieved 95% tracking accuracy with proper ad attribution.",
      },
      {
        name: "Testing & Optimization",
        description:
          "Tested SubmitApplication event to ensure no over-firing, removed unnecessary triggers for /sorry page, and verified setup for new funnel compatibility.",
        expectedOutcome:
          "Stable tracking with 10.4% recovery from ad blockers and 21.72% from tracking prevention over 10 days.",
      },
    ],
    projectTimeline: {
      startDate: "Jun 13, 2025",
      endDate: "Jun 16, 2025",
      durationDays: 10,
    },
    owner: "Shahzada Ali Hassan",
    client: "Northridge Addiction Treatment & Mental Health",
    budget: 200,
    technologies: [
      "Server-Side Tracking",
      "Meta Conversion API",
      "Google Tag Manager",
      "Custom Server",
      "Event Tracking",
      "Typeform Integration",
    ],
    challenges: [
      "Restricted Meta Pixel due to health-related content despite compliance",
      "Inconsistent tracking on Webflow and Elementor platforms",
      "Blocked events from main domain despite subdomain approval",
      "Need for precise SubmitApplication event tracking without over-firing",
    ],
    solutions: [
      "Implemented server-side tracking with Custom Server and Meta Conversion API",
      "Captured user data on thank-you page post-Typeform submission for enhanced matching",
      "Updated ad sets to use unrestricted pixel 1405345420657676",
      "Optimized GTM to fire SubmitApplication only for qualified users",
    ],
    results: [
      "Achieved 95% tracking accuracy for SubmitApplication events",
      "Recovered 10.4% of events from ad blockers and 21.72% from tracking prevention",
      "Enabled accurate ad attribution for Florida, New Jersey, and California ad sets",
      "Setup compatible with new funnel using Typeform and thank-you page",
    ],
  },
  {
    id: "peachandcream",
    name: "Peach and Cream Shopify Tracking",
    url: "https://peachandcream.com",
    plan: "Standard",
    title: "Data Sharing Restriction Fixed for Peach & Cream Shopify Ecommerce Store",
    description:
      "Peach and Cream was blocked from Meta ads due to 'sensitive' product categories. We unlocked compliant pixel tracking through server-side methods, enabling aggressive scaling of their top-selling products—without risking another ban.",
    imageUrl: "/images/for-businesses/client-peachandcream-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-peachandcream-mobile-home.png",
    siteUrl: "https://peachandcream.com",
    analytics: {
      period: "30 days",
      recoveredFromAdBlockersPercentage: 2.79,
      recoveredFromTrackingPreventionPercentage: 31.92,
      accuracy: 97,
    },
    testimonial: {
      quote:
        "Super helpful, quick, and comprehensive. Shahzada solved our problem efficiently, complementing a nicely done work in an effective way.",
      author: "Mathieu Frechette",
      role: "CEO & Owner",
      image: "/images/clients/peachandcream.png",
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
        name: "Secure Access & Audit",
        description: "Audited Meta policy violation triggers + platform access",
        expectedOutcome: "Zero-risk implementation blueprint created",
      },
      {
        name: "Server-Side Pixel Deployment",
        description: "Filtered non-compliant products from tracking layer",
        expectedOutcome: "Server-side tracking fully operational & policy-safe",
      },
      {
        name: "Event Verification & Launch",
        description: "Validated every key event for Meta and GA4",
        expectedOutcome: "Ready to scale ads with full conversion attribution",
      },
    ],
    projectTimeline: {
      startDate: "Apr 27, 2025",
      endDate: "Apr 28, 2025",
      durationDays: 2,
    },
    owner: "Shahzada Ali Hassan",
    client: "PeachandCream Intimate Care & Sexual Wellness Products",
    budget: 1200,
    technologies: ["Server-Side Tracking", "Advertising Pixel", "E-commerce Platform"],
    challenges: [
      "Meta flagged ads due to intimacy product overlap",
      "Required split tracking without a split store",
      "Compliance + attribution were mutually exclusive",
    ],
    solutions: [
      "Filtered wellness vs intimacy products in backend logic",
      "Isolated tracking only to allowed product segments",
      "Full compliance while restoring attribution accuracy",
    ],
    results: [
      "Avoided further bans while scaling profitable ad campaigns",
      "Enabled compliant retargeting of high-ROAS product lines",
      "Future-proof tracking enabled for new product launches",
    ],
  },
  {
    id: "saneofrance",
    name: "Saneo France Meta Pixel Tracking Recovery",
    url: "https://saneofrance.fr",
    embedId: { loom: "822299923dcb4bd3bf8e7b5537002bd0" },
    plan: "Standard",
    title: "Restoring Meta Pixel Tracking for Saneo France with Server-Side Tracking and Webhooks",
    description:
      "Saneo France, a health product e-commerce website, faced restricted Meta Pixel tracking due to HIPAA compliance issues. Over a multi-week engagement, we implemented server-side tracking via Custom Server, configured Meta Conversion API, and added Shopify webhooks to achieve 98.74% tracking accuracy, recovering 23.72% of events from ITP and 3.85% from ad blockers, while improving ROAS to 1.03.",
    imageUrl: "/images/for-businesses/client-saneofrance-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-saneofrance-mobile-home.png",
    siteUrl: "https://saneofrance.fr",
    analytics: {
      period: "6 weeks",
      recoveredFromAdBlockersPercentage: 13.85,
      recoveredFromTrackingPreventionPercentage: 23.72,
      images: {
        before: [
          "/images/case-study/saneofrance_before_1.png",
          "/images/case-study/saneofrance_before_2.png",
        ],
        after: [
          "/images/case-study/saneofrance_after_1.png",
          "/images/case-study/saneofrance_after_2.png",
        ],
      },
      accuracy: 98.74,
    },
    testimonial: {
      quote:
        "I can't say enough good things about Shahzada. Some of the nuances of our project were over my head, but he understood them completely and executed everything smoothly and quickly. Would 10000% recommend working with Shahzada.",
      author: "Jeremy Talote",
      role: "E-commerce Owner",
      image:
        "https://www.upwork.com/profile-portraits/c17kGoTfNWariNtHbJb5laFDI-I0Hn1VrzpxB2fjK_wezEaMdpwfBrKy_XDsMXtNca",
    },
    platforms: [
      "Meta Pixel",
      "Meta Conversion API",
      "Google Tag Manager",
      "Custom Server",
      "Shopify",
      "Google Analytics 4",
      "Google Ads",
    ],
    milestones: [
      {
        name: "Onboarding & Access Setup",
        description:
          "Conducted onboarding with Jeremy to understand tracking issues, secured access to Meta Pixel, Shopify, and Custom Server accounts, and audited existing tracking setup.",
        expectedOutcome:
          "Identified restrictions on Saneo and Saneo New Pixels due to HIPAA compliance and planned server-side tracking solutions.",
      },
      {
        name: "Server-Side Tracking Implementation",
        description:
          "Configured Custom Server server container, implemented Meta Conversion API, and tested purchase events on existing pixels (1735459797389776 and 1402592670494369).",
        expectedOutcome:
          "Restored tracking with 65.95% initial accuracy, bypassing HIPAA restrictions.",
      },
      {
        name: "Webhook Integration",
        description:
          "Set up a new Custom Server container with a custom subdomain, implemented Shopify webhooks to capture missing events, and migrated GTM tags for GA4, Google Ads, and Meta.",
        expectedOutcome:
          "Achieved 98.74% event tracking accuracy with 100% event coverage in Meta Events Manager.",
      },
      {
        name: "Testing & Optimization",
        description:
          "Monitored tracking over multiple weeks, tested deduplication, and optimized event match quality using user data (email, first name, country, region).",
        expectedOutcome:
          "Stable tracking for over 6 weeks with improved ROAS and 23.72% recovery from ITP and 3.85% from ad blockers.",
      },
    ],
    projectTimeline: {
      startDate: "Feb 24, 2025",
      endDate: "Apr 19, 2025",
      durationDays: 54,
    },
    owner: "Shahzada Ali Hassan",
    client: "Saneo France Pain Relief & Orthopedic Support Products",
    budget: 1800,
    technologies: [
      "Server-Side Tracking",
      "Meta Conversion API",
      "Shopify Webhooks",
      "Google Tag Manager",
      "Custom Server",
      "Event Tracking",
      "Consent Management",
    ],
    challenges: [
      "Restricted Meta Pixels due to HIPAA compliance on health product domain",
      "Initial tracking accuracy limited to 65.95% due to ad blockers and ITP",
      "Missing 36% of purchase events due to attribution issues",
      "Complex access setup for Meta Business Manager and Custom Server accounts",
    ],
    solutions: [
      "Implemented server-side tracking with Custom Server and Meta Conversion API",
      "Added Shopify webhooks to capture 100% of events in Meta Events Manager",
      "Configured custom subdomain and migrated GTM tags for stable tracking",
      "Optimized event match quality with user data parameters",
    ],
    results: [
      "Achieved 98.74% tracking accuracy for Meta purchase events",
      "Recovered 23.72% of events from ITP and 3.85% from ad blockers",
      "Improved ROAS to 1.03 with 66 conversions from $2,924 ad spend",
      "Stable tracking for over 6 weeks without restrictions",
    ],
  },
  {
    id: "emiratesadvisory",
    name: "Emirates Advisory Comprehensive Tracking Implementation",
    url: "https://emiratesadvisory.com",
    plan: "Standard",
    title: "Enhanced Tracking System for Emirates Advisory with Client and Server-Side Integration",
    description:
      "Emirates Advisory, was blocked from Meta ads due to 'sensitive' product categories.It's a consultancy service website, required a robust tracking system to monitor form submissions and user interactions across their main domain and subdomain. Over an 8-day engagement, we implemented client-side and server-side tracking using Google Tag Manager, Custom Server, and Meta Conversion API, integrated a GDPR/CCPA-compliant Consent Management Platform, and built a real-time Looker Studio dashboard, achieving 95%+ tracking accuracy and recovering 14.45% of events from tracking prevention and 3.27% from ad blockers.",
    imageUrl: "/images/for-businesses/client-emiratesadvisory-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-emiratesadvisory-mobile-home.png",
    siteUrl: "https://emiratesadvisory.com",
    analytics: {
      period: "30 days",
      recoveredFromAdBlockersPercentage: 3.27,
      recoveredFromTrackingPreventionPercentage: 14.45,
      accuracy: 95,
      images: {
        before: [
          "/images/case-study/emiratesadvisory_before_1.png",
          "/images/case-study/emiratesadvisory_before_2.png",
        ],
        after: [
          "/images/case-study/emiratesadvisory_after_1.png",
          "/images/case-study/emiratesadvisory_after_2.png",
        ],
      },
    },
    testimonial: {
      quote: "Would 10000% recommend working with Shahzada.",
      author: "Haris Ahmed",
      role: "Marketing Manager, Emirates Advisory",
      image: "/images/clients/emiratesadvisory.png",
    },
    platforms: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Ads",
      "Meta Pixel",
      "Meta Conversion API",
      "Yandex Metrica",
      "Custom Server",
      "CookieYes",
      "Looker Studio",
    ],
    milestones: [
      {
        name: "Access Provisioning & Onboarding",
        description:
          "Secured access to CookieYes, WordPress subdomain, and other required platforms, and conducted onboarding to align on tracking requirements.",
        expectedOutcome: "Full system access and clear project scope established.",
      },
      {
        name: "Client-Side Tracking Setup",
        description:
          "Installed Google Tag Manager Web Container on main domain and subdomain, configured GA4, Google Ads, Meta Pixel, and Yandex Metrica, and implemented CookieYes CMP with Google Consent Mode V2.",
        expectedOutcome: "Client-side tracking operational with GDPR/CCPA compliance.",
      },
      {
        name: "Server-Side Tracking Implementation",
        description:
          "Set up GTM Server Container on Custom Server, configured server-side tracking for GA4, Google Ads, and Meta Conversion API, and ensured event deduplication.",
        expectedOutcome: "90-95% conversion accuracy with server-side tracking.",
      },
      {
        name: "Event Tracking & Dashboard Setup",
        description:
          "Configured tracking for form submissions, phone/email clicks, social media links, CTAs, and 404 page interactions, and built a real-time Looker Studio dashboard.",
        expectedOutcome: "Full tracking system functional with real-time analytics available.",
      },
    ],
    projectTimeline: {
      startDate: "Apr 2, 2025",
      endDate: "Apr 10, 2025",
      durationDays: 8,
    },
    owner: "Shahzada Ali Hassan",
    client: "Haris Ahmed",
    budget: 1200,
    technologies: [
      "Client-Side Tracking",
      "Server-Side Tracking",
      "Meta Conversion API",
      "Google Tag Manager",
      "Google Consent Mode V2",
      "Consent Management Platform",
      "Looker Studio",
      "Yandex Metrica",
    ],
    challenges: [
      "Ensuring GDPR/CCPA compliance with consent management",
      "Tracking across main domain and subdomain with consistent GTM integration",
      "Unverified Google Ads conversion tags due to lack of initial form submissions",
      "High tracking prevention impact (24.02%) requiring server-side solutions",
    ],
    solutions: [
      "Implemented CookieYes CMP with Google Consent Mode V2 for compliance",
      "Configured GTM on both main domain and subdomain for consistent tracking",
      "Tested form submissions to activate Google Ads conversion tags",
      "Set up server-side tracking with Custom Server to recover 14.45% of events from tracking prevention",
    ],
    results: [
      "Achieved 95%+ tracking accuracy for form submissions and user interactions",
      "Recovered 3.27% of events from ad blockers and 14.45% from tracking prevention",
      "Delivered GDPR/CCPA-compliant tracking with real-time Looker Studio dashboard",
      "Enabled tracking on 404 page for enhanced user interaction monitoring",
    ],
  },

  {
    id: "vision4kids",
    name: "Vision4kids Facebook SST & GA4 Recovery",
    url: "https://vision4kids.org",
    plan: "Standard",
    title: "Enhanced Lead Generation for Vision4kids with Server-Side Tracking and Facebook CAPI",
    description:
      "Vision4kids, a client of a Netherlands-based agency, faced inaccurate conversion tracking for their lead generation website due to reliance on client-side tracking. Over a multi-month engagement, we implemented server-side tracking via Custom Server, configured Facebook Conversion API, and built a Google Looker Studio dashboard. This restored accurate tracking, increased leads by 30%, and bypassed ad blockers and iOS ITP restrictions, achieving 97% tracking accuracy.",
    imageUrl: "/images/for-businesses/client-vision4kids-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-vision4kids-mobile-home.png",
    siteUrl: "https://vision4kids.org",
    analytics: {
      period: "9 months",
      recoveredFromAdBlockersPercentage: 5.0,
      recoveredFromTrackingPreventionPercentage: 43.0,
      accuracy: 97,
    },
    testimonial: {
      quote: "Pleasure to work with. Can highly recommend.",
      author: "Thomas André Jensen",
      role: "Digital Markerting Agency Owner",
      image: "/images/clients/thomas-andre-jensen.png",
    },
    platforms: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Facebook Pixel",
      "Facebook Conversion API",
      "Stape",
      "Google Looker Studio",
      "Zapier",
    ],
    milestones: [
      {
        name: "Onboarding & Audit",
        description:
          "Conducted an onboarding call with Thomas to understand tracking issues, followed by an audit of existing GTM containers, FB ad account, and GA4 setup.",
        expectedOutcome:
          "Identified inaccuracies in client-side tracking and missing lead event tracking.",
      },
      {
        name: "Testing Current Setup",
        description:
          "Tested the existing tracking setup and created a PDF report detailing issues with client-side tracking and inaccurate lead conversions.",
        expectedOutcome: "Comprehensive report highlighting tracking gaps and proposed solutions.",
      },
      {
        name: "Server-Side Implementation",
        description:
          "Provisioned a Custom Server server container, configured server-side tracking, and set up Facebook CAPI to track lead events, phone clicks, link clicks, and email clicks.",
        expectedOutcome: "Server-side tracking fully operational, capturing all key events.",
      },
      {
        name: "Validation & Dashboard",
        description:
          "Tested deduplication for Facebook CAPI, ensured client-side and server-side alignment, and built a Google Looker Studio dashboard for real-time reporting.",
        expectedOutcome:
          "97% tracking accuracy, 30% more leads, and a functional dashboard for client review.",
      },
    ],
    projectTimeline: {
      startDate: "Jun 2, 2022",
      endDate: "Apr 11, 2023",
      durationDays: 313,
    },
    owner: "Shahzada Ali Hassan",
    client: "Thomas André Jensen",
    budget: 1842,
    technologies: [
      "Server-Side Tracking",
      "Facebook Conversion API",
      "Web Analytics",
      "Event Tracking",
      "Consent Management",
      "Google Looker Studio",
    ],
    challenges: [
      "Inaccurate conversion tracking due to client-side only setup",
      "Missing lead event tracking (phone clicks, link clicks, email clicks)",
      "Ad blocker and iOS ITP restrictions blocking 27% of events",
    ],
    solutions: [
      "Implemented server-side tracking with Custom Server and Facebook CAPI",
      "Configured tracking for lead events, phone clicks, link clicks, and email clicks",
      "Bypassed ad blockers and iOS ITP restrictions, recovering 27% of events",
      "Built a Google Looker Studio dashboard for real-time insights",
    ],
    results: [
      "Achieved 97% tracking accuracy for Facebook conversions",
      "Increased leads by 30% through improved tracking",
      "Bypassed 27% of events blocked by ad blockers and iOS ITP",
      "Delivered a Google Looker Studio dashboard for client reporting",
    ],
  },

  {
    id: "superperformancereview",
    name: "GDS Setup",
    url: "https://superperformancereview.com.au",
    plan: "Standard",
    title: "End-to-End Tracking Overhaul for SuperPerformanceReview",
    description:
      "Over 140 days, we completely revamped SuperPerformanceReview's analytics and ad tracking stack—fixing broken funnel events, isolating TikTok pixel to the enquiry subdomain, enriching user data in GA4, Facebook CAPI and Google Ads, and building a unified Looker Studio dashboard. The result: flawless funnel_submission firing, improved deduplication rates, and actionable ad optimizations across Facebook, TikTok and Google Ads.",
    imageUrl: "/images/for-businesses/client-superperformancereview-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-superperformancereview-mobile-home.png",
    siteUrl: "https://superperformancereview.com.au",
    testimonial: {
      quote: "Very happy working with Hassan! Does a great job!",
      author: "David Bodnar",
      role: "Found & Owner",
      image: "/images/clients/david-bodnar.png",
    },
    platforms: [
      "Custom Build Website",
      "Google Tag Manager",
      "Google Analytics 4",
      "Facebook Pixel",
      "Facebook Conversion API",
      "TikTok Pixel",
      "Stape (Server-Side Tagging)",
      "Google Ads",
    ],
    milestones: [
      {
        name: "Funnel Parameter Audit & Rename",
        description:
          "Renamed funnel_name parameter on root domain and performance-review subfolder",
        expectedOutcome: "Consistent funnel identifiers across all pages",
      },
      {
        name: "DataLayer & Event Implementation",
        description:
          "Added dataLayer snippet and GTM trigger for funnel_submission on /performance-review",
        expectedOutcome: "Lead event firing reliably at final step",
      },
      {
        name: "TikTok Pixel Domain Isolation",
        description:
          "Updated GTM to restrict TikTok client pixel to enquiry.superperformancereview.com.au",
        expectedOutcome: "Eliminated cross-domain deduplication issues",
      },
      {
        name: "User Data Enrichment",
        description:
          "Configured Facebook CAPI and Google Ads conversion tags to send user_detail parameters",
        expectedOutcome: "Maximized match rates for ad optimization",
      },
      {
        name: "Looker Studio Dashboard & Supermetrics",
        description:
          "Built unified dashboard with UTM term filters and connected Facebook, TikTok and GA4 data",
        expectedOutcome: "Single-pane view of ad performance metrics",
      },
    ],
    projectTimeline: {
      startDate: "Apr 15, 2023",
      endDate: "Sep 1, 2023",
      durationDays: 140,
    },
    analytics: {
      period: "4 months",
      recoveredFromAdBlockersPercentage: 24.0,
      recoveredFromTrackingPreventionPercentage: 21.0,
      accuracy: 93,
    },
    owner: "Shahzada Ali Hassan",
    client: "David Bodnar",
    budget: 1150,
    technologies: [
      "Web Analytics",
      "Event Tracking",
      "Advertising Pixel",
      "Server-Side Tagging",
      "Consent Management",
      "Analytics Dashboard",
    ],
    challenges: [
      "Broken funnel_submission event on performance-review funnel",
      "High deduplication rates between client-side and server-side TikTok events",
      "Lack of user_detail parameters in Facebook CAPI and Google Ads",
      "No unified reporting of UTM performance across channels",
    ],
    solutions: [
      "Renamed and standardized funnel_name parameters",
      "Inserted dataLayer code for missing funnel_submission event",
      "Restricted TikTok pixel to enquiry subdomain only",
      "Enhanced CAPI and GAds tags with full user_detail payloads",
      "Built Looker Studio dashboard with Supermetrics connectors",
    ],
    results: [
      "100% reliable funnel_submission event firing at final step",
      "TikTok deduplication rates improved by 50%+",
      "Ad platforms now receive full user detail for better optimization",
      "Unified dashboard delivering real-time CPA, CPL and CTR by UTM term",
    ],
  },
  {
    id: "shepherd",
    name: "Shepherd.com Analytics Overhaul",
    url: "https://shepherd.com",
    plan: "Custom",
    title: "Full GTM Server-Side Tracking & GA Overhaul for Shepherd.com",
    description:
      "Shepherd.com was losing critical conversion data to ad-blockers, nested-element misfires and a tangled GTM/GA4/FB setup. Over four months we rebuilt their entire analytics stack—from server-side GTM on a custom subdomain to a modular, data-attribute event schema—restoring >98% accuracy and slashing 2.1M monthly Stape requests.",
    imageUrl: "/images/for-businesses/client-shepherd-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-shepherd-mobile-home.png",
    siteUrl: "https://shepherd.com",
    testimonial: {
      quote:
        "Shahzada knows Google Analytics and Google Data Studio inside and out. He helped me set everything up so I can better understand how visitors use my website. He is easy to work with, and I will use him in the future when I need changes to GA. He is a pleasure to work with :)",
      author: "Ben Fox",
      role: "Business Owner",
      image:
        "https://www.upwork.com/profile-portraits/c10N4c0hBLWz_aq22wrokGPtD2F7eE5J40yBT2nToh7WULZYVjKHduM42NesQc0xhu",
    },
    platforms: [
      "Custom Built Website",
      "Google Tag Manager",
      "GTM Server-Side",
      "Google Analytics (UA)",
      "Facebook Pixel",
      "Facebook Conversion API",
      "Stape",
      "Zapier",
    ],
    milestones: [
      {
        name: "Server-Side Tagging Launch",
        description: "Provisioned GTM server container on a custom subdomain via Stape",
        expectedOutcome: "Analytics scripts load from your own domain, bypassing ad-blockers",
      },
      {
        name: "UA Goals & Bounce Fix",
        description: "Configured Universal Analytics with key goals and non-interactive hits",
        expectedOutcome: "Accurate bounce rates and reliable conversion tracking",
      },
      {
        name: "Custom Event Schema",
        description:
          "Implemented data-attribute-based click tracking for bookstores, buttons, etc.",
        expectedOutcome: "Flexible, self-documented events that any dev can add via HTML",
      },
      {
        name: "Optimization & Handoff",
        description: "Paused unused GA4/FB tags, optimized Stape usage, delivered full docs",
        expectedOutcome: "2.1M monthly requests saved and a clear playbook for future tags",
      },
    ],
    projectTimeline: {
      startDate: "Mar 22, 2022",
      endDate: "Jul 21, 2022",
      durationDays: 121,
    },
    analytics: {
      period: "4 months",
      recoveredFromAdBlockersPercentage: 21.0,
      recoveredFromTrackingPreventionPercentage: 34.0,
      accuracy: 94,
    },
    owner: "Shahzada Ali Hassan",
    client: "Ben Fox",
    budget: 1700,
    technologies: [
      "Tag Management",
      "Server-Side Tracking",
      "Web Analytics",
      "Event Tracking",
      "Consent Management",
      "Data Layer",
    ],
    challenges: [
      "Massive data loss from ad-blockers & iOS tracking prevention",
      "Nested elements caused duplicate event fires",
      "High Custom Server event consumption threatening quota",
      "Complex GTM + GA4 + FB Pixel integration",
    ],
    solutions: [
      "Deployed GTM server container on Stape proxy with custom subdomain",
      "Shifted all click/scroll depth tracking to a simple data-attribute schema",
      "Paused GA4 & FB tags until UA sunset; rewrote scroll triggers for UA only",
      "Delivered full handover docs so devs can add new events via HTML only",
    ],
    results: [
      "Achieved >98% tracking accuracy across browsers & bypassed ad-blockers",
      "Saved ~2.1M monthly requests on Custom Server—well under quota",
      "Onboarded a flexible event model: new button clicks require only HTML attributes",
      "UA goals & custom reports now feed real-time insights into marketing ROI",
    ],
  },
  {
    id: "shakethatweight",
    name: "Shake That Weight GTM & Data Layer Setup",
    url: "https://www.shakethatweight.com",
    plan: "Standard",
    title: "GTM and Custom Data Layer Setup for Shake That Weight",
    description:
      "Shake That Weight needed a robust tag-management framework and a structured data layer to capture every key user interaction. Over 14 billed hours at $110/hr, we audited their existing setup, built a custom JavaScript data layer, configured both web and server GTM containers, and handed over a self-maintainable analytics architecture.",
    imageUrl: "/images/for-businesses/client-shakethatweight-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-shakethatweight-mobile-home.png",
    siteUrl: "https://www.shakethatweight.com",
    testimonial: {
      quote:
        "Excellent experience with Shahzada. He is very knowledgably in all areas of tracking and analytics; I would highly recommend him.",
      author: "Matthew Cooper",
      role: "Business Owner",
      image: "/images/clients/matthew-cooper.png",
    },
    platforms: ["Google Tag Manager", "Custom Data Layer", "Server-Side GTM"],
    milestones: [
      {
        name: "Audit & Access Provisioning",
        description: "Secured GTM account access and audited existing tag setup",
        expectedOutcome: "Scope and gaps clearly defined",
      },
      {
        name: "Data Layer Development",
        description: "Built and deployed a custom JavaScript data layer for all key events",
        expectedOutcome: "Consistent, structured event payloads available in GTM",
      },
      {
        name: "Server-Side GTM Configuration",
        description: "Configured GTM server container for enhanced data integrity and privacy",
        expectedOutcome: "Server-side endpoint processing event data reliably",
      },
      {
        name: "Testing & Handover",
        description: "Validated event accuracy end-to-end and trained the client",
        expectedOutcome: "Client empowered to manage tags and analyze data",
      },
    ],
    projectTimeline: {
      startDate: "Apr 4, 2023",
      endDate: "Jan 9, 2024",
      durationDays: 280,
    },
    analytics: {
      period: "8 months",
      recoveredFromAdBlockersPercentage: 8.0,
      recoveredFromTrackingPreventionPercentage: 39.0,
      accuracy: 99,
    },
    owner: "Shahzada Ali Hassan",
    client: "Matt Cooper",
    budget: 1540.01,
    technologies: ["Google Tag Manager", "JavaScript Data Layer", "Server-Side Tracking"],
    challenges: [
      "No structured data layer to capture granular interactions",
      "Existing GTM setup was fragmented and undocumented",
      "Client had no server-side container for privacy-safe tracking",
    ],
    solutions: [
      "Designed and implemented a custom JS data layer schema",
      "Migrated all tags into a unified GTM workspace",
      "Deployed and validated a GTM server container for improved data integrity",
    ],
    results: [
      "Full event coverage achieved in just 14 billed hours",
      "Granular user interactions now available for analysis",
      "Client equipped with self-maintainable GTM architecture",
    ],
  },
  {
    id: "hortongolfpark",
    name: "GA4 Setup and Report",
    url: "https://hortongolfpark.com/learn-golf/give-golf-a-go",
    plan: "Standard",
    title: "Unified Appointment & Lead Tracking with GA4 & GTM",
    description:
      "For a beginner-golf campaign on Hounslow Golf Park we built a bulletproof GA4+GTM setup—capturing JotForm and Acuity Scheduling events via a PostMessage script, and surfacing them alongside Meta/Google Ads data in custom Looker Studio dashboards for crystal-clear ROI reporting.",
    imageUrl: "/images/for-businesses/client-hortongolfpark-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-hortongolfpark-mobile-home.png",
    siteUrl: "https://hortongolfpark.com/learn-golf/give-golf-a-go",
    testimonial: {
      quote:
        "Shahzada is by far the most comprehensive, transparent and skilled analytics expert I've worked with (and I've used many over the years). He managed to save me money by understanding the problem and doing such an efficient job. I couldn't recommend anyone any higher.",
      author: "James Wilkinson",
      role: "Digital Markerting Agency Owner",
      image: "/images/clients/james-wilkinson.png",
    },
    platforms: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Looker Studio",
      "JotForm",
      "Acuity Scheduling",
      "Facebook Pixel",
      "Google Ads",
    ],
    milestones: [
      {
        name: "Access & Audit",
        description: "Provisioned GA4, GTM and ad account access; audited existing setup",
        expectedOutcome: "Full visibility on current gaps and required migrations",
      },
      {
        name: "Tracking Implementation",
        description:
          "Deployed GTM container, replaced direct GA4 snippet, added PostMessage script for iframe form tracking",
        expectedOutcome: "All JotForm and Acuity submissions firing as GA4 events",
      },
      {
        name: "Dashboard Creation",
        description:
          "Built Looker Studio report to show leads, appointments, source/medium, cost per lead",
        expectedOutcome: "Client-ready visualizations for monthly reporting",
      },
      {
        name: "Replication & QA",
        description:
          "Copied tracking and dashboards to second subdomain (Horton Golf Park) and validated data integrity",
        expectedOutcome: "Identical tracking accuracy on both properties",
      },
    ],
    projectTimeline: {
      startDate: "Dec 6, 2023",
      endDate: "Aug 19, 2024",
      durationDays: 256,
    },
    analytics: {
      period: "7 months",
      recoveredFromAdBlockersPercentage: 6.0,
      recoveredFromTrackingPreventionPercentage: 19.0,
      accuracy: 92,
    },
    owner: "Shahzada Ali Hassan",
    client: "James Wilkinson",
    budget: 531.67,
    technologies: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Looker Studio",
      "PostMessage API",
      "Acuity Scheduling",
      "JotForm Tracking",
    ],
    challenges: [
      "Acuity embed in iframe prevented standard event hooks",
      "Multiple data sources (GA4, Meta Ads, Google Ads, JotForm)",
      "Client unfamiliar with GA4 interface",
      "Slow deployment via third-party hosts",
    ],
    solutions: [
      "Leveraged window.postMessage for iframe form events",
      "Migrated direct GA4 snippet to GTM container",
      "Developed a templated Looker Studio dashboard",
      "Cloned and QA'd all tracking on the secondary subdomain",
    ],
    results: [
      "100% of form submissions tracked in GA4 within 24-48h",
      "Accurate source/medium reporting for every lead",
      "Monthly report handed off, saving client ongoing analytics hours",
      "Replicated setup for charity site with zero data loss",
    ],
  },
  {
    id: "rejuvica",
    name: "Shopify Checkout Extensibility Transfer",
    url: "https://www.rejuvica.com",
    plan: "Standard",
    title: "Migrated Checkout Tracking to Shopify Pixels with 100% Accuracy",
    description:
      "Rejuvica needed to migrate all GTM and GA4 scripts from Shopify's legacy checkout.liquid into the new Shopify Checkout Extensibility environment before it was deprecated. Over a 30-day engagement, we secured access, audited their existing setup, migrated client-side scripts into Shopify Pixels, consolidated multiple GA4 properties, implemented brand attribution via an rbidCookie, and stood up a Stape server-side container. The result was a seamless cut-over with zero data loss, unified analytics reporting, and fully reliable purchase tracking.",
    imageUrl: "/images/for-businesses/client-rejuvica-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-rejuvica-mobile-home.png",
    siteUrl: "https://www.rejuvica.com",
    testimonial: {
      quote:
        "I had the pleasure of working with Shahzada on resolving some complex Shopify, Google Tag Manager, and Google Analytics tracking issues, and I couldn't be more satisfied with the outcome. Despite the significant time difference, Shahzada was very responsive when addressing every question and concern I had. His patience and expertise were evident throughout the process. Shahzada provided a clear and detailed plan, meticulously documented all changes, and executed the tracking setup with precision. His deep knowledge in setting up and debugging tracking systems ensured everything was handled flawlessly. I highly recommend Shahzada for anyone in need of expert consultancy in these areas. His professionalism and efficiency make him a great choice.",
      author: "Michael Quinn",
      role: "Digital Markerting Agency Owner",
      image:
        "https://quinnportfolio.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fportrait.38401bb2.jpg&w=640&q=75",
    },
    platforms: [
      "Shopify",
      "Shopify Checkout Extensibility",
      "Google Tag Manager",
      "Google Analytics 4",
      "Stape (Server-Side Container)",
      "TikTok Pixel & API",
    ],
    milestones: [
      {
        name: "Access & Audit",
        description:
          "Secured cross-platform access to GTM, GA4, Shopify backend and audited all existing checkout scripts.",
        expectedOutcome: "Clear implementation plan with no access blockers.",
      },
      {
        name: "Checkout Extensibility Migration",
        description:
          "Removed all GTM/GA scripts from checkout.liquid and re-implemented them as Shopify Pixels in the new checkout UI.",
        expectedOutcome: "Checkout.liquid deprecated; new checkout scripts fully operational.",
      },
      {
        name: "GA4 Consolidation",
        description:
          "Disconnected legacy UA, consolidated multiple GA4 properties under G-1MSDW7HTQE via GTM and Shopify's Google app.",
        expectedOutcome: "Unified analytics reporting and App integration completed.",
      },
      {
        name: "Brand Attribution & QA",
        description:
          "Implemented the rbidCookie logic and extended the brandDictionary to handle multi-word SKUs. Validated DataLayer pushes across all branded domains.",
        expectedOutcome: "Accurate brand-level attribution and real-time client-side tracking.",
      },
      {
        name: "Server-Side Tracking Setup",
        description:
          "Configured the Stape server container, integrated TikTok Event API, and tested end-to-end event delivery under ad blocker scenarios.",
        expectedOutcome: "100% server-side event capture with zero drop-offs.",
      },
    ],
    projectTimeline: {
      startDate: "Aug 14, 2024",
      endDate: "Sep 12, 2024",
      durationDays: 30,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 11.0,
      recoveredFromTrackingPreventionPercentage: 31.0,
      accuracy: 97,
    },
    owner: "Shahzada Ali Hassan",
    client: "Michael Quinn",
    budget: 1600,
    technologies: [
      "Shopify Extensibility",
      "Shopify Pixels",
      "Google Tag Manager",
      "Google Analytics 4",
      "Server-Side Tracking (Stape)",
      "Data Layer",
      "DOM Manipulation",
    ],
    challenges: [
      "Shopify's deprecation of checkout.liquid threatened existing tracking",
      "Complex multi-brand GA4 setup with URL-based property switching",
      "Mixed UA, GA4, GTM and external-page snippets risked data gaps",
      "Need for seamless cut-over without any loss of purchase data",
    ],
    solutions: [
      "Re-implemented all checkout scripts as Shopify Pixels via Extensibility",
      "Consolidated GA4 properties into a single Measurement ID using GTM and Shopify's app",
      "Built a robust rbidCookie attribution layer, extended to handle edge-case SKUs",
      "Deployed Stape server container with TikTok API to guarantee event delivery",
    ],
    results: [
      "Zero data loss during migration—100% of checkout events captured",
      "Unified GA4 reporting under one property reduced complexity by 75%",
      "Real-time, accurate brand attribution across multiple domains",
      "Scalable server-side pipeline ensured 100% event delivery under all conditions",
    ],
  },
  {
    id: "cutthepod",
    name: "CutThePod UTM & Funnel Tracking",
    url: "https://www.cutthepod.com",
    plan: "Standard",
    title: "End-to-End UTM & Funnel Tracking for CutThePod",
    description:
      "CutThePod's funnel was losing attribution from Webflow modals to MailerLite redirects. In just 19 days, we migrated all tracking into GTM, captured UTM parameters at every step, and restored full visibility into Meta and GA4 campaigns. A final deliverable and 1-hour consultation empowered the client to own their analytics long-term.",
    imageUrl: "/images/for-businesses/client-cutthepod-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-cutthepod-mobile-home.png",
    siteUrl: "https://www.cutthepod.com",
    testimonial: {
      quote:
        "What an absolute pro! Hassan understood exactly what my issue was. Something that for me, was so complicated. He made sense of what was needed, confidently went forward and solved my tracking issues quickly and efficiently. Not only did he do the job well, but he provided me with a very comprehensive document so that I understand the work he did going forward. I feel like I found the best on Upwork.",
      author: "George Boyd",
      role: "Business Owner",
      image:
        "https://www.upwork.com/profile-portraits/c1ctOT874I2mei6Luvdt8ZaQLU_pCQahFHQTZOx3DDlmn3kYfC3XJRiCrfLvcwwVQH",
    },
    platforms: [
      "Webflow",
      "Mailerlite",
      "Google Analytics 4",
      "Google Tag Manager",
      "Facebook Pixel",
    ],
    milestones: [
      {
        name: "Access & Audit",
        description: "Collected and verified access to Webflow, MailerLite, GTM, GA4 & Meta Pixel",
        expectedOutcome: "Ready to begin GTM-based tracking implementation",
      },
      {
        name: "GTM Migration",
        description: "Removed native Pixel and GA4 snippets; deployed both via GTM web container",
        expectedOutcome: "All pageviews and UTM parameters captured in GTM",
      },
      {
        name: "Form & UTM Capture",
        description:
          "Configured MailerLite form events (loaded, submitted) and persisted UTM tags through modal & redirect flows",
        expectedOutcome: "mailerlite_form_loaded & mailerlite_form_submitted firing with UTM data",
      },
      {
        name: "QA & Documentation",
        description:
          "Tested desktop pop-up vs mobile redirect, validated GA4 & Meta event streams, delivered final tracking guide",
        expectedOutcome: "Client receives a turnkey tracking setup plus step-by-step reference",
      },
    ],
    projectTimeline: {
      startDate: "Aug 29, 2024",
      endDate: "Sep 17, 2024",
      durationDays: 19,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 17.0,
      recoveredFromTrackingPreventionPercentage: 21.0,
      accuracy: 99,
    },
    owner: "Shahzada Ali Hassan",
    client: "George Boyd",
    budget: 180,
    technologies: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Facebook Pixel",
      "UTM Tracking",
      "Form Event Tracking",
    ],
    challenges: [
      "UTM parameters dropped on MailerLite redirect (mobile)",
      "Webflow pop-up modal needed seamless integration",
      "No unified GA4 & Meta event stream across funnel steps",
    ],
    solutions: [
      "Centralized all tags in GTM web container",
      "Persisted UTMs via cookies and URL parameters",
      "Tracked MailerLite form lifecycle events",
      "Delivered comprehensive documentation + 1hr consult",
    ],
    results: [
      "100% accurate UTM capture from ad click through lead magnet download",
      "mailerlite_form_submitted showing in GA4 & Meta Ads Manager",
      "Client now owns end-to-end funnel visibility",
    ],
  },
  {
    id: "everyevent",
    name: "EveryEvent Google Ads Tracking",
    url: "https://www.everyevent.uk",
    plan: "Standard",
    title: "Keyword-Level Conversion & Session Duration Tracking for EveryEvent",
    description:
      "EveryEvent needed to know which Google Ads keywords were driving real engagement on their Bubble.io site. In a 50-day engagement, we implemented a DataLayer-driven GTM setup, linked GA4 with Google Ads & Search Console, and added a CookieScript CMP—unlocking per-keyword conversion and session-length reporting without compromising GDPR compliance.",
    imageUrl: "/images/for-businesses/client-everyevent-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-everyevent-mobile-home.png",
    siteUrl: "https://www.everyevent.uk",
    testimonial: {
      quote:
        "Shahzada was excellent in delivering our work. He took the time to write detailed guides, amended work towards our requirements, and was very patient in nature. I would definitely recommend!",
      author: "James Hague",
      role: "Digital Markerting Agency Owner",
      image:
        "https://www.upwork.com/profile-portraits/c1T4Jo2OBFm_LbopMPP0yyryc82Y5fDei3Wffv0dBQTbNxZqjegp8aXOOmBboNbpCr",
    },
    platforms: [
      "Bubble.io",
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Search Console",
      "CookieScript CMP",
    ],
    milestones: [
      {
        name: "Audit & Access Provisioning",
        description: "Verified GA4, GTM, GSC and Bubble.io access; reviewed existing tracking gaps",
        expectedOutcome: "All accounts linked and initial audit complete",
      },
      {
        name: "DataLayer & GTM Setup",
        description: "Built out a generic DataLayer for form submissions and button clicks",
        expectedOutcome: "Unified event schema in place, ready to push to GTM",
      },
      {
        name: "GA4 & Ads Integration",
        description: "Configured GA4 events, linked Google Ads & Search Console for keyword data",
        expectedOutcome: "Keyword‐level conversions and session metrics flowing into GA4",
      },
      {
        name: "CMP Deployment & Testing",
        description: "Installed CookieScript for GDPR consent; end-to-end QA of all events",
        expectedOutcome: "Full compliance and accurate reporting verified in GA4",
      },
    ],
    projectTimeline: {
      startDate: "Aug 29, 2024",
      endDate: "Oct 17, 2024",
      durationDays: 50,
    },
    analytics: {
      period: "2 months",
      recoveredFromAdBlockersPercentage: 4.0,
      recoveredFromTrackingPreventionPercentage: 58.0,
      accuracy: 94,
    },
    owner: "Shahzada Ali Hassan",
    client: "James Hague",
    budget: 300,
    technologies: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Search Console",
      "Bubble.io",
      "CookieScript CMP",
      "JavaScript DataLayer",
    ],
    challenges: [
      "Couldn't attribute conversions to specific Google Ads keywords",
      "No session-length reporting per keyword",
      "Site lacked tag management and consent tooling",
      "Form submissions weren't real HTML forms (no <form> tags)",
    ],
    solutions: [
      "Built a DataLayer-first event schema for both form submissions and button clicks",
      "Set up GTM triggers to capture keyword params and session duration",
      "Linked GA4 with Google Ads & Search Console to pull in keyword data",
      "Deployed CookieScript CMP for GDPR-compliant consent management",
    ],
    results: [
      "Keyword-level conversion rates visible in GA4's Acquisition→Overview report",
      "Session duration metrics segmented by keyword now available",
      "Marketing decisions driven by accurate, ad-attributed data",
      "Full GDPR compliance ensured via CookieScript integration",
    ],
  },
  {
    id: "logmycare",
    name: "Google Tag Manager Help",
    url: "https://www.logmycare.co.uk",
    plan: "Standard",
    title: "Enhanced GTM Setup & UTM Attribution for LogMyCare",
    description:
      "LogMyCare's custom site was losing UTM parameters and missing key conversions in GA4 and Meta. Over a 20-day engagement, we overhauled their GTM container—implementing click-URL triggers, fixing attribution breaks, and building a repeatable process so the client can spin up new conversion tags on demand.",
    imageUrl: "/images/for-businesses/client-logmycare-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-logmycare-mobile-home.png",
    siteUrl: "https://www.logmycare.co.uk",
    testimonial: {
      quote: `This guy is one of the best.. I came back 2 years later and he's still amazing. Can't wait to work with him again.`,
      author: "Derrick Kityo",
      role: "Webflow Developer",
      image: "/images/clients/derrick-kityo.png",
    },
    platforms: ["Google Tag Manager", "Google Analytics 4", "Facebook Pixel", "Slack"],
    milestones: [
      {
        name: "Kickoff & Access Setup",
        description: "Secured GTM admin access, invited to Slack channel, audited existing tags",
        expectedOutcome: "Transparent communication channel and full environment visibility",
      },
      {
        name: "Core Event Tracking",
        description: "Built click-URL triggers for GA4 and Meta Conversion API events",
        expectedOutcome: "All primary buttons and pageviews tracked with correct parameters",
      },
      {
        name: "UTM & Attribution Fix",
        description: "Diagnosed stripped UTM parameters, validated source/medium in GA4 reports",
        expectedOutcome: "Stable session attribution and accurate traffic source reporting",
      },
      {
        name: "Training & Handoff",
        description: "Walked through dynamic tag creation, delivered step-by-step docs",
        expectedOutcome: "Client empowered to launch new page-level conversion tags independently",
      },
    ],
    projectTimeline: {
      startDate: "Oct 2, 2024",
      endDate: "Oct 21, 2024",
      durationDays: 20,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 11.0,
      recoveredFromTrackingPreventionPercentage: 14.0,
      accuracy: 91,
    },
    owner: "Shahzada Ali Hassan",
    client: "Derrick Kityo",
    budget: 160,
    technologies: ["Google Tag Manager", "UTM Tracking", "Event Tracking", "Analytics Dashboard"],
    challenges: [
      "UTM parameters stripped by redirects, breaking session attribution",
      "No dynamic process to roll out new conversion tags",
      "Client needed reliable GA4 & Meta event data without manual upkeep",
    ],
    solutions: [
      "Implemented click-URL triggers in GTM for all key CTAs",
      "Documented & trained client on on-the-fly tag creation",
      "Set up Slack channel for real-time support and iterative tweaks",
    ],
    results: [
      "Full restoration of GA4 & Meta conversion tracking across the site",
      "Accurate source/medium attribution with no session resets",
      "Client now self-sufficient: can add new conversion events instantly",
    ],
  },
  {
    id: "everskin",
    name: "Everskin Webflow & ClinicMinds",
    url: "https://www.everskin.ch",
    plan: "Standard",
    title: "Server-Side GTM & Meta CAPI-G Implementation for Webflow & ClinicMinds",
    description:
      "Everskin needed a robust, compliant tracking setup across their Webflow site and the external ClinicMinds booking tool. Over 46 days, we deployed a custom Server-Side GTM on Stape, integrated advanced Cookiebot Consent Mode V2, configured Meta CAPI-G, set up cross-domain tracking and GA4-to-Ads conversion imports, and captured key booking events—all with full deduplication and future scalability.",
    imageUrl: "/images/for-businesses/client-everskin-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-everskin-mobile-home.png",
    siteUrl: "https://www.everskin.ch",
    testimonial: {
      quote:
        "One of the best freelancers to collaborate with. Referred to others already – knows everything about tracking & attribution, works fast and delivers ahead of schedule. Solved things others took way more time for and fixed problems instantaneously. Amazing work, Shahzada!!",
      author: "Julian Grimme",
      role: "Digital Markerting Agency Owner",
      image: "/images/clients/julian-grimme.png",
    },
    platforms: [
      "Webflow",
      "Google Tag Manager",
      "Server-Side GTM",
      "Stape",
      "Facebook Pixel",
      "Meta Conversion API (CAPI-G)",
      "Cookiebot",
      "ClinicMinds",
    ],
    milestones: [
      {
        name: "Access & Architecture Review",
        description: "Secured access to Webflow, GTM web & server containers, Meta & GA4 accounts",
        expectedOutcome: "Environment prepared and implementation plan locked in",
      },
      {
        name: "Server-Side GTM Deployment",
        description: "Deployed SS-GTM on Stape using a custom subdomain and tested ingestion",
        expectedOutcome: "Server container live and ready to accept events",
      },
      {
        name: "Consent Mode Integration",
        description: "Configured Cookiebot V2 Consent Mode in GTM for granular tag firing",
        expectedOutcome: "Client-side tags respect user consent; server-side CAPI unaffected",
      },
      {
        name: "Meta CAPI-G PageView Setup",
        description: "Implemented CAPI-G in the server container, added dedupe via event_id",
        expectedOutcome: "Accurate PageView data flowing into Meta",
      },
      {
        name: "GA4 & Google Ads Conversion Import",
        description:
          "Enabled cross-domain tracking, marked GA4 booking event as conversion, imported into Google Ads",
        expectedOutcome: "Booking conversions available for Google Ads optimization",
      },
      {
        name: "ClinicMinds Booking Events",
        description:
          "Hooked into native ClinicMinds dataLayer (ServiceSelected → AppointmentBooked)",
        expectedOutcome: "End-to-end funnel events captured and deduplicated across environments",
      },
      {
        name: "Final QA & Handover",
        description: "Validated all tags, events, deduplication rules, delivered documentation",
        expectedOutcome: "Stable, scalable tracking framework in client's hands",
      },
    ],
    projectTimeline: {
      startDate: "Sep 6, 2024",
      endDate: "Oct 21, 2024",
      durationDays: 46,
    },
    analytics: {
      period: "2 months",
      recoveredFromAdBlockersPercentage: 7.0,
      recoveredFromTrackingPreventionPercentage: 45.0,
      accuracy: 99,
    },
    owner: "Shahzada Ali Hassan",
    client: "Julian Grimme",
    budget: 290,
    technologies: [
      "Server-Side Tracking",
      "Web Analytics",
      "Conversion API (CAPI-G)",
      "Consent Management",
      "Cross-Domain Tracking",
      "Event Tracking",
    ],
    challenges: [
      "Webflow doesn't natively support server-side CAPI",
      "Integrating advanced Cookiebot V2 consent in GTM",
      "Ensuring deduplication between pixel & server-side hits",
      "Limited data parameters exposed by ClinicMinds",
    ],
    solutions: [
      "Deployed SS-GTM on Stape with a custom subdomain",
      "Configured Cookiebot Consent Mode V2 in GTM triggers",
      "Implemented Meta CAPI-G and event_id deduplication",
      "Set up GA4 booking conversion import into Google Ads",
      "Tracked ClinicMinds booking events via native dataLayer",
    ],
    results: [
      "100% server-side PageView tracking with deduplication",
      "Compliant Meta CAPI-G firing alongside Cookiebot consent",
      "Booking conversions visible in Google Ads & GA4",
      "Scalable framework for future event expansions",
    ],
  },
  {
    id: "kodanik",
    name: "GTM Ecommerce Troubleshooting",
    url: "https://www.upwork.com/agencies/1718262069083348992/",
    plan: "Hourly",
    title: "Fixed Custom GTM Ecommerce Tracking in Just One Hour",
    description:
      "A custom‐built e-commerce site was showing revenue in GTM Preview and GA4 real-time but not in the standard reports. In a focused one-hour Zoom session, we crafted custom JavaScript variables to simulate the missing dataLayer parameters and restored full revenue visibility, allowing the client to calculate ROAS accurately.",
    imageUrl: "/images/for-businesses/client-kodanik-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-kodanik-mobile-home.png",
    siteUrl: "https://www.upwork.com/agencies/1718262069083348992/",
    testimonial: {
      quote:
        "Hassan resolved a complex GTM issue in just one hour, after I had spent nearly a month working with Google Support with no success. His expertise is exceptional, and I highly recommend his services!",
      author: "Luis Boani",
      role: "Digital Markerting Agency Owner",
      image:
        "https://www.upwork.com/profile-portraits/c1Wsleh3GpJUkUr430pJOjyBrFOitQX1GEU7yb_6rhLw4mXVlJoDZ3itd3pRvqqNrw",
    },
    platforms: ["Custom Build Website", "Google Tag Manager", "Google Analytics 4"],
    milestones: [
      {
        name: "Initial Diagnosis",
        description:
          "Reviewed GTM Preview and GA4 real-time data to pinpoint why revenue wasn't persisting.",
        expectedOutcome:
          "Clear understanding of which dataLayer parameters were missing downstream.",
      },
      {
        name: "Custom JS Variable Implementation",
        description:
          "Created and tested custom JavaScript variables in GTM to emulate the missing dataLayer keys on purchase events.",
        expectedOutcome: "Revenue values now firing correctly into GA4 standard reports.",
      },
      {
        name: "Validation & Handover",
        description:
          "Validated tracking in GA4 across multiple test orders and walked the client through monitoring in Looker Studio.",
        expectedOutcome:
          "Client empowered to monitor revenue reporting and calculate ROAS without backend changes.",
      },
    ],
    projectTimeline: {
      startDate: "Oct 21, 2024",
      endDate: "Oct 23, 2024",
      durationDays: 3,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 10.0,
      recoveredFromTrackingPreventionPercentage: 24.0,
      accuracy: 96,
    },
    owner: "Shahzada Ali Hassan",
    client: "Luis Boani",
    budget: 191.67,
    technologies: [
      "Web Analytics",
      "DataLayer Debugging",
      "Custom JavaScript",
      "GTM Implementation",
    ],
    challenges: [
      "Revenue only visible in GTM Preview & GA4 real-time, not in reports",
      "No backend access to adjust the original dataLayer",
      "Google Support unable to resolve after 20+ emails",
    ],
    solutions: [
      "Built custom JavaScript variables to reconstruct missing dataLayer parameters",
      "Live debugging and implementation during a one-hour Zoom session",
      "Provided reporting workaround via Looker Studio for immediate visibility",
    ],
    results: [
      "Revenue now populates in all GA4 reports",
      "Issue resolved in just one hour",
      "Client regained confidence to measure ROAS accurately",
    ],
  },
  {
    id: "leadr",
    name: "GTM | Pixel | Server Side Tracking",
    url: "https://leadr.co",
    plan: "Fixed Price",
    title: "Unified GTM & Server-Side Tracking Setup for Leadr.co",
    description:
      "Led end-to-end implementation of a server-side GTM container, consolidated client- and server-side tagging, managed a seamless domain migration, and delivered comprehensive training. The result: bulletproof analytics across Facebook, TikTok, Google Ads, GA4, Hyros and more—no duplicate events, no data gaps.",
    imageUrl: "/images/for-businesses/client-leadr-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-leadr-mobile-home.png",
    siteUrl: "https://leadr.co",
    testimonial: {
      quote:
        "Hassan was an absolute pleasure to work with! His expertise in setting up Google Tag Manager was clear from the start, and he delivered an incredible setup that exceeded our expectations. He listened closely to our needs and implemented exactly what we were looking for. Hassan's knowledge, professionalism, and commitment to getting the job done right made the whole process smooth and efficient. Highly recommended for anyone needing GTM expertise or analytics support!",
      author: "Nick Ahrens",
      role: "Digital Markerting Agency Owner",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGvfIbKT8ENFw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1564159301386?e=1753315200&v=beta&t=dDBt76VLXIC89xX9pq63Xr9XcTYoNVd4rZm9DfwY3m0s",
    },
    platforms: [
      "Google Tag Manager",
      "Custom Server",
      "Server-Side Tracking",
      "Facebook Pixel",
      "TikTok Pixel",
      "Hyros Tracking",
      "HubSpot",
      "Google Ads",
      "Google Analytics 4",
      "EverWebinar",
      "WebinarJam",
    ],
    milestones: [
      {
        name: "Audit Existing Tracking",
        description:
          "Performed a full audit of current GTM, hard-coded pixels and tag setups across multiple page builders.",
        expectedOutcome:
          "A clear roadmap identifying gaps, overlaps and opportunities for consolidation.",
      },
      {
        name: "Server-Side Container Setup",
        description:
          "Configured and secured a server-side GTM container via Custom Server to bypass ad blockers and privacy restrictions.",
        expectedOutcome: "Reliable, consistent data capture for all critical events.",
      },
      {
        name: "Pixel & Tag Deployment",
        description:
          "Deployed Facebook, TikTok, Hyros, HubSpot, Google Ads conversion & remarketing tags, and GA4 through GTM.",
        expectedOutcome: "All tracking centrally managed with no duplicate or missing events.",
      },
      {
        name: "Domain Migration Support",
        description:
          "Coordinated DNS updates and migrated tracking code from thought-leader.com to leadr.co across all properties.",
        expectedOutcome: "Zero downtime and uninterrupted event flow post-migration.",
      },
      {
        name: "Spreadsheet-Driven Rollout",
        description:
          "Prioritized and instrumented URLs based on the client's spreadsheet of pages and key user flows.",
        expectedOutcome: "Every high-priority page fully tagged and ready for testing.",
      },
      {
        name: "Testing & Debugging",
        description:
          "Executed end-to-end QA across desktop, mobile, live & staging environments, resolving discrepancies.",
        expectedOutcome:
          "Confirmed 99%+ accuracy and proper deduplication in all analytics platforms.",
      },
      {
        name: "Training & Handoff",
        description:
          "Delivered detailed documentation and Loom videos on adding, testing and maintaining tags in GTM.",
        expectedOutcome: "Client team fully empowered to manage and extend their tracking stack.",
      },
    ],
    projectTimeline: {
      startDate: "Oct 9, 2024",
      endDate: "Nov 4, 2024",
      durationDays: 27,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 4.0,
      recoveredFromTrackingPreventionPercentage: 30.0,
      accuracy: 99,
    },
    owner: "Shahzada Ali Hassan",
    client: "Nick Ahrens",
    budget: 1155,
    technologies: [
      "Google Tag Manager",
      "Custom Server",
      "Server-Side Tracking",
      "Facebook Pixel",
      "TikTok Pixel",
      "Hyros Tracking",
      "HubSpot",
      "Google Ads",
      "Google Analytics 4",
      "EverWebinar",
      "WebinarJam",
    ],
    challenges: [
      "Fragmented tracking across multiple page builders and legacy scripts",
      "Potential for duplicate events from hard-coded pixels alongside GTM",
      "Risk of data loss due to ad blockers and browser privacy changes",
      "Complex domain migration requiring DNS and tag continuity",
    ],
    solutions: [
      "Consolidated all tags into a single GTM container (client + server)",
      "Deployed Custom Server server-side tracking to bypass blockers",
      "Removed legacy scripts and enforced a single source of truth",
      "Managed DNS updates and container code swap during domain switch",
      "Built QA protocols and provided hands-on training with documentation",
    ],
    results: [
      "Achieved 99% data accuracy and eliminated duplicate event firing",
      "Ensured seamless, uninterrupted tracking through domain migration",
      "Centralized tag management for faster updates and easier debugging",
      "Empowered the client with clear documentation and video tutorials",
    ],
  },
  {
    id: "tobi",
    name: "Tobi.com Consent Mode Implementation",
    url: "https://tobi.com",
    plan: "Standard",
    title: "Restored 80% Lost Sessions at Tobi.com with Manual gtag() Consent Mode",
    description:
      "After GDPR cookie‐consent went live, Tobi.com saw an 80% drop in reported sessions—crippling their data-driven decisions. In just 5 days, we rolled out a manual gtag() consent mode via GTM, rebuilt the consent flow, and restored tracking accuracy and trust in their analytics.",
    imageUrl: "/images/for-businesses/client-tobi-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-tobi-mobile-home.png",
    siteUrl: "https://tobi.com",
    analytics: {
      period: "30 days",
      recoveredFromAdBlockersPercentage: 4.0,
      recoveredFromTrackingPreventionPercentage: 76.5,
      accuracy: 98,
    },
    testimonial: {
      quote:
        "Hassan quickly fixed our consent‐mode setup and brought our session counts back from the brink. His documentation and QA gave us full confidence in our data again.",
      author: "Winston Abiera",
      role: "Head of Analytics",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHpin2QRF60dQ/profile-displayphoto-shrink_800_800/B4DZXKWdWsHAAc-/0/1742856640473?e=1753315200&v=beta&t=OispemTc8tLcJ2e_PiyV5s0G81Gq30eAwKMCzcNeVh0",
    },
    platforms: ["Custom Website", "Google Tag Manager", "gtag.js", "Google Analytics 4"],
    milestones: [
      {
        name: "Default Consent State Setup",
        description:
          "Injected gtag('consent','default',…) above GTM with ad_storage & analytics_storage denied by default",
        expectedOutcome: "All tags held from firing until explicit user consent",
      },
      {
        name: "GTM Initialization & Consent Integration",
        description:
          "Placed GTM container snippet below default-consent code and enabled url_passthrough",
        expectedOutcome: "GTM loads with consent mode enabled—no tags fire prematurely",
      },
      {
        name: "Consent Update Functions",
        description:
          "Built updateConsent() & saveConsentAndApply() to push consent updates and 'consent_updated' events",
        expectedOutcome: "User interactions dynamically update consent state in dataLayer",
      },
      {
        name: "Decision Detection & Banner Logic",
        description:
          "Stored & checked user decisions in localStorage; fired consent_updated on page load if set",
        expectedOutcome: "Existing consents auto-apply; new users see consent banner",
      },
      {
        name: "QA & Production Roll-out",
        description:
          "End-to-end test of consent flow, tag firing, and dataLayer events across key pages",
        expectedOutcome: "Consent mode live in production with verified session/event tracking",
      },
    ],
    projectTimeline: {
      startDate: "Sep 13, 2024",
      endDate: "Sep 18, 2024",
      durationDays: 5,
    },
    owner: "Shahzada Ali Hassan",
    client: "Winston Abiera",
    budget: 900,
    technologies: [
      "JavaScript",
      "Google Tag Manager",
      "gtag.js",
      "LocalStorage",
      "Consent Management",
      "Cookie Banner",
    ],
    challenges: [
      "80% drop in sessions after cookie-consent rollout",
      "All tags blocked by default-deny mode",
      "No persistence of consent decisions across pages",
    ],
    solutions: [
      "Manually set default deny state for ad_storage & analytics_storage",
      "Created robust consent update functions with dataLayer events",
      "Leveraged localStorage for decision persistence & auto-firing consent_updated",
      "Integrated consent banner UI with on-click handlers",
    ],
    results: [
      "Restored 80% of lost sessions within 30 days",
      "Reached 98% accuracy in session & event tracking",
      "Automated consent logic ensures GDPR compliance",
      "Marketing team regained full confidence in analytics data",
    ],
  },
  {
    id: "elitednd",
    name: "Google Ads Conversion Setup with GTM",
    url: "https://elitednd.com",
    plan: "Standard",
    title: "Advanced Google Ads Conversion Tracking via GTM on WordPress",
    description:
      "Elite Adventures (elitednd.com) needed bullet-proof Google Ads conversion tracking on a tight 24-48 hour timeline. We deployed a fully custom GTM stack to capture page views, scroll depth, button clicks, MEC booking steps, checkout and purchase—then mapped each event to Google Ads conversions and delivered a self-serve Loom tutorial and docs so the team could reproduce and scale it themselves.",
    imageUrl: "/images/for-businesses/client-elitednd-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-elitednd-mobile-home.png",
    siteUrl: "https://elitednd.com",
    testimonial: {
      quote: "It was great to work with him, thank you for your fast work.",
      author: "David Laroche",
      role: "Business Owner",
      image: "/images/clients/placeholder.jpg",
    },
    platforms: [
      "WordPress",
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Ads",
      "Modern Event Calendar",
    ],
    milestones: [
      {
        name: "Requirements & Access Setup",
        description:
          "Gather requirements and secure admin access to WordPress, GTM, GA4 & Google Ads.",
        expectedOutcome: "Environment ready and tracking plan finalized.",
      },
      {
        name: "Tag Configuration & Testing",
        description:
          "Build and QA custom GTM tags/triggers for page_view, scroll, button clicks and MEC steps.",
        expectedOutcome: "All key events fire reliably in GTM Preview/Debug mode.",
      },
      {
        name: "Google Ads Conversion Mapping",
        description:
          "Link GTM-fired events to Google Ads conversion actions, assign dynamic values/scores.",
        expectedOutcome: "Conversion actions appear in Google Ads and record test conversions.",
      },
      {
        name: "Tutorial & Documentation Delivery",
        description: "Record detailed Loom tutorial and hand off comprehensive setup docs.",
        expectedOutcome:
          "Client can reproduce, extend and optimize the conversion setup independently.",
      },
    ],
    projectTimeline: {
      startDate: "Nov 27, 2024",
      endDate: "Dec 27, 2024",
      durationDays: 31,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 6.0,
      recoveredFromTrackingPreventionPercentage: 51.0,
      accuracy: 97,
    },
    owner: "Shahzada Ali Hassan",
    client: "David Laroche",
    budget: 250,
    technologies: [
      "GTM Custom Tags & Triggers",
      "GA4 Event Tracking",
      "Google Ads Conversion Actions",
      "WordPress Modern Event Calendar",
      "Loom Video Tutorials",
    ],
    challenges: [
      "Strict 24–48 hour turnaround",
      "No dedicated thank-you pages for events",
      "Complex booking flow via Modern Event Calendar",
      "Need to score & value-map disparate user actions",
    ],
    solutions: [
      "Custom GTM triggers & variables for every interaction",
      "Dynamic event parameters to capture value & currency",
      "Direct GTM→Google Ads conversion linkage",
      "Step-by-step Loom videos + written docs for client self-serve",
    ],
    results: [
      "Real-time visibility into funnel drop-offs and conversions",
      "All key booking steps & purchases tracked and scored",
      "Conversion actions live in Google Ads for bidding optimization",
      "Client empowered to reproduce and scale without extra help",
    ],
  },
  {
    id: "walkfulton-twitter-pixel",
    name: "Walk Fulton Twitter Pixel Setup",
    url: "https://walkfulton.com",
    plan: "Standard",
    title: "Migrated Twitter Pixel to Shopify .liquid Templates",
    description:
      "Walk Fulton needed their Twitter conversion events moved off checkout extensions and into Shopify's .liquid files. In under 4 weeks we disabled the old extensions, injected Liquid-based pixel scripts on the checkout-thank you flow, and verified event delivery in both Twitter Ads Manager and GA4.",
    imageUrl: "/images/for-businesses/client-walkfulton-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-walkfulton-mobile-home.png",
    siteUrl: "https://walkfulton.com",
    testimonial: {
      quote:
        "I can't say enough good things about Shahzada. Some of the nuances of our project were over my head, but he understood them completely and executed everything smoothly and quickly. Would 10000% recommend working with Shahzada.",
      author: "Libie Motchan",
      role: "Co-Founder",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQHbWO4h0DVsDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1613856010270?e=1753315200&v=beta&t=7IVe-5PfttGloanC8SAJBphHE1NZvhs5bM-OX8Q-Krc",
    },
    platforms: ["Shopify", "Shopify Liquid", "Google Tag Manager", "Twitter Ads Manager"],
    milestones: [
      {
        name: "Pixel Migration Planning",
        description:
          "Audit existing Twitter events in checkout extensions and prepare Liquid scripts",
        expectedOutcome: "Detailed migration plan and .liquid templates ready for implementation",
      },
      {
        name: "Liquid Script Injection",
        description:
          "Disabled checkout extension events and deployed Twitter pixel code into checkout.liquid and thank_you.liquid",
        expectedOutcome: "Conversion events firing via .liquid; old extension turned off",
      },
      {
        name: "End-to-End Validation",
        description: "Tested purchase and post-purchase events in Twitter Ads Manager and GA4",
        expectedOutcome: "100% of test orders recorded correctly in both systems",
      },
      {
        name: "Project Close-Out",
        description:
          "Delivered final report, handed off documentation, and confirmed no pending tasks",
        expectedOutcome: "Client satisfied, contract closed with $350 milestone paid",
      },
    ],
    projectTimeline: {
      startDate: "Jul 31, 2024",
      endDate: "Aug 25, 2024",
      durationDays: 26,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 9.0,
      recoveredFromTrackingPreventionPercentage: 14.0,
      accuracy: 96,
    },
    owner: "Shahzada Ali Hassan",
    client: "Libie Motchan",
    budget: 350,
    technologies: ["Event Tracking", "Liquid Templating", "Analytics Tagging"],
    challenges: [
      "Checkout extension events not firing on thank-you pages",
      "Client needed full control via .liquid rather than Shopify apps",
      "Verification across two analytics platforms",
    ],
    solutions: [
      "Replaced extension hooks with native .liquid script injections",
      "Disabled legacy customer-events and checkout extensions",
      "Built test harness in GTM and validated in both Twitter Ads Manager & GA4",
    ],
    results: [
      "All purchase events recorded reliably in Twitter Ads Manager",
      "GA4 mirrored Twitter conversions at 100% during testing",
      "Client able to retire checkout extensions and own their Liquid templates",
    ],
  },
  {
    id: "restrank",
    name: "Restrank Outbound Click Tracking",
    url: "https://restrank.com",
    plan: "Standard",
    title: "Restored Outbound Click Conversion Tracking for Restrank.com",
    description:
      "After pausing campaigns and changing domains, Restrank.com's outbound click conversions stopped firing properly. In 7 days, I audited GTM and Google Ads, updated triggers for affiliate domains, and restored accurate GA4 and Ads tracking—enabling data-driven campaign optimization again.",
    imageUrl: "/images/for-businesses/client-restrank-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-restrank-mobile-home.png",
    siteUrl: "https://restrank.com",
    testimonial: {
      quote:
        "He is very good in fixing any Google Tracking Code issues you have; we hired him twice and we will hire him again when we need more help. Thanks",
      author: "Hayam Sh",
      role: "Digital Markerting Agency Owner",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGUgP-vA1neBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1575128939684?e=1753315200&v=beta&t=E9Yk6Bn85dEF_hGOtLXSRuyc4JKI9LIURf98Z2ohTHw",
    },
    platforms: ["Google Tag Manager", "Google Analytics 4", "Google Ads"],
    milestones: [
      {
        name: "Audit & Diagnosis",
        description:
          "Troubleshot GTM container and Google Ads conversion tag issues after tracking went stale",
        expectedOutcome: "Identified root cause of outbound click conversion failures",
      },
      {
        name: "Tag & Trigger Fixes",
        description:
          "Updated GTM outbound-click triggers for affiliate hostnames and republished container",
        expectedOutcome: "Outbound click events flowing into GA4 and Ads debug view",
      },
      {
        name: "Verification & Testing",
        description: "Validated conversion firing in GA4, GTM debug, and Google Ads reports",
        expectedOutcome: "Accurate outbound-click conversions restored for campaign optimization",
      },
    ],
    projectTimeline: {
      startDate: "Oct 30, 2024",
      endDate: "Jan 4, 2025",
      durationDays: 66,
    },
    analytics: {
      period: "2 months",
      recoveredFromAdBlockersPercentage: 8.0,
      recoveredFromTrackingPreventionPercentage: 44.0,
      accuracy: 98,
    },
    owner: "Shahzada Ali Hassan",
    client: "Hayam Sh",
    budget: 100,
    technologies: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Ads Conversion Tracking",
      "Event Tracking",
    ],
    challenges: [
      "Conversion tracking paused after domain change and ad downtime",
      "Google Ads flagged conversion actions as “Need attention”",
      "Affiliate outbound clicks not firing in GA4 or Ads",
    ],
    solutions: [
      "Conducted full GTM and Ads audit to diagnose broken tags",
      "Reconfigured triggers for affiliate domains in GTM",
      "Re-linked GA4 events and Ads conversion actions, republished container",
    ],
    results: [
      "Outbound click conversions resumed firing correctly within 24 hours",
      "Accurate affiliate link tracking restored across GA4 and Google Ads",
      "Client regained confidence in campaign attribution and optimization",
    ],
  },
  {
    id: "ticketsonsale",
    name: "TicketOnSale Facebook Tracking",
    url: "https://ticketsonsale.com",
    plan: "Pro+",
    title: "Accurate Facebook Pixel & Conversion API Tracking for TicketOnSale",
    description:
      "TicketOnSale was running millions in Facebook ad spend without reliable conversion data—losing nearly half their purchase signals to browser restrictions. Over 31 days, we audited their GTM setup, provisioned a server-side container with a custom subdomain, and implemented Facebook Conversion API with full advanced matching. The result: complete visibility into every purchase event and accurate revenue attribution.",
    imageUrl: "/images/for-businesses/client-ticketsonsale-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-ticketsonsale-mobile-home.png",
    siteUrl: "https://ticketsonsale.com",
    analytics: {
      period: "30 days",
      recoveredFromAdBlockersPercentage: 12,
      recoveredFromTrackingPreventionPercentage: 48.69,
      accuracy: 98,
    },
    testimonial: {
      quote:
        "We have worked with Hassan multiple times and we cannot speak highly enough about him. Thank you for completing this project for us. Do not hesitate to hire Hassan, if he says he can do it, he will.",
      author: "Ryan Bagley",
      role: "Digital Markerting Agency Owner",
      image: "/images/clients/placeholder.jpg",
    },
    platforms: [
      "Google Tag Manager (Web)",
      "Google Tag Manager (Server)",
      "Facebook Pixel",
      "Facebook Conversion API",
      "Stape",
      "Google Analytics 4",
    ],
    milestones: [
      {
        name: "Audit & Access Provisioning",
        description:
          "Review existing GTM web container, Facebook Pixel setup, and secure access to all ad and analytics accounts.",
        expectedOutcome: "Clear inventory of misconfigurations and ready-to-go access.",
      },
      {
        name: "Server Container Provisioning",
        description:
          "Create GTM server-side container, assign custom subdomain on Stape, and configure cloud hosting.",
        expectedOutcome: "Stable server endpoint for Conversion API events.",
      },
      {
        name: "Conversion API Implementation",
        description:
          "Map purchase events and user_data fields in GTM, implement advanced matching, and integrate Facebook Conversion API.",
        expectedOutcome: "All purchase and revenue events captured server-side with hashed PII.",
      },
      {
        name: "Quality Assurance & Testing",
        description:
          "Execute end-to-end test conversions via GTM Preview, Meta Events Manager, and real-time GA4 dashboards.",
        expectedOutcome: "Verified 100% event delivery and correct value attribution.",
      },
      {
        name: "Launch & Handover",
        description:
          "Publish GTM containers to production, share documentation, and train client on monitoring and future updates.",
        expectedOutcome: "Client full ownership and visibility into ad attribution.",
      },
    ],
    projectTimeline: {
      startDate: "Jan 1, 2025",
      endDate: "Feb 1, 2025",
      durationDays: 31,
    },
    owner: "Shahzada Ali Hassan",
    client: "Ryan Bagley",
    budget: 1700,
    technologies: [
      "Server-Side Tracking",
      "Advertising Pixel",
      "Advanced Matching",
      "Consent Management",
      "Cloud Hosting",
      "Analytics Dashboard",
    ],
    challenges: [
      "Duplicate pageviews counting purchase users twice",
      "No server-side API leading to ~50% lost conversions",
      "Lack of user_data hashing and advanced matching in Pixel",
      "Complex GTM implementation without custom domain",
    ],
    solutions: [
      "Conducted full GTM audit and cleaned up redundant triggers",
      "Provisioned GTM server container with custom Stape subdomain",
      "Implemented Conversion API with hashed user_data and advanced matching",
      "Tested and validated every event end-to-end in Meta Events Manager",
    ],
    results: [
      "Recovered 48.7% of conversions previously lost to tracking prevention",
      "Achieved 100% accuracy in purchase event tracking with real-time value attribution",
      "Enabled data-driven Facebook ad scaling on $7.6M monthly traffic",
      "Earned 5-star client rating and repeat engagement on Upwork",
    ],
  },

  {
    id: "thebestofexmoor",
    name: "Mailchimp & Server-Side Tracking Cleanup",
    url: "https://www.thebestofexmoor.co.uk",
    plan: "Standard",
    title: "Cleaned Up Mailchimp Ecommerce Data & Upgraded Server-Side GTM",
    description:
      "Chris Lister's site was failing to surface purchase data in Mailchimp and was running an outdated server-side tagging container. Over 6 months, we upgraded his GTM server container to v2.3.0, rebuilt his Mailchimp tagging via GTM, defined a robust purchase DataLayer, and guided backend API integration so that every order now flows into Mailchimp's ecommerce reports accurately.",
    imageUrl: "/images/for-businesses/client-thebestofexmoor-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-thebestofexmoor-mobile-home.png",
    siteUrl: "https://www.thebestofexmoor.co.uk",
    testimonial: {
      quote:
        "Ali is one of the best freelancers I've worked with, his conscientiousness to get the job complete is exceptional. Thank you for your help and I hope to work again in the future.",
      author: "Chris Lister",
      role: "Founder & CEO",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQFz9djiofei_Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1517517848739?e=1753315200&v=beta&t=nC7KDjX0t-IdkP5wt7uVhBjqDOvY9UCgVMHLvUePVng",
    },
    platforms: [
      "Squarespace",
      "Google Tag Manager (Web & Server-Side)",
      "Google Analytics 4",
      "Mailchimp Marketing API",
      "Google Cloud App Engine",
    ],
    milestones: [
      {
        name: "Access & Audit",
        description:
          "Provisioned GTM web & server-side, GA4, Mailchimp and Google Cloud access; audited existing setup",
        expectedOutcome: "Clear roadmap to deprecate legacy tags and integrations",
      },
      {
        name: "Server Container Upgrade",
        description: "Updated GTM server-side container from v1.1.0 to v2.3.0 on App Engine",
        expectedOutcome: "Stable, secure server tagging environment",
      },
      {
        name: "GTM Tag & DataLayer Cleanup",
        description:
          "Rebuilt purchase DataLayer schema, removed deprecated tags, configured Mailchimp event tags",
        expectedOutcome: "Reliable frontend tracking of purchase events",
      },
      {
        name: "Backend API Integration",
        description:
          "Delivered developer spec & docs for Mailchimp Ecommerce Orders API; coordinated test orders",
        expectedOutcome: "Server-side order calls feeding Mailchimp with order_id, email, revenue",
      },
      {
        name: "QA & Reporting",
        description:
          "Validated GA4 vs Mailchimp ecommerce reports, implemented UTM builder for newsletters",
        expectedOutcome: "Accurate revenue reporting in Mailchimp and GA4; documented workflows",
      },
    ],
    projectTimeline: {
      startDate: "Jun 10, 2024",
      endDate: "Jan 04, 2025",
      durationDays: 208,
    },
    analytics: {
      period: "6 months",
      recoveredFromAdBlockersPercentage: 8.0,
      recoveredFromTrackingPreventionPercentage: 26.0,
      accuracy: 99,
    },
    owner: "Shahzada Ali Hassan",
    client: "Chris Lister",
    budget: 175,
    technologies: [
      "JavaScript",
      "Google Tag Manager (Web & Server)",
      "Mailchimp Marketing API",
      "Google Analytics 4",
      "Google Cloud App Engine",
    ],
    challenges: [
      "Outdated GTM server container (v1.1.0) causing instability",
      "Frontend-only Mailchimp events missing real ecommerce data",
      "Lack of UTMs on email campaign links",
      "Coordination gap between analytics and backend developer",
    ],
    solutions: [
      "Upgraded server-side GTM container to v2.3.0 for enhanced stability",
      "Defined a purchase DataLayer and rebuilt GTM tags to fire Mailchimp events",
      "Authored backend spec for Mailchimp Ecommerce Orders API; oversaw test orders",
      "Generated UTM conventions and documented process for the email campaign team",
    ],
    results: [
      "Mailchimp ecommerce dashboard now surfaces orders, revenue, AOV accurately",
      "GA4 and Mailchimp purchase data reconcile 1:1 in testing",
      "All newsletter links carry consistent UTM parameters",
      "Client has clear documentation and a maintainable tracking foundation",
    ],
  },

  {
    id: "jmonash",
    name: "Google Ads gclid Tracking via Calendly",
    url: "https://jmonash.com",
    plan: "Standard",
    title: "End-to-End gclid Attribution for Calendly & OptinMonster Conversions",
    description:
      "Jacob Monash needed to tie every Google Ads click (gclid) directly to his Calendly bookings and OptinMonster sign-ups. Over a 31-day engagement, we rearchitected his tracking via GTM and custom JavaScript—capturing gclids from both iframe-based and inline forms—and built a Looker Studio dashboard to report ad ID, keyword, and conversion timestamps. Now he has precise ad attribution and ROI analysis in one place.",
    imageUrl: "/images/for-businesses/client-jmonash-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-jmonash-mobile-home.png",
    siteUrl: "https://jmonash.com",
    testimonial: {
      quote:
        "Shahzada's work was very well-done, and he supplied a full report of the changes he made, which was impressive and above and beyond what I expected. I do think my request was a bit outside of his usual expertise and I wish we had taken some more time to clarify the project, but otherwise I'm very happy with the outcome.",
      author: "Jacob Monash",
      role: "CEO and Owner",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQFCnaSLO7s_uw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1590713786190?e=1753315200&v=beta&t=MGFRBkPqh_B53jbtB6X-V68TAkC6QwxszskX2kwur0M",
    },
    platforms: [
      "Squarespace",
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Ads",
      "Calendly",
      "OptinMonster",
      "Looker Studio",
    ],
    milestones: [
      {
        name: "Access & Audit",
        description:
          "Provisioned GTM, GA4, Ads, Calendly and OptinMonster access; removed native integrations",
        expectedOutcome: "Clean environment ready for centralized gclid capture",
      },
      {
        name: "gclid Capture & Tagging",
        description:
          "Configured GTM & custom JS to grab gclid in parent domain and inject into OptinMonster form",
        expectedOutcome: "All Calendly and OptinMonster conversions tagged with gclid in GA4",
      },
      {
        name: "Reporting Dashboard",
        description:
          "Built Looker Studio report linking gclid to ad ID, keyword, campaign, and conversion timestamp",
        expectedOutcome: "Client-facing dashboard in his own account for live ad attribution",
      },
    ],
    projectTimeline: {
      startDate: "Dec 10, 2024",
      endDate: "Jan 10, 2025",
      durationDays: 31,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 3.0,
      recoveredFromTrackingPreventionPercentage: 18.0,
      accuracy: 97,
    },
    owner: "Shahzada Ali Hassan",
    client: "Jacob Monash",
    budget: 250,
    technologies: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Google Ads Auto-Tagging",
      "JavaScript",
      "Looker Studio",
      "Squarespace",
    ],
    challenges: [
      "Calendly iframe prevented direct gclid access",
      "OptinMonster's native GA integration conflicted with GTM",
      "PII restrictions barred passing user email into analytics",
    ],
    solutions: [
      "Removed all native form analytics integrations; consolidated via GTM",
      "Injected hidden gclid fields into forms via JavaScript before submission",
      "Developed Looker Studio dashboard in client's own account for ad-to-conversion mapping",
    ],
    results: [
      "Every Calendly booking and OptinMonster signup now captures gclid in GA4",
      "Looker Studio report ties gclid to ad ID, keyword, campaign, and timestamp",
      "Client can finally attribute booking revenue back to specific Google Ads efforts",
    ],
  },
  {
    id: "foxyai",
    name: "Foxy.ai Tracking Setup",
    url: "https://foxy.ai",
    plan: "Pro+",
    title: "Tripled Attribution Accuracy for Foxy.ai with Bulletproof Tracking",
    description:
      "Foxy.ai was bleeding valuable data due to ad blockers and tracking prevention. In just 32 days, we rebuilt their entire analytics pipeline with server-side tech, hitting 95%+ accuracy and restoring trust in their ROAS. They now make marketing decisions with confidence—and compliance.",
    imageUrl: "/images/for-businesses/client-foxyai-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-foxyai-mobile-home.png",
    siteUrl: "https://foxy.ai",
    analytics: {
      period: "30 days",
      recoveredFromAdBlockersPercentage: 3.4,
      recoveredFromTrackingPreventionPercentage: 45.22,
      accuracy: 100,
    },
    testimonial: {
      quote:
        "Hassan was great to work with! He made the complex conversion tracking process smooth and stress-free, ensuring spot-on tracking that improved campaign performance.",
      author: "Sam Emara",
      role: "Owner & CEO",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQGQU-m8ANtFOA/profile-displayphoto-shrink_800_800/B4DZTKU3QoG8Ac-/0/1738561254956?e=1753315200&v=beta&t=Knbezk-30hgki5ItTBvgKtgLioy09enrONAoaT2ZTSM",
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
        name: "Access Provisioning",
        description: "Secured cross-platform access to analytics and ad accounts",
        expectedOutcome: "Ready for implementation without delays",
      },
      {
        name: "Full Funnel Tracking",
        description: "Client + server-side setup for every key event across the funnel",
        expectedOutcome: "Multi-layered data capture at >95% accuracy",
      },
      {
        name: "Consent Management Integration",
        description: "Implemented GDPR/CCPA-compliant data handling",
        expectedOutcome: "100% legal compliance & trust transparency",
      },
      {
        name: "Custom Dashboard Rollout",
        description: "Launched real-time dashboard aligned to campaign goals",
        expectedOutcome: "Instant visibility into top-funnel to revenue metrics",
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
      "Low campaign performance due to missing conversion signals",
      "Heavy losses from ad blockers & iOS tracking prevention",
      "No scalable data visibility across marketing channels",
    ],
    solutions: [
      "Deployed hybrid tracking stack (client + server)",
      "Plugged in consent management to preserve compliance + data",
      "Built real-time decision dashboard for live ROAS monitoring",
    ],
    results: [
      "Jumped from 60% to 95% accuracy in purchase tracking",
      "Recovered nearly 50% of lost data from anti-tracking measures",
      "ROI-driven decisions now possible from a single source of truth",
    ],
  },

  {
    id: "askdrnandi",
    name: "ClickFunnels GA4 Tracking",
    url: "https://offers.askdrnandi.com",
    plan: "Standard",
    title: "Fixed ClickFunnels Tracking for GA4 & Meta—Fast",
    description:
      "AskDrNandi was flying blind on ad spend due to broken ClickFunnels tracking. We reengineered their entire funnel to send high-quality GA4 + Meta data using URL logic, Zapier, and real-time dashboards—all in under 15 days.",
    imageUrl: "/images/for-businesses/client-askdrnandi-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-askdrnandi-mobile-home.png",
    siteUrl: "https://offers.askdrnandi.com",
    testimonial: {
      quote: "Hassan is a rockstar, exceptional work as always.",
      author: "Alina Islam",
      role: "Digital Markerting Agency Owner",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEtUd6HatiLfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682871311747?e=1753315200&v=beta&t=rd_OWgyOai3ginEMAINspl6UA3PdOMK6_rlSkIDwi_o",
    },
    platforms: ["ClickFunnels", "Google Analytics 4", "Google Tag Manager"],
    milestones: [
      {
        name: "Access & Funnel Assessment",
        description: "Identified misfiring and missing events across funnel steps",
        expectedOutcome: "Clear fix plan for every broken data flow",
      },
      {
        name: "Tracking Implementation",
        description: "Implemented GA4 + Meta via URL-based logic + Zapier",
        expectedOutcome: "Full attribution and funnel tracking restored",
      },
      {
        name: "Dashboard Delivery",
        description: "Live dashboard mapped to funnel KPIs and ad performance",
        expectedOutcome: "Stakeholder visibility with zero-code upkeep",
      },
    ],
    projectTimeline: {
      startDate: "Feb 3, 2025",
      endDate: "Feb 18, 2025",
      durationDays: 15,
    },
    analytics: {
      period: "1 months",
      recoveredFromAdBlockersPercentage: 11.0,
      recoveredFromTrackingPreventionPercentage: 19.0,
      accuracy: 89,
    },
    owner: "Shahzada Ali Hassan",
    client: "Alina Islam",
    budget: 150,
    technologies: ["Web Analytics", "Advertising Pixel", "Funnel Platform", "Analytics Dashboard"],
    challenges: [
      "GA4 events were unreliable, funnel metrics missing",
      "No native dataLayer support in ClickFunnels",
      "Ads were running without attribution data",
    ],
    solutions: [
      "Used Zapier + query string rules to fire key events",
      "Mapped full funnel journey with patched logic",
      "Delivered full visibility via custom dashboard",
    ],
    results: [
      "Fixed data gaps across the entire funnel journey",
      "Ad spend decisions now backed by actual funnel KPIs",
      "Dashboard used daily to optimize conversion paths",
    ],
  },
];
