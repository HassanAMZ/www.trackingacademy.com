"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PostMetadata } from "@/types/index";
import Link from "next/link";

interface BlogPaginationProps {
 sortedData: PostMetadata[];
}

const BlogPagination: React.FC<BlogPaginationProps> = ({ sortedData }) => {
 const [currentPage, setCurrentPage] = useState(0);
 sortedData = sortedData
  .filter((blog) => blog.draft === false)
  .sort((a, b) => b.blogId - a.blogId);

 const postsPerPage = 6;

 const pageCount = Math.ceil(sortedData.length / postsPerPage);

 const handlePageChange = (newPage: number) => {
  setCurrentPage(newPage);
 };

 const indexOfLastPost = (currentPage + 1) * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);
 return (
  <React.Fragment>
   <div className='grid sm:grid-cols-2 gap-2'>
    {currentPosts.map((blog, index) => (
     <Link
      href={`/blog/${blog.slug}`}
      key={index}
      id={`${blog.blogId} ${index}`}
      className='flex flex-col gap-4 shadow-md border bg-complementary rounded-md text-dominant p-2 '>
      <Image
       src={blog.openGraph.images[0]}
       alt={blog.title}
       width={1920}
       height={1080}
       className='rounded-lg'
      />
      <h3 className='title-tertiary line-clamp-1'>{blog.title}</h3>
      <p className='paragraph-primary line-clamp-2'>{blog.description}</p>
      <div className='flex justify-between items-center'>
       <span className='paragraph-secondary'>By ShahzadaAliHassan</span>
       <span className='paragraph-secondary border border-dashed border-accent rounded-full px-2'>
        {blog.date}
       </span>
      </div>
     </Link>
    ))}
   </div>

   {pageCount > 1 && (
    <div className='flex justify-center py-8 gap-1'>
     <button
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 0}
      className={`px-4 py-1 rounded-full hover:text-complementary ${
       currentPage === 0 ? "cursor-not-allowed opacity-50" : "hover:bg-accent"
      }`}>
      Previous
     </button>
     {Array.from({ length: pageCount }, (_, i) => i)
      .slice(Math.max(0, currentPage - 1), Math.min(currentPage + 3, pageCount))
      .map((i) => (
       <button
        key={i}
        className={`px-4 py-1 rounded-full ${
         i === currentPage ? "bg-complementary text-accent" : "hover:bg-accent"
        }`}
        onClick={() => handlePageChange(i)}>
        {i + 1}
       </button>
      ))}
     <button
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === pageCount - 1}
      className={`px-4 py-1 rounded-full hover:text-complementary ${
       currentPage === pageCount - 1
        ? "cursor-not-allowed opacity-50"
        : "hover:bg-accent"
      }`}>
      Next
     </button>
    </div>
   )}
  </React.Fragment>
 );
};

export default BlogPagination;
