import { Product, PromoCode } from "@/types/index";
import { formatCurrency } from "@/utils/payment";
import { CheckCircle } from "lucide-react";

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
    <div className="p-6 space-y-4">
      <div className="flex items-center justify-between">
        <h2>{product.name}</h2>
        <span>{originalAmount}</span>
      </div>

      <p className="text-muted-foreground">{product.description}</p>

      {product.features && product.features.length > 0 && (
        <div className="space-y-2">
          <h3>Includes:</h3>
          <ul className="text-muted-foreground space-y-1">
            {product.features.map((feature: string, index: number) => (
              <li key={index} className="flex items-start">
                <CheckCircle className="h-4 w-4 text-secondary mr-2 mt-0.5 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {appliedPromo && (
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-accent">Promo: {appliedPromo.code}</span>
            <span className="text-accent">-{discountAmount}</span>
          </div>
        </div>
      )}

      <div className="border-t pt-4">
        <h4 className="flex items-center justify-between">
          <span>Total</span>
          <span>{finalAmount}</span>
        </h4>
      </div>
    </div>
  );
};
