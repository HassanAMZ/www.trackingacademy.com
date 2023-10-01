import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetaData } from "@/types/index";
import extractMetaFromString from "@/components/utils/extractMetaFromString";
import getFiles from "@/components/utils/getFiles";

export default async function getBlogsData(): Promise<
 (PostMetaData & { id: string; slug: string })[]
> {
 const blogDirectory = path.join(process.cwd(), "app/blog");
 const allPostsFiles = getFiles(blogDirectory);
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const blogs = [];

 for (const fileName of mdxFiles) {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromString(content);

  const slug = path.basename(fileName, ".mdx"); // assuming the slug is the filename without the .mdx extension
  const id = slug; // you might want to adjust how you generate the id

  if (data) {
   blogs.push({ ...data, id, slug });
  }
 }

 return blogs;
}
