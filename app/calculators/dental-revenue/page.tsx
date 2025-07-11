import RevenueCalculator, {
  CalculatorConfig,
} from "@/components/calculators/revenue-loss-calculator";

// Usage example with default config
const defaultConfig: CalculatorConfig = {
  title: "Revenue Loss Calculator",
  description:
    "Calculate the financial impact of advertising restrictions on your business revenue",
  industry: "Digital Marketing",
  urgencyMessage:
    "Every month you delay action, your revenue loss compounds. The sooner you implement alternative strategies, the faster you can recover your lost revenue.",
};

// Export the component with default config
export default function RevenueLossCalculator() {
  return <RevenueCalculator config={defaultConfig} />;
}
