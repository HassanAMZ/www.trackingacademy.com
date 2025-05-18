"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <Container className="py-12">
      <h1 className="mb-8 text-center">Our Case Studies</h1>
      <p className="text-muted-foreground mx-auto mb-12 max-w-2xl text-center">
        Discover how we has empowered businesses with cutting-edge analytics and
        tracking solutions to drive data-driven decisions and boost campaign
        performance.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <Card
            key={caseStudy.id}
            className="shadow-md transition-shadow hover:shadow-lg"
          >
            <CardHeader>
              <Link href={`/case-study/${caseStudy.id}`}>
                <Image
                  width={1080}
                  height={1920}
                  src={caseStudy.imageUrl}
                  alt={caseStudy.name}
                  className="h-48 w-full rounded-t-lg"
                />
              </Link>
              <CardTitle className="mt-4">{caseStudy.title}</CardTitle>
              <div className="mt-2 flex w-fit flex-wrap gap-2">
                {caseStudy.platforms.slice(0, 2).map((platform, index) => (
                  <li
                    key={index}
                    className="flex flex-wrap items-center text-wrap"
                  >
                    <Badge variant={"secondary"}>{platform}</Badge>
                  </li>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4 line-clamp-3">
                {caseStudy.description}
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link href={`/case-study/${caseStudy.id}`}>
                  View Case Study
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </Container>
  );
}
