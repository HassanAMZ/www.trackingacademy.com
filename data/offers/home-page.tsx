import ClientTestimonial from "@/components/home/testimonaials";
import TestimonialsCarousel from "@/components/offers/offer-002/testimonial-carousal";
import clients from "../clients";

const HomePageConfig = {
  hero: {
    badgeText: "Paid Ad Tracking Post-iOS 18 World",
    headingText:
      "Done-For-You Ads Tracking Setup – Achieve 95% Accuracy in Just 14 Days! ",
    subheadingText:
      "Sit back while our experts set up a cutting-edge Cloud Tracking system for you. No guesswork—just results. Maximize your ROI effortlessly.",
    ctaButtonText: "Let's Handle Your Tracking Setup",
    ctaButtonLink: "/contact",
    supportingButtonText: "Check Case Studies",
    supportingButtonLink: "#case-studies",
    youtubeEmbedId: "9MGpL_AmEYM",
    supportingComponent: <TestimonialsCarousel className="mx-auto max-w-2xl" />,
  },

  problemAwareness: {
    headingText: "The Hidden Cost of Poor Analytics and Inefficient Systems",
    paragraphText:
      "Many businesses lose up to 40% of ad spend due to inaccurate tracking and inefficiencies. Teams are overwhelmed with manual tasks and confusing data. Time and money are wasted without actionable insights.",
    points: [
      "Missed Opportunities: Poor insights lead to underperforming campaigns.",
      "Lost Hours: Teams are bogged down by manual processes.",
      "Stalled Growth: Without clarity, scaling feels impossible.",
    ],
    secondaryHeadingText: "Businesses with Efficient Tracking Systems",
    secondaryListItems: [
      "Optimize ad spend for maximum ROI",
      "Automate repetitive tasks, saving hours of work",
      "Make data-driven decisions for consistent growth",
    ],
  },

  dreamOutcome: {
    heading: "Imagine Running Your Business on Autopilot",
    subheading:
      "Transform your business operations with our cutting-edge solution",
    card1Title: "Real-Time Insights",
    card2Title: "Time-Saving Automation",
    card3Title: "Data-Driven Decisions",
    card1Content:
      "Clearly see which ads work and which don't, allowing you to make informed decisions instantly.",
    card2Content:
      "Automate repetitive tasks and free up your team's time for strategic initiatives and creative problem-solving.",
    card3Content:
      "Make data-backed decisions effortlessly, ensuring every move you make is optimized for success.",
    trackingTableRows: 5,
    dreamOutcomeList: [
      {
        icon: "Target",
        text: "Save 20+ hours per month with automated tracking",
      },
      {
        icon: "TrendingUp",
        text: "Double your ROI by optimizing your ad spend",
      },
      {
        icon: "Lightbulb",
        text: "Finally achieve stress-free scaling",
      },
    ],
  },

  offerDetails: {
    headerTitle: "The Effortless Business Booster Bundle",
    headerDescription:
      "A complete system designed for businesses looking to grow faster with less effort.",
    offerItems: [
      {
        title: "Tracking Audit Blitz",
        description:
          "Identify gaps in your current tracking systems and implement advanced solutions for 95% accuracy.",
        icon: "Zap",
        benefits: [
          "Comprehensive analysis of your existing tracking setup",
          "Identification of data leaks and missed conversion points",
          "Custom implementation plan for robust tracking",
          "Verification and testing of new tracking systems",
        ],
        image: "/images/social-sharing.png",
      },
      {
        title: "Real-Time Insights Dashboard",
        description:
          "Custom dashboard providing instant clarity on ad performance, ROI, audience behavior, and campaign effectiveness—all in one place.",
        icon: "BarChart2",
        benefits: [
          "Live performance metrics for all your ad campaigns",
          "Customizable KPI tracking and goal setting",
          "Audience behavior analysis and segmentation",
          "Automated alerts for significant performance changes",
        ],
        image: "/images/social-sharing.png",
      },
      {
        title: "Integration Masterclass",
        description:
          "Seamlessly unify platforms like Google Analytics, Facebook Ads Manager, and CRMs. Eliminate redundancy with expert guidance.",
        icon: "BookOpen",
        benefits: [
          "Step-by-step integration of major marketing platforms",
          "Custom API connections for unique tech stacks",
          "Data flow optimization to eliminate redundancies",
          "Training on maintaining and troubleshooting integrations",
        ],
        image: "/images/social-sharing.png",
      },
      {
        title: "VIP Automation Support",
        description:
          "Hands-on tools and templates to automate your workflows. Access to a dedicated support team for troubleshooting.",
        icon: "HeadphonesIcon",
        benefits: [
          "Personalized automation strategy for your business",
          "Implementation of time-saving workflow automations",
          "Access to a library of pre-built automation templates",
          "24/7 support from our team of automation experts",
        ],
        image: "/images/social-sharing.png",
      },
      {
        title: "Strategy Optimization Sessions",
        description:
          "Monthly 1:1 calls to analyze data and adjust strategies for continuous improvement and growth.",
        icon: "Activity",
        benefits: [
          "Monthly deep-dive into your performance metrics",
          "Actionable insights and recommendations",
          "A/B testing strategies for continuous improvement",
          "Long-term growth planning and goal setting",
        ],
        image: "/images/social-sharing.png",
      },
    ],
  },

  scarcityUrgency: {
    title: "Only 30 Spots Available – Enrollment Closes in 10 Days!",
    description:
      "To ensure personalized attention and maximize results, we're limiting this offer to 30 businesses this quarter.",
    spotsLeft: 30,
    daysRemaining: 10,
    buttonText:
      "Reserve your spot now before it's gone. Claim Your Spot Today!",
    buttonLink: "/contact",
    iconSize: 12,
  },

  socialProof: {
    sectionTitle: "Businesses Just Like Yours Are Seeing Amazing Results",
    sectionDescription: "Here's what our clients are saying.",
    testimonials: [
      {
        quote:
          "Within a month, we saved 25 hours on manual tasks and increased our ROI by 60%.",
        author: "Jane D.",
        role: "E-Commerce Owner",
        image: "/images/social-sharing.png",
      },
      {
        quote:
          "The dashboard alone was a game-changer. We can now see what works instantly!",
        author: "Mark T.",
        role: "Marketing Director",
        image: "/images/social-sharing.png",
      },
      {
        quote:
          "Effortless and effective. This system has completely transformed our growth trajectory.",
        author: "Laura K.",
        role: "SaaS Founder",
        image: "/images/social-sharing.png",
      },
    ],
    stats: [
      {
        label: "Average ROI Increase",
        value: "60%",
        icon: "ArrowUpRight",
      },
      {
        label: "Time Saved per Month",
        value: "25+ hours",
        icon: "ArrowUpRight",
      },
      {
        label: "Client Satisfaction",
        value: "98%",
        icon: "ArrowUpRight",
      },
    ],
    resultsTitle: "The Results Speak for Themselves",
    clientLogos: [
      "/images/social-sharing.png",
      "/images/social-sharing.png",
      "/images/social-sharing.png",
      "/images/social-sharing.png",
      "/images/social-sharing.png",
      "/images/social-sharing.png",
    ],
  },

  bonuses: {
    sectionTitle: "Exclusive Bonuses",
    sectionDescription: "Only For Early Action-Takers",
    bonuses: [
      {
        title: "Ad Efficiency Blueprint",
        description:
          "A step-by-step guide to get the most out of every ad dollar.",
        value: "$500",
        icon: "FileText",
        image: "/images/social-sharing.png",
      },
      {
        title: "Advanced ROI Reporting Tools",
        description: "Track key metrics effortlessly with pre-built templates.",
        value: "$800",
        icon: "BarChart2",
        image: "/images/social-sharing.png",
      },
    ],
    totalBonusValue: "$1,300",
    actionButtonText: "Act Now and Get Over $1,300 in Bonuses!",
    actionButtonLink: "/contact",
  },

  objectionHandling: {
    sectionTitle: "Still Unsure? Here's Our Triple Guarantee",
    guarantees: [
      {
        title: "100% Satisfaction Guarantee",
        description:
          "We're so confident in our system that we offer a 100% satisfaction guarantee. If you don't see measurable improvements in 30 days, we'll work with you until you do—or refund your investment.",
        icon: "Shield",
      },
      {
        title: "Double ROI Guarantee",
        description:
          "We guarantee that you'll at least double your return on ad spend within 90 days of implementing our system. If not, we'll continue working with you free of charge until you achieve this result.",
        icon: "TrendingUp",
      },
      {
        title: "Time-Saving Guarantee",
        description:
          "We promise you'll save at least 20 hours per month through our automation systems. If you don't see this time savings within the first 60 days, we'll provide an additional 3 months of support at no extra cost.",
        icon: "Clock",
      },
    ],
  },

  detailedCTA: {
    heading: "Let's Make Business Growth Effortless",
    subheading: "Act now to get the bonuses and lock in your business growth.",
    listItems: [
      "Optimize your ad spend",
      "Save 20+ hours per month",
      "Get real-time insights",
      "Automate your workflows",
    ],
    buttonText: "Secure Your Spot – Limited Availability!",
    buttonLink: "/contact",
    footerText: "Only 30 spots available. Don't miss out!",
  },
};

export default HomePageConfig;
