import TestimonialsCarousel from "@/components/testimonial/testimonial-carousal";

const RestrictedDomainTracking = {
  hero: {
    badgeText: "New Offer: $300 Off – Limited to First 10 Customers",
    headingText: "$300 Off – 3-Day “See Your Sales Again” Tracking Setup ",
    subheadingText:
      "Restore lost conversion tracking from restricted domains and optimize your Meta Ads with our expert 3-day setup—guaranteed accurate or your money back.",
    ctaButtonText: "Claim Your $300 Off – Limited to 10 Spots",
    ctaButtonLink: "/contact",
    supportingButtonText: "Watch Client Results",
    supportingButtonLink: "#case-studies",
    youtubeEmbedId: "9MGpL_AmEYM",
    supportingComponent: <TestimonialsCarousel className="mx-auto max-w-2xl" />,
  },

  problemAwareness: {
    headingText: "Your Domain Is Blocked—Now Your Ads Are Flying Blind",
    paragraphText:
      "Without AddToCart, Checkout, and Purchase events, your Meta ads can't optimize, leading to wasted spend and stalled growth. You're not alone—and we can help.",
    points: [
      "No visibility into purchases or checkout behavior",
      "Unreliable ROAS and ad decisions",
      "Scaling becomes impossible without reliable data",
    ],
    secondaryHeadingText: "Fix Your Meta Tracking in Just 3 Days",
    secondaryParagraphText:
      "We help restricted domains regain tracking, so Meta can optimize ads with accurate funnel data.",
    secondaryListItems: [
      "Restore AddToCart, Checkout, and Purchase events",
      "Compliant, future-proof Meta tracking",
      "Know which ads are actually working",
    ],
  },

  offerDetails: {
    headerTitle: "$300 Off – 3-Day “See Your Sales Again” Tracking Setup",
    headerDescription:
      "Restore your Meta conversion tracking in just 3 days—even if your domain is restricted.",
    offerItems: [
      {
        title: "3-Day “See Your Sales Again” Tracking Setup",
        description:
          "We'll implement a complete tracking system to restore your AddToCart, Checkout, and Purchase data—even if your domain is blocked.",
        icon: "Zap",
        benefits: [
          "Full funnel visibility within 3 days",
          "Server-side & GA4 tracking",
          "Compliant with Meta policies",
          "No coding required from your team",
        ],
        image: "/images/social-sharing.png",
      },
    ],
  },

  scarcityUrgency: {
    title: "Only 10 Spots Available – Valid Until End of This Month",
    description:
      "Due to high demand and manual implementation, we are only accepting 10 new clients this month for this special $300 discount.",
    spotsLeft: 10,
    daysRemaining: 21, // Update based on today's date
    buttonText: "Claim $300 Off Now",
    buttonLink: "/contact",
  },

  socialProof: {
    sectionTitle: "Trusted by Health & Wellness Brands",
    sectionDescription:
      "We’ve helped dozens of wellness businesses restore Meta tracking and scale their ads confidently.",
    testimonials: [
      {
        quote:
          "We couldn’t track any purchases before. Within 3 days, everything was back—and our ROAS doubled.",
        author: "Lindsey T.",
        role: "Wellness Brand Owner",
        image: "/images/social-sharing.png",
      },
      {
        quote:
          "Game-changer. Their tracking setup let Meta finally optimize our campaigns again.",
        author: "Alex F.",
        role: "Health Coach & Store Owner",
        image: "/images/social-sharing.png",
      },
    ],
  },

  bonuses: {
    sectionTitle: "Your Bonuses (Worth $2,200+) When You Join Today",
    sectionDescription: "Included for free with your 3-day tracking setup:",
    bonuses: [
      {
        title: "Looker Studio Ecommerce Report",
        description:
          "Visualize your funnel data in a clean, executive-ready dashboard.",
        value: "$500",
        icon: "BarChart2",
        image: "/images/social-sharing.png",
      },
      {
        title: "95% Accurate GA4 Tracking Setup",
        description: "Ensure your Google Analytics setup is rock-solid.",
        value: "$500",
        icon: "Target",
        image: "/images/social-sharing.png",
      },
      {
        title: "Ecommerce Conversion Checklist",
        description:
          "A proven checklist to audit your store and maximize conversions.",
        value: "$500",
        icon: "FileText",
        image: "/images/social-sharing.png",
      },
      {
        title: "Advanced Tools & Calculators",
        description:
          "Exclusive tools to help analyze ROAS, scaling potential, and break-even points.",
        value: "$700",
        icon: "TrendingUp",
        image: "/images/social-sharing.png",
      },
    ],
    totalBonusValue: "$2,200",
    actionButtonText: "Get $300 Off + $2,200 in Bonuses",
    actionButtonLink: "/contact",
  },

  objectionHandling: {
    sectionTitle: "95% Accuracy or 100% Money-Back Guarantee",
    guarantees: [
      {
        title: "95%+ Tracking Accuracy Guaranteed",
        description:
          "If our setup doesn't give you 95%+ conversion tracking accuracy, you’ll get 100% of your money back.",
        icon: "Shield",
      },
    ],
  },

  detailedCTA: {
    heading: "Only 10 Spots – Restore Your Sales Funnel in 3 Days",
    subheading:
      "Get your conversion tracking back—accurate, fast, and guaranteed.",
    listItems: [
      "3-Day turnaround",
      "$300 OFF limited-time pricing",
      "95%+ tracking accuracy guarantee",
      "$2,200 in free bonuses included",
    ],
    buttonText: "Claim Your Spot Now",
    buttonLink: "/contact",
    footerText: "Offer expires at the end of the month. Don’t wait.",
  },
};

export default RestrictedDomainTracking;
