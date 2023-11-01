// pages/index.js
import React from "react";
import VideoGrid from "@/components/youtube-replica/VideoGrid";
import VideoThumbnail from "@/components/youtube-replica/YoutubeVideo";

const Home = () => {
 return (
  <div className='p-4'>
   <VideoGrid />
  </div>
 );
};

export default Home;
