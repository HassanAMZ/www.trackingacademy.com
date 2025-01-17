"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Proposal } from "@/types/proposal";

interface ShareDialogProps {
  proposal: Proposal | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ShareDialog({ proposal, isOpen, onClose }: ShareDialogProps) {
  const [copied, setCopied] = useState(false);

  if (!proposal) return null;

  const shareUrl = `${window.location.origin}/tools/proposals/${proposal.id}/view?password=${proposal.clientPassword}`;

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share Proposal</DialogTitle>
          <DialogDescription>
            Anyone with this link and password can view the proposal
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Input value={shareUrl} readOnly />
            <Button size="icon" onClick={copyToClipboard}>
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Password:{" "}
            <code className="rounded bg-muted px-1">
              {proposal.clientPassword}
            </code>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
