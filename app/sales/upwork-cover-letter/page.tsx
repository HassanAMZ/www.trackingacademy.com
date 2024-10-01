"use client";

import { useState, useRef, useEffect } from "react";
import { Message, continueConversation } from "@/actions/open-ai";
import { readStreamableValue } from "ai/rsc";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/components/ui/container";
import { Copy, CheckCircle2, ArrowUp, CircleArrowUp } from "lucide-react";
import Navbar from "@/components/global/navbar";

export const maxDuration = 30;

export default function Home() {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [conversation]);

  const handleSend = async () => {
    if (!input.trim()) return;

    setIsStreaming(true);
    const userMessage: Message = { role: "user", content: input };
    setConversation((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const { messages, newMessage } = await continueConversation([
        ...conversation,
        userMessage,
      ]);

      let textContent = "";

      for await (const delta of readStreamableValue(newMessage)) {
        textContent = `${textContent}${delta}`;
        setConversation((prev) => [
          ...messages,
          { role: "assistant", content: textContent.replace(/\n/g, "<br/>") },
        ]);
      }
    } catch (error) {
      console.error("Error in conversation:", error);
      setConversation((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, an error occurred. Please try again.",
        },
      ]);
    } finally {
      setIsStreaming(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/<br\/>/g, "\n"));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-between h-screen pb-4">
      <Navbar />
      <Container className="flex-1 w-full overflow-y-auto p-4 space-y-4">
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
              <span dangerouslySetInnerHTML={{ __html: message.content }} />
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
      <Container className="">
        <div className="flex flex-col md:flex-row gap-2 md:gap-0 w-full h-full border rounded-lg">
          <Textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Write details about the Job.. (Shift + Enter for new line)"
            className="flex-grow resize-none mr-2 border-none"
          />
          <Button
            onClick={handleSend}
            className="whitespace-nowrap h-full"
            disabled={isStreaming || !input.trim()}
          >
            {isStreaming ? "Thinking..." : <CircleArrowUp />}
          </Button>
        </div>
      </Container>
    </div>
  );
}
