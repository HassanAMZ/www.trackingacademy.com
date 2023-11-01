// components/VideoGrid.js
import Image from "next/image";
import React from "react";
import ContainerLayout from "../layouts/ContainerLayout";
import YoutubeVideo from "./YoutubeVideo";

const videos = [
 "https://www.youtube.com/watch?v=GZ42PIi9bis",
 "https://www.youtube.com/watch?v=btcYU2xXdtc",
 "https://www.youtube.com/watch?v=Y0amF_F6EvI",
 "https://www.youtube.com/watch?v=HW8NAmD7dEQ",
 "https://www.youtube.com/watch?v=iCzBVWdNOeE",
 "https://www.youtube.com/watch?v=2_ELnXpDB5U",
 "https://www.youtube.com/watch?v=857ednPWvgg",
 "https://www.youtube.com/watch?v=L4rXidEr248",
 "https://youtube.com/watch?v=yxF9TGhWPMc",
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

const VideoGrid = () => {
 return (
  <ContainerLayout className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6'>
   {videos.map((videoLink, index) => (
    <div key={index} className='video-item'>
     <YoutubeVideo videoUrl={videoLink} />
    </div>
   ))}
  </ContainerLayout>
 );
};

export default VideoGrid;
