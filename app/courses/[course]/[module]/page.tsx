import {
  getCourseModules,
  getCourses,
  getModuleContent,
} from "@/utils/course-utils";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, BookOpen, ChevronRight } from "lucide-react";
import Container from "@/components/ui/container";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ course: string; module: string }>;
}): Promise<Metadata> {
  const { metadata } = await import(
    `@/app/_courses-markdown/${(await params).course}/modules/${(await params).module}/metadata.mdx`
  );
  return {
    title: `${metadata.title} - TrackingAcademy`,
    description: metadata.description,
  };
}

export async function generateStaticParams() {
  const courses = await getCourses();
  const params = await Promise.all(
    courses.map(async (course) => {
      const modules = await getCourseModules(course.slug);
      return modules.map((module) => ({
        course: course.slug,
        module: module.slug,
      }));
    }),
  );
  return params.flat();
}

export default async function ModulePage({
  params,
}: {
  params: Promise<{ course: string; module: string }>;
}) {
  const { course, module } = await params;
  const { default: ModuleContent, metadata } = await import(
    `@/app/_courses-markdown/${course}/modules/${module}/metadata.mdx`
  );
  const { lessons } = await getModuleContent(course, module);

  return (
    <div className="space-y-8">
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
              <BreadcrumbPage>{module}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <Card className="border-primary/10 bg-card/50">
        <CardHeader>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-3xl font-bold tracking-tight">
                {metadata.title}
              </CardTitle>
              <Badge variant="secondary" className="h-6">
                Module {metadata.order}
              </Badge>
            </div>
            <div className="text-muted-foreground flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {metadata.duration}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {lessons.length} Lessons
              </div>
            </div>
            <p className="text-muted-foreground text-lg">
              {metadata.description}
            </p>
          </div>
        </CardHeader>
      </Card>

      <div className="max-w-none">
        <ModuleContent />
      </div>

      <Separator className="my-8" />

      <div className="space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Module Lessons
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {lessons.map((lesson) => (
            <Link
              key={lesson.slug}
              href={`/courses/${course}/${module}/${lesson.slug}`}
              className="block"
            >
              <Card className="hover:border-primary transition-colors">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>{lesson.title}</CardTitle>
                      <Badge variant="outline">Lesson {lesson.order}</Badge>
                    </div>
                    <div className="text-muted-foreground flex items-center gap-2 text-sm">
                      <Clock className="h-4 w-4" />
                      {lesson.duration}
                    </div>
                  </div>
                  <ChevronRight className="text-muted-foreground h-5 w-5" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <Separator className="my-8" />
    </div>
  );
}
