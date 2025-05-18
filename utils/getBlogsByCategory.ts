import fs from "fs";
import path from "path";
import extractMetaFromStringForBlog from "@/utils/extractMetaFromStringForBlog";
import getFiles from "@/utils/getFiles";
import matter from "gray-matter";

export default async function getCategoryBlogs(params: string[]) {
  const baseDirectory = path.join(process.cwd(), "app/_blog-markdown");

  // If we only have category, get all posts from that category
  if (params.length === 1) {
    const category = params[0];
    const categoryPath = path.join(baseDirectory, category);

    // Check if category exists
    if (!fs.existsSync(categoryPath)) {
      return [];
    }

    const allPostsFiles = getFiles(categoryPath);
    const mdxFiles = allPostsFiles.filter(
      (file) => path.extname(file) === ".mdx",
    );

    const contents = [];

    for (const fileName of mdxFiles) {
      const fileContents = fs.readFileSync(fileName, "utf8");
      const { content } = matter(fileContents);
      const data = extractMetaFromStringForBlog(content);

      const fileBaseName = path.basename(fileName, ".mdx");
      const slug = `${category}/${fileBaseName}`;
      const id = fileName.replace(/\.mdx$/, "");

      if (data) {
        contents.push({
          ...data,
          id,
          slug,
          category,
        });
      }
    }

    // Sort by blogId if it exists
    return contents.sort((a, b) => (b.blogId || 0) - (a.blogId || 0));
  }

  // If we have both category and slug, get specific post
  if (params.length === 2) {
    const [category, slug] = params;
    const filePath = path.join(baseDirectory, category, `${slug}.mdx`);

    // Check if file exists
    if (!fs.existsSync(filePath)) {
      return [];
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { content } = matter(fileContents);
    const data = extractMetaFromStringForBlog(content);

    if (data) {
      return [
        {
          ...data,
          id: filePath.replace(/\.mdx$/, ""),
          slug: `${category}/${slug}`,
          category,
        },
      ];
    }
  }

  return [];
}
