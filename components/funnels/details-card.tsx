"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import type { ReactElement } from "react";
import LoomEmbed from "../global/loom-embed";
import YoutubeEmbed from "../global/youtube-embed";

interface EmbedId {
  loom?: string;
  youtube?: string;
}

interface CarouselItem {
  title?: string;
  description?: string;
  icon?: ReactElement;
  benefits?: string[];
  image?: string;
  embedId?: EmbedId;
  price?: string;
  ctaButton?: {
    text: string;
    link: string;
    subtitle?: string;
  };
  customCtaButton?: React.ReactElement;
}

export interface DetailsCardsProps {
  headerTitle?: string;
  headerDescription?: string;
  items?: CarouselItem[];
}

const DetailsCards: React.FC<DetailsCardsProps> = ({
  headerTitle,
  headerDescription,
  items = [],
}) => {
  const renderMediaContent = (item: CarouselItem, index: number) => {
    const isEven = index % 2 === 0;

    return (
      <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        {item.embedId?.loom ? (
          <div className="relative aspect-video">
            <LoomEmbed embedId={item.embedId.loom} className="p-0" />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground shadow backdrop-blur-sm">
              <Play className="h-3 w-3" />
              Live Demo
            </div>
          </div>
        ) : item.embedId?.youtube ? (
          <div className="relative aspect-video">
            <YoutubeEmbed embedId={item.embedId.youtube} className="p-0" />
            <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-destructive px-3 py-1.5 text-sm font-medium text-destructive-foreground shadow backdrop-blur-sm">
              <Play className="h-3 w-3" />
              Case Video
            </div>
          </div>
        ) : item.image ? (
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow">
            <Image
              src={item.image || "/placeholder.svg?height=600&width=800"}
              alt={`${item.title} preview`}
              fill
              className="rounded-lg object-cover transition-transform duration-700"
            />
          </div>
        ) : (
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-muted/50">
            <span className="">No media available</span>
          </div>
        )}
      </div>
    );
  };
  const renderContentSection = (item: CarouselItem, index: number) => {
    const isEven = index % 2 === 0;

    return (
      <div className={`space-y-6 py-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <div className="flex items-center gap-4">
          {item.icon && <span className="text-primary">{item.icon}</span>}
          <h2>{item.title}</h2>
        </div>

        {item.description && (
          <h5 className="mx-auto max-w-3xl text-accent-foreground">{item.description}</h5>
        )}

        {item.benefits && item.benefits.length > 0 && (
          <div className="space-y-4">
            {/* <h4 className="text-lg font-semibold">What you'll get:</h4> */}
            <div className="grid grid-cols-1 gap-3">
              {item.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 rounded-full bg-primary/20 p-1">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="leading-relaxed">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {item.price && (
          <div className="pt-4">
            <div className="inline-block rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">
              Total Value: {item.price}
            </div>
          </div>
        )}

        {item.customCtaButton ? (
          <div className="pt-4">{item.customCtaButton}</div>
        ) : (
          item.ctaButton && (
            <div className="pt-4">
              <Button
                className="flex w-fit cursor-pointer flex-col items-start p-6 text-left text-xl font-bold"
                asChild
              >
                <Link href={item.ctaButton.link}>
                  {item.ctaButton.text}
                  {item.ctaButton.subtitle && (
                    <span className="mt-2 block text-sm font-medium opacity-90">
                      {item.ctaButton.subtitle}
                    </span>
                  )}
                </Link>
              </Button>
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16">
      <Container className="max-w-6xl space-y-8">
        {/* Header Section */}
        {headerTitle && (
          <div className="space-y-4 text-center">
            <h2 className="">{headerTitle}</h2>
            {headerDescription && <h4 className="mx-auto max-w-4xl">{headerDescription}</h4>}
          </div>
        )}

        {/* Cards Section */}
        <div className="space-y-8 lg:space-y-16">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-8"
            >
              <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                {renderContentSection(item, index)}
                {renderMediaContent(item, index)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DetailsCards;
