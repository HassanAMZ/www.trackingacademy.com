"use client";

import React from "react";
import CustomLink from "@/components/mdx/CustomLink";
import { VideoDetails, YoutubdeVideoProps } from "@/types/index";

const YoutubeVideo: React.FC<YoutubdeVideoProps> = ({ videoUrl, details }) => {
  // Function to format views count
  function formatViews(views: string): string {
    const viewNumber = parseInt(views, 10);
    if (viewNumber >= 1000000) {
      return `${(viewNumber / 1000000).toFixed(1)}M`;
    } else if (viewNumber >= 1000) {
      return `${(viewNumber / 1000).toFixed(1)}K`;
    } else {
      return views;
    }
  }

  function formatTimeSince(date: string): string {
    const videoDate = new Date(date);
    const now = new Date();
    const timeDiff = now.getTime() - videoDate.getTime();

    const seconds = timeDiff / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7; // Calculate weeks
    const years = days / 365;

    if (years >= 1) {
      return `${Math.floor(years)} year${Math.floor(years) > 1 ? "s" : ""} ago`;
    } else if (weeks >= 1) {
      return `${Math.floor(weeks)} week${Math.floor(weeks) > 1 ? "s" : ""} ago`;
    } else if (days >= 1) {
      return `${Math.floor(days)} day${Math.floor(days) > 1 ? "s" : ""} ago`;
    } else if (hours >= 1) {
      return `${Math.floor(hours)} hour${Math.floor(hours) > 1 ? "s" : ""} ago`;
    } else if (minutes >= 1) {
      return `${Math.floor(minutes)} minute${
        Math.floor(minutes) > 1 ? "s" : ""
      } ago`;
    } else {
      return `${Math.floor(seconds)} second${
        Math.floor(seconds) > 1 ? "s" : ""
      } ago`;
    }
  }

  return (
    <div>
      {details ? (
        <div>
          <div className="relative" style={{ paddingBottom: "56.25%" }}>
            <img
              src={details.snippet.thumbnails.medium.url}
              alt="Video Thumbnail"
              className="absolute left-0 top-0 h-full w-full rounded-lg object-cover"
            />
          </div>
          <div className="mt-3 flex flex-row items-start justify-start gap-3">
            {/* Profile picture */}
            <img
              src={details.snippet.thumbnails.default.url} // Replace with the correct property path if different
              alt="Channel Thumbnail"
              className="h-10 w-10 rounded-full bg-repeat object-cover object-center" // Adjust size and styling as needed
            />
            <div className="flex flex-col">
              <CustomLink
                href={videoUrl}
                className="text-dominant font-medium !no-underline"
              >
                {details.snippet.title}
              </CustomLink>
              <p className="text-dominant">
                {formatViews(details.statistics.viewCount)} views •{" "}
                {formatTimeSince(details.snippet.publishedAt)}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>Loading video details...</p>
      )}
    </div>
  );
};

export default YoutubeVideo;
