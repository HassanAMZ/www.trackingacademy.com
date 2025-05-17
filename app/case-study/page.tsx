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
    <Container className=" py-12">
      <h1 className="mb-8 text-center">Our Case Studies</h1>
      <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
        Discover how Tracking Academy has empowered businesses with cutting-edge
        analytics and tracking solutions to drive data-driven decisions and
        boost campaign performance.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {caseStudies.map((caseStudy) => (
          <Card
            key={caseStudy.id}
            className="shadow-md hover:shadow-lg transition-shadow"
          >
            <CardHeader>
              <Link href={`/case-study/${caseStudy.id}`}>
                <Image
                  width={1080}
                  height={1920}
                  src={caseStudy.imageUrl}
                  alt={caseStudy.name}
                  className="w-full h-48 rounded-t-lg"
                />
              </Link>
              <CardTitle className="mt-4">{caseStudy.title}</CardTitle>
              <div className="mt-2 w-fit flex flex-wrap gap-2">
                {caseStudy.platforms.slice(0, 3).map((platform, index) => (
                  <li
                    key={index}
                    className="flex items-center flex-wrap text-wrap "
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
