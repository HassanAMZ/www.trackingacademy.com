import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { Message } from "@/actions/openai";
import { Button } from "@/components/ui/button";
import { Copy, CheckCircle2 } from "lucide-react";
import Container from "../ui/container";
import Text from "../ui/text";

interface MessageListProps {
  conversation: Message[];
  messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({
  conversation,
  messagesEndRef,
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <Container>
      {conversation.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.role === "user" ? "justify-end" : "justify-start"
          } group`}
        >
          <div
            className={`px-4 py-2 rounded-lg max-w-[80%] break-words relative ${
              message.role === "user"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground"
            }`}
          >
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <Text
                    as="h1"
                    className="py-2"
                    fontWeight="bold"
                    variant="headingXl"
                  >
                    {children}
                  </Text>
                ),
                h2: ({ children }) => (
                  <Text
                    as="h2"
                    className="py-2"
                    fontWeight="bold"
                    variant="headingXl"
                  >
                    {children}
                  </Text>
                ),
                h3: ({ children }) => (
                  <Text
                    as="h3"
                    className="py-2"
                    fontWeight="bold"
                    variant="headingXl"
                  >
                    {children}
                  </Text>
                ),
                p: ({ children }) => (
                  <Text as="p" className="py-4" variant="bodyMd">
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
                  <Text as="strong" variant="bodyMd" className="!font-bold">
                    {children}
                  </Text>
                ),
              }}
            >
              {message.content}
            </ReactMarkdown>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={() => copyToClipboard(message.content, index)}
            >
              {copiedIndex === index ? (
                <CheckCircle2 size={16} />
              ) : (
                <Copy size={16} />
              )}
            </Button>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </Container>
  );
};

export default MessageList;
