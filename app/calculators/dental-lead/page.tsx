import CalculatorComponent from "@/components/calculators/lead-loss-calculator";

const businessConfig = {
  title: "Dental Practice Revenue Impact Calculator",
  description: "Calculate the financial impact of advertising restrictions on your dental practice",
  leadLabel: "Patient Leads",
  clientLabel: "New Patients",
  industry: "Dental Practice",
  type: "business" as const,
  urgencyMessage:
    "Every month you delay addressing these restrictions costs you thousands in lost revenue. The compounding effect means early action is critical to minimize long-term impact.",
};

const agencyConfig = {
  title: "Dental Agency Client Retention Calculator",
  description:
    "Calculate how advertising restrictions will impact your dental agency's client retention and revenue",
  leadLabel: "Client Performance",
  clientLabel: "Dental Clients",
  industry: "Dental Marketing Agency",
  type: "agency" as const,
  urgencyMessage:
    "Without a solution to ad restrictions, your dental clients will see declining performance and leave for agencies that can deliver results. New client acquisition becomes a nightmare when you can't prove consistent performance.",
};

export default function Page() {
  // Change this to agencyConfig to see the agency version
  return <CalculatorComponent config={businessConfig} />;
}
