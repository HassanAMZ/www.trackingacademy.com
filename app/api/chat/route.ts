import { openai } from "@/lib/openai";
import { streamText, convertToCoreMessages } from "ai";
import OpenAiModels from "@/data/gpt-models";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o"),
    system: OpenAiModels.AuditReports01,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
