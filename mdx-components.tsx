import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import BlogHeader from "@/components/blog/BlogHeader";
import CustomLink from "@/components/mdx/CustomLink";
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
} from "@/components/typography/Heading";
import Image from "next/image";
import GiscusComments from "@/components/mdx/GiscusComents";
import AuthPre from "@/components/mdx/AuthPre";
import DataLayerCode from "./components/dataLayer/DataLayerCode";

export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  GiscusComments,
  YoutubeEmbed,
  DataLayerCode,
  BlogHeader,
  Note,
  AuthPre,
  pre: AuthPre,
  a: CustomLink,
  p: (props) => <p {...props} className='py-2 text-md md:text-lg' />,
  h1: (props) => (
   <h1
    {...props}
    className='text-4xl py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h2: (props) => (
   <h1
    {...props}
    className='text-3xl py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h3: (props) => (
   <h1
    {...props}
    className='text-2xl py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h4: (props) => (
   <h1
    {...props}
    className='text-xl py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h5: (props) => (
   <h1
    {...props}
    className='text-lg py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h6: (props) => (
   <h1
    {...props}
    className='text-md py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  li: ListItem,
  ol: OrderedList,
  ul: UnorderedList,

  img: (props) => {
   // @ts-ignore
   return <Image src={props.src} width={1920} height={1080} {...props} />;
  },

  ...components,
 };
}
