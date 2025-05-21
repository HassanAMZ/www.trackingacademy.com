"use client";

export interface PostMetadata {
  title: string;
  date: string;
  blogId: number;
  tags: string[];
  draft: boolean;
  description: string;
  openGraph: { images: string[] };
  embedId: string;
  id?: string;
  updatedDate?: string;
  slug?: string;
}

export interface PostMetadataProps {
  metadata: PostMetadata;
}
