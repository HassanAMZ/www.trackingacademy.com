"use client";

import React, { useEffect, useState } from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import YoutubeVideo from "./YoutubeVideo";
import YouTubeSearch from "./YoutubeSearch";
import VideoUrlInput from "./VideoUrlInput ";

const defaultVideos = [
 "https://www.youtube.com/watch?v=GZ42PIi9bis",
 "https://www.youtube.com/watch?v=btcYU2xXdtc",
 "https://www.youtube.com/watch?v=Y0amF_F6EvI",
 "https://www.youtube.com/watch?v=HW8NAmD7dEQ",
 "https://www.youtube.com/watch?v=iCzBVWdNOeE",
 "https://www.youtube.com/watch?v=2_ELnXpDB5U",
 "https://www.youtube.com/watch?v=857ednPWvgg",
 "https://www.youtube.com/watch?v=L4rXidEr248",
 "https://www.youtube.com/watch?v=yxF9TGhWPMc",
 "https://www.youtube.com/watch?v=Rte7VuVEwCA",
 "https://www.youtube.com/watch?v=Nv60Vww-YZ4",
 "https://www.youtube.com/watch?v=uEnLhxL8Afs",
 "https://www.youtube.com/watch?v=M8xdxafesmo",
 "https://www.youtube.com/watch?v=AqjACHug_N0",
 "https://www.youtube.com/watch?v=t6J-m7I056E",
 "https://www.youtube.com/watch?v=AeQ3f4zmSMs",
 "https://www.youtube.com/watch?v=3X9u2bNG2aY",
 "https://www.youtube.com/watch?v=75d_29QWELk",
 "https://www.youtube.com/watch?v=lpcsg4ziKus",
 "https://www.youtube.com/watch?v=XXXtJ8NJKo8",
];
type VideoUrl = string;

const VideoGrid = () => {
 const [addedVideos, setAddedVideos] = useState<VideoUrl[]>([]);
 const [videos, setVideos] = useState<VideoUrl[]>([]);
 const [videoInput, setVideoInput] = useState("");
 const [errorMessage, setErrorMessage] = useState("");
 const fetchFeaturedVideos = async () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const maxResults = 16;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=${maxResults}&key=${apiKey}`;

  try {
   const response = await fetch(url);
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }
   const data = await response.json();
   const featuredVideos: VideoUrl[] = data.items.map(
    (item: any) => `https://www.youtube.com/watch?v=${item.id}`
   );
   setVideos(featuredVideos);
  } catch (error) {
   console.error("Failed to fetch featured videos:", error);
   setErrorMessage("Failed to load featured videos.");
   setVideos(defaultVideos);
  }
 };

 const addVideo = () => {
  const inputVideos = videoInput.split(",").map((url) => url.trim());
  const validVideos = inputVideos.filter((url) =>
   url.includes("youtube.com/watch?v=")
  );

  if (validVideos.length === 0) {
   setErrorMessage(
    "Please enter valid YouTube video URLs, separated by commas if multiple."
   );
   return;
  } else {
   setErrorMessage("");
  }

  setAddedVideos((prevAddedVideos) =>
   insertRandomly(prevAddedVideos, validVideos)
  );
  setVideos((prevVideos) => insertRandomly(prevVideos, validVideos));
  setVideoInput("");
 };

 const handleSearchComplete = (searchResults: string[]) => {
  setVideos((prevVideos) => insertRandomly(searchResults, addedVideos));
 };
 const insertRandomly = (
  existingItems: VideoUrl[],
  newItems: VideoUrl[]
 ): VideoUrl[] => {
  let result = [...existingItems];

  newItems.forEach((item) => {
   let randomIndex = Math.floor(Math.random() * (result.length + 1));
   result.splice(randomIndex, 0, item);
  });

  return result;
 };
 useEffect(() => {
  console.log("Component did mount, fetching featured videos");
  fetchFeaturedVideos();
 }, []);
 return (
  <>
   <div className='flex py-2 flex-col backgroundOverlay gap-2 items-center justify-between px-2'>
    <YouTubeSearch onSearchComplete={handleSearchComplete} />
    <VideoUrlInput
     videoInput={videoInput}
     setVideoInput={setVideoInput}
     addVideo={addVideo}
     errorMessage={errorMessage}
    />
   </div>

   <div className='grid grid-cols-1 py-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6'>
    {videos.map((videoUrl, index) => (
     <div key={index} className='video-item'>
      <YoutubeVideo videoUrl={videoUrl} />
     </div>
    ))}
   </div>
  </>
 );
};

export default VideoGrid;
