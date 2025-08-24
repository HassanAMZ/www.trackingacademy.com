"use client";

import MuxPlayer from "@mux/mux-player-react";
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
  const streamUrl = `https://stream.mux.com/${embedId}.m3u8`;
  const posterUrl = poster || `https://image.mux.com/${embedId}/animated.gif`;

  return (
    <Container className={className} id={id}>
      <div className="relative overflow-hidden rounded-lg">
        <MuxPlayer
          streamType="on-demand"
          playbackId={embedId}
          poster={posterUrl}
          style={{
            aspectRatio: verticalVideo ? "9/16" : "16/9",
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </Container>
  );
};

export default memo(MuxEmbed);
