'use client';
import BlogContent from '@/components/blog/category-container';
import BlogSearch from '@/components/blog/search';
import { BlogContainerProps } from '@/types/index';
import React, { useState } from 'react';

const BlogContainer: React.FC<BlogContainerProps> = ({ data, type, rawData }) => {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <div className="space-y-4">
      <BlogSearch data={data} onSearch={(filtered) => setFilteredData(filtered)} />
      <BlogContent rawData={rawData} data={filteredData} type={type} />
    </div>
  );
};

export default BlogContainer;
