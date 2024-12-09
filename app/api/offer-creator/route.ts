import { openai } from "@/lib/openai";
import { streamText, convertToCoreMessages } from "ai";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai("gpt-4o-mini"),
    system: `Generate a compelling $100M acquisition offer based on the following context: ${prompt}`,
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
