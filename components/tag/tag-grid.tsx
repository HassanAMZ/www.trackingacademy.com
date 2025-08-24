"use client";

import { getYouTubeDurationClient } from "@/lib/youtube-duration-client";
import { PostMetadata } from "@/types/index";
import { normalizeTag } from "@/utils/normalizeTags";
import React, { useEffect, useState } from "react";
import TagCard from "./tag-card";

interface TagGridProps {
  tags: string[];
  blogs: PostMetadata[];
}

const TagGrid: React.FC<TagGridProps> = ({ tags, blogs }) => {
  const [videoDurations, setVideoDurations] = useState<Record<string, string>>({});

  // Fetch video durations for blogs with embedId
  useEffect(() => {
    const fetchVideoDurations = async () => {
      const durations: Record<string, string> = {};

      for (const blog of blogs) {
        if (blog.embedId && blog.embedId.trim() !== "") {
          try {
            const videoData = await getYouTubeDurationClient(blog.embedId);
            if (videoData?.duration) {
              durations[blog.slug || blog.id || ""] = videoData.duration;
            }
          } catch (error) {
            // Silent fail - fallback to default read time
            console.warn(`Failed to fetch duration for video ${blog.embedId}:`, error);
          }
        }
      }

      setVideoDurations(durations);
    };

    fetchVideoDurations();
  }, [blogs]);

  // Count blogs for each tag
  const tagCounts = tags.map((tag) => {
    const count = blogs.filter((blog) =>
      blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)),
    ).length;
    return { tag, count };
  });

  // Sort by most popular (most blogs)
  const sortedTags = tagCounts.sort((a, b) => b.count - a.count).map((item) => item.tag);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {sortedTags.map((tag, index) => {
        // Find the featured blog for this tag to get its video duration
        const featuredBlog = blogs
          .filter((blog) =>
            blog.tags.some((blogTag) => normalizeTag(blogTag) === normalizeTag(tag)),
          )
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

        const videoDuration = featuredBlog
          ? videoDurations[featuredBlog.slug || featuredBlog.id || ""]
          : undefined;

        return <TagCard key={index} tag={tag} blogs={blogs} videoDuration={videoDuration} />;
      })}
    </div>
  );
};

export default TagGrid;
