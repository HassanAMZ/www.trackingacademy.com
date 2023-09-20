import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetaData } from "@/types/index";

import BlogContainer from "@/components/blog/BlogContainer";

const blogDirectory = path.join(process.cwd(), "app/downloads");

function getFiles(dirPath: string): string[] {
 let entries = fs.readdirSync(dirPath, { withFileTypes: true });

 let files = entries
  .filter((file) => !file.isDirectory())
  .map((file) => path.join(dirPath, file.name)); // maps to full path

 let directories = entries.filter((folder) => folder.isDirectory());

 for (let directory of directories)
  files = files.concat(getFiles(path.join(dirPath, directory.name)));

 return files;
}

export async function generateStaticParams(): Promise<
 (PostMetaData & { id: string; slug: string })[]
> {
 const allPostsFiles = getFiles(blogDirectory);

 // remove non-mdx files
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");
 function extractMetaFromString(content: string): any {
  // Extract the meta string from the content
  const metaStringMatch = content.match(
   /export const metadata = (\{[\s\S]*?\});/
  );
  if (!metaStringMatch) return {};

  // Evaluate the string to get the object
  // This is a bit hacky, but given the context, it should be safe
  const metaObject = eval(`(${metaStringMatch[1]})`);
  return metaObject;
 }
 const allPostsData = mdxFiles.map(async (fileName) => {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromString(content);

  const slug = path.dirname(fileName).split(path.sep).slice(-2).join("/");
  const title = path
   .basename(path.dirname(fileName))
   .replace(/-/g, " ")
   .replace(/\b\w/g, (match) => match.toUpperCase());

  return {
   id: fileName.replace(/\.mdx$/, ""),
   slug,
   title,
   ...data,
  } as PostMetaData & { id: string; slug: string };
 });

 return Promise.all(allPostsData);
}

export default async function Page() {
 const data = await generateStaticParams();
 return (
  <div className='flex flex-col gap-2'>
   <h2 className='text-6xl font-semibold'>All Blog Posts</h2>
   <BlogContainer data={data} />
  </div>
 );
}
