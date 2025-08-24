"use client";

import Video from "next-video";
import { FC, memo } from "react";
import Container from "../ui/container";

interface MuxEmbedProps {
  embedId: string;
  className?: string;
  id?: string;
  verticalVideo?: boolean;
  controls?: boolean;
  poster?: string;
}

const MuxEmbed: FC<MuxEmbedProps> = ({
  embedId,
  className,
  id,
  verticalVideo = false,
  controls = true,
  poster,
}) => {
  if (!embedId || embedId === "null" || embedId === "undefined") {
    return null;
  }

  // Build Mux URLs from the embedId
  const streamUrl = `https://stream.mux.com/${embedId}.m3u8?default_subtitles_lang=en`;
  const mp4Url = `https://stream.mux.com/${embedId}.mp4?default_subtitles_lang=en`;
  const posterUrl = poster || `https://image.mux.com/${embedId}/animated.gif`;

  // Aspect ratio: 56.25% for 16:9, ~177.78% for 9:16 (vertical)
  const aspectRatio = verticalVideo ? "177.78%" : "56.25%";

  return (
    <Container className={className} id={id}>
      <div className="relative overflow-hidden rounded-lg" style={{ paddingTop: aspectRatio }}>
        <div className="absolute top-0 left-0 h-full w-full">
          <Video
            src={streamUrl}
            poster={posterUrl}
            controls={controls}
            style={{
              aspectRatio: verticalVideo ? "9/16" : "16/9",
              width: "100%",
              height: "100%",
            }}
          >
            <source src={mp4Url} type="video/mp4" />
            <source src={streamUrl} type="application/x-mpegURL" />
          </Video>
        </div>
      </div>
    </Container>
  );
};

export default memo(MuxEmbed);
