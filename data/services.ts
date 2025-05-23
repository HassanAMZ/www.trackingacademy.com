export interface Service {
  name: string;
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
    name: "Basic Tracking Audit",
    subtitle: "Client-Side Tracking",
    description:
      "Identify gaps in your current tracking setup and get a roadmap for improvements",
    price: "$500",

    product_id: "prod_SMXsQEj0376cLO",
    price_id: "price_1RRomYAE3E6zT9eTH0szeYoQ",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Get Your Audit",
    accuracy: "60-70%",
    features: {
      "Google Ads Tracking": "Audit",
      "META Ads Tracking": "Audit",
      "TikTok Tracking": "Audit",
      "Google Analytics": "Audit",
      "Google Tag Manager": "Audit",
      "Enhanced Ecommerce": false,
      "LinkedIn Ads Tracking": "Audit",
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
    name: "Professional Setup",
    subtitle: "Client-Side Implementation",
    description:
      "Complete implementation of client-side tracking for improved conversion accuracy",
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
    name: "Advanced Tracking",
    subtitle: "Server-Side + Client-Side",
    description:
      "Comprehensive tracking with both client and server-side implementation for maximum accuracy",
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
      "UTM Parameter Tracking":
        "Accurate attribution of traffic sources, campaigns, and keywords.",
      CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
      SST: "Server-Side Tracking processes data on secure servers, bypassing ad blockers and preserving user privacy while maintaining 95%+ accuracy. See our case studies at /case-study.",
      Setup:
        "Complete implementation of tracking solutions tailored to your specific business needs.",
    },
  },
  {
    name: "Enterprise Solution",
    subtitle: "Full Compliance & Tracking",
    description:
      "Advanced tracking with complete digital compliance for enterprise-level needs",
    price: "€5,000",
    product_id: "prod_SMaBYVuzJgZfTK",
    price_id: "price_1RRr1OAE3E6zT9eTlvyhObEb",
    popular: false,
    color: "border-muted",
    buttonVariant: "outline",
    cta: "Schedule Consultation",
    accuracy: "95%+",
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
      "UTM Parameter Tracking":
        "Accurate attribution of traffic sources, campaigns, and keywords.",
      "SST Anonymizer":
        "Server-side solution that anonymizes user data while maintaining tracking accuracy, ensuring privacy compliance.",
      "SST Cookie Extender":
        "Extends cookie lifespans server-side to improve cross-device tracking and attribution windows.",
      "SST Bot Detection":
        "Filters out bot traffic server-side for cleaner analytics data and reduced data collection costs.",
      "Multi-language Support":
        "Localized consent banners and privacy policies for global compliance and better user experience.",
      CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
      SST: "Server-Side Tracking processes data on secure servers, bypassing ad blockers and preserving user privacy while maintaining 95%+ accuracy. See our case studies at /case-study.",
      Setup:
        "Complete implementation of tracking solutions tailored to your specific business needs.",
    },
  },
];
