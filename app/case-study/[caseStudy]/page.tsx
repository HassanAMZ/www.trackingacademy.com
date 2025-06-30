// app/case-study/[caseStudy]/page.tsx
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/case-studies";
import CaseStudyContent from "@/components/case-study/case-study-content";

export default async function Page({ params }: { params: Promise<{ caseStudy: string }> }) {
  const { caseStudy: caseStudyId } = await params;

  // Find the case study by ID
  const caseStudy = caseStudies.find(
    (study) => study.id.toLowerCase() === caseStudyId.toLowerCase(),
  );

  if (!caseStudy) {
    notFound();
  }

  return <CaseStudyContent caseStudy={caseStudy} />;
}
