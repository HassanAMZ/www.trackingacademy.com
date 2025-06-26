import BlogContainer from "@/components/blog/blog-container";
import CategoryContainer from "@/components/blog/category-container";
import getBlogsByCategory from "@/utils/getBlogsByCategory";
import getBlogsByCategoryStaticParams from "@/utils/getBlogsByCategoryStaticParams";

export default async function Page({ params }: { params: Promise<{ blog: string[] }> }) {
  const paramsArray = await params;
  const blogSlug = paramsArray.blog;
  const blogData = await getBlogsByCategory(blogSlug);

  // If we have both category and slug, show the blog post
  if (blogSlug.length === 2) {
    const [category, slug] = (await params).blog;
    return <BlogContainer slug={slug} category={category} />;
  }

  // If we only have category, show the category listing
  if (blogSlug.length === 1) {
    return <CategoryContainer data={blogData} type="blog" />;
  }

  // Handle invalid routes
  return <h1>404 - Not Found</h1>;
}

export async function generateStaticParams() {
  const blogs = getBlogsByCategoryStaticParams();

  return blogs;
}
