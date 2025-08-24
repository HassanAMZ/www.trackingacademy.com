import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectTimelineProps } from "@/data/case-studies";
import { Quote, Star } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface Metric {
  label: string;
  value: string | number;
}

interface TestimonialCardProps {
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
        className={`overflow-hidden bg-foreground p-2 text-primary-foreground dark:bg-background dark:text-foreground ${className}`}
      >
        <CardContent className="p-0">
          <div className="p-6">
            {projectName && (
              <h3 className="mb-3 text-xl font-medium text-green-400">{projectName}</h3>
            )}
            <p className="mb-3 line-clamp-3">{quote}</p>
            <div className="mb-4 flex flex-col items-start justify-center gap-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              {/* Author info */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarImage src={image} alt={author} />
                    <AvatarFallback>{author[0]?.toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <p className="leading-tight font-semibold">
                      {author}
                      <br />
                      {role && <span className="text-xs font-normal text-muted">{role}</span>}
                    </p>
                  </div>
                </div>
              </div>
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
    <Card className={`overflow-hidden p-2 ${className}`}>
      <CardContent className="relative z-20 flex h-full flex-col space-y-4 p-0">
        {/* Header section with stars and project name */}
        <div className="flex items-start justify-between p-4 pb-0">
          <Quote className="mb-4 h-12 w-12 text-primary" />
          <div className="flex flex-col items-end gap-2">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 fill-yellow-300 stroke-yellow-300" />
              ))}
            </div>
            {projectName && (
              <div className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium">
                {projectName}
              </div>
            )}
          </div>
        </div>

        {/* Quote content */}
        <div className="flex grow items-center p-4 pt-2">
          <h4 className="line-clamp-3 text-foreground/90 italic">{quote}</h4>
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
                {role && <p className="text-xs text-muted-foreground">{role}</p>}
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
                  {typeof metric.label === "string" && metric.label.startsWith("+")
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
    </Card>
  );

  // Return either a linked card or just the card content
  return linkEnabled && linkUrl ? (
    <Link href={linkUrl} className="group block h-full" target="_blank" rel="noopener noreferrer">
      {cardContent}
    </Link>
  ) : (
    cardContent
  );
}
