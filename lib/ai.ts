import { createOpenAI } from '@ai-sdk/openai';
import { createAnthropic } from '@ai-sdk/anthropic';

export const openai = createOpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
});

export const anthropic = createAnthropic({
  apiKey: process.env.NEXT_PUBLIC_ANTHROPIC_API_KEY,
});
