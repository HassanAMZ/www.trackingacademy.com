"use client";
import React, { useState } from "react";
import BlogSearch from "@/components/blog/BlogSearch";
import BlogContent from "@/components/blog/BlogContent";
import { BlogContainerProps } from "@/types/index";

const BlogContainer: React.FC<BlogContainerProps> = ({
 data,
 type,
 rawData,
}) => {
 const [filteredData, setFilteredData] = useState(data);
 return (
  <div className='flex flex-col gap-2'>
   <BlogSearch data={data} onSearch={(filtered) => setFilteredData(filtered)} />
   <BlogContent rawData={rawData} data={filteredData} type={type} />
  </div>
 );
};

export default BlogContainer;
