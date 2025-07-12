"use client";

import { CaseStudy } from "@/data/case-studies";
import { ExternalLink, MousePointer2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
  speed?: number;
  itemWidth?: number;
  itemHeight?: number;
  className?: string;
}

export default function CaseStudyCarousel({
  caseStudies,
  speed = 0.6,
  itemWidth = 412 / 1.75,
  itemHeight = 893 / 1.75,
  className = "",
}: CaseStudyCarouselProps) {
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const positionRef = useRef<number>(0);

  // Create a truly infinite loop by duplicating items
  const items = [...caseStudies, ...caseStudies, ...caseStudies];
  const margin = 16; // 8px on each side (mx-2)
  const totalItemWidth = itemWidth + margin;

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const totalItems = caseStudies.length;
    const totalWidth = totalItemWidth * totalItems;
    const animate = () => {
      if (!isPaused && carousel) {
        // Update position
        positionRef.current -= speed; // Reset position when we've scrolled one full set of items
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current += totalWidth;
        } // Apply the transform
        carousel.style.transform = `translateX(${positionRef.current}px)`;
      }
      animationRef.current = requestAnimationFrame(animate);
    }; // Start the animation
    animationRef.current = requestAnimationFrame(animate); // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, caseStudies.length, speed, totalItemWidth]);

  return (
    <div className={`relative overflow-x-hidden bg-background ${className}`}>
      {/* Floating hint with gentle animation */}
      <div className="pointer-events-none absolute top-6 right-6 z-50">
        <div className="flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-white shadow-lg backdrop-blur-sm">
          <div className="animate-bounce">
            <MousePointer2 className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">Click to view case studies</span>
        </div>
      </div>

      <div
        className="overflow-x-hidden bg-background"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div
          ref={carouselRef}
          className="flex gap-2"
          style={{
            width: `${items.length * totalItemWidth}px`,
          }}
        >
          {items.map((caseStudy, index) => (
            <Link
              href={`/case-study/${caseStudy.id}`}
              key={`${caseStudy.id}-${index}`}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-[${itemWidth}px] h-[${itemHeight}px] group relative mx-1 cursor-pointer overflow-hidden rounded shadow-lg ring-2 ring-transparent transition-all duration-300 hover:scale-x-[1.02] hover:shadow-xl hover:ring-primary/20`}
              style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
            >
              {/* Mobile website image - hidden on hover */}
              <Image
                priority={false}
                src={caseStudy.mobileUrl || "/placeholder.svg"}
                alt={caseStudy.title}
                width={1080}
                height={1920}
                className="scale-102 object-cover transition-opacity duration-300 group-hover:opacity-0"
              />

              {/* After image - shown on hover (full height, right side) */}

              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Image
                  src={
                    caseStudy.analytics.images?.after[0]
                      ? caseStudy.analytics.images.after[0]
                      : caseStudy.mobileUrl
                  }
                  alt={`${caseStudy.title} - After`}
                  width={1080}
                  height={1920}
                  className="h-full w-full object-cover object-right"
                />
              </div>

              {/* Shimmer effect to indicate interactivity */}
              <div className="animate-shimmer absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 group-hover:animate-none"></div>

              {/* Subtle pulse border to indicate clickability */}
              <div className="absolute inset-0 animate-pulse rounded border-2 border-primary/20 opacity-40 transition-opacity duration-300 group-hover:opacity-0"></div>

              {/* Gradient overlay that intensifies on hover */}
              <div className="absolute inset-0 opacity-70 transition-opacity duration-300 group-hover:bg-linear-to-t group-hover:from-primary group-hover:to-transparent group-hover:opacity-90"></div>

              {/* Case study details that scale up on hover */}
              <div className="absolute inset-x-0 bottom-0 z-10 hidden transform p-4 text-left text-background transition-transform duration-300 group-hover:block group-hover:scale-110">
                <h4 className="mb-1 line-clamp-3 hover:underline">{caseStudy.title}</h4>
                <p className="line-clamp-2 transition-colors duration-300">
                  {caseStudy.description}
                </p>
              </div>

              {/* Enhanced click indicator with better visibility */}
              <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100">
                <div className="animate-pulse rounded-full bg-primary p-3 text-white shadow-lg ring-4 ring-white/20">
                  <ExternalLink className="h-6 w-6" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
