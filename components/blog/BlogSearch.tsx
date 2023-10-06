"use client";

import React, { useState, useEffect } from "react";
import { PostMetadata } from "@/types/index";
import { BlogSearchProps } from "@/types/index";

const BlogSearch: React.FC<BlogSearchProps> = ({ data, onSearch }) => {
 const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  const results = data.filter((post) =>
   post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
  onSearch(results);
 }, [searchTerm]); // only react to searchTerm changes

 return (
  <div className='flex flex-col gap-2'>
   <input
    type='text'
    placeholder='Search for a post...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='p-2 border-2 rounded-md mb-2 text-gray-800 bg-transparent'
   />
  </div>
 );
};

export default BlogSearch;
