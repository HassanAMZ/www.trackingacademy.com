"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Proposal, ProposalBlock } from "@/types/proposal";

interface ProposalPreviewProps {
  proposal: Proposal;
}

export function ProposalPreview({ proposal }: ProposalPreviewProps) {
  return (
    <Card className="mx-auto max-w-4xl">
      <CardHeader>
        <CardTitle className="text-3xl">{proposal.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {proposal.content.map((block) => (
          <PreviewBlock key={block.id} block={block} />
        ))}
      </CardContent>
    </Card>
  );
}

function PreviewBlock({ block }: { block: ProposalBlock }) {
  switch (block.type) {
    case "heading":
      return <h2 className="text-2xl font-bold">{block.content}</h2>;
    case "text":
      return <p className="text-gray-700">{block.content}</p>;
    case "price":
      return (
        <div className="rounded-lg bg-primary/5 p-4">
          <p className="text-lg font-semibold">
            Price: ${parseFloat(block.content).toLocaleString()}
          </p>
        </div>
      );
    default:
      return null;
  }
}
