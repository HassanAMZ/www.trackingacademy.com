import type { MDXComponents } from "mdx/types";
import Pre from "@/components/mdx/Pre";
import YoutubeEmbed from "@/components/mdx/YoutubeEmbed";
import BlogHeader from "@/components/blog/BlogHeader";
import CustomLink from "@/components/mdx/CustomLink";
import Note from "@/components/mdx/Note";
import {
 ListItem,
 OrderedList,
 UnorderedList,
} from "@/components/typography/Heading";
import Image from "next/image";
import GiscusComments from "@/components/mdx/GiscusComents";
import AuthPre from "@/components/mdx/AuthPre";
import DataLayerCode from "./components/dataLayer/DataLayerCode";
import SopDetails from "@/components/blog/SopDetails";

export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  GiscusComments,
  YoutubeEmbed,
  DataLayerCode,
  BlogHeader,
  Note,
  AuthPre,
  SopDetails,
  pre: AuthPre,
  a: CustomLink,
  p: (props) => <p {...props} className='py-2 paragraph-primary' />,
  h1: (props) => (
   <h1
    {...props}
    className='title-primary py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h2: (props) => (
   <h1
    {...props}
    className='title-secondary py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h3: (props) => (
   <h1
    {...props}
    className='title-tertiary py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h4: (props) => (
   <h1
    {...props}
    className='text-lg py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h5: (props) => (
   <h1
    {...props}
    className='text-md py-2 underline underline-offset-2 font-semibold leading-tight'
   />
  ),
  h6: (props) => (
   <h1
    {...props}
    className='text-sm py-2 underline underline-offset-2 font-semibold leading-tight'
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
