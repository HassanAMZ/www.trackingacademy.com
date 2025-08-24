"use client";

import { Button } from "@/components/ui/button";
import { Check, Copy } from "lucide-react";
import React, { useRef, useState } from "react";

interface PreProps {
  language?: string;
  children: React.ReactNode;
}

export default function Pre({ language, children }: PreProps) {
  const codeRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    if (!codeRef.current?.textContent) return;
    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Process children to extract text content and split into lines
  const getCodeLines = () => {
    if (typeof children === "string") {
      return children.split("\n");
    }
    if (React.isValidElement(children) && children.type === "code") {
      const codeContent = (children.props as any)?.children;
      if (typeof codeContent === "string") {
        return codeContent.split("\n");
      }
    }
    // Fallback: try to get text content from any React element
    const textContent = React.Children.toArray(children)
      .map((child) => {
        if (typeof child === "string") return child;
        if (React.isValidElement(child) && child.props) {
          return (child.props as any)?.children || "";
        }
        return "";
      })
      .join("");
    return textContent.split("\n");
  };

  const codeLines = getCodeLines();

  return (
    <div className="dark my-6">
      <div className="group relative overflow-hidden rounded-lg border bg-muted shadow">
        {/* Header with language and copy button */}
        <div className="flex items-center justify-between border bg-background px-4 py-3">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
              <div className="h-3 w-3 rounded-full bg-green-500"></div>
            </div>
            {language && (
              <span className="ml-3 text-xs font-medium tracking-wide text-muted-foreground uppercase">
                {language}
              </span>
            )}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0 text-primary"
            onClick={handleCopy}
            aria-label={isCopied ? "Copied!" : "Copy code"}
          >
            {isCopied ? <Check className="h-4 w-4 text-green-400" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>

        {/* Code content with line numbers and borders */}
        <div className="overflow-x-auto">
          <pre ref={codeRef} className="font-mono text-sm leading-relaxed text-primary">
            <code className="block w-full">
              {codeLines.map((line, index) => (
                <div
                  key={index}
                  className="flex border-b transition-colors last:border-b-0 hover:bg-muted/20"
                >
                  <div className="w-12 flex-shrink-0 border-r bg-muted px-3 py-1 text-right text-xs text-muted-foreground select-none">
                    {index + 1}
                  </div>
                  <div className="flex-1 px-3 py-1">{line || "\u00A0"}</div>
                </div>
              ))}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
}
