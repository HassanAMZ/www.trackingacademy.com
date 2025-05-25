"use client";

import { PostMetadata } from "@/types/index";
import { normalizeTag } from "@/utils/normalizeTags";
import React from "react";
import TagCard from "./tag-card";

interface TagGridProps {
  tags: string[];
  blogs: PostMetadata[];
}

const TagGrid: React.FC<TagGridProps> = ({ tags, blogs }) => {
  // Count blogs for each tag
  const tagCounts = tags.map((tag) => {
    const count = blogs.filter((blog) =>
      blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)),
    ).length;
    return { tag, count };
  });

  // Sort by most popular (most blogs)
  const sortedTags = tagCounts
    .sort((a, b) => b.count - a.count)
    .map((item) => item.tag);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {sortedTags.map((tag, index) => (
        <TagCard key={index} tag={tag} blogs={blogs} />
      ))}
    </div>
  );
};

export default TagGrid;
