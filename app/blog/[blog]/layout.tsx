import Container from '@/components/ui/container';
import { ReactNode } from 'react';
import getBlogsData from 'utils/getBlogsData';
import reverseFormatString from 'utils/reverseFormatString';

export async function generateMetadata(props: any) {
  const params = await props.params;
  return {
    title: `${reverseFormatString(params.blog)} Archieve- TrackingAcademy`,
    description: `Blog for Web Analysts and Marketing People`,
    openGraph: {
      images: ['/images/social-sharing.png'],
    },
  };
}

export async function generateStaticParams(): Promise<{ blog: string }[]> {
  const blogs = await getBlogsData('app/blog');

  const seenBlogs = new Set();
  const blogSlugs = blogs
    .map((blog) => {
      const parts = blog.slug.split('/');
      return { blog: parts[parts.length - 2] }; // Taking the second last part of the slug after breaking at "/"
    })
    .filter((blogObj) => {
      if (!seenBlogs.has(blogObj.blog)) {
        seenBlogs.add(blogObj.blog);
        return true; // keep the object
      }
      return false; // remove the object
    });

  return blogSlugs;
}

export default function Layout({ children }: { children: ReactNode }) {
  return <Container>{children}</Container>;
}
