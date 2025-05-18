import { TestimonialCard } from "@/components/testimonial/testimonial-card";
import { caseStudies } from "@/data/case-studies";

function TestimonialGrid() {
  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4">
      {caseStudies.map((currentCaseStudy, index) => {
        const metrics = currentCaseStudy.analytics
          ? [
              {
                label: "Accuracy",
                value: `${currentCaseStudy.analytics.accuracy}%`,
              },
              ...(currentCaseStudy.analytics
                .recoveredFromTrackingPreventionPercentage > 0
                ? [
                    {
                      label: "+",
                      value: `${currentCaseStudy.analytics.recoveredFromTrackingPreventionPercentage.toFixed(1)}% Recovered`,
                    },
                  ]
                : []),
            ]
          : [];

        return (
          <TestimonialCard
            key={index}
            quote={currentCaseStudy.testimonial.quote}
            author={currentCaseStudy.testimonial.author}
            image={currentCaseStudy.testimonial.image}
            budget={currentCaseStudy.budget}
            role={currentCaseStudy.testimonial.role}
            projectName={currentCaseStudy.name}
            linkUrl={`/case-study/${currentCaseStudy.id}`}
            metrics={metrics}
          />
        );
      })}
    </div>
  );
}

export default TestimonialGrid;
