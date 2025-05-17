"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
interface CaseStudy {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  siteUrl: string;
  caseStudyUrl: string;
}

interface CaseStudyCarouselProps {
  caseStudies: CaseStudy[];
  speed?: number;
  itemWidth?: number;
  itemHeight?: number;
  className?: string;
}

export default function CaseStudyCarousel({
  caseStudies,
  speed = 0.75,
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
        positionRef.current -= speed;

        // Reset position when we've scrolled one full set of items
        if (Math.abs(positionRef.current) >= totalWidth) {
          positionRef.current += totalWidth;
        }

        // Apply the transform
        carousel.style.transform = `translateX(${positionRef.current}px)`;
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
  }, [isPaused, caseStudies.length, speed, totalItemWidth]);

  return (
    <div
      className={`bg-background overflow-hidden ${className}`}
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
            href={caseStudy.caseStudyUrl}
            key={`${caseStudy.id}-${index}`}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-[${itemWidth}px] h-[${itemHeight}px] relative mx-1 rounded overflow-hidden shadow-lg transition-all duration-300 hover:scale-x-[1.02] group cursor-pointer`}
            style={{ width: `${itemWidth}px`, height: `${itemHeight}px` }}
          >
            <Image
              src={caseStudy.imageUrl || "/placeholder.svg"}
              alt={caseStudy.title}
              fill
              sizes={`${itemWidth}px`}
              className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              loading="lazy"
            />

            {/* Gradient overlay that intensifies on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>

            {/* Case study details that scale up on hover */}
            <div className="absolute inset-x-0 bottom-0 p-4 transform transition-transform duration-300 text-left group-hover:scale-105 z-10">
              <h3 className="text-white font-bold text-lg mb-1">
                {caseStudy.title}
              </h3>
              <p className="text-white/80 text-sm group-hover:text-white transition-colors duration-300">
                {caseStudy.description}
              </p>
            </div>

            {/* Outline icon that appears on hover */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="rounded-full p-3 border-2 border-primary/90 transform transition-transform duration-300  bg-primary group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-secondary fill-secondary "
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
