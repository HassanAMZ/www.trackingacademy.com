"use client";

// components/VideoThumbnail.tsx
import React, { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
 videoUrl: string;
}

const YoutubeVideo: React.FC<Props> = ({ videoUrl }) => {
 const [thumbnailUrl, setThumbnailUrl] = useState<string | null>(null);
 const [title, setTitle] = useState<string | null>(null);
 const [views, setViews] = useState<number | null>(null);
 const [time, setTime] = useState<string | null>(null);
 const [channelThumbnailUrl, setChannelThumbnailUrl] = useState<string | null>(
  null
 ); // New state

 useEffect(() => {
  const videoId = new URL(videoUrl).searchParams.get("v");
  if (videoId) {
   fetch(
    `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet,statistics,contentDetails&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
   )
    .then((response) => response.json())
    .then((data) => {
     const channelId = data.items[0].snippet.channelId; // Get channel ID
     const thumbnailUrl = data.items[0].snippet.thumbnails.high.url; // Change 'default' to 'high'
     const title = data.items[0].snippet.title;
     const views = data.items[0].statistics.viewCount;
     const publishTime = new Date(data.items[0].snippet.publishedAt);
     const formattedTime = `${publishTime.toLocaleString("default", {
      month: "long",
     })} ${publishTime.getDate()}, ${publishTime.getFullYear()}`;
     setThumbnailUrl(thumbnailUrl);
     setTitle(title);
     setViews(Number(views)); // Convert views to a number
     setTime(formattedTime); // Set the formatted time

     // Fetch channel details
     return fetch(
      `https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`
     );
    })
    .then((response) => response.json())
    .then((data) => {
     const channelThumbnailUrl = data.items[0].snippet.thumbnails.default.url;
     setChannelThumbnailUrl(channelThumbnailUrl); // Set channel thumbnail URL
    })
    .catch((error) =>
     console.error("Error fetching video or channel details:", error)
    );
  }
 }, [videoUrl]);

 function formatViews(views: number): string {
  if (views >= 1000000) {
   return `${(views / 1000000).toFixed(1)}M`;
  } else if (views >= 1000) {
   return `${(views / 1000).toFixed(1)}K`;
  } else {
   return views.toString();
  }
 }

 return (
  <div>
   {thumbnailUrl && title && views !== null && time && channelThumbnailUrl ? (
    <div>
     <div className='relative' style={{ paddingBottom: "56.25%" }}>
      <img
       src={thumbnailUrl}
       alt='Video Thumbnail'
       className='absolute top-0 left-0 w-full h-full rounded-md object-cover'
      />
     </div>
     <div className=' flex flex-row items-start justify-start gap-3'>
      <img
       src={channelThumbnailUrl}
       alt='Channel Thumbnail'
       className='w-8 h-8 rounded-full mt-3' // Adjust size and styling as needed
      />
      <div className='flex flex-col '>
       <h3 className='text-sm font-medium text-white mt-2'>{title}</h3>
       <p className='text-sm text-gray-400'>
        {formatViews(views)} views • {time}
       </p>
      </div>
     </div>{" "}
    </div>
   ) : (
    <p>Loading video and channel details...</p>
   )}
  </div>
 );
};

export default YoutubeVideo;
