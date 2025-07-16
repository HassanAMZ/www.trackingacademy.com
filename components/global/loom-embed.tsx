"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import { FC, memo } from "react";
import Container from "../ui/container";

interface LoomEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
  backgroundImage?: string;
  hideControls?: boolean;
  verticalVideo?: boolean; // New prop
}

const LoomEmbed: FC<LoomEmbedProps> = ({
  embedId,
  className,
  id,
  backgroundImage,
  hideControls = true,
  verticalVideo = false, // Default to false
}) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }

  const buildEmbedUrl = (id: string, hideControls: boolean) => {
    const baseUrl = `https://www.loom.com/embed/${id}`;

    if (!hideControls) {
      return baseUrl;
    }

    const params = new URLSearchParams({
      hide_owner: "false",
      hide_top_bar: "false",
      hideEmbedTopBar: "false",
      hide_speed: "false",
      hide_title: "false",
      hide_share: "false",
      hide_video_source: "false",
    });

    return `${baseUrl}?${params.toString()}`;
  };

  // Track video load event
  sendGTMEvent({
    event: "gtm_custom_event",
    datalayer_event_name: "loom_video_loaded",
  });

  // Determine aspect ratio: 56.25% for 16:9, ~177.78% for 9:16 (vertical)
  const aspectRatio = verticalVideo ? "177.78%" : "56.25%";

  return (
    <Container className={className} id={id}>
      <div
        className="relative overflow-hidden rounded-lg"
        style={{
          paddingTop: aspectRatio,
          ...(backgroundImage && {
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }),
        }}
      >
        <iframe
          src={buildEmbedUrl(embedId, hideControls)}
          className="absolute top-0 left-0 h-full w-full rounded-lg"
          allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          title="Embedded Loom Video"
        />
      </div>
    </Container>
  );
};

export default memo(LoomEmbed);
