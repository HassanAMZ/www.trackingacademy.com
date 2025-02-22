import CategoryContainer from "@/components/blog/category-container";
import { PostMetadata } from "@/types/index";
import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import path from "path";
import extractMetaFromStringForBlog from "utils/extractMetaFromStringForBlog";
import getFiles from "utils/getFiles";

export async function generateStaticParams(): Promise<
  (PostMetadata & { id: string; slug: string })[]
> {
  const blogDirectory = path.join(process.cwd(), "app/_blog-markdown");
  const allPostsFiles = getFiles(blogDirectory);

  // remove non-mdx files
  const mdxFiles = allPostsFiles.filter(
    (file) => path.extname(file) === ".mdx",
  );

  const allPostsData = mdxFiles.map(async (fileName) => {
    const fileContents = fs.readFileSync(fileName, "utf8");
    const { content } = matter(fileContents) as GrayMatterFile<string>;
    const data = extractMetaFromStringForBlog(content);

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
    } as PostMetadata & { id: string; slug: string };
  });

  const sortedData = (await Promise.all(allPostsData)).sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateB.getTime() - dateA.getTime();
  });

  return sortedData;
}

export default async function Page(props: {
  params: Promise<{ blog: string }>;
}) {
  const params = await props.params;
  let blog = params.blog;
  const data = await generateStaticParams();
  const filteredData = blog
    ? data.filter((post) => post.slug.split("/")[0] === blog)
    : data;
  return (
    <div className="flex flex-col gap-2">
      <CategoryContainer rawData={data} data={filteredData} type="blog" />
    </div>
  );
}
