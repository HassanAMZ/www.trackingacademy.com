import { convertToCoreMessages, streamText } from "ai";
import { anthropic, openai } from "@/lib/ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages, systemMessage, model, provider } = await req.json();

  const result = await streamText({
    model: provider === "anthropic" ? anthropic(model) : openai(model),
    system: systemMessage,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
