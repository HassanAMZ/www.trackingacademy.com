export interface Service {
  name: string;
  id: string;
  subtitle: string;
  description: string;
  price: string;
  price_id: string;
  product_id: string;
  popular: boolean;
  color: string;
  buttonVariant: string;
  cta: string;
  accuracy: string;
  features: {
    [key: string]: string | boolean;
  };
  featureExplanations: {
    [key: string]: string;
  };
}

export const services: Service[] = [
  {
    name: "Enterprise Solution",
    id: "enterprise-solution",
    subtitle: "Full Compliance & Tracking",
    description:
      "Advanced tracking with complete digital compliance for enterprise-level needs in 24 hours. ",
    price: "$7,500",
    product_id: "prod_SMaBYVuzJgZfTK",
    price_id: "price_1RRr1OAE3E6zT9eTlvyhObEb",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Get Started",
    accuracy: "100%",
    features: {
      "Google Ads Tracking": "Full Setup",
      "META Ads Tracking": "Full Setup",
      "TikTok Tracking": "Full Setup",
      "Google Analytics": "Full Setup",
      "Google Tag Manager": "Full Setup",
      "Enhanced Ecommerce": true,
      "LinkedIn Ads Tracking": "Full Setup",
      "X Ads Tracking": "Full Setup",
      "Floodlight Tags": "Full Setup",
      "Consent Solution": "Advanced",
      "Looker Studio Dashboard": true,
      "Cross-domain Tracking": true,
      "UTM Parameter Tracking": true,
      "SST Anonymizer": true,
      "SST Cookie Extender": true,
      "SST Bot Detection": true,
      "Multi-language Support": true,
      "Delivery Time": "1 day",
      "Advanced Data Modeling": true,
      "API Integrations": true,
      "Custom Dashboards": true,
      "User Management": true,
      "Single Sign-On (SSO)": true,
      "Enhanced Data Privacy Tools": true,
      "Real-time Reporting": true,
      "A/B Testing Integration": true,
      "Heatmaps and Session Replays": true,
      "Predictive Analytics": true,
    },
    featureExplanations: {
      "Google Ads Tracking":
        "Track conversions from Google Ads campaigns with precision, ensuring accurate ROAS measurement and optimization opportunities.",
      "META Ads Tracking":
        "Accurately track Facebook and Instagram ad performance, even with iOS privacy changes and cookie restrictions.",
      "TikTok Tracking":
        "Capture accurate conversion data from TikTok campaigns, even with privacy restrictions.",
      "Google Analytics":
        "Set up proper GA4 implementation to track user behavior, conversions, and campaign performance.",
      "Google Tag Manager":
        "Implement a clean, organized tag management system for all your marketing and analytics tags.",
      "Enhanced Ecommerce":
        "Detailed tracking of product impressions, clicks, add-to-carts, checkouts, and purchases.",
      "LinkedIn Ads Tracking":
        "Measure B2B campaign performance and lead generation from LinkedIn with accurate attribution.",
      "X Ads Tracking":
        "Track conversions from Twitter/X campaigns with precision for better campaign optimization.",
      "Floodlight Tags":
        "Set up Display & Video 360 conversion tracking for advanced campaign measurement.",
      "Consent Solution":
        "Implement a GDPR-compliant consent management platform that maintains tracking accuracy.",
      "Looker Studio Dashboard":
        "Custom dashboard showing all your key metrics in one place for easy monitoring and decision making.",
      "Cross-domain Tracking":
        "Track users across multiple domains or subdomains for complete customer journey visibility.",
      "UTM Parameter Tracking": "Accurate attribution of traffic sources, campaigns, and keywords.",
      "SST Anonymizer":
        "Server-side solution that anonymizes user data while maintaining tracking accuracy, ensuring privacy compliance.",
      "SST Cookie Extender":
        "Extends cookie lifespans server-side to improve cross-device tracking and attribution windows.",
      "SST Bot Detection":
        "Filters out bot traffic server-side for cleaner analytics data and reduced data collection costs.",
      "Multi-language Support":
        "Localized consent banners and privacy policies for global compliance and better user experience.",
      "Delivery Time":
        "Priority delivery within 1 day to get your tracking up and running quickly.",
      "Advanced Data Modeling":
        "Create custom data models to track complex user interactions and business logic.",
      "API Integrations": "Integrate with your existing systems via our comprehensive API.",
      "Custom Dashboards":
        "Design dashboards tailored to your specific metrics and reporting needs.",
      "User Management": "Manage user access with role-based controls for security and efficiency.",
      "Single Sign-On (SSO)":
        "Securely access the platform using your enterprise's identity provider.",
      "Enhanced Data Privacy Tools":
        "Advanced tools for data anonymization and compliance management.",
      "Real-time Reporting": "Get instant insights with real-time data processing and reporting.",
      "A/B Testing Integration": "Easily set up and analyze A/B tests within your tracking setup.",
      "Heatmaps and Session Replays":
        "Visualize user behavior with heatmaps and session recordings.",
      "Predictive Analytics":
        "Leverage machine learning to predict marketing performance and optimize campaigns.",
      CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
      SST: "Server-Side Tracking processes data on secure servers, bypassing ad blockers and preserving user privacy while maintaining 95%+ accuracy. See our case studies at /case-study.",
      Setup:
        "Complete implementation of tracking solutions tailored to your specific business needs.",
    },
  },
  {
    name: "Advanced Tracking",
    id: "advanced-tracking",
    subtitle: "Server-Side + Client-Side",
    description:
      "Comprehensive tracking with both client and server-side implementation for maximum accuracy.",
    price: "$2,500",
    product_id: "prod_SMYQIgiiJQQ2Al",
    price_id: "price_1RRpK8AE3E6zT9eTRxMW2Dpq",
    popular: true,
    color: "border-primary",
    buttonVariant: "default",
    cta: "Reclaim Lost Conversions",
    accuracy: "95%+",
    features: {
      "Google Ads Tracking": "CST & SST",
      "META Ads Tracking": "CST & SST",
      "TikTok Tracking": "CST & SST",
      "Google Analytics": "CST & SST",
      "Google Tag Manager": "CST Setup",
      "Enhanced Ecommerce": true,
      "LinkedIn Ads Tracking": "CST & SST",
      "X Ads Tracking": "CST & SST",
      "Floodlight Tags": "CST & SST",
      "Consent Solution": "Standard",
      "Delivery Time": "7 day",
      "Looker Studio Dashboard": true,
      "Cross-domain Tracking": true,
      "UTM Parameter Tracking": true,
      "SST Anonymizer": false,
      "SST Cookie Extender": false,
      "SST Bot Detection": false,
      "Multi-language Support": false,
    },
    featureExplanations: {
      "Google Ads Tracking":
        "Track conversions from Google Ads campaigns with precision, ensuring accurate ROAS measurement and optimization opportunities.",
      "META Ads Tracking":
        "Accurately track Facebook and Instagram ad performance, even with iOS privacy changes and cookie restrictions.",
      "TikTok Tracking":
        "Capture accurate conversion data from TikTok campaigns, even with privacy restrictions.",
      "Google Analytics":
        "Set up proper GA4 implementation to track user behavior, conversions, and campaign performance.",
      "Google Tag Manager":
        "Implement a clean, organized tag management system for all your marketing and analytics tags.",
      "Enhanced Ecommerce":
        "Detailed tracking of product impressions, clicks, add-to-carts, checkouts, and purchases.",
      "LinkedIn Ads Tracking":
        "Measure B2B campaign performance and lead generation from LinkedIn with accurate attribution.",
      "X Ads Tracking":
        "Track conversions from Twitter/X campaigns with precision for better campaign optimization.",
      "Floodlight Tags":
        "Set up Display & Video 360 conversion tracking for advanced campaign measurement.",
      "Consent Solution":
        "Implement a GDPR-compliant consent management platform that maintains tracking accuracy.",
      "Looker Studio Dashboard":
        "Custom dashboard showing all your key metrics in one place for easy monitoring and decision making.",
      "Cross-domain Tracking":
        "Track users across multiple domains or subdomains for complete customer journey visibility.",
      "UTM Parameter Tracking": "Accurate attribution of traffic sources, campaigns, and keywords.",
      CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
      SST: "Server-Side Tracking processes data on secure servers, bypassing ad blockers and preserving user privacy while maintaining 95%+ accuracy. See our case studies at /case-study.",
      Setup:
        "Complete implementation of tracking solutions tailored to your specific business needs.",
    },
  },
  {
    subtitle: "Client-Side Implementation",
    name: "Professional Setup",
    id: "professional-setup",
    description:
      "Complete implementation of client-side tracking for improved conversion accuracy.",
    price: "$1,500",
    product_id: "prod_SMYDcMw9E4461R",
    price_id: "price_1RRp6lAE3E6zT9eTts6wOZWE",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Get Started Today",

    accuracy: "60-70%",
    features: {
      "Google Ads Tracking": "CST Setup",
      "META Ads Tracking": "CST Setup",
      "TikTok Tracking": "CST Setup",
      "Google Analytics": "CST Setup",
      "Google Tag Manager": "CST Setup",
      "Delivery Time": "7 day",
      "Enhanced Ecommerce": true,
      "LinkedIn Ads Tracking": false,
      "X Ads Tracking": false,
      "Floodlight Tags": false,
      "Consent Solution": "Basic",
      "Looker Studio Dashboard": false,
      "Cross-domain Tracking": false,
      "UTM Parameter Tracking": false,
      "SST Anonymizer": false,
      "SST Cookie Extender": false,
      "SST Bot Detection": false,
      "Multi-language Support": false,
    },
    featureExplanations: {
      "Google Ads Tracking":
        "Track conversions from Google Ads campaigns with precision, ensuring accurate ROAS measurement and optimization opportunities.",
      "META Ads Tracking":
        "Accurately track Facebook and Instagram ad performance, even with iOS privacy changes and cookie restrictions.",
      "TikTok Tracking":
        "Capture accurate conversion data from TikTok campaigns, even with privacy restrictions.",
      "Google Analytics":
        "Set up proper GA4 implementation to track user behavior, conversions, and campaign performance.",
      "Google Tag Manager":
        "Implement a clean, organized tag management system for all your marketing and analytics tags.",
      "Enhanced Ecommerce":
        "Detailed tracking of product impressions, clicks, add-to-carts, checkouts, and purchases.",
      "Consent Solution":
        "Implement a GDPR-compliant consent management platform that maintains tracking accuracy.",
      CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
      Setup:
        "Complete implementation of tracking solutions tailored to your specific business needs.",
    },
  },
  {
    name: "Website Tracking Audit",
    id: "website-tracking-audit",
    subtitle: "Client-Side Tracking",
    description: "Identify gaps in your current tracking setup and get a roadmap for improvements.",
    price: "$500",

    product_id: "prod_SMXsQEj0376cLO",
    price_id: "price_1RRomYAE3E6zT9eTH0szeYoQ",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Get Your Audit",
    accuracy: "95%",
    features: {
      "Google Ads Tracking": "Audit",
      "META Ads Tracking": "Audit",
      "TikTok Tracking": "Audit",
      "Google Analytics": "Audit",
      "Google Tag Manager": "Audit",
      "Enhanced Ecommerce": false,
      "LinkedIn Ads Tracking": "Audit",
      "Delivery Time": "7-Days",

      "X Ads Tracking": "Audit",
      "Floodlight Tags": false,
      "Consent Solution": false,
      "Looker Studio Dashboard": false,
      "Cross-domain Tracking": false,
      "UTM Parameter Tracking": false,
      "SST Anonymizer": false,
      "SST Cookie Extender": false,
      "SST Bot Detection": false,
      "Multi-language Support": false,
    },
    featureExplanations: {
      "Google Ads Tracking":
        "Track conversions from Google Ads campaigns with precision, ensuring accurate ROAS measurement and optimization opportunities.",
      "META Ads Tracking":
        "Accurately track Facebook and Instagram ad performance, even with iOS privacy changes and cookie restrictions.",
      "TikTok Tracking":
        "Capture accurate conversion data from TikTok campaigns, even with privacy restrictions.",
      "Google Analytics":
        "Set up proper GA4 implementation to track user behavior, conversions, and campaign performance.",
      "Google Tag Manager":
        "Implement a clean, organized tag management system for all your marketing and analytics tags.",
      "LinkedIn Ads Tracking":
        "Measure B2B campaign performance and lead generation from LinkedIn with accurate attribution.",
      "X Ads Tracking":
        "Track conversions from Twitter/X campaigns with precision for better campaign optimization.",
      Audit:
        "Comprehensive review of your current tracking setup to identify gaps and opportunities for improvement. View sample audit reports at /audit.",
    },
  },
  {
    name: "See Every Sale",
    id: "see-every-sale",
    subtitle: "7-Days Complete Tracking Solution",
    description:
      "Complete Meta ads tracking restoration with custom dashboard and compliance setup - delivered in just 7 days.",
    price: "$1,500",
    product_id: "prod_SI6QXbIdeTQbUY",
    price_id: "price_1RNWDwAE3E6zT9eTzcpnOUZy",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Fix your tracking setup now",
    accuracy: "95%+",
    features: {
      "Google Ads Tracking": "CST & SST",
      "META Ads Tracking": "CST & SST",
      "TikTok Tracking": "CST & SST",
      "Google Analytics": "GA4 Full Setup",
      "Google Tag Manager": "CST Setup",
      "Enhanced Ecommerce": true,
      "Delivery Time": "7 days",

      "LinkedIn Ads Tracking": false,
      "X Ads Tracking": false,
      "Floodlight Tags": false,
      "Consent Solution": "GDPR & CCPA",
      "Looker Studio Dashboard": "Custom Ecom Dashboard",
      "Cross-domain Tracking": true,
      "UTM Parameter Tracking": true,
      "SST Anonymizer": false,
      "SST Cookie Extender": false,
      "SST Bot Detection": false,
      "Multi-language Support": false,
      "47-Point Conversion Checklist": true,
      "ROI & LTV Tracking Toolkit": true,
      "7-Days Implementation": true,
      "Premium Support": true,
      "Money Back Guarantee": true,
    },
    featureExplanations: {
      "Google Ads Tracking":
        "Track conversions from Google Ads campaigns with precision, ensuring accurate ROAS measurement and optimization opportunities.",
      "META Ads Tracking":
        "Accurately track Facebook and Instagram ad performance, even with iOS privacy changes and cookie restrictions. Restore ViewContent, AddToCart, and Purchase events.",
      "TikTok Tracking":
        "Capture accurate conversion data from TikTok campaigns, even with privacy restrictions.",
      "Google Analytics":
        "Complete GA4 implementation with 95% accurate tracking, custom events, and proper attribution setup.",
      "Google Tag Manager":
        "Implement a clean, organized tag management system for all your marketing and analytics tags.",
      "Enhanced Ecommerce":
        "Detailed tracking of product impressions, clicks, add-to-carts, checkouts, and purchases with full funnel visibility.",
      "Consent Solution":
        "Implement GDPR & CCPA compliant cookie consent system that maintains tracking effectiveness while staying compliant.",
      "Looker Studio Dashboard":
        "Custom ecommerce dashboard showing all your key metrics, campaign performance, and audience insights in one place.",
      "Cross-domain Tracking":
        "Track users across multiple domains or subdomains for complete customer journey visibility.",
      "UTM Parameter Tracking":
        "Accurate attribution of traffic sources, campaigns, and keywords for better campaign optimization.",
      "47-Point Conversion Checklist":
        "Proven checklist with 47 critical conversion optimization points to boost your funnel performance and ROAS.",
      "ROI & LTV Tracking Toolkit":
        "ROAS calculators, LTV tracking tools, budget optimizers, and campaign performance analyzers.",
      "7-Days Implementation":
        "Complete tracking restoration delivered within 3 business days with dedicated implementation support.",
      "Premium Support":
        "Dedicated support throughout implementation, training on your new setup, and ongoing optimization recommendations.",
      "Money Back Guarantee":
        "100% money-back guarantee if we don't deliver 95% accurate conversion tracking within 7 days.",
      CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
      SST: "Server-Side Tracking processes data on secure serversWebsite. ing ad blockers and preserving user privacy while maintaining 95%+ accuracy. Perfect for Meta ads optimization.",
      "GA4 Full Setup":
        "Complete Google Analytics 4 implementation with custom events, proper attribution, and ecommerce tracking tailored to your business needs.",
      "Custom Ecom Dashboard":
        "Tailored Looker Studio dashboard specifically designed for ecommerce brands with key metrics, campaign performance, and actionable insights.",
      "GDPR & CCPA":
        "Fully compliant cookie consent solution for both European GDPR and California CCPA regulations while maintaining tracking effectiveness.",
    },
  },

  {
    name: "Premium Plan",
    id: "premium-subscription",
    subtitle: "Unlimited leads",
    description: "Full enterprise solution with dedicated team for high-volume businesses.",
    price: "$999/month",
    price_id: "price_1RmVp3AE3E6zT9eTcoTGS9Tl",
    product_id: "prod_Shvgwr1LDXZfr9",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Start Maximizing",
    accuracy: "99%+",
    features: {
      "Monthly Leads": "Unlimited",
      "Setup Included": "Free",
      Support: "Dedicated Slack",
      "Google Analytics": "Full GA4",
      "Money Back Guarantee": "30 days",
      Reporting: "Real-time ",
      "Meta Pixel": "Complete",
    },
    featureExplanations: {
      "Meta Pixel": "Full Facebook Pixel installation with proper event configuration.",
      "Google Analytics": "Full GA4 implementation with Google Tag Manager setup.",
      "Money Back Guarantee": "Full refund if not satisfied within 60 days.",
      "Monthly Leads": "Unlimited lead tracking with enterprise infrastructure.",
      "Setup Included": "Complete custom enterprise setup with dedicated implementation team.",
      Support: "Private Slack channel with dedicated account manager.",
      Reporting: "Real-time dashboards",
    },
  },

  {
    name: "Pro Plan",
    id: "pro-subscription",
    subtitle: "Up to 1,000 leads/month",
    description: "Enterprise-grade tracking with dedicated support for serious volume.",
    price: "$699/month",
    price_id: "price_1RmWr7AE3E6zT9eTyrK7k1Rv",
    product_id: "prod_Shwk6IH1i5t9iJ",
    popular: true,
    color: "text-primary",
    buttonVariant: "default",
    cta: "Start Scaling",
    accuracy: "95%+",
    features: {
      "Monthly Leads": "Up to 1,000",
      "Setup Included": "Free",
      Support: "Dedicated Slack",
      Reporting: "Real-time",
      "Google Analytics": "Full GA4",
      "Money Back Guarantee": "30 days",
      "Meta Pixel": "Complete",
    },
    featureExplanations: {
      "Meta Pixel": "Full Facebook Pixel installation with proper event configuration.",
      "Monthly Leads":
        "Track up to 1,000 lead conversions per month with enterprise infrastructure.",
      "Setup Included": "Enterprise setup worth $5,000 included free with white-glove onboarding.",
      "Google Analytics": "Full GA4 implementation with Google Tag Manager setup.",

      Support: "Private Slack channel with dedicated account manager.",
      Reporting: "Live dashboards with real-time tracking and automated alerts.",
      "Money Back Guarantee": "Full refund if not satisfied within 60 days.",
    },
  },
  {
    name: "Growth Plan",
    id: "growth-subscription",
    subtitle: "Up to 500 leads/month",
    description: "Advanced tracking for growing businesses ready to scale profitably.",
    price: "$299/month",
    price_id: "price_1RmWvkAE3E6zT9eTYJANzSwn",
    product_id: "prod_ShwpL9nJe32cK8",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Start Growing",
    accuracy: "95%+",
    features: {
      "Monthly Leads": "Up to 500",
      "Setup Included": "Free",
      "Google Analytics": "Full GA4",
      Support: "Priority Chat + Email",

      Reporting: "Weekly",
      "Money Back Guarantee": "30 days",
      "Meta Pixel": "Complete",
    },
    featureExplanations: {
      "Meta Pixel": "Full Facebook Pixel installation with proper event configuration.",

      "Monthly Leads": "Track up to 500 lead conversions per month with advanced attribution.",
      "Setup Included": "Complete advanced setup worth $2,500 included free.",
      "Google Analytics": "Full GA4 implementation with Google Tag Manager setup.",
      Support: "Priority support with same-day response guarantee.",
      Reporting: "Detailed weekly reports with optimization recommendations.",
      "Money Back Guarantee": "Full refund if not satisfied within 30 days.",
    },
  },

  {
    name: "Starter Plan",
    id: "starter-subscription",
    subtitle: "Up to 100 leads/month",
    description: "Essential Meta tracking for small businesses and new advertisers.",
    price: "$149/month",
    price_id: "price_1RmXDiAE3E6zT9eTFY5Ag1yI",
    product_id: "prod_Shx7baLtc7UrEC",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Start Tracking",
    accuracy: "90%+",
    features: {
      "Monthly Leads": "Up to 100",
      "Setup Included": "Free",
      "Meta Pixel": "Complete",
      Support: "Email",
      Reporting: "Monthly",
      "Money Back Guarantee": "30 days",
    },
    featureExplanations: {
      "Monthly Leads": "Track up to 100 lead conversions per month with accurate attribution.",
      "Setup Included": "Complete setup worth $1,500 included free with your subscription.",
      "Meta Pixel": "Full Facebook Pixel installation with proper event configuration.",
      Support: "Professional email support with 24-48 hour response time.",
      Reporting: "Monthly performance report showing tracking accuracy and insights.",
      "Money Back Guarantee": "Full refund if not satisfied within 30 days.",
    },
  },
];
