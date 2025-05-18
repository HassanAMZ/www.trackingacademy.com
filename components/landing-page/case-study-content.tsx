// app/case-study/[caseStudy]/CaseStudyContent.tsx
"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { CaseStudy } from "@/data/case-studies";
import { Calendar, DollarSign, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

interface CaseStudyContentProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyContent({ caseStudy }: CaseStudyContentProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container className="space-y-8 py-4">
      <Link
        href="/case-study"
        className="text-primary mb-6 inline-block hover:underline"
      >
        ← Back to Case Studies
      </Link>
      <Card className="shadow">
        <CardHeader>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="py-4">{caseStudy.title}</h1>
              <p className="text-muted-foreground mt-2">
                {caseStudy.description}
              </p>
            </div>
            <Badge variant="secondary" className=" text-nowrap ">
              {caseStudy.plan}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="space-y-8 lg:col-span-2">
              <div className="overflow-hidden rounded-lg">
                <Image
                  width={1080}
                  height={1920}
                  src={caseStudy.imageUrl || "/images/social-sharing.png"}
                  alt={caseStudy.name}
                  className="scale-102 object-cover"
                />
              </div>

              <h2>Project Overview</h2>
              <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex items-center">
                  <Globe className="text-primary mr-2 h-5 w-5" />
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
                  <Users className="text-primary mr-2 h-5 w-5" />
                  <span>
                    <strong>Client:</strong> {caseStudy.client}
                  </span>
                </div>
                <div className="flex items-center">
                  <Calendar className="text-primary mr-2 h-5 w-5" />
                  <span>
                    <strong>Timeline:</strong>{" "}
                    {caseStudy.projectTimeline.startDate} -{" "}
                    {caseStudy.projectTimeline.endDate} (
                    {caseStudy.projectTimeline.durationDays} days)
                  </span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="text-primary mr-2 h-5 w-5" />
                  <span>
                    <strong>Budget:</strong> $
                    {caseStudy.budget.toLocaleString()}
                  </span>
                </div>
              </div>

              <h2 className="mb-4">Challenges Faced</h2>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {caseStudy.challenges.map((challenge, index) => (
                  <Card key={index}>
                    <CardContent>
                      <h4 className="text-muted-foreground">
                        <Button className="mr-2" variant="secondary">
                          {index + 1}
                        </Button>{" "}
                        {challenge}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="mb-4">Solutions Implemented</h2>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {caseStudy.solutions.map((solution, index) => (
                  <Card key={index}>
                    <CardContent>
                      <h4 className="text-muted-foreground">
                        <Button className="mr-2" variant="secondary">
                          {index + 1}
                        </Button>{" "}
                        {solution}
                      </h4>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h2 className="mb-4">Project Milestones</h2>
              <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                {caseStudy.milestones.map((milestone, index) => (
                  <Card key={index} className="px-4 py-8">
                    <div className="flex items-center justify-between">
                      <div className="space-y-2">
                        <Badge variant="outline">Milestone {index + 1}</Badge>
                        <h4>{milestone.name}</h4>
                        <p className="text-muted-foreground">
                          {milestone.description}
                        </p>
                        <p className="mt-1">
                          <strong>Expected Outcome:</strong>{" "}
                          {milestone.expectedOutcome}
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <h2 className="mb-4">Technologies Used</h2>
              <div className="mb-6 flex flex-wrap gap-2">
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
                  <CardTitle>Testimonial</CardTitle>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-primary mb-4 italic font-semibold">
                    "{caseStudy.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Avatar className="mr-4 h-10 w-10">
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
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="mb-6 space-y-6">
                {caseStudy.analytics && (
                  <>
                    <Card>
                      <CardHeader>
                        <CardTitle>Tracking Accuracy</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground mt-4">
                          Improved tracking accuracy to{" "}
                          <span className="text-primary font-bold">
                            {caseStudy.analytics.accuracy}
                            %.
                          </span>
                        </p>

                        <p className="text-muted-foreground">
                          Enhanced data capture from ad blockers and tracking
                          prevention by{" "}
                          <span className="text-primary font-bold">
                            {caseStudy.analytics
                              .recoveredFromAdBlockersPercentage +
                              caseStudy.analytics
                                .recoveredFromTrackingPreventionPercentage}
                            %.
                          </span>
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
                    <ul className="text-muted-foreground space-y-4">
                      {caseStudy.results.map((result, index) => (
                        <li key={index}>
                          <Button className="mr-2" variant="secondary">
                            {index + 1}
                          </Button>{" "}
                          {result}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Platforms</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="flex flex-wrap gap-x-2 space-y-2">
                    {caseStudy.platforms.map((platform, index) => (
                      <li key={index} className="flex items-center">
                        <Button size="sm" variant="secondary">
                          {platform}
                        </Button>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Button
                size="lg"
                className="hover:bg-primary/90 mx-auto flex flex-col py-20 text-center text-xl font-bold text-wrap whitespace-pre-wrap"
                asChild
              >
                <Link href="../contact/book-a-meeting">
                  <div>
                    🔒 Book Your Free 15-Minute Setup Call
                    <br />
                    <span className="mt-2 block text-sm font-medium">
                      We'll confirm your eligibility, answer questions — setup
                      begins right after
                    </span>
                  </div>
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Button
        size="lg"
        className="hover:bg-primary/90 mx-auto hidden flex-col py-20 text-center text-xl font-bold text-wrap whitespace-pre-wrap sm:py-16 md:flex md:py-12"
        asChild
      >
        <Link href="../contact/book-a-meeting">
          <div>
            🔒 Book Your Free 15-Minute Setup Call
            <br />
            <span className="mt-2 block text-sm font-medium">
              We'll confirm your eligibility, answer questions — setup begins
              right after
            </span>
          </div>
        </Link>
      </Button>
    </Container>
  );
}
