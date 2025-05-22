import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, Check, HelpCircle, X } from "lucide-react";
import Link from "next/link";

export default function PricingVertical() {
  const plans = [
    {
      name: "Basic Tracking Audit",
      subtitle: "Client-Side Tracking",
      description:
        "Identify gaps in your current tracking setup and get a roadmap for improvements",
      price: "€500",
      popular: false,
      color: "border-muted",
      buttonVariant: "outline",
      cta: "View Sample Audit",
      ctaLink: "/audit",
      accuracy: "60-70%",
    },
    {
      name: "Professional Setup",
      subtitle: "Client-Side Implementation",
      description:
        "Complete implementation of client-side tracking for improved conversion accuracy",
      price: "€1,500",
      popular: false,
      color: "border-muted",
      buttonVariant: "outline",
      cta: "Get Started Today",
      ctaLink: "/contact",
      accuracy: "60-70%",
    },
    {
      name: "Advanced Tracking",
      subtitle: "Server-Side + Client-Side",
      description:
        "Comprehensive tracking with both client and server-side implementation for maximum accuracy",
      price: "€2,500",
      popular: true,
      color: "border-primary",
      buttonVariant: "default",
      cta: "Reclaim Lost Conversions",
      ctaLink: "/contact",
      accuracy: "95%+",
    },
    {
      name: "Enterprise Solution",
      subtitle: "Full Compliance & Tracking",
      description:
        "Advanced tracking with complete digital compliance for enterprise-level needs",
      price: "€5,000",
      popular: false,
      color: "border-muted",
      buttonVariant: "outline",
      cta: "Schedule Consultation",
      ctaLink: "/contact",
      accuracy: "95%+",
    },
  ];

  const featureExplanations = {
    "Google Ads Tracking":
      "Track conversions from Google Ads campaigns with precision, ensuring accurate ROAS measurement and optimization opportunities.",
    "META Ads Tracking":
      "Accurately track Facebook and Instagram ad performance, even with iOS privacy changes and cookie restrictions.",
    "LinkedIn Ads Tracking":
      "Measure B2B campaign performance and lead generation from LinkedIn with accurate attribution.",
    "X Ads Tracking":
      "Track conversions from Twitter/X campaigns with precision for better campaign optimization.",
    "TikTok Tracking":
      "Capture accurate conversion data from TikTok campaigns, even with privacy restrictions.",
    "Google Analytics":
      "Set up proper GA4 implementation to track user behavior, conversions, and campaign performance.",
    "Google Tag Manager":
      "Implement a clean, organized tag management system for all your marketing and analytics tags.",
    "Floodlight Tags":
      "Set up Display & Video 360 conversion tracking for advanced campaign measurement.",
    "Consent Solution":
      "Implement a GDPR-compliant consent management platform that maintains tracking accuracy.",
    "SST Anonymizer":
      "Server-side solution that anonymizes user data while maintaining tracking accuracy, ensuring privacy compliance.",
    "SST Cookie Extender":
      "Extends cookie lifespans server-side to improve cross-device tracking and attribution windows.",
    "SST Bot Detection":
      "Filters out bot traffic server-side for cleaner analytics data and reduced data collection costs.",
    "Multi-language Support":
      "Localized consent banners and privacy policies for global compliance and better user experience.",
    "Looker Studio Dashboard":
      "Custom dashboard showing all your key metrics in one place for easy monitoring and decision making.",
    "Cross-domain Tracking":
      "Track users across multiple domains or subdomains for complete customer journey visibility.",
    "Enhanced Ecommerce":
      "Detailed tracking of product impressions, clicks, add-to-carts, checkouts, and purchases.",
    "UTM Parameter Tracking":
      "Accurate attribution of traffic sources, campaigns, and keywords.",
    CST: "Client-Side Tracking captures user interactions directly in the browser. Only 60-70% accurate due to ad blockers, privacy settings, and browser restrictions.",
    SST: "Server-Side Tracking processes data on secure servers, bypassing ad blockers and preserving user privacy while maintaining 95%+ accuracy. See our case studies at /case-study.",
    Audit:
      "Comprehensive review of your current tracking setup to identify gaps and opportunities for improvement. /",
    Setup:
      "Complete implementation of tracking solutions tailored to your specific business needs.",
  };

  const features = [
    {
      name: "Google Ads Tracking",
      basic: "Audit",
      pro: "CST Setup",
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "META Ads Tracking",
      basic: "Audit",
      pro: "CST Setup",
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "TikTok Tracking",
      basic: "Audit",
      pro: "CST Setup",
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "Google Analytics",
      basic: "Audit",
      pro: "CST Setup",
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "Google Tag Manager",
      basic: "Audit",
      pro: "CST Setup",
      advanced: "CST Setup",
      enterprise: "Full Setup",
    },
    {
      name: "LinkedIn Ads Tracking",
      basic: "Audit",
      pro: false,
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "X Ads Tracking",
      basic: "Audit",
      pro: false,
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "Floodlight Tags",
      basic: false,
      pro: false,
      advanced: "CST & SST",
      enterprise: "Full Setup",
    },
    {
      name: "Consent Solution",
      basic: false,
      pro: "Basic",
      advanced: "Standard",
      enterprise: "Advanced",
    },
    {
      name: "Looker Studio Dashboard",
      basic: false,
      pro: false,
      advanced: true,
      enterprise: true,
    },
    {
      name: "Cross-domain Tracking",
      basic: false,
      pro: false,
      advanced: true,
      enterprise: true,
    },
    {
      name: "Enhanced Ecommerce",
      basic: false,
      pro: false,
      advanced: true,
      enterprise: true,
    },
    {
      name: "UTM Parameter Tracking",
      basic: false,
      pro: false,
      advanced: true,
      enterprise: true,
    },
    {
      name: "SST Anonymizer",
      basic: false,
      pro: false,
      advanced: false,
      enterprise: true,
    },
    {
      name: "SST Cookie Extender",
      basic: false,
      pro: false,
      advanced: false,
      enterprise: true,
    },
    {
      name: "SST Bot Detection",
      basic: false,
      pro: false,
      advanced: false,
      enterprise: true,
    },
    {
      name: "Multi-language Support",
      basic: false,
      pro: false,
      advanced: false,
      enterprise: true,
    },
  ];

  const FeatureWithTooltip = ({ featureName }: { featureName: string }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1 cursor-help">
            {featureName}
            <HelpCircle className="h-4 w-4 text-muted-foreground" />
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4">
          <p>
            {featureExplanations[
              featureName as keyof typeof featureExplanations
            ] ||
              featureExplanations[
                featureName.split(" ")[0] as keyof typeof featureExplanations
              ] ||
              "Improve your tracking accuracy and conversion data."}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const ValueWithTooltip = ({ value }: { value: string }) => {
    const terms = value
      .split(" & ")
      .flatMap((term) => term.split(" "))
      .filter((term) => ["CST", "SST", "Audit", "Setup"].includes(term));

    if (terms.length === 0) return <span>{value}</span>;

    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="flex items-center gap-1 cursor-help">
              {value}
              <HelpCircle className="h-3 w-3 text-muted-foreground" />
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs p-4">
            {terms.map((term) => (
              <p key={term} className="mb-2">
                {term}:{" "}
                {term === "Audit" ? (
                  <>
                    {
                      featureExplanations[
                        term as keyof typeof featureExplanations
                      ]
                    }{" "}
                    <Link
                      href="/audit"
                      className="text-primary hover:underline"
                    >
                      View sample audit reports
                    </Link>
                    .
                  </>
                ) : term === "SST" ? (
                  <>
                    {
                      featureExplanations[
                        term as keyof typeof featureExplanations
                      ]
                    }{" "}
                    <Link
                      href="/case-study"
                      className="text-primary hover:underline"
                    >
                      View our case studies
                    </Link>
                    .
                  </>
                ) : (
                  featureExplanations[term as keyof typeof featureExplanations]
                )}
              </p>
            ))}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  return (
    <div className="space-y-8">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, index) => (
          <Card key={index} className={`flex flex-col h-full ${plan.color}`}>
            <CardHeader>
              <div className="space-y-1">
                <CardTitle>{plan.name}</CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {plan.subtitle}
                </p>
              </div>
              <CardDescription className="pt-4">
                {plan.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <p className="text-sm text-muted-foreground">one-time payment</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium">Tracking Accuracy:</span>
                <Badge
                  variant={plan.accuracy.includes("95") ? "default" : "outline"}
                  className="ml-2"
                >
                  {plan.accuracy}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={plan.buttonVariant as any}
                asChild
              >
                <Link
                  href={plan.ctaLink}
                  className="flex items-center justify-center gap-2"
                >
                  {plan.cta}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Feature Comparison - Responsive Grid */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Feature Comparison</CardTitle>
          <CardDescription>
            Compare features across our different tracking solutions
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Desktop View - Hidden on mobile */}
          <div className="hidden lg:block">
            <div className="grid grid-cols-5 gap-4">
              {/* Header Row */}
              <div className="font-semibold text-left py-3">Feature</div>
              <div className="text-center py-3">
                <div className="font-semibold">Basic Tracking Audit</div>
                <div className="text-sm text-muted-foreground">€500</div>
              </div>
              <div className="text-center py-3">
                <div className="font-semibold">Professional Setup</div>
                <div className="text-sm text-muted-foreground">€1,500</div>
              </div>
              <div className="text-center py-3">
                <div className="font-semibold">Advanced Tracking</div>
                <div className="text-sm text-muted-foreground">€2,500</div>
              </div>
              <div className="text-center py-3">
                <div className="font-semibold">Enterprise Solution</div>
                <div className="text-sm text-muted-foreground">€5,000</div>
              </div>

              {/* Feature Rows */}
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-5 col-span-5 gap-4 py-3 ${index % 2 === 0 ? "bg-muted/50 rounded-lg" : ""}`}
                >
                  <div className="font-medium px-4">
                    <FeatureWithTooltip featureName={feature.name} />
                  </div>
                  <div className="flex justify-center items-center">
                    {typeof feature.basic === "string" ? (
                      <ValueWithTooltip value={feature.basic} />
                    ) : feature.basic === true ? (
                      <Check className="h-4 w-4 text-primary" />
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {feature.pro ? (
                      feature.pro === true ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <ValueWithTooltip value={feature.pro} />
                      )
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {feature.advanced ? (
                      feature.advanced === true ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <ValueWithTooltip value={feature.advanced} />
                      )
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                  <div className="flex justify-center items-center">
                    {feature.enterprise ? (
                      feature.enterprise === true ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <ValueWithTooltip value={feature.enterprise} />
                      )
                    ) : (
                      <X className="h-4 w-4 text-muted-foreground" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {plans.map((plan, planIndex) => (
              <div key={planIndex} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {plan.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{plan.price}</div>
                    <Badge
                      variant={
                        plan.accuracy.includes("95") ? "default" : "outline"
                      }
                    >
                      {plan.accuracy}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {features.map((feature, featureIndex) => {
                    let value;
                    switch (planIndex) {
                      case 0:
                        value = feature.basic;
                        break;
                      case 1:
                        value = feature.pro;
                        break;
                      case 2:
                        value = feature.advanced;
                        break;
                      case 3:
                        value = feature.enterprise;
                        break;
                      default:
                        value = false;
                    }

                    return (
                      <div
                        key={featureIndex}
                        className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0"
                      >
                        <div className="flex-1">
                          <FeatureWithTooltip featureName={feature.name} />
                        </div>
                        <div className="flex items-center">
                          {typeof value === "string" ? (
                            <ValueWithTooltip value={value} />
                          ) : value === true ? (
                            <Check className="h-4 w-4 text-primary" />
                          ) : (
                            <X className="h-4 w-4 text-muted-foreground" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="bg-muted/50 rounded-lg p-6 mt-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <h3 className="text-xl font-bold mb-2">
              Limited to Only 5 Projects Per Month
            </h3>
            <p className="text-muted-foreground">
              To ensure personalized attention and maximize results, we limit
              our service to just 5 businesses each month. Secure your spot now
              to reclaim your lost conversions and boost your ROI.
            </p>
          </div>
          <div>
            <Button size="lg" className="bg-primary" asChild>
              <Link href="/contact">Secure Your Spot Today</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
