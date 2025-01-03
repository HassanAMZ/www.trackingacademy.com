import getFiles from '@/utils/getFiles'; // Ensure this path is correct
import path from 'path';

export default function getBlogsByCategory(category: string) {
  const contentDirectoryPath = `app/_blog-markdown/${category}`;
  const baseDirectory = path.join(process.cwd(), contentDirectoryPath);
  const allPostsFiles = getFiles(baseDirectory);
  const mdxFiles = allPostsFiles.filter((file) => path.extname(file) === '.mdx');

  return mdxFiles.map((fileName) => {
    const relativePath = path.relative(baseDirectory, fileName);
    const slug = relativePath.replace(/\\/g, '/').replace(/\.mdx$/, '');
    const fileBaseName = path.basename(fileName, '.mdx');

    return { slug, fileName: fileBaseName };
  });
}
