import { getCourseModules, getCourses } from "@/utils/course-utils";
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
import Container from "@/components/ui/container";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string }>;
}): Promise<Metadata> {
  const { metadata } = await import(
    `@/app/_courses-markdown/${(await params).course}/metadata.mdx`
  );
  return {
    title: `${metadata.title} - TrackingAcademy`,
    description: metadata.description,
  };
}

export async function generateStaticParams() {
  const courses = await getCourses();
  return courses.map((course) => ({
    course: course.slug,
  }));
}

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { course } = await params;
  const modules = await getCourseModules(course);
  const { default: CoursePost, metadata } = await import(
    `@/app/_courses-markdown/${course}/metadata.mdx`
  );

  return (
    <div className="space-y-8 py-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{metadata.title}</h1>
        <div className="flex flex-wrap gap-4">
          <Badge variant="secondary" className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {metadata.duration}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <GraduationCap className="h-4 w-4" />
            {metadata.level}
          </Badge>
          <Badge variant="secondary" className="flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            {modules.length} Modules
          </Badge>
        </div>
        <p className="text-lg text-muted-foreground">{metadata.description}</p>
      </div>

      {metadata.prerequisites && (
        <Card className="bg-muted/50">
          <CardHeader>
            <CardTitle className="text-lg">Prerequisites</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-inside list-disc space-y-2">
              {metadata.prerequisites.map((prereq: string) => (
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
                      <Badge variant="outline">Module {module.order}</Badge>
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
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
