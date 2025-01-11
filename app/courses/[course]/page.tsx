import { getCourseModules, getCourseMetadata } from "@/utils/course-utils";
import { Link } from "next-view-transitions";
import { BookOpen, Clock, GraduationCap, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import Container from "@/components/ui/container";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const course = (await params).course;
  const modules = await getCourseModules(course);
  const courseMetadata = await getCourseMetadata(course);

  return (
    <Container className="mx-0 max-w-4xl space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">
          {courseMetadata.title}
        </h1>
        <div className="flex flex-wrap gap-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {courseMetadata.duration}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" />
            {courseMetadata.level}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {modules.length} Modules
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">
          {courseMetadata.description}
        </p>
      </div>

      {courseMetadata.prerequisites && (
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              {courseMetadata.prerequisites.map((prereq) => (
                <li key={prereq} className="text-muted-foreground">
                  {prereq}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Course Content
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {modules.map((module) => (
            <Link key={module.slug} href={`/courses/${course}/${module.slug}`}>
              <Card className="transition-colors hover:border-primary">
                <CardHeader className="flex flex-row items-start justify-between space-y-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>{module.title}</CardTitle>
                      <Badge variant="outline">Module {module.code}</Badge>
                    </div>
                    <CardDescription className="line-clamp-2">
                      {module.metadata.description}
                    </CardDescription>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <BookOpen className="h-4 w-4" />
                        {module.lessons.length} Lessons
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        {module.metadata.duration}
                      </div>
                    </div>
                    {/* <Progress value={33} className="h-2" /> */}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
