import React, { useRef, useState } from "react";
import { Check, Copy, Terminal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PreProps {
  language?: string;
  children: React.ReactNode;
  showLineNumbers?: boolean;
  className?: string;
}

const Pre: React.FC<PreProps> = ({
  language,
  children,
  showLineNumbers = false,
  className,
}) => {
  const [copied, setCopied] = useState(false);
  const codeRef = useRef<HTMLPreElement>(null);

  const copyToClipboard = async () => {
    if (!codeRef.current?.textContent) return;

    try {
      await navigator.clipboard.writeText(codeRef.current.textContent);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };

  return (
    <Card className={cn("w-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <Terminal className="h-4 w-4 text-muted-foreground" />
          <Badge variant="secondary" className="text-xs font-medium">
            {language}
          </Badge>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button
                onClick={copyToClipboard}
                className="inline-flex items-center justify-center rounded-md p-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                aria-label={copied ? "Copied!" : "Copy code"}
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </TooltipTrigger>
            <TooltipContent side="left">
              {copied ? "Copied!" : "Copy code"}
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <pre
            ref={codeRef}
            className={cn(
              "overflow-x-auto rounded-lg bg-muted p-4 text-sm font-mono",
              showLineNumbers && "pl-12",
            )}
          >
            {showLineNumbers && (
              <div
                aria-hidden="true"
                className="absolute left-0 top-4 select-none text-xs text-muted-foreground"
              >
                {children
                  ?.toString()
                  .split("\n")
                  .map((_, index) => (
                    <div key={index} className="pr-4 text-right">
                      {index + 1}
                    </div>
                  ))}
              </div>
            )}
            <code className="grid whitespace-pre-wrap">{children}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

export default Pre;
