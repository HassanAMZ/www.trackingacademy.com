import { MDXRemote } from "next-mdx-remote/rsc";
import { CardHeader, Card, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import { getLessonContent, getAdjacentLessons } from "@/utils/course-utils";

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
    <div className="mx-auto max-w-4xl px-4 py-8">
      <Card>
        <CardHeader>
          <div className="mb-2 flex items-center justify-between">
            <Badge variant="secondary">Lesson {metadata.order}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="mr-1 h-4 w-4" />
              {metadata.duration}
            </div>
          </div>
          <CardTitle className="text-3xl font-bold">{metadata.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <MDXRemote source={content} />
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 flex justify-between">
        {previousLesson ? (
          <Button variant="outline" asChild>
            <Link
              href={`/courses/${course}/${module}/${previousLesson.slug}`}
              className="flex items-center"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous: {previousLesson.title}
            </Link>
          </Button>
        ) : (
          <div></div>
        )}
        {nextLesson && (
          <Button asChild>
            <Link
              href={`/courses/${course}/${module}/${nextLesson.slug}`}
              className="flex items-center"
            >
              Next: {nextLesson.title}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </div>
    </div>
  );
}
