import { caseStudies, CaseStudy } from "@/data/case-studies";

async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return (
    caseStudies.find(
      (study) => study.id.toLowerCase() === slug.toLowerCase(),
    ) || null
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ caseStudy: string }>;
}) {
  // Load your case study data from the slug (string)
  const caseStudyData = await getCaseStudyBySlug((await params).caseStudy); // you need to define this function
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
