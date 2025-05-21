import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Quote, Star } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { Badge } from "../ui/badge";

interface Metric {
  label: string;
  value: string | number;
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  image?: string;
  budget?: number;
  projectName?: string;
  linkUrl?: string;
  metrics?: Metric[];
  className?: string;
  linkEnabled?: boolean;
  children?: ReactNode;
}

export function TestimonialCard({
  quote,
  author,
  role,
  budget,
  projectName,
  linkUrl,
  metrics = [],
  image,
  className = "",
  linkEnabled = true,
  children,
}: TestimonialCardProps) {
  // Extract the content to be reused
  const cardContent = (
    <Card
      className={`bg-background/80 backdrop-blur-xs overflow-hidden flex flex-col h-full ${
        linkEnabled
          ? "transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg"
          : ""
      } relative ${className}`}
    >
      {/* Gradient overlay that appears on hover */}
      {linkEnabled && (
        <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"></div>
      )}{" "}
      <CardContent className="p-0 flex flex-col h-full relative z-20 space-y-4">
        {/* Header section with stars and project name */}
        <div className="flex justify-between items-start p-4 pb-0">
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
              <div className="bg-primary/10 px-3 py-1 rounded-full text-xs font-medium">
                {projectName}
              </div>
            )}
          </div>
        </div>{" "}
        {/* Quote content */}
        <div className="grow flex items-center p-4 pt-2">
          <h4 className="italic text-foreground/90">{quote}</h4>
        </div>{" "}
        {/* Footer with author and metrics */}
        <div className="p-4 pt-2">
          {/* Author info */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Avatar className="h-10 w-10 shrink-0 group-hover:animate-spin">
                <AvatarImage src={image} alt={author} />
                <AvatarFallback>{author[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-semibold">{author}</p>
                {/* {role && <p className="text-muted-foreground text-xs">{role}</p>} */}
              </div>
            </div>
            {/* {budget && (
              <div className="flex items-center gap-2">
                <Button size="sm">$ {budget}</Button>
              </div>
            )} */}
          </div>{" "}
          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {metrics.map((metric, index) => (
                <Button
                  size="sm"
                  key={index}
                  variant="secondary"
                  className={`text-xs font-semibold transform ${index % 2 === 0 ? "rotate-1" : "-rotate-1"}`}
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
        </div>{" "}
        {children}
      </CardContent>{" "}
      {/* External link icon that appears on hover */}
      {linkEnabled && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-30">
          <div className="bg-primary text-white rounded-full p-3 shadow-lg">
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
