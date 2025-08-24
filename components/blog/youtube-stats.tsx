"use client";

import { Button } from "@/components/ui/button";
import { YouTubeVideoData } from "@/lib/youtube-api";
import { Clock, ExternalLink, Eye, ThumbsUp } from "lucide-react";

interface YouTubeStatsProps {
  videoData: YouTubeVideoData;
  embedId: string;
}

const YouTubeStats: React.FC<YouTubeStatsProps> = ({ videoData, embedId }) => {
  const formatNumber = (num: string) => {
    const number = parseInt(num);
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + "M";
    } else if (number >= 1000) {
      return (number / 1000).toFixed(1) + "K";
    }
    return number.toString();
  };

  const openYouTube = () => {
    window.open(`https://www.youtube.com/watch?v=${embedId}`, "_blank");
  };

  return (
    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
      <Button
        variant="ghost"
        size="sm"
        onClick={openYouTube}
        className="h-auto p-2 text-xs hover:bg-muted/50"
      >
        <ExternalLink className="mr-1.5 h-3 w-3" />
        Watch on YouTube
      </Button>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3" />
          <span>{videoData.duration}</span>
        </div>

        <div className="flex items-center gap-1.5">
          <Eye className="h-3 w-3" />
          <span>{formatNumber(videoData.viewCount)} views</span>
        </div>

        <div className="flex items-center gap-1.5">
          <ThumbsUp className="h-3 w-3" />
          <span>{formatNumber(videoData.likeCount)} likes</span>
        </div>
      </div>
    </div>
  );
};

export default YouTubeStats;
