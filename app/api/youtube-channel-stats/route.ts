import { NextResponse } from "next/server";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY || process.env.NEXT_PUBLIC_YOUTUBE_API_KEY;
const CHANNEL_ID = "UC8tapbraiwvk5nnQW0Eqh9g";

// Cache for 7 days (604800 seconds)
const CACHE_DURATION = 604800;

export async function GET() {
  if (!YOUTUBE_API_KEY) {
    return NextResponse.json({ error: "YouTube API key not configured" }, { status: 500 });
  }

  try {
    // Fetch channel statistics with Next.js built-in caching
    const channelResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${CHANNEL_ID}&key=${YOUTUBE_API_KEY}`,
      {
        next: { revalidate: CACHE_DURATION },
        headers: {
          "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION * 2}`,
        },
      },
    );

    if (!channelResponse.ok) {
      throw new Error(`YouTube API error: ${channelResponse.status}`);
    }

    const channelData = await channelResponse.json();

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Channel not found");
    }

    const stats = channelData.items[0].statistics;

    // Use channel statistics for total views (more accurate and fewer API calls)
    const totalViews = parseInt(stats.viewCount || "0");
    const videoCount = parseInt(stats.videoCount || "0");

    // Estimate total likes based on average engagement rate (saves API calls)
    // Typical engagement rate is 3-5% of views, so we'll use 4%
    const estimatedLikes = Math.round(totalViews * 0.04);

    const result = {
      subscribers: parseInt(stats.subscriberCount || "0"),
      totalViews: totalViews,
      totalLikes: estimatedLikes,
      videoCount: videoCount,
      channelUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`,
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(result, {
      headers: {
        "Cache-Control": `public, s-maxage=${CACHE_DURATION}, stale-while-revalidate=${CACHE_DURATION * 2}`,
        "CDN-Cache-Control": `public, s-maxage=${CACHE_DURATION}`,
        "Vercel-CDN-Cache-Control": `public, s-maxage=${CACHE_DURATION}`,
      },
    });
  } catch (error) {
    console.error("Error fetching YouTube channel stats:", error);

    // Return fallback data if API fails
    const fallbackData = {
      subscribers: 2060,
      totalViews: 51500,
      totalLikes: 2060, // Estimate based on subscribers
      videoCount: 85,
      channelUrl: `https://www.youtube.com/channel/${CHANNEL_ID}`,
      lastUpdated: new Date().toISOString(),
      error: "Using fallback data due to API error",
    };

    return NextResponse.json(fallbackData, {
      headers: {
        "Cache-Control": `public, s-maxage=300, stale-while-revalidate=600`, // 5 min cache for errors
      },
    });
  }
}
