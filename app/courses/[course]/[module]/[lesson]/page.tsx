import {
  getAdjacentLessons,
  getCourseModules,
  getCourses,
  getModuleContent,
} from "@/utils/course-utils";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Badge, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "next-view-transitions";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Metadata } from "next";

export async function generateStaticParams() {
  const courses = await getCourses();
  const params = await Promise.all(
    courses.map(async (course) => {
      const modules = await getCourseModules(course.slug);
      const moduleParams = await Promise.all(
        modules.map(async (module) => {
          const { lessons } = await getModuleContent(course.slug, module.slug);
          return lessons.map((lesson) => ({
            course: course.slug,
            module: module.slug,
            lesson: lesson.slug,
          }));
        }),
      );
      return moduleParams.flat();
    }),
  );
  return params.flat();
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; module: string; lesson: string }>;
}): Promise<Metadata> {
  const { metadata } = await import(
    `@/app/_courses-markdown/${(await params).course}/modules/${(await params).module}/lessons/${(await params).lesson}.mdx`
  );
  return {
    title: `${metadata.title} - TrackingAcademy`,
    description: metadata.description,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; module: string; lesson: string }>;
}) {
  const { course, module, lesson } = await params;
  const { default: LessonContent, metadata } = await import(
    `@/app/_courses-markdown/${course}/modules/${module}/lessons/${lesson}.mdx`
  );
  const { previousLesson, nextLesson } = await getAdjacentLessons(
    course,
    module,
    lesson,
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/courses">Courses</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/courses/${course}`}>
                {course}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href={`/courses/${course}/${module}`}>
                {module}
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{lesson}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Card className="border-primary/10 bg-card/50">
        <CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge>Lesson {metadata.order}</Badge>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="mr-1 h-4 w-4" />
                {metadata.duration}
              </div>
            </div>
            <CardTitle className="text-3xl font-bold tracking-tight">
              {metadata.title}
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="prose max-w-none dark:prose-invert">
            <LessonContent />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-4 py-4">
        {previousLesson ? (
          <Button
            variant="outline"
            asChild
            className="w-full max-w-xs justify-start"
          >
            <Link
              href={`/courses/${course}/${module}/${previousLesson.slug}`}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              <div className="flex items-center gap-1">
                {previousLesson.title} (Previous)
              </div>
            </Link>
          </Button>
        ) : (
          <div />
        )}
        {nextLesson && (
          <Button asChild className="w-full max-w-xs justify-end">
            <Link
              href={`/courses/${course}/${module}/${nextLesson.slug}`}
              className="flex items-center gap-2"
            >
              <div className="flex items-center gap-1">
                (next) {nextLesson.title}
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
