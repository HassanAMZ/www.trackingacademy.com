import { caseStudies } from "@/data/case-studies";
import { ExternalLink, Star } from "lucide-react";
import Link from "next/link";
import Container from "../ui/container";
import { TestimonialCard } from "./testimonial-card";
import UpworkStats from "./upwork-stats";

interface TestimonialGridProps {
  upwork?: boolean;
}

// Fisher-Yates shuffle
function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function TestimonialGrid({ upwork = false }: TestimonialGridProps) {
  const randomizedCaseStudies = shuffleArray(caseStudies);

  return (
    <>
      {!upwork && <UpworkStats />}
      <div className="columns-1 sm:columns-2 lg:columns-3 space-y-4">
        {randomizedCaseStudies.map((currentCaseStudy, index) => {
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
              upwork={upwork}
            />
          );
        })}
      </div>
    </>
  );
}

export default TestimonialGrid;
