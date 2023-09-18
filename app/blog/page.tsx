import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import Link from "next/link";
import { PostMetaData } from "@/types/index";
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

export async function generateStaticParams(): Promise<
 (PostMetaData & { id: string; slug: string })[]
> {
 const allPostsFiles = getFiles(blogDirectory);

 // remove non-mdx files
 const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === ".mdx");

 const allPostsData = mdxFiles.map(async (fileName) => {
  const fileContents = fs.readFileSync(fileName, "utf8");

  const { data } = matter(fileContents) as GrayMatterFile<string>;
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
 const blogLinks = data.map((post, index) => {
  return (
   <Link
    key={index}
    className='rounded-md p-4 shadow-md'
    href={`/blog/${post.slug}`}>
    <p className='line-clamp-1'>{post.title}</p>
   </Link>
  );
 });
 return (
  <div className='flex flex-col gap-2'>
   <h2 className='text-4xl font-bold'>All Blog Posts</h2>
   <div className='grid grid-cols-1 md:grid-cols-2 gap-2  '>{blogLinks}</div>
  </div>
 );
}
