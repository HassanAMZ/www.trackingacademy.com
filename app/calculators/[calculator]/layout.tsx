import { CalculatorConfigs, offers } from "@/data/offers";
import type { Metadata } from "next";

function parseCalculatorSlug(slug: string) {
  const parts = slug.split("-");
  if (parts.length < 2) return null;

  const calculatorType = parts[parts.length - 1];

  const offerSlug = parts.slice(0, -1).join("-");

  return { offerSlug, calculatorType: calculatorType as keyof CalculatorConfigs };
}

// Generate static params for all calculator combinations
export async function generateStaticParams() {
  const calculatorParams: Array<{ calculator: string }> = [];

  Object.entries(offers).forEach(([offerSlug, offer]) => {
    if (offer.calculators) {
      Object.keys(offer.calculators).forEach((calculatorType) => {
        calculatorParams.push({
          calculator: `${offerSlug}-${calculatorType}`,
        });
      });
    }
  });

  return calculatorParams;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    calculator: string;
  }>;
}): Promise<Metadata> {
  const { calculator } = await params;
  const parsed = parseCalculatorSlug(calculator);

  if (!parsed) {
    return {
      title: "Calculator Not Found",
      description: "The requested calculator could not be found.",
    };
  }

  const { offerSlug, calculatorType } = parsed;
  const offer = offers[offerSlug];

  if (!offer || !offer.calculators?.[calculatorType]) {
    return {
      title: "Calculator Not Found",
      description: "The requested calculator could not be found.",
    };
  }

  const calculatorConfig = offer.calculators[calculatorType];

  return {
    title: calculatorConfig.title,
    description: calculatorConfig.description,
    keywords: [...offer.keywords, `${offer.niche} calculator`, `${calculatorType} calculator`],
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
