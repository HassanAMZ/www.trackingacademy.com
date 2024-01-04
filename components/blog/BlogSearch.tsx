"use client";

import React, { useState, useEffect } from "react";
import { PostMetadata } from "@/types/index";
import { BlogSearchProps } from "@/types/index";
import {
 Heading6xl,
 Paragraphlg,
 Paragraphsm,
} from "@/components/typography/Heading";

const cmsOptions = ["Shopify", "WordPress", "Joomla", "React", "Others"];
const pixelOptions = ["GA4", "Facebook Pixel", "TikTok Pixel"];
const eventOptions = [
 "Page View",
 "View Item",
 "Begin Checkout",
 "Add To Cart",
 "Purchase",
];
const integrationOptions = ["Plugin", "Google Tag Manager", "Gtag"];

const BlogSearch: React.FC<BlogSearchProps> = ({ data, onSearch }) => {
 const [searchTerm, setSearchTerm] = useState("");
 const [results, setResults] = useState<PostMetadata[]>(data);
 const [selectedCMS, setSelectedCMS] = useState("");
 const [selectedPixel, setSelectedPixel] = useState("");
 const [selectedEvent, setSelectedEvent] = useState("");
 const [selectedIntegration, setSelectedIntegration] = useState("");
 console.log(data[0]);
 useEffect(() => {
  const searchWords = searchTerm
   .toLowerCase()
   .split(" ")
   .filter((word) => word);
  const filtered = data.filter((post) => {
   const matchesSearchTerm = searchWords.every(
    (word) =>
     post.title.toLowerCase().includes(word) ||
     post.description.toLowerCase().includes(word) ||
     post.tags.some((tag) => tag.toLowerCase().includes(word))
   );

   const matchesDropdowns =
    (selectedCMS === "" ||
     post.title.toLowerCase().includes(selectedCMS.toLowerCase()) ||
     post.description.toLowerCase().includes(selectedCMS.toLowerCase()) ||
     post.tags.some((tag) =>
      tag.toLowerCase().includes(selectedCMS.toLowerCase())
     )) &&
    (selectedPixel === "" ||
     post.title.toLowerCase().includes(selectedPixel.toLowerCase()) ||
     post.description.toLowerCase().includes(selectedPixel.toLowerCase()) ||
     post.tags.some((tag) =>
      tag.toLowerCase().includes(selectedPixel.toLowerCase())
     )) &&
    (selectedEvent === "" ||
     post.title.toLowerCase().includes(selectedEvent.toLowerCase()) ||
     post.description.toLowerCase().includes(selectedEvent.toLowerCase()) ||
     post.tags.some((tag) =>
      tag.toLowerCase().includes(selectedEvent.toLowerCase())
     )) &&
    (selectedIntegration === "" ||
     post.title.toLowerCase().includes(selectedIntegration.toLowerCase()) ||
     post.description
      .toLowerCase()
      .includes(selectedIntegration.toLowerCase()) ||
     post.tags.some((tag) =>
      tag.toLowerCase().includes(selectedIntegration.toLowerCase())
     ));

   return matchesSearchTerm && matchesDropdowns;
  });

  setResults(filtered);
  onSearch(filtered);
 }, [
  searchTerm,
  selectedCMS,
  selectedPixel,
  selectedEvent,
  selectedIntegration,
 ]);

 return (
  <div className='flex flex-col pt-6 pb-1 sm:py-12 items-left sm:items-center sm:text-center justify-center w-full gap-4'>
   <Heading6xl className='!text-4xl sm:!text-6xl'>
    Articles, Ideas and Inspiration!
   </Heading6xl>
   <Paragraphsm className='sm:w-2/3 w-full'>
    A helpful blog for web analysts, trying to make sense of marketing with
    data, tag manager, analytics and tracking scripts.
   </Paragraphsm>
   <div className='border relative flex sm:w-2/3 w-full items-center h-10 rounded-full focus-within:shadow-lg bg-white dark:bg-gray-800  overflow-hidden'>
    <div className='grid place-items-center h-full w-12 text-gray-300'>
     <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'>
      <path
       strokeLinecap='round'
       strokeLinejoin='round'
       strokeWidth='2'
       d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
      />
     </svg>
    </div>
    <input
     type='text'
     placeholder='Search for a post...'
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
     className='p-1 rounded-full text-gray-800 dark:text-white bg-transparent peer h-full w-full outline-none text-sm  pr-2'
    />
   </div>

   {/* Dropdowns */}
   <div className='flex flex-wrap sm:justify-center gap-3 '>
    {/* CMS Selector */}
    <select
     value={selectedCMS}
     onChange={(e) => setSelectedCMS(e.target.value)}
     className={`py-2 px-4 rounded-full inline-flex items-center bg-white border  cursor-pointer  text-gray-700 dark:bg-gray-800 dark:text-white`}>
     <option value=''>Select CMS</option>
     {cmsOptions.map((cms) => (
      <option key={cms} value={cms}>
       {cms}
      </option>
     ))}
    </select>

    {/* Pixel Selector */}
    <select
     value={selectedPixel}
     onChange={(e) => setSelectedPixel(e.target.value)}
     className={`py-2 px-4 rounded-full inline-flex items-center bg-white border  cursor-pointer  text-gray-700 dark:bg-gray-800 dark:text-white`}>
     <option value=''>Select Pixel</option>
     {pixelOptions.map((pixel) => (
      <option key={pixel} value={pixel}>
       {pixel}
      </option>
     ))}
    </select>

    {/* Event Selector */}
    <select
     value={selectedEvent}
     onChange={(e) => setSelectedEvent(e.target.value)}
     className={`py-2 px-4 rounded-full inline-flex items-center bg-white border  cursor-pointer  text-gray-700 dark:bg-gray-800 dark:text-white`}>
     <option value=''>Select Event</option>
     {eventOptions.map((event) => (
      <option key={event} value={event}>
       {event}
      </option>
     ))}
    </select>

    {/* Integration Type Selector */}
    <select
     value={selectedIntegration}
     onChange={(e) => setSelectedIntegration(e.target.value)}
     className={`py-2 px-4 rounded-full inline-flex items-center bg-white border  cursor-pointer  text-gray-700 dark:bg-gray-800 dark:text-white`}>
     <option value=''>Select Integration Type</option>
     {integrationOptions.map((integration) => (
      <option key={integration} value={integration}>
       {integration}
      </option>
     ))}
    </select>
   </div>

   {results.length === 0 && (
    <div className='flex flex-col items-center mt-6'>
     <span role='img' aria-label='Thinking face' style={{ fontSize: "3rem" }}>
      😭
     </span>
     <Paragraphlg className='mt-4 text-gray-600 dark:text-gray-300'>
      We couldn't find any posts matching your search '{searchTerm}'.
      <span role='img' aria-label='Shrug'>
       {" "}
       🤷‍♂️
      </span>
     </Paragraphlg>
    </div>
   )}
  </div>
 );
};

export default BlogSearch;
