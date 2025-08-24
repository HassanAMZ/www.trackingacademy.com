"use client";

import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { caseStudies } from "@/data/case-studies";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./testimonial-card";
import UpworkStats from "./upwork-stats";

interface TestimonialGridProps {
  upwork?: boolean;
  animated?: boolean;
  showUpworkStats?: boolean;
  rows?: 1 | 2;
}

// Testimonial infinite scroll component based on CaseStudyInfiniteScroll
const TestimonialInfiniteScroll = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: {
  items: any[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow" | "very-slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "40s"; // default to normal
      if (speed === "fast") {
        duration = "20s";
      } else if (speed === "normal") {
        duration = "40s";
      } else if (speed === "very-slow") {
        duration = "120s";
      } else {
        duration = "80s";
      }

      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 h-96 w-full [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex h-fit min-w-full shrink-0 flex-row gap-4 pt-2",
          start && "animate-scroll-horizontal",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={
          {
            "--scroll-direction": direction === "left" ? "normal" : "reverse",
          } as React.CSSProperties
        }
      >
        {items.map((testimonial, idx) => (
          <li
            key={`${testimonial.id || idx}-${idx}`}
            className="relative shrink-0"
            style={{ width: "350px" }}
          >
            <TestimonialCard
              quote={testimonial.quote}
              author={testimonial.author}
              image={testimonial.image}
              budget={testimonial.budget}
              role={testimonial.role}
              projectName={testimonial.projectName}
              linkUrl={testimonial.linkUrl}
              metrics={testimonial.metrics}
              upwork={testimonial.upwork}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function TestimonialGrid({
  upwork = false,
  animated = true,
  showUpworkStats = true,
  rows = 2,
}: TestimonialGridProps) {
  const itemWidth = 350;
  const margin = 16; // Gap between items

  if (animated) {
    const animatedTestimonialData = caseStudies.map((caseStudy) => ({
      id: caseStudy.id,
      quote: caseStudy.testimonial.quote,
      author: caseStudy.testimonial.author,
      image: caseStudy.testimonial.image,
      budget: caseStudy.budget,
      role: caseStudy.testimonial.role,
      projectName: caseStudy.name,
      linkUrl: `/case-study/${caseStudy.id}`,
      metrics: caseStudy.analytics
        ? [
            {
              label: "Accuracy",
              value: `${caseStudy.analytics.accuracy}%`,
            },
            ...(caseStudy.analytics.recoveredFromTrackingPreventionPercentage > 0
              ? [
                  {
                    label: "+",
                    value: `${caseStudy.analytics.recoveredFromTrackingPreventionPercentage.toFixed(1)}% Recovered`,
                  },
                ]
              : []),
          ]
        : [],
      upwork,
    }));

    return (
      <>
        {!upwork && showUpworkStats && <UpworkStats />}
        <div className="relative overflow-hidden py-8">
          {/* Top Row - Moving Left to Right */}
          <div className={rows === 2 ? "mb-0" : ""}>
            <TestimonialInfiniteScroll
              items={animatedTestimonialData}
              direction="left"
              speed="fast"
              pauseOnHover={true}
            />
          </div>

          {/* Bottom Row - Moving Right to Left, only if rows=2 */}
          {rows === 2 && (
            <div className="mt-0">
              <TestimonialInfiniteScroll
                items={[...animatedTestimonialData].reverse()}
                direction="right"
                speed="fast"
                pauseOnHover={true}
              />
            </div>
          )}
        </div>
      </>
    );
  }

  // Both rows show all testimonials, just starting from different ends
  const topRowTestimonials = caseStudies; // 1,2,3,4,5...
  const bottomRowTestimonials = [...caseStudies].reverse(); // 5,4,3,2,1...

  const renderTestimonialCard = (caseStudy: any, index: number) => {
    const metrics = caseStudy.analytics
      ? [
          {
            label: "Accuracy",
            value: `${caseStudy.analytics.accuracy}%`,
          },
          ...(caseStudy.analytics.recoveredFromTrackingPreventionPercentage > 0
            ? [
                {
                  label: "+",
                  value: `${caseStudy.analytics.recoveredFromTrackingPreventionPercentage.toFixed(1)}% Recovered`,
                },
              ]
            : []),
        ]
      : [];

    return (
      <div
        key={`${caseStudy.id}-${index}`}
        className="flex-shrink-0"
        style={{ width: `${itemWidth}px` }}
      >
        <TestimonialCard
          quote={caseStudy.testimonial.quote}
          author={caseStudy.testimonial.author}
          image={caseStudy.testimonial.image}
          budget={caseStudy.budget}
          role={caseStudy.testimonial.role}
          projectName={caseStudy.name}
          linkUrl={`/case-study/${caseStudy.id}`}
          metrics={metrics}
          upwork={upwork}
        />
      </div>
    );
  };

  return (
    <>
      {!upwork && showUpworkStats && <UpworkStats />}
      <div className="relative overflow-hidden py-8">
        {/* Top Row - Moving Left to Right (1→2→3→4→5...) */}
        <div className={rows === 2 ? "mb-8" : ""}>
          <InfiniteSlider speed={30} gap={margin} reverse={false}>
            {topRowTestimonials.map((caseStudy, index) => renderTestimonialCard(caseStudy, index))}
          </InfiniteSlider>
        </div>

        {/* Bottom Row - Moving Right to Left (...5←4←3←2←1), only if rows=2 */}
        {rows === 2 && (
          <div>
            <InfiniteSlider speed={30} gap={margin} reverse={true}>
              {bottomRowTestimonials.map((caseStudy, index) =>
                renderTestimonialCard(caseStudy, index),
              )}
            </InfiniteSlider>
          </div>
        )}
      </div>
    </>
  );
}
