import BlogContainer from '@/components/blog/blog-container';
import getBlogsByCategory from '@/utils/getBlogsByCategory';

let category = 'upwork';

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  return (
    <div>
      <BlogContainer params={params} category={category} />
    </div>
  );
}
export function generateStaticParams() {
  const blogs = getBlogsByCategory(`${category}`);
  return blogs;
}

export const dynamicParams = false;
