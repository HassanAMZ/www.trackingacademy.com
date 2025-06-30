import fs from "fs";
import path from "path";
import { PostMetadata } from "@/types/index";
import matter, { GrayMatterFile } from "gray-matter";
import extractMetaFromStringForBlog from "./extractMetaFromStringForBlog";
import getFiles from "./getFiles";

export default async function getTagsData(): Promise<
  (PostMetadata & { id: string; slug: string })[]
> {
  const blogDirectory = path.join(process.cwd(), "app/_blog-markdown");
  const allPostsFiles = getFiles(blogDirectory);

  // remove non-mdx files
  const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

  const allPostsData = mdxFiles.map(async (fileName) => {
    const fileContents = fs.readFileSync(fileName, "utf8");
    const { content } = matter(fileContents) as GrayMatterFile<string>;
    const data = extractMetaFromStringForBlog(content);

    const relativePath = path.relative(blogDirectory, fileName); // Get the file's relative path
    const fileBaseName = path.basename(relativePath, ".mdx"); // Extract the file name without extension
    const parentDirName = path.basename(path.dirname(relativePath)); // Get the parent directory name
    const slug = `${parentDirName}/${fileBaseName}`; // Construct the correct slug

    return {
      id: fileName.replace(/\.mdx$/, ""), // Unique ID
      slug,
      ...data,
    } as PostMetadata & { id: string; slug: string };
  });

  const sortedData = (await Promise.all(allPostsData)).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedData;
}
