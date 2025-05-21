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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CaseStudy } from "@/data/case-studies";
import {
  Calendar,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Clock,
  DollarSign,
  ExternalLink,
  Star,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import TestimonialCardUpwork from "../testimonial/testimonial-card-upwork";
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
    <Container className="py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline" className="mb-2">
                {caseStudy.plan} Plan
              </Badge>
              <h1 className="text-3xl font-bold tracking-tight mb-4">
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

            <div className="relative aspect-video rounded-lg overflow-hidden border">
              <Image
                src={
                  caseStudy.imageUrl || "/placeholder.svg?height=400&width=600"
                }
                alt={`${caseStudy.name} desktop view`}
                fill
                className="object-cover scale-x-102"
              />
              <div className="absolute bottom-2 right-2 bg-background/80 text-xs px-2 py-1 rounded">
                Desktop View
              </div>
            </div>

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
                variant="secondary"
                size="sm"
                className="flex items-center gap-1"
              >
                <Calendar className="h-4 w-4" />{" "}
                {formatDate(caseStudy.projectTimeline.startDate)} -{" "}
                {formatDate(caseStudy.projectTimeline.endDate)}
              </Button>
              <Badge variant="outline" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />{" "}
                {caseStudy.projectTimeline.durationDays} days
              </Badge>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="milestones">Milestones</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Challenges</h3>
                  <ul className="space-y-2">
                    {caseStudy.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 bg-red-100 text-red-600 p-0.5 rounded-full flex items-center justify-center">
                          <ChevronDown className="h-3 w-3" />
                        </span>
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Solutions</h3>
                  <ul className="space-y-2">
                    {caseStudy.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 bg-green-100 text-green-600 p-0.5 rounded-full flex items-center justify-center">
                          <Check className="h-3 w-3" />
                        </span>
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Results</h3>
                  <ul className="space-y-2">
                    {caseStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="mt-1 bg-blue-100 text-blue-600 p-0.5 rounded-full flex items-center justify-center">
                          <Star className="h-3 w-3" />
                        </span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="milestones" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {caseStudy.milestones.map((milestone, index) => (
                    <Card key={index}>
                      <CardHeader className="pb-2 ">
                        <CardTitle className="flex items-center gap-2">
                          <Badge variant={"outline"} className="px-3 py-2">
                            {index + 1}
                          </Badge>

                          {milestone.name}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <p className="text-sm text-muted-foreground">
                          {milestone.description}
                        </p>
                        <div>
                          <p className="text-xs font-medium mb-1">
                            Expected Outcome:
                          </p>
                          <p className="text-sm">{milestone.expectedOutcome}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
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
                          {
                            caseStudy.analytics
                              .recoveredFromAdBlockersPercentage
                          }
                          %
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
              </TabsContent>

              <TabsContent value="details" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Project Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Owner
                        </span>
                        <span className="text-sm font-medium">
                          {caseStudy.owner}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Client
                        </span>
                        <span className="text-sm font-medium">
                          {caseStudy.client}
                        </span>
                      </div>
                      {/* <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
                          Budget
                        </span>
                        <span className="text-sm font-medium">
                          ${caseStudy.budget.toLocaleString()}
                        </span>
                      </div> */}
                      <Separator />
                      <div className="flex justify-between">
                        <span className="text-sm text-muted-foreground">
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
                        <h4 className="text-sm font-medium mb-2">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {caseStudy.technologies.map((tech, index) => (
                            <Badge key={index} variant="secondary">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-sm font-medium mb-2">Platforms</h4>
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
              </TabsContent>
            </Tabs>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-4 space-y-6">
            <Card className="overflow-hidden">
              <CardHeader className="bg-green-50 dark:bg-green-950/20">
                <CardTitle className="text-lg">Client Testimonial</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center mb-4">
                  <Avatar className="h-16 w-16 mb-2">
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
                    <p className="text-sm text-muted-foreground">
                      {caseStudy.testimonial.role}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <blockquote className="italic text-center">
                  "{caseStudy.testimonial.quote}"
                </blockquote>
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

                {/* <div className="flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                    <div className="flex gap-2">
                    <p className="text-sm font-medium">Budget</p>
                    <p className="text-sm text-muted-foreground">
                      ${caseStudy.budget.toLocaleString()}
                    </p>
                  </div>
                </div> */}

                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 text-muted-foreground" />
                  <div className="flex gap-2">
                    <p className="text-sm font-medium">Project Owner</p>
                    <p className="text-sm text-muted-foreground">
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
      <TestimonialCardUpwork
        href={`/case-study/${caseStudy.id}`}
        title={caseStudy.name}
        dateRange={`${formatDate(caseStudy.projectTimeline.startDate)} - ${formatDate(caseStudy.projectTimeline.endDate)}`}
        quote={caseStudy.testimonial.quote}
      />
    </Container>
  );
}
