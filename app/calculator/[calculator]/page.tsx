import CalculatorComponent from "@/components/calculators/lead-loss-calculator";
import RevenueCalculator from "@/components/calculators/revenue-loss-calculator";
import { CalculatorConfigs, offers } from "@/data/offers";

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

  let calculatorType: keyof CalculatorConfigs = "lead"; // default to lead
  let offerSlug = "default-offer";

  if (parsed) {
    const { offerSlug: requestedOfferSlug, calculatorType: requestedCalculatorType } = parsed;

    // Check if the requested offer exists and has the requested calculator type
    const requestedOffer = offers[requestedOfferSlug];
    if (requestedOffer && requestedOffer.calculators?.[requestedCalculatorType]) {
      // Use the requested offer and calculator type
      offerSlug = requestedOfferSlug;
      calculatorType = requestedCalculatorType;
    } else {
      // Fallback logic
      if (
        requestedCalculatorType === "lead" ||
        requestedCalculatorType === "agency" ||
        requestedCalculatorType === "revenue"
      ) {
        calculatorType = requestedCalculatorType;
        offerSlug = `default-offer`;
      } else {
        // For any other calculator type, default to lead
        calculatorType = "lead";
        offerSlug = "default-offer";
      }
    }
  }

  // Get the offer (will be default-offer in most fallback cases)
  const offer = offers[offerSlug];
  const calculatorConfig = offer?.calculators?.[calculatorType];

  // Render the appropriate calculator component based on type
  switch (calculatorType) {
    case "lead":
    case "agency":
      // Type guard to ensure it's a CalculatorConfig
      if (calculatorConfig && "type" in calculatorConfig) {
        return <CalculatorComponent config={calculatorConfig} />;
      }
      break;
    case "revenue":
      // Type guard to ensure it's a RevenueCalculatorConfig
      if (calculatorConfig && !("type" in calculatorConfig)) {
        return <RevenueCalculator config={calculatorConfig} />;
      }
      break;
  }

  // Final fallback - if nothing works, render default lead calculator
  const defaultOffer = offers["default-offer"];
  const defaultConfig = defaultOffer?.calculators?.lead;

  if (defaultConfig && "type" in defaultConfig) {
    return <CalculatorComponent config={defaultConfig} />;
  }

  // This should never happen if your default-offer is properly configured
  return <div>Calculator not available</div>;
}
