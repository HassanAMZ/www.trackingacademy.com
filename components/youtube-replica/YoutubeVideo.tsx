"use client";

import React from "react";
import CustomLink from "../mdx/CustomLink";
import { VideoDetails, YoutubdeVideoProps } from "@/types/index";

const YoutubeVideo: React.FC<YoutubdeVideoProps> = ({ videoUrl, details }) => {
 // Function to format views count
 function formatViews(views: string): string {
  const viewNumber = parseInt(views, 10);
  if (viewNumber >= 1000000) {
   return `${(viewNumber / 1000000).toFixed(1)}M`;
  } else if (viewNumber >= 1000) {
   return `${(viewNumber / 1000).toFixed(1)}K`;
  } else {
   return views;
  }
 }

 // If details are provided, render them. Otherwise, display a loading message
 return (
  <div>
   {details ? (
    <div>
     <div className='relative' style={{ paddingBottom: "56.25%" }}>
      <img
       src={details.snippet.thumbnails.medium.url}
       alt='Video Thumbnail'
       className='absolute top-0 left-0 w-full h-full rounded-md object-cover'
      />
     </div>
     <div className='flex flex-row items-start justify-start gap-3 mt-3'>
      {/* This assumes you want to show the video's title and view count */}
      <div className='flex flex-col'>
       <CustomLink
        href={videoUrl}
        className='!no-underline text-sm font-medium dark:text-white text-black'>
        {details.snippet.title}
       </CustomLink>
       <p className='text-sm dark:text-gray-400 text-gray-800'>
        {formatViews(details.statistics.viewCount)} views
       </p>
      </div>
     </div>
    </div>
   ) : (
    <p>Loading video details...</p>
   )}
  </div>
 );
};

export default YoutubeVideo;
