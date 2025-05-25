import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectTimelineProps } from "@/data/case-studies";
import { ExternalLink, Quote, Star } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "../ui/badge";

export interface Metric {
  label: string;
  value: string | number;
}

export interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  projectTimeline?: ProjectTimelineProps;
  budget?: number;
  projectName?: string;
  linkUrl: string;
  metrics?: Metric[];
  className?: string;
  linkEnabled?: boolean;
  upwork?: boolean;
  children?: ReactNode;
}

export function TestimonialCard({
  quote,
  author,
  projectTimeline,
  role,
  budget,
  projectName,
  linkUrl,
  metrics = [],
  image,
  className = "",
  linkEnabled = true,
  upwork = false,
  children,
}: TestimonialCardProps) {
  // Upwork variant
  if (upwork) {
    const upworkCardContent = (
      <Card
        className={`bg-foreground dark:bg-background text-primary-foreground dark:text-foreground overflow-hidden p-2 ${className}`}
      >
        <CardContent className="p-0">
          <div className="p-6">
            {projectName && (
              <h3 className="mb-3 text-xl font-medium text-green-400">
                {projectName}
              </h3>
            )}
            <p className="mb-3">{quote}</p>
            <div className="mb-4 flex items-center gap-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-xl font-bold">5.0</span>
              <span className="text-gray-400">|</span>
              <span className="text-gray-400">{author}</span>
            </div>
            {children}
          </div>
        </CardContent>
      </Card>
    );

    return linkEnabled && linkUrl ? (
      <div>
        <Link href={linkUrl} target="_blank" rel="noopener noreferrer">
          {upworkCardContent}
        </Link>
      </div>
    ) : (
      <div>{upworkCardContent}</div>
    );
  }

  // Default variant (original design)
  const cardContent = (
    <Card
      className={`bg-background/80 flex h-full flex-col overflow-hidden backdrop-blur-xs ${
        linkEnabled
          ? "transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
          : ""
      } relative ${className}`}
    >
      {/* Gradient overlay that appears on hover */}
      {linkEnabled && (
        <div className="from-primary/20 absolute inset-0 z-10 bg-linear-to-t to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
      )}
      <CardContent className="relative z-20 flex h-full flex-col space-y-4 p-0">
        {/* Header section with stars and project name */}
        <div className="flex items-start justify-between p-4 pb-0">
          <Quote className="text-primary mb-4 h-12 w-12" />
          <div className="flex flex-col items-end gap-2">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-300 stroke-yellow-300"
                />
              ))}
            </div>
            {projectName && (
              <div className="bg-primary/10 rounded-full px-3 py-1 text-xs font-medium">
                {projectName}
              </div>
            )}
          </div>
        </div>

        {/* Quote content */}
        <div className="flex grow items-center p-4 pt-2">
          <h4 className="text-foreground/90 italic">{quote}</h4>
        </div>

        {/* Footer with author and metrics */}
        <div className="p-4 pt-2">
          {/* Author info */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 shrink-0">
                <AvatarImage src={image} alt={author} />
                <AvatarFallback>{author[0]?.toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">{author}</p>
                {role && (
                  <p className="text-muted-foreground text-xs">{role}</p>
                )}
              </div>
            </div>
          </div>

          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {metrics.map((metric, index) => (
                <Button
                  size="sm"
                  key={index}
                  variant="secondary"
                  className={`transform text-xs font-semibold ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
                >
                  {typeof metric.label === "string" &&
                  metric.label.startsWith("+")
                    ? metric.label
                    : `${metric.label}: `}
                  {metric.value}
                </Button>
              ))}
            </div>
          )}
        </div>

        {children}
      </CardContent>

      {/* External link icon that appears on hover */}
      {linkEnabled && (
        <div className="absolute top-1/2 left-1/2 z-30 -translate-x-1/2 -translate-y-1/2 transform opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="bg-primary rounded-full p-3 text-white shadow-lg">
            <ExternalLink className="h-6 w-6" />
          </div>
        </div>
      )}
    </Card>
  );

  // Return either a linked card or just the card content
  return linkEnabled && linkUrl ? (
    <Link
      href={linkUrl}
      className="group block h-full"
      target="_blank"
      rel="noopener noreferrer"
    >
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
