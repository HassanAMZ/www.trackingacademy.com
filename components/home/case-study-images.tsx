"use client";
import { CaseStudy } from "@/data/case-studies";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

interface CaseStudyImagesProps {
  caseStudies: CaseStudy[];
  direction: "up" | "down" | "left" | "right";
  speed: "fast" | "normal" | "slow" | "very-slow";
  className?: string;
}

// Custom infinite scroll component for case studies
const CaseStudyInfiniteScroll = ({
  items,
  direction = "up",
  speed,
  pauseOnHover = true,
  className,
}: {
  items: CaseStudy[];
  direction?: "up" | "down" | "left" | "right";
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
      if (direction === "up" || direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      let duration = "80s"; // default
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

  const isVertical = direction === "up" || direction === "down";

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full",
        isVertical
          ? "h-[450px] [mask-image:linear-gradient(to_bottom,transparent,white_20%,white_80%,transparent)]"
          : "h-36 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex shrink-0 gap-3",
          isVertical ? "min-h-full w-full flex-col py-4" : "h-fit min-w-full flex-row pt-2",
          start && (isVertical ? "animate-scroll-vertical" : "animate-scroll-horizontal"),
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
        style={
          {
            "--scroll-direction": direction === "up" || direction === "left" ? "normal" : "reverse",
          } as React.CSSProperties
        }
      >
        {items.map((study, idx) => (
          <li
            key={`${study.id}-${idx}`}
            className={cn("relative shrink-0", isVertical ? "w-full" : "")}
          >
            <Link
              href={`/case-study/${study.id}`}
              className={cn(
                "group relative block transition-all duration-300 hover:scale-95 hover:shadow-lg",
                isVertical && idx % 2 === 0 ? "self-start" : "self-end",
              )}
            >
              <div className="relative rounded border-2 border-background/20 bg-background shadow-md">
                <Image
                  src={study.imageUrl || study.mobileUrl || study.testimonial.image}
                  alt={`${study.name} case study`}
                  width={1920}
                  height={1080}
                  className={cn(
                    "aspect-video rounded object-cover transition-all duration-300 group-hover:brightness-110",
                    isVertical ? "h-20 w-full" : "h-32 w-full",
                  )}
                />
                <div className="absolute inset-0 rounded bg-gradient-to-t from-foreground via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute right-1 bottom-1 left-1 rounded">
                  <p className="text-xs font-medium text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    {study.title}
                  </p>
                </div>
              </div>
              {/* Floating badge with results */}
              <div className="absolute -top-1 right-2 rounded-full bg-primary px-2 py-1 text-xs font-bold text-primary-foreground shadow-md">
                {study.analytics.accuracy}%
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function CaseStudyImages({
  caseStudies,
  direction,
  speed,
  className,
}: CaseStudyImagesProps) {
  const scrollItems = caseStudies;

  return (
    <CaseStudyInfiniteScroll
      items={scrollItems}
      direction={direction}
      speed={speed}
      pauseOnHover={true}
      className={className}
    />
  );
}
