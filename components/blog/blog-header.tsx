"use client";

import formatDate from "@/components/seo/formatDate";
import generateSchema from "@/components/seo/generateSchema";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { YouTubeVideoData } from "@/lib/youtube-api";
import { PostMetadataProps } from "@/types/index";
import { Calendar, FileText } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
import YoutubeEmbed from "../global/youtube-embed";
import BreadCrumbs from "./bread-crumb";
import YouTubeStats from "./youtube-stats";

interface BlogHeaderProps extends PostMetadataProps {
  videoData?: YouTubeVideoData | null;
}

// Helper function to extract category from slug
const getCategoryFromSlug = (slug: string): string => {
  const parts = slug.split("/");
  return parts[0] || "general";
};

// Helper function to get related categories from tags
const getRelatedCategories = (tags: string[]): string[] => {
  return tags.map((tag) => tag.toLowerCase().replace(/\s+/g, "-")).slice(0, 3); // Limit to 3 related categories
};

const BlogHeader: React.FC<BlogHeaderProps> = ({ metadata, videoData }) => {
  const schema = generateSchema(metadata);
  const backgroundImage = metadata.openGraph.images[0];

  return (
    <div className="dark w-full rounded-lg border bg-card p-4">
      <Script
        id="blog-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="mb-4 border-b pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-muted-foreground">Article</span>
          </div>
          <time className="text-xs text-muted-foreground" dateTime={metadata.date}>
            {formatDate(metadata.date)}
          </time>
        </div>
      </div>

      <div className="grid gap-4 py-4 md:px-12">
        <div className="justfify-center col-span-1 flex h-full w-full flex-col space-y-4">
          <BreadCrumbs />
          <h1 className="text-primary">{metadata.title}</h1>
          <p className="hidden text-muted-foreground md:block">{metadata.description}</p>
          {/* Author */}
          <div className="flex items-center space-x-3">
            <Avatar className="h-12 w-12 border-2 border-border/50">
              <Image
                src="/images/avatars/hassan.png"
                alt={process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan"}
                width={1080}
                height={1080}
                className="aspect-square size-full object-cover"
              />

              <AvatarFallback className="text-base font-semibold">SAH</AvatarFallback>
            </Avatar>

            <div className="space-y-1">
              <div className="flex flex-col items-center">
                <span className="font-semibold text-foreground">
                  {process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan"}
                </span>
                {/* Date and Category Navigation */}
                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <time dateTime={metadata.date}>{formatDate(metadata.date)}</time>
                  </div>
                </div>
              </div>

              {metadata.updatedDate && (
                <div className="text-sm text-muted-foreground">
                  <span>Last updated: {formatDate(metadata.updatedDate)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Tags */}
          {metadata.tags && metadata.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {metadata.tags.map((tag: string, index: number) => (
                <Link href={`/tags/${tag.toLowerCase().replace(/\s+/g, "-")}`} key={index}>
                  <Badge
                    variant="secondary"
                    className="px-2.5 py-1 text-xs font-medium transition-colors hover:bg-secondary/80"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
        {/* Hero Image/Video Section */}
        <div className="relative w-full rounded border border-border/50 bg-muted/30">
          {metadata.embedId === "" ? (
            <Image
              src={backgroundImage}
              alt={metadata.title || "Blog post image"}
              width={800}
              height={600}
              className="h-full w-full object-cover transition-transform duration-300"
            />
          ) : (
            <div className="space-y-3">
              {/* YouTube Stats Above the Fold */}
              {videoData && (
                <div className="px-4 pt-4">
                  <YouTubeStats videoData={videoData} embedId={metadata.embedId} />
                </div>
              )}

              {/* Video embed */}
              <YoutubeEmbed embedId={metadata.embedId} className="w-full px-0" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
