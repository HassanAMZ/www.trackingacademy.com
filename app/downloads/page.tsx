import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetadata } from "@/types/index";
import extractMetaFromString from "@/components/utils/extractMetaFromString";
import BlogContainer from "@/components/blog/BlogContainer";
import getFiles from "@/components/utils/getFiles";

const blogDirectory = path.join(process.cwd(), "app/downloads");

export async function generateStaticParams(): Promise<
 (PostMetadata & { id: string; slug: string })[]
> {
 const allPostsFiles = getFiles(blogDirectory);

 // remove non-mdx files
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

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
  } as PostMetadata & { id: string; slug: string };
 });

 return Promise.all(allPostsData);
}

export default async function Page() {
 const data = await generateStaticParams();
 return (
  <div className='flex flex-col gap-2 py-4'>
   <BlogContainer data={data} type='downloads' />
  </div>
 );
}
