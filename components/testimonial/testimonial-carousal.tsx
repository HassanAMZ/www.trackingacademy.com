"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { caseStudies } from "@/data/case-studies";
import clsx from "clsx";
import { TestimonialCard } from "@/components/testimonial/testimonial-card";

const TestimonialsCarousel: React.FC<{ className?: string }> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % caseStudies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const currentCaseStudy = caseStudies[currentIndex];

  const metrics = currentCaseStudy.analytics
    ? [
        { label: "Accuracy", value: `${currentCaseStudy.analytics.accuracy}%` },
        ...(currentCaseStudy.analytics.recoveredFromTrackingPreventionPercentage > 0
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
    <div className={clsx("relative", className)}>
      <TestimonialCard
        projectTimeline={currentCaseStudy.projectTimeline}
        quote={currentCaseStudy.testimonial.quote}
        author={currentCaseStudy.testimonial.author}
        role={currentCaseStudy.testimonial.role}
        budget={currentCaseStudy.budget}
        metrics={metrics}
        image={currentCaseStudy.testimonial.image}
        key={currentIndex}
        projectName={currentCaseStudy.name}
        linkUrl={`/case-study/${currentCaseStudy.id}`}
      />
    </div>
  );
};

export default TestimonialsCarousel;
