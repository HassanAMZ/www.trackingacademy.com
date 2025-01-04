import getFiles from '@/utils/getFiles';
import fs from 'fs';
import path from 'path';

export default function getBlogsStaticParams(): { blog: string[] }[] {
  const baseDirectory = path.join(process.cwd(), 'app/_blog-markdown');
  const categories = fs
    .readdirSync(baseDirectory)
    .filter((file) => fs.statSync(path.join(baseDirectory, file)).isDirectory());

  const paths: { blog: string[] }[] = [];

  // Add category-only routes
  categories.forEach((category) => {
    paths.push({ blog: [category] });
  });

  // Add category/blog routes
  categories.forEach((category) => {
    const categoryPath = path.join(baseDirectory, category);
    const allPostsFiles = getFiles(categoryPath);
    const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === '.mdx');

    mdxFiles.forEach((fileName) => {
      const fileBaseName = path.basename(fileName, '.mdx');
      paths.push({ blog: [category, fileBaseName] });
    });
  });

  return paths;
}
