import React, { FC, Fragment, useEffect } from "react";
import { YoutubeEmbedProps } from "@/types/index";

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId }) => {
 if (
  embedId === null ||
  embedId === undefined ||
  embedId === "null" ||
  embedId === "undefined"
 ) {
  return <Fragment />; // or simply return <></>;
 }

 return (
  <div
   id='youtubeEmbedMdxComponents'
   className='video-responsive shadow-md rounded-md'>
   <iframe
    width={853}
    height={480}
    src={`https://www.youtube.com/embed/${embedId}`}
    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    allowFullScreen
    title='Embedded youtube'
   />
  </div>
 );
};

export default YoutubeEmbed;
