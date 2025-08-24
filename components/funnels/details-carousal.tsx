"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ReactElement } from "react";

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

export interface DetailsCarouselProps {
  headerTitle?: string;
  headerDescription?: string;
  items?: CarouselItem[];
}

const DetailsCarousel: React.FC<DetailsCarouselProps> = ({
  headerTitle,
  headerDescription,
  items = [],
}) => {
  return (
    <section>
      <Container className="space-y-8 py-12">
        {/* Header Section */}
        {headerTitle && (
          <div className="mx-auto max-w-4xl space-y-4 pb-6 text-center">
            <h2 className="mx-auto">{headerTitle}</h2>
            {headerDescription && <p className="mx-auto max-w-4xl">{headerDescription}</p>}
          </div>
        )}

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
            >
              {/* Icon and Title */}
              <div className="mb-4 flex items-center gap-3">
                {item.icon && (
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-foreground">{item.title}</h3>
              </div>

              {/* Description */}
              {item.description && <p className="mb-4 text-muted-foreground">{item.description}</p>}

              {/* Benefits as Badges */}
              {item.benefits && item.benefits.length > 0 && (
                <div className="mb-4">
                  <h4 className="mb-2 text-sm font-medium text-foreground">What you'll get:</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.benefits.slice(0, 3).map((benefit, benefitIdx) => (
                      <Badge key={benefitIdx} className="flex" variant="secondary">
                        <CheckCircle className="h-3 w-3" />
                        <span className="line-clamp-1">{benefit}</span>
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Price */}
              {item.price && (
                <div className="mb-4">
                  <Badge variant="default" className="bg-accent text-accent-foreground">
                    Total Value: {item.price}
                  </Badge>
                </div>
              )}

              {/* Image */}
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title || "Card item"}
                  width={1920}
                  height={1080}
                  className="w-full object-cover"
                />
              )}

              {/* CTA Button */}
              <div className="mt-auto">
                {item.customCtaButton ? (
                  <div>{item.customCtaButton}</div>
                ) : (
                  item.ctaButton && (
                    <Button
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      asChild
                    >
                      <Link href={item.ctaButton.link}>
                        {item.ctaButton.text}
                        {item.ctaButton.subtitle && (
                          <span className="mt-1 block opacity-90">{item.ctaButton.subtitle}</span>
                        )}
                      </Link>
                    </Button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DetailsCarousel;
