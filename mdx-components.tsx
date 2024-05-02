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
import ToolsHeroSection from "./components/tools/ToolsHeroSection";
import AuthenticatedLayout from "./components/layouts/AuthenticatedLayout";

export function useMDXComponents(components: MDXComponents): MDXComponents {
 return {
  GiscusComments,
  YoutubeEmbed,
  DataLayerCode,
  ToolsHeroSection,
  BlogHeader,
  Note,
  AuthPre,
  AuthenticatedLayout,
  CustomLink,
  SopDetails,
  pre: AuthPre,
  a: CustomLink,
  p: (props) => <p {...props} className='py-1' />,
  h1: (props) => {
   const content = props.children as string; // Get the content and trim whitespace
   return (
    <h1
     {...props}
     id={content.replace(/\s+/g, "-").toLowerCase()}
     className='title-tertiary py-2'>
     {content}
    </h1>
   );
  },
  h2: (props) => {
   const content = props.children as string; // Get the content and trim whitespace
   return (
    <h2
     {...props}
     id={content.replace(/\s+/g, "-").toLowerCase()}
     className='title-tertiary py-2'>
     {content}
    </h2>
   );
  },
  h3: (props) => {
   const content = props.children as string; // Get the content and trim whitespace
   return (
    <h3
     {...props}
     id={content.replace(/\s+/g, "-").toLowerCase()}
     className='title-tertiary py-2'>
     {content}
    </h3>
   );
  },
  h4: (props) => {
   const content = props.children as string; // Get the content and trim whitespace
   return (
    <h4
     {...props}
     id={content.replace(/\s+/g, "-").toLowerCase()}
     className='title-tertiary py-2'>
     {content}
    </h4>
   );
  },
  h5: (props) => {
   const content = props.children as string; // Get the content and trim whitespace
   return (
    <h5
     {...props}
     id={content.replace(/\s+/g, "-").toLowerCase()}
     className='title-tertiary py-2'>
     {content}
    </h5>
   );
  },
  h6: (props) => {
   const content = props.children as string; // Get the content and trim whitespace
   return (
    <h6
     {...props}
     id={content.replace(/\s+/g, "-").toLowerCase()}
     className='title-tertiary py-2'>
     {content}
    </h6>
   );
  },
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
