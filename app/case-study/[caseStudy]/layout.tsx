import { caseStudies } from "@/data/case-studies";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ caseStudy: string }>;
}) {
  const caseStudyData =
    caseStudies.find(
      async (study) =>
        study.id.toLowerCase() === (await params).caseStudy.toLowerCase(),
    ) || null;

  if (!caseStudyData) {
    return {
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
    };
  }

  return {
    title: `${caseStudyData.title} | Tracking Academy Case Study`,
    description: caseStudyData.description,
    openGraph: {
      title: `${caseStudyData.title} | Tracking Academy`,
      description: caseStudyData.description,
      images: ["/images/social-sharing.png"],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: `${caseStudyData.title} | Tracking Academy`,
      description: caseStudyData.description,
      images: ["/images/social-sharing.png"],
    },
  };
}

export default function CaseStudyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
