import BlogHeader from "@/components/blog/blog-header";
import { getYouTubeVideoData } from "@/lib/youtube-api";
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

  // Fetch YouTube video data if this is a video post
  let videoData = null;
  if (metadata.embedId && metadata.embedId.trim() !== "") {
    videoData = await getYouTubeVideoData(metadata.embedId);
  }

  return (
    <div className="min-h-screen">
      <BlogHeader metadata={metadata} videoData={videoData} />
      <div className="mt-8 grid grid-cols-1 md:gap-8 lg:grid-cols-[320px_1fr]">
        {/* Sidebar */}
        <div className="flex flex-col gap-4 lg:sticky lg:top-8 lg:h-fit">
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
