import Container from "@/components/ui/container";
import { ReactNode } from "react";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string[] }>;
}): Promise<Metadata> {
  const blogSlug = (await params).blog;

  if (!blogSlug || blogSlug.length === 0) {
    return {
      title: "TrackingAcademy Blog | Master Conversion Tracking & ROI",
      description:
        "Discover expert insights on conversion tracking, server-side tracking, and maximizing ad ROI post-iOS 18.",
      openGraph: {
        title: "TrackingAcademy Blog | Master Conversion Tracking & ROI",
        description:
          "Explore strategies to recover lost revenue, optimize ad spend, and achieve 95% conversion tracking accuracy.",
      },
    };
  }

  if (blogSlug.length === 1) {
    const category = blogSlug[0];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);

    return {
      title: `${categoryName} Insights | TrackingAcademy Blog`,
      description: `Learn how to optimize ${categoryName} tracking and maximize conversions for better ad performance and revenue growth.`,
      openGraph: {
        title: `${categoryName} Insights | TrackingAcademy Blog`,
        description: `Gain expert knowledge on ${categoryName} tracking strategies, automation, and analytics for data-driven decisions.`,
      },
    };
  }

  if (blogSlug.length === 2) {
    const [category, slug] = blogSlug;
    try {
      const { metadata } = await import(
        `@/app/_blog-markdown/${category}/${slug}.mdx`
      );

      return {
        title: `${metadata.title} | TrackingAcademy Blog`,
        description:
          metadata.excerpt ||
          `Deep dive into ${metadata.title} and learn expert tracking strategies.`,
        openGraph: {
          title: `${metadata.title} | TrackingAcademy Blog`,
          description:
            metadata.excerpt ||
            `Read our latest insights on ${metadata.title} to improve tracking and maximize ad ROI.`,
          type: "article",
          publishedTime: metadata.date,
        },
      };
    } catch (error) {
      console.error(`Error loading metadata for ${category}/${slug}:`, error);
      return {
        title: "Blog Post Not Found | TrackingAcademy",
        description:
          "This blog post could not be found. Explore our latest insights on conversion tracking and ad optimization.",
      };
    }
  }

  return {
    title: "TrackingAcademy Blog | Conversion Tracking & ROI Optimization",
    description:
      "Read the latest expert insights on tracking accuracy, ad spend efficiency, and revenue growth strategies.",
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
