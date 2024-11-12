import { createAnthropic } from "@ai-sdk/anthropic";

export const anthropic = createAnthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
});
