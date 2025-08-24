import BlogSearch from "@/components/blog/blog-search";
import { PostMetadata } from "@/types/index";
import React from "react";
import BlogContentWrapper from "./blog-content-wrapper";

interface CategoryContainerProps {
  data: PostMetadata[];
  rawData?: PostMetadata[];
  type: string;
}

const CategoryContainer: React.FC<CategoryContainerProps> = ({ data, type, rawData }) => {
  return (
    <div className="space-y-8">
      <BlogSearch data={data} />
      <BlogContentWrapper data={data} type={type} />
    </div>
  );
};

export default CategoryContainer;
