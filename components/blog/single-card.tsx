"use client";

import Text from "@/components/ui/text";
import { SingleBlogCardProps } from "@/types/index";
import { Link } from "next-view-transitions";
import Image from "next/image";
import React from "react";

const BlogCard: React.FC<SingleBlogCardProps> = ({
  post,
  type,
  isMain = false,
  className = "",
}) => {
  if (!post) return null;

  return (
    <Link href={`/${type}/${post.slug}`} className={`block ${className}`}>
      <article className="group cursor-pointer transition-all hover:opacity-90">
        <div className="overflow-hidden rounded-lg">
          <Image
            src={post.openGraph.images[0]}
            alt={post.title}
            width={1920}
            height={1080}
            className="rounded-lg transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <Text
          as="h4"
          variant="headingLg"
          className="line-clamp-2 pt-2 transition-colors group-hover:text-primary"
        >
          {post.title}
        </Text>

        <Text as="p" variant="bodyMd" className="line-clamp-2">
          {post.description}
        </Text>

        <div className="flex flex-row items-center justify-between whitespace-nowrap pt-2 text-xs">
          <Text as="p" variant="bodyMd">
            {post.date}
          </Text>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;
