"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon } from "lucide-react";
import { useEffect, useState } from "react";
import CustomLink from "../mdx/CustomLink";

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
    <Accordion
      type="single"
      collapsible
      className="self-start lg:sticky lg:top-8 w-full max-h-[80vh]"
    >
      <AccordionItem value="toc">
        <Card>
          <CardHeader className="p-4">
            <AccordionTrigger className="flex items-center gap-2 text-base font-semibold text-muted-foreground">
              <LinkIcon className="h-5 w-5" />
              Table of Contents
            </AccordionTrigger>
          </CardHeader>
          <AccordionContent>
            <CardContent className="p-4 pt-0">
              <ul className="space-y-2 text-sm">
                {headings.map((heading, index) => (
                  <li
                    key={heading.id + index}
                    style={{ marginLeft: `${(heading.level - 2) * 16}px` }}
                  >
                    <CustomLink
                      href={`#${heading.id}`}
                      className="line-clamp-1 block rounded-md px-2 py-1 hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {heading.text}
                    </CustomLink>
                  </li>
                ))}
              </ul>
            </CardContent>
          </AccordionContent>
        </Card>
      </AccordionItem>
    </Accordion>
  );
}
