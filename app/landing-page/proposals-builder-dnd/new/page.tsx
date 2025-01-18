"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { proposalsService } from "@/lib/firebase/proposals";
import { toast } from "@/components/ui/hooks/use-toast";

export default function NewProposalPage() {
  const { user } = useAuth();
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    setLoading(true);
    try {
      const proposalId = await proposalsService.createProposal(user.uid, {
        title,
        content: [],
        description: "",
        price: 0,
      });
      toast({
        title: "Success",
        description: "Proposal created successfully",
      });
      router.push(`${proposalId}`);
    } catch (error) {
      console.error("Error creating proposal:", error);
      toast({
        title: "Error",
        description: "Failed to create proposal",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-muted-foreground">
          Please sign in to create proposals.
        </p>
      </div>
    );
  }

  return (
    <Card className="mx-auto max-w-md">
      <CardHeader>
        <CardTitle>Create New Proposal</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleCreate} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Proposal Title
            </label>
            <Input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter proposal title"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Creating..." : "Create Proposal"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
