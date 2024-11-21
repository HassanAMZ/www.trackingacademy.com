"use client";

import OpenAiModels from "@/data/gpt-system-message";
import Navbar from "@/components/global/navbar";
import ChatBot from "@/components/openai/ChatBot";

export default function Page() {
  let systemMessage = "";
  return (
    <>
      <ChatBot systemMessage={systemMessage} />
    </>
  );
}
