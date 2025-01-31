import BlogHeader from "@/components/blog/blog-header";
import ContactUs from "./contact-us";
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
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[250px_1fr_250px]">
        <TableOfContents />
        <article>
          <BlogPost />
        </article>
        <ContactUs />
      </div>
    </div>
  );
}
