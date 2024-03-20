"use client";

import NavLink from "@/components/navbar/NavLink";
import React, { useEffect, useState, useRef } from "react";
import { PostMetadata } from "@/types/index";
import Link from "next/link";
import NavigationLinks from "../navbar/NavigationLinks";
import MobileNav from "../navbar/MobileNav";

interface DesktopNavProps {
 data: PostMetadata[];
}

const DesktopNav: React.FC<DesktopNavProps> = ({ data }) => {
 const [searchTerm, setSearchTerm] = useState<string>("");
 const [results, setResults] = useState<PostMetadata[]>([]);
 const [isExpanded, setIsExpanded] = useState<boolean>(false);
 const searchContainerRef = useRef<HTMLDivElement>(null);
 const searchBoxRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
  if (searchTerm) {
   const filteredResults = data.filter(
    (post) =>
     post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
     post.tags.some((tag) =>
      tag.toLowerCase().includes(searchTerm.toLowerCase())
     )
   );
   setResults(filteredResults);
  } else {
   setResults([]);
  }
 }, [searchTerm, data]);

 useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
   if (
    isExpanded &&
    searchBoxRef.current &&
    (!searchBoxRef.current.contains(event.target as Node) ||
     (searchBoxRef.current.contains(event.target as Node) &&
      !(
       inputRef.current?.contains(event.target as Node) ||
       (event.target instanceof HTMLDivElement &&
        event.target.className.includes(
         "block p-2 hover:bg-gray-700 hover:rounded-lg text-dominant cursor-pointer"
        ))
      )))
   ) {
    setIsExpanded(false);
   }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => {
   document.removeEventListener("mousedown", handleClickOutside);
  };
 }, [isExpanded]);

 useEffect(() => {
  if (isExpanded) {
   inputRef.current?.focus();
  }
 }, [isExpanded]);

 const closeSearch = () => {
  setIsExpanded(false);
 };
 return (
  <React.Fragment>
   <div className='flex flex-row items-center justify-center gap-2'>
    <NavLink href='/'>TrackingAcademy</NavLink>
   </div>
   <div className='flex items-center justify-center w-full gap-4'>
    <div
     ref={searchContainerRef}
     className={`${
      isExpanded
       ? "fixed inset-0 z-50 bg-complementary whitespace-nowrap bg-opacity-10 backdrop-blur-md transition-opacity duration-300 ease-in-out"
       : ""
     }`}>
     {isExpanded && (
      <div
       id='search-box'
       ref={searchBoxRef}
       className='flex flex-col items-center justify-center px-6 py-20 lg:p-20'>
       <input
        ref={inputRef}
        type='text'
        placeholder='Search for a post...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className=' w-full lg:w-[75vw] rounded-t-lg h-12 bg-accent placeholder:text-complementary text-complementary pl-4 transition-all duration-300 ease-in-out'
       />
       <div className=' w-full lg:w-[75vw]'>
        {results.length > 0 && isExpanded && (
         <div className='bg-complementary p-4 rounded-b-lg shadow-md overflow-auto'>
          {results.map((result) => (
           <Link key={result.slug} href={`/blog/${result.slug}`}>
            <div
             onClick={closeSearch}
             className='block p-2 hover:bg-gray-700 hover:rounded-lg text-dominant cursor-pointer'>
             {result.title}
            </div>
           </Link>
          ))}
         </div>
        )}
       </div>
      </div>
     )}
    </div>

    <button
     onClick={() => setIsExpanded(true)}
     type='button'
     className='border-2 paragraph-secondary border-dominant w-full flex items-center rounded-lg justify-start px-2 py-0.5'>
     <svg viewBox='0 0 1024 1024' fill='currentColor' height='1em' width='1em'>
      <path d='M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z' />
     </svg>
     <span className='pl-2 text-xs'>Search Blog Post...</span>
    </button>

    <nav className='lg:flex space-x-4 hidden whitespace-nowrap'>
     <NavigationLinks />
    </nav>
    <MobileNav />
   </div>
  </React.Fragment>
 );
};

export default DesktopNav;
