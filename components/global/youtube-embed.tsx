"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import dynamic from "next/dynamic";
import { FC, memo } from "react";
import Container from "../ui/container";

interface YoutubeEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({ embedId, className, id }) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }
  sendGTMEvent({
    event: "gtm_custom_event",
    datalayer_event_name: "youtube_video_loaded",
  });

  return (
    <Container className={className} id={id}>
      <div
        className="relative overflow-hidden rounded-lg"
        style={{ paddingTop: "56.25%" }}
      >
        <iframe
          className="absolute top-0 left-0 h-full w-full rounded-lg"
          src={`https://www.youtube.com/embed/${embedId}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded Youtube Video"
        />
      </div>
    </Container>
  );
};

// Dynamically import with SSR disabled (optional)
export default memo(YoutubeEmbed);
