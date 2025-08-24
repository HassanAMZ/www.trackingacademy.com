import Container from "@/components/ui/container";
import { Metadata } from "next";
import { ReactNode } from "react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ blog: string[] }>;
}): Promise<Metadata> {
  const blogSlug = (await params).blog;

  if (blogSlug.length === 1) {
    const category = blogSlug[0];
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
    return {
      title: `${categoryName} Insights | TrackingAcademy Blog`,
      description: `Learn how to optimize ${categoryName} tracking and maximize conversions for better ad performance and revenue growth.`,
      keywords: [
        `${categoryName} tracking`,
        `${categoryName} optimization`,
        "conversion tracking",
        "ad performance",
        "revenue growth",
        "tracking academy blog",
        "marketing analytics",
      ],
      authors: [
        {
          name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        },
      ],
      creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      openGraph: {
        type: "website",
        locale: "en_US",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/blog/${category}`,
        siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
        title: `${categoryName} Insights | TrackingAcademy Blog`,
        description: `Gain expert knowledge on ${categoryName} tracking strategies, automation, and analytics for data-driven decisions.`,
        images: [
          {
            url: `/images/categories/${category}.jpg`,
            width: 1200,
            height: 630,
            alt: `${categoryName} Insights - TrackingAcademy Blog`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: `${categoryName} Insights | TrackingAcademy Blog`,
        description: `Gain expert knowledge on ${categoryName} tracking strategies, automation, and analytics for data-driven decisions.`,
        images: [`/images/categories/${category}.jpg`],
        creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
      },
      alternates: {
        canonical: `/blog/${category}`,
      },
    };
  }

  if (blogSlug.length === 2) {
    const [category, slug] = blogSlug;
    try {
      const { metadata } = await import(`@/app/_blog-markdown/${category}/${slug}.mdx`);

      // Check if this blog post has a video
      const hasVideo = metadata.embedId && metadata.embedId.trim() !== "";

      // Base metadata
      const baseMetadata: Metadata = {
        title: `${metadata.title} | TrackingAcademy Blog`,
        description:
          metadata.excerpt ||
          `Deep dive into ${metadata.title} and learn expert tracking strategies.`,
        keywords: [
          metadata.title.toLowerCase(),
          "tracking strategies",
          "conversion optimization",
          "ad ROI",
          "tracking academy blog",
          "marketing analytics",
          "expert insights",
          ...(hasVideo ? ["video tutorial", "youtube tutorial", "tracking tutorial"] : []),
        ],
        authors: [
          {
            name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
          },
        ],
        creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
        alternates: {
          canonical: `/blog/${category}/${slug}`,
        },
      };

      // Enhanced OpenGraph for video posts
      if (hasVideo) {
        baseMetadata.openGraph = {
          type: "video.other",
          locale: "en_US",
          url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/blog/${category}/${slug}`,
          siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
          title: `${metadata.title} | Video Tutorial | TrackingAcademy Blog`,
          description:
            metadata.excerpt ||
            `Watch our video tutorial on ${metadata.title} and learn expert tracking strategies step-by-step.`,
          images: [
            {
              url: `https://img.youtube.com/vi/${metadata.embedId}/maxresdefault.jpg`,
              width: 1280,
              height: 720,
              alt: `${metadata.title} - Video Tutorial`,
            },
          ],
          videos: [
            {
              url: `https://www.youtube.com/watch?v=${metadata.embedId}`,
              width: 1280,
              height: 720,
              type: "video/mp4",
            },
          ],
        };

        baseMetadata.twitter = {
          card: "player",
          title: `${metadata.title} | Video Tutorial | TrackingAcademy Blog`,
          description:
            metadata.excerpt ||
            `Watch our video tutorial on ${metadata.title} and learn expert tracking strategies step-by-step.`,
          images: [`https://img.youtube.com/vi/${metadata.embedId}/maxresdefault.jpg`],
          creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
        };

        // Add video-specific meta tags with static data
        baseMetadata.other = {
          "video:duration": "10:00",
          "video:release_date": metadata.date,
          "video:tag": ["tracking", "analytics", "tutorial", "conversion optimization"],
          "video:category": "Education",
          "video:family_friendly": "true",
        };

        // Note: Schema markup will be added via script tag in the component
      } else {
        // Standard article metadata for non-video posts
        baseMetadata.openGraph = {
          type: "article",
          locale: "en_US",
          url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/blog/${category}/${slug}`,
          siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
          title: `${metadata.title} | TrackingAcademy Blog`,
          description:
            metadata.excerpt ||
            `Read our latest insights on ${metadata.title} to improve tracking and maximize ad ROI.`,
          publishedTime: metadata.date,
          images: [
            {
              url: metadata.openGraph?.images?.[0] || "/images/social-sharing.png",
              width: 1200,
              height: 630,
              alt: `${metadata.title} - TrackingAcademy Blog`,
            },
          ],
        };

        baseMetadata.twitter = {
          card: "summary_large_image",
          title: `${metadata.title} | TrackingAcademy Blog`,
          description:
            metadata.excerpt ||
            `Read our latest insights on ${metadata.title} to improve tracking and maximize ad ROI.`,
          images: [metadata.openGraph?.images?.[0] || "/images/social-sharing.png"],
          creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
        };
      }

      return baseMetadata;
    } catch (error) {
      console.error(`Error loading metadata for ${category}/${slug}:`, error);
      return {
        title: "Blog Post Not Found | TrackingAcademy",
        description:
          "This blog post could not be found. Explore our latest insights on conversion tracking and ad optimization.",
        keywords: [
          "blog post not found",
          "conversion tracking",
          "ad optimization",
          "tracking academy blog",
        ],
        authors: [
          {
            name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
          },
        ],
        creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
        publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
        alternates: {
          canonical: "/blog/not-found",
        },
      };
    }
  }

  return {
    title: "TrackingAcademy Blog | Conversion Tracking & ROI Optimization",
    description:
      "Read the latest expert insights on tracking accuracy, ad spend efficiency, and revenue growth strategies.",
    keywords: [
      "conversion tracking",
      "ROI optimization",
      "ad spend efficiency",
      "revenue growth",
      "tracking academy blog",
      "expert insights",
    ],
    authors: [
      {
        name: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
      },
    ],
    creator: process.env.NEXT_PUBLIC_AUTHOR_NAME || "Shahzada Ali Hassan",
    publisher: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
    alternates: {
      canonical: "/blog",
    },
  };
}

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
