import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Link from "next/link";

interface TestimonialCardUpworkProps {
  title: string;
  rating?: number;
  dateRange: string;
  quote: string;
  href: string;
}

export default function TestimonialCardUpwork({
  title,
  href,
  rating = 5,
  dateRange,
  quote,
}: TestimonialCardUpworkProps) {
  return (
    <div className="py-4">
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <Card className="overflow-hidden bg-foreground dark:bg-background text-primary-foreground dark:text-foreground p-2">
          <CardContent className="p-0">
            <div className="p-6">
              <h3 className="text-green-400 text-xl font-medium mb-3">
                {title}
              </h3>
              <p className=" mb-3">{quote}</p>{" "}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-xl font-bold">{rating.toFixed(1)}</span>
                <span className="text-gray-400">|</span>
                <span className="text-gray-400">{dateRange}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}
