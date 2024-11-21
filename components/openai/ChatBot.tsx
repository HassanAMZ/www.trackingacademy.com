"use client";

import { useChat } from "ai/react";
import { useRef, useState } from "react";
import Image from "next/image";
import Container from "@/components/ui/container";
import Markdown from "react-markdown";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Text from "@/components/ui/text";
import CustomLink from "../mdx/CustomLink";
import OpenAiModels from "@/data/gpt-models";
import OpenAiSystemMessages from "@/data/gpt-system-message";
import Pre from "../mdx/Pre";
import {
  Camera,
  Paperclip,
  Send,
  Settings2Icon,
  SettingsIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const CustomReactMarkdown = ({ children }: { children: string }) => (
  <Markdown
    components={{
      pre: ({ children }) => <Pre>{children}</Pre>,
      h1: ({ children }) => (
        <Text as="h1" fontWeight="bold" variant="headingLg">
          {children}
        </Text>
      ),
      h2: ({ children }) => (
        <Text as="h2" fontWeight="bold" variant="headingLg">
          {children}
        </Text>
      ),
      h3: ({ children }) => (
        <Text as="h3" fontWeight="bold" variant="headingLg">
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

export default function ChatBot() {
  const [model, setModel] = useState(OpenAiModels[4]);
  const [systemMessage, setSystemMessage] = useState(
    OpenAiSystemMessages.DefaultModel01
  );
  const [systemMessageKey, setSystemMessageKey] = useState(
    Object.keys(OpenAiSystemMessages)[2]
  );
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: {
      systemMessage,
      model,
    },
  });

  const [files, setFiles] = useState<FileList | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);

  const handleFileAttachment = (
    event: React.ChangeEvent<HTMLInputElement>,
    type: "file" | "image"
  ) => {
    if (event.target.files) {
      if (type === "image") {
        // Filter only image files
        const imageFiles = Array.from(event.target.files).filter((file) =>
          file.type.startsWith("image/")
        );
        if (imageFiles.length) {
          setFiles(event.target.files);
        }
      } else {
        setFiles(event.target.files);
      }
    }
  };

  const clearAttachments = () => {
    setFiles(undefined);
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (imageInputRef.current) imageInputRef.current.value = "";
  };

  return (
    <Container className="flex flex-col h-screen max-h-screen py-4">
      <div
        className="flex-1 overflow-y-auto py-2 space-y-4 flex-wrap"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <style jsx>{`
          .flex-1::-webkit-scrollbar {
            display: none;
          }
        `}</style>
        <Card className="shadow-sm rounded-t-lg bg-shadcn-color1">
          <CardContent className="p-4">
            <CustomReactMarkdown>{model}</CustomReactMarkdown>
            <CustomReactMarkdown>{systemMessageKey}</CustomReactMarkdown>
          </CardContent>
        </Card>
        {messages.map((m) => (
          <div
            key={m.id}
            className={`${m.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <Card
              className={`rounded-lg ${m.role === "user" ? "bg-muted" : ""}`}
            >
              <CardContent className="p-4">
                <CustomReactMarkdown>{m.content}</CustomReactMarkdown>
                <div className="space-y-2">
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
          </div>
        ))}
      </div>

      {/* Input Container */}
      <Card className="border rounded p-4">
        <CardContent className="p-0">
          <form
            className="flex items-end gap-2"
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(e, {
                experimental_attachments: files,
              });
              clearAttachments();
            }}
          >
            {/* Input Field */}
            <div className="flex-1 flex items-end">
              <Input
                className="flex-1 min-h-[40px] resize-none"
                value={input}
                placeholder="Type a message..."
                onChange={handleInputChange}
              />
            </div>

            {/* Improved Model Selector using DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <SettingsIcon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                {OpenAiModels.map((modelOption) => (
                  <DropdownMenuItem
                    key={modelOption}
                    onClick={() => setModel(modelOption)}
                    className={`${model === modelOption ? "bg-secondary" : ""}`}
                  >
                    {modelOption}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Improved System Message Selector using DropdownMenu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon" className="h-10 w-10">
                  <Settings2Icon className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-[200px]">
                {(
                  Object.keys(OpenAiSystemMessages) as Array<
                    keyof typeof OpenAiSystemMessages
                  >
                ).map((key) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => {
                      setSystemMessageKey(key);
                      setSystemMessage(OpenAiSystemMessages[key]);
                    }}
                  >
                    {key.replace(/([A-Z])|(\d+)/g, (match, p1, p2) =>
                      p1 ? ` ${p1}` : ` ${p2}`
                    )}{" "}
                    {/* Display the key with spaces */}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Hidden File Inputs */}
            <Input
              type="file"
              onChange={(e) => handleFileAttachment(e, "file")}
              multiple
              ref={fileInputRef}
              className="hidden"
              id="file-upload"
            />
            <Input
              type="file"
              onChange={(e) => handleFileAttachment(e, "image")}
              accept="image/*"
              multiple
              ref={imageInputRef}
              className="hidden"
              id="image-upload"
            />

            {/* Attachment Buttons */}
            <div className="flex gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => fileInputRef.current?.click()}
                className="h-10 w-10"
              >
                <Paperclip className="h-5 w-5" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => imageInputRef.current?.click()}
                className="h-10 w-10"
              >
                <Camera className="h-5 w-5" />
              </Button>
            </div>

            {/* Send Button */}
            <Button type="submit" size="icon" className="h-10 w-10">
              <Send className="h-5 w-5" />
            </Button>
          </form>

          {/* File Attachment Preview */}
          {files && files.length > 0 && (
            <div className="mt-2 ">
              {Array.from(files).map((file, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Paperclip className="h-4 w-4" />
                  {file.name}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </Container>
  );
}
