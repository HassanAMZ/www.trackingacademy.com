import getFiles from '@/utils/getFiles';
import fs from 'fs';
import path from 'path';

export default function getBlogsStaticParams(): { slug: string[] }[] {
  const baseDirectory = path.join(process.cwd(), 'app/_blog-markdown');
  const categories = fs
    .readdirSync(baseDirectory)
    .filter((file) => fs.statSync(path.join(baseDirectory, file)).isDirectory());

  const paths: { slug: string[] }[] = [];

  // Add category-only routes
  categories.forEach((category) => {
    paths.push({ slug: [category] });
  });

  // Add category/slug routes
  categories.forEach((category) => {
    const categoryPath = path.join(baseDirectory, category);
    const allPostsFiles = getFiles(categoryPath);
    const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === '.mdx');

    mdxFiles.forEach((fileName) => {
      const fileBaseName = path.basename(fileName, '.mdx');
      paths.push({ slug: [category, fileBaseName] });
    });
  });

  return paths;
}
