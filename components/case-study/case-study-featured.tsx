"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { CaseStudy } from "@/data/case-studies";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Maximize2,
  Play,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense, lazy, useEffect, useState } from "react";
import Container from "../ui/container";

// Lazy load components
const LoomEmbed = lazy(() => import("../global/loom-embed"));
const YoutubeEmbed = lazy(() => import("../global/youtube-embed"));

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

type MediaItem = {
  type: "video" | "image";
  src: string;
  embedId?: string;
  embedType?: "loom" | "youtube";
  category?: "before" | "after";
  alt: string;
};

// ... all imports and code above remain unchanged

export default function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Main preview carousel state
  const [currentPreviewIndex, setCurrentPreviewIndex] = useState(0);

  // Create unified media array
  const mediaItems: MediaItem[] = [
    ...(caseStudy.embedId?.loom
      ? [
          {
            type: "video" as const,
            src: "",
            embedId: caseStudy.embedId.loom,
            embedType: "loom" as const,
            alt: "Live Demo Video",
          },
        ]
      : caseStudy.embedId?.youtube
        ? [
            {
              type: "video" as const,
              src: "",
              embedId: caseStudy.embedId.youtube,
              embedType: "youtube" as const,
              alt: "Case Study Video",
            },
          ]
        : [
            {
              type: "image" as const,
              src: caseStudy.imageUrl || "/placeholder.svg",
              alt: "Main preview",
            },
          ]),
    ...(caseStudy.analytics.images?.before?.map((img, index) => ({
      type: "image" as const,
      src: img,
      category: "before" as const,
      alt: `Before ${index + 1}`,
    })) || []),
    ...(caseStudy.analytics.images?.after?.map((img, index) => ({
      type: "image" as const,
      src: img,
      category: "after" as const,
      alt: `After ${index + 1}`,
    })) || []),
  ];

  // Auto-scroll effect for modal
  useEffect(() => {
    if (isModalOpen && isAutoPlaying && mediaItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
      }, 10000);
      return () => clearInterval(interval);
    }
  }, [isModalOpen, isAutoPlaying, mediaItems.length]);

  // Auto-scroll for preview
  useEffect(() => {
    const imageItems = mediaItems.filter((item) => item.type === "image");
    if (!caseStudy.embedId?.loom && !caseStudy.embedId?.youtube && imageItems.length > 1) {
      const interval = setInterval(() => {
        setCurrentPreviewIndex((prev) => (prev + 1) % imageItems.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [mediaItems, caseStudy.embedId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const openModal = (startIndex: number = 0) => {
    setCurrentMediaIndex(startIndex);
    setIsModalOpen(true);
    setIsAutoPlaying(true);
  };

  const navigateModal = (direction: "prev" | "next") => {
    setIsAutoPlaying(false);
    if (direction === "prev") {
      setCurrentMediaIndex((prev) => (prev - 1 + mediaItems.length) % mediaItems.length);
    } else {
      setCurrentMediaIndex((prev) => (prev + 1) % mediaItems.length);
    }
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const getMediaTypeIcon = (item: MediaItem) => {
    if (item.type === "video") return <Play className="h-3 w-3" />;
    if (item.category === "before") {
      return <Badge variant="destructive">Before</Badge>;
    }
    if (item.category === "after") {
      return <Badge>After</Badge>;
    }
    return <Eye className="h-3 w-3" />;
  };

  const renderModalMedia = (item: MediaItem) => {
    if (item.type === "video" && item.embedType === "loom") {
      return (
        <Suspense fallback={<div className="aspect-video animate-pulse bg-muted" />}>
          <LoomEmbed embedId={item.embedId!} className="p-0" />
        </Suspense>
      );
    }
    if (item.type === "video" && item.embedType === "youtube") {
      return (
        <Suspense fallback={<div className="aspect-video animate-pulse bg-muted" />}>
          <YoutubeEmbed embedId={item.embedId!} className="p-0" />
        </Suspense>
      );
    }
    return (
      <div className="relative aspect-video bg-muted">
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-contain"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
        />
      </div>
    );
  };

  const renderMainPreview = () => {
    if (caseStudy.embedId?.loom) {
      return (
        <Suspense fallback={<div className="aspect-video animate-pulse bg-muted" />}>
          <LoomEmbed embedId={caseStudy.embedId.loom} className="p-0" />
        </Suspense>
      );
    }
    if (caseStudy.embedId?.youtube) {
      return (
        <Suspense fallback={<div className="aspect-video animate-pulse bg-muted" />}>
          <YoutubeEmbed embedId={caseStudy.embedId.youtube} className="p-0" />
        </Suspense>
      );
    }

    const imageItems = mediaItems.filter((item) => item.type === "image");
    const currentImage = imageItems[currentPreviewIndex] || mediaItems[0];
    return (
      <Image
        src={currentImage?.src || "/placeholder.svg"}
        alt={currentImage?.alt || "Preview"}
        fill
        className="object-cover transition-all duration-500 group-hover:scale-105"
        loading="lazy"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
      />
    );
  };

  // ✅ Add this before modal rendering to fix the "Cannot find name 'currentItem'" error
  const currentItem = mediaItems[currentMediaIndex];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-primary/5 to-background py-6">
      <Container className="relative">
        <Card className="overflow-hidden border-0 bg-card/60 shadow-sm transition-shadow hover:shadow-md">
          <div className="grid w-full items-center gap-4 p-4 lg:grid-cols-5">
            {/* Compact Media Preview */}
            <div className="relative lg:col-span-2">
              <div
                className="group relative aspect-video cursor-pointer overflow-hidden rounded-lg border bg-muted"
                onClick={() => openModal(0)}
              >
                {renderMainPreview()}

                {/* Overlay with media count */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Media indicators */}
                <div className="absolute bottom-2 left-2 flex items-center gap-2">
                  {getMediaTypeIcon(mediaItems[0])}
                  <span className="font-medium">
                    {mediaItems.length} {mediaItems.length === 1 ? "item" : "items"}
                  </span>
                </div>

                {/* Expand icon */}
                <div className="absolute top-2 right-2 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="rounded-full p-1.5">
                    <Maximize2 className="h-3 w-3" />
                  </div>
                </div>

                {/* Date badge */}
                <div className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-background/90 px-2 py-1 font-medium text-foreground shadow backdrop-blur-sm">
                  <Zap className="h-2.5 w-2.5" />
                  {formatDate(caseStudy.projectTimeline.endDate)}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-4 lg:col-span-3">
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    {/* <Badge className="mb-2">Featured Case Study {caseStudy.id}</Badge> */}
                    <h4 className="capitalize">{caseStudy.client}</h4>
                  </div>
                  <div className="flex flex-wrap justify-end gap-1">
                    {caseStudy.technologies.slice(0, 2).map((tech, index) => (
                      <Badge key={index} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-1.5">
                  {caseStudy.results.slice(0, 3).map((result, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compact Testimonial */}
              <div className="rounded-lg bg-muted/50 p-3">
                <blockquote className="line-clamp-2 font-semibold italic">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
                <div className="mt-2 flex items-center gap-2">
                  {caseStudy.testimonial.image && (
                    <Image
                      src={caseStudy.testimonial.image}
                      alt={caseStudy.testimonial.author}
                      width={20}
                      height={20}
                      className="rounded-full"
                      loading="lazy"
                    />
                  )}
                  <div className="text-xs">
                    <div className="font-medium">{caseStudy.testimonial.author}</div>
                    <div>{caseStudy.testimonial.role}</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex max-w-sm gap-2">
                <Button asChild size="sm" className="group">
                  <Link
                    href={`/case-study/${caseStudy.id}`}
                    className="flex items-center gap-2 px-4"
                  >
                    <span className="font-semibold">Full Study</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="group">
                  <Link
                    href={caseStudy.url}
                    target="_blank"
                    className="flex items-center gap-2 px-4"
                  >
                    <ExternalLink className="h-3 w-3 transition-transform group-hover:scale-110" />
                    <span>Live Site</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </Container>

      {/* Modal section uses `currentItem` safely now */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-6xl border-0 bg-transparent p-0 [&>button]:hidden">
          <div className="relative overflow-hidden rounded-lg bg-background shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-3">
                <h3 className="font-semibold">{caseStudy.client}</h3>
                {currentItem?.category && (
                  <Badge variant={currentItem.category === "before" ? "destructive" : "default"}>
                    {currentItem.category}
                  </Badge>
                )}
                {currentItem?.type === "video" && (
                  <Badge variant="secondary" className="flex items-center gap-1">
                    <Play className="h-3 w-3" />
                    {currentItem.embedType === "loom" ? "Live Demo" : "Case Video"}
                  </Badge>
                )}
                <span className="text-muted-foreground">
                  {currentMediaIndex + 1} of {mediaItems.length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={toggleAutoPlay}
                  className={` ${isAutoPlaying ? "bg-primary text-primary-foreground" : ""}`}
                >
                  {isAutoPlaying ? "Auto ⏸" : "Auto ▶"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsModalOpen(false)}
                  className="h-8 w-8 p-0"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Modal Media */}
            <div className="relative">
              {renderModalMedia(currentItem)}
              {mediaItems.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateModal("prev")}
                    className="absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 bg-background/80 p-0 hover:bg-background"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateModal("next")}
                    className="absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 bg-background/80 p-0 hover:bg-background"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {/* Modal Footer Thumbnails */}
            {mediaItems.length > 1 && (
              <div className="border-t p-4">
                <div className="flex gap-2 overflow-x-auto pb-2">
                  {mediaItems.map((item, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        setCurrentMediaIndex(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded border-2 transition-all ${
                        index === currentMediaIndex
                          ? "scale-110 border-primary"
                          : "border-muted hover:border-muted-foreground"
                      }`}
                    >
                      {item.type === "video" ? (
                        <div className="flex h-full w-full items-center justify-center bg-muted">
                          <Play className="h-4 w-4" />
                        </div>
                      ) : (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          width={64}
                          height={64}
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      )}
                      {item.category && (
                        <div className="absolute top-0 right-0 left-0">
                          <div
                            className={`px-1 py-0.5 text-center font-medium text-white ${
                              item.category === "before" ? "bg-destructive" : "bg-primary"
                            }`}
                          >
                            {item.category === "before" ? "B" : "A"}
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
