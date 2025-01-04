import BlogHeader from '@/components/blog/blog-header';
import ContactMe from './contact-me';
import TableOfContents from './table-of-content';
export default async function BlogContainer({
  slug,
  category,
}: {
  slug: string;
  category: string;
}) {
  const { default: BlogPost, metadata } = await import(
    `@/app/_blog-markdown/${category}/${slug}.mdx`
  );

  return (
    <div>
      <BlogHeader metadata={metadata} />
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[250px,1fr,250px]">
        <TableOfContents />
        <article className="prose prose-lg">
          <BlogPost />
        </article>
        <ContactMe />
      </div>
    </div>
  );
}
