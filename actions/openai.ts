"use server";

import { openai } from "@/lib/openai";
import { streamText } from "ai";
import { createStreamableValue } from "ai/rsc";

export interface Message {
  role: "user" | "assistant";
  content: string;
}

export interface ContinueConversationResponse {
  messages: Message[];
  newMessage: any; // Adjust the type according to the structure of the streamable value
}

// Updated function to accept model and system as props
export async function continueConversation(
  history: Message[],
  model: string,
  system: string,
): Promise<ContinueConversationResponse> {
  const stream = createStreamableValue();

  (async () => {
    const { textStream } = await streamText({
      model: openai(model),
      system: system,
      messages: history,
    });

    for await (const text of textStream) {
      stream.update(text);
    }

    stream.done();
  })();

  return {
    messages: history,
    newMessage: stream.value,
  };
}
