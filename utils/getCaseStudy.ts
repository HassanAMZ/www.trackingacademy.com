import { caseStudies, CaseStudy } from "@/data/case-studies";

const getCaseStudy = (name: string): CaseStudy | undefined =>
  caseStudies.find(
    (cs) => cs.id.includes(name) || cs.name.toLowerCase().includes(name.toLowerCase()),
  );

export default getCaseStudy;
