"use client";

import ChatBot from "@/components/ai/ChatBot";
import AiSystemMessages from "@/data/gpt-system-message";

export default function Page() {
  let systemMessage = AiSystemMessages.AuditReports01;
  return (
    <>
      <ChatBot />
    </>
  );
}
