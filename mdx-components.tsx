import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import BlogHeader from "@/components/blog/BlogHeader";
import CustomLink from "@/components/mdx/CustomLink";
import Accordion from "@/components/mdx/Accordion";
import Note from "@/components/mdx/Note";
import {
 Heading2xl,
 Heading3xl,
 Heading4xl,
 Heading5xl,
 Heading6xl,
 Headingxl,
 ListItem,
 Paragraphmd,
 OrderedList,
 UnorderedList,
} from "./components/typography/Heading";
import Image from "next/image";
import GiscusComments from "@/components/mdx/GiscusComents";
import AuthPre from "./components/mdx/AuthPre";
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
  p: Paragraphmd,
  h1: Heading6xl,
  h2: Heading5xl,
  h3: Heading4xl,
  h4: Heading3xl,
  h5: Heading2xl,
  h6: Headingxl,
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
