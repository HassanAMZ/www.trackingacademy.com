import { PostMetadata } from '@/types/index';
import getTags from './getTags';
import getBlogsData from 'utils/getBlogsData';

export default async function getBlogAndTagsData(): Promise<{
  tags: string[];
  blogs: (PostMetadata & { id: string; slug: string })[];
}> {
  const uniqueTags = await getTags();
  const blogs: (PostMetadata & { id: string; slug: string })[] = await getBlogsData('app/blog');

  return { tags: uniqueTags, blogs };
}
