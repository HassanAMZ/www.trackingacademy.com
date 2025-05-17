import { caseStudies } from "@/data/case-studies";
import type { Metadata } from "next";
import { ReactNode } from "react";

interface CaseStudyLayoutProps {
  params: {
    caseStudy: string;
  };
  children: ReactNode;
}

export async function generateMetadata({
  params,
}: CaseStudyLayoutProps): Promise<Metadata> {
  const caseStudy = caseStudies.find((cs) => cs.id === params.caseStudy);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${caseStudy.title} | Tracking Academy Case Study`,
    description: caseStudy.description,
    openGraph: {
      title: `${caseStudy.title} | Tracking Academy`,
      description: caseStudy.description,
      images: [caseStudy.imageUrl],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudy.title} | Tracking Academy`,
      description: caseStudy.description,
      images: [caseStudy.imageUrl],
    },
  };
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  return <>{children}</>;
}
