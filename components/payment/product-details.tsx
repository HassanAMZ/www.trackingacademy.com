import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { Product, PromoCode } from "@/types/index";
import { formatCurrency } from "@/utils/payment";
import { CheckCircle, Info } from "lucide-react";

interface ProductDetailsProps {
  product: Product;
  appliedPromo: PromoCode | null;
}

export const ProductDetails = ({
  product,
  appliedPromo,
}: ProductDetailsProps) => {
  const originalAmount = formatCurrency(product.unitAmount, product.currency);
  const discountAmount = appliedPromo
    ? formatCurrency(appliedPromo.amountOff, product.currency)
    : null;
  const finalAmount = appliedPromo
    ? formatCurrency(
        product.unitAmount - appliedPromo.amountOff,
        product.currency,
      )
    : originalAmount;

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div>
          <h2 className="font-semibold">{product.name}</h2>
          {product.description && (
            <p className="text-muted-foreground">{product.description}</p>
          )}
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
                  <CheckCircle className="text-primary mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Metadata */}
        {product.metadata && Object.keys(product.metadata).length > 0 && (
          <div className="space-y-2">
            <h3 className="font-medium">Features:</h3>
            <ul className="space-y-1.5">
              {Object.entries(product.metadata).map(([key, value]) => (
                <li key={key} className="flex items-start">
                  <Info className="text-primary mt-0.5 mr-2 h-4 w-4 flex-shrink-0" />
                  <span className="text-muted-foreground">
                    <span className="font-medium">{key}:</span> {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Promo Code */}
        {appliedPromo && (
          <div className="bg-muted rounded-md p-3">
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
