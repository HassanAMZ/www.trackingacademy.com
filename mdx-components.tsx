import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/global/youtube-embed";
import BlogHeader from "@/components/blog/header";
import CustomLink from "@/components/mdx/CustomLink";
import Note from "@/components/mdx/Note";
import GiscusComments from "@/components/mdx/GiscusComents";
import AuthPre from "@/components/mdx/AuthPre";
import DataLayerCode from "@/components/dataLayer/DataLayerCode";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import TypographyH1 from "@/components/ui/typography-h1";
import TypographyH2 from "@/components/ui/typography-h2";
import TypographyH3 from "@/components/ui/typography-h3";
import TypographyH4 from "@/components/ui/typography-h4";
import TypographyP from "@/components/ui/typography-p";
import TypographyListItem from "@/components/ui/typography-list-item";
import TypographyUnorderedList from "@/components/ui/typography-unordered-list";
import TypographyOrderedList from "@/components/ui/typography-ordered-list";
import Image from "next/image";
import ToolsHeroSection from "@/components/tools/ToolsHeroSection";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const createId = (content: string) =>
    content.replace(/\s+/g, "-").toLowerCase();

  return {
    ToolsHeroSection,
    GiscusComments,
    YoutubeEmbed,
    DataLayerCode,
    BlogHeader,
    Note,
    AuthPre,
    AuthenticatedLayout,
    CustomLink,
    pre: AuthPre,
    a: (props) => <CustomLink {...props} href={props.href || ""} />, // Ensuring href is always a string
    p: (props) => <TypographyP {...props} />,
    h1: (props) => (
      <TypographyH1 {...props} id={createId(props.children as string)}>
        {props.children}
      </TypographyH1>
    ),
    h2: (props) => (
      <TypographyH2 {...props} id={createId(props.children as string)}>
        {props.children}
      </TypographyH2>
    ),
    h3: (props) => (
      <TypographyH3 {...props} id={createId(props.children as string)}>
        {props.children}
      </TypographyH3>
    ),
    h4: (props) => (
      <TypographyH4 {...props} id={createId(props.children as string)}>
        {props.children}
      </TypographyH4>
    ),
    h5: (props) => (
      <TypographyH4 {...props} id={createId(props.children as string)}>
        {props.children}
      </TypographyH4>
    ),
    h6: (props) => (
      <TypographyH4 {...props} id={createId(props.children as string)}>
        {props.children}
      </TypographyH4>
    ),
    li: (props) => <TypographyListItem {...props} />,
    ol: (props) => <TypographyOrderedList {...props} />,
    ul: (props) => <TypographyUnorderedList {...props} />,
    img: (props) => (
      // @ts-ignore
      <Image src={props.src} width={1920} height={1080} {...props} />
    ),
    ...components,
  };
}
