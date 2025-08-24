import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";
import Link from "next/link";
import Container from "../ui/container";

/**
 * Upwork statistics section displaying ratings and reviews with enhanced hover effects
 */
function UpworkStats() {
  const UPWORK_URL = "https://www.upwork.com/freelancers/hassanamz";
  const RATINGS = [
    { stars: 5, count: 190, percentage: 98 },
    { stars: 4, count: 3, percentage: 2 },
    { stars: 3, count: 0, percentage: 0 },
    { stars: 2, count: 0, percentage: 0 },
    { stars: 1, count: 0, percentage: 0 },
  ];

  const CATEGORIES = [
    { name: "Availability", rating: 5.0 },
    { name: "Deadlines", rating: 5.0 },
    { name: "Skills", rating: 5.0 },
    { name: "Cooperation", rating: 5.0 },
    { name: "Quality", rating: 5.0 },
    { name: "Communication", rating: 5.0 },
  ];

  return (
    <Container className="w-full">
      <Link href={UPWORK_URL} target="_blank" rel="noopener noreferrer" className="group block">
        <Card className="relative mb-6 w-full overflow-hidden bg-background/80 backdrop-blur-xs transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-lg">
          {/* Gradient overlay that appears on hover - similar to TestimonialCard */}
          <div className="absolute inset-0 z-10 bg-linear-to-t from-primary/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>{" "}
          <CardHeader className="relative z-20">
            <CardTitle className="flex items-center gap-2">
              <Star className="h-6 w-6 fill-primary text-primary" />
              <span>5.0</span>
              <span className="text-3xl">·</span>
              <span className="font-normal">193 reviews</span>
            </CardTitle>
          </CardHeader>{" "}
          <CardContent className="relative z-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {/* Star Breakdown */}
              <div className="space-y-2">
                {RATINGS.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <span className="w-16">{rating.stars} stars</span>
                    <Progress value={rating.percentage} className="h-2 flex-1" />
                    <span className={rating.count > 0 ? "text-primary" : "text-muted-foreground"}>
                      ({rating.count})
                    </span>
                  </div>
                ))}
              </div>{" "}
              {/* Rating Categories */}
              <div className="space-y-4">
                <h3 className="text-left">Rating breakdown</h3>
                <div className="grid grid-cols-2 gap-y-3">
                  {CATEGORIES.map((category) => (
                    <div key={category.name} className="grid grid-cols-2 items-center gap-2">
                      <span>{category.name}</span>
                      <div className="align-left flex flex-row items-center justify-center gap-2">
                        <Star className="h-4 w-4 fill-primary text-primary" />
                        <span className="font-medium">{category.rating}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>{" "}
        </Card>
      </Link>
    </Container>
  );
}

export default UpworkStats;
