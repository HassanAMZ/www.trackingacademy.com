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

    // Enhanced paragraph styling
    p: (props) => (
      <p
        className={clsx("mb-3 text-base leading-7 text-foreground/80", props.className)}
        {...props}
      >
        {props.children}
      </p>
    ),

    // Enhanced heading hierarchy
    h1: (props) => (
      <h1
        className={clsx(
          "mt-12 mb-6 text-4xl leading-tight font-bold text-foreground first:mt-0",
          "border-b border-border/50 pb-4",
          props.className,
        )}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h1>
    ),

    h2: (props) => (
      <h2
        className={clsx(
          "mt-10 mb-4 text-3xl leading-tight font-semibold text-foreground",
          "border-b border-border/30 pb-2",
          props.className,
        )}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h2>
    ),

    h3: (props) => (
      <h3
        className={clsx(
          "mt-8 mb-4 text-2xl leading-snug font-semibold text-foreground",
          props.className,
        )}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h3>
    ),

    h4: (props) => (
      <h4
        className={clsx(
          "mt-6 mb-3 text-xl leading-snug font-medium text-foreground",
          props.className,
        )}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h4>
    ),

    h5: (props) => (
      <h5
        className={clsx(
          "mt-5 mb-3 text-lg leading-snug font-medium text-foreground",
          props.className,
        )}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h5>
    ),

    h6: (props) => (
      <h6
        className={clsx(
          "mt-4 mb-2 text-base leading-snug font-medium text-foreground",
          props.className,
        )}
        {...props}
        id={createId(props.children as string)}
      >
        {props.children}
      </h6>
    ),

    // Enhanced list styling
    li: (props) => (
      <li className={clsx("mb-2 leading-7 text-foreground/80", props.className)} {...props}>
        {props.children}
      </li>
    ),

    ol: (props) => (
      <ol
        className={clsx(
          "my-2 ml-6 list-decimal space-y-2",
          "[&>li]:mt-0 [&>li]:mb-0",
          props.className,
        )}
        {...props}
      >
        {props.children}
      </ol>
    ),

    ul: (props) => (
      <ul
        className={clsx(
          "my-2 ml-6 list-disc space-y-2",
          "[&>li]:mt-0 [&>li]:mb-0",
          props.className,
        )}
        {...props}
      >
        {props.children}
      </ul>
    ),

    // Enhanced blockquote styling
    blockquote: (props) => (
      <blockquote
        className={clsx(
          "my-6 border-l-4 border-primary/30 pl-6 text-foreground/70 italic",
          "rounded-r-md bg-muted/30 py-2",
          props.className,
        )}
        {...props}
      >
        {props.children}
      </blockquote>
    ),

    // Enhanced code styling
    code: (props) => (
      <code
        className={clsx(
          "rounded bg-muted px-1.5 py-0.5 font-mono text-sm",
          "border border-border/50 text-foreground/90",
          props.className,
        )}
        {...props}
      >
        {props.children}
      </code>
    ),

    // Enhanced image styling
    img: (props) => (
      <div className="my-8 text-center">
        <Image
          src={props.src}
          width={1920}
          height={1080}
          className="rounded-lg border border-border/50 shadow-lg"
          {...props}
        />
        {props.alt && <p className="mt-3 text-sm text-muted-foreground italic">{props.alt}</p>}
      </div>
    ),

    // Enhanced table styling
    table: (props) => (
      <div className="my-8 overflow-x-auto">
        <table
          className={clsx(
            "w-full border-collapse border border-border",
            "text-sm",
            props.className,
          )}
          {...props}
        >
          {props.children}
        </table>
      </div>
    ),

    th: (props) => (
      <th
        className={clsx(
          "border border-border bg-muted px-4 py-3 text-left font-semibold",
          "text-foreground",
          props.className,
        )}
        {...props}
      >
        {props.children}
      </th>
    ),

    td: (props) => (
      <td
        className={clsx("border border-border px-4 py-3 text-foreground/80", props.className)}
        {...props}
      >
        {props.children}
      </td>
    ),

    // Enhanced horizontal rule
    hr: (props) => (
      <hr className={clsx("my-8 border-0 border-t border-border/50", props.className)} {...props} />
    ),

    ...components,
  };
}
