import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import path from "path";
import getFiles from "utils/getFiles";
import extractMetaFromStringForBlog from "./extractMetaFromStringForBlog";

export default async function getTags(): Promise<string[]> {
  const blogDirectory = path.join(process.cwd(), "app/_blog-markdown");
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
