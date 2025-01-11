import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getCourses } from "@/utils/course-utils";

export default async function CoursesPage() {
  const courses = await getCourses();

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">Available Courses</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <Link key={course.slug} href={`/courses/${course.slug}`}>
            <Card className="h-full transition-shadow hover:shadow-lg">
              <CardHeader>
                <CardTitle>{course.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-gray-600">{course.description}</p>
                <div className="flex gap-4 text-sm">
                  <span className="rounded bg-blue-100 px-2 py-1 text-blue-800">
                    {course.level}
                  </span>
                  <span className="rounded bg-green-100 px-2 py-1 text-green-800">
                    {course.duration}
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
