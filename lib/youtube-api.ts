import { google } from "googleapis";
import { cache } from "react";

// YouTube API configuration
const youtube = google.youtube("v3");

export interface YouTubeVideoData {
  id: string;
  title: string;
  description: string;
  duration: string;
  viewCount: string;
  likeCount: string;
  publishedAt: string;
  thumbnails: {
    default?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    high?: { url: string; width: number; height: number };
    maxres?: { url: string; width: number; height: number };
  };
  tags: string[];
  categoryId: string;
  defaultLanguage?: string | null;
  defaultAudioLanguage?: string | null;
}

export interface YouTubeChannelData {
  id: string;
  title: string;
  description: string;
  subscriberCount: string;
  viewCount: string;
  videoCount: string;
  thumbnails: {
    default?: { url: string; width: number; height: number };
    medium?: { url: string; width: number; height: number };
    high?: { url: string; width: number; height: number };
  };
}

/**
 * Fetch video metadata from YouTube API with Next.js React cache
 * @param videoId - YouTube video ID
 * @param apiKey - YouTube Data API key
 * @returns Promise<YouTubeVideoData | null>
 */
export const getYouTubeVideoData = cache(
  async (videoId: string, apiKey?: string): Promise<YouTubeVideoData | null> => {
    // Use environment variable if no API key provided
    const key = apiKey || process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;

    if (!key) return null;

    try {
      const response = await youtube.videos.list({
        key,
        part: ["snippet", "contentDetails", "statistics"],
        id: [videoId],
      });

      if (!response.data.items?.[0]) return null;

      const video = response.data.items[0];
      const { snippet, contentDetails, statistics } = video;

      if (!snippet || !contentDetails || !statistics) return null;

      // Convert ISO 8601 duration to readable format
      const duration = formatDuration(contentDetails.duration || "");

      // Transform thumbnails efficiently
      const transformedThumbnails: YouTubeVideoData["thumbnails"] = {};
      if (snippet.thumbnails) {
        Object.entries(snippet.thumbnails).forEach(([quality, thumbnail]) => {
          if (thumbnail?.url) {
            transformedThumbnails[quality as keyof typeof transformedThumbnails] = {
              url: thumbnail.url,
              width: thumbnail.width || 0,
              height: thumbnail.height || 0,
            };
          }
        });
      }

      return {
        id: videoId,
        title: snippet.title || "",
        description: snippet.description || "",
        duration,
        viewCount: statistics.viewCount || "0",
        likeCount: statistics.likeCount || "0",
        publishedAt: snippet.publishedAt || "",
        thumbnails: transformedThumbnails,
        tags: snippet.tags || [],
        categoryId: snippet.categoryId || "",
        defaultLanguage: snippet.defaultLanguage || undefined,
        defaultAudioLanguage: snippet.defaultAudioLanguage || undefined,
      };
    } catch (error) {
      return null;
    }
  },
);

/**
 * Fetch channel metadata from YouTube API
 * @param channelId - YouTube channel ID
 * @param apiKey - YouTube Data API key
 * @returns Promise<YouTubeChannelData | null>
 */
export async function getYouTubeChannelData(
  channelId: string,
  apiKey: string,
): Promise<YouTubeChannelData | null> {
  try {
    const response = await youtube.channels.list({
      key: apiKey,
      part: ["snippet", "statistics"],
      id: [channelId],
    });

    if (!response.data.items || response.data.items.length === 0) {
      console.warn(`No channel found with ID: ${channelId}`);
      return null;
    }

    const channel = response.data.items[0];
    const snippet = channel.snippet;
    const statistics = channel.statistics;

    if (!snippet || !statistics) {
      console.warn(`Incomplete channel data for ID: ${channelId}`);
      return null;
    }

    // Transform thumbnails to match our interface
    const transformedThumbnails: YouTubeChannelData["thumbnails"] = {};
    if (snippet.thumbnails) {
      if (snippet.thumbnails.default) {
        transformedThumbnails.default = {
          url: snippet.thumbnails.default.url || "",
          width: snippet.thumbnails.default.width || 0,
          height: snippet.thumbnails.default.height || 0,
        };
      }
      if (snippet.thumbnails.medium) {
        transformedThumbnails.medium = {
          url: snippet.thumbnails.medium.url || "",
          width: snippet.thumbnails.medium.width || 0,
          height: snippet.thumbnails.medium.height || 0,
        };
      }
      if (snippet.thumbnails.high) {
        transformedThumbnails.high = {
          url: snippet.thumbnails.high.url || "",
          width: snippet.thumbnails.high.width || 0,
          height: snippet.thumbnails.high.height || 0,
        };
      }
    }

    return {
      id: channelId,
      title: snippet.title || "",
      description: snippet.description || "",
      subscriberCount: statistics.subscriberCount || "0",
      viewCount: statistics.viewCount || "0",
      videoCount: statistics.videoCount || "0",
      thumbnails: transformedThumbnails,
    };
  } catch (error) {
    console.error("Error fetching YouTube channel data:", error);
    return null;
  }
}

/**
 * Convert ISO 8601 duration to readable format
 * @param duration - ISO 8601 duration string (e.g., "PT4M13S")
 * @returns Formatted duration string (e.g., "4:13")
 */
function formatDuration(duration: string): string {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);

  if (!match) return "0:00";

  const hours = (match[1] || "").replace("H", "");
  const minutes = (match[2] || "").replace("M", "");
  const seconds = (match[3] || "").replace("S", "");

  let result = "";

  if (hours) {
    result += `${hours}:${minutes.padStart(2, "0")}:${seconds.padStart(2, "0")}`;
  } else if (minutes) {
    result += `${minutes}:${seconds.padStart(2, "0")}`;
  } else {
    result += `0:${seconds.padStart(2, "0")}`;
  }

  return result;
}

/**
 * Extract video ID from YouTube URL
 * @param url - YouTube URL (various formats supported)
 * @returns Video ID or null if invalid
 */
export function extractYouTubeVideoId(url: string): string | null {
  const patterns = [
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/|youtube\.com\/v\/)([^&\n?#]+)/,
    /youtube\.com\/watch\?.*v=([^&\n?#]+)/,
  ];

  for (const pattern of patterns) {
    const match = url.match(pattern);
    if (match) return match[1];
  }

  return null;
}
