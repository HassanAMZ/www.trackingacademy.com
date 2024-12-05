"use client";

import { CaseStudy } from "@/types/index";
import { CaseStudyCard } from "./case-study-card";
import Container from "../ui/container";

interface CaseStudiesGridProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudiesGrid({ caseStudies }: CaseStudiesGridProps) {
  return (
    <Container className="py-12">
      <div className="grid gap-8">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
        ))}
      </div>
    </Container>
  );
}
