"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "ai/react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Send, Settings, Bot } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import Container from "../ui/container";
import { AnthropicModels, OpenAiModels } from "@/data/gpt-models";

export default function ChatBot({ systemMessage }: { systemMessage: string }) {
  const [provider, setProvider] = useState<"anthropic" | "openai">("anthropic");
  const [model, setModel] = useState(AnthropicModels[0]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit } = useChat({
    body: { model, systemMessage, provider },
  });

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!hasInteracted) setHasInteracted(true);
    handleSubmit(e);
  };

  const handleProviderChange = (value: "anthropic" | "openai") => {
    setProvider(value);
    setModel(value === "anthropic" ? AnthropicModels[0] : OpenAiModels[0]);
  };

  const ModelSelector = () => (
    <div className="flex ">
      <form onSubmit={onSubmit} className="flex space-x-2 w-full">
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="flex-grow resize-none"
        />
        <div className="flex gap-1 flex-col">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Settings className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0">
              <div className="flex flex-col">
                <Button
                  variant={provider === "anthropic" ? "secondary" : "ghost"}
                  className="w-full justify-start rounded-none first:rounded-t-md"
                  onClick={() => handleProviderChange("anthropic")}
                >
                  Anthropic
                </Button>
                <Button
                  variant={provider === "openai" ? "secondary" : "ghost"}
                  className="w-full justify-start rounded-none last:rounded-b-md"
                  onClick={() => handleProviderChange("openai")}
                >
                  OpenAI
                </Button>
              </div>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">
                <Bot className="h-4 w-4" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-0">
              <div className="flex flex-col">
                {(provider === "anthropic"
                  ? AnthropicModels
                  : OpenAiModels
                ).map((m) => (
                  <Button
                    key={m}
                    variant={model === m ? "secondary" : "ghost"}
                    className="w-full justify-start rounded-none first:rounded-t-md last:rounded-b-md"
                    onClick={() => setModel(m)}
                  >
                    {m}
                  </Button>
                ))}
              </div>
            </PopoverContent>
          </Popover>
        </div>
        <Button type="submit" className="h-auto">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </div>
  );

  return (
    <Container
      className={`flex flex-col h-screen ${!hasInteracted ? "justify-center" : ""}`}
    >
      {!hasInteracted && messages.length === 0 ? (
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Welcome to AI Chat</CardTitle>
            <CardDescription>
              Start a conversation with our AI assistant
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <ModelSelector />
          </CardContent>
        </Card>
      ) : (
        <>
          <div className="flex-grow overflow-y-auto py-2 space-y-2">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <Card
                  className={`max-w-[80%] ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  <CardContent className="p-3">
                    <ReactMarkdown
                      className="prose dark:prose-invert max-w-none"
                      components={{
                        code: ({
                          node,
                          inline,
                          className,
                          children,
                          ...props
                        }) => {
                          if (inline) {
                            return (
                              <code
                                className="bg-muted px-1 py-0.5 rounded"
                                {...props}
                              >
                                {children}
                              </code>
                            );
                          }
                          return (
                            <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                              <code {...props}>{children}</code>
                            </pre>
                          );
                        },
                      }}
                    >
                      {message.content}
                    </ReactMarkdown>
                  </CardContent>
                </Card>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className="py-2">
            <ModelSelector />
          </div>
        </>
      )}
    </Container>
  );
}
