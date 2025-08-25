"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Clock,
  DollarSign,
  Settings,
  Shield,
  Target,
  TrendingUp,
  Users,
  Wrench,
  XCircle,
  Zap,
} from "lucide-react";
import Container from "../ui/container";

const solutions = [
  {
    id: "legal-action",
    name: "Legal Action",
    description: "Taking legal action against Facebook/Meta",
    status: "unreliable",
    icon: Shield,
    pros: ["Potential for compensation"],
    cons: ["Very expensive", "Low success rate (<10%)", "Takes months", "No guaranteed outcome"],
    stability: "Unreliable",
    shutdownTime: "Weeks to months",
    leadQuality: "N/A",
    revenueImpact: "Low success <10%",
    cost: "$1,500+",
    maintenance: "Very High",
    effectiveness: 1,
  },
  {
    id: "new-pixel",
    name: "New Pixel",
    description: "Creating fresh Facebook pixels to fix restrictions",
    status: "broken",
    icon: XCircle,
    pros: ["Easy to create"],
    cons: ["Shut down immediately", "Rarely works", "Wastes time and effort"],
    stability: "Broken",
    shutdownTime: "Immediate",
    leadQuality: "N/A",
    revenueImpact: "No tracking = loss",
    cost: "Free",
    maintenance: "Low",
    effectiveness: 1,
  },
  {
    id: "new-ad-account",
    name: "New Ad Account",
    description: "Starting fresh with new Facebook ad accounts",
    status: "broken",
    icon: XCircle,
    pros: ["Fresh start"],
    cons: ["Instantly flagged", "Gets banned quickly", "High risk approach"],
    stability: "Broken",
    shutdownTime: "Immediate",
    leadQuality: "N/A",
    revenueImpact: "Ad rejection",
    cost: "High risk",
    maintenance: "Low",
    effectiveness: 1,
  },
  {
    id: "new-domain",
    name: "New Domain",
    description: "Using different domains to avoid tracking restrictions",
    status: "unstable",
    icon: AlertTriangle,
    pros: ["Works initially", "Relatively cheap"],
    cons: ["Gets flagged in 3-5 days", "Requires constant switching", "High maintenance"],
    stability: "Unstable",
    shutdownTime: "3-5 days",
    leadQuality: "N/A",
    revenueImpact: "No tracking",
    cost: "$10-$50/month",
    maintenance: "High",
    effectiveness: 2,
  },
  {
    id: "fb-support",
    name: "Facebook Support",
    description: "Relying on Facebook customer support for fixes",
    status: "ineffective",
    icon: Clock,
    pros: ["Free to contact"],
    cons: ["Very slow response", "Often unhelpful", "No guaranteed fixes", "Time consuming"],
    stability: "Ineffective",
    shutdownTime: "N/A",
    leadQuality: "N/A",
    revenueImpact: "Delays, no fixes",
    cost: "Free (time cost)",
    maintenance: "Very High",
    effectiveness: 2,
  },
  {
    id: "custom-conversions",
    name: "Custom Conversions",
    description: "Facebook's temporary workaround for tracking issues",
    status: "unstable",
    icon: AlertTriangle,
    pros: ["Quick to implement", "Free to use", "Works initially"],
    cons: ["Gets shut down in 2-7 days", "Temporary fix only", "No long-term reliability"],
    stability: "Unstable",
    shutdownTime: "2-7 days",
    leadQuality: "Good (initially)",
    revenueImpact: "Drops when removed",
    cost: "Free",
    maintenance: "Medium",
    effectiveness: 3,
  },
  {
    id: "fb-lead-forms",
    name: "Facebook Lead Forms",
    description: "Using Facebook's native lead generation forms",
    status: "stable",
    icon: CheckCircle,
    pros: ["Stable solution", "No shutdown risk", "Easy to implement"],
    cons: ["Poor lead quality", "20-50% revenue drop", "Limited customization"],
    stability: "Stable",
    shutdownTime: "N/A",
    leadQuality: "Poor",
    revenueImpact: "-20% to -50%",
    cost: "Free",
    maintenance: "Low",
    effectiveness: 4,
  },
  {
    id: "third-party-forms",
    name: "Third-Party Forms",
    description: "External form builders and lead capture tools",
    status: "stable",
    icon: CheckCircle,
    pros: ["More customization", "Stable platform", "Various options"],
    cons: ["Still poor lead quality", "Additional costs", "Integration complexity"],
    stability: "Stable",
    shutdownTime: "N/A",
    leadQuality: "Poor",
    revenueImpact: "-20% to -50%",
    cost: "Varies",
    maintenance: "Medium",
    effectiveness: 4,
  },
  {
    id: "popsixle",
    name: "Popsixle Solution",
    description: "Middleware landing page system with tracking workarounds",
    status: "stable",
    icon: CheckCircle,
    pros: ["More stable than most", "Doesn't get shut down", "Professional setup"],
    cons: ["Very expensive", "Poor lead quality", "Significant revenue drop", "High ongoing costs"],
    stability: "Stable",
    shutdownTime: "Lasting",
    leadQuality: "Poor",
    revenueImpact: "-20% to -50%",
    cost: "Setup: $499-$999+ | Monthly: $179-$979",
    maintenance: "Medium",
    effectiveness: 5,
  },
];

// Other Options Grid Component
function OtherTrackingOptions() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "stable":
        return "secondary";
      case "unstable":
        return "outline";
      case "broken":
      case "ineffective":
      case "unreliable":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getEffectivenessColor = (score: number) => {
    if (score >= 6) return "text-primary font-semibold";
    if (score >= 4) return "text-secondary-foreground font-medium";
    if (score >= 2) return "text-muted-foreground";
    return "text-destructive font-medium";
  };

  return (
    <Container className="space-y-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h2>Other Tracking Solutions</h2>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Here are the common solutions people try for Facebook tracking restrictions. See why they
          don't work and their effectiveness ratings.
        </p>
      </div>

      {/* Solution Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {solutions.map((solution) => {
          const IconComponent = solution.icon;
          return (
            <Card key={solution.id} className="relative h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="rounded-lg bg-muted p-2">
                      <IconComponent className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{solution.name}</CardTitle>
                      <Badge variant={getStatusVariant(solution.status)} className="mt-1">
                        {solution.status.toUpperCase()}
                      </Badge>
                    </div>
                  </div>
                </div>
                <CardDescription className="mt-2">{solution.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 flex items-center text-sm font-semibold text-primary">
                    <CheckCircle className="mr-1 h-4 w-4" />
                    Pros
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {solution.pros.map((pro, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="mt-1 mr-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                        {pro}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="mb-2 flex items-center text-sm font-semibold text-destructive">
                    <XCircle className="mr-1 h-4 w-4" />
                    Cons
                  </h4>
                  <ul className="space-y-1 text-sm">
                    {solution.cons.map((con, index) => (
                      <li key={index} className="flex items-start text-muted-foreground">
                        <span className="mt-1 mr-2 h-1 w-1 flex-shrink-0 rounded-full bg-destructive" />
                        {con}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t pt-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Effectiveness:</span>
                    <span className={getEffectivenessColor(solution.effectiveness)}>
                      {solution.effectiveness}/10
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

// Comparison Table Component
export function TrackingComparisonTable() {
  const getStatusVariant = (status: string) => {
    switch (status) {
      case "stable":
        return "secondary";
      case "unstable":
        return "outline";
      case "broken":
      case "ineffective":
      case "unreliable":
        return "destructive";
      default:
        return "secondary";
    }
  };

  const getEffectivenessColor = (score: number) => {
    if (score >= 6) return "text-primary font-semibold";
    if (score >= 4) return "text-secondary-foreground font-medium";
    if (score >= 2) return "text-muted-foreground";
    return "text-destructive font-medium";
  };

  return (
    <Container className="space-y-6">
      <div className="text-center">
        <h2>Detailed Comparison Matrix</h2>
        <p className="text-muted-foreground">
          Side-by-side comparison of all tracking solutions across key metrics
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[150px] font-bold">Solution</TableHead>
              <TableHead className="font-bold">Stability</TableHead>
              <TableHead className="hidden font-bold md:table-cell">Shutdown Time</TableHead>
              <TableHead className="hidden font-bold lg:table-cell">Lead Quality</TableHead>
              <TableHead className="font-bold">Revenue Impact</TableHead>
              <TableHead className="hidden font-bold sm:table-cell">Cost</TableHead>
              <TableHead className="hidden font-bold lg:table-cell">Maintenance</TableHead>
              <TableHead className="hidden font-bold lg:table-cell">Score</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {solutions.map((solution) => (
              <TableRow key={solution.id}>
                <TableCell className="font-medium">
                  <div className="flex items-center space-x-2">
                    <solution.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="truncate">{solution.name}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(solution.status)} className="text-xs">
                    {solution.stability}
                  </Badge>
                </TableCell>
                <TableCell className="hidden text-sm md:table-cell">
                  {solution.shutdownTime}
                </TableCell>
                <TableCell className="hidden text-sm lg:table-cell">
                  {solution.leadQuality}
                </TableCell>
                <TableCell
                  className={`text-sm ${
                    solution.revenueImpact.includes("+")
                      ? "text-primary"
                      : solution.revenueImpact.includes("-")
                        ? "text-destructive"
                        : ""
                  }`}
                >
                  {solution.revenueImpact}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <div className="flex items-center space-x-1">
                    <DollarSign className="h-3 w-3 text-muted-foreground" />
                    <span className="truncate text-sm">{solution.cost}</span>
                  </div>
                </TableCell>
                <TableCell className="hidden text-sm lg:table-cell">
                  {solution.maintenance}
                </TableCell>
                <TableCell className="hidden text-sm lg:table-cell">
                  <span className={getEffectivenessColor(solution.effectiveness)}>
                    {solution.effectiveness}/10
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Container>
  );
}

// Our Solutions Component
function OurSolutions() {
  const ourSolutions = [
    {
      id: "pixel-recovery",
      name: "Pixel Recovery System",
      description: "Restore your existing pixels without creating new ones",
      icon: Target,
      features: [
        "No new pixel creation required",
        "Works with your existing setup",
        "100% event recovery to Events Manager",
        "Zero downtime during implementation",
        "No work required from your end",
      ],
      benefits: [
        "Keep your existing pixel history",
        "Maintain all your custom audiences",
        "Preserve conversion data",
        "No learning phase reset",
      ],
    },
    {
      id: "account-restoration",
      name: "Ad Account Attribution",
      description: "Attribute All Conversions without creating new Ads",
      icon: Shield,
      features: [
        "No new ad accounts needed",
        "Restore tracking on existing accounts",
        "Maintain account history and data",
        "100% success rate on eligible accounts",
        "Complete hands-off process",
      ],
      benefits: [
        "Keep your account reputation",
        "Preserve spending history",
        "Maintain audience insights",
        "No account warming needed",
      ],
    },
    {
      id: "tracking-optimization",
      name: "Advanced Tracking Optimization",
      description: "Bulletproof tracking that never gets shut down",
      icon: BarChart3,
      features: [
        "100% stable tracking solution",
        "Never gets flagged or shut down",
        "Real-time event synchronization",
        "Complete attribution recovery",
        "Zero maintenance required",
      ],
      benefits: [
        "Perfect tracking accuracy",
        "No more lost conversions",
        "Reliable attribution data",
        "Consistent performance metrics",
      ],
    },
  ];

  const guarantees = [
    {
      icon: CheckCircle,
      title: "100% Success Rate",
      description: "Every implementation works perfectly",
    },
    {
      icon: Clock,
      title: "Zero Downtime",
      description: "Your campaigns never stop running",
    },
    {
      icon: Settings,
      title: "No Work From You",
      description: "Completely hands-off implementation",
    },
    {
      icon: Wrench,
      title: "Zero Maintenance",
      description: "Set it and forget it solution",
    },
    {
      icon: Shield,
      title: "Never Gets Shut Down",
      description: "Permanent, stable solution",
    },
    {
      icon: TrendingUp,
      title: "Full Event Recovery",
      description: "All events restored to Events Manager",
    },
  ];

  return (
    <Container className="space-y-16">
      {/* Header */}
      <div className="space-y-4 text-center">
        <Badge variant="secondary" className="px-4 py-2">
          <Zap className="mr-2 h-5 w-5" />
          THE REAL SOLUTION
        </Badge>
        <h1>Our Proven Solutions</h1>
        <p className="mx-auto max-w-3xl text-muted-foreground">
          Unlike the flawed workarounds in the market, our solutions actually work. No new pixels,
          no new accounts, no downtime, no work from your end, and 100% event recovery.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="grid gap-10 lg:grid-cols-3">
        {ourSolutions.map(({ id, name, description, icon: Icon, features, benefits }) => (
          <Card key={id} className="relative border shadow-sm">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
              <Badge variant="default" className="px-3 py-1">
                <CheckCircle className="mr-1 h-4 w-4" />
                PROVEN
              </Badge>
            </div>
            <CardHeader className="pt-8 pb-4">
              <div className="mb-4 flex items-center justify-center">
                <div className="rounded-full bg-secondary p-3">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <CardTitle className="text-center">{name}</CardTitle>
              <CardDescription className="text-center text-muted-foreground">
                {description}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="mb-3 flex items-center font-semibold text-primary">
                  <Zap className="mr-2 h-4 w-4" />
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                      <span className="text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 flex items-center font-semibold text-accent-foreground">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Benefits
                </h3>
                <ul className="space-y-2">
                  {benefits.map((b, i) => (
                    <li key={i} className="flex items-start text-muted-foreground">
                      <TrendingUp className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-accent" />
                      <span className="text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Guarantees */}
      <div className="rounded-xl bg-muted p-8 lg:p-10">
        <div className="mb-8 text-center">
          <h2>Our Guarantees</h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            We don't just promise results — we guarantee them.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {guarantees.map(({ icon: Icon, title, description }, i) => (
            <div
              key={i}
              className="flex items-start space-x-4 rounded-lg bg-background p-4 shadow-sm"
            >
              <div className="rounded-lg bg-secondary p-2">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold">{title}</h5>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison */}
      <div className="rounded-xl border bg-background p-8 lg:p-10">
        <h2 className="mb-10 text-center">Why Our Solutions Are Different</h2>
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Other Solutions */}
          <div className="space-y-4">
            <h3 className="flex items-center font-semibold text-destructive">
              <Users className="mr-2 h-5 w-5" />
              Other Solutions
            </h3>
            <ul className="space-y-3">
              {[
                "Require new pixels (lose all data)",
                "Need new ad accounts (start from zero)",
                "Get shut down in days/weeks",
                "Cause significant downtime",
                "Require constant maintenance",
                "Poor lead quality (-20% to -50%)",
                "Unstable and unreliable",
                "High ongoing costs",
              ].map((text, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-destructive" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Our Solutions */}
          <div className="space-y-4">
            <h3 className="flex items-center font-semibold text-primary">
              <CheckCircle className="mr-2 h-5 w-5" />
              Our Solutions
            </h3>
            <ul className="space-y-3">
              {[
                "Use existing pixels (keep all data)",
                "Restore existing accounts (maintain history)",
                "Never get shut down (permanent fix)",
                "Zero downtime (seamless transition)",
                "No maintenance required (set & forget)",
                "Perfect lead quality (100% recovery)",
                "Completely stable and reliable",
                "One-time implementation cost",
              ].map((text, i) => (
                <li key={i} className="flex items-center text-muted-foreground">
                  <CheckCircle className="mr-3 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-sm">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}
