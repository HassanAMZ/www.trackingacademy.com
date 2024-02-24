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
         "block p-2 hover:bg-gray-700 hover:rounded-lg text-light-primary cursor-pointer"
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
    <NavLink href='/' className=''>
     TrackingAcademy
    </NavLink>
   </div>
   <div className='flex items-center justify-center'>
    <div
     ref={searchContainerRef}
     className={`${
      isExpanded
       ? "fixed inset-0 z-50 bg-dark-secondary whitespace-nowrap bg-opacity-10 backdrop-blur-md transition-opacity duration-300 ease-in-out"
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
        className=' w-full lg:w-[75vw] rounded-t-lg h-12 bg-primary placeholder:text-dark-primary text-dark-primary pl-4 transition-all duration-300 ease-in-out'
       />
       <div className=' w-full lg:w-[75vw] '>
        {results.length > 0 && isExpanded && (
         <div className='bg-dark-primary p-4 rounded-b-lg shadow-lg overflow-auto'>
          {results.map((result) => (
           <Link key={result.slug} href={`/blog/${result.slug}`}>
            <div
             onClick={closeSearch}
             className='block p-2 hover:bg-gray-700 hover:rounded-lg text-light-primary cursor-pointer'>
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
     className='border paragraph-secondary border-light-primary w-full flex items-center rounded-lg justify-start py-1 pl-2 pr-3 mx-6'>
     <svg
      width='18'
      height='18'
      fill='none'
      aria-hidden='true'
      className='mr-2 flex-none'>
      <path
       d='m19 19-3.5-3.5'
       stroke='currentColor'
       strokeWidth='2'
       strokeLinecap='round'
       strokeLinejoin='round'></path>
      <circle
       cx='10'
       cy='10'
       r='5'
       stroke='currentColor'
       strokeWidth='2'
       strokeLinecap='round'
       strokeLinejoin='round'></circle>
     </svg>
     Blog&nbsp;<span className='sm:hidden lg:block'>search...</span>
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
