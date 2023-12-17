import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import BlogHeader from "@/components/blog/BlogHeader";
import CustomLink from "@/components/mdx/CustomLink";
import Accordion from "@/components/mdx/Accordion";
import Note from "@/components/mdx/Note";
import {
 Heading4xl,
 Heading5xl,
 ListItem,
 OrderedList,
 UnorderedList,
 Heading3xl,
 Heading6xl,
 Heading2xl,
 Headingxl,
 Paragraphlg,
} from "@/components/typography/Heading";
import Image from "next/image";
import GiscusComments from "@/components/mdx/GiscusComents";
import AuthPre from "@/components/mdx/AuthPre";
import {
 AddToCart,
 BeginCheckout,
 ConfiguringGTM,
 Purchase,
 ViewCart,
 TikTokPageView,
 ViewItem,
 ViewItemList,
} from "@/components/dataLayer/index";

export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  GiscusComments,
  YoutubeEmbed,
  BlogHeader,
  Accordion,
  Note,
  pre: AuthPre,
  a: CustomLink,
  p: Paragraphlg,
  h1: (props) => (
   <Heading6xl {...props} className={`!text-4xl py-2 ${props.className}`} />
  ),
  h2: (props) => (
   <Heading5xl {...props} className={`!text-3xl py-2  ${props.className}`} />
  ),
  h3: (props) => (
   <Heading4xl {...props} className={`!text-2xl py-2  ${props.className}`} />
  ),
  h4: (props) => (
   <Heading3xl {...props} className={`!text-xl py-2  ${props.className}`} />
  ),
  h5: (props) => (
   <Heading2xl {...props} className={`!text-lg py-2  ${props.className}`} />
  ),
  h6: (props) => (
   <Headingxl {...props} className={`!text-md py-2  ${props.className}`} />
  ),
  li: ListItem,
  ol: OrderedList,
  ul: UnorderedList,
  ViewItemList,
  ViewItem,
  BeginCheckout,
  ConfiguringGTM,
  AddToCart,
  Purchase,
  TikTokPageView,
  ViewCart,
  img: (props) => {
   // @ts-ignore
   return <Image src={props.src} width={1920} height={1080} {...props} />;
  },

  ...components,
 };
}
