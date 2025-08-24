"use client";

import { PostMetadata } from "@/types/index";
import React, { useState } from "react";
import BlogPagination from "./blog-pagination";
import SingleBlogCard from "./single-card";

interface BlogContentWrapperProps {
  data: PostMetadata[];
  type: string;
}

const BlogContentWrapper: React.FC<BlogContentWrapperProps> = ({ data, type }) => {
  const [visiblePosts, setVisiblePosts] = useState(data.slice(0, 12));

  const handlePageChange = (posts: PostMetadata[]) => {
    setVisiblePosts(posts);
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {visiblePosts.map((post, index) => (
          <SingleBlogCard post={post} type={type} key={post.slug || post.id || index} />
        ))}
      </div>
      <BlogPagination data={data} type={type} onPageChange={handlePageChange} />
    </div>
  );
};

export default BlogContentWrapper;
