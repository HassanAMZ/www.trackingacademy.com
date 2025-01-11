import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, BookOpen, ChevronRight } from "lucide-react";
import { getModuleContent } from "@/utils/course-utils";
import Container from "@/components/ui/container";
import { Link } from "next-view-transitions";
import { CourseSidebar } from "@/components/courses/course-sidebar";
import Navbar from "@/components/global/navbar";
import {
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbEllipsis,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

// ModulePage.tsx
export default async function ModulePage({
  params,
}: {
  params: Promise<{ course: string; module: string }>;
}) {
  const { course, module } = await params;
  const { metadata, content, lessons } = await getModuleContent(course, module);

  return (
    <Container className="mx-0 max-w-4xl space-y-8">
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
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {metadata.duration}
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                {lessons.length} Lessons
              </div>
            </div>
            <p className="text-lg text-muted-foreground">
              {metadata.description}
            </p>
          </div>
        </CardHeader>
      </Card>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={content} />
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
              <Card className="transition-colors hover:border-primary">
                <CardHeader className="flex flex-row items-center justify-between space-y-0">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle>{lesson.title}</CardTitle>
                      <Badge variant="outline">Lesson {lesson.order}</Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {lesson.duration}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-muted-foreground" />
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
}
