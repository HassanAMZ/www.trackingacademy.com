"use client";

import OpenAiModels from "@/data/gpt-models";
import { useChat } from "ai/react";
import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Markdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/global/navbar";
import Text from "@/components/ui/text";
import CustomLink from "../mdx/CustomLink";
interface ChatBotProps {
  model: string;
  systemMessage: string;
}

export default function ChatBot({ model, systemMessage }: ChatBotProps) {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: {
      systemMessage,
      model,
    },
  });

  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const ReactMarkdown = ({ children }: { children: string }) => (
    <Markdown
      components={{
        h1: ({ children }) => (
          <Text as="h1" fontWeight="bold" variant="headingXl">
            {children}
          </Text>
        ),
        h2: ({ children }) => (
          <Text as="h2" fontWeight="bold" variant="headingXl">
            {children}
          </Text>
        ),
        h3: ({ children }) => (
          <Text as="h3" fontWeight="bold" variant="headingXl">
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
          <Text as="strong" variant="bodyMd" fontWeight="semibold">
            {children}
          </Text>
        ),
        a: ({ children, href }) => (
          <CustomLink variant="bodyMd" fontWeight="semibold" href={href}>
            {children}
          </CustomLink>
        ),
      }}
    >
      {children}
    </Markdown>
  );

  return (
    <>
      <Container className="flex flex-col gap-2">
        <Card className="p-4 rounded-t-lg border shadow-xl">
          <form
            className="space-y-2"
            onSubmit={(event) => {
              handleSubmit(event, {
                experimental_attachments: files,
              });

              setFiles(undefined);

              if (fileInputRef.current) {
                fileInputRef.current.value = "";
              }
            }}
          >
            <Input
              type="file"
              className="block w-full"
              onChange={(event) => {
                if (event.target.files) {
                  setFiles(event.target.files);
                }
              }}
              multiple
              ref={fileInputRef}
            />
            <Textarea
              className="w-full p-2 border rounded"
              value={input}
              placeholder="Paste the List of Issues here..."
              onChange={handleInputChange}
            />
            <Button type="submit" className="w-full h-full">
              Send
            </Button>
          </form>
        </Card>
        <div className="flex-grow space-y-4">
          {messages.length === 0 ? (
            <Card className="py-4 rounded-t-lg">
              <CardContent>
                <ReactMarkdown>{systemMessage}</ReactMarkdown>
              </CardContent>
            </Card>
          ) : (
            messages.map((m) => (
              <Card key={m.id} className="py-4 rounded-t-lg">
                <CardContent className="whitespace-pre-wrap">
                  <strong>
                    {m.role === "user" ? "User: " : "TrackingAcademy Bot: "}
                  </strong>
                  <ReactMarkdown>{m.content}</ReactMarkdown>
                  <div className="mt-2 space-y-2">
                    {m?.experimental_attachments
                      ?.filter((attachment) =>
                        attachment?.contentType?.startsWith("image/")
                      )
                      .map((attachment, index) => (
                        <Image
                          key={`${m.id}-${index}`}
                          src={attachment.url}
                          width={500}
                          height={500}
                          alt={attachment.name ?? `attachment-${index}`}
                          className="rounded"
                        />
                      ))}
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </Container>
    </>
  );
}
