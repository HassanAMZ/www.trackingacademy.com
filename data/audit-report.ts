interface OverallScore {
  score: number;
  maxScore: number;
  status: string;
  color: string;
}

interface CategoryScore {
  name: string;
  score: number;
  color: string;
}

interface Tracker {
  name: string;
  provider: string;
  category: string;
  dataSentTo: string;
  trackingMethod: string;
  canImprove: boolean;
  improvementLink?: string;
  isTransparent?: boolean;
  transparentMessage?: string;
}

interface TrackingCookie {
  name: string;
  provider: string;
  category: string;
  dataSentTo: string;
  lifetime: string;
}

interface TrackingScript {
  name: string;
  provider: string;
  category: string;
  transferSize: string;
  transferSizeColor: string;
  blockingTime: string;
  blockingTimeColor: string;
}

interface RecommendedAction {
  id: string;
  title: string;
  categories: string[];
  scoreImprovement: number;
  // description?: string;
  // howToLink?: string;
  // howToText?: string;
  // benefits?: string[];
  // caseStudies?: Array<{
  //   title: string;
  //   link: string;
  // }>;
}

export interface AuditReport {
  id: string;
  embedId?: {
    loom?: string;
    youtube?: string;
  };
  date: string;
  domain: string;
  overallScore: OverallScore;
  categoryScores: CategoryScore[];
  trackers: Tracker[];
  trackingCookies: TrackingCookie[];
  trackingScripts: TrackingScript[];
  recommendedActions: RecommendedAction[];
}

export interface AuditReportProps {
  report: AuditReport;
}

const auditReports: AuditReport[] = [
  {
    id: "purplehouseclinic",
    date: "May 30th, 2025",
    domain: "www.purplehouseclinic.co.uk",
    embedId: { loom: "29dcd7ad09f745ea9ec870d100645116" },
    overallScore: {
      score: 65,
      maxScore: 100,
      status: "Can be improved",
      color: "success",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 45,
        color: "destructive",
      },
      {
        name: "Ads",
        score: 86,
        color: "success",
      },
      {
        name: "Cookie lifetime",
        score: 76,
        color: "success",
      },
      {
        name: "Page speed",
        score: 59,
        color: "destructive",
      },
    ],
    trackers: [
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Ads",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Universal Analytics",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
    ],
    trackingCookies: [
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_gcl_aw",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_gcl_gb",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
    ],
    trackingScripts: [
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "AW gtag.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "86 KB",
        transferSizeColor: "success",
        blockingTime: "88 ms",
        blockingTimeColor: "success",
      },
      {
        name: "analytics.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "21 KB",
        transferSizeColor: "success",
        blockingTime: "27 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "0196a9c3-bc6d-7e4a-827e-81871d307354",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "0196a9c3-bcca-749d-aee6-fcd14f21a041",
        title: "Remove Universal Analytics script",
        categories: ["Advertisment"],
        scoreImprovement: 10,
      },
      {
        id: "0196a9c3-bc7b-7e48-865f-e0540e7b2d71",
        title: "Move to Google Ads server-side tracking",
        categories: ["Advertisment"],
        scoreImprovement: 7,
      },
    ],
  },
  {
    id: "germanimmigrationlaw",
    date: "May 30th, 2025",
    domain: "www.germanimmigrationlaw.com",

    overallScore: {
      score: 63,
      maxScore: 100,
      status: "Can be improved",
      color: "#37B0F6",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 35,
        color: "#FF6D34",
      },
      {
        name: "Ads",
        score: 80,
        color: "#37B0F6",
      },
      {
        name: "Cookie lifetime",
        score: 88,
        color: "#37B0F6",
      },
      {
        name: "Page speed",
        score: 67,
        color: "#37B0F6",
      },
    ],
    trackers: [
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Universal Analytics",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
    ],
    trackingCookies: [
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
    ],
    trackingScripts: [
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "analytics.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "21 KB",
        transferSizeColor: "success",
        blockingTime: "27 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "0196a9c3-bc6d-7e4a-827e-81871d307354",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "0196a9c3-bcca-749d-aee6-fcd14f21a041",
        title: "Remove Universal Analytics script",
        categories: ["Advertisment"],
        scoreImprovement: 10,
      },
      {
        id: "ensure-google-consent-mode",
        title: "Ensure Google Consent Mode compatibility",
        categories: ["Compliance"],
        scoreImprovement: 10,
      },
    ],
  },
  {
    id: "fastbuds",
    date: "May 30th, 2025",
    domain: "fastbuds.com/us",
    overallScore: {
      score: 70,
      maxScore: 100,
      status: "Can be improved",
      color: "warning",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 65,
        color: "warning",
      },
      {
        name: "Ads",
        score: 83,
        color: "success",
      },
      {
        name: "Cookie lifetime",
        score: 62,
        color: "warning",
      },
      {
        name: "Page speed",
        score: 66,
        color: "warning",
      },
    ],
    trackers: [
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Klaviyo",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Twitter (X)",
        provider: "Twitter",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
    ],
    trackingCookies: [
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "__kla_id",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "400 days",
      },
      {
        name: "_twclid",
        provider: "Twitter",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "30 days",
      },
    ],
    trackingScripts: [
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "onsite.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "33 KB",
        transferSizeColor: "success",
        blockingTime: "59 ms",
        blockingTimeColor: "success",
      },
      {
        name: "klaviyo.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "3 KB",
        transferSizeColor: "success",
        blockingTime: "221 ms",
        blockingTimeColor: "destructive",
      },
      {
        name: "uwt.js",
        provider: "Twitter",
        category: "Advertisment",
        transferSize: "16 KB",
        transferSizeColor: "success",
        blockingTime: "139 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "0196a9c3-bc6d-7e4a-827e-81871d307354",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "0196a9c3-bd3b-703e-afb2-def9c976015a",
        title: "Configure server-side tracking for Twitter (X)",
        categories: ["Advertisment"],
        scoreImprovement: 7,
      },
      {
        id: "0196a9c3-bcb0-7bd2-a2e4-720a14459b83",
        title: "Set up server-side tracking for Klaviyo",
        categories: ["Advertisment"],
        scoreImprovement: 5,
      },
    ],
  },
  {
    id: "sundaygolf",
    date: "May 29th, 2025",
    domain: "sundaygolf.com",
    overallScore: {
      score: 40,
      maxScore: 100,
      status: "Not good",
      color: "destructive",
    },
    categoryScores: [
      { name: "Analytics", score: 55, color: "destructive" },
      { name: "Ads", score: 37, color: "destructive" },
      { name: "Cookie lifetime", score: 3, color: "destructive" },
      { name: "Page speed", score: 57, color: "destructive" },
    ],
    trackers: [
      {
        name: "Meta",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Klaviyo",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Pinterest",
        provider: "Pinterest",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client & Server-side",
        canImprove: false,
      },
      {
        name: "Reddit",
        provider: "Reddit",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Microsoft Clarity",
        provider: "Microsoft",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: false,
        isTransparent: true,
        transparentMessage: "Server-side tracking not supported",
      },
    ],
    trackingCookies: [
      {
        name: "_fbp",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_fbc",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "1 days",
      },
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "__kla_id",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "400 days",
      },
      {
        name: "_epik",
        provider: "Pinterest",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "365 days",
      },
      {
        name: "_rdt_cid",
        provider: "Reddit",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "30 days",
      },
      {
        name: "_clck",
        provider: "Microsoft",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "365 days",
      },
    ],
    trackingScripts: [
      {
        name: "fbevents.js",
        provider: "Meta",
        category: "Advertisment",
        transferSize: "47 KB",
        transferSizeColor: "success",
        blockingTime: "58 ms",
        blockingTimeColor: "success",
      },
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "onsite.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "33 KB",
        transferSizeColor: "success",
        blockingTime: "59 ms",
        blockingTimeColor: "success",
      },
      {
        name: "klaviyo.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "3 KB",
        transferSizeColor: "success",
        blockingTime: "221 ms",
        blockingTimeColor: "destructive",
      },
      {
        name: "core.js",
        provider: "Pinterest",
        category: "Advertisment",
        transferSize: "2 KB",
        transferSizeColor: "success",
        blockingTime: "73 ms",
        blockingTimeColor: "success",
      },
      {
        name: "main.js",
        provider: "Pinterest",
        category: "Advertisment",
        transferSize: "24 KB",
        transferSizeColor: "success",
        blockingTime: "23 ms",
        blockingTimeColor: "success",
      },
      {
        name: "pixel.js",
        provider: "Reddit",
        category: "Advertisment",
        transferSize: "13 KB",
        transferSizeColor: "success",
        blockingTime: "141 ms",
        blockingTimeColor: "success",
      },
      {
        name: "clarity.js",
        provider: "Microsoft",
        category: "Advertisment",
        transferSize: "30 KB",
        transferSizeColor: "success",
        blockingTime: "99 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "cookie-keeper",
        title:
          "Use Cookie Keeper to bypass ITP limits and extend cookie duration",
        categories: ["Cookies"],
        scoreImprovement: 19,
      },
      {
        id: "ga4-server-side",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "reddit-server-side",
        title: "Configure Reddit server-side tracking",
        categories: ["Advertisment"],
        scoreImprovement: 9,
      },
      {
        id: "meta-server-side",
        title: "Switch to web & server-side tracking for Meta",
        categories: ["Advertisment"],
        scoreImprovement: 8,
      },
      {
        id: "klaviyo-server-side",
        title: "Set up server-side tracking for Klaviyo",
        categories: ["Advertisment"],
        scoreImprovement: 5,
      },
    ],
  },

  {
    id: "egeszsegesbor.carniumbotanical",
    date: "May 29th, 2025",
    domain: "egeszsegesbor.carniumbotanicals.hu",
    overallScore: {
      score: 49,
      maxScore: 100,
      status: "Not good",
      color: "destructive",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 35,
        color: "destructive",
      },
      {
        name: "Ads",
        score: 58,
        color: "destructive",
      },
      {
        name: "Cookie lifetime",
        score: 61,
        color: "success",
      },
      {
        name: "Page speed",
        score: 55,
        color: "destructive",
      },
    ],
    trackers: [
      {
        name: "Meta",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Ads",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Universal Analytics",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
    ],
    trackingCookies: [
      {
        name: "_fbp",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_fbc",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "1 days",
      },
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_gcl_aw",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_gcl_gb",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
    ],
    trackingScripts: [
      {
        name: "fbevents.js",
        provider: "Meta",
        category: "Advertisment",
        transferSize: "47 KB",
        transferSizeColor: "success",
        blockingTime: "58 ms",
        blockingTimeColor: "success",
      },
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "AW gtag.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "86 KB",
        transferSizeColor: "success",
        blockingTime: "88 ms",
        blockingTimeColor: "success",
      },
      {
        name: "analytics.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "21 KB",
        transferSizeColor: "success",
        blockingTime: "27 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "0196a9c3-bc6d-7e4a-827e-81871d307354",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "0196a9c3-bcca-749d-aee6-fcd14f21a041",
        title: "Remove Universal Analytics script",
        categories: ["Advertisment"],
        scoreImprovement: 10,
      },
      {
        id: "0196a9c3-bc94-74c0-9dfb-0a54a50331fa",
        title: "Switch to web & server-side tracking for Meta",
        categories: ["Advertisment"],
        scoreImprovement: 8,
      },
      {
        id: "0196a9c3-bc7b-7e48-865f-e0540e7b2d71",
        title: "Move to Google Ads server-side tracking",
        categories: ["Advertisment"],
        scoreImprovement: 7,
      },
      {
        id: "consent-config",
        title: "Add and configure consent for GDPR compliance",
        categories: ["Compliance"],
        scoreImprovement: 7,
      },
    ],
  },
  {
    id: "eko-skrnicl",
    date: "May 29th, 2025",
    domain: "www.eko-skrnicl.si",
    overallScore: {
      score: 33,
      maxScore: 100,
      status: "Not good",
      color: "destructive",
    },
    categoryScores: [
      { name: "Analytics", score: 45, color: "warning" },
      { name: "Ads", score: 27, color: "warning" },
      { name: "Cookie lifetime", score: 5, color: "destructive" },
      { name: "Page speed", score: 57, color: "warning" },
    ],
    trackers: [
      {
        name: "Meta",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Klaviyo",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Outbrain",
        provider: "Outbrain",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Criteo",
        provider: "Criteo",
        category: "Advertisment",
        dataSentTo: "FR",
        trackingMethod: "Client-side",
        canImprove: false,
        isTransparent: true,
        transparentMessage: "Server-side tracking not supported",
      },
    ],
    trackingCookies: [
      {
        name: "_fbp",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_fbc",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "1 days",
      },
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "__kla_id",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "400 days",
      },
      {
        name: "dicbo",
        provider: "Outbrain",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "cto_bundle",
        provider: "Criteo",
        category: "Advertisment",
        dataSentTo: "FR",
        lifetime: "365 days",
      },
    ],
    trackingScripts: [
      {
        name: "fbevents.js",
        provider: "Meta",
        category: "Advertisment",
        transferSize: "47 KB",
        transferSizeColor: "success",
        blockingTime: "58 ms",
        blockingTimeColor: "success",
      },
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "onsite.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "33 KB",
        transferSizeColor: "success",
        blockingTime: "59 ms",
        blockingTimeColor: "success",
      },
      {
        name: "klaviyo.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "3 KB",
        transferSizeColor: "success",
        blockingTime: "221 ms",
        blockingTimeColor: "destructive",
      },
      {
        name: "obtp.js",
        provider: "Outbrain",
        category: "Advertisment",
        transferSize: "9 KB",
        transferSizeColor: "success",
        blockingTime: "42 ms",
        blockingTimeColor: "success",
      },
      {
        name: "ld.js",
        provider: "Criteo",
        category: "Advertisment",
        transferSize: "25 KB",
        transferSizeColor: "success",
        blockingTime: "238 ms",
        blockingTimeColor: "destructive",
      },
    ],
    recommendedActions: [
      {
        id: "cookie-keeper",
        title:
          "Use Cookie Keeper to bypass ITP limits and extend cookie duration",
        categories: ["Cookies"],
        scoreImprovement: 19,
      },
      {
        id: "ga4-server-side",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "consent-config",
        title: "Ensure Google Consent Mode compatibility",
        categories: ["Compliance"],
        scoreImprovement: 10,
      },
      {
        id: "meta-server-side",
        title: "Switch to web & server-side tracking for Meta",
        categories: ["Advertisment"],
        scoreImprovement: 8,
      },
      {
        id: "klaviyo-server-side",
        title: "Set up server-side tracking for Klaviyo",
        categories: ["Advertisment"],
        scoreImprovement: 5,
      },
      {
        id: "outbrain-server-side",
        title: "Transition to Outbrain server-side tracking",
        categories: ["Advertisment"],
        scoreImprovement: 5,
      },
    ],
  },
  {
    id: "justclickandshop",
    date: "May 28th, 2025",
    domain: "justclickandshop.com",
    overallScore: {
      score: 72,
      maxScore: 100,
      status: "Can be improved",
      color: "warning",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 90,
        color: "success",
      },
      {
        name: "Ads",
        score: 62,
        color: "warning",
      },
      {
        name: "Cookie lifetime",
        score: 36,
        color: "destructive",
      },
      {
        name: "Page speed",
        score: 96,
        color: "success",
      },
    ],
    trackers: [
      {
        name: "Meta",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
    ],
    trackingCookies: [
      {
        name: "_fbp",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_fbc",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "1 days",
      },
    ],
    trackingScripts: [
      {
        name: "fbevents.js",
        provider: "Meta",
        category: "Advertisment",
        transferSize: "47 KB",
        transferSizeColor: "success",
        blockingTime: "58 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "cookie-keeper",
        title:
          "Use Cookie Keeper to bypass ITP limits and extend cookie duration",
        categories: ["Cookies"],
        scoreImprovement: 19,
      },
      {
        id: "0196a9c3-bc94-74c0-9dfb-0a54a50331fa",
        title: "Switch to web & server-side tracking for Meta",
        categories: ["Advertisment"],
        scoreImprovement: 8,
      },
    ],
  },
  {
    id: "roisense",
    date: "May 28th, 2025",
    domain: "demo.roisense.com",
    overallScore: {
      score: 25,
      maxScore: 100,
      status: "Not good",
      color: "destructive",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 42,
        color: "destructive",
      },
      {
        name: "Ads",
        score: 0,
        color: "destructive",
      },
      {
        name: "Cookie lifetime",
        score: 0,
        color: "destructive",
      },
      {
        name: "Page speed",
        score: 80,
        color: "success",
      },
    ],
    trackers: [
      {
        name: "Meta",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Server-side",
        canImprove: false,
      },
      {
        name: "Google Ads",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "TikTok",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        trackingMethod: "Server-side",
        canImprove: true,
        improvementLink: "/services",
      },
    ],
    trackingCookies: [
      {
        name: "_fbp",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_fbc",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "1 days",
      },
      {
        name: "FPID",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "365 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "365 days",
      },
      {
        name: "_gcl_aw",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_gcl_gb",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ttp",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        lifetime: "365 days",
      },
      {
        name: "ttclid",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        lifetime: "30 days",
      },
    ],
    trackingScripts: [
      {
        name: "fbevents.js",
        provider: "Meta",
        category: "Advertisment",
        transferSize: "47 KB",
        transferSizeColor: "success",
        blockingTime: "58 ms",
        blockingTimeColor: "success",
      },
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "69 ms",
        blockingTimeColor: "success",
      },
      {
        name: "AW gtag.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "86 KB",
        transferSizeColor: "success",
        blockingTime: "88 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "server-gtm-subdomain",
        title: "Set up custom subdomain for server GTM container",
        categories: ["Advertisment", "Cookies", "Analytics"],
        scoreImprovement: 31,
      },
      {
        id: "cookie-keeper",
        title:
          "Use Cookie Keeper to bypass ITP limits and extend cookie duration",
        categories: ["Cookies"],
        scoreImprovement: 19,
      },
      {
        id: "avoid-ad-blockers",
        title: "Avoid negative impact of ad blockers",
        categories: ["Advertisment", "Analytics"],
        scoreImprovement: 13,
      },
      {
        id: "0196a9c3-bc94-74c0-9dfb-0a54a50331fa",
        title: "Switch to web & server-side tracking for Meta",
        categories: ["Advertisment"],
        scoreImprovement: 8,
      },
      {
        id: "0196a9c3-bc7b-7e48-865f-e0540e7b2d71",
        title: "Move to Google Ads server-side tracking",
        categories: ["Advertisment"],
        scoreImprovement: 7,
      },
      {
        id: "0196a9c3-bc00-7a23-98eb-d8cd3cb8e1a7",
        title: "Integrate web and server-side tracking for TikTok",
        categories: ["Advertisment"],
        scoreImprovement: 1,
      },
    ],
  },
  {
    id: "slumiya",
    date: "May 26th, 2025",
    domain: "slumiya.com",
    overallScore: {
      score: 56,
      maxScore: 100,
      status: "Not good",
      color: "destructive",
    },
    categoryScores: [
      { name: "Analytics", score: 55, color: "destructive" },
      { name: "Ads", score: 66, color: "warning" },
      { name: "Cookie prolong", score: 27, color: "destructive" },
      { name: "SEO", score: 86, color: "success" },
    ],
    trackers: [
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
      },
      {
        name: "TikTok",
        provider: "TikTok",
        category: "Advertisement",
        dataSentTo: "CN",
        trackingMethod: "Client-side",
        canImprove: true,
      },
    ],
    trackingCookies: [
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ttp",
        provider: "TikTok",
        category: "Advertisement",
        dataSentTo: "CN",
        lifetime: "365 days",
      },
      {
        name: "ttclid",
        provider: "TikTok",
        category: "Advertisement",
        dataSentTo: "CN",
        lifetime: "1 days",
      },
      {
        name: "ttcsid",
        provider: "TikTok",
        category: "Advertisement",
        dataSentTo: "CN",
        lifetime: "365 days",
      },
    ],
    trackingScripts: [
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "events.js",
        provider: "TikTok",
        category: "Advertisement",
        transferSize: "3 KB",
        transferSizeColor: "success",
        blockingTime: "166 ms",
        blockingTimeColor: "success",
      },
      {
        name: "main.js",
        provider: "TikTok",
        category: "Advertisement",
        transferSize: "103 KB",
        transferSizeColor: "success",
        blockingTime: "60 ms",
        blockingTimeColor: "success",
      },
      {
        name: "identify.js",
        provider: "TikTok",
        category: "Advertisement",
        transferSize: "40 KB",
        transferSizeColor: "success",
        blockingTime: "25 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "cookie-keeper",
        title:
          "Use Cookie Keeper to bypass ITP limits and extend cookie duration",
        categories: ["Cookies"],
        scoreImprovement: 19,
      },
      {
        id: "ga4-server-side",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "tiktok-server-side",
        title: "Use server-side tracking for TikTok",
        categories: ["Advertisement"],
        scoreImprovement: 7,
      },
    ],
  },
  {
    id: "afroditacosmetics",
    date: "May 15th, 2025",
    domain: "webshop.afroditacosmetics.com",
    overallScore: {
      score: 44,
      maxScore: 100,
      status: "Not good",
      color: "destructive",
    },
    categoryScores: [
      {
        name: "Analytics",
        score: 35,
        color: "destructive",
      },
      {
        name: "Ads",
        score: 53,
        color: "destructive",
      },
      {
        name: "Cookie prolong",
        score: 50,
        color: "destructive",
      },
      {
        name: "SEO",
        score: 36,
        color: "destructive",
      },
    ],
    trackers: [
      {
        name: "Meta",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "TikTok",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Klaviyo",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Universal Analytics",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/services",
      },
      {
        name: "Hotjar",
        provider: "Hotjar",
        category: "Analytics",
        dataSentTo: "MT",
        trackingMethod: "Client-side",
        canImprove: false,
        isTransparent: true,
        transparentMessage: "Does not support server-side integration",
      },
    ],
    trackingCookies: [
      {
        name: "_fbp",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_fbc",
        provider: "Meta",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "1 days",
      },
      {
        name: "_ga",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ga_{measurement_id}",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        lifetime: "7 days",
      },
      {
        name: "_ttp",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        lifetime: "365 days",
      },
      {
        name: "ttclid",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        lifetime: "1 days",
      },
      {
        name: "ttcsid",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        lifetime: "365 days",
      },
      {
        name: "__kla_id",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        lifetime: "400 days",
      },
      {
        name: "_hjSessionUser_*",
        provider: "Hotjar",
        category: "Analytics",
        dataSentTo: "MT",
        lifetime: "365 days",
      },
    ],
    trackingScripts: [
      {
        name: "fbevents.js",
        provider: "Meta",
        category: "Advertisment",
        transferSize: "47 KB",
        transferSizeColor: "success",
        blockingTime: "58 ms",
        blockingTimeColor: "success",
      },
      {
        name: "G gtag.js",
        provider: "Google",
        category: "Analytics",
        transferSize: "83 KB",
        transferSizeColor: "success",
        blockingTime: "76 ms",
        blockingTimeColor: "success",
      },
      {
        name: "events.js",
        provider: "TikTok",
        category: "Advertisment",
        transferSize: "3 KB",
        transferSizeColor: "success",
        blockingTime: "166 ms",
        blockingTimeColor: "success",
      },
      {
        name: "main.js",
        provider: "TikTok",
        category: "Advertisment",
        transferSize: "103 KB",
        transferSizeColor: "success",
        blockingTime: "60 ms",
        blockingTimeColor: "success",
      },
      {
        name: "identify.js",
        provider: "TikTok",
        category: "Advertisment",
        transferSize: "40 KB",
        transferSizeColor: "success",
        blockingTime: "25 ms",
        blockingTimeColor: "success",
      },
      {
        name: "onsite.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "33 KB",
        transferSizeColor: "success",
        blockingTime: "59 ms",
        blockingTimeColor: "success",
      },
      {
        name: "klaviyo.js",
        provider: "Klaviyo",
        category: "Advertisment",
        transferSize: "3 KB",
        transferSizeColor: "success",
        blockingTime: "221 ms",
        blockingTimeColor: "destructive",
      },
      {
        name: "analytics.js",
        provider: "Google",
        category: "Advertisment",
        transferSize: "21 KB",
        transferSizeColor: "success",
        blockingTime: "27 ms",
        blockingTimeColor: "success",
      },
      {
        name: "hotjar.js",
        provider: "Hotjar",
        category: "Analytics",
        transferSize: "7 KB",
        transferSizeColor: "success",
        blockingTime: "141 ms",
        blockingTimeColor: "success",
      },
    ],
    recommendedActions: [
      {
        id: "ga4-server-side",
        title: "Implement Google Analytics 4 server-side tracking",
        categories: ["Analytics"],
        scoreImprovement: 17,
      },
      {
        id: "remove-ua",
        title: "Remove Universal Analytics script",
        categories: ["Advertisment"],
        scoreImprovement: 10,
      },
      {
        id: "meta-server-side",
        title: "Switch to web & server-side tracking for Meta",
        categories: ["Advertisment"],
        scoreImprovement: 8,
      },
      {
        id: "tiktok-server-side",
        title: "Use server-side tracking for TikTok",
        categories: ["Advertisment"],
        scoreImprovement: 7,
      },
      {
        id: "consent-config",
        title: "Ensure proper consent configuration",
        categories: ["Compliance"],
        scoreImprovement: 7,
      },
      {
        id: "klaviyo-server-side",
        title: "Set up server-side tracking for Klaviyo",
        categories: ["Advertisment"],
        scoreImprovement: 5,
      },
    ],
  },
];
export default auditReports;
