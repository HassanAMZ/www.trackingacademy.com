import type { Metadata } from "next";
import React, { ReactNode } from "react";
import formatString from "utils/formatString";
import getTags from "utils/getTags";
import reverseFormatString from "utils/reverseFormatString";

export async function generateMetadata(props: any): Promise<Metadata> {
  const params = await props.params;
  const tagName = reverseFormatString(params.tag);

  return {
    title: `${tagName} Archive | TrackingAcademy`,
    description: `Browse all ${tagName} related content, tutorials, and insights for web analysts and marketing professionals.`,
    keywords: [
      tagName.toLowerCase(),
      "web analytics",
      "marketing resources",
      "tracking optimization",
      "digital marketing",
      "tracking academy",
      "analytics tutorials",
      "conversion tracking",
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
      url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.trackingacademy.com"}/tags/${params.tag}`,
      siteName: process.env.NEXT_PUBLIC_SITE_NAME || "TrackingAcademy",
      title: `${tagName} Archive | TrackingAcademy`,
      description: `Browse all ${tagName} related content, tutorials, and insights for web analysts and marketing professionals.`,
      images: [
        {
          url: "/images/social-sharing.png",
          width: 1200,
          height: 630,
          alt: `${tagName} Archive - TrackingAcademy`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${tagName} Archive | TrackingAcademy`,
      description: `Browse all ${tagName} related content, tutorials, and insights for web analysts and marketing professionals.`,
      images: ["/images/social-sharing.png"],
      creator: process.env.NEXT_PUBLIC_TWITTER_HANDLE || "@trackingacademy",
    },
    alternates: {
      canonical: `/tags/${params.tag}`,
    },
  };
}

export async function generateStaticParams(): Promise<{ tag: string }[]> {
  const tags = await getTags();
  const tagData = tags.map((tagName) => ({ tag: formatString(tagName) }));
  return tagData;
}

export default async function Layout({ children }: { children: ReactNode }) {
  return <React.Fragment>{children}</React.Fragment>;
}
