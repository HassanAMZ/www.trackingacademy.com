/**
 * Server-side utility to get YouTube video duration
 * This can only be used in server components
 */

import { getYouTubeVideoData } from "./youtube-api";

export interface YouTubeDurationResponse {
  duration: string;
  title?: string;
  thumbnail?: string;
}

/**
 * Fetch YouTube video duration using the Google API (server-side only)
 * @param videoId - YouTube video ID
 * @returns Promise with duration data or null
 */
export async function getYouTubeDurationServer(
  videoId: string,
): Promise<YouTubeDurationResponse | null> {
  try {
    const videoData = await getYouTubeVideoData(videoId);

    if (videoData?.duration) {
      return {
        duration: videoData.duration,
        title: videoData.title,
        thumbnail: videoData.thumbnails?.maxres?.url || videoData.thumbnails?.high?.url,
      };
    }

    return null;
  } catch (error) {
    console.warn(`Failed to fetch duration for video ${videoId}:`, error);
    return null;
  }
}
