"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { FC, memo } from "react";
import Container from "../ui/container";

interface YoutubeEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
  verticalVideo?: boolean; // New optional prop
}

const YoutubeEmbed: FC<YoutubeEmbedProps> = ({
  embedId,
  className,
  id,
  verticalVideo = false, // Default is false
}) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }

  sendGTMEvent({
    event: "gtm_custom_event",
    datalayer_event_name: "youtube_video_loaded",
  });

  // Aspect ratio: 56.25% (16:9) or 177.78% (9:16)
  const aspectRatio = verticalVideo ? "177.78%" : "56.25%";

  return (
    <Container className={className} id={id}>
      <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: aspectRatio }}>
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

export default memo(YoutubeEmbed);
