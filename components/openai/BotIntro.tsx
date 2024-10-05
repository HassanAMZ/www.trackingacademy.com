import React from "react";
import ReactMarkdown from "react-markdown";
import Text from "../ui/text";

interface BotIntroProps {
  content: string;
}

const BotIntro: React.FC<BotIntroProps> = ({ content }) => {
  return (
    <div className="bg-muted text-muted-foreground p-4 rounded-lg">
      <ReactMarkdown
        components={{
          h1: ({ children }) => (
            <Text as="h1" className="py-2 text-semibold" variant="headingXl">
              {children}
            </Text>
          ),
          h2: ({ children }) => (
            <Text as="h2" className="py-2 text-semibold" variant="headingXl">
              {children}
            </Text>
          ),
          h3: ({ children }) => (
            <Text as="h3" className="py-2 text-semibold" variant="headingXl">
              {children}
            </Text>
          ),
          p: ({ children }) => (
            <Text as="p" variant="bodyMd">
              {children}
            </Text>
          ),
          ul: ({ children }) => (
            <Text as="ul" variant="bodyMd">
              {children}
            </Text>
          ),
          ol: ({ children }) => (
            <Text as="ol" variant="bodyMd">
              {children}
            </Text>
          ),
          li: ({ children }) => (
            <Text as="li" variant="bodyMd">
              {children}
            </Text>
          ),
          strong: ({ children }) => (
            <Text as="strong" fontWeight="bold">
              {children}
            </Text>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
};

export default BotIntro;
