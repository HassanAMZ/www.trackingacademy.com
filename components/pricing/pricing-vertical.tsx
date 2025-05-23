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
import { Service } from "@/data/services";
import { ArrowRight, Check, HelpCircle, X } from "lucide-react";
import Link from "next/link";

interface PricingVerticalProps {
  services: Service[];
}

export default function PricingVertical({ services }: PricingVerticalProps) {
  const FeatureWithTooltip = ({
    featureName,
    explanations,
  }: {
    featureName: string;
    explanations: { [key: string]: string };
  }) => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex items-center gap-1 cursor-help">
            {featureName}
            {/* <HelpCircle className="h-4 w-4 text-muted-foreground" /> */}
          </div>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4">
          <p>
            {explanations[featureName] ||
              explanations[featureName.split(" ")[0]] ||
              "Improve your tracking accuracy and conversion data."}
          </p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );

  const ValueWithTooltip = ({
    value,
    explanations,
  }: {
    value: string;
    explanations: { [key: string]: string };
  }) => {
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
              {/* <HelpCircle className="h-3 w-3 text-muted-foreground" /> */}
            </div>
          </TooltipTrigger>
          <TooltipContent className="max-w-xs p-4">
            {terms.map((term) => (
              <p key={term} className="mb-2">
                {term}:{" "}
                {term === "Audit" ? (
                  <>
                    {explanations[term]}{" "}
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
                    {explanations[term]}{" "}
                    <Link
                      href="/case-study"
                      className="text-primary hover:underline"
                    >
                      View our case studies
                    </Link>
                    .
                  </>
                ) : (
                  explanations[term]
                )}
              </p>
            ))}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  };

  // Extract all unique feature names from services
  const featureNames = Array.from(
    new Set(services.flatMap((service) => Object.keys(service.features))),
  );

  return (
    <div className="space-y-8">
      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <Card key={index} className={`flex flex-col h-full ${service.color}`}>
            <CardHeader>
              <div className="space-y-1">
                <CardTitle>{service.name}</CardTitle>
                <p className="text-sm font-medium text-muted-foreground">
                  {service.subtitle}
                </p>
              </div>
              <CardDescription className="pt-4">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-3xl font-bold mb-2">{service.price}</div>
              <p className="text-sm text-muted-foreground">one-time payment</p>
              <div className="mt-4 flex items-center">
                <span className="text-sm font-medium">Tracking Accuracy:</span>
                <Badge
                  variant={
                    service.accuracy.includes("95") ? "default" : "outline"
                  }
                  className="ml-2"
                >
                  {service.accuracy}
                </Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                className="w-full"
                variant={service.buttonVariant as any}
                asChild
              >
                <Link
                  href={service.ctaLink}
                  className="flex items-center justify-center gap-2"
                >
                  {service.cta}
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
            <div
              style={{
                gridTemplateColumns: `200px repeat(${services.length}, minmax(0, 1fr))`,
              }}
              className={`grid gap-4`}
            >
              {/* Header Row */}
              <div className="font-semibold text-left py-3">Feature</div>
              {services.map((service, index) => (
                <div key={index} className="text-center py-3">
                  <div className="font-semibold">{service.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {service.price}
                  </div>
                </div>
              ))}

              {/* Feature Rows */}
              {featureNames.map((featureName, index) => (
                <div
                  key={index}
                  className={`grid gap-4 py-3 ${index % 2 === 0 ? "bg-muted/50 rounded-lg" : ""}`}
                  style={{
                    gridTemplateColumns: `200px repeat(${services.length}, minmax(0, 1fr))`,
                    gridColumn: `span ${services.length + 1} / span ${services.length + 1}`, // +1 for the label column
                  }}
                >
                  <div className="font-medium px-4">
                    <FeatureWithTooltip
                      featureName={featureName}
                      explanations={services[0].featureExplanations}
                    />
                  </div>
                  {services.map((service, serviceIndex) => (
                    <div
                      key={serviceIndex}
                      className="flex justify-center items-center"
                    >
                      {typeof service.features[featureName] === "string" ? (
                        <ValueWithTooltip
                          value={service.features[featureName] as string}
                          explanations={service.featureExplanations}
                        />
                      ) : service.features[featureName] === true ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <X className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile/Tablet View - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {services.map((service, planIndex) => (
              <div key={planIndex} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{service.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {service.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-lg">{service.price}</div>
                    <Badge
                      variant={
                        service.accuracy.includes("95") ? "default" : "outline"
                      }
                    >
                      {service.accuracy}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-3">
                  {featureNames.map((featureName, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0"
                    >
                      <div className="flex-1">
                        <FeatureWithTooltip
                          featureName={featureName}
                          explanations={service.featureExplanations}
                        />
                      </div>
                      <div className="flex items-center">
                        {typeof service.features[featureName] === "string" ? (
                          <ValueWithTooltip
                            value={service.features[featureName] as string}
                            explanations={service.featureExplanations}
                          />
                        ) : service.features[featureName] === true ? (
                          <Check className="h-4 w-4 text-primary" />
                        ) : (
                          <X className="h-4 w-4 text-muted-foreground" />
                        )}
                      </div>
                    </div>
                  ))}
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
