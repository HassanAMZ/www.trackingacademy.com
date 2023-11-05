"use client";

// YouTubeSearch.tsx

import React, { useState, FC } from "react";

interface YouTubeSearchProps {
 onSearchComplete: (searchResults: string[]) => void;
}

const YouTubeSearch: FC<YouTubeSearchProps> = ({ onSearchComplete }) => {
 const [searchInput, setSearchInput] = useState<string>("");
 const [errorMessage, setErrorMessage] = useState<string>("");

 const searchYouTube = async () => {
  if (!searchInput) {
   setErrorMessage("Please enter a search query.");
   return;
  } else {
   setErrorMessage("");
  }

  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY; // Replace with your actual API key
  const maxResults = 20;
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
   searchInput
  )}&maxResults=${maxResults}&key=${apiKey}&type=video`;

  try {
   const response = await fetch(url, { cache: "force-cache" });
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }
   const data = await response.json();
   const searchResults = data.items.map(
    (item: any) => `https://www.youtube.com/watch?v=${item.id.videoId}`
   );
   onSearchComplete(searchResults);
  } catch (error) {
   setErrorMessage("Failed to fetch videos. Please try again.");
   console.error("Error fetching videos:", error);
  }
 };

 return (
  <div className='flex flex-col md:flex-row gap-2 w-full px-2'>
   <input
    type='text'
    value={searchInput}
    onChange={(e) => setSearchInput(e.target.value)}
    placeholder='Enter search term'
    className='flex-1 p-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full'
   />
   <button
    onClick={searchYouTube}
    className='bg-blue-500 md:w-40 w-full text-white p-2 rounded-full shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50'>
    Search
   </button>
   {errorMessage && (
    <p className='text-red-500 text-xs italic'>{errorMessage}</p>
   )}
  </div>
 );
};

export default YouTubeSearch;
