export interface Analytics {
  period: string;
  recoveredFromAdBlockersPercentage: number;
  recoveredFromTrackingPreventionPercentage: number;
  accuracy: number;
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
      recoveredFromAdBlockersPercentage: 0,
      recoveredFromTrackingPreventionPercentage: 48.69,
      accuracy: 98,
    },
    testimonial: {
      quote:
        "We have worked with Hassan multiple times and we cannot speak highly enough about him. Thank you for completing this project for us. Do not hesitate to hire Hassan, if he says he can do it, he will.",
      author: "Ryan Bagley",
      role: "Client",
      image: "/images/ryan-bagley.jpg",
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
        day: 1,
        name: "Audit & Access Provisioning",
        description:
          "Review existing GTM web container, Facebook Pixel setup, and secure access to all ad and analytics accounts.",
        expectedOutcome:
          "Clear inventory of misconfigurations and ready-to-go access.",
      },
      {
        day: 2,
        name: "Server Container Provisioning",
        description:
          "Create GTM server-side container, assign custom subdomain on Stape, and configure cloud hosting.",
        expectedOutcome: "Stable server endpoint for Conversion API events.",
      },
      {
        day: 3,
        name: "Conversion API Implementation",
        description:
          "Map purchase events and user_data fields in GTM, implement advanced matching, and integrate Facebook Conversion API.",
        expectedOutcome:
          "All purchase and revenue events captured server-side with hashed PII.",
      },
      {
        day: 4,
        name: "Quality Assurance & Testing",
        description:
          "Execute end-to-end test conversions via GTM Preview, Meta Events Manager, and real-time GA4 dashboards.",
        expectedOutcome:
          "Verified 100% event delivery and correct value attribution.",
      },
      {
        day: 5,
        name: "Launch & Handover",
        description:
          "Publish GTM containers to production, share documentation, and train client on monitoring and future updates.",
        expectedOutcome:
          "Client full ownership and visibility into ad attribution.",
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
      "Chris Lister’s site was failing to surface purchase data in Mailchimp and was running an outdated server-side tagging container. Over 6 months, we upgraded his GTM server container to v2.3.0, rebuilt his Mailchimp tagging via GTM, defined a robust purchase DataLayer, and guided backend API integration so that every order now flows into Mailchimp’s ecommerce reports accurately.",
    imageUrl: "/images/for-businesses/client-thebestofexmoor-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-thebestofexmoor-mobile-home.png",
    siteUrl: "https://www.thebestofexmoor.co.uk",
    testimonial: {
      quote:
        "Ali is one of the best freelancers I've worked with, his conscientiousness to get the job complete is exceptional. Thank you for your help and I hope to work again in the future.",
      author: "Chris Lister",
      role: "Client",
      image: "/images/chris-lister.jpg",
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
        day: 1,
        name: "Access & Audit",
        description:
          "Provisioned GTM web & server-side, GA4, Mailchimp and Google Cloud access; audited existing setup",
        expectedOutcome:
          "Clear roadmap to deprecate legacy tags and integrations",
      },
      {
        day: 2,
        name: "Server Container Upgrade",
        description:
          "Updated GTM server-side container from v1.1.0 to v2.3.0 on App Engine",
        expectedOutcome: "Stable, secure server tagging environment",
      },
      {
        day: 3,
        name: "GTM Tag & DataLayer Cleanup",
        description:
          "Rebuilt purchase DataLayer schema, removed deprecated tags, configured Mailchimp event tags",
        expectedOutcome: "Reliable frontend tracking of purchase events",
      },
      {
        day: 4,
        name: "Backend API Integration",
        description:
          "Delivered developer spec & docs for Mailchimp Ecommerce Orders API; coordinated test orders",
        expectedOutcome:
          "Server-side order calls feeding Mailchimp with order_id, email, revenue",
      },
      {
        day: 5,
        name: "QA & Reporting",
        description:
          "Validated GA4 vs Mailchimp ecommerce reports, implemented UTM builder for newsletters",
        expectedOutcome:
          "Accurate revenue reporting in Mailchimp and GA4; documented workflows",
      },
    ],
    projectTimeline: {
      startDate: "Jun 10, 2024",
      endDate: "Jan 04, 2025",
      durationDays: 208,
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
    title:
      "End-to-End gclid Attribution for Calendly & OptinMonster Conversions",
    description:
      "Jacob Monash needed to tie every Google Ads click (gclid) directly to his Calendly bookings and OptinMonster sign-ups. Over a 31-day engagement, we rearchitected his tracking via GTM and custom JavaScript—capturing gclids from both iframe-based and inline forms—and built a Looker Studio dashboard to report ad ID, keyword, and conversion timestamps. Now he has precise ad attribution and ROI analysis in one place.",
    imageUrl: "/images/for-businesses/client-jmonash-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-jmonash-mobile-home.png",
    siteUrl: "https://jmonash.com",
    testimonial: {
      quote:
        "Shahzada's work was very well-done, and he supplied a full report of the changes he made, which was impressive and above and beyond what I expected. I do think my request was a bit outside of his usual expertise and I wish we had taken some more time to clarify the project, but otherwise I'm very happy with the outcome.",
      author: "Jacob Monash",
      role: "Client",
      image: "/images/jacob-monash.jpg",
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
        day: 1,
        name: "Access & Audit",
        description:
          "Provisioned GTM, GA4, Ads, Calendly and OptinMonster access; removed native integrations",
        expectedOutcome:
          "Clean environment ready for centralized gclid capture",
      },
      {
        day: 2,
        name: "gclid Capture & Tagging",
        description:
          "Configured GTM & custom JS to grab gclid in parent domain and inject into OptinMonster form",
        expectedOutcome:
          "All Calendly and OptinMonster conversions tagged with gclid in GA4",
      },
      {
        day: 3,
        name: "Reporting Dashboard",
        description:
          "Built Looker Studio report linking gclid to ad ID, keyword, campaign, and conversion timestamp",
        expectedOutcome:
          "Client-facing dashboard in his own account for live ad attribution",
      },
    ],
    projectTimeline: {
      startDate: "Dec 10, 2024",
      endDate: "Jan 10, 2025",
      durationDays: 31,
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
      "OptinMonster’s native GA integration conflicted with GTM",
      "PII restrictions barred passing user email into analytics",
    ],
    solutions: [
      "Removed all native form analytics integrations; consolidated via GTM",
      "Injected hidden gclid fields into forms via JavaScript before submission",
      "Developed Looker Studio dashboard in client’s own account for ad-to-conversion mapping",
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
        description:
          "Secured cross-platform access to analytics and ad accounts",
        expectedOutcome: "Ready for implementation without delays",
      },
      {
        day: 2,
        name: "Full Funnel Tracking",
        description:
          "Client + server-side setup for every key event across the funnel",
        expectedOutcome: "Multi-layered data capture at >95% accuracy",
      },
      {
        day: 3,
        name: "Consent Management Integration",
        description: "Implemented GDPR/CCPA-compliant data handling",
        expectedOutcome: "100% legal compliance & trust transparency",
      },
      {
        day: 4,
        name: "Custom Dashboard Rollout",
        description: "Launched real-time dashboard aligned to campaign goals",
        expectedOutcome:
          "Instant visibility into top-funnel to revenue metrics",
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
    id: "peachandcream",
    name: "Peach and Cream Shopify Tracking",
    url: "https://peachandcream.com",
    plan: "Standard",
    title: "Policy-Proof Meta Pixel Setup for Shopify Brand",
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
        name: "Secure Access & Audit",
        description: "Audited Meta policy violation triggers + platform access",
        expectedOutcome: "Zero-risk implementation blueprint created",
      },
      {
        day: 2,
        name: "Server-Side Pixel Deployment",
        description: "Filtered non-compliant products from tracking layer",
        expectedOutcome: "Server-side tracking fully operational & policy-safe",
      },
      {
        day: 3,
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
    client: "Mathieu Frechette",
    budget: 1200,
    technologies: [
      "Server-Side Tracking",
      "Advertising Pixel",
      "E-commerce Platform",
    ],
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
      role: "Client",
      image: "/images/alina-islam.jpg",
    },
    platforms: ["ClickFunnels", "Google Analytics 4", "Google Tag Manager"],
    milestones: [
      {
        day: 1,
        name: "Access & Funnel Assessment",
        description:
          "Identified misfiring and missing events across funnel steps",
        expectedOutcome: "Clear fix plan for every broken data flow",
      },
      {
        day: 2,
        name: "Tracking Implementation",
        description: "Implemented GA4 + Meta via URL-based logic + Zapier",
        expectedOutcome: "Full attribution and funnel tracking restored",
      },
      {
        day: 3,
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
