import BlogHeader from "@/components/blog/blog-header";
import HelpSection from "./help-section";
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
      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-8">
          <TableOfContents />
          <HelpSection />
        </div>

        {/* Main Content */}
        <article className="blog-content max-w-4xl">
          <BlogPost />
        </article>
      </div>
    </div>
  );
}
