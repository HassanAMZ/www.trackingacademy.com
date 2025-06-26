import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Service } from "@/data/services";
import { ArrowRight, Check, CheckCircle, X } from "lucide-react";
import Link from "next/link";

interface FeatureWithTooltipProps {
  featureName: string;
  services: Service[];
}

interface ValueWithTooltipProps {
  value: string;
  services: Service[];
}

interface ServiceCardProps {
  service: Service;
}

interface FeatureComparisonProps {
  services: Service[];
}

interface FeatureComparisonDesktopProps {
  services: Service[];
  featureNames: string[];
}

interface FeatureComparisonMobileProps {
  services: Service[];
  featureNames: string[];
}

const FeatureWithTooltip = ({ featureName, services }: FeatureWithTooltipProps) => {
  // Get explanations from the first service (assuming they're consistent across services)
  const explanations = services[0]?.featureExplanations || {};

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex cursor-help items-center gap-1">
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
};

const ValueWithTooltip = ({ value, services }: ValueWithTooltipProps) => {
  // Get explanations from the first service (assuming they're consistent across services)
  const explanations = services[0]?.featureExplanations || {};

  const terms = value
    .split(" & ")
    .flatMap((term) => term.split(" "))
    .filter((term) => ["CST", "SST", "Audit", "Setup"].includes(term));

  if (terms.length === 0) return <span>{value}</span>;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="flex cursor-help items-center gap-1">
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
                  <Link href="/audit" className="text-primary hover:underline">
                    View sample audit reports
                  </Link>
                  .
                </>
              ) : term === "SST" ? (
                <>
                  {explanations[term]}{" "}
                  <Link href="/case-study" className="text-primary hover:underline">
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

const ServiceCard = ({ service }: ServiceCardProps) => {
  const service_id = service.id;
  const keyFeatures = Object.entries(service.features).filter(
    ([_, value]) => value === true || (typeof value === "string" && value !== "false"),
  );

  return (
    <Card
      className={`flex h-full flex-col ${service.color} ${service.popular ? "ring-primary ring-2" : ""}`}
    >
      {service.popular ? (
        <div className="bg-primary text-primary-foreground rounded-t-lg py-2 text-center text-sm font-medium">
          Most Popular
        </div>
      ) : (
        <div className="rounded-t-lg py-4 text-center text-sm font-medium"></div>
      )}

      <CardHeader>
        <div className="space-y-2">
          <Badge variant="outline" className="w-fit">
            {service.subtitle}
          </Badge>
          <CardTitle className="text-2xl">{service.name}</CardTitle>
          <p className="text-muted-foreground text-sm">{service.description}</p>
        </div>

        <div className="flex items-center gap-4 pt-4">
          <div className="text-3xl font-bold">{service.price}</div>
          <Badge variant={service.accuracy.includes("95") ? "default" : "outline"}>
            {service.accuracy} Accuracy
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-grow flex-col items-center justify-between space-y-6">
        <div className="space-y-3 self-start">
          <h4 className="text-sm font-semibold">Key Features:</h4>
          <div className="space-y-2">
            {keyFeatures.map(([feature, value]) => (
              <div key={feature} className="flex items-start gap-2 text-sm">
                <CheckCircle className="text-primary h-4 w-4 flex-shrink-0" />
                <span>
                  {feature}{" "}
                  {value && typeof value !== "boolean" ? (
                    <span className="text-muted-foreground">({value})</span>
                  ) : (
                    <span className="text-muted-foreground">{value}</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3 border-t pt-4">
          <Button className="w-full" variant={service.buttonVariant as any} asChild>
            <Link
              href={`/payment/?product_id=${service.product_id}&price_id=${service.price_id}`}
              className="flex items-center gap-2"
            >
              {service.cta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>

          <Button variant="ghost" className="w-full" asChild>
            <Link href={`/services/${service_id}`} className="flex items-center gap-2">
              Learn More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const FeatureComparisonDesktop = ({ services, featureNames }: FeatureComparisonDesktopProps) => {
  return (
    <div className="hidden lg:block">
      <div
        style={{
          gridTemplateColumns: `200px repeat(${services.length}, minmax(0, 1fr))`,
        }}
        className={`grid gap-4`}
      >
        {/* Header Row */}
        <div className="py-3 text-left font-semibold">Feature</div>
        {services.map((service, index) => (
          <div key={index} className="py-3 text-center">
            <div className="font-semibold">{service.name}</div>
            <div className="text-muted-foreground text-sm">{service.price}</div>
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
            <div className="px-4 font-medium">
              <FeatureWithTooltip featureName={featureName} services={services} />
            </div>
            {services.map((service, serviceIndex) => (
              <div key={serviceIndex} className="flex items-center justify-center">
                {typeof service.features[featureName] === "string" ? (
                  <ValueWithTooltip
                    value={service.features[featureName] as string}
                    services={services}
                  />
                ) : service.features[featureName] === true ? (
                  <Check className="text-primary h-4 w-4" />
                ) : (
                  <X className="text-muted-foreground h-4 w-4" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureComparisonMobile = ({ services, featureNames }: FeatureComparisonMobileProps) => {
  return (
    <div className="space-y-6 lg:hidden">
      {services.map((service, planIndex) => (
        <div key={planIndex} className="rounded-lg border p-4">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h3 className="font-semibold">{service.name}</h3>
              <p className="text-muted-foreground text-sm">{service.subtitle}</p>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold">{service.price}</div>
              <Badge variant={service.accuracy.includes("95") ? "default" : "outline"}>
                {service.accuracy}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            {featureNames.map((featureName, featureIndex) => (
              <div
                key={featureIndex}
                className="border-border/50 flex items-center justify-between border-b py-2 last:border-b-0"
              >
                <div className="flex-1">
                  <FeatureWithTooltip featureName={featureName} services={services} />
                </div>
                <div className="flex items-center">
                  {typeof service.features[featureName] === "string" ? (
                    <ValueWithTooltip
                      value={service.features[featureName] as string}
                      services={services}
                    />
                  ) : service.features[featureName] === true ? (
                    <Check className="text-primary h-4 w-4" />
                  ) : (
                    <X className="text-muted-foreground h-4 w-4" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

const FeatureComparison = ({ services }: FeatureComparisonProps) => {
  // Extract all unique feature names from services
  const featureNames = Array.from(
    new Set(services.flatMap((service) => Object.keys(service.features))),
  );

  return (
    <Card className="mt-12">
      <CardHeader>
        <CardTitle>Feature Comparison</CardTitle>
        <CardDescription>Compare features across our different tracking solutions</CardDescription>
      </CardHeader>
      <CardContent>
        <FeatureComparisonDesktop services={services} featureNames={featureNames} />
        <FeatureComparisonMobile services={services} featureNames={featureNames} />
      </CardContent>
    </Card>
  );
};

export { FeatureComparison, ServiceCard };
