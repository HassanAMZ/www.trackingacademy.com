import { openai } from "@/lib/openai";
import { streamText, convertToCoreMessages } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, systemMessage, model } = await req.json();

  const result = await streamText({
    model: openai(model),
    system: systemMessage,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
