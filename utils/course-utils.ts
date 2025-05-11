import fs from "fs";
import path from "path";
import { ReactNode } from "react";

export type Module = {
  order: ReactNode;
  metadata: any;
  code: ReactNode;
  slug: string;
  title: string;
  lessons: {
    order: any;
    code: ReactNode;
    slug: string;
    title: string;
  }[];
};

export type CourseMetadata = {
  title: string;
  description: string;
  duration: string;
  level: string;
  prerequisites?: string[];
  objectives: string[];
  instructor: {
    name: string;
    bio: string;
  };
  tags: string[];
};

export type ModuleMetadata = {
  title: string;
  description: string;
  duration: string;
  order: number;
  objectives: string[];
};

export type LessonMetadata = {
  title: string;
  duration: string;
  order: number;
  objectives: string[];
};

export type LessonInfo = {
  slug: string;
  title: string;
  duration: string;
  order: number;
};

export async function getCourseMetadata(
  course: string,
): Promise<CourseMetadata> {
  const { metadata } = await import(
    `@/app/_courses-markdown/${course}/metadata.mdx`
  );
  return metadata as CourseMetadata;
}
export async function getCourseModules(course: string): Promise<Module[]> {
  const coursePath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
  );
  const moduleDirs = await fs.promises.readdir(coursePath);

  const modules = await Promise.all(
    moduleDirs.map(async (module) => {
      const { metadata } = await import(
        `@/app/_courses-markdown/${course}/modules/${module}/metadata.mdx`
      );
      const lessonsPath = path.join(coursePath, module, "lessons");
      const lessonFiles = await fs.promises.readdir(lessonsPath);

      const lessons = await Promise.all(
        lessonFiles
          .filter((file) => file.endsWith(".mdx"))
          .map(async (file) => {
            const { metadata } = await import(
              `@/app/_courses-markdown/${course}/modules/${module}/lessons/${file}`
            );
            return {
              ...metadata,
              slug: file.replace(".mdx", ""),
              code: `L${metadata.order.toString().padStart(2, "0")}`,
            };
          }),
      );

      return {
        slug: module,
        title: metadata.title,
        metadata,
        lessons: lessons.sort((a, b) => a.order - b.order),
        code: `M${metadata.order}`,
        order: metadata.order,
      };
    }),
  );

  return modules.sort((a, b) => a.order - b.order);
}
export async function getCourses() {
  const COURSES_PATH = path.join(process.cwd(), "app/_courses-markdown");
  const courses = await fs.promises.readdir(COURSES_PATH);

  const coursesData = await Promise.all(
    courses.map(async (course) => {
      const { metadata } = await import(
        `@/app/_courses-markdown/${course}/metadata.mdx`
      );
      return {
        slug: course,
        ...metadata,
      };
    }),
  );

  return coursesData;
}

export async function getModuleContent(course: string, module: string) {
  const { metadata, default: content } = await import(
    `@/app/_courses-markdown/${course}/modules/${module}/metadata.mdx`
  );

  const lessonsPath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
    module,
    "lessons",
  );
  const lessonFiles = await fs.promises.readdir(lessonsPath);

  const lessons = await Promise.all(
    lessonFiles
      .filter((file) => file.endsWith(".mdx"))
      .map(async (file) => {
        const { metadata } = await import(
          `@/app/_courses-markdown/${course}/modules/${module}/lessons/${file}`
        );
        return {
          ...metadata,
          slug: file.replace(".mdx", ""),
        };
      }),
  );

  return {
    metadata: metadata as ModuleMetadata,
    content,
    lessons: lessons.sort((a, b) => a.order - b.order),
  };
}

export async function getLessonContent(
  course: string,
  module: string,
  lesson: string,
) {
  const { metadata, default: content } = await import(
    `@/app/_courses-markdown/${course}/modules/${module}/lessons/${lesson}.mdx`
  );

  return {
    metadata: metadata as LessonMetadata,
    content,
  };
}

export async function getAdjacentLessons(
  course: string,
  module: string,
  currentLesson: string,
) {
  const { lessons } = await getModuleContent(course, module);
  const currentIndex = lessons.findIndex(
    (lesson) => lesson.slug === currentLesson,
  );

  return {
    previousLesson: currentIndex > 0 ? lessons[currentIndex - 1] : null,
    nextLesson:
      currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null,
  };
}

export async function getFirstLesson(course: string) {
  const modules = await getCourseModules(course);

  if (modules.length === 0) {
    throw new Error("No modules found");
  }

  // Get the first module (already sorted by order)
  const firstModule = modules[0];

  if (!firstModule.lessons || firstModule.lessons.length === 0) {
    throw new Error("No lessons found in the first module");
  }

  // Get the first lesson (already sorted by order)
  const firstLesson = firstModule.lessons[0];

  return {
    module: firstModule.slug,
    lesson: firstLesson.slug,
  };
}
