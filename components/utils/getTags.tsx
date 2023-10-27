import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import getFiles from "@/components/utils/getFiles";
import extractMetaFromStringForBlog from "./extractMetaFromStringForBlog";

export default async function getTags(): Promise<string[]> {
 const blogDirectory = path.join(process.cwd(), "app/blog");
 const allPostsFiles = getFiles(blogDirectory);
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const allTags: string[] = [];

 for (const fileName of mdxFiles) {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromStringForBlog(content);

  if (data && data.tags) {
   allTags.push(...data.tags);
  }
 }

 const uniqueTags = [...new Set(allTags)];

 return uniqueTags;
}
