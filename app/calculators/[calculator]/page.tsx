// app/calculators/[calculator]/page.tsx
import CalculatorComponent from "@/components/calculators/lead-loss-calculator";
import RevenueCalculator from "@/components/calculators/revenue-loss-calculator";
import { CalculatorConfigs, offers } from "@/data/offers";
import { notFound } from "next/navigation";

function parseCalculatorSlug(slug: string) {
  const parts = slug.split("-");
  if (parts.length < 2) return null;

  const calculatorType = parts[parts.length - 1];

  const offerSlug = parts.slice(0, -1).join("-");

  return { offerSlug, calculatorType: calculatorType as keyof CalculatorConfigs };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{
    calculator: string;
  }>;
}) {
  const { calculator } = await params;
  const parsed = parseCalculatorSlug(calculator);

  if (!parsed) {
    notFound();
  }

  const { offerSlug, calculatorType } = parsed;
  const offer = offers[offerSlug];

  if (!offer || !offer.calculators?.[calculatorType]) {
    notFound();
  }

  const calculatorConfig = offer.calculators[calculatorType];

  if (!calculatorConfig) {
    notFound();
  }

  // Render the appropriate calculator component based on type
  switch (calculatorType) {
    case "lead":
    case "agency":
      // Type guard to ensure it's a CalculatorConfig
      if ("type" in calculatorConfig) {
        return <CalculatorComponent config={calculatorConfig} />;
      }
      break;
    case "revenue":
      // Type guard to ensure it's a RevenueCalculatorConfig
      if (!("type" in calculatorConfig)) {
        return <RevenueCalculator config={calculatorConfig} />;
      }
      break;
    default:
      notFound();
  }

  notFound();
}
