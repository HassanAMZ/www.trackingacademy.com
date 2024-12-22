import BlogHeader from '@/components/blog/header';
import DataLayerCode from '@/components/dataLayer/DataLayerCode';
import YoutubeEmbed from '@/components/global/youtube-embed';
import AuthenticatedLayout from '@/components/layouts/AuthenticatedLayout';
import AuthPre from '@/components/mdx/AuthPre';
import CustomLink from '@/components/mdx/CustomLink';
import GiscusComments from '@/components/mdx/GiscusComents';
import Note from '@/components/mdx/Note';
import ToolsHeroSection from '@/components/tools/ToolsHeroSection';
import { Button } from '@/components/ui/button';
import Text from '@/components/ui/text';
import type { MDXComponents } from 'mdx/types';
import Image from 'next/image';
import DataLayerCodeBlock from './components/mdx/datalayer-code';
export function useMDXComponents(components: MDXComponents): MDXComponents {
  const createId = (content: string) =>
    content
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .toLowerCase();

  return {
    ToolsHeroSection,
    GiscusComments,
    YoutubeEmbed,
    Button,
    DataLayerCode,
    DataLayerCodeBlock,
    BlogHeader,
    Note,
    AuthPre,
    AuthenticatedLayout,
    CustomLink,
    pre: AuthPre,
    a: (props) => <CustomLink {...props} href={props.href || ''} />, // Ensuring href is always a string
    p: (props) => (
      <Text as="p" variant="bodyMd" {...props}>
        {props.children}
      </Text>
    ),
    h1: (props) => (
      <Text
        as="h1"
        className="py-2"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h2: (props) => (
      <Text
        className="py-2"
        as="h2"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h3: (props) => (
      <Text
        className="py-2"
        as="h3"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h4: (props) => (
      <Text
        className="py-2"
        as="h4"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h5: (props) => (
      <Text
        className="py-2"
        as="h4"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    h6: (props) => (
      <Text
        className="py-2"
        as="h4"
        variant="headingXl"
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </Text>
    ),
    li: (props) => (
      <Text as="li" variant="bodyMd" {...props}>
        {props.children}
      </Text>
    ),
    ol: (props) => (
      <Text as="ol" variant="bodyMd" {...props}>
        {props.children}
      </Text>
    ),
    ul: (props) => (
      <Text as="ul" variant="bodyMd" {...props}>
        {props.children}
      </Text>
    ),
    img: (props) => (
      // @ts-ignore
      <Image src={props.src} width={1920} height={1080} {...props} />
    ),
    ...components,
  };
}
