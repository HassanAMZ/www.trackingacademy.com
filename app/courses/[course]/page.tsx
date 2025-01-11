import { redirect } from "next/navigation";
import { getFirstLesson } from "@/utils/course-utils";

export default async function CoursePage({
  params,
}: {
  params: Promise<{ course: string }>;
}) {
  const { module, lesson } = await getFirstLesson((await params).course);
  redirect(`/courses/${(await params).course}/${module}/${lesson}`);
}
