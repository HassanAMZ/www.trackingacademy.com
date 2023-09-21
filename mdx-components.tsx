import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import BlogHeader from "@/components/blog/BlogHeader";
import CustomLink from "@/components/mdx/CustomLink";
import Note from "@/components/mdx/Note";
import React from "react";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  YoutubeEmbed,
  BlogHeader,
  Note,
  pre: Pre,
  a: CustomLink,

  h1: (props) => {
   return (
    <h1
     className='text-left py-2 text-2xl sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h1>
   );
  },
  h2: (props) => {
   return (
    <h2
     className='text-left py-2 text-2xl sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h2>
   );
  },
  h3: (props) => {
   return (
    <h3
     className='text-left py-2 text-2xl sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h3>
   );
  },
  h4: (props) => {
   return (
    <h4
     className='text-left py-2 text-2xl sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h4>
   );
  },
  ...components,
 };
}
