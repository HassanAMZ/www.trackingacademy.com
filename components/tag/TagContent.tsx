"use client";

import React, { useState } from "react";
import { TagContentProps } from "@/types/index";
import Link from "next/link";
import formatString from "utils/formatString";
import { Headingxl, Paragraphmd } from "@/components/typography/Heading";

const TagContent: React.FC<TagContentProps> = ({ tags, type, blogsData }) => {
  // Count the number of blogs for each tag
  const tagCounts = tags.map((tag) => {
    const count = blogsData.filter((blog) => blog.tags.includes(tag)).length;
    return { tag, count };
  });

  // Sort by most number of blogs
  tagCounts.sort((a, b) => b.count - a.count);

  // State to manage visible tags
  const [visibleTags, setVisibleTags] = useState(50);

  const loadMoreTags = () => {
    setVisibleTags(visibleTags + 20);
  };

  return (
    <section>
      <div className="flex flex-wrap gap-2 py-2">
        {tagCounts.slice(0, visibleTags).map((tagCount, index) => (
          <Link
            className="backgroundOverlay textOpacity80 p-2 capitalize hover:text-white"
            key={index}
            href={`/tags/${formatString(tagCount.tag)}`}
            passHref
          >
            <Paragraphmd>
              {tagCount.tag} ({tagCount.count})
            </Paragraphmd>
          </Link>
        ))}
      </div>
      {visibleTags < tagCounts.length && (
        <button
          onClick={loadMoreTags}
          className="bg-complementary w-full rounded border px-4 py-2"
        >
          <Headingxl>Load More Tags</Headingxl>
        </button>
      )}
    </section>
  );
};

export default TagContent;
