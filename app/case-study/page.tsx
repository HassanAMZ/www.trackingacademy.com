import CaseStudyFeaturedVideo from "@/components/case-study/case-study-featured-video";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";

export default function CaseStudiesPage() {
  return (
    <Container className="py-12">
      <div className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
          Stop Losing Money on Broken Tracking
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-muted-foreground">
          See how we've helped businesses recover 20-45% of lost conversions and achieve 95%+
          tracking accuracy. Turn data gaps into revenue opportunities with our proven tracking
          solutions.
        </p>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="text-2xl font-bold text-foreground">{300}+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="text-2xl font-bold text-foreground">95%+</div>
            <div className="text-sm text-muted-foreground">Average Tracking Accuracy</div>
          </div>
          <div className="rounded-lg border border-border bg-muted/30 p-4">
            <div className="text-2xl font-bold text-foreground">30%</div>
            <div className="text-sm text-muted-foreground">Average CAC Reduction</div>
          </div>
        </div>
      </div>

      {caseStudies.map((caseStudy) => (
        <div key={caseStudy.id}>
          <CaseStudyFeaturedVideo
            caseStudy={caseStudy}
            // verticalVideo={caseStudy.embedId?.muxVertical ?? false}
            verticalVideo={true}
            darkMode={true}
          />
        </div>
      ))}
    </Container>
  );
}
