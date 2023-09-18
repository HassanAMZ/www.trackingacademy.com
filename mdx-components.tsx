import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  YoutubeEmbed,
  p: ({ ...rest }) => {
   return <p className='py-1' {...rest} />;
  },
  pre: Pre,

  ol: ({ ...rest }) => {
   return <ol className='text-left list-disc py-1 gap-1' {...rest} />;
  },
  ul: ({ ...rest }) => {
   return (
    <ul
     className='text-left py-1 list-disc list-inside flex flex-col gap-1'
     {...rest}
    />
   );
  },
  li: ({ ...rest }) => {
   return <li className='text-left pl-4' {...rest} />;
  },
  h1: (props) => {
   return (
    <h1
     className='text-left py-2 text-2xl capitalize sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h1>
   );
  },
  h2: (props) => {
   return (
    <h2
     className='text-left py-2 text-2xl capitalize sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h2>
   );
  },
  h3: (props) => {
   return (
    <h3
     className='text-left py-2 text-2xl capitalize sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h3>
   );
  },
  h4: (props) => {
   return (
    <h4
     className='text-left py-2 text-2xl capitalize sm:text-3xl font-semibold'
     {...props}>
     {props.children}
    </h4>
   );
  },
  ...components,
 };
}
