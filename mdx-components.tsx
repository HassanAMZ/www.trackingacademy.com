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
 Paragraphlg,
 Paragraphmd,
 Paragraphsm,
} from "./components/typography/Heading";
import GiscusComments from "@/components/mdx/GiscusComents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  GiscusComments,
  YoutubeEmbed,
  BlogHeader,
  Accordion,
  Note,
  pre: Pre,
  a: CustomLink,
  p: Paragraphmd,
  h1: Heading6xl,
  h2: Heading5xl,
  h3: Heading4xl,
  h4: Heading3xl,
  h5: Heading2xl,
  h6: Headingxl,

  ...components,
 };
}
