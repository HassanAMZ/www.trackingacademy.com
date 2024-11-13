// @/app/api/chat/route.ts
import { openai } from "@/lib/openai";
import { streamText, convertToCoreMessages } from "ai";
import { z } from "zod";

export const maxDuration = 30;

const coverLetterSchema = z.object({
  greeting: z.object({
    clientName: z.string().optional(),
    loomVideoUrl: z.string().optional(),
  }),
  mainContent: z.object({
    clientPainPoints: z.array(z.string()),
    proposedSolution: z.string(),
  }),
  authority: z.string(),
  callToAction: z.string(),
  signature: z.string(),
  portfolio: z.object({
    projectName: z.string().optional(),
    projectUrl: z.string().optional(),
  }),
});

const youtubeMetadataSchema = z.object({
  titles: z
    .array(
      z.object({
        title: z.string(),
        analysis: z.object({
          big: z.string(),
          easy: z.string(),
          new: z.string(),
          safe: z.string(),
        }),
      }),
    )
    .length(3),
  description: z.object({
    mainContent: z.string(),
    chapters: z.array(
      z.object({
        timestamp: z.string(),
        title: z.string(),
      }),
    ),
    codeSnippetUrl: z.string().optional(),
  }),
  keywords: z.object({
    primary: z.array(z.string()).length(5),
    secondary: z.array(z.string()).length(7),
    longTail: z.array(z.string()).length(10),
  }),
  viewerQuestions: z.array(
    z.object({
      timestamp: z.string(),
      question: z.string(),
    }),
  ),
});

const auditReportSchema = z.object({
  overview: z.object({
    projectGoals: z.string(),
    summary: z.string(),
    criticalIssues: z.array(z.string()),
  }),
  todoList: z.array(z.string()),
  detailedReport: z.array(
    z.object({
      issue: z.string(),
      evidence: z.string(),
      consequences: z.string(),
      solution: z.string(),
    }),
  ),
  summary: z.object({
    keyIssues: z.array(z.string()),
    nextSteps: z.array(z.string()),
  }),
});

export async function POST(req: Request) {
  const { messages, systemMessage, model } = await req.json();

  const result = await streamText({
    model: openai(model),
    system: systemMessage,
    messages: convertToCoreMessages(messages),
    tools: {
      generateYouTubeMetadata: {
        description: "Generate optimized metadata for YouTube videos",
        parameters: youtubeMetadataSchema,
        execute: async function (metadata) {
          return metadata;
        },
      },
      generateAuditReport: {
        description: "Generate optimized Aduit Report for Tracking",
        parameters: auditReportSchema,
        execute: async function (metadata) {
          return metadata;
        },
      },
      generateUpworkCoverLetter: {
        description: "Generate optimized Cover Letter for Upwork",
        parameters: coverLetterSchema,
        execute: async function (metadata) {
          return metadata;
        },
      },
    },
  });

  return result.toDataStreamResponse();
}
