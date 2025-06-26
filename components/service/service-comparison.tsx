// components/services/service-comparison.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Service } from "@/data/services";
import { ArrowRight, CheckCircle, X } from "lucide-react";
import Link from "next/link";

interface ServiceComparisonProps {
  currentService: Service;
  allServices: Service[];
}

export default function ServiceComparison({ currentService, allServices }: ServiceComparisonProps) {
  const comparisonServices = allServices.filter((s) => s.name !== currentService.name).slice(0, 2);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Compare with Other Plans</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-6 md:grid-cols-3">
          {/* Current Service */}
          <div className={`rounded-lg border-2 ${currentService.color} p-6`}>
            <div className="space-y-4">
              <div>
                <Badge className="mb-2">Current Plan</Badge>
                <h3 className="text-xl font-bold">{currentService.name}</h3>
                <p className="text-muted-foreground text-sm">{currentService.subtitle}</p>
              </div>

              <div className="text-2xl font-bold">{currentService.price}</div>

              <Badge variant={currentService.accuracy.includes("95") ? "default" : "outline"}>
                {currentService.accuracy} Accuracy
              </Badge>

              <div className="space-y-2">
                {Object.entries(currentService.features)
                  .slice(0, 5)
                  .map(([feature, value]) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      {value === true ? (
                        <CheckCircle className="text-primary h-4 w-4" />
                      ) : value === false ? (
                        <X className="text-muted-foreground h-4 w-4" />
                      ) : (
                        <CheckCircle className="text-primary h-4 w-4" />
                      )}
                      <span>{feature}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* Comparison Services */}
          {comparisonServices.map((service) => (
            <div key={service.name} className="rounded-lg border p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold">{service.name}</h3>
                  <p className="text-muted-foreground text-sm">{service.subtitle}</p>
                </div>

                <div className="text-2xl font-bold">{service.price}</div>

                <Badge variant={service.accuracy.includes("95") ? "default" : "outline"}>
                  {service.accuracy} Accuracy
                </Badge>

                <div className="space-y-2">
                  {Object.entries(service.features)
                    .slice(0, 5)
                    .map(([feature, value]) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        {value === true ? (
                          <CheckCircle className="text-primary h-4 w-4" />
                        ) : value === false ? (
                          <X className="text-muted-foreground h-4 w-4" />
                        ) : (
                          <CheckCircle className="text-primary h-4 w-4" />
                        )}
                        <span>{feature}</span>
                      </div>
                    ))}
                </div>

                <Button variant="outline" className="w-full" asChild>
                  <Link
                    href={`/services/${service.name
                      .toLowerCase()
                      .replace(/\s+/g, "-")
                      .replace(/[^a-z0-9-]/g, "")}`}
                    className="flex items-center gap-2"
                  >
                    View Plan
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
