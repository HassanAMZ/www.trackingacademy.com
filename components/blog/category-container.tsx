"use client";

import BlogSearch from "@/components/blog/search";
import SingleBlogCard from "@/components/blog/single-card";
import { Button } from "@/components/ui/button";
import { PostMetadata } from "@/types/index";
import React, { useState } from "react";

interface BlogContentProps {
  data: PostMetadata[];
  rawData?: PostMetadata[];
  featuredPostId?: number;
  type: string;
}
const BlogContent: React.FC<BlogContentProps> = ({ data, type, rawData, featuredPostId }) => {
  const [visiblePosts, setVisiblePosts] = useState(12);
  const remainingPosts = data.slice(0, visiblePosts);

  const loadMoreHandler = () => {
    setVisiblePosts((prevValue) => prevValue + 9);
  };

  return (
    <div className="space-y-8">
      <div className="columns-1 gap-6 space-y-4 sm:columns-2 md:columns-3 lg:columns-4">
        {remainingPosts.map((post, index) => (
          <SingleBlogCard post={post} type={type} key={index} />
        ))}
      </div>
      {visiblePosts < data.length && (
        <div className="mt-8 text-center">
          <Button onClick={loadMoreHandler}>Load More Posts</Button>
        </div>
      )}
    </div>
  );
};

interface CategoryContainerProps {
  data: PostMetadata[];
  rawData?: PostMetadata[];
  type: string;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ data, type, rawData }) => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="space-y-8">
      <BlogSearch data={data} onSearch={(filtered) => setFilteredData(filtered)} />
      <BlogContent rawData={rawData} data={filteredData} type={type} featuredPostId={125} />
    </div>
  );
};

export default CategoryContainer;
