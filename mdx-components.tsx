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
  CustomLink,
  SopDetails,
  pre: AuthPre,
  a: CustomLink,
  p: (props) => (
   <p
    {...props}
    className='py-2 paragraph-primary leading-loose tracking-wide'
   />
  ),
  h1: (props) => <h1 {...props} className='title-primary py-2 font-semibold' />,
  h2: (props) => (
   <h1 {...props} className='title-secondary py-2 font-semibold' />
  ),
  h3: (props) => (
   <h1 {...props} className='title-tertiary py-2 font-semibold' />
  ),
  h4: (props) => (
   <h1 {...props} className='title-tertiary py-2 font-semibold' />
  ),
  h5: (props) => (
   <h1 {...props} className='title-tertiary py-2 font-semibold' />
  ),
  h6: (props) => (
   <h1 {...props} className='title-tertiary py-2 font-semibold' />
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
