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
  CheckCircle,
  Clock,
  DollarSign,
  Shield,
  TrendingUp,
  XCircle,
  Zap,
} from "lucide-react";
import Container from "../ui/container";

import { Button } from "@/components/ui/button";
import { BarChart3, Settings, Target, Users, Wrench } from "lucide-react";

export default function TrackingSolutionsComparison() {
  const solutions = [
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
      id: "new-pixel",
      name: "New Pixel",
      description: "Creating fresh Facebook pixels to bypass restrictions",
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
      icon: Zap,
      pros: ["More stable than most", "Doesn't get shut down", "Professional setup"],
      cons: [
        "Very expensive",
        "Poor lead quality",
        "Significant revenue drop",
        "High ongoing costs",
      ],
      stability: "Stable",
      shutdownTime: "Lasting",
      leadQuality: "Poor",
      revenueImpact: "-20% to -50%",
      cost: "Setup: $499-$999+ | Monthly: $179-$979",
      maintenance: "Medium",
      effectiveness: 5,
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
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "winner":
        return "bg-green-100 text-green-800 border-green-200";
      case "stable":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "unstable":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "broken":
        return "bg-red-100 text-red-800 border-red-200";
      case "ineffective":
        return "bg-gray-100 text-gray-800 border-gray-200";
      case "unreliable":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getEffectivenessColor = (score: number) => {
    if (score >= 8) return "text-green-600 font-bold";
    if (score >= 6) return "text-blue-600 font-semibold";
    if (score >= 4) return "text-yellow-600 font-medium";
    if (score >= 2) return "text-orange-600 font-medium";
    return "text-red-600 font-medium";
  };

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
    <>
      <Container className="space-y-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h2>Tracking Solutions Comparison</h2>
          <h4 className="mx-auto max-w-3xl text-accent-foreground">
            Compare all available solutions for Facebook tracking restrictions and ad account
            issues. See how each option performs in terms of stability, cost, and revenue impact.
          </h4>
        </div>

        {/* Solution Cards Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((solution) => {
            const IconComponent = solution.icon;
            return (
              <Card
                key={solution.id}
                className={`relative ${solution.status === "winner" ? "shadow-lg ring-2 ring-green-500" : ""}`}
              >
                {solution.status === "winner" && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                    <Badge className="bg-green-500 px-4 py-1 text-white">
                      <TrendingUp className="mr-1 h-4 w-4" />
                      RECOMMENDED
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <IconComponent
                      className={`h-8 w-8 ${
                        solution.status === "winner"
                          ? "text-green-600"
                          : solution.status === "stable"
                            ? "text-blue-600"
                            : solution.status === "unstable"
                              ? "text-yellow-600"
                              : solution.status === "broken"
                                ? "text-red-600"
                                : "text-gray-600"
                      }`}
                    />
                    <Badge className={getStatusColor(solution.status)}>
                      {solution.status.toUpperCase()}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{solution.name}</CardTitle>
                  <CardDescription className="text-sm">{solution.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div>
                    <h4 className="mb-2 flex items-center font-semibold text-green-700">
                      <CheckCircle className="mr-1 h-4 w-4" />
                      Pros
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {solution.pros.map((pro, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-green-500">•</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="mb-2 flex items-center font-semibold text-red-700">
                      <XCircle className="mr-1 h-4 w-4" />
                      Cons
                    </h4>
                    <ul className="space-y-1 text-sm">
                      {solution.cons.map((con, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 text-red-500">•</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t pt-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Effectiveness:</span>
                      <span className={`text-lg ${getEffectivenessColor(solution.effectiveness)}`}>
                        {solution.effectiveness}/10
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Comparison Table */}
        <div className="space-y-6 py-12">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Detailed Comparison Matrix</h2>
            <p className="text-gray-600">
              Side-by-side comparison of all tracking solutions across key metrics
            </p>
          </div>

          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-bold">Solution</TableHead>
                  <TableHead className="font-bold">Stability</TableHead>
                  <TableHead className="font-bold">Shutdown Time</TableHead>
                  <TableHead className="font-bold">Lead Quality</TableHead>
                  <TableHead className="font-bold">Revenue Impact</TableHead>
                  <TableHead className="font-bold">Cost</TableHead>
                  <TableHead className="font-bold">Maintenance</TableHead>
                  <TableHead className="text-center font-bold">Effectiveness</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {solutions.map((solution) => (
                  <TableRow
                    key={solution.id}
                    className={
                      solution.status === "winner"
                        ? "border-l-4 border-l-green-500 bg-green-50"
                        : ""
                    }
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center space-x-2">
                        <solution.icon className="h-4 w-4" />
                        <span>{solution.name}</span>
                        {solution.status === "winner" && (
                          <Badge className="bg-green-500 text-xs text-white">BEST</Badge>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge
                        className={getStatusColor(
                          solution.status === "winner" ? "stable" : solution.status,
                        )}
                      >
                        {solution.stability}
                      </Badge>
                    </TableCell>
                    <TableCell>{solution.shutdownTime}</TableCell>
                    <TableCell>{solution.leadQuality}</TableCell>
                    <TableCell
                      className={
                        solution.revenueImpact.includes("+")
                          ? "font-semibold text-green-600"
                          : solution.revenueImpact.includes("-")
                            ? "text-red-600"
                            : ""
                      }
                    >
                      {solution.revenueImpact}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{solution.cost}</span>
                      </div>
                    </TableCell>
                    <TableCell>{solution.maintenance}</TableCell>
                    <TableCell className="text-center">
                      <span
                        className={`text-lg font-bold ${getEffectivenessColor(solution.effectiveness)}`}
                      >
                        {solution.effectiveness}/10
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </Container>
      <Container className="space-y-16 py-12">
        {/* Header */}
        <div className="space-y-4 text-center">
          <Badge variant="secondary" className="px-4 py-2 text-base">
            <Zap className="mr-2 h-5 w-5" />
            THE REAL SOLUTION
          </Badge>
          <h1 className="text-4xl font-bold text-foreground">Our Proven Solutions</h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground/80">
            Unlike the flawed workarounds in the market, our solutions actually work. No new pixels,
            no new accounts, no downtime, no work from your end, and 100% event recovery.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          {ourSolutions.map(({ id, name, description, icon: Icon, features, benefits }) => (
            <Card key={id} className="relative border shadow-sm">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 transform">
                <Badge variant="default" className="px-4 py-1 text-sm">
                  <CheckCircle className="mr-1 h-4 w-4" />
                  PROVEN
                </Badge>
              </div>
              <CardHeader className="pt-6 pb-4">
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-secondary/70 p-3">
                    <Icon className="h-8 w-8 text-primary/90" />
                  </div>
                </div>
                <CardTitle className="text-center text-xl">{name}</CardTitle>
                <CardDescription className="text-center text-muted-foreground/80">
                  {description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-2 flex items-center text-base font-semibold text-primary/90">
                    <Zap className="mr-2 h-4 w-4" />
                    Key Features
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    {features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="mt-0.5 mr-2 h-4 w-4 text-primary/80" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 flex items-center text-base font-semibold text-accent-foreground">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-foreground">
                    {benefits.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <TrendingUp className="mt-0.5 mr-2 h-4 w-4 text-accent" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Guarantees */}
        <div className="rounded-xl bg-muted p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-semibold text-foreground">Our Guarantees</h2>
            <p className="mx-auto max-w-2xl text-base text-muted-foreground/80">
              We don’t just promise results — we guarantee them.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {guarantees.map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="flex items-start space-x-4 rounded-lg bg-background p-4 shadow-sm"
              >
                <div className="rounded-lg bg-secondary/60 p-2">
                  <Icon className="h-6 w-6 text-primary/90" />
                </div>
                <div>
                  <h5 className="font-semibold text-foreground">{title}</h5>
                  <p className="text-sm text-muted-foreground/70">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison */}
        <div className="rounded-xl border bg-background p-10">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
            Why Our Solutions Are Different
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Other Solutions */}
            <div className="space-y-4">
              <h3 className="flex items-center text-lg font-semibold text-destructive">
                <Users className="mr-2 h-5 w-5" />
                Other Solutions
              </h3>
              <ul className="space-y-3 text-sm text-foreground">
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
                  <li key={i} className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-destructive/80" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Our Solutions */}
            <div className="space-y-4">
              <h3 className="flex items-center text-lg font-semibold text-primary">
                <CheckCircle className="mr-2 h-5 w-5" />
                Our Solutions
              </h3>
              <ul className="space-y-3 text-sm text-foreground">
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
                  <li key={i} className="flex items-center">
                    <CheckCircle className="mr-3 h-4 w-4 text-primary/90" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="space-y-6 text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Fix Your Tracking Issues Permanently?
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground/80">
            Stop wasting time with temporary fixes that don’t work. Get a permanent solution that
            actually delivers results.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg">
              <Zap className="mr-2 h-5 w-5" />
              Get Your Solution Now
            </Button>
            <Button size="lg" variant="outline">
              <Clock className="mr-2 h-5 w-5" />
              Schedule Consultation
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
