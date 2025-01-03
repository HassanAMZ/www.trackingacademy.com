import Navbar from '@/components/global/navbar';
import GiscusComments from '@/components/mdx/GiscusComents';
import { PostMetadata } from '@/types/index';
import React, { ReactNode } from 'react';
import getBlogsData from 'utils/getBlogsData';

export const metadata = {
  title: 'Blog Archieve- TrackingAcademy',
  description: `Blog for Web Analysts and Marketing People`,
  openGraph: {
    images: ['/images/social-sharing.png'],
  },
};

export async function generateStaticParams(): Promise<
  (PostMetadata & { id: string; slug: string })[]
> {
  let allPostsData = await getBlogsData('app/_blog-markdown');

  return allPostsData;
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="text-base">{children}</main>
      <GiscusComments />
    </React.Fragment>
  );
}
