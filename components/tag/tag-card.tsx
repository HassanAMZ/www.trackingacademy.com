"use client";

import { PostMetadata } from "@/types/index";
import { displayTag, normalizeTag } from "@/utils/normalizeTags";
import { formatDistanceToNow } from "date-fns";
import { Clock, Tag as TagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import formatString from "utils/formatString";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface TagCardProps {
  tag: string;
  blogs: PostMetadata[];
}

const TagCard: React.FC<TagCardProps> = ({ tag, blogs }) => {
  // Get up to 3 most recent blogs for this tag (using normalized tag matching)
  const relatedBlogs = blogs
    .filter((blog) =>
      blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)),
    )
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  // Get the first blog for featured image
  const featuredBlog = relatedBlogs[0];
  const blogCount = blogs.filter((blog) =>
    blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)),
  ).length;

  // Get the image from the first blog's OpenGraph
  const featuredImage =
    featuredBlog?.openGraph?.images?.[0] || "/placeholder-image.jpg";

  return (
    <Card className="w-full overflow-hidden transition-shadow duration-300 hover:shadow-md">
      <div className="relative h-48 w-full overflow-hidden">
        {featuredImage && (
          <div className="relative h-full w-full">
            <Image
              src={featuredImage}
              alt={`Featured image for ${tag}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          </div>
        )}{" "}
        <div className="absolute bottom-4 left-4">
          <Badge className="bg-primary px-3 py-1 text-sm font-medium">
            {blogCount} articles
          </Badge>
        </div>
      </div>{" "}
      <CardHeader>
        <div className="flex items-center gap-2">
          <TagIcon className="text-primary h-5 w-5" />
          <CardTitle className="font-bold">{displayTag(tag)}</CardTitle>
        </div>
        <CardDescription>
          Browse {blogCount} articles in this category
        </CardDescription>
      </CardHeader>{" "}
      <CardContent className="pb-0">
        <ul className="space-y-3">
          {relatedBlogs.map((blog, idx) => (
            <li key={idx} className="border-b pb-2 last:border-0">
              <Link
                href={`/blog/${blog.slug}`}
                className="hover:text-primary transition-colors"
              >
                <div className="line-clamp-1 text-sm font-medium">
                  {blog.title}
                </div>
                <div className="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
                  <Clock className="h-3 w-3" />
                  <span>
                    {formatDistanceToNow(new Date(blog.date), {
                      addSuffix: true,
                    })}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>{" "}
      <CardFooter className="pt-4">
        <Link
          href={`/tags/${formatString(normalizeTag(tag))}`}
          className="text-primary text-sm font-medium hover:underline"
        >
          View all articles →
        </Link>
      </CardFooter>
    </Card>
  );
};

export default TagCard;
