import BlogHeader from "@/components/blog/blog-header";
import ContactUs from "./call-to-action-message-us";
import TableOfContents from "./table-of-content";

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
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[300px_1fr]">
        <div className="flex flex-col gap-8 lg:sticky lg:top-8">
          <TableOfContents />
          <ContactUs />
        </div>
        <article>
          <BlogPost />
        </article>
      </div>
    </div>
  );
}
