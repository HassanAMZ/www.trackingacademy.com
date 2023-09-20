"use client";
import React, { useState } from "react";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogContent from "@/components/blog/BlogContent";
import { PostMetaData } from "@/types/index";

interface BlogContainerProps {
 data: (PostMetaData & { id: string; slug: string })[];
}

const BlogContainer: React.FC<BlogContainerProps> = ({ data }) => {
 const [filteredData, setFilteredData] = useState(data);

 return (
  <div className='flex flex-col gap-2'>
   <BlogSearch data={data} onSearch={(filtered) => setFilteredData(filtered)} />
   <BlogContent data={filteredData} />
  </div>
 );
};

export default BlogContainer;
