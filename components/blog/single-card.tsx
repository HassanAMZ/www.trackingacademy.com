import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { PostMetadata } from "@/types/index";
import { CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface SingleBlogCardProps {
  post: PostMetadata;
  type: string;
  isMain?: boolean;
  className?: string;
}

const SingleBlogCard: React.FC<SingleBlogCardProps> = ({
  post,
  type,
  isMain = false,
  className = "",
}) => {
  if (!post) return null;

  return (
    <Link href={`/${type}/${post.slug}`} className={`block ${className}`}>
      <Card
        className={`overflow-hidden transition-all hover:shadow-lg ${isMain ? "lg:flex" : ""}`}
      >
        <div className={`relative ${isMain ? "lg:w-2/3" : "aspect-video"}`}>
          <Image
            src={post.openGraph.images[0]}
            alt={post.title}
            height={1080}
            width={1920}
            className="transition-transform duration-300 hover:scale-y-105"
          />
        </div>
        <div className={isMain ? "lg:w-1/3" : ""}>
          <CardHeader>
            <h3
              className={`line-clamp-2 font-bold ${isMain ? "text-2xl" : "text-lg"}`}
            >
              {post.title}
            </h3>
          </CardHeader>
          <CardContent>
            <p
              className={`text-muted-foreground text-sm line-clamp-3 ${isMain ? "mb-4" : "mb-2"}`}
            >
              {post.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {post.tags.slice(0, 3).map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="text-muted-foreground text-sm">
            <CalendarIcon className="mr-2 h-4 w-4" />
            {post.date}
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default SingleBlogCard;
