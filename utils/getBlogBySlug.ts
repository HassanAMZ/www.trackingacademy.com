import { PostMetadata } from '@/types/index'; // Ensure this path is correct
import extractMetaFromStringForBlog from '@/utils/extractMetaFromStringForBlog'; // Ensure this path is correct
import getFiles from '@/utils/getFiles'; // Ensure this path is correct
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

interface ContentData {
  metadata: PostMetadata;
  content: string;
  data: any;
}

/**
 * Fetch metadata and content for a specific slug.
 *
 * @param slug - The slug for the desired content.
 * @param contentDirectoryPath - The path to the content directory (default: 'app/_blog-markdown').
 * @returns The metadata and content for the given slug.
 */
export default async function getContentBySlug(
  category: string,
  slug: string,
): Promise<ContentData | null> {
  const contentDirectoryPath = `app/_blog-markdown/${category}`;
  const baseDirectory = path.join(process.cwd(), contentDirectoryPath);
  const allPostsFiles = getFiles(baseDirectory);
  const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === '.mdx');

  for (const fileName of mdxFiles) {
    const fileContents = fs.readFileSync(fileName, 'utf8');
    const { content, data } = matter(fileContents);

    const extractedMetadata = extractMetaFromStringForBlog(content);
    const relativePath = path.relative(baseDirectory, fileName);
    const fileSlug = relativePath.replace(/\\/g, '/').replace(/\.mdx$/, '');

    if (fileSlug === slug && extractedMetadata) {
      return {
        metadata: extractedMetadata,
        content,
        data,
      };
    }
  }

  return null; // Return null if no matching slug is found
}
