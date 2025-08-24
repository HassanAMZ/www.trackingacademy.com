"use client";

import { Link as LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CustomLink from "../mdx/CustomLink";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number; relativeLevel: number }[]
  >([]);

  useEffect(() => {
    // Only select headings from the blog content, not from headers or other components
    const blogContent = document.querySelector(".blog-content");
    if (!blogContent) return;

    const articleHeadings = Array.from(blogContent.querySelectorAll("h2, h3, h4")).map(
      (heading) => ({
        id: heading.id,
        text: heading.textContent || "",
        level: parseInt(heading.tagName[1]),
      }),
    );

    // Calculate the minimum heading level to use as baseline
    const minLevel = Math.min(...articleHeadings.map((h) => h.level));

    // Adjust levels relative to the minimum heading level
    const adjustedHeadings = articleHeadings.map((heading) => ({
      ...heading,
      relativeLevel: heading.level - minLevel,
    }));

    setHeadings(adjustedHeadings);
  }, []);

  if (headings.length === 0) return null;

  return (
    <div className="w-full rounded-lg border bg-card/50 p-4">
      <div className="mb-3 flex items-center gap-2 border-b pb-2">
        <LinkIcon className="h-4 w-4 text-muted-foreground" />
        <h3 className="text-sm font-semibold text-foreground">Table of Contents</h3>
      </div>

      <nav className="space-y-1">
        {headings.map((heading, index) => (
          <div
            key={heading.id + index}
            className="group"
            style={{
              marginLeft: `${heading.relativeLevel * 16}px`,
              borderLeft: heading.relativeLevel > 0 ? "2px solid hsl(var(--border))" : "none",
              paddingLeft: heading.relativeLevel > 0 ? "8px" : "0",
            }}
          >
            <CustomLink
              href={`#${heading.id}`}
              className="block rounded px-2 py-1 text-sm text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground hover:shadow-sm"
            >
              <span className="line-clamp-2 leading-relaxed">{heading.text}</span>
            </CustomLink>
          </div>
        ))}
      </nav>
    </div>
  );
}
