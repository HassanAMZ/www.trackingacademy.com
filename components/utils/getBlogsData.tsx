import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetadata } from "@/types/index";
import extractMetaFromString from "@/components/utils/extractMetaFromString";
import getFiles from "@/components/utils/getFiles";

export default async function getBlogsData(): Promise<
 (PostMetadata & { id: string; slug: string })[]
> {
 const blogDirectory = path.join(process.cwd(), "app/blog");
 const allPostsFiles = getFiles(blogDirectory);
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const blogs = [];

 for (const fileName of mdxFiles) {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromString(content);

  const slug = path.dirname(fileName).split(path.sep).slice(-2).join("/");
  const title = path
   .basename(path.dirname(fileName))
   .replace(/-/g, " ")
   .replace(/\b\w/g, (match) => match.toUpperCase());

  const id = fileName.replace(/\.mdx$/, "");

  if (data) {
   blogs.push({ ...data, id, slug, title });
  }
 }

 return blogs;
}
