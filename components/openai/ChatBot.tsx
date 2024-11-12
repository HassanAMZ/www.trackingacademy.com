"use client";

import { useChat } from "ai/react";
import { ReactElement, useRef, useState } from "react";
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
  BoxSelect,
  Camera,
  Paperclip,
  Send,
  Settings,
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
        <Text as="p" variant="bodySm">
          {children}
        </Text>
      ),
      ul: ({ children }) => (
        <Text as="ul" variant="bodySm">
          {children}
        </Text>
      ),
      ol: ({ children }) => (
        <Text as="ol" variant="bodySm">
          {children}
        </Text>
      ),
      li: ({ children }) => (
        <Text as="li" variant="bodySm">
          {children}
        </Text>
      ),
      strong: ({ children }) => (
        <Text as="strong" variant="bodySm" fontWeight="semibold">
          {children}
        </Text>
      ),
      a: ({ children, href }) => (
        <CustomLink variant="bodySm" fontWeight="semibold" href={href}>
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
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto py-2 space-y-6">
        {messages.length === 0 ? (
          <Card className="shadow-sm rounded-t-lg">
            <CardContent className="p-4">
              <CustomReactMarkdown>{model}</CustomReactMarkdown>
              <CustomReactMarkdown>{systemMessage}</CustomReactMarkdown>
            </CardContent>
          </Card>
        ) : (
          messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={` rounded-lg p-4 ${
                  m.role === "user" ? "" : "shadow-sm"
                }`}
              >
                <CustomReactMarkdown>{m.content}</CustomReactMarkdown>
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
              </div>
            </div>
          ))
        )}
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
                {/* Iterate over OpenAiSystemMessages with the correct key typing */}
                {(
                  Object.keys(OpenAiSystemMessages) as Array<
                    keyof typeof OpenAiSystemMessages
                  >
                ).map((key) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => setSystemMessage(OpenAiSystemMessages[key])} // Set value based on key
                  >
                    {key} {/* Display the key as the label */}
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
