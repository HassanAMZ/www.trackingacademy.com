// components/services/service-features.tsx
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Service } from "@/data/services";
import { CheckCircle, HelpCircle, X } from "lucide-react";

interface ServiceFeaturesProps {
  service: Service;
}

export default function ServiceFeatures({ service }: ServiceFeaturesProps) {
  const FeatureItem = ({
    name,
    value,
    explanation,
  }: {
    name: string;
    value: string | boolean;
    explanation: string;
  }) => (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div className="flex items-center gap-3">
        {value === true ? (
          <CheckCircle className="text-primary h-5 w-5" />
        ) : value === false ? (
          <X className="text-muted-foreground h-5 w-5" />
        ) : (
          <Badge variant="outline" className="text-xs">
            {value}
          </Badge>
        )}
        <div className="flex items-center gap-2">
          <span className="font-medium">{name}</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="text-muted-foreground h-4 w-4" />
              </TooltipTrigger>
              <TooltipContent className="max-w-xs p-4">
                <p>{explanation}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Complete Feature Breakdown</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2">
          {Object.entries(service.features).map(([feature, value]) => (
            <FeatureItem
              key={feature}
              name={feature}
              value={value}
              explanation={
                service.featureExplanations[feature] ||
                service.featureExplanations[feature.split(" ")[0]] ||
                "Advanced tracking feature for better conversion measurement."
              }
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
