import TagContainer from "@/components/tag/tag-container";
import Container from "@/components/ui/container";
import { Tag } from "lucide-react";
import { Metadata } from "next";
import getBlogAndTagsData from "utils/getBlogAndTagsData";

export const metadata: Metadata = {
  title: "Browse Tags | Blog",
  description: "Explore our content organized by tags",
  openGraph: {
    title: "Browse Tags | Blog",
    description: "Find content by topic and explore our entire collection organized by tags",
    images: ["/images/tags-banner.jpg"], // Add your own OG image here
  },
};

export default async function TagsPage() {
  const { tags, blogs } = await getBlogAndTagsData();

  return (
    <Container className="py-12">
      <div className="mb-8 text-center">
        <div className="mb-2 flex items-center justify-center gap-2">
          <Tag className="text-primary h-8 w-8" />
          <h1 className="text-4xl font-bold">Browse by Tags</h1>
        </div>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl">
          Discover {blogs.length} articles organized across {tags.length} topics
        </p>
      </div>{" "}
      <TagContainer tags={tags} blogsData={blogs} />
    </Container>
  );
}
