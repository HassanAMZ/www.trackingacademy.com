"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactElement, useEffect, useState } from "react";
import type React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";

// TypeScript interfaces for props
interface CarouselItem {
  title?: string;
  description?: string;
  icon?: ReactElement;
  benefits?: string[];
  image?: string;
  price?: string;
  ctaButton?: {
    text: string;
    link: string;
    subtitle?: string;
  };
  customCtaButton?: React.ReactElement;
}

interface DetailsCarouselProps {
  headerTitle?: string;
  headerDescription?: string;
  items?: CarouselItem[];
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
}

const DetailsCarousel: React.FC<DetailsCarouselProps> = ({
  headerTitle,
  headerDescription,
  items = [],
  autoAdvance = true,
  autoAdvanceDelay = 8000,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setDirection("right");
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setDirection("left");
    setIsAnimating(true);
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Auto-advance slides
  useEffect(() => {
    if (!autoAdvance) return;

    const interval = setInterval(() => {
      nextSlide();
    }, autoAdvanceDelay);
    return () => clearInterval(interval);
  }, [activeIndex, isAnimating, autoAdvance, autoAdvanceDelay]);

  const activeItem = items[activeIndex];
  function useBreakpoint() {
    const [breakpoint, setBreakpoint] = useState("base");

    useEffect(() => {
      const updateBreakpoint = () => {
        const width = window.innerWidth;
        if (width >= 1024) setBreakpoint("lg");
        else if (width >= 768) setBreakpoint("md");
        else if (width >= 640) setBreakpoint("sm");
        else setBreakpoint("base");
      };

      updateBreakpoint();
      window.addEventListener("resize", updateBreakpoint);
      return () => window.removeEventListener("resize", updateBreakpoint);
    }, []);

    return breakpoint;
  }

  const breakpoint = useBreakpoint();

  let columnCount;
  if (breakpoint === "sm" || breakpoint === "md" || breakpoint === "base") {
    columnCount =
      items.length > 5 ? Math.floor(items.length / 2) : items.length;
  } else {
    columnCount = items.length;
  }

  return (
    <section className="from-primary/5 to-background overflow-hidden bg-linear-to-b py-16">
      <Container className="space-y-4">
        {/* Header Section */}
        {headerTitle && (
          <div className="text-center">
            <h1 className="mx-auto max-w-5xl whitespace-pre-wrap">
              {headerTitle}
            </h1>
            {headerDescription && (
              <h4 className="text-muted-foreground mx-auto max-w-4xl pt-8 whitespace-pre-wrap">
                {headerDescription}
              </h4>
            )}
          </div>
        )}

        {/* Carousel Navigation */}
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx < activeIndex ? "left" : "right");
                  setActiveIndex(idx);
                }}
                className={`h-3 w-3 cursor-pointer transition-all ${idx === activeIndex ? "bg-primary w-8" : "bg-muted"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex flex-1 justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10 cursor-pointer"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10 cursor-pointer"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Item Selection Tabs */}
        <div
          className="hidden items-center gap-4 py-4 md:grid"
          style={{
            gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
          }}
        >
          {items.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx < activeIndex ? "left" : "right");
                setActiveIndex(idx);
              }}
              className={`flex h-full cursor-pointer flex-col items-center rounded-lg p-4 text-center transition-all ${
                idx === activeIndex
                  ? "bg-primary/10 border-primary border shadow-md"
                  : "bg-card hover:bg-muted/50 border-border/50 border"
              }`}
            >
              <span>{item.icon && item.icon}</span>
              <span
                className={`text-sm font-medium ${idx === activeIndex ? "text-primary" : "text-muted-foreground"}`}
              >
                {item.title}
              </span>
            </button>
          ))}
        </div>

        {/* Main Showcase */}
        <div className="from-primary/5 to-background border-border/50 relative border bg-gradient-to-br p-8">
          {activeItem && (
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-5">
              {/* Content Section - 3 columns */}
              <div
                className={`space-y-8 py-8 transition-all duration-500 lg:col-span-3 ${
                  isAnimating
                    ? direction === "right"
                      ? "translate-x-10 opacity-0"
                      : "-translate-x-10 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                <div className="flex items-center gap-4">
                  {activeItem.icon && activeItem.icon}
                  <h2 className="line-clamp-1">{activeItem.title}</h2>
                </div>

                {activeItem.description && (
                  <p className="text-muted-foreground line-clamp-1">
                    {activeItem.description}
                  </p>
                )}

                {activeItem.benefits && activeItem.benefits.length > 0 && (
                  <div className="mt-6 space-y-4">
                    <h4>What you'll get:</h4>
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {activeItem.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="bg-primary/20 mt-1 mr-3 rounded-full p-1">
                            <CheckCircle className="text-primary h-4 w-4" />
                          </div>
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem.price && (
                  <div className="mt-8">
                    <div className="bg-primary text-primary-foreground inline-block rounded-lg px-6 py-2 text-lg font-semibold">
                      Total Value: {activeItem.price}
                    </div>
                  </div>
                )}

                {activeItem.customCtaButton ? (
                  <div>{activeItem.customCtaButton}</div> // ✅ Renders custom button if provided
                ) : (
                  activeItem.ctaButton && (
                    <Button
                      className="mx-auto flex w-fit max-w-4xl cursor-pointer flex-col items-center p-6 text-center text-xl font-bold lg:mx-0 lg:items-start lg:text-left"
                      asChild
                    >
                      <Link href={activeItem.ctaButton.link}>
                        {activeItem.ctaButton.text}
                        {activeItem.ctaButton.subtitle && (
                          <span className="mt-2 block text-sm font-medium opacity-90">
                            {activeItem.ctaButton.subtitle}
                          </span>
                        )}
                      </Link>
                    </Button>
                  )
                )}
              </div>

              {/* Image Section - 2 columns */}
              <div
                className={`transition-all duration-500 lg:col-span-2 ${
                  isAnimating
                    ? direction === "right"
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-10 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                {activeItem.image && (
                  <div className="relative h-80 w-full rotate-1 transform overflow-hidden shadow transition-transform duration-300 hover:rotate-0">
                    <div className="from-primary/20 absolute inset-0 z-10 bg-gradient-to-tr to-transparent mix-blend-overlay" />
                    <Image
                      src={activeItem.image || "/placeholder.svg"}
                      alt={activeItem.title || "Carousel item"}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default DetailsCarousel;
