"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { CaseStudy } from "@/data/case-studies";
import {
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  ExternalLink,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import LoomEmbed from "../global/loom-embed";
import YoutubeEmbed from "../global/youtube-embed";
import { TestimonialCard } from "../testimonial/testimonial-card";
import Container from "../ui/container";

export default function CaseStudyComponent({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
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
              <h1 className="mb-4 text-3xl font-bold tracking-tight">
                {caseStudy.title}
              </h1>
              <div className="relative">
                <p
                  className={`text-muted-foreground ${!showFullDescription && "line-clamp-3"}`}
                >
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
                <LoomEmbed embedId={caseStudy.embedId.loom} />
              ) : caseStudy.embedId?.youtube ? (
                <YoutubeEmbed embedId={caseStudy.embedId.youtube} />
              ) : (
                <Image
                  src={
                    caseStudy.imageUrl ||
                    "/placeholder.svg?height=400&width=600"
                  }
                  alt={`${caseStudy.name} desktop view`}
                  fill
                  className="scale-x-102 object-cover"
                />
              )}

              <div className="bg-background/80 absolute right-2 bottom-2 rounded px-2 py-1 text-xs">
                Desktop View
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button asChild variant="outline" size="sm">
                <Link
                  href={caseStudy.url}
                  target="_blank"
                  className="flex items-center gap-1"
                >
                  Visit Website <ExternalLink className="h-3 w-3" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Calendar className="h-4 w-4" />{" "}
                {formatDate(caseStudy.projectTimeline.endDate)}
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-1"
              >
                <Clock className="h-3 w-3" />{" "}
                {caseStudy.projectTimeline.durationDays} days
              </Button>
            </div>

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
                      <p className="text-muted-foreground text-sm">
                        {milestone.description}
                      </p>
                      <div>
                        <p className="mb-1 text-xs font-medium">
                          Expected Outcome:
                        </p>
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
                      <span className="text-muted-foreground text-sm">
                        Owner
                      </span>
                      <span className="text-sm font-medium">
                        {caseStudy.owner}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Client
                      </span>
                      <span className="text-sm font-medium">
                        {caseStudy.client}
                      </span>
                    </div>
                    <Separator />
                    <div className="flex justify-between">
                      <span className="text-muted-foreground text-sm">
                        Duration
                      </span>
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
            <Card className="overflow-hidden">
              <CardHeader className="bg-green-50 dark:bg-green-950/20">
                <CardTitle className="text-lg">Client Testimonial</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="mb-4 flex flex-col items-center text-center">
                  <Avatar className="mb-2 h-16 w-16">
                    <AvatarImage
                      src={caseStudy.testimonial.image || "/placeholder.svg"}
                      alt={caseStudy.testimonial.author}
                    />
                    <AvatarFallback>
                      {caseStudy.testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">
                      {caseStudy.testimonial.author}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {caseStudy.testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="mb-4 flex justify-center">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="text-center italic">
                  {caseStudy.testimonial.quote}
                </blockquote>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Analytics Overview</CardTitle>
                <CardDescription>
                  Data collected over {caseStudy.analytics.period}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Tracking Accuracy
                    </span>
                    <span className="text-sm font-medium">
                      {caseStudy.analytics.accuracy}%
                    </span>
                  </div>
                  <Progress
                    value={caseStudy.analytics.accuracy}
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Recovered from Ad Blockers
                    </span>
                    <span className="text-sm font-medium">
                      {caseStudy.analytics.recoveredFromAdBlockersPercentage}%
                    </span>
                  </div>
                  <Progress
                    value={
                      caseStudy.analytics.recoveredFromAdBlockersPercentage
                    }
                    className="h-2"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm font-medium">
                      Recovered from Tracking Prevention
                    </span>
                    <span className="text-sm font-medium">
                      {
                        caseStudy.analytics
                          .recoveredFromTrackingPreventionPercentage
                      }
                      %
                    </span>
                  </div>
                  <Progress
                    value={
                      caseStudy.analytics
                        .recoveredFromTrackingPreventionPercentage
                    }
                    className="h-2"
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
                  <Calendar className="text-muted-foreground h-4 w-4" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Start Date</p>
                    <p className="text-muted-foreground text-sm">
                      {formatDate(caseStudy.projectTimeline.startDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="text-muted-foreground h-4 w-4" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">End Date</p>
                    <p className="text-muted-foreground text-sm">
                      {formatDate(caseStudy.projectTimeline.endDate)}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Clock className="text-muted-foreground h-4 w-4" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Duration</p>
                    <p className="text-muted-foreground text-sm">
                      {caseStudy.projectTimeline.durationDays} days
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <User className="text-muted-foreground h-4 w-4" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Project Owner</p>
                    <p className="text-muted-foreground text-sm">
                      {caseStudy.owner}
                    </p>
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
                    <div
                      key={index}
                      className="grid grid-cols-[auto_1fr] items-start gap-2"
                    >
                      <CheckCircle className="text-primary h-6 w-6" />
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
        quote={caseStudy.testimonial.quote}
        projectName={caseStudy.title}
        author={caseStudy.testimonial.author}
        linkUrl={`/case-study/${caseStudy.id}`}
      />
    </Container>
  );
}
