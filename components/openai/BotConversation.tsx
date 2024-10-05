"use client";

import { useState, useRef, useEffect } from "react";
import { Message, continueConversation } from "@/actions/openai";
import { readStreamableValue } from "ai/rsc";
import Navbar from "@/components/global/navbar";
import BotIntro from "./BotIntro";
import MessageList from "./MessageList";
import InputArea from "./InputArea";
import Container from "../ui/container";
import React from "react";

export const maxDuration = 30;
export interface BotConversationProps {
  model: string;
  systemMessage: string;
  botIntro: string;
}

const BotConversation: React.FC<BotConversationProps> = ({
  model,
  systemMessage,
  botIntro,
}) => {
  const [conversation, setConversation] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [isStreaming, setIsStreaming] = useState<boolean>(false);
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
      const { messages, newMessage } = await continueConversation(
        [...conversation, userMessage],
        model,
        systemMessage
      );

      let textContent = "";
      for await (const delta of readStreamableValue(newMessage)) {
        textContent = `${textContent}${delta}`;
        setConversation((prev) => [
          ...messages,
          { role: "assistant", content: textContent },
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

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-between h-screen pb-4">
        <Navbar />
        <Container className="flex-1 w-full overflow-y-auto p-4 space-y-4">
          {conversation.length === 0 && <BotIntro content={botIntro} />}
          <MessageList
            conversation={conversation}
            messagesEndRef={messagesEndRef}
          />
        </Container>
        <InputArea
          input={input}
          setInput={setInput}
          isStreaming={isStreaming}
          handleSend={handleSend}
        />
      </div>
    </React.Fragment>
  );
};

export default BotConversation;
