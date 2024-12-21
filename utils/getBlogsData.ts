import fs from 'fs';
import path from 'path';
import matter, { GrayMatterFile } from 'gray-matter';
import { PostMetadata } from '@/types/index'; // Ensure this path is correct
import extractMetaFromStringForBlog from '@/utils/extractMetaFromStringForBlog'; // Ensure this path is correct
import getFiles from '@/utils/getFiles'; // Ensure this path is correct

// Function with a default parameter for content directory path
export default async function getContentData(
  contentDirectoryPath: string = 'app/blog', // Default value assigned here
): Promise<(PostMetadata & { id: string; slug: string; title: string })[]> {
  const baseDirectory = path.join(process.cwd(), contentDirectoryPath);
  const allPostsFiles = getFiles(baseDirectory);
  const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === '.mdx');

  const contents = [];

  for (const fileName of mdxFiles) {
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const { content } = matter(fileContents) as GrayMatterFile<string>;
    const data = extractMetaFromStringForBlog(content);

    const slug = path.dirname(fileName).split(path.sep).slice(-2).join('/');
    const pagePath = path
      .basename(path.dirname(fileName))
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (match) => match.toUpperCase());

    const id = fileName.replace(/\.mdx$/, '');

    if (data) {
      contents.push({ ...data, id, slug, pagePath });
    }
  }

  return contents;
}
