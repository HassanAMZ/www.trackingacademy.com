import fs from "fs";
import path from "path";
import matter, { GrayMatterFile } from "gray-matter";
import { PostMetaData } from "@/types/index";
import getTags from "./getTags";
import getBlogsData from "@/components/utils/getBlogsData";

export default async function getBlogAndTagsData(): Promise<{
 tags: string[];
 blogs: (PostMetaData & { id: string; slug: string })[];
}> {
 const uniqueTags = await getTags();
 const blogs: (PostMetaData & { id: string; slug: string })[] =
  await getBlogsData();

 return { tags: uniqueTags, blogs };
}
