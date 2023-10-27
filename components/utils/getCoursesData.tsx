import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { CourseMetadata } from "@/types/index";
import extractMetaFromStringForCourse from "@/components/utils/extractMetaFromStringForCourse";
import getFiles from "@/components/utils/getFiles";

export default async function getCoursesData(): Promise<CourseMetadata[]> {
 const courseDirectory = path.join(process.cwd(), "app/courses");
 const allPostsFiles = getFiles(courseDirectory);
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const courses = [];

 for (const fileName of mdxFiles) {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromStringForCourse(content);

  const slug = path.dirname(fileName).split(path.sep).slice(-2).join("/");
  const title = path
   .basename(path.dirname(fileName))
   .replace(/-/g, " ")
   .replace(/\b\w/g, (match) => match.toUpperCase());

  const id = fileName.replace(/\.mdx$/, "");

  if (data) {
   courses.push({ ...data, id, slug, title });
  }
 }

 return courses;
}
