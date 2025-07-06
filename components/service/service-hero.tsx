import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Service } from "@/data/services";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

interface ServiceHeroProps {
  service: Service;
}

export default function ServiceHero({ service }: ServiceHeroProps) {
  const keyFeatures = Object.entries(service.features)
    .filter(([_, value]) => value === true || (typeof value === "string" && value !== "false"))
    .slice(0, 6);

  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-6">
        <div className="space-y-2">
          <Badge variant="outline" className="w-fit">
            {service.subtitle}
          </Badge>
          <h1 className="text-4xl font-bold lg:text-5xl">{service.name}</h1>
          <p className="text-xl text-muted-foreground">{service.description}</p>
        </div>

        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold">{service.price}</div>
          <Badge
            variant={service.accuracy.includes("95") ? "default" : "outline"}
            className="text-sm"
          >
            {service.accuracy} Accuracy
          </Badge>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Key Features:</h3>
          <div className="grid gap-2 sm:grid-cols-2">
            {keyFeatures.map(([feature, value]) => (
              <div key={feature} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span className="text-sm">
                  {feature}
                  {typeof value === "string" && value !== "true" && (
                    <span className="text-muted-foreground"> ({value})</span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>

        <Button size="lg" className="w-full sm:w-auto" asChild>
          <Link
            href={`/payment/?product_id=${service.product_id}&price_id=${service.price_id}`}
            className="flex items-center gap-2"
          >
            {service.cta}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <Card className={`${service.color} h-fit`}>
        <CardContent className="p-8">
          <div className="space-y-6">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold">{service.price}</div>
              <div className="text-muted-foreground">one-time payment</div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-medium">Tracking Accuracy</span>
                <Badge variant={service.accuracy.includes("95") ? "default" : "outline"}>
                  {service.accuracy}
                </Badge>
              </div>

              <div className="border-t pt-4">
                <h4 className="mb-3 font-semibold">What's Included:</h4>
                <div className="space-y-2">
                  {Object.entries(service.features)
                    .filter(
                      ([_, value]) =>
                        value === true || (typeof value === "string" && value !== "false"),
                    )
                    .slice(0, 8)
                    .map(([feature, value]) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-3 w-3 flex-shrink-0 text-primary" />
                        <span>
                          {feature}
                          {typeof value === "string" && value !== "true" && (
                            <span className="text-muted-foreground"> ({value})</span>
                          )}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            </div>

            <Button className="w-full" variant={service.buttonVariant as any} asChild>
              <Link
                href={`/payment/?product_id=${service.product_id}&price_id=${service.price_id}`}
                className="flex items-center justify-center gap-2"
              >
                {service.cta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
