"use client";

import OpenAiSystemMessages from "@/data/gpt-system-message";
import ChatBot from "@/components/openai/ChatBot";

export default function Page() {
  let model = "gpt-4o";
  let systemMessage = OpenAiSystemMessages.AuditReports01;
  return (
    <>
      <ChatBot systemMessage={systemMessage} />
    </>
  );
}
