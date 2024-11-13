import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Text from "@/components/ui/text";
import CustomLink from "@/components/mdx/CustomLink";
import { z } from "zod";

// Cover Letter Interfaces
interface CoverLetterGreeting {
  clientName?: string;
  loomVideoUrl?: string;
}

interface CoverLetterMainContent {
  clientPainPoints: string[];
  proposedSolution: string;
}

interface CoverLetterPortfolio {
  projectName?: string;
  projectUrl?: string;
}

interface CoverLetter {
  greeting: CoverLetterGreeting;
  mainContent: CoverLetterMainContent;
  authority: string;
  callToAction: string;
  signature: string;
  portfolio: CoverLetterPortfolio;
}

interface UpworkCoverLetterProps {
  letter: CoverLetter;
}

export function UpworkCoverLetter({ letter }: UpworkCoverLetterProps) {
  // Remove query parameters from loomVideoUrl if present
  const cleanedLoomVideoUrl = letter.greeting.loomVideoUrl
    ? letter.greeting.loomVideoUrl.split("?")[0]
    : null;

  return (
    <Card className="rounded-t-lg">
      <CardHeader>
        <CardTitle>Cover Letter Preview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Text variant="bodyLg">
            Hi
            {letter.greeting.clientName
              ? `, ${letter.greeting.clientName}`
              : ""}
            .
          </Text>
        </div>

        {cleanedLoomVideoUrl && (
          <div>
            <Text>
              I have recorded a short Loom video for you:{" "}
              <CustomLink href={cleanedLoomVideoUrl}>
                {cleanedLoomVideoUrl}
              </CustomLink>
            </Text>
          </div>
        )}

        <div className="space-y-2">
          {/* Dynamic Content for Client Pain Points */}
          <Text variant="bodyMd">
            It seems you're facing challenges related to:{" "}
            {letter.mainContent.clientPainPoints.length > 0 ? (
              letter.mainContent.clientPainPoints.map((point, index) => (
                <span key={index}>
                  {point}
                  {index < letter.mainContent.clientPainPoints.length - 1 &&
                    ", "}
                </span>
              ))
            ) : (
              <span>unspecified issues</span>
            )}
            . These are crucial aspects that can significantly affect your
            business outcomes.
          </Text>

          {/* Dynamic Content for Proposed Solution */}
          <Text variant="bodyMd">
            In response, I propose the following solution:{" "}
            {letter.mainContent.proposedSolution}
          </Text>

          {/* Dynamic Authority Section */}
          <Text variant="bodyMd">{letter.authority}</Text>
        </div>

        <div>
          <Text variant="bodyMd">{letter.callToAction}</Text>
        </div>

        <div>
          <Text variant="bodyLg" className="font-medium">
            {letter.signature}
          </Text>
        </div>

        {(letter.portfolio.projectName || letter.portfolio.projectUrl) && (
          <div>
            <Text variant="bodyMd">
              P.S.
              {letter.greeting.clientName
                ? ` ${letter.greeting.clientName},`
                : ""}{" "}
              Thank you for reviewing this. For more context, check out the
              {letter.portfolio.projectName} project, which addresses similar
              challenges. The details are available here:{" "}
              {letter.portfolio.projectUrl && (
                <CustomLink href={letter.portfolio.projectUrl}>
                  {letter.portfolio.projectUrl}
                </CustomLink>
              )}
              .
            </Text>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
