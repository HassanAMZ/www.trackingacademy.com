import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  YoutubeEmbed,
  p: ({ ...rest }) => {
   return <p className='py-2' {...rest} />;
  },
  pre: Pre,

  ol: ({ ...rest }) => {
   return (
    <ol
     type='1'
     className='list-decimal list-outside my-1 pl-[40px] mx-0'
     {...rest}
    />
   );
  },
  h1: (props) => {
   return (
    <h1
     className='py-2 text-5xl underline capitalize sm:text-6xl lg:text-7xl'
     {...props}>
     {props.children}
    </h1>
   );
  },
  h2: (props) => {
   return (
    <h2 className='py-2 text-4xl underline capitalize sm:text-5xl' {...props}>
     {props.children}
    </h2>
   );
  },
  h3: (props) => {
   return (
    <h3 className='py-2 text-3xl underline capitalize sm:text-4xl' {...props}>
     {props.children}
    </h3>
   );
  },
  h4: (props) => {
   return (
    <h4 className='py-2 text-2xl underline capitalize sm:text-3xl' {...props}>
     {props.children}
    </h4>
   );
  },
  ...components,
 };
}
