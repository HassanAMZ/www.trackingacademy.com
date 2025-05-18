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
    id: "logmycare",
    name: "Google Tag Manager Help",
    url: "https://www.logmycare.co.uk",
    plan: "Standard",
    title: "Enhanced GTM Setup & UTM Attribution for LogMyCare",
    description:
      "LogMyCare’s custom site was losing UTM parameters and missing key conversions in GA4 and Meta. Over a 20-day engagement, we overhauled their GTM container—implementing click-URL triggers, fixing attribution breaks, and building a repeatable process so the client can spin up new conversion tags on demand.",
    imageUrl: "/images/for-businesses/client-logmycare-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-logmycare-mobile-home.png",
    siteUrl: "https://www.logmycare.co.uk",
    testimonial: {
      quote: `This guy is one of the best.. I came back 2 years later and he's still amazing. Can't wait to work with him again.`,
      author: "Derrick Kityo",
      role: "Client",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGs9gPLo0m1RQ/profile-displayphoto-shrink_800_800/B4EZREbsm9GwAc-/0/1736314899859?e=1753315200&v=beta&t=DRPuvIVfCcOdaJIqdNylU6n0gp2deF90ebYOB81vxbQ",
    },
    platforms: [
      "Google Tag Manager",
      "Google Analytics 4",
      "Facebook Pixel",
      "Slack",
    ],
    milestones: [
      {
        day: 1,
        name: "Kickoff & Access Setup",
        description:
          "Secured GTM admin access, invited to Slack channel, audited existing tags",
        expectedOutcome:
          "Transparent communication channel and full environment visibility",
      },
      {
        day: 2,
        name: "Core Event Tracking",
        description:
          "Built click-URL triggers for GA4 and Meta Conversion API events",
        expectedOutcome:
          "All primary buttons and pageviews tracked with correct parameters",
      },
      {
        day: 3,
        name: "UTM & Attribution Fix",
        description:
          "Diagnosed stripped UTM parameters, validated source/medium in GA4 reports",
        expectedOutcome:
          "Stable session attribution and accurate traffic source reporting",
      },
      {
        day: 4,
        name: "Training & Handoff",
        description:
          "Walked through dynamic tag creation, delivered step-by-step docs",
        expectedOutcome:
          "Client empowered to launch new page-level conversion tags independently",
      },
    ],
    projectTimeline: {
      startDate: "Oct 2, 2024",
      endDate: "Oct 21, 2024",
      durationDays: 20,
    },
    owner: "Shahzada Ali Hassan",
    client: "Derrick Kityo",
    budget: 160,
    technologies: [
      "Google Tag Manager",
      "UTM Tracking",
      "Event Tracking",
      "Analytics Dashboard",
    ],
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
    title:
      "Server-Side GTM & Meta CAPI-G Implementation for Webflow & ClinicMinds",
    description:
      "Everskin needed a robust, compliant tracking setup across their Webflow site and the external ClinicMinds booking tool. Over 46 days, we deployed a custom Server-Side GTM on Stape, integrated advanced Cookiebot Consent Mode V2, configured Meta CAPI-G, set up cross-domain tracking and GA4-to-Ads conversion imports, and captured key booking events—all with full deduplication and future scalability.",
    imageUrl: "/images/for-businesses/client-everskin-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-everskin-mobile-home.png",
    siteUrl: "https://www.everskin.ch",
    testimonial: {
      quote:
        "One of the best freelancers to collaborate with. Referred to others already – knows everything about tracking & attribution, works fast and delivers ahead of schedule. Solved things others took way more time for and fixed problems instantaneously. Amazing work, Shahzada!!",
      author: "Julian Grimme",
      role: "Client",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQG_CkBefGBKRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1591132529975?e=1753315200&v=beta&t=S44IDZno13irWO0SngW8tuwYE_rYQRDkF85MpstBjhI",
    },
    platforms: [
      "Webflow",
      "Google Tag Manager",
      "Server-Side GTM",
      "Stape",
      "Meta Pixel",
      "Meta Conversion API (CAPI-G)",
      "Cookiebot",
      "ClinicMinds",
    ],
    milestones: [
      {
        day: 1,
        name: "Access & Architecture Review",
        description:
          "Secured access to Webflow, GTM web & server containers, Meta & GA4 accounts",
        expectedOutcome:
          "Environment prepared and implementation plan locked in",
      },
      {
        day: 2,
        name: "Server-Side GTM Deployment",
        description:
          "Deployed SS-GTM on Stape using a custom subdomain and tested ingestion",
        expectedOutcome: "Server container live and ready to accept events",
      },
      {
        day: 3,
        name: "Consent Mode Integration",
        description:
          "Configured Cookiebot V2 Consent Mode in GTM for granular tag firing",
        expectedOutcome:
          "Client-side tags respect user consent; server-side CAPI unaffected",
      },
      {
        day: 4,
        name: "Meta CAPI-G PageView Setup",
        description:
          "Implemented CAPI-G in the server container, added dedupe via event_id",
        expectedOutcome: "Accurate PageView data flowing into Meta",
      },
      {
        day: 10,
        name: "GA4 & Google Ads Conversion Import",
        description:
          "Enabled cross-domain tracking, marked GA4 booking event as conversion, imported into Google Ads",
        expectedOutcome:
          "Booking conversions available for Google Ads optimization",
      },
      {
        day: 21,
        name: "ClinicMinds Booking Events",
        description:
          "Hooked into native ClinicMinds dataLayer (ServiceSelected → AppointmentBooked)",
        expectedOutcome:
          "End-to-end funnel events captured and deduplicated across environments",
      },
      {
        day: 46,
        name: "Final QA & Handover",
        description:
          "Validated all tags, events, deduplication rules, delivered documentation",
        expectedOutcome:
          "Stable, scalable tracking framework in client’s hands",
      },
    ],
    projectTimeline: {
      startDate: "Sep 6, 2024",
      endDate: "Oct 21, 2024",
      durationDays: 46,
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
      "Webflow doesn’t natively support server-side CAPI",
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
      role: "Client",
      image:
        "https://www.upwork.com/profile-portraits/c1Wsleh3GpJUkUr430pJOjyBrFOitQX1GEU7yb_6rhLw4mXVlJoDZ3itd3pRvqqNrw",
    },
    platforms: [
      "Custom Build Website",
      "Google Tag Manager",
      "Google Analytics 4",
    ],
    milestones: [
      {
        day: 1,
        name: "Initial Diagnosis",
        description:
          "Reviewed GTM Preview and GA4 real-time data to pinpoint why revenue wasn’t persisting.",
        expectedOutcome:
          "Clear understanding of which dataLayer parameters were missing downstream.",
      },
      {
        day: 2,
        name: "Custom JS Variable Implementation",
        description:
          "Created and tested custom JavaScript variables in GTM to emulate the missing dataLayer keys on purchase events.",
        expectedOutcome:
          "Revenue values now firing correctly into GA4 standard reports.",
      },
      {
        day: 3,
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
        "Hassan was an absolute pleasure to work with! His expertise in setting up Google Tag Manager was clear from the start, and he delivered an incredible setup that exceeded our expectations. He listened closely to our needs and implemented exactly what we were looking for. Hassan’s knowledge, professionalism, and commitment to getting the job done right made the whole process smooth and efficient. Highly recommended for anyone needing GTM expertise or analytics support!",
      author: "Nick Ahrens",
      role: "Client",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGvfIbKT8ENFw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1564159301386?e=1753315200&v=beta&t=dDBt76VLXIC89xX9pq63Xr9XcTYoNVd4rZm9DfwY3m0s",
    },
    platforms: [
      "Google Tag Manager",
      "Stape.io",
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
        day: 1,
        name: "Audit Existing Tracking",
        description:
          "Performed a full audit of current GTM, hard-coded pixels and tag setups across multiple page builders.",
        expectedOutcome:
          "A clear roadmap identifying gaps, overlaps and opportunities for consolidation.",
      },
      {
        day: 2,
        name: "Server-Side Container Setup",
        description:
          "Configured and secured a server-side GTM container via Stape.io to bypass ad blockers and privacy restrictions.",
        expectedOutcome:
          "Reliable, consistent data capture for all critical events.",
      },
      {
        day: 3,
        name: "Pixel & Tag Deployment",
        description:
          "Deployed Facebook, TikTok, Hyros, HubSpot, Google Ads conversion & remarketing tags, and GA4 through GTM.",
        expectedOutcome:
          "All tracking centrally managed with no duplicate or missing events.",
      },
      {
        day: 4,
        name: "Domain Migration Support",
        description:
          "Coordinated DNS updates and migrated tracking code from thought-leader.com to leadr.co across all properties.",
        expectedOutcome:
          "Zero downtime and uninterrupted event flow post-migration.",
      },
      {
        day: 5,
        name: "Spreadsheet-Driven Rollout",
        description:
          "Prioritized and instrumented URLs based on the client’s spreadsheet of pages and key user flows.",
        expectedOutcome:
          "Every high-priority page fully tagged and ready for testing.",
      },
      {
        day: 6,
        name: "Testing & Debugging",
        description:
          "Executed end-to-end QA across desktop, mobile, live & staging environments, resolving discrepancies.",
        expectedOutcome:
          "Confirmed 99%+ accuracy and proper deduplication in all analytics platforms.",
      },
      {
        day: 7,
        name: "Training & Handoff",
        description:
          "Delivered detailed documentation and Loom videos on adding, testing and maintaining tags in GTM.",
        expectedOutcome:
          "Client team fully empowered to manage and extend their tracking stack.",
      },
    ],
    projectTimeline: {
      startDate: "Oct 9, 2024",
      endDate: "Nov 4, 2024",
      durationDays: 27,
    },
    owner: "Shahzada Ali Hassan",
    client: "Nick Ahrens",
    budget: 1155,
    technologies: [
      "Google Tag Manager",
      "Stape.io",
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
      "Deployed Stape.io server-side tracking to bypass blockers",
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
    id: "tobi-consent-mode",
    name: "Tobi.com Consent Mode Implementation",
    url: "https://tobi.com",
    plan: "Standard",
    title:
      "Restored 80% Lost Sessions at Tobi.com with Manual gtag() Consent Mode",
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
      role: "Head of Analytics, Tobi Corp",
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHpin2QRF60dQ/profile-displayphoto-shrink_800_800/B4DZXKWdWsHAAc-/0/1742856640473?e=1753315200&v=beta&t=OispemTc8tLcJ2e_PiyV5s0G81Gq30eAwKMCzcNeVh0",
    },
    platforms: [
      "Custom Website",
      "Google Tag Manager",
      "gtag.js",
      "Google Analytics 4",
    ],
    milestones: [
      {
        day: 1,
        name: "Default Consent State Setup",
        description:
          "Injected gtag('consent','default',…) above GTM with ad_storage & analytics_storage denied by default",
        expectedOutcome:
          "All tags held from firing until explicit user consent",
      },
      {
        day: 2,
        name: "GTM Initialization & Consent Integration",
        description:
          "Placed GTM container snippet below default-consent code and enabled url_passthrough",
        expectedOutcome:
          "GTM loads with consent mode enabled—no tags fire prematurely",
      },
      {
        day: 3,
        name: "Consent Update Functions",
        description:
          "Built updateConsent() & saveConsentAndApply() to push consent updates and 'consent_updated' events",
        expectedOutcome:
          "User interactions dynamically update consent state in dataLayer",
      },
      {
        day: 4,
        name: "Decision Detection & Banner Logic",
        description:
          "Stored & checked user decisions in localStorage; fired consent_updated on page load if set",
        expectedOutcome:
          "Existing consents auto-apply; new users see consent banner",
      },
      {
        day: 5,
        name: "QA & Production Roll-out",
        description:
          "End-to-end test of consent flow, tag firing, and dataLayer events across key pages",
        expectedOutcome:
          "Consent mode live in production with verified session/event tracking",
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
      role: "Client",
      image: "",
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
        day: 1,
        name: "Requirements & Access Setup",
        description:
          "Gather requirements and secure admin access to WordPress, GTM, GA4 & Google Ads.",
        expectedOutcome: "Environment ready and tracking plan finalized.",
      },
      {
        day: 2,
        name: "Tag Configuration & Testing",
        description:
          "Build and QA custom GTM tags/triggers for page_view, scroll, button clicks and MEC steps.",
        expectedOutcome:
          "All key events fire reliably in GTM Preview/Debug mode.",
      },
      {
        day: 3,
        name: "Google Ads Conversion Mapping",
        description:
          "Link GTM-fired events to Google Ads conversion actions, assign dynamic values/scores.",
        expectedOutcome:
          "Conversion actions appear in Google Ads and record test conversions.",
      },
      {
        day: 4,
        name: "Tutorial & Documentation Delivery",
        description:
          "Record detailed Loom tutorial and hand off comprehensive setup docs.",
        expectedOutcome:
          "Client can reproduce, extend and optimize the conversion setup independently.",
      },
    ],
    projectTimeline: {
      startDate: "Nov 27, 2024",
      endDate: "Dec 27, 2024",
      durationDays: 31,
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
    // no top-line analytics available for this job
    testimonial: {
      quote:
        "I can't say enough good things about Shahzada. Some of the nuances of our project were over my head, but he understood them completely and executed everything smoothly and quickly. Would 10000% recommend working with Shahzada.",
      author: "Libie Motchan",
      role: "Co-Founder of Fulton",
      image:
        "https://media.licdn.com/dms/image/v2/C4D03AQHbWO4h0DVsDA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1613856010270?e=1753315200&v=beta&t=7IVe-5PfttGloanC8SAJBphHE1NZvhs5bM-OX8Q-Krc",
    },
    platforms: [
      "Shopify",
      "Shopify Liquid",
      "Google Tag Manager",
      "Twitter Ads Manager",
    ],
    milestones: [
      {
        day: 1,
        name: "Pixel Migration Planning",
        description:
          "Audit existing Twitter events in checkout extensions and prepare Liquid scripts",
        expectedOutcome:
          "Detailed migration plan and .liquid templates ready for implementation",
      },
      {
        day: 7,
        name: "Liquid Script Injection",
        description:
          "Disabled checkout extension events and deployed Twitter pixel code into checkout.liquid and thank_you.liquid",
        expectedOutcome:
          "Conversion events firing via .liquid; old extension turned off",
      },
      {
        day: 14,
        name: "End-to-End Validation",
        description:
          "Tested purchase and post-purchase events in Twitter Ads Manager and GA4",
        expectedOutcome:
          "100% of test orders recorded correctly in both systems",
      },
      {
        day: 25,
        name: "Project Close-Out",
        description:
          "Delivered final report, handed off documentation, and confirmed no pending tasks",
        expectedOutcome:
          "Client satisfied, contract closed with $350 milestone paid",
      },
    ],
    projectTimeline: {
      startDate: "Jul 31, 2024",
      endDate: "Aug 25, 2024",
      durationDays: 26,
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
      "After pausing campaigns and changing domains, Restrank.com's outbound click conversions stopped firing properly. In 3 days, I audited GTM and Google Ads, updated triggers for affiliate domains, and restored accurate GA4 and Ads tracking—enabling data-driven campaign optimization again.",
    imageUrl: "/images/for-businesses/client-restrank-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-restrank-mobile-home.png",
    siteUrl: "https://restrank.com",
    testimonial: {
      quote:
        "He is very good in fixing any Google Tracking Code issues you have; we hired him twice and we will hire him again when we need more help. Thanks",
      author: "Hayam Sh",
      role: "Client",
      image:
        "https://media.licdn.com/dms/image/v2/C5603AQGUgP-vA1neBw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1575128939684?e=1753315200&v=beta&t=E9Yk6Bn85dEF_hGOtLXSRuyc4JKI9LIURf98Z2ohTHw",
    },
    platforms: ["Google Tag Manager", "Google Analytics 4", "Google Ads"],
    milestones: [
      {
        day: 1,
        name: "Audit & Diagnosis",
        description:
          "Troubleshot GTM container and Google Ads conversion tag issues after tracking went stale",
        expectedOutcome:
          "Identified root cause of outbound click conversion failures",
      },
      {
        day: 2,
        name: "Tag & Trigger Fixes",
        description:
          "Updated GTM outbound-click triggers for affiliate hostnames and republished container",
        expectedOutcome:
          "Outbound click events flowing into GA4 and Ads debug view",
      },
      {
        day: 3,
        name: "Verification & Testing",
        description:
          "Validated conversion firing in GA4, GTM debug, and Google Ads reports",
        expectedOutcome:
          "Accurate outbound-click conversions restored for campaign optimization",
      },
    ],
    projectTimeline: {
      startDate: "Oct 30, 2024",
      endDate: "Jan 4, 2025",
      durationDays: 66,
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
      "Chris Lister's site was failing to surface purchase data in Mailchimp and was running an outdated server-side tagging container. Over 6 months, we upgraded his GTM server container to v2.3.0, rebuilt his Mailchimp tagging via GTM, defined a robust purchase DataLayer, and guided backend API integration so that every order now flows into Mailchimp's ecommerce reports accurately.",
    imageUrl: "/images/for-businesses/client-thebestofexmoor-desktop-home.png",
    mobileUrl: "/images/for-businesses/client-thebestofexmoor-mobile-home.png",
    siteUrl: "https://www.thebestofexmoor.co.uk",
    testimonial: {
      quote:
        "Ali is one of the best freelancers I've worked with, his conscientiousness to get the job complete is exceptional. Thank you for your help and I hope to work again in the future.",
      author: "Chris Lister",
      role: "Client",
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
      role: "Client",
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
      image: "",
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
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQEtUd6HatiLfA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1682871311747?e=1753315200&v=beta&t=rd_OWgyOai3ginEMAINspl6UA3PdOMK6_rlSkIDwi_o",
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
