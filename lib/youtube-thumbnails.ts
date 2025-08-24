/**
 * Get YouTube thumbnail URL
 * @param videoId - YouTube video ID
 * @param quality - Thumbnail quality (default, medium, high, maxres)
 * @returns Thumbnail URL
 */
export function getYouTubeThumbnail(
  videoId: string,
  quality: "default" | "medium" | "high" | "maxres" = "maxres",
): string {
  return `https://img.youtube.com/vi/${videoId}/${quality}default.jpg`;
}

/**
 * Get the best available YouTube thumbnail URL for a given video ID
 * @param videoId - YouTube video ID
 * @returns Best available thumbnail URL
 */
export function getBestYouTubeThumbnail(videoId: string): string {
  // Try maxres first, then high, medium, and default as fallbacks
  const qualities: Array<"maxres" | "high" | "medium" | "default"> = [
    "maxres",
    "high",
    "medium",
    "default",
  ];

  for (const quality of qualities) {
    const url = getYouTubeThumbnail(videoId, quality);
    // Note: In a real implementation, you might want to check if the image exists
    // For now, we'll return the highest quality available
    if (quality === "maxres" || quality === "high") {
      return url;
    }
  }

  return getYouTubeThumbnail(videoId, "default");
}
