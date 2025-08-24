"use client";

import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/components/ui/hooks/use-outside-click";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";

interface DetailsItem {
  title: string;
  description?: string;
  benefits?: string[];
  image?: string;
  videoUrl?: string;
  videoType?: "loom" | "youtube";
  price?: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSubtitle?: string;
  icon?: React.ReactNode;
}

export interface DetailsCardsProps {
  heading?: string;
  subheading?: string;
  items: DetailsItem[];
  ctaButton?: React.ReactNode;
  className?: string;
}

const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="h-4 w-4 text-foreground"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

export const DetailsStack: React.FC<DetailsCardsProps> = ({
  heading,
  subheading,
  items,
  ctaButton,
  className = "",
}) => {
  const [activeItem, setActiveItem] = useState<DetailsItem | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null) as React.RefObject<HTMLDivElement>;

  useOutsideClick(ref, () => setActiveItem(null));

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeItem]);

  return (
    <section className={`w-full ${className}`}>
      <div className="space-y-6 py-8">
        {heading && <h2>{heading}</h2>}
        {subheading && <h4>{subheading}</h4>}
      </div>

      {items && items.length > 0 && (
        <ul className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              onClick={() => setActiveItem(item)}
              className="cursor-pointer rounded-lg bg-card p-2 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-accent"
            >
              <div className="flex items-center gap-4">
                {item.image && (
                  <div>
                    <Image
                      width={1920}
                      height={1080}
                      src={item.image}
                      alt={item.title}
                      className="h-20 w-full rounded-md object-cover object-top"
                    />
                  </div>
                )}
                <div className="flex-1 space-y-2 text-left">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  {item.description && (
                    <p className="hidden text-sm text-muted-foreground lg:block">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </ul>
      )}

      {ctaButton && <div className="mt-8 text-center">{ctaButton}</div>}

      {activeItem && (
        <div className="animate-in fade-in-0 fixed inset-0 z-10 bg-background/50 duration-200" />
      )}

      {activeItem && (
        <div className="fixed inset-0 z-20 grid place-items-center p-4">
          <button
            className="animate-in fade-in-0 absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-card duration-200 lg:hidden"
            onClick={() => setActiveItem(null)}
          >
            <CloseIcon />
          </button>
          <div
            ref={ref}
            className="animate-in fade-in-0 zoom-in-95 w-full max-w-[600px] overflow-hidden rounded-lg bg-card shadow-lg duration-300"
          >
            {activeItem.image && (
              <div>
                <Image
                  width={1920}
                  height={1080}
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="h-full w-full rounded-t-md object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h3 className="mb-2 text-xl font-bold text-foreground">{activeItem.title}</h3>
              {activeItem.description && (
                <p className="mb-4 text-muted-foreground">{activeItem.description}</p>
              )}
              {activeItem.benefits && activeItem.benefits.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground">Benefits</h4>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    {activeItem.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeItem.videoUrl && activeItem.videoType && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground">Video</h4>
                  <iframe
                    width="100%"
                    height="200"
                    src={
                      activeItem.videoType === "youtube"
                        ? `https://www.youtube.com/embed/${activeItem.videoUrl}`
                        : activeItem.videoType === "loom"
                          ? `https://www.loom.com/embed/${activeItem.videoUrl}`
                          : activeItem.videoUrl
                    }
                    title={activeItem.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-md"
                  />
                </div>
              )}
              {activeItem.price && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground">Price</h4>
                  <p className="text-muted-foreground">{activeItem.price}</p>
                </div>
              )}
              {activeItem.ctaText && activeItem.ctaLink && (
                <div className="mb-4">
                  <Button
                    asChild
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Link href={activeItem.ctaLink}>{activeItem.ctaText}</Link>
                  </Button>
                  {activeItem.ctaSubtitle && (
                    <p className="mt-2 text-sm text-muted-foreground">{activeItem.ctaSubtitle}</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
