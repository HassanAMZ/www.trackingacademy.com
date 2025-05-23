"use client";

import { CaseStudy } from "@/data/case-studies";
import { ExternalLink } from "lucide-react";
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
  speed = 1,
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
    <div
      className={`bg-background ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        ref={carouselRef}
        className="flex"
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
            className={`w-[${itemWidth}px] h-[${itemHeight}px] group relative mx-1 cursor-pointer overflow-hidden rounded shadow-lg transition-all duration-300 hover:scale-x-[1.02]`}
            style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
          >
            <Image
              src={caseStudy.mobileUrl || "/placeholder.svg"}
              alt={caseStudy.title}
              width={1080}
              height={1920}
              className="scale-102 object-cover transition-opacity duration-300 group-hover:opacity-80"
            />{" "}
            {/* Gradient overlay that intensifies on hover */}
            <div className="absolute inset-0 group-hover:bg-linear-to-t group-hover:from-primary group-hover:to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90"></div>{" "}
            {/* Case study details that scale up on hover */}
            <div className="text-foreground hidden group-hover:block absolute inset-x-0 bottom-0 z-10 transform p-4 text-left transition-transform duration-300 group-hover:scale-110">
              <h4 className="mb-1 line-clamp-3 hover:underline">
                {caseStudy.title}
              </h4>
              <p className="line-clamp-2 transition-colors duration-300">
                {caseStudy.description}
              </p>
            </div>{" "}
            {/* Outline icon that appears on hover */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30">
              <div className="bg-primary text-white rounded-full p-3 shadow-lg">
                <ExternalLink className="h-6 w-6" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
