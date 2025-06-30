"use client";

import React, { useRef, useState } from "react";
import { ClipboardCopy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CodeBlockProps {
  language?: string;
  children: React.ReactNode;
}

export default function CodeBlock({ language, children }: CodeBlockProps) {
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

  return (
    <div className="p-2">
      <Card className="w-full">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">{language}</CardTitle>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={handleCopy}
            aria-label={isCopied ? "Copied!" : "Copy code"}
          >
            <ClipboardCopy className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <pre ref={codeRef} className="bg-background overflow-x-auto rounded p-4 text-sm">
            <code className="block w-[250px]">{children}</code>
          </pre>
        </CardContent>
      </Card>
    </div>
  );
}
