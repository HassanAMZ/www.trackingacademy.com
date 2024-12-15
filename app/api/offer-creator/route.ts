import { openai } from "@/lib/openai";
import { generateObject, streamObject, streamText } from "ai";
import { z } from "zod";

export async function POST(req: Request) {
  // Parse the request body
  const {
    businessType,
    businessSubType,
    dreamOutcome,
    targetAudience,
    uniqueProcessDescription,
    effortLevel,
    timeCommitment,
    probabilityOfSuccess,
    guaranteeBonus,
  } = await req.json();

  // Define a structured schema for the offer
  const OfferSchema = z.object({
    mainOffer: z.object({
      headline: z
        .string()
        .describe(
          "Attention-grabbing headline that captures the core value proposition",
        ),
      dreamOutcome: z
        .string()
        .describe("Detailed description of the ultimate result"),
      targetAudience: z
        .string()
        .describe("Specific audience most likely to benefit"),
    }),
    uniqueProcess: z.object({
      mechanism: z
        .string()
        .describe("Unique approach or method that sets this offer apart"),
      stepByStepBreakdown: z
        .array(z.string())
        .describe("Detailed steps of the process"),
    }),
    valueProposition: z.object({
      effortRequired: z
        .string()
        .describe("Detailed explanation of effort and commitment"),
      timeCommitment: z.string().describe("Expected time investment"),
      successProbability: z
        .string()
        .describe("Likelihood of achieving the desired outcome"),
    }),
    risksAndGuarantees: z.object({
      potentialChallenges: z
        .array(z.string())
        .describe("Potential obstacles and how they're addressed"),
      guarantee: z
        .string()
        .describe("Specific guarantee or risk reversal mechanism"),
      bonus: z
        .string()
        .describe("Additional bonus to increase perceived value"),
    }),
    callToAction: z.object({
      primaryOffer: z.string().describe("Clear, compelling call to action"),
      urgencyTrigger: z.string().describe("Reason to act now"),
    }),
  });

  const result = streamObject({
    model: openai("gpt-4"),
    system: `You are an expert in creating high-converting offers in the style of Alex Hormozi. 
    Craft an irresistible, structured offer that clearly communicates value, reduces risk, 
    and makes the offer seem like a no-brainer.`,
    prompt: `Create a comprehensive offer for a ${businessType} business:
    - Business Type: ${businessType}
    - Business Sub-Type: ${businessSubType || "N/A"}
    - Target Audience: ${targetAudience}
    - Dream Outcome: ${dreamOutcome}
    - Unique Process: ${uniqueProcessDescription}
    - Effort Level: ${effortLevel}
    - Probability of Success: ${probabilityOfSuccess}
    - Guarantee/Bonus: ${guaranteeBonus}`,
    schema: OfferSchema,
  });

  // Return the generated object as a JSON response
  return (await result).toTextStreamResponse();
}
