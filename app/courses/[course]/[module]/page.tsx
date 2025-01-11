import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, BookOpen } from "lucide-react";
import { getModuleContent } from "@/utils/course-utils";
import Container from "@/components/ui/container";

export default async function ModulePage({
  params,
}: {
  params: Promise<{ course: string; module: string }>;
}) {
  const { metadata, content, lessons } = await getModuleContent(
    (await params).course,
    (await params).module,
  );

  return (
    <Container>
      <Card className="mb-8">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-3xl font-bold">
              {metadata.title}
            </CardTitle>
            <Badge variant="secondary" className="text-sm">
              Module {metadata.order}
            </Badge>
          </div>
          <div className="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{metadata.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <BookOpen className="h-4 w-4" />
              <span>{lessons.length} Lessons</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-lg">{metadata.description}</p>
        </CardContent>
      </Card>

      <div className="prose dark:prose-invert max-w-none">
        <MDXRemote source={content} />
      </div>

      <Separator className="my-8" />

      <h2 className="mb-4 text-2xl font-semibold">Lessons in this Module</h2>
      <div className="grid gap-4">
        {lessons.map((lesson) => (
          <Card key={lesson.slug}>
            <CardHeader>
              <CardTitle className="text-xl">{lesson.title}</CardTitle>
              <div className="text-sm text-muted-foreground">
                Duration: {lesson.duration}
              </div>
            </CardHeader>
          </Card>
        ))}
      </div>
    </Container>
  );
}
