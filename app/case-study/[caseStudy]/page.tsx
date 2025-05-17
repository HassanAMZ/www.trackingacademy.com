"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import { Calendar, DollarSign, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use, useEffect } from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

interface CaseStudyPageProps {
  params: Promise<{
    caseStudy: string;
  }>;
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { caseStudy: caseStudyId } = use(params);
  const caseStudy = caseStudies.find((cs) => cs.id === caseStudyId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!caseStudy) {
    notFound();
  }

  // Conditional chart data for analytics (if available)
  const accuracyChartData = caseStudy.analytics
    ? [
        { metric: "Purchase", before: 60, after: 95 },
        { metric: "Signup", before: 65, after: 92 },
      ]
    : [];

  const recoveryChartData = caseStudy.analytics
    ? [
        {
          metric: "Ad Blocker",
          before: 0.5,
          after: caseStudy.analytics.recoveredFromAdBlockersPercentage,
        },
        {
          metric: "Tracking Prevention",
          before: 10,
          after: caseStudy.analytics.recoveredFromTrackingPreventionPercentage,
        },
      ]
    : [];

  const chartConfig = {
    before: {
      label: "Before Implementation",
      color: "hsl(var(--chart-1))",
    },
    after: {
      label: "After Implementation",
      color: "hsl(var(--chart-2))",
    },
  } satisfies ChartConfig;

  return (
    <Container className="py-4 space-y-8">
      <Link
        href="/case-study"
        className="text-primary hover:underline mb-6 inline-block"
      >
        ← Back to Case Studies
      </Link>
      <Card className="shadow">
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <CardTitle>{caseStudy.title}</CardTitle>
              <h4 className="text-muted-foreground mt-2">
                {caseStudy.description}
              </h4>
            </div>
            <Badge variant="secondary">{caseStudy.plan}</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2  space-y-6">
              <Image
                width={1080}
                height={1920}
                src={caseStudy.imageUrl || "/images/social-sharing.png"}
                alt={caseStudy.name}
                className="w-full rounded border"
              />

              <h2 className="">Project Overview</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-primary" />
                  <span>
                    <strong>Website:</strong>{" "}
                    <a
                      href={caseStudy.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {caseStudy.url}
                    </a>
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 mr-2 text-primary" />
                  <span>
                    <strong>Client:</strong> {caseStudy.client}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-primary" />
                  <span>
                    <strong>Timeline:</strong>{" "}
                    {caseStudy.projectTimeline.startDate} -{" "}
                    {caseStudy.projectTimeline.endDate} (
                    {caseStudy.projectTimeline.durationDays} days)
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="w-5 h-5 mr-2 text-primary" />
                  <span>
                    <strong>Budget:</strong> $
                    {caseStudy.budget.toLocaleString()}
                  </span>
                </div>
              </div>

              <h2 className="mb-4">Challenges Faced</h2>
              <div className="space-y-4 mb-6">
                {caseStudy.challenges.map((challenge, index) => (
                  <Card key={index}>
                    <CardContent>
                      <h4 className="text-muted-foreground">
                        <Button className="mr-2 " variant={"secondary"}>
                          {index + 1}
                        </Button>{" "}
                        {challenge}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="mb-4">Solutions Implemented</h2>
              <div className="space-y-4 mb-6">
                {caseStudy.solutions.map((solution, index) => (
                  <Card key={index}>
                    <CardContent>
                      <h4 className="text-muted-foreground">
                        <Button className="mr-2 " variant={"secondary"}>
                          {index + 1}
                        </Button>{" "}
                        {solution}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="mb-4">Project Milestones</h2>
              <div className="space-y-4 mb-6">
                {caseStudy.milestones.map((milestone, index) => (
                  <Card key={index} className="py-8 px-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <h4>{milestone.name}</h4>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                        <p className="mt-1">
                          <strong>Expected Outcome:</strong>{" "}
                          {milestone.expectedOutcome}
                        </p>
                      </div>
                      <Badge variant="outline">Day {milestone.day}</Badge>
                    </div>
                  </Card>
                ))}
              </div>

              <h2 className="mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {caseStudy.technologies.map((tech, index) => (
                  <Badge key={index} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 flex flex-wrap gap-x-2">
                    {caseStudy.platforms.map((platform, index) => (
                      <li key={index} className="flex items-center">
                        <Button size="sm" variant={"secondary"}>
                          {platform}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Testimonial</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="italic text-muted-foreground mb-4">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="w-10 h-10 mr-4">
                      <AvatarImage
                        src={caseStudy.testimonial.image}
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
                      <p>{caseStudy.testimonial.author}</p>
                      {/* <p className="text-muted-foreground">
                        {caseStudy.testimonial.role}
                      </p> */}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Button asChild className="w-full">
                <Link
                  href={caseStudy.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit {caseStudy.name}
                </Link>
              </Button>

              <h2 className="mb-4">Results and Impact</h2>
              <div className="space-y-6 mb-6">
                {caseStudy.analytics && (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle>Tracking Accuracy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer
                          config={chartConfig}
                          className="min-h-[200px] w-full"
                        >
                          <BarChart accessibilityLayer data={accuracyChartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                              dataKey="metric"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar
                              dataKey="before"
                              className="fill-secondary"
                              radius={4}
                            />
                            <Bar
                              dataKey="after"
                              className="fill-primary"
                              radius={4}
                            />
                          </BarChart>
                        </ChartContainer>
                        <p className="text-muted-foreground mt-4">
                          Improved tracking accuracy by{" "}
                          <span className="text-primary font-bold">
                            {caseStudy.analytics
                              .recoveredFromAdBlockersPercentage +
                              caseStudy.analytics
                                .recoveredFromTrackingPreventionPercentage}
                            % .
                          </span>
                        </p>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader>
                        <CardTitle>Recovery from Blockers</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ChartContainer
                          config={chartConfig}
                          className="min-h-[200px] w-full"
                        >
                          <BarChart accessibilityLayer data={recoveryChartData}>
                            <CartesianGrid vertical={false} />
                            <XAxis
                              dataKey="metric"
                              tickLine={false}
                              tickMargin={10}
                              axisLine={false}
                            />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <ChartLegend content={<ChartLegendContent />} />
                            <Bar
                              dataKey="before"
                              className="fill-secondary"
                              radius={4}
                            />
                            <Bar
                              dataKey="after"
                              className="fill-primary"
                              radius={4}
                            />
                          </BarChart>
                        </ChartContainer>
                        <p className="text-muted-foreground mt-4">
                          Enhanced data capture from ad blockers and tracking
                          prevention.
                        </p>
                      </CardContent>
                    </Card>
                  </>
                )}
                <Card>
                  <CardHeader>
                    <CardTitle>Business Impact</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className=" text-muted-foreground space-y-4">
                      {caseStudy.results.map((result, index) => (
                        <li key={index}>
                          <Button className="mr-2 " variant={"secondary"}>
                            {index + 1}
                          </Button>{" "}
                          {result}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Primary CTA Button */}
      <Button
        size="lg"
        className="hover:bg-primary/90 flex flex-col py-20 text-center text-xl font-bold text-wrap whitespace-pre-wrap sm:py-16 md:py-12 mx-auto "
        asChild
      >
        <Link href={`book-a-meeting`}>
          <div>
            🔒 Book Your Free 15-Minute Setup Call
            <br />
            <span className="mt-2 block text-sm font-medium ">
              We’ll confirm your eligibility, answer questions, and reserve your
              $300 discount — setup begins right after
            </span>
          </div>
        </Link>
      </Button>
    </Container>
  );
}
