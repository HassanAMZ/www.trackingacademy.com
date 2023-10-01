// TagSearch.tsx
"use client";
import React, { useState, useEffect } from "react";
import { TagSearchProps } from "@/types/index"; // Ensure you have this type

const TagSearch: React.FC<TagSearchProps> = ({ tags, onSearch }) => {
 const [searchTerm, setSearchTerm] = useState("");

 useEffect(() => {
  const results = tags.filter((tag) =>
   tag.toLowerCase().includes(searchTerm.toLowerCase())
  );
  onSearch(results);
 }, [searchTerm]);

 return (
  <div className='flex flex-col gap-2'>
   <input
    type='text'
    placeholder='Search for a tag...'
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
    className='p-2 border rounded-md mb-2 text-gray-800'
   />
  </div>
 );
};

export default TagSearch;
