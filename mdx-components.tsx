import BlogHeader from "@/components/blog/blog-header";
import DataLayerCode from "@/components/dataLayer/DataLayerCode";
import YoutubeEmbed from "@/components/global/youtube-embed";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import AuthPre from "@/components/mdx/AuthPre";
import CustomLink from "@/components/mdx/CustomLink";
import GiscusComments from "@/components/mdx/GiscusComents";
import Note from "@/components/mdx/Note";
import ToolsHeroSection from "@/components/tools/ToolsHeroSection";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import DataLayerCodeBlock from "./components/mdx/datalayer-code";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  const createId = (content: string) =>
    content
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  return {
    ToolsHeroSection,
    GiscusComments,
    YoutubeEmbed,
    Button,
    DataLayerCode,
    DataLayerCodeBlock,
    BlogHeader,
    Note,
    AuthPre,
    AuthenticatedLayout,
    CustomLink,
    pre: AuthPre,
    a: (props) => <CustomLink {...props} href={props.href || ""} />,
    p: (props) => (
      <p className={clsx("mb-3 leading-relaxed", props.className)} {...props}>
        {props.children}
      </p>
    ),
    h1: (props) => (
      <h1
        className={clsx("mt-6 mb-4 text-4xl font-bold first:mt-0", props.className)}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h1>
    ),
    h2: (props) => (
      <h2
        className={clsx("mt-6 mb-3 text-3xl font-semibold", props.className)}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3
        className={clsx("mt-4 mb-3 text-2xl font-semibold", props.className)}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4
        className={clsx("mt-4 mb-2 text-xl font-medium", props.className)}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h4>
    ),
    h5: (props) => (
      <h5
        className={clsx("mt-3 mb-2 text-lg font-medium", props.className)}
        id={createId(props.children as string)}
      >
        {props.children}
      </h5>
    ),
    h6: (props) => (
      <h6
        className={clsx("mt-3 mb-2 text-base font-medium", props.className)}
        id={createId(props.children as string)}
      >
        {props.children}
      </h6>
    ),
    li: (props) => <li {...props}>{props.children}</li>,
    ol: (props) => (
      <ol className={clsx("my-2 ml-6 list-decimal [&>li]:mt-2", props.className)} {...props}>
        {props.children}
      </ol>
    ),
    ul: (props) => (
      <ul className={clsx("my-2 ml-6 list-disc [&>li]:mt-2", props.className)} {...props}>
        {props.children}
      </ul>
    ),
    img: (props) => (
      <div className="my-4">
        <Image src={props.src} width={1920} height={1080} className="rounded shadow" {...props} />
      </div>
    ),

    ...components,
  };
}
