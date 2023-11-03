"use client";

import React, { useEffect, useState } from "react";
import VideoUrlInput from "./VideoUrlInput ";
import YouTubeSearch from "./YoutubeSearch";
import YoutubeVideo from "./YoutubeVideo";
import { VideoUrl, VideoDetails } from "@/types/index";

const VideoGrid = () => {
 const [addedVideos, setAddedVideos] = useState<VideoUrl[]>([]);
 const [videos, setVideos] = useState<VideoUrl[]>([]);
 const [videoDetails, setVideoDetails] = useState<VideoDetails[]>([]);
 const [videoInput, setVideoInput] = useState("");
 const [errorMessage, setErrorMessage] = useState("");

 const fetchVideosDetails = async (videoIds: string[]) => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?id=${videoIds.join(
   ","
  )}&part=snippet,statistics&key=${apiKey}`;

  try {
   const response = await fetch(url);
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }

   const data = await response.json();
   return data.items as VideoDetails[];
  } catch (error) {
   console.error("Failed to fetch video details:", error);
   setErrorMessage("Failed to load video details.");
   return [];
  }
 };

 const fetchTrendingVideos = async () => {
  const apiKey = process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
  const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=24&key=${apiKey}`;

  try {
   const response = await fetch(url);
   if (!response.ok) {
    throw new Error("Network response was not ok");
   }
   const data = await response.json();
   return data.items;
  } catch (error) {
   console.error("Failed to fetch trending videos:", error);
   setErrorMessage("Failed to load trending videos.");
   return [];
  }
 };

 useEffect(() => {
  const initializeTrendingVideos = async () => {
   const trendingVideos = await fetchTrendingVideos();
   if (trendingVideos.length > 0) {
    const trendingVideoUrls = trendingVideos.map(
     (video: { id: string }) => `https://www.youtube.com/watch?v=${video.id}`
    );
    setVideos(trendingVideoUrls);
    setVideoDetails(trendingVideos);
   }
  };

  initializeTrendingVideos();
 }, []);

 useEffect(() => {
  const fetchAllVideoDetails = async () => {
   const videoIds = videos
    .map((videoUrl) => {
     const urlParams = new URL(videoUrl).searchParams;
     return urlParams.get("v");
    })
    .filter(Boolean) as string[];
   if (videoIds.length > 0) {
    const details = await fetchVideosDetails(videoIds);
    setVideoDetails(details);
   }
  };
  fetchAllVideoDetails();
 }, [videos]);

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

 const handleSearchComplete = (searchResults: string[]) => {
  setVideos((prevVideos) => insertRandomly(searchResults, addedVideos));
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

 return (
  <>
   <div className='flex py-2 flex-col backgroundOverlay gap-2 items-center justify-between'>
    <YouTubeSearch onSearchComplete={handleSearchComplete} />
    <VideoUrlInput
     videoInput={videoInput}
     setVideoInput={setVideoInput}
     addVideo={addVideo}
     errorMessage={errorMessage}
    />
   </div>

   <div className='grid grid-cols-1 py-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6'>
    {videos.map((videoUrl, index) => {
     const videoId = new URL(videoUrl).searchParams.get("v");
     const details = videoDetails.find((detail) => detail.id === videoId);

     return (
      <div key={index} className='video-item'>
       <YoutubeVideo videoUrl={videoUrl} details={details} />
      </div>
     );
    })}
   </div>
  </>
 );
};

export default VideoGrid;
