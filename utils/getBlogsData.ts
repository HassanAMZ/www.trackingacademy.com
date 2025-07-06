import { PostMetadata } from "@/types/index"; // Ensure this path is correct
import fs from "fs";
import path from "path";

import extractMetaFromStringForBlog from "@/utils/extractMetaFromStringForBlog"; // Ensure this path is correct
import getFiles from "@/utils/getFiles"; // Ensure this path is correct
import matter, { GrayMatterFile } from "gray-matter";

// Function with a default parameter for content directory path
export default async function getContentData(
  contentDirectoryPath: string = "app/_blog-markdown", // Default value assigned here
): Promise<(PostMetadata & { id: string; slug: string; title: string })[]> {
  const baseDirectory = path.join(process.cwd(), contentDirectoryPath);
  const allPostsFiles = getFiles(baseDirectory);
  const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

  const contents = [];

  for (const fileName of mdxFiles) {
    const fileContents = fs.readFileSync(fileName, "utf8");
    const { content } = matter(fileContents) as GrayMatterFile<string>;
    const data = extractMetaFromStringForBlog(content);

    const relativePath = path.relative(baseDirectory, fileName); // Path relative to the base directory
    const fileBaseName = path.basename(relativePath, ".mdx"); // Extract file name without extension
    const parentDirName = path.basename(path.dirname(relativePath)); // Get the parent directory name
    const slug = `${parentDirName}/${fileBaseName}`; // Combine parent directory and file name
    const id = fileName.replace(/\.mdx$/, ""); // Unique identifier for the file

    if (data) {
      contents.push({ ...data, id, slug });
    }
  }
  return contents;
}
