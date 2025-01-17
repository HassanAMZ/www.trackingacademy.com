// hooks/useProposalEditor.ts
import { useState, useCallback } from "react";
import { DropResult } from "@hello-pangea/dnd";
import { Proposal, ProposalBlock } from "@/types/proposal";

export const useProposalEditor = (initialProposal: Proposal) => {
  const [proposal, setProposal] = useState<Proposal>(initialProposal);
  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const updateProposal = useCallback((updates: Partial<Proposal>) => {
    setProposal((prev) => ({ ...prev, ...updates }));
    setHasChanges(true);
  }, []);

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const items = Array.from(proposal.content);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);

      const updatedItems = items.map((item, index) => ({
        ...item,
        order: index,
      }));

      updateProposal({ content: updatedItems });
    },
    [proposal.content, updateProposal],
  );

  const addBlock = useCallback(
    (type: ProposalBlock["type"]) => {
      const newBlock: ProposalBlock = {
        id: crypto.randomUUID(),
        type,
        content: "",
        order: proposal.content.length,
        columns: type === "columns" ? 2 : undefined,
        columnContent:
          type === "columns" ? [{ content: "" }, { content: "" }] : undefined,
        imageUrl: type === "image" ? "/api/placeholder/800/400" : undefined,
        backgroundColor: type === "container" ? "#f8f9fa" : undefined,
        padding: type === "container" ? "p-4" : undefined,
        alignment: "left",
        fontSize: "text-base",
        textColor: "#000000",
      };

      updateProposal({
        content: [...proposal.content, newBlock],
      });
    },
    [proposal.content, updateProposal],
  );

  return {
    proposal,
    hasChanges,
    isSaving,
    updateProposal,
    handleDragEnd,
    addBlock,
    setIsSaving,
  };
};
