"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
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
}

interface DetailsCarouselProps {
  headerTitle?: string;
  headerDescription?: string;
  items?: CarouselItem[];
  ctaButton?: {
    text: string;
    onClick: () => void;
    subtitle?: string;
  };
  autoAdvance?: boolean;
  autoAdvanceDelay?: number;
  showModal?: boolean;
  modalContent?: React.ReactNode;
}

const DetailsCarousel: React.FC<DetailsCarouselProps> = ({
  headerTitle,
  headerDescription,
  items = [],
  ctaButton,
  autoAdvance = true,
  autoAdvanceDelay = 8000,
  showModal = false,
  modalContent,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    <section className="py-16 overflow-hidden from-accent/5 to-background bg-linear-to-b">
      <Container className="space-y-4">
        {/* Header Section */}
        {headerTitle && (
          <div className="text-center">
            <h1 className="whitespace-pre-wrap">{headerTitle}</h1>
            {headerDescription && (
              <h4 className="text-muted-foreground max-w-4xl pt-8 mx-auto whitespace-pre-wrap">
                {headerDescription}
              </h4>
            )}
          </div>
        )}

        {/* Carousel Navigation */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setDirection(idx < activeIndex ? "left" : "right");
                  setActiveIndex(idx);
                }}
                className={`w-3 h-3 transition-all ${idx === activeIndex ? "bg-primary w-8" : "bg-muted"}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <div className="flex-1 flex justify-end gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="h-10 w-10"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="h-10 w-10"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Item Selection Tabs */}
        <div
          className="py-4 md:grid hidden items-center gap-4"
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
              className={`p-4 text-center h-full cursor-pointer flex items-center flex-col rounded-lg transition-all ${
                idx === activeIndex
                  ? "bg-primary/10 border-primary border shadow-md"
                  : "bg-card hover:bg-muted/50 border border-border/50"
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
        <div className="relative bg-gradient-to-br from-primary/5 to-background p-8 border border-border/50">
          {activeItem && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              {/* Content Section - 3 columns */}
              <div
                className={`lg:col-span-3 py-8 space-y-8 transition-all duration-500 ${
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
                  <div className="space-y-4 mt-6">
                    <h4>What you'll get:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {activeItem.benefits.slice(0, 4).map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className="mr-3 mt-1 p-1 rounded-full bg-primary/20">
                            <CheckCircle className="h-4 w-4 text-primary" />
                          </div>
                          <span className="line-clamp-1">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeItem.price && (
                  <div className="mt-8">
                    <div className="inline-block bg-primary text-primary-foreground rounded-lg px-6 py-2 text-lg font-semibold">
                      Total Value: {activeItem.price}
                    </div>
                  </div>
                )}

                {ctaButton && (
                  <Button
                    className="flex max-w-4xl flex-col items-center text-center font-bold lg:items-start lg:text-left mx-auto lg:mx-0 w-fit p-6 text-xl cursor-pointer"
                    onClick={() => {
                      if (showModal) {
                        setIsModalOpen(true);
                      } else {
                        ctaButton.onClick();
                      }
                    }}
                  >
                    <div>
                      {ctaButton.text}
                      {ctaButton.subtitle && (
                        <span className="mt-2 block text-sm font-medium opacity-90">
                          {ctaButton.subtitle}
                        </span>
                      )}
                    </div>
                  </Button>
                )}
              </div>

              {/* Image Section - 2 columns */}
              <div
                className={`lg:col-span-2 transition-all duration-500 ${
                  isAnimating
                    ? direction === "right"
                      ? "-translate-x-10 opacity-0"
                      : "translate-x-10 opacity-0"
                    : "translate-x-0 opacity-100"
                }`}
              >
                {activeItem.image && (
                  <div className="relative h-80 w-full overflow-hidden shadow transform rotate-1 hover:rotate-0 transition-transform duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay z-10" />
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

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 translate-y-1/2 -translate-x-1/2" />
        </div>
      </Container>

      {/* Modal */}
      {showModal && (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-primary text-center font-bold">
                Modal Content
              </DialogTitle>
            </DialogHeader>
            {modalContent}
          </DialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default DetailsCarousel;
