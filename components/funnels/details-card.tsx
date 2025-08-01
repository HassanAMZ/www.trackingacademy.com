"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { CheckCircle, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type React from "react";

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
}

export interface DetailsCardsProps {
  title?: string;
  description?: string;
  items: DetailsItem[];
}

const DetailsCards: React.FC<DetailsCardsProps> = ({ title, description, items }) => {
  const renderVideo = (item: DetailsItem) => {
    if (!item.videoUrl) return null;

    const embedUrl =
      item.videoType === "youtube"
        ? `https://www.youtube.com/embed/${item.videoUrl}`
        : `https://www.loom.com/embed/${item.videoUrl}`;

    return (
      <div className="relative aspect-video">
        <iframe src={embedUrl} className="h-full w-full rounded-lg" allowFullScreen />
        <div
          className={`absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow backdrop-blur-sm ${
            item.videoType === "youtube" ? "bg-red-600 text-white" : "bg-blue-600 text-white"
          }`}
        >
          <Play className="h-3 w-3" />
          {item.videoType === "youtube" ? "Case Video" : "Live Demo"}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-16">
      <Container className="max-w-6xl space-y-8">
        {title && (
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold">{title}</h2>
            {description && (
              <p className="mx-auto max-w-4xl text-lg text-muted-foreground">{description}</p>
            )}
          </div>
        )}

        <div className="space-y-8 lg:space-y-16">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className="relative rounded-xl border border-border/50 bg-gradient-to-br from-primary/5 to-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md lg:p-8"
              >
                <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
                  {/* Content */}
                  <div className={`space-y-6 py-8 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    {item.description && (
                      <p className="text-muted-foreground">{item.description}</p>
                    )}

                    {item.benefits && item.benefits.length > 0 && (
                      <div className="space-y-3">
                        {item.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <div className="mt-1 flex-shrink-0 rounded-full bg-primary/20 p-1">
                              <CheckCircle className="h-4 w-4 text-primary" />
                            </div>
                            <span className="leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {item.price && (
                      <div className="pt-4">
                        <div className="inline-block rounded-lg bg-primary px-6 py-3 text-lg font-semibold text-primary-foreground">
                          Total Value: {item.price}
                        </div>
                      </div>
                    )}

                    {item.ctaText && item.ctaLink && (
                      <div className="pt-4">
                        <Button
                          className="flex w-fit cursor-pointer flex-col items-start p-6 text-left text-xl font-bold"
                          asChild
                        >
                          <Link href={item.ctaLink}>
                            {item.ctaText}
                            {item.ctaSubtitle && (
                              <span className="mt-2 block text-sm font-medium opacity-90">
                                {item.ctaSubtitle}
                              </span>
                            )}
                          </Link>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Media */}
                  <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    {item.videoUrl ? (
                      renderVideo(item)
                    ) : item.image ? (
                      <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow">
                        <Image
                          src={item.image || "/placeholder.svg?height=600&width=800"}
                          alt={`${item.title} preview`}
                          width={1920}
                          height={1080}
                          className="w-full rounded-lg object-cover transition-transform duration-700"
                        />
                      </div>
                    ) : (
                      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-muted/50">
                        <span className="text-muted-foreground">No media available</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default DetailsCards;
