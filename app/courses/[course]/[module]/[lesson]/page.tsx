import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Container from "@/components/ui/container";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { getAdjacentLessons, getLessonContent } from "@/utils/course-utils";
import { Badge, Clock, ArrowLeft, ArrowRight } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Link } from "next-view-transitions";

// LessonPage.tsx
export default async function LessonPage({
  params,
}: {
  params: Promise<{ course: string; module: string; lesson: string }>;
}) {
  const { course, module, lesson } = await params;
  const { metadata, content } = await getLessonContent(course, module, lesson);
  const { previousLesson, nextLesson } = await getAdjacentLessons(
    course,
    module,
    lesson,
  );

  return (
    <Container className="mx-0 max-w-4xl space-y-6">
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
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between gap-4 pt-4">
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
              <div className="flex flex-col items-start">
                <span className="text-xs text-muted-foreground">Previous</span>
                <span className="line-clamp-1">{previousLesson.title}</span>
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
              <div className="flex flex-col items-end">
                <span className="text-xs text-muted-foreground">Next</span>
                <span className="line-clamp-1">{nextLesson.title}</span>
              </div>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </Container>
  );
}
