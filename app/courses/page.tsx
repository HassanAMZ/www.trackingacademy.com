import { Link } from "next-view-transitions";
import { ArrowRight, Clock, Book } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { getCourses } from "@/utils/course-utils";
import Navbar from "@/components/global/navbar";
import Container from "@/components/ui/container";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <Container>
      <Navbar />
      <div className="container py-8 md:py-12">
        <div className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">
            Available Courses
          </h1>
          <p className="text-muted-foreground">
            Expand your knowledge with our comprehensive course catalog
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <Card
              key={course.slug}
              className="group relative flex h-full flex-col transition-colors hover:border-primary"
            >
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle className="text-2xl">{course.title}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col justify-between">
                <div className="space-y-4">
                  {course.prerequisites && (
                    <div className="space-y-2">
                      <p className="text-sm text-muted-foreground">
                        Prerequisites
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {course.prerequisites.map((prereq) => (
                          <Badge key={prereq} variant="secondary">
                            {prereq}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-wrap items-center gap-4 text-sm">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Book className="h-4 w-4" />
                      <span>{course.level}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>
                </div>

                <Link href={`/courses/${course.slug}`} className="mt-6">
                  <Button className="w-full group-hover:bg-primary/90">
                    Start Learning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
}
