"use client";

import { Link } from "lucide-react";
import { useEffect, useState } from "react";
import CustomLink from "../mdx/CustomLink";
import Text from "../ui/text";

export default function TableOfContents() {
  const [headings, setHeadings] = useState<
    { id: string; text: string; level: number }[]
  >([]);

  useEffect(() => {
    const articleHeadings = Array.from(
      document.querySelectorAll("h2, h3, h4"),
    ).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName[1]),
    }));
    setHeadings(articleHeadings);
  }, []);

  return (
    <nav className="self-start rounded-lg p-3 lg:sticky lg:top-8">
      <Text as="p" variant="headingMd" className="flex items-center pb-5">
        <Link className="mr-2 h-5 w-5" />
        Table of Contents
      </Text>
      <ul className="space-y-2 text-sm">
        {headings.map((heading, index) => (
          <li
            key={heading.id + index}
            style={{ marginLeft: `${(heading.level - 2) * 16}px` }}
          >
            <CustomLink href={`#${heading.id}`}>{heading.text}</CustomLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
