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
  domain: string;
  overallScore: OverallScore;
  categoryScores: CategoryScore[];
  trackers: Tracker[];
  trackingCookies: TrackingCookie[];
  trackingScripts: TrackingScript[];
  recommendedActions: RecommendedAction[];
}

const auditReports: AuditReport[] = [
  {
    id: "webshop-afrodita",
    domain: "webshop.afroditacosmetics.com/slo/",
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
        improvementLink: "/contact",
      },
      {
        name: "Google Analytics 4",
        provider: "Google",
        category: "Analytics",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/contact",
      },
      {
        name: "TikTok",
        provider: "TikTok",
        category: "Advertisment",
        dataSentTo: "CN",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/contact",
      },
      {
        name: "Klaviyo",
        provider: "Klaviyo",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/contact",
      },
      {
        name: "Universal Analytics",
        provider: "Google",
        category: "Advertisment",
        dataSentTo: "US",
        trackingMethod: "Client-side",
        canImprove: true,
        improvementLink: "/contact",
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
