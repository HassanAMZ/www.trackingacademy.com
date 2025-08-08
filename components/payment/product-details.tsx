import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Product, PromoCode } from "@/types/index";
import { formatCurrency } from "@/utils/payment";
import { CheckCircle, Info } from "lucide-react";
import { Service, services } from "@/data/services";
interface ProductDetailsProps {
  product: Product;
  appliedPromo: PromoCode | null;
}

export const ProductDetails = ({ product, appliedPromo }: ProductDetailsProps) => {
  const originalAmount = formatCurrency(product.unitAmount, product.currency);
  const discountAmount = appliedPromo
    ? formatCurrency(appliedPromo.amountOff, product.currency)
    : null;
  const finalAmount = appliedPromo
    ? formatCurrency(product.unitAmount - appliedPromo.amountOff, product.currency)
    : originalAmount;

  const matchingService = services.find(
    (service: Service) => service.product_id === product.id || service.price_id === product.priceId,
  );

  // Determine features source - prefer service data, fallback to Stripe metadata
  const featuresSource =
    matchingService?.features && Object.keys(matchingService.features).length > 0
      ? matchingService.features
      : product.metadata;

  // Get feature explanations if available
  const featureExplanations = matchingService?.featureExplanations || {};

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <h2 className="font-semibold">{product.name}</h2>
          {product.description && <p className="text-muted-foreground">{product.description}</p>}
        </div>
        <span className="font-semibold">{originalAmount}</span>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Features */}
        {product.features && product.features.length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Includes:</h3>
            <ul className="space-y-1.5">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-2">
          <h3 className="font-medium">Features:</h3>
          <ul className="space-y-1.5">
            {Object.entries(featuresSource ?? {}).map(([key, value]) => {
              // Format the value based on type
              const displayValue =
                typeof value === "boolean" ? (value ? "Yes" : "No") : String(value);

              // Get explanation if available
              const explanation = featureExplanations[key];

              return (
                <li key={key} className="flex items-start">
                  <Info className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-primary" />
                  <div className="text-muted-foreground">
                    <span className="font-medium">{key}:</span> {displayValue}
                    {explanation && (
                      <div className="mt-1 text-sm text-muted-foreground/80">{explanation}</div>
                    )}
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Debug info - remove in production */}
          {process.env.NODE_ENV === "development" && (
            <div className="mt-2 text-xs text-muted-foreground/60">
              Source: {matchingService ? "Services data" : "Stripe metadata"}
              {matchingService && ` (${matchingService.name})`}
            </div>
          )}
        </div>

        {/* Promo Code */}
        {appliedPromo && (
          <div className="rounded-md bg-muted p-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-primary">
                  PROMO
                </Badge>
                <span>{appliedPromo.code}</span>
              </div>
              <span className="text-primary">-{discountAmount}</span>
            </div>
          </div>
        )}
      </CardContent>

      <Separator />

      <CardFooter className="pt-4">
        <div className="flex w-full items-center justify-between">
          <span className="font-medium">Total</span>
          <span className="text-lg font-bold">{finalAmount}</span>
        </div>
      </CardFooter>
    </Card>
  );
};
