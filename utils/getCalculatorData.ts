import { offers } from "@/data/offers";

export interface CalculatorPreview {
  id: string;
  title: string;
  description: string;
  type: "lead" | "agency" | "revenue";
  industry: string;
  offerSlug: string;
  slug: string;
  urgencyMessage: string;
  leadLabel?: string;
  clientLabel?: string;
}

export default function getCalculatorData(): CalculatorPreview[] {
  const calculators: CalculatorPreview[] = [];

  // Iterate through all offers to find those with calculators
  Object.entries(offers).forEach(([offerKey, offer]) => {
    if (offer.calculators) {
      Object.entries(offer.calculators).forEach(([calculatorType, calculator]) => {
        if (calculator) {
          const calculatorPreview: CalculatorPreview = {
            id: `${offer.slug}-${calculatorType}`,
            title: calculator.title,
            description: calculator.description,
            type: calculatorType as "lead" | "agency" | "revenue",
            industry: calculator.industry,
            offerSlug: offer.slug,
            slug: `${offer.slug}-${calculatorType}`,
            urgencyMessage: calculator.urgencyMessage,
            ...(calculatorType !== "revenue" && {
              leadLabel: (calculator as any).leadLabel,
              clientLabel: (calculator as any).clientLabel,
            }),
          };
          calculators.push(calculatorPreview);
        }
      });
    }
  });

  return calculators;
}
