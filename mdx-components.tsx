import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import BlogHeader from "@/components/blog/BlogHeader";
import CustomLink from "@/components/mdx/CustomLink";
import Accordion from "@/components/mdx/Accordion";
import Note from "@/components/mdx/Note";
import React from "react";
import {
 Heading2xl,
 Heading3xl,
 Heading4xl,
 Heading5xl,
 Headingxl,
 Paragraphlg,
 Paragraphmd,
 Paragraphsm,
} from "./components/typography/Heading";
import GiscusComments from "@/components/mdx/GiscusComents";
// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  YoutubeEmbed,
  BlogHeader,
  Note,
  pre: Pre,
  a: CustomLink,
  GiscusComments,
  Accordion,
  h1: (props) => {
   return (
    <Heading4xl className='py-2' {...props}>
     {props.children}
    </Heading4xl>
   );
  },
  h2: (props) => {
   return (
    <Heading3xl className='py-2' {...props}>
     {props.children}
    </Heading3xl>
   );
  },
  h3: (props) => {
   return (
    <Heading2xl className='py-2' {...props}>
     {props.children}
    </Heading2xl>
   );
  },
  h4: (props) => {
   return (
    <Headingxl className='py-2' {...props}>
     {props.children}
    </Headingxl>
   );
  },
  p: (props) => {
   return (
    <Paragraphmd className='tracking-normal leading-normal pb-2' {...props}>
     {props.children}
    </Paragraphmd>
   );
  },

  ...components,
 };
}
