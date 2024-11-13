// Components/YoutubeMetadata.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Text from "../ui/text";
interface MetadataProps {
  metadata: {
    titles: Array<{
      title: string;
      analysis: {
        big: string;
        easy: string;
        new: string;
        safe: string;
      };
    }>;
    description: {
      mainContent: string;
      chapters: Array<{
        timestamp: string;
        title: string;
      }>;
      codeSnippetUrl?: string;
    };
    keywords: {
      primary: string[];
      secondary: string[];
      longTail: string[];
    };
    viewerQuestions: Array<{
      timestamp: string;
      question: string;
    }>;
  };
}

export function YoutubeMetadata({ metadata }: MetadataProps) {
  return (
    <div className="space-y-4">
      <Card className="rounded-t-lg">
        <CardHeader>
          <CardTitle>Title Options</CardTitle>
        </CardHeader>
        <CardContent>
          {metadata.titles.map((title, index) => (
            <div key={index} className="mb-4">
              <Text as="h3" variant="headingLg" className="font-bold mb-2">
                {index + 1}. {title.title}
              </Text>
              <Text as="ul" className="list-disc pl-6 space-y-1">
                <Text as="li">Big: {title.analysis.big}</Text>
                <Text as="li">Easy: {title.analysis.easy}</Text>
                <Text as="li">New: {title.analysis.new}</Text>
                <Text as="li">Safe: {title.analysis.safe}</Text>
              </Text>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card className="rounded-t-lg">
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="whitespace-pre-wrap mb-4">
            {metadata.description.mainContent}
          </div>
          {metadata.description.codeSnippetUrl && (
            <div className="mb-4">
              <strong>Code Snippet:</strong>{" "}
              {metadata.description.codeSnippetUrl}
            </div>
          )}
          <div>
            <Text as="h3" variant="headingLg">
              Chapters
            </Text>
            {metadata.description.chapters.map((chapter, index) => (
              <div key={index}>
                {chapter.timestamp} - {chapter.title}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-t-lg">
        <CardHeader>
          <CardTitle>Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <Text as="h3" variant="headingLg">
                Primary
              </Text>
              <Text as="p">{metadata.keywords.primary.join(", ")}</Text>
            </div>
            <div>
              <Text as="h3" variant="headingLg">
                Secondary
              </Text>
              <Text as="p">{metadata.keywords.secondary.join(", ")}</Text>
            </div>
            <div>
              <Text as="h3" variant="headingLg">
                Long-tail
              </Text>
              <Text as="p">{metadata.keywords.longTail.join(", ")}</Text>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="rounded-t-lg">
        <CardHeader>
          <CardTitle>Viewer Questions</CardTitle>
        </CardHeader>
        <CardContent>
          {metadata.viewerQuestions.map((question, index) => (
            <div key={index} className="mb-2">
              {question.timestamp} - {question.question}
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
