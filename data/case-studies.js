const caseStudies = [
  {
    // First website - The Artist Tree
    id: "theartisttree",
    name: "The Artist Tree",
    url: "www.theartisttree.com",
    plan: "Pro+",
    subscription: {
      status: "Running",
      requestsSent: 820903,
      requestsLimit: 2000000,
      usagePercentage: 41,
      renewsIn: 10,
      nextPayment: "May 18, 2025",
    },
    trackingPrevention: {
      affected: 368000,
      affectedPercentage: 45.83,
    },
    analytics: {
      period: "30 days",
      totalRequests: 789306,
      recoveredFromAdBlockers: 0,
      recoveredFromAdBlockersPercentage: 0,
      recoveredFromTrackingPrevention: 360822,
      recoveredFromTrackingPreventionPercentage: 45.71,
    },
    dataClientRequests: [
      {
        type: "AddToCart",
        total: 61427,
        adBlockers: 0,
        trackingPrevention: 43.18,
      },
      { type: "Other", total: 78828, adBlockers: 0, trackingPrevention: 45.63 },
      {
        type: "PageView",
        total: 533903,
        adBlockers: 0,
        trackingPrevention: 46.38,
      },
      {
        type: "Purchase",
        total: 12112,
        adBlockers: 0,
        trackingPrevention: 41.5,
      },
      {
        type: "RemoveFromCart",
        total: 23043,
        adBlockers: 0,
        trackingPrevention: 42.17,
      },
      {
        type: "ViewItem",
        total: 78825,
        adBlockers: 0,
        trackingPrevention: 45.64,
      },
    ],
    otherRequests: [
      { type: "Debug", total: 41, adBlockers: 0, trackingPrevention: 0 },
      { type: "Other", total: 1127, adBlockers: 0, trackingPrevention: 0.71 },
    ],
    botRequests: [
      { client: "Data", total: 788138, bot: 1114, botPercentage: 0.14 },
      { client: "Other", total: 1168, bot: 195, botPercentage: 16.7 },
    ],
    browserRequests: [
      {
        browser: "Safari",
        requests: 360822,
        recoveredFromAdBlockersPercentage: 0,
      },
      {
        browser: "Chrome",
        requests: 205862,
        recoveredFromAdBlockersPercentage: 0,
      },
      {
        browser: "Other",
        requests: 222622,
        recoveredFromAdBlockersPercentage: 0,
      },
    ],
  },
  {
    // Second website - Wild Orchard Hemp
    id: "wildorchardhemp",
    name: "Wild Orchard Hemp",
    url: "wildorchardhemp.com",
    plan: "Pro",
    subscription: {
      status: "Running",
      requestsSent: 174640,
      requestsLimit: 500000,
      usagePercentage: 34,
      renewsIn: 9,
      nextPayment: "May 17, 2025",
    },
    trackingPrevention: {
      affected: 66660,
      affectedPercentage: 38.17,
    },
    analytics: {
      period: "30 days",
      totalRequests: 173410,
      recoveredFromAdBlockers: 6135,
      recoveredFromAdBlockersPercentage: 3.54,
      recoveredFromTrackingPrevention: 59955,
      recoveredFromTrackingPreventionPercentage: 34.57,
    },
    dataClientRequests: [
      {
        type: "AddToCart",
        total: 3510,
        adBlockers: 4.62,
        trackingPrevention: 28.06,
      },
      {
        type: "BeginCheckout",
        total: 2340,
        adBlockers: 4.19,
        trackingPrevention: 29.91,
      },
      {
        type: "Login",
        total: 318,
        adBlockers: 6.92,
        trackingPrevention: 48.74,
      },
      { type: "Other", total: 5, adBlockers: 0, trackingPrevention: 0 },
      {
        type: "PageView",
        total: 57606,
        adBlockers: 5.16,
        trackingPrevention: 26.38,
      },
      {
        type: "Purchase",
        total: 630,
        adBlockers: 4.29,
        trackingPrevention: 29.05,
      },
      {
        type: "RemoveFromCart",
        total: 3,
        adBlockers: 0,
        trackingPrevention: 33.33,
      },
      {
        type: "SignUp",
        total: 301,
        adBlockers: 3.99,
        trackingPrevention: 22.92,
      },
      {
        type: "ViewCart",
        total: 33,
        adBlockers: 3.03,
        trackingPrevention: 48.48,
      },
      {
        type: "ViewItem",
        total: 27819,
        adBlockers: 3.4,
        trackingPrevention: 21.19,
      },
      {
        type: "ViewItemList",
        total: 16770,
        adBlockers: 2.5,
        trackingPrevention: 24.23,
      },
    ],
    otherRequests: [
      {
        type: "CookieKeeper",
        total: 26802,
        adBlockers: 2.77,
        trackingPrevention: 100,
      },
      {
        type: "CustomScriptLoad",
        total: 19187,
        adBlockers: 0,
        trackingPrevention: 14.35,
      },
      { type: "Debug", total: 10, adBlockers: 0, trackingPrevention: 0 },
      {
        type: "Other",
        total: 18076,
        adBlockers: 4.04,
        trackingPrevention: 17.36,
      },
    ],
    botRequests: [
      { client: "Data", total: 109335, bot: 1998, botPercentage: 1.83 },
      { client: "Other", total: 64075, bot: 157, botPercentage: 0.25 },
    ],
    browserRequests: [
      {
        browser: "Safari",
        requests: 59955,
        recoveredFromAdBlockersPercentage: 4.85,
      },
      {
        browser: "Chrome",
        requests: 61270,
        recoveredFromAdBlockersPercentage: 3.47,
      },
      {
        browser: "Other",
        requests: 52185,
        recoveredFromAdBlockersPercentage: 2.11,
      },
    ],
  },
  {
    // Third website - Smoke Kind
    id: "smokekind",
    name: "Smoke Kind",
    url: "smokekind.com",
    plan: "Pro+",
    subscription: {
      status: "Running",
      requestsSent: 1525661,
      requestsLimit: 2000000,
      usagePercentage: 76,
      renewsIn: 7,
      nextPayment: "May 15, 2025",
    },
    trackingPrevention: {
      affected: 993000,
      affectedPercentage: 65.1,
    },
    analytics: {
      period: "30 days",
      totalRequests: 1503998,
      recoveredFromAdBlockers: 25561,
      recoveredFromAdBlockersPercentage: 1.7,
      recoveredFromTrackingPrevention: 953391,
      recoveredFromTrackingPreventionPercentage: 63.39,
    },
    dataClientRequests: [
      {
        type: "AddPaymentInfo",
        total: 2825,
        adBlockers: 2.69,
        trackingPrevention: 58.23,
      },
      {
        type: "AddShippingInfo",
        total: 5317,
        adBlockers: 2.61,
        trackingPrevention: 60.02,
      },
      {
        type: "AddToCart",
        total: 20433,
        adBlockers: 2.72,
        trackingPrevention: 52.35,
      },
      {
        type: "BeginCheckout",
        total: 15113,
        adBlockers: 2.36,
        trackingPrevention: 58.87,
      },
      {
        type: "Other",
        total: 49350,
        adBlockers: 2.15,
        trackingPrevention: 49.24,
      },
      {
        type: "PageView",
        total: 393799,
        adBlockers: 3.28,
        trackingPrevention: 51.69,
      },
      {
        type: "Purchase",
        total: 3160,
        adBlockers: 3.39,
        trackingPrevention: 50.7,
      },
      {
        type: "RemoveFromCart",
        total: 4301,
        adBlockers: 2.39,
        trackingPrevention: 53.59,
      },
      {
        type: "ViewCart",
        total: 1844,
        adBlockers: 3.2,
        trackingPrevention: 47.83,
      },
      {
        type: "ViewItem",
        total: 86829,
        adBlockers: 1.74,
        trackingPrevention: 53.09,
      },
    ],
    otherRequests: [
      {
        type: "CookieKeeper",
        total: 643150,
        adBlockers: 1.07,
        trackingPrevention: 100,
      },
      {
        type: "CustomScriptLoad",
        total: 68454,
        adBlockers: 2.59,
        trackingPrevention: 10.25,
      },
      { type: "Other", total: 209423, adBlockers: 0, trackingPrevention: 0.03 },
    ],
    botRequests: [
      { client: "Data", total: 582971, bot: 2293, botPercentage: 0.39 },
      { client: "Other", total: 921027, bot: 270, botPercentage: 0.03 },
    ],
    browserRequests: [
      {
        browser: "Safari",
        requests: 953391,
        recoveredFromAdBlockersPercentage: 1.39,
      },
      {
        browser: "Chrome",
        requests: 250945,
        recoveredFromAdBlockersPercentage: 3.01,
      },
      {
        browser: "Other",
        requests: 299662,
        recoveredFromAdBlockersPercentage: 1.58,
      },
    ],
  },
  {
    // Fourth website - Zaza Delivery
    id: "zazadelivery",
    name: "Zaza Delivery",
    url: "shopzazadelivery.com",
    plan: "Pro+",
    subscription: {
      status: "Running",
      requestsSent: 1732368,
      requestsLimit: 2000000,
      usagePercentage: 86,
      renewsIn: 7,
      nextPayment: "May 15, 2025",
    },
    trackingPrevention: {
      affected: 1100000,
      affectedPercentage: 61.1,
    },
    analytics: {
      period: "30 days",
      totalRequests: 1710033,
      recoveredFromAdBlockers: 32434,
      recoveredFromAdBlockersPercentage: 1.9,
      recoveredFromTrackingPrevention: 1012861,
      recoveredFromTrackingPreventionPercentage: 59.23,
    },
    ga4Requests: [
      {
        type: "ScriptLoad",
        total: 49058,
        adBlockers: 3.63,
        trackingPrevention: 56.24,
      },
    ],
    dataClientRequests: [
      {
        type: "AddPaymentInfo",
        total: 4130,
        adBlockers: 2.74,
        trackingPrevention: 53.32,
      },
      {
        type: "AddShippingInfo",
        total: 6943,
        adBlockers: 2.49,
        trackingPrevention: 53.69,
      },
      {
        type: "AddToCart",
        total: 18785,
        adBlockers: 2.78,
        trackingPrevention: 49.49,
      },
      {
        type: "BeginCheckout",
        total: 20963,
        adBlockers: 2.23,
        trackingPrevention: 55.55,
      },
      {
        type: "Other",
        total: 64001,
        adBlockers: 2.33,
        trackingPrevention: 49.12,
      },
      {
        type: "PageView",
        total: 456819,
        adBlockers: 3.77,
        trackingPrevention: 49.7,
      },
      {
        type: "Purchase",
        total: 4558,
        adBlockers: 3.29,
        trackingPrevention: 48.92,
      },
      {
        type: "RemoveFromCart",
        total: 8428,
        adBlockers: 2.22,
        trackingPrevention: 50.89,
      },
      {
        type: "ViewCart",
        total: 13527,
        adBlockers: 2.3,
        trackingPrevention: 49.25,
      },
      {
        type: "ViewItem",
        total: 69233,
        adBlockers: 2.18,
        trackingPrevention: 51.29,
      },
    ],
    otherRequests: [
      {
        type: "CookieKeeper",
        total: 647871,
        adBlockers: 1.1,
        trackingPrevention: 100,
      },
      {
        type: "CustomScriptLoad",
        total: 77178,
        adBlockers: 1.31,
        trackingPrevention: 2.07,
      },
      { type: "Debug", total: 104, adBlockers: 0, trackingPrevention: 0 },
      {
        type: "Other",
        total: 268435,
        adBlockers: 0.14,
        trackingPrevention: 0.65,
      },
    ],
    botRequests: [
      { client: "GA4", total: 9058, bot: 0, botPercentage: 0 },
      { client: "Data", total: 667387, bot: 2191, botPercentage: 0.33 },
      { client: "Other", total: 993588, bot: 428, botPercentage: 0.04 },
    ],
    consentRequests: [
      { type: "ScriptLoad", total: 49058, optIn: 100, optOut: 0, notSet: 0 },
    ],
    browserRequests: [
      {
        browser: "Safari",
        requests: 1012861,
        recoveredFromAdBlockersPercentage: 1.55,
      },
      {
        browser: "Chrome",
        requests: 324481,
        recoveredFromAdBlockersPercentage: 3.38,
      },
      {
        browser: "Other",
        requests: 372691,
        recoveredFromAdBlockersPercentage: 1.55,
      },
    ],
  },
];

export default caseStudies;
