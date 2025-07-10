"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { caseStudies } from "@/data/case-studies";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudiesPage() {
  return (
    <Container className="py-12">
      <h1 className="mb-8 text-center">Our Case Studies</h1>
      <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
        Discover how we has empowered businesses with cutting-edge analytics and tracking solutions
        to drive data-driven decisions and boost campaign performance.
      </p>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {caseStudies.map((caseStudy) => (
          <Link
            key={caseStudy.id}
            href={`/case-study/${caseStudy.id}`}
            className="group block h-full"
          >
            <Card className="relative flex h-full flex-col overflow-hidden bg-background/80 backdrop-blur-xs transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
              {/* Gradient overlay that appears on hover - similar to TestimonialCard */}
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
              <CardHeader className="relative z-20">
                <div className="overflow-hidden rounded-lg border">
                  <Image
                    priority={false}
                    width={1080}
                    height={1920}
                    src={caseStudy.imageUrl}
                    alt={caseStudy.name}
                    className="scale-x-103 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardTitle className="mt-4">{caseStudy.title}</CardTitle>
                <div className="mt-2 flex w-fit flex-wrap gap-2">
                  {caseStudy.platforms.slice(0, 2).map((platform, index) => (
                    <li key={index} className="flex flex-wrap items-center text-wrap">
                      <Badge variant={"secondary"}>{platform}</Badge>
                    </li>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="relative z-20">
                <p className="mb-4 line-clamp-3 text-muted-foreground">{caseStudy.description}</p>
                <Button variant="outline" className="w-full cursor-pointer">
                  View Case Study
                </Button>
              </CardContent>{" "}
              {/* External link icon that appears on hover - similar to TestimonialCard */}
              <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="rounded-full bg-primary p-3 text-white shadow-lg">
                  <ExternalLink className="h-6 w-6" />
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
}
