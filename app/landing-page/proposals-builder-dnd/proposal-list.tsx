"use client";

import { useEffect, useState } from "react";
import { Link } from "next-view-transitions";
import { format } from "date-fns";
import { Eye, PlusCircle, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useAuth } from "@/context/AuthContext";
import { proposalsService } from "@/lib/firebase/proposals";
import { ShareDialog } from "./share-dialog";
import { Proposal } from "@/types/proposal";
import { toast } from "@/components/ui/hooks/use-toast";
import FirebaseAuth from "@/components/global/firebase-auth";

export function ProposalList() {
  const { user } = useAuth();
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(
    null,
  );
  const [shareDialogOpen, setShareDialogOpen] = useState(false);

  useEffect(() => {
    async function loadProposals() {
      if (!user) return;
      try {
        const userProposals = await proposalsService.getUserProposals(user.uid);
        setProposals(userProposals);
      } catch (error) {
        console.error("Error loading proposals:", error);
        toast({
          title: "Error",
          description: "Failed to load proposals",
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    }

    loadProposals();
  }, [user]);

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-muted-foreground">
          Please sign in to view your proposals.
        </p>
        <FirebaseAuth />
      </div>
    );
  }

  if (loading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[200px] w-full" />
        ))}
      </div>
    );
  }

  const formatDate = (date: any) => {
    if (!date) return "No date";
    // Handle Firestore Timestamp
    const timestamp = date?.toDate?.() || date;
    return format(new Date(timestamp), "PPP");
  };

  return (
    <>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Your Proposals</h1>
        <Link href="proposals/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            New Proposal
          </Button>
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {proposals.map((proposal) => (
          <Card key={proposal.id}>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="truncate">{proposal.title}</span>
                <Badge
                  variant={
                    proposal.status === "draft" ? "secondary" : "default"
                  }
                >
                  {proposal.status}
                </Badge>
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Created {formatDate(proposal.createdAt)}
              </p>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Link href={`${proposal.id}`}>
                  <Button variant="secondary" size="sm">
                    Edit
                  </Button>
                </Link>
                <Link href={`proposals/${proposal.id}/preview`}>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Preview
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    setSelectedProposal(proposal);
                    setShareDialogOpen(true);
                  }}
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        {!loading && proposals.length === 0 && (
          <div className="col-span-full py-12 text-center">
            <p className="text-muted-foreground">
              No proposals yet. Create your first one!
            </p>
          </div>
        )}
      </div>

      {selectedProposal && (
        <ShareDialog
          proposal={selectedProposal}
          isOpen={shareDialogOpen}
          onClose={() => setShareDialogOpen(false)}
        />
      )}
    </>
  );
}
