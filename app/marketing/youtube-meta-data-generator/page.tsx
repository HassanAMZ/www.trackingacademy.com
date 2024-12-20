"use client";

import AiSystemMessages from "@/data/gpt-system-message";
import ChatBot from "@/components/ai/ChatBot";

export default function Page() {
  let systemMessage = AiSystemMessages.YoutubeMetaData01;
  return (
    <>
      <ChatBot systemMessage={systemMessage} />
    </>
  );
}
