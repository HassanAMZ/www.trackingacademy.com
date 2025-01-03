import BlogContainer from '@/components/blog/blog-container';
import CategoryContainer from '@/components/blog/category-container';
import getBlogsByCategory from '@/utils/getBlogsByCategory';
import getBlogsByCategoryStaticParams from '@/utils/getBlogsByCategoryStaticParams';

export default async function Page({ params }: { params: Promise<{ blog: string[] }> }) {
  const blogs = await getBlogsByCategory((await params).blog);

  // If we have both category and slug, show the blog post
  if ((await params).blog.length === 2) {
    console.log('im rendered');
    const [category, slug] = (await params).blog;
    return <BlogContainer slug={slug} category={category} />;
  }

  // If we only have category, show the category listing
  if ((await params).blog.length === 1) {
    return <CategoryContainer data={blogs} type="blog" />;
  }

  // Handle invalid routes
  return <h1>404 - Not Found</h1>;
}

export async function generateStaticParams() {
  const blogs = getBlogsByCategoryStaticParams();
  return blogs;
}

export const dynamicParams = false;
