import React, { ReactNode } from 'react';
import formatString from 'utils/formatString';
import getTags from 'utils/getTags';
import reverseFormatString from 'utils/reverseFormatString';

export async function generateMetadata(props: any) {
  const params = await props.params;
  return {
    title: `${reverseFormatString(params.tag)} Archieve- TrackingAcademy`,
    description: `Blog for Web Analysts and Marketing People`,
    openGraph: {
      images: ['/images/social-sharing.png'],
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
