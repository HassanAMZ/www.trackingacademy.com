"use client";

import { caseStudies } from "@/data/case-studies";
import { useEffect, useRef, useState } from "react";
import { TestimonialCard } from "./testimonial-card";
import UpworkStats from "./upwork-stats";

interface TestimonialGridProps {
  upwork?: boolean;
  showUpworkStats?: boolean;
}

export default function TestimonialGrid({
  upwork = false,
  showUpworkStats = true,
}: TestimonialGridProps) {
  const [isPaused] = useState(false); // Remove pause functionality
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const topPositionRef = useRef<number>(0);
  const bottomPositionRef = useRef<number>(0);

  // Initialize bottom row to start from the right (negative position)
  useEffect(() => {
    const bottomRowTotalWidth = totalItemWidth * caseStudies.length;
    bottomPositionRef.current = -bottomRowTotalWidth;
  }, []);

  const speed = 1; // Faster speed
  const itemWidth = 350;

  // Both rows show all testimonials, just starting from different ends
  const topRowTestimonials = caseStudies; // 1,2,3,4,5...
  const bottomRowTestimonials = [...caseStudies].reverse(); // 5,4,3,2,1...

  // Create infinite loops by triplicating items for continuous flow
  const topRowItems = [
    ...topRowTestimonials,
    ...topRowTestimonials,
    ...topRowTestimonials,
  ];
  const bottomRowItems = [
    ...bottomRowTestimonials,
    ...bottomRowTestimonials,
    ...bottomRowTestimonials,
  ];

  const margin = 16; // gap between items
  const totalItemWidth = itemWidth + margin;

  useEffect(() => {
    const topRow = topRowRef.current;
    const bottomRow = bottomRowRef.current;
    if (!topRow || !bottomRow) return;

    const topRowTotalWidth = totalItemWidth * caseStudies.length;
    const bottomRowTotalWidth = totalItemWidth * caseStudies.length;

    const animate = () => {
      if (!isPaused && topRow && bottomRow) {
        // Top row moves left to right continuously (1→2→3→4→5...)
        topPositionRef.current -= speed;
        if (Math.abs(topPositionRef.current) >= topRowTotalWidth) {
          topPositionRef.current += topRowTotalWidth;
        }

        // Bottom row moves right to left continuously (...5←4←3←2←1)
        bottomPositionRef.current += speed;
        if (bottomPositionRef.current >= 0) {
          bottomPositionRef.current -= bottomRowTotalWidth;
        }

        // Apply transforms
        topRow.style.transform = `translateX(${topPositionRef.current}px)`;
        bottomRow.style.transform = `translateX(${bottomPositionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    // Start the animation
    animationRef.current = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, speed, totalItemWidth, caseStudies.length]);

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
        {/* Left and Right blur overlays */}
        <div className="from-background pointer-events-none absolute top-0 left-0 z-10 h-full w-6 bg-gradient-to-r to-transparent"></div>
        <div className="from-background pointer-events-none absolute top-0 right-0 z-10 h-full w-6 bg-gradient-to-l to-transparent"></div>
        {/* Top Row - Moving Left to Right (1→2→3→4→5...) */}
        <div className="mb-8">
          <div
            ref={topRowRef}
            className="flex gap-4"
            style={{
              width: `${topRowItems.length * totalItemWidth}px`,
            }}
          >
            {topRowItems.map((caseStudy, index) =>
              renderTestimonialCard(caseStudy, index),
            )}
          </div>
        </div>

        {/* Bottom Row - Moving Right to Left (...5←4←3←2←1) */}
        <div>
          <div
            ref={bottomRowRef}
            className="flex gap-4"
            style={{
              width: `${bottomRowItems.length * totalItemWidth}px`,
            }}
          >
            {bottomRowItems.map((caseStudy, index) =>
              renderTestimonialCard(caseStudy, index),
            )}
          </div>
        </div>
      </div>
    </>
  );
}
