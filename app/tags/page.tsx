import React from "react";
import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetaData } from "@/types/index";
import TagsContainer from "@/components/tag/TagsContainer";
import ContainerLayout from "@/components/layouts/ContainerLayout";
const blogDirectory = path.join(process.cwd(), "app/blog");

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

export async function generateTagsData(): Promise<string[]> {
 const allPostsFiles = getFiles(blogDirectory);

 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const allTags = [];

 for (const fileName of mdxFiles) {
  const fileContents = fs.readFileSync(fileName, "utf8");
  const { content } = matter(fileContents) as GrayMatterFile<string>;
  const data = extractMetaFromString(content);

  if (data.tags && Array.isArray(data.tags)) {
   allTags.push(...data.tags);
  }
 }

 const uniqueTags = [...new Set(allTags)];
 return uniqueTags;
}

export async function generateBlogsData(): Promise<
 (PostMetaData & { id: string; slug: string })[]
> {
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
export default async function TagsPage() {
 const tags = await generateTagsData();
 const blogsData = await generateBlogsData(); // Fetch blogs data

 return (
  <div className='flex flex-col gap-2'>
   <TagsContainer tags={tags} type='tag' blogsData={blogsData} />
  </div>
 );
}
