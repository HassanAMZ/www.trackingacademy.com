"use client";

import { Suspense } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface VideoPlayerProps {
  src: string;
  placeholder: string;
  className?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  placeholder,
  className,
}) => {
  return (
    <Suspense
      fallback={
        <Image
          src={placeholder}
          alt="comparison image"
          width={400}
          height={525}
          className="w-full rounded-lg"
        />
      }
    >
      <Card className="overflow-hidden rounded-t-lg">
        <CardContent
          className={cn(className, "overflow-hidden rounded-lg p-0")}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            onLoadedMetadata={(e) => {
              e.currentTarget.playbackRate = 1;
            }}
          >
            <source src={src} type="video/mp4" />
          </video>
        </CardContent>
      </Card>
    </Suspense>
  );
};

export default VideoPlayer;
