"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/data/case-studies";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Eye,
  Play,
  X,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import LoomEmbed from "../global/loom-embed";
import YoutubeEmbed from "../global/youtube-embed";
import { TestimonialCard } from "../testimonial/testimonial-card";
import Container from "../ui/container";

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

export default function FeaturedCaseStudy({ caseStudy }: FeaturedCaseStudyProps) {
  // Auto-scroll state for before/after images
  const [currentBeforeIndex, setCurrentBeforeIndex] = useState(0);
  const [currentAfterIndex, setCurrentAfterIndex] = useState(0);

  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageType, setModalImageType] = useState<"before" | "after">("before");
  const [modalImageIndex, setModalImageIndex] = useState(0);

  // Auto-scroll effect for before images
  useEffect(() => {
    if (caseStudy.analytics.images?.before && caseStudy.analytics.images.before.length > 1) {
      const interval = setInterval(() => {
        setCurrentBeforeIndex(
          (prev) => (prev + 1) % (caseStudy.analytics.images?.before?.length ?? 1),
        );
      }, 10000);

      return () => clearInterval(interval);
    }
  }, [caseStudy.analytics.images?.before]);

  // Auto-scroll effect for after images
  useEffect(() => {
    if (caseStudy.analytics.images?.after && caseStudy.analytics.images.after.length > 1) {
      const interval = setInterval(() => {
        setCurrentAfterIndex(
          (prev) => (prev + 1) % (caseStudy.analytics.images?.after?.length ?? 1),
        );
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [caseStudy.analytics.images?.after]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const caseStudyLink = `/case-study/${caseStudy.id}`;

  const openModal = (type: "before" | "after", index: number) => {
    setModalImageType(type);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const getCurrentModalImages = () => {
    return modalImageType === "before"
      ? caseStudy.analytics.images?.before || []
      : caseStudy.analytics.images?.after || [];
  };

  const navigateModal = (direction: "prev" | "next") => {
    const images = getCurrentModalImages();
    if (direction === "prev") {
      setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
    } else {
      setModalImageIndex((prev) => (prev + 1) % images.length);
    }
  };

  const switchModalType = () => {
    setModalImageType(modalImageType === "before" ? "after" : "before");
    setModalImageIndex(0);
  };

  return (
    <section className=" relative w-full overflow-hidden  bg-gradient-to-b from-primary/10 to-background  pt-12 pb-6">
      <Container className="relative space-y-4">
        <div className="flex items-center justify-center">
          <Badge>Featured Case Study {caseStudy.id}</Badge>
        </div>
        <Card className="bg-card/80 overflow-hidden border-0 shadow-none">
          <div className="grid w-full items-center gap-6 px-4 py-6 md:px-6 lg:grid-cols-5 lg:justify-center">
            <div className="relative lg:col-span-3 space-y-2">
              <div className="bg-muted relative aspect-video overflow-hidden">
                {caseStudy.embedId?.loom ? (
                  <>
                    <LoomEmbed embedId={caseStudy.embedId.loom} className="p-0" />
                    <div className="bg-primary text-primary-foreground absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow backdrop-blur-sm">
                      <Play className="h-3 w-3" />
                      Live Demo
                    </div>
                  </>
                ) : caseStudy.embedId?.youtube ? (
                  <>
                    <YoutubeEmbed embedId={caseStudy.embedId.youtube} className="p-0" />
                    <div className="bg-destructive text-destructive-foreground absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow backdrop-blur-sm">
                      <Play className="h-3 w-3" />
                      Case Video
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      src={caseStudy.imageUrl || "/placeholder.svg?height=600&width=800"}
                      alt={`${caseStudy.name} preview`}
                      fill
                      className="object-cover transition-transform duration-700  rounded-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent rounded-lg" />
                    <div className="bg-background/90 text-foreground absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow  backdrop-blur-sm">
                      <Eye className="h-3 w-3" />
                      Live Site
                    </div>
                  </>
                )}
                <div className="absolute top-4 right-4 flex gap-2">
                  <div className="bg-background/90 text-foreground flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow backdrop-blur-sm">
                    {caseStudy.plan}
                  </div>
                  <div className="bg-background/90 text-foreground flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow backdrop-blur-sm">
                    <Calendar className="h-3 w-3" />
                    {caseStudy.projectTimeline.durationDays}d
                  </div>
                  <div className="bg-background/90 text-foreground flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow backdrop-blur-sm">
                    <Zap className="h-3 w-3" />
                    {formatDate(caseStudy.projectTimeline.endDate)}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-between lg:col-span-2 space-y-4">
              <div className="space-y-4">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="flex items-center gap-2 capitalize text-primary ">
                    {caseStudy.client}
                  </h4>
                </div>
                <div className="flex flex-wrap items-start justify-start gap-2 text-center">
                  {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="hover:bg-primary/10 cursor-default text-xs transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  {caseStudy.results.slice(0, 3).map((result, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="bg-primary mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full" />
                      <span className="text-muted-foreground line-clamp-1 leading-relaxed">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <TestimonialCard
                  upwork={true}
                  quote={caseStudy.testimonial.quote}
                  author={caseStudy.testimonial.author}
                  linkUrl={`/case-study/${caseStudy.id}`}
                  role={caseStudy.testimonial.role}
                  image={caseStudy.testimonial.image}
                />
              </div>
              <div className="flex flex-col gap-2 md:flex-row">
                <Button asChild size="sm" className="group w-full">
                  <Link href={caseStudyLink} className="flex items-center justify-center gap-2">
                    <span className="font-semibold">Full Case Study</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm" className="group w-full">
                  <Link
                    href={caseStudy.url}
                    target="_blank"
                    className="flex items-center justify-center gap-2"
                  >
                    <ExternalLink className="h-3 w-3 transition-transform group-hover:scale-110" />
                    <span>Live Site</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          {caseStudy.analytics.images && (
            <div className="p-4 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                {/* Before - Auto-Scrolling Carousel */}
                <Card className="group bg-destructive/10 overflow-hidden border-0 shadow-none">
                  <div className="py-2 text-center">
                    <Badge variant="destructive" className="text-xs font-medium">
                      Before
                    </Badge>
                  </div>
                  <CardContent className="px-3 py-6 md:p-6">
                    <div className="relative">
                      <div
                        className="relative aspect-video overflow-hidden rounded-lg border cursor-pointer group/image"
                        onClick={() => openModal("before", currentBeforeIndex)}
                      >
                        <Image
                          src={
                            caseStudy.analytics.images.before[currentBeforeIndex] ||
                            "/placeholder.svg"
                          }
                          alt={`Before ${currentBeforeIndex + 1}`}
                          fill
                          className="object-cover transition-all duration-300 group-hover/image:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                            <Eye className="h-4 w-4 text-black" />
                          </div>
                        </div>
                      </div>
                      {/* Image Counter */}
                      {caseStudy.analytics.images.before.length > 1 && (
                        <div className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                          {currentBeforeIndex + 1} / {caseStudy.analytics.images.before.length}
                        </div>
                      )}
                      {/* Dot Indicators */}
                      {caseStudy.analytics.images.before.length > 1 && (
                        <div className="mt-3 flex justify-center gap-1">
                          {caseStudy.analytics.images.before.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentBeforeIndex(index)}
                              className={`h-2 w-2 rounded-full transition-colors ${
                                index === currentBeforeIndex
                                  ? "bg-destructive"
                                  : "bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
                {/* After - Auto-Scrolling Carousel */}
                <Card className="group bg-primary/10 overflow-hidden border-0 shadow-none">
                  <div className="py-2 text-center">
                    <Badge className="text-xs font-medium">After</Badge>
                  </div>
                  <CardContent>
                    <div className="relative">
                      <div
                        className="relative aspect-video overflow-hidden rounded-lg border cursor-pointer group/image"
                        onClick={() => openModal("after", currentAfterIndex)}
                      >
                        <Image
                          src={
                            caseStudy.analytics.images.after[currentAfterIndex] ||
                            "/placeholder.svg"
                          }
                          alt={`After ${currentAfterIndex + 1}`}
                          fill
                          className="object-cover transition-all duration-300 group-hover/image:scale-105"
                        />
                        {/* Hover overlay */}
                        <div className="absolute inset-0 bg-black/0 group-hover/image:bg-black/20 transition-all duration-300 flex items-center justify-center">
                          <div className="opacity-0 group-hover/image:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
                            <Eye className="h-4 w-4 text-black" />
                          </div>
                        </div>
                      </div>
                      {/* Image Counter */}
                      {caseStudy.analytics.images.after.length > 1 && (
                        <div className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                          {currentAfterIndex + 1} / {caseStudy.analytics.images.after.length}
                        </div>
                      )}
                      {/* Dot Indicators */}
                      {caseStudy.analytics.images.after.length > 1 && (
                        <div className="mt-3 flex justify-center gap-1">
                          {caseStudy.analytics.images.after.map((_, index) => (
                            <button
                              key={index}
                              onClick={() => setCurrentAfterIndex(index)}
                              className={`h-2 w-2 rounded-full transition-colors ${
                                index === currentAfterIndex
                                  ? "bg-primary"
                                  : "bg-muted-foreground/30"
                              }`}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}
        </Card>
      </Container>

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-0 [&>button]:hidden">
          <div className="relative bg-background rounded-lg overflow-hidden">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center gap-2">
                <Badge variant={modalImageType === "before" ? "destructive" : "default"}>
                  {modalImageType === "before" ? "Before" : "After"}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {modalImageIndex + 1} of {getCurrentModalImages().length}
                </span>
              </div>
              <div className="flex items-center gap-2">
                {caseStudy.analytics.images?.before && caseStudy.analytics.images?.after && (
                  <Button variant="outline" size="sm" onClick={switchModalType} className="text-xs">
                    Switch to {modalImageType === "before" ? "After" : "Before"}
                  </Button>
                )}
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

            {/* Modal Image */}
            <div className="relative aspect-video bg-muted">
              <Image
                src={getCurrentModalImages()[modalImageIndex] || "/placeholder.svg"}
                alt={`${modalImageType} ${modalImageIndex + 1}`}
                fill
                className="object-contain"
              />

              {/* Navigation Arrows */}
              {getCurrentModalImages().length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateModal("prev")}
                    className="absolute left-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-background/80 hover:bg-background"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => navigateModal("next")}
                    className="absolute right-4 top-1/2 -translate-y-1/2 h-10 w-10 p-0 bg-background/80 hover:bg-background"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </Button>
                </>
              )}
            </div>

            {/* Modal Footer with Thumbnails */}
            {getCurrentModalImages().length > 1 && (
              <div className="p-4 border-t">
                <div className="flex gap-2 overflow-x-auto">
                  {getCurrentModalImages().map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded border-2 overflow-hidden ${
                        index === modalImageIndex
                          ? `border-${modalImageType === "before" ? "destructive" : "primary"}`
                          : "border-muted"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${modalImageType} ${index + 1}`}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                      />
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
