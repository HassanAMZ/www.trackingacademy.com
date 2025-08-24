"use client";

import LoomEmbed from "@/components/global/loom-embed";
import MuxEmbed from "@/components/global/mux-embed";
import YoutubeEmbed from "@/components/global/youtube-embed";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CaseStudy } from "@/data/case-studies";
import { CheckCircle, ExternalLink, Lock, Play, Shield, TrendingUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

interface CaseStudyFeaturedVideoProps {
  caseStudy: CaseStudy;
  className?: string;
  verticalVideo?: boolean;
  darkMode?: boolean;
}

const CaseStudyFeaturedVideo: FC<CaseStudyFeaturedVideoProps> = ({
  caseStudy,
  className = "",
  verticalVideo = false,
  darkMode = false,
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  console.log("Description length:", caseStudy.description.length); // Debug description length
  const renderVideo = () => {
    if (caseStudy.embedId?.mux) {
      return (
        <div className="relative">
          <MuxEmbed
            embedId={caseStudy.embedId.mux}
            className="!p-0"
            verticalVideo={caseStudy.embedId.muxVertical || verticalVideo}
          />
          <div className="absolute top-2 left-2 flex items-center gap-2 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground shadow backdrop-blur-sm sm:top-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-sm">
            <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            <span> {caseStudy.testimonial.author}'s Video Review</span>
          </div>
        </div>
      );
    } else if (caseStudy.embedId?.youtube) {
      return (
        <div className="relative">
          <YoutubeEmbed
            embedId={caseStudy.embedId.youtube}
            className="!p-0"
            verticalVideo={caseStudy.embedId.youtubeVertical || verticalVideo}
          />
          <div className="absolute top-2 left-2 flex items-center gap-2 rounded-full bg-destructive px-2 py-1 text-xs font-medium text-destructive-foreground shadow backdrop-blur-sm sm:top-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-sm">
            <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            <span className="hidden sm:inline">Case Study Video</span>
            <span className="sm:hidden">Video</span>
          </div>
        </div>
      );
    } else if (caseStudy.embedId?.loom) {
      return (
        <div className="relative">
          <LoomEmbed
            embedId={caseStudy.embedId.loom}
            className="!p-0"
            verticalVideo={caseStudy.embedId.loomVertical || verticalVideo}
          />
          <div className="absolute top-2 left-2 flex items-center gap-2 rounded-full bg-secondary px-2 py-1 text-xs font-medium text-secondary-foreground shadow backdrop-blur-sm sm:top-4 sm:left-4 sm:px-3 sm:py-1.5 sm:text-sm">
            <Play className="h-2.5 w-2.5 sm:h-3 sm:w-3" />
            <span className="hidden sm:inline">Case Study Video</span>
            <span className="sm:hidden">Video</span>
          </div>
        </div>
      );
    } else {
      return (
        <div className="relative aspect-video overflow-hidden rounded-lg border bg-muted">
          <Image
            src={caseStudy.imageUrl || "/placeholder.svg?height=400&width=600"}
            alt={`${caseStudy.name} case study`}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div
            className={`absolute bottom-4 left-4 rounded bg-background/80 px-3 py-1.5 text-sm font-medium text-foreground`}
          >
            Featured Image
          </div>
        </div>
      );
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-destructive";
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className={`py-4 ${className}`}>
        <Card
          className={`overflow-hidden border-0 border-border bg-gradient-to-br from-card via-muted to-card/50 shadow-lg`}
        >
          <CardContent className="p-0">
            <div
              className={`grid w-full items-start gap-6 ${
                verticalVideo ? "grid-cols-1 lg:grid-cols-5 lg:gap-8" : "grid-cols-1 gap-8"
              }`}
            >
              {/* Content Section */}
              <div className={`space-y-6 p-4 ${verticalVideo ? "lg:col-span-3 lg:p-8" : "lg:p-8"}`}>
                {/* Header */}
                <div className="space-y-3">
                  {/* <div className="flex items-center gap-2">
                   <Badge variant="secondary" className="bg-primary/10 text-primary">
                     {caseStudy.plan} Plan
                   </Badge>
                   <Badge variant="outline" className="border-primary/20 text-primary">
                     {caseStudy.projectTimeline.durationDays} days
                   </Badge>
                 </div> */}

                  <h2 className={`text-xl font-bold tracking-tight text-foreground lg:text-2xl`}>
                    {caseStudy.title}
                  </h2>

                  <div className="space-y-1">
                    <p
                      className={`leading-relaxed text-muted-foreground ${
                        !showFullDescription ? "line-clamp-2" : ""
                      }`}
                    >
                      {caseStudy.description}
                    </p>
                    {caseStudy.description.length > 170 && (
                      <div className="mt-2 flex items-center">
                        {!showFullDescription && (
                          <span className="mr-1 text-muted-foreground">...</span>
                        )}
                        <button
                          onClick={() => setShowFullDescription(!showFullDescription)}
                          className="cursor-pointer text-sm font-medium text-primary underline hover:text-primary/80"
                        >
                          {showFullDescription ? "Read Less" : "Read More"}
                        </button>
                      </div>
                    )}
                  </div>
                </div>

                {/* Video Section - Show here for non-vertical videos, and for vertical videos on mobile */}
                {!verticalVideo && <div className="w-full">{renderVideo()}</div>}
                {verticalVideo && <div className="w-full lg:hidden">{renderVideo()}</div>}

                {/* Analytics Highlights */}
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  <div className="rounded-lg border border-border bg-muted/30 p-3 sm:p-4 dark:bg-muted/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <TrendingUp className="hidden h-4 w-4 sm:block" />
                      Tracking Accuracy
                    </div>
                    <div
                      className={`text-xl font-bold sm:text-2xl ${getScoreColor(caseStudy.analytics.accuracy)}`}
                    >
                      {caseStudy.analytics.accuracy}%
                    </div>
                  </div>

                  {/* <div className="rounded-lg border border-border bg-muted/30 p-3 sm:p-4 dark:bg-muted/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 hidden sm:block" />
                      Timeline
                    </div>
                    <div className="text-xl font-bold text-foreground sm:text-2xl">
                      {caseStudy.analytics.period}
                    </div>
                  </div> */}

                  <div className="rounded-lg border border-border bg-muted/30 p-3 sm:p-4 dark:bg-muted/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="hidden h-4 w-4 sm:block" />
                      Ad Blockers Recovery
                    </div>
                    <div className="text-xl font-bold text-green-600 sm:text-2xl">
                      {caseStudy.analytics.recoveredFromAdBlockersPercentage}%
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-muted/30 p-3 sm:p-4 dark:bg-muted/50">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Lock className="hidden h-4 w-4 sm:block" />
                      ITP Recovery
                    </div>
                    <div className="text-xl font-bold text-green-600 sm:text-2xl">
                      {caseStudy.analytics.recoveredFromTrackingPreventionPercentage}%
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="rounded-lg border border-border bg-muted/30 p-4 sm:p-6 dark:border-primary/10 dark:bg-primary/5">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <Image
                        src={caseStudy.testimonial.image}
                        alt={caseStudy.testimonial.author}
                        width={1080}
                        height={1080}
                        className="aspect-square size-full object-cover"
                      />
                      <AvatarFallback className="bg-muted text-muted-foreground dark:bg-primary/10 dark:text-primary">
                        {caseStudy.testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 space-y-2">
                      <blockquote className={`text-sm text-muted-foreground italic`}>
                        "{caseStudy.testimonial.quote}"
                      </blockquote>

                      <div>
                        <div className={`font-semibold text-foreground`}>
                          {caseStudy.testimonial.author}
                        </div>
                        <div className={`text-sm text-muted-foreground`}>
                          {caseStudy.testimonial.role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Key Results */}
                <div className="space-y-3">
                  <h4 className={`font-semibold text-foreground`}>Key Results</h4>
                  <div className="space-y-2">
                    {caseStudy.results.slice(0, 3).map((result, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                        <span className={`text-sm text-muted-foreground`}>{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    asChild
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                  >
                    <Link href={`/case-study/${caseStudy.id}`}>View Full Case Study</Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="w-full border-border text-foreground hover:bg-accent hover:text-accent-foreground sm:w-auto"
                  >
                    <Link href={caseStudy.url} className="flex items-center gap-2">
                      Visit Website <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Right Side - Video/Image - Only show here when verticalVideo is true on desktop */}
              {verticalVideo && (
                <div className="order-first hidden w-full p-4 lg:order-last lg:col-span-2 lg:block lg:p-8">
                  {renderVideo()}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CaseStudyFeaturedVideo;
