"use client";

import { Eye, ThumbsUp, Youtube } from "lucide-react";
import { Suspense, useEffect, useState } from "react";

// Loading skeleton for suspense fallback
const YouTubeMetricsSkeleton = () => (
  <>
    <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
      <div className="mb-2 flex items-center justify-center gap-1.5">
        <Youtube className="h-3.5 w-3.5 text-red-500" />
        <span className="text-[10px] leading-tight text-muted-foreground">YouTube Subscribers</span>
      </div>
      <div className="mx-auto h-5 w-16 animate-pulse rounded bg-muted"></div>
    </div>
    <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
      <div className="mb-2 flex items-center justify-center gap-1.5">
        <Eye className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-[10px] leading-tight text-muted-foreground">Total Views</span>
      </div>
      <div className="mx-auto h-5 w-20 animate-pulse rounded bg-muted"></div>
    </div>
    <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
      <div className="mb-2 flex items-center justify-center gap-1.5">
        <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground" />
        <span className="text-[10px] leading-tight text-muted-foreground">Total Likes</span>
      </div>
      <div className="mx-auto h-5 w-16 animate-pulse rounded bg-muted"></div>
    </div>
  </>
);

// Data fetching component
const YouTubeMetricsData = () => {
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      try {
        const response = await fetch("/api/youtube-channel-stats", {
          next: { revalidate: 604800 }, // 7 days
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        if (isMounted) {
          setStats(data);
        }
      } catch (error) {
        console.error("Error fetching YouTube stats:", error);
        if (isMounted) {
          // Set fallback data
          setStats({
            subscribers: 2060,
            totalViews: 51500,
            totalLikes: 2060,
          });
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return <YouTubeMetricsSkeleton />;
  }

  if (!stats) {
    return null;
  }

  return (
    <>
      <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
        <div className="mb-2 flex items-center justify-center gap-1.5">
          <Youtube className="h-3.5 w-3.5 text-red-500" />
          <span className="text-[10px] leading-tight text-muted-foreground">
            YouTube Subscribers
          </span>
        </div>
        <div className="text-xl font-bold text-primary">{stats.subscribers.toLocaleString()}</div>
      </div>
      <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
        <div className="mb-2 flex items-center justify-center gap-1.5">
          <Eye className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] leading-tight text-muted-foreground">Total Views</span>
        </div>
        <div className="text-xl font-bold text-primary">{stats.totalViews.toLocaleString()}</div>
      </div>
      <div className="rounded-lg border border-border/50 bg-muted/30 p-3 text-center">
        <div className="mb-2 flex items-center justify-center gap-1.5">
          <ThumbsUp className="h-3.5 w-3.5 text-muted-foreground" />
          <span className="text-[10px] leading-tight text-muted-foreground">Total Likes</span>
        </div>
        <div className="text-xl font-bold text-primary">{stats.totalLikes.toLocaleString()}</div>
      </div>
    </>
  );
};

interface YouTubeMetricsSuspenseProps {
  channelId?: string;
}

const YouTubeMetricsSuspense: React.FC<YouTubeMetricsSuspenseProps> = ({ channelId }) => {
  return (
    <Suspense fallback={<YouTubeMetricsSkeleton />}>
      <YouTubeMetricsData />
    </Suspense>
  );
};

export default YouTubeMetricsSuspense;
