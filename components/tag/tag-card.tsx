"use client";

import { getBestYouTubeThumbnail } from "@/lib/youtube-thumbnails";
import { PostMetadata } from "@/types/index";
import { displayTag, normalizeTag } from "@/utils/normalizeTags";
import { formatDistanceToNow } from "date-fns";
import { Clock, Tag as TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense } from "react";
import formatString from "utils/formatString";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";

interface TagCardProps {
  tag: string;
  blogs: PostMetadata[];
  videoDuration?: string; // YouTube video duration for the featured blog
}

// Suspended image component for YouTube thumbnails
const SuspendedYouTubeThumbnail = ({ videoId, alt }: { videoId: string; alt: string }) => {
  const imageSrc = getBestYouTubeThumbnail(videoId);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      width={1920}
      height={1080}
      className="w-full rounded-lg object-cover"
    />
  );
};

// Image skeleton for loading state
const ImageSkeleton = () => (
  <div className="h-full w-full animate-pulse rounded-lg bg-gradient-to-br from-muted/30 to-muted/50">
    <div className="h-full w-full rounded-lg bg-gradient-to-br from-transparent via-muted/20 to-muted/40" />
  </div>
);

const TagCard: React.FC<TagCardProps> = ({ tag, blogs, videoDuration }) => {
  // Get up to 3 most recent blogs for this tag (using normalized tag matching)
  const relatedBlogs = blogs
    .filter((blog) => blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Get the first blog for featured image
  const featuredBlog = relatedBlogs[0];
  const blogCount = blogs.filter((blog) =>
    blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)),
  ).length;

  // Check if featured blog is a YouTube video
  const isYouTubeVideo = featuredBlog?.embedId && featuredBlog.embedId.trim() !== "";

  // Calculate read time: use video duration if available, otherwise default to 12 min
  const getReadTime = () => {
    if (videoDuration && featuredBlog?.embedId && featuredBlog.embedId.trim() !== "") {
      // Parse video duration (format: "4:13" or "1:23:45")
      const parts = videoDuration.split(":").map(Number);
      if (parts.length === 2) {
        // Format: "4:13" -> 4 minutes
        return `${parts[0]} min`;
      } else if (parts.length === 3) {
        // Format: "1:23:45" -> 1 hour 23 minutes
        const hours = parts[0];
        const minutes = parts[1];
        if (hours > 0) {
          return `${hours}h ${minutes}m`;
        } else {
          return `${minutes} min`;
        }
      }
      return videoDuration;
    }
    return "12 min read";
  };

  return (
    <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        {featuredBlog && (
          <div className="relative h-full w-full">
            {isYouTubeVideo ? (
              // YouTube thumbnail with Suspense
              <Suspense fallback={<ImageSkeleton />}>
                <SuspendedYouTubeThumbnail
                  videoId={featuredBlog.embedId}
                  alt={`Featured image for ${tag}`}
                />
              </Suspense>
            ) : (
              // Regular image
              <Image
                src={featuredBlog?.openGraph?.images?.[0] || "/placeholder-image.jpg"}
                alt={`Featured image for ${tag}`}
                width={1920}
                height={1080}
                className="w-full rounded-lg object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            {/* YouTube indicator if video */}
            {isYouTubeVideo && (
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Video</span>
                </div>
              </div>
            )}
          </div>
        )}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary px-3 py-1 text-sm font-medium">{blogCount} articles</Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-center gap-2">
          <TagIcon className="h-5 w-5 text-primary" />
          <CardTitle className="font-bold">{displayTag(tag)}</CardTitle>
        </div>
        <CardDescription>Browse {blogCount} articles in this category</CardDescription>

        {/* Read time for featured blog */}
        {featuredBlog && (
          <div className="mt-2 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            <span>{getReadTime()}</span>
          </div>
        )}
      </CardHeader>
      <CardContent className="pb-0">
        <ul className="space-y-3">
          {relatedBlogs.map((blog, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-primary/60" />
              <div className="min-w-0 flex-1">
                <Link
                  href={`/blog/${blog.slug}`}
                  className="line-clamp-2 block text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {blog.title}
                </Link>
                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{formatDistanceToNow(new Date(blog.date), { addSuffix: true })}</span>
                  {blog.embedId && blog.embedId.trim() !== "" && (
                    <span className="flex items-center gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-red-500"></div>
                      Video
                    </span>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="pt-4">
        <Link
          href={`/tags/${formatString(normalizeTag(tag))}`}
          className="text-sm font-medium text-primary hover:underline"
        >
          View all articles →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TagCard;
