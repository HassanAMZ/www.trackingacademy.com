"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CaseStudy } from "@/data/case-studies";
import {
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  Clock,
  ExternalLink,
  Eye,
  Star,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import LoomEmbed from "../global/loom-embed";
import MuxEmbed from "../global/mux-embed";
import YoutubeEmbed from "../global/youtube-embed";
import { TestimonialCard } from "../testimonial/testimonial-card";
import Container from "../ui/container";

export default function CaseStudyComponent({ caseStudy }: { caseStudy: CaseStudy }) {
  const [showFullDescription, setShowFullDescription] = useState(false);
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
      }, 7000);

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
    <Container className="space-y-8 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-8">
            {/* Header Section */}
            <div>
              <Badge variant="outline" className="mb-2">
                {caseStudy.plan} Plan
              </Badge>
              <h1 className="mb-4 text-3xl font-bold tracking-tight">{caseStudy.title}</h1>
              <div className="relative">
                <p className={` ${!showFullDescription && "line-clamp-3"}`}>
                  {caseStudy.description}
                </p>
                {caseStudy.description.length > 200 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowFullDescription(!showFullDescription)}
                    className="mt-2 flex items-center gap-1 text-sm"
                  >
                    {showFullDescription ? (
                      <>
                        Show less <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Read more <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                )}
              </div>
            </div>

            {/* Project Image */}
            <div className="relative aspect-video overflow-hidden rounded-lg border">
              {caseStudy.embedId?.loom ? (
                <LoomEmbed embedId={caseStudy.embedId.loom} className="p-0" />
              ) : caseStudy.embedId?.youtube ? (
                <YoutubeEmbed embedId={caseStudy.embedId.youtube} className="p-0" />
              ) : (
                <Image
                  src={caseStudy.imageUrl || "/placeholder.svg?height=400&width=600"}
                  alt={`${caseStudy.name} desktop view`}
                  width={1920}
                  height={1080}
                  className="w-full scale-x-102 rounded-lg object-cover"
                />
              )}

              <div className="absolute right-2 bottom-2 rounded bg-background/80 px-2 py-1 text-xs">
                Desktop View
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link href={caseStudy.url} className="flex items-center gap-1">
                  Visit Website <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> {formatDate(caseStudy.projectTimeline.endDate)}
              </Button>
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Clock className="h-3 w-3" /> {caseStudy.projectTimeline.durationDays} days
              </Button>
            </div>

            {/* Analytics Comparison - Auto-Scrolling Carousel with Modal */}
            {caseStudy.analytics.images && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Before vs After Results for {caseStudy.id}</h2>
                <div className="grid gap-4 md:grid-cols-2">
                  {/* Before - Auto-Scrolling Carousel */}
                  <Card className="group overflow-hidden border-b bg-destructive/10 transition-all hover:shadow-lg">
                    <div className="py-2 text-center">
                      <Badge variant="destructive" className="text-xs font-medium">
                        Before
                      </Badge>
                    </div>
                    <CardContent className="px-3 py-6 md:p-6">
                      <div className="relative">
                        <div
                          className="group/image relative aspect-video cursor-pointer overflow-hidden rounded-lg border shadow"
                          onClick={() => openModal("before", currentBeforeIndex)}
                        >
                          <Image
                            src={
                              caseStudy.analytics.images.before[currentBeforeIndex] ||
                              "/placeholder.svg"
                            }
                            alt={`Before ${currentBeforeIndex + 1}`}
                            width={1920}
                            height={1080}
                            className="w-full rounded-lg object-cover transition-all duration-300 group-hover/image:scale-105"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/image:bg-black/20">
                            <div className="rounded-full bg-white/90 p-2 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
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
                  <Card className="group overflow-hidden border-b bg-primary/10 transition-all hover:shadow-lg">
                    <div className="py-2 text-center">
                      <Badge className="text-xs font-medium">After</Badge>
                    </div>
                    <CardContent className="px-3 py-6 md:p-6">
                      <div className="relative">
                        <div
                          className="group/image relative aspect-video cursor-pointer overflow-hidden rounded-lg border shadow"
                          onClick={() => openModal("after", currentAfterIndex)}
                        >
                          <Image
                            src={
                              caseStudy.analytics.images.after[currentAfterIndex] ||
                              "/placeholder.svg"
                            }
                            alt={`After ${currentAfterIndex + 1}`}
                            width={1920}
                            height={1080}
                            className="w-full rounded-lg object-cover transition-all duration-300 group-hover/image:scale-105"
                          />
                          {/* Hover overlay */}
                          <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover/image:bg-black/20">
                            <div className="rounded-full bg-white/90 p-2 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100">
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

            {/* Challenges Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Challenges</h2>
              <ul className="space-y-3">
                {caseStudy.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex items-center justify-center rounded-full bg-red-100 p-1 text-red-600">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Solutions</h2>
              <ul className="space-y-3">
                {caseStudy.solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex items-center justify-center rounded-full bg-green-100 p-1 text-green-600">
                      <Check className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results Section */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Results</h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="mt-1 flex items-center justify-center rounded-full bg-blue-100 p-1 text-blue-600">
                      <Star className="h-4 w-4" />
                    </span>
                    <span className="text-muted-foreground">{result}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Milestones Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Project Milestones</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {caseStudy.milestones.map((milestone, index) => (
                  <Card key={index}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2">
                        <Badge variant={"outline"} className="px-3 py-1">
                          {index + 1}
                        </Badge>
                        {milestone.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{milestone.description}</p>
                      <div>
                        <p className="mb-1 text-xs font-medium">Expected Outcome:</p>
                        <p className="text-sm">{milestone.expectedOutcome}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Project Details Section */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Project Details</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Project Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Owner</span>
                      <span className="text-sm font-medium">{caseStudy.owner}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Client</span>
                      <span className="text-sm font-medium">{caseStudy.client}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Duration</span>
                      <span className="text-sm font-medium">
                        {caseStudy.projectTimeline.durationDays} days
                      </span>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Technologies & Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="mb-2 text-sm font-medium">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="mb-2 text-sm font-medium">Platforms</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.platforms.map((platform, index) => (
                          <Badge key={index} variant="outline">
                            {platform}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            {/* Video Section - Priority: Mux > YouTube > Loom */}
            {(caseStudy.embedId?.mux || caseStudy.embedId?.youtube || caseStudy.embedId?.loom) && (
              <>
                {caseStudy.embedId?.mux && (
                  <MuxEmbed
                    embedId={caseStudy.embedId.mux}
                    className="!p-0"
                    verticalVideo={caseStudy.embedId.muxVertical || false}
                  />
                )}
              </>
            )}

            <Card className="overflow-hidden border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 dark:border-green-800 dark:from-green-950/30 dark:to-emerald-950/30">
              <CardHeader className="bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/40 dark:to-emerald-900/40">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-600/20">
                    <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <CardTitle className="text-lg text-green-800 dark:text-green-200">
                    Client Testimonial
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4 flex flex-col items-center text-center">
                  <Avatar className="mb-3 h-20 w-20 ring-4 ring-green-100 dark:ring-green-900/50">
                    <Image
                      src={caseStudy.testimonial.image || "/placeholder.svg"}
                      alt={caseStudy.testimonial.author}
                      width={1080}
                      height={1080}
                      className="aspect-square size-full object-cover"
                    />

                    <AvatarFallback className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                      {caseStudy.testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-green-900 dark:text-green-100">
                      {caseStudy.testimonial.author}
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-300">
                      {caseStudy.testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400 drop-shadow-sm"
                    />
                  ))}
                </div>

                <blockquote className="text-center leading-relaxed text-green-800 italic dark:text-green-200">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 dark:border-blue-800 dark:from-blue-950/30 dark:to-indigo-950/30">
              <CardHeader className="bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/40 dark:to-indigo-900/40">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600/20">
                    <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <div>
                    <CardTitle className="text-blue-800 dark:text-blue-200">
                      Analytics Overview
                    </CardTitle>
                    <CardDescription className="text-blue-600 dark:text-blue-300">
                      Data collected over {caseStudy.analytics.period}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 pt-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                        Tracking Accuracy
                      </span>
                    </div>
                    <span className="text-lg font-bold text-blue-800 dark:text-blue-200">
                      {caseStudy.analytics.accuracy}%
                    </span>
                  </div>
                  <Progress
                    value={caseStudy.analytics.accuracy}
                    className="h-3 bg-blue-100 dark:bg-blue-900/50"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                        Ad Blockers Recovery
                      </span>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      +{caseStudy.analytics.recoveredFromAdBlockersPercentage}%
                    </span>
                  </div>
                  <Progress
                    value={caseStudy.analytics.recoveredFromAdBlockersPercentage}
                    className="h-3 bg-blue-100 dark:bg-blue-900/50"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-purple-500"></div>
                      <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                        ITP Recovery
                      </span>
                    </div>
                    <span className="text-lg font-bold text-green-600">
                      +{caseStudy.analytics.recoveredFromTrackingPreventionPercentage}%
                    </span>
                  </div>
                  <Progress
                    value={caseStudy.analytics.recoveredFromTrackingPreventionPercentage}
                    className="h-3 bg-blue-100 dark:bg-blue-900/50"
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Project Timeline</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Start Date</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(caseStudy.projectTimeline.startDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">End Date</p>
                    <p className="text-sm text-muted-foreground">
                      {formatDate(caseStudy.projectTimeline.endDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.projectTimeline.durationDays} days
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Project Owner</p>
                    <p className="text-sm text-muted-foreground">{caseStudy.owner}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Key Results</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-4">
                  {caseStudy.results.slice(0, 3).map((result, index) => (
                    <div key={index} className="grid grid-cols-[auto_1fr] items-start gap-2">
                      <CheckCircle className="h-6 w-6 text-primary" />
                      <p className="text-sm">{result}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <TestimonialCard
        upwork={true}
        image={caseStudy.testimonial.image}
        role={caseStudy.testimonial.role}
        quote={caseStudy.testimonial.quote}
        projectName={caseStudy.title}
        author={caseStudy.testimonial.author}
        linkUrl={`/case-study/${caseStudy.id}`}
      />

      {/* Image Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="w-full max-w-4xl border-0 bg-transparent p-0 [&>button]:hidden">
          <div className="relative overflow-hidden rounded-lg bg-background">
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b p-4">
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
                width={1920}
                height={1080}
                className="w-full rounded-lg object-cover"
              />

              {/* Navigation Arrows */}
              {getCurrentModalImages().length > 1 && (
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

            {/* Modal Footer with Thumbnails */}
            {getCurrentModalImages().length > 1 && (
              <div className="border-t p-4">
                <div className="flex gap-2 overflow-x-auto">
                  {getCurrentModalImages().map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setModalImageIndex(index)}
                      className={`h-16 w-16 flex-shrink-0 overflow-hidden rounded border-2 ${
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
                        className="h-full w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </Container>
  );
}
