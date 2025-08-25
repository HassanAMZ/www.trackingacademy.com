"use client";

import { Button } from "@/components/ui/button";
import { useOutsideClick } from "@/components/ui/hooks/use-outside-click";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useId, useRef, useState } from "react";

interface FeatureItem {
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

export default function FeatureGridWithModal({
  heading,
  subheading,
  items,
  ctaButton,
  className = "",
}: {
  heading?: string;
  subheading?: string;
  items: FeatureItem[];
  ctaButton?: React.ReactNode;
  className?: string;
}) {
  const [activeItem, setActiveItem] = useState<FeatureItem | null>(null);
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
    <section className={`relative z-10 w-full ${className}`}>
      {/* Centered heading and subheading with max-w-5xl */}
      <div className="space-y-6 py-8 text-center">
        {heading && <h2 className="mx-auto max-w-3xl">{heading}</h2>}
        {subheading && <p className="mx-auto max-w-4xl">{subheading}</p>}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 py-4 md:grid-cols-2 lg:grid-cols-4 lg:py-12">
        {items.map((item, index) => (
          <Feature
            key={item.title}
            {...item}
            index={index}
            onClick={() => setActiveItem(item)}
            id={id}
          />
        ))}
      </div>

      {ctaButton && <div className="mt-8 text-center">{ctaButton}</div>}

      {/* Modal Backdrop */}
      {activeItem && (
        <div className="animate-in fade-in-0 fixed inset-0 z-50 bg-background/50 duration-200" />
      )}

      {/* Modal */}
      {activeItem && (
        <div className="fixed inset-0 z-60 grid place-items-center border-2 p-4">
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
                  className="aspect-video w-full rounded-t-md border-b-2 object-cover"
                />
              </div>
            )}
            <div className="space-y-4 p-6">
              <h3>{activeItem.title}</h3>
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
}

const Feature = ({
  title,
  description,
  icon,
  image,
  index,
  onClick,
  id,
  ctaText,
  ctaLink,
}: FeatureItem & {
  index: number;
  onClick: () => void;
  id: string;
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "group/feature relative flex cursor-pointer flex-col border-border py-1 transition-all duration-200 lg:border-r lg:py-10",
        (index === 0 || index === 4) && "border-border lg:border-l",
        index < 4 && "border-border lg:border-b",
      )}
    >
      {/* Hover effects */}
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-t from-muted to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 h-full w-full bg-gradient-to-b from-muted to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100" />
      )}

      {/* Icon/Image - hidden on mobile, shown on desktop */}
      <div className="relative z-10 mb-4 px-6 lg:px-10">
        {image ? (
          <div className="hidden lg:block">
            <Image
              width={1920}
              height={1080}
              src={image}
              alt={title}
              className="aspect-video h-full w-24 rounded-lg object-cover shadow"
            />
          </div>
        ) : icon ? (
          <div className="hidden text-muted-foreground lg:block">{icon}</div>
        ) : null}
      </div>

      {/* Title */}
      <div className="relative z-10 mb-2 px-6 lg:px-10">
        <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-tr-full rounded-br-full bg-muted-foreground transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />

        <h4 className="inline-block text-foreground transition duration-200 group-hover/feature:translate-x-2">
          {title}
        </h4>
      </div>
      <p className="relative z-10 line-clamp-3 px-6 text-sm text-muted-foreground lg:px-10">
        {description}
      </p>

      <div className="relative z-10 mt-4 justify-self-end px-6 lg:px-10">
        <Button
          variant="link"
          size="sm"
          className="h-auto text-sm text-primary hover:text-primary/80"
        >
          Read More
        </Button>
      </div>
    </div>
  );
};
