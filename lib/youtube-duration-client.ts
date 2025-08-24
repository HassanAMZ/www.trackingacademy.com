/**
 * Client-safe utility to get YouTube video duration
 * Provides fallback durations without external API calls
 */

export interface YouTubeDurationResponse {
  duration: string;
  title?: string;
  thumbnail?: string;
}

/**
 * Generate a consistent duration for a YouTube video based on its ID
 * This is a fallback approach that doesn't require external API calls
 * @param videoId - YouTube video ID
 * @returns Duration string in format "X:XX" or "X:XX:XX"
 */
export function getYouTubeDurationFallback(videoId: string): string {
  // Generate a consistent duration based on video ID hash
  // This ensures the same video always gets the same duration
  const hash = videoId.split("").reduce((a, b) => {
    a = ((a << 5) - a + b.charCodeAt(0)) & 0xffffffff;
    return a;
  }, 0);

  const minutes = Math.abs(hash % 13) + 3; // 3-15 minutes
  const seconds = Math.abs(hash % 60);

  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

/**
 * Get YouTube video duration (client-safe)
 * Currently uses fallback duration generation
 * @param videoId - YouTube video ID
 * @returns Promise with duration data
 */
export async function getYouTubeDurationClient(
  videoId: string,
): Promise<YouTubeDurationResponse | null> {
  try {
    // For now, use the fallback duration generator
    // In the future, you could implement a client-safe API call here
    const duration = getYouTubeDurationFallback(videoId);

    return {
      duration,
      title: undefined,
      thumbnail: undefined,
    };
  } catch (error) {
    console.warn(`Failed to get duration for video ${videoId}:`, error);
    return null;
  }
}
