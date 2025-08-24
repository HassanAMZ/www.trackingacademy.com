import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { getBestYouTubeThumbnail } from "@/lib/youtube-thumbnails";
import { PostMetadata } from "@/types/index";
import { CalendarIcon, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

interface SingleBlogCardProps {
  post: PostMetadata;
  type: string;
  isMain?: boolean;
  className?: string;
}

// Suspended image component for YouTube thumbnails
const SuspendedYouTubeThumbnail = ({
  videoId,
  alt,
  className,
}: {
  videoId: string;
  alt: string;
  className?: string;
}) => {
  const imageSrc = getBestYouTubeThumbnail(videoId);

  return (
    <Image
      src={imageSrc}
      alt={alt}
      fill
      className={className}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  );
};

// Image skeleton for loading state
const ImageSkeleton = () => (
  <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted/30 to-muted/50">
    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-muted/20 to-muted/40" />
  </div>
);

const SingleBlogCard: React.FC<SingleBlogCardProps> = ({
  post,
  type,
  isMain = false,
  className = "",
}) => {
  if (!post) return null;

  // Determine which image to use
  const isYouTubeVideo = post.embedId && post.embedId.trim() !== "";
  const imageSrc = isYouTubeVideo ? null : post.openGraph.images[0];

  // Calculate read time: show "Video" for YouTube posts, "12 min read" for others
  const getReadTime = () => {
    if (isYouTubeVideo) {
      return "Video";
    }
    return "12 min read";
  };

  return (
    <Link href={`/${type}/${post.slug}`}>
      <Card className="group h-full overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-sm transition-all duration-300 hover:bg-gradient-to-br hover:from-card/80 hover:to-card/60 hover:shadow-xl">
        {/* Image Section */}
        <div className="relative overflow-hidden">
          <div className="relative aspect-[16/10] w-full overflow-hidden">
            {isYouTubeVideo ? (
              // YouTube thumbnail with Suspense
              <Suspense fallback={<ImageSkeleton />}>
                <SuspendedYouTubeThumbnail
                  videoId={post.embedId}
                  alt={post.title}
                  className="object-cover transition-transform duration-500"
                />
              </Suspense>
            ) : imageSrc ? (
              // Regular image - only render if we have a valid src
              <Image
                src={imageSrc}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            ) : (
              // Fallback when no image is available
              <ImageSkeleton />
            )}

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            {/* YouTube indicator if video */}
            {isYouTubeVideo && (
              <div className="absolute top-3 right-3">
                <div className="flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-xs font-medium text-white shadow-lg">
                  <div className="h-2 w-2 rounded-full bg-white"></div>
                  <span>Video</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-1 flex-col p-4">
          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mb-3 flex flex-wrap gap-1.5">
              {post.tags.slice(0, 2).map((tag, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="bg-secondary/60 px-2 py-1 text-xs font-medium transition-colors hover:bg-secondary/80"
                >
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 2 && (
                <Badge variant="outline" className="px-2 py-1 text-xs">
                  +{post.tags.length - 2}
                </Badge>
              )}
            </div>
          )}

          {/* Title */}
          <CardHeader className="px-0 pt-0 pb-2">
            <h3 className="line-clamp-2 text-lg leading-tight font-bold text-foreground transition-colors duration-200 group-hover:text-primary">
              {post.title}
            </h3>
          </CardHeader>

          {/* Description */}
          <CardContent className="flex-1 px-0 pb-3">
            <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground">
              {post.description}
            </p>
          </CardContent>

          {/* Footer with date and read time */}
          <CardFooter className="mt-auto px-0 pt-0 pb-0">
            <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <CalendarIcon className="h-3.5 w-3.5" />
                <span>{post.date}</span>
              </div>

              {/* Read time or video duration */}
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5" />
                <span>{getReadTime()}</span>
              </div>
            </div>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default SingleBlogCard;
