import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { ReactNode } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
export type LessonMetadata = {
  title: string;
  duration: string;
  order: number;
};

export type Module = {
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
};

export type ModuleMetadata = {
  title: string;
  description: string;
  duration: string;
  order: number;
};

export type LessonInfo = {
  slug: string;
  title: string;
  duration: string;
  order: number;
};

export async function getCourseModules(course: string): Promise<Module[]> {
  const coursePath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
  );
  const moduleDirs = fs.readdirSync(coursePath).filter((dir) => {
    const metadataPath = path.join(coursePath, dir, "metadata.mdx");
    return fs.existsSync(metadataPath);
  });

  const modules = moduleDirs.map((module, index) => {
    const metadataPath = path.join(coursePath, module, "metadata.mdx");
    const metadataContent = fs.readFileSync(metadataPath, "utf8");
    const { data } = matter(metadataContent);

    const lessonsPath = path.join(coursePath, module, "lessons");
    const lessons = fs
      .readdirSync(lessonsPath)
      .filter((file) => file.endsWith(".mdx"))
      .map((file) => {
        const lessonContent = fs.readFileSync(
          path.join(lessonsPath, file),
          "utf8",
        );
        const { data } = matter(lessonContent);
        return {
          ...(data as { title: string; order: number }),
          slug: file.replace(".mdx", ""),
          code: `L${data.order.toString().padStart(2, "0")}`,
        };
      })
      .sort((a, b) => a.order - b.order);

    return {
      slug: module,
      title: data.title,
      lessons,
      code: `M${index + 1}`,
    };
  });

  return modules;
}

export async function getCourses() {
  const COURSES_PATH = path.join(process.cwd(), "app/_courses-markdown");
  const courses = fs.readdirSync(COURSES_PATH);

  const coursesData = courses.map((course) => {
    const coursePath = path.join(COURSES_PATH, course, "metadata.mdx");
    const courseContent = fs.readFileSync(coursePath, "utf8");
    const { data } = matter(courseContent);

    return {
      slug: course,
      ...(data as CourseMetadata),
    };
  });

  return coursesData;
}

export async function getModuleContent(course: string, module: string) {
  const modulePath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
    module,
    "metadata.mdx",
  );

  const moduleContent = fs.readFileSync(modulePath, "utf8");
  const { data, content } = matter(moduleContent);

  const lessonsPath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
    module,
    "lessons",
  );

  const lessons = fs
    .readdirSync(lessonsPath)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const lessonContent = fs.readFileSync(
        path.join(lessonsPath, file),
        "utf8",
      );
      const { data } = matter(lessonContent);
      return {
        ...(data as LessonInfo),
        slug: file.replace(".mdx", ""),
      };
    })
    .sort((a, b) => a.order - b.order);

  return {
    metadata: data as ModuleMetadata,
    content,
    lessons,
  };
}

export async function getLessonContent(
  course: string,
  module: string,
  lesson: string,
) {
  const lessonPath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
    module,
    "lessons",
    `${lesson}.mdx`,
  );

  const lessonContent = fs.readFileSync(lessonPath, "utf8");
  const { data, content } = matter(lessonContent);

  return {
    metadata: data as LessonMetadata,
    content,
  };
}

// Add a new function to get adjacent lessons
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
  const coursePath = path.join(
    process.cwd(),
    "app/_courses-markdown",
    course,
    "modules",
  );

  const modules = fs.readdirSync(coursePath).sort();

  let firstLesson = null;
  let firstModule = null;

  for (const module of modules) {
    const lessonsPath = path.join(coursePath, module, "lessons");
    const lessonFiles = fs
      .readdirSync(lessonsPath)
      .filter((file) => file.endsWith(".mdx"));

    if (lessonFiles.length > 0) {
      const lessons = lessonFiles.map((file) => {
        const lessonContent = fs.readFileSync(
          path.join(lessonsPath, file),
          "utf8",
        );
        const { data } = matter(lessonContent);
        return {
          slug: file.replace(".mdx", ""),
          order: data.order,
        };
      });

      lessons.sort((a, b) => a.order - b.order);

      if (!firstLesson || lessons[0].order < firstLesson.order) {
        firstLesson = lessons[0];
        firstModule = module;
      }
    }
  }

  if (firstLesson && firstModule) {
    return {
      module: firstModule,
      lesson: firstLesson.slug,
    };
  }

  throw new Error("No lessons found");
}
