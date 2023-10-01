import React from "react";
import { TagContentProps } from "@/types/index";
import Link from "next/link";
import formatString from "@/components/utils/formatString";

const TagContent: React.FC<TagContentProps> = ({ tags, type, blogsData }) => {
 // Count the number of blogs for each tag
 const tagCounts = tags.map((tag) => {
  const count = blogsData.filter((blog) => blog.tags.includes(tag)).length;
  return { tag, count };
 });

 // Sort by most number of blogs
 tagCounts.sort((a, b) => b.count - a.count);

 return (
  <div className='grid grid-cols-1 gap-2'>
   {tagCounts.map((tagCount, index) => (
    <Link
     key={index}
     className='tag-content-item backgroundOverlay '
     href={`/tags/${formatString(tagCount.tag)}`}>
     {tagCount.tag} ({tagCount.count})
    </Link>
   ))}
  </div>
 );
};

export default TagContent;
