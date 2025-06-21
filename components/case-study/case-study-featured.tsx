"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import type { CaseStudy } from "@/data/case-studies";
import {
  ArrowRight,
  Award,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Eye,
  Play,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoomEmbed from "../global/loom-embed";
import YoutubeEmbed from "../global/youtube-embed";
import { TestimonialCard } from "../testimonial/testimonial-card";
import Container from "../ui/container";

interface FeaturedCaseStudyProps {
  caseStudy: CaseStudy;
}

export default function FeaturedCaseStudy({
  caseStudy,
}: FeaturedCaseStudyProps) {
  const [expandedSections, setExpandedSections] = useState({
    description: false,
    technologies: false,
    results: false,
  });

  // Auto-scroll state for before/after images
  const [currentBeforeIndex, setCurrentBeforeIndex] = useState(0);
  const [currentAfterIndex, setCurrentAfterIndex] = useState(0);

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // Auto-scroll effect for before images
  useEffect(() => {
    if (
      caseStudy.analytics.images?.before &&
      caseStudy.analytics.images.before.length > 1
    ) {
      const interval = setInterval(() => {
        setCurrentBeforeIndex(
          (prev) =>
            (prev + 1) % (caseStudy.analytics.images?.before?.length ?? 1),
        );
      }, 7000);

      return () => clearInterval(interval);
    }
  }, [caseStudy.analytics.images?.before]);

  // Auto-scroll effect for after images
  useEffect(() => {
    if (
      caseStudy.analytics.images?.after &&
      caseStudy.analytics.images.after.length > 1
    ) {
      const interval = setInterval(() => {
        setCurrentAfterIndex(
          (prev) =>
            (prev + 1) % (caseStudy.analytics.images?.after?.length ?? 1),
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

  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) : text;
  };

  return (
    <section className="from-background via-muted/10 to-primary/5 relative w-full overflow-hidden bg-gradient-to-br py-12 md:py-20">
      <Container className="relative">
        {/* Main Visual Card */}
        <Card className="bg-card/80 group hover:shadow-3xl overflow-hidden border-0 shadow-2xl backdrop-blur-sm transition-all duration-500">
          <CardHeader>
            {/* Compact Header */}
            <div className="mb-8 text-center">
              <h2 className="text-foreground mx-auto max-w-5xl py-4 text-center">
                Case Study: {caseStudy.title}
              </h2>
              {/* Expandable Description */}
              <div className="mx-auto max-w-3xl">
                <div className="text-muted-foreground text-lg leading-relaxed">
                  {expandedSections.description
                    ? caseStudy.description
                    : `${truncateText(caseStudy.description, 150)}... `}
                  {caseStudy.description.length > 150 && (
                    <button
                      onClick={() => toggleSection("description")}
                      className="text-primary hover:text-primary/80 mt-2 inline-flex cursor-pointer items-center text-sm font-medium transition-colors"
                    >
                      {expandedSections.description ? (
                        <>
                          Show less <ChevronUp className="ml-1 h-3 w-3" />
                        </>
                      ) : (
                        <>
                          Read more <ChevronDown className="ml-1 h-3 w-3" />
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
              {/* Technologies - Visual Grid */}
              <Container className="flex flex-wrap items-center justify-center gap-2 pt-4 text-center">
                {caseStudy.technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="hover:bg-primary/10 cursor-default px-2 py-0.5 text-xs transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </Container>
            </div>
          </CardHeader>
          <CardContent>
            <Card>
              <div className="grid w-full items-center gap-0 lg:grid-cols-5 lg:justify-center">
                {/* Media Section - Takes more space */}
                <div className="relative lg:col-span-3">
                  <div className="bg-muted relative aspect-video overflow-hidden">
                    {caseStudy.embedId?.loom ? (
                      <>
                        <LoomEmbed
                          embedId={caseStudy.embedId.loom}
                          className="p-0"
                        />
                        <div className="bg-primary text-primary-foreground absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow-lg backdrop-blur-sm">
                          <Play className="h-3 w-3" />
                          Live Demo
                        </div>
                      </>
                    ) : caseStudy.embedId?.youtube ? (
                      <>
                        <YoutubeEmbed embedId={caseStudy.embedId.youtube} />
                        <div className="bg-destructive text-destructive-foreground absolute top-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow-lg backdrop-blur-sm">
                          <Play className="h-3 w-3" />
                          Case Video
                        </div>
                      </>
                    ) : (
                      <>
                        <Image
                          src={
                            caseStudy.imageUrl ||
                            "/placeholder.svg?height=600&width=800"
                          }
                          alt={`${caseStudy.name} preview`}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                        <div className="bg-background/90 text-foreground absolute bottom-4 left-4 flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-medium shadow-lg backdrop-blur-sm">
                          <Eye className="h-3 w-3" />
                          Live Site
                        </div>
                      </>
                    )}
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <Badge className="bg-secondary/90 text-secondary-foreground px-3 py-1.5 font-semibold shadow-lg backdrop-blur-sm">
                        {caseStudy.plan}
                      </Badge>
                    </div>
                    {/* Quick Stats Overlay */}
                    <div className="absolute right-4 bottom-4 flex gap-2">
                      <div className="bg-background/90 text-foreground flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-sm">
                        <Calendar className="h-3 w-3" />
                        {caseStudy.projectTimeline.durationDays}d
                      </div>
                      <div className="bg-background/90 text-foreground flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium shadow-lg backdrop-blur-sm">
                        <Zap className="h-3 w-3" />
                        {formatDate(caseStudy.projectTimeline.endDate)}
                      </div>
                    </div>
                  </div>
                </div>
                {/* Compact Content Section */}
                <div className="flex flex-col justify-between p-6 lg:col-span-2">
                  {/* Key Results - Visual List */}
                  <div className="mb-6">
                    <div className="mb-3 flex items-center justify-between">
                      <h4 className="text-foreground flex items-center gap-2">
                        <TrendingUp className="h-4 w-4" />
                        Results
                      </h4>
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
                  {/* Testimonial - Compact Visual */}
                  <div className="mb-6">
                    <TestimonialCard
                      upwork={true}
                      quote={caseStudy.testimonial.quote}
                      author={caseStudy.testimonial.author}
                      linkUrl={`/case-study/${caseStudy.id}`}
                      role={caseStudy.testimonial.role}
                      image={caseStudy.testimonial.image}
                    />
                  </div>
                  {/* Action Buttons - Visual Focus */}
                  <div className="flex flex-col gap-2 md:flex-row">
                    <Button asChild size="sm" className="group w-full">
                      <Link
                        href={caseStudyLink}
                        className="flex items-center justify-center gap-2"
                      >
                        <span className="font-semibold">Full Case Study</span>
                        <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="group w-full"
                    >
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
            </Card>
          </CardContent>
          {/* Analytics Comparison - Auto-Scrolling Carousel */}
          {caseStudy.analytics.images && (
            <div className="p-4">
              <div className="mb-12 space-y-4 text-center">
                <h2 className="">Before vs After Results for {caseStudy.id}</h2>
                <h4 className="text-muted-foreground mx-auto max-w-3xl">
                  The before screenshots shows that the conversion tracking was
                  not working, with ad spend of 1000$+ and after screenshots
                  shows the conversion tracking working.
                </h4>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {/* Before - Auto-Scrolling Carousel */}
                <Card className="group bg-destructive/10 overflow-hidden border-b transition-all hover:shadow-lg">
                  <div className="py-2 text-center">
                    <Badge
                      variant="destructive"
                      className="text-xs font-medium"
                    >
                      Before
                    </Badge>
                  </div>
                  <CardContent>
                    <div className="relative">
                      <div className="relative aspect-video overflow-hidden rounded-lg border shadow">
                        <Image
                          src={
                            caseStudy.analytics.images.before[
                              currentBeforeIndex
                            ] || "/placeholder.svg"
                          }
                          alt={`Before ${currentBeforeIndex + 1}`}
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      </div>
                      {/* Image Counter */}
                      {caseStudy.analytics.images.before.length > 1 && (
                        <div className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                          {currentBeforeIndex + 1} /{" "}
                          {caseStudy.analytics.images.before.length}
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
                <Card className="group bg-primary/10 overflow-hidden border-b transition-all hover:shadow-lg">
                  <div className="py-2 text-center">
                    <Badge className="text-xs font-medium">After</Badge>
                  </div>
                  <CardContent>
                    <div className="relative">
                      <div className="relative aspect-video overflow-hidden rounded-lg border shadow">
                        <Image
                          src={
                            caseStudy.analytics.images.after[
                              currentAfterIndex
                            ] || "/placeholder.svg"
                          }
                          alt={`After ${currentAfterIndex + 1}`}
                          fill
                          className="object-cover transition-opacity duration-500"
                        />
                      </div>
                      {/* Image Counter */}
                      {caseStudy.analytics.images.after.length > 1 && (
                        <div className="absolute top-2 right-2 rounded-full bg-black/70 px-2 py-1 text-xs text-white">
                          {currentAfterIndex + 1} /{" "}
                          {caseStudy.analytics.images.after.length}
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
    </section>
  );
}
