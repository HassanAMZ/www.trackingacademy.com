"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import {
  Plus,
  Trash2,
  Share2,
  Eye,
  Layout,
  Image,
  Type,
  DollarSign,
  Square,
  Save,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useAuth } from "@/context/AuthContext";
import { proposalsService } from "@/lib/firebase/proposals";
import { ShareDialog } from "../share-dialog";
import { Proposal, ProposalBlock, SaveStatus } from "@/types/proposal";
import { Link } from "next-view-transitions";
import { toast } from "@/components/ui/hooks/use-toast";
import FirebaseAuth from "@/components/global/firebase-auth";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface ProposalEditorProps {
  proposal: Proposal;
}

export function ProposalEditor({
  proposal: initialProposal,
}: ProposalEditorProps) {
  const { user } = useAuth();
  const router = useRouter();
  const [proposal, setProposal] = useState<Proposal>(initialProposal);
  const [shareDialogOpen, setShareDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Save to Firebase function
  const saveToFirebase = async () => {
    if (!user || !hasChanges || isSaving) return;

    try {
      setIsSaving(true);
      await proposalsService.updateProposal(proposal.id, {
        ...proposal,
        content: proposal.content,
        updatedAt: new Date(),
      });
      setHasChanges(false);
      toast({
        description: "Changes saved successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save changes",
        variant: "destructive",
      });
    } finally {
      setIsSaving(false);
    }
  };

  // Update local state functions
  const updateTitle = (newTitle: string) => {
    setProposal({ ...proposal, title: newTitle });
    setHasChanges(true);
  };

  const handleDelete = async () => {
    if (!user) return;

    try {
      await proposalsService.deleteProposal(user.uid, proposal.id);
      toast({
        description: "Proposal deleted successfully",
      });
      router.push("/tools/proposals-builder-dnd");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete proposal",
        variant: "destructive",
      });
    }
  };

  const handleDragEnd = async (result: any) => {
    if (!result.destination || !user) return;

    const items = Array.from(proposal.content);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    const updatedItems = items.map((item, index) => ({
      ...item,
      order: index,
    }));

    setProposal({ ...proposal, content: updatedItems });
  };

  const addBlock = (type: ProposalBlock["type"]) => {
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
    };

    setProposal((prev) => ({
      ...prev,
      content: [...prev.content, newBlock],
    }));
    setHasChanges(true);
  };

  const updateBlock = (
    blockId: string,
    content: string,
    columnIndex?: number,
  ) => {
    const updatedContent = proposal.content.map((block) => {
      if (block.id !== blockId) return block;

      if (columnIndex !== undefined && block.type === "columns") {
        const columnContent = [...(block.columnContent || [])];
        columnContent[columnIndex] = { content: content || "" };
        return { ...block, columnContent };
      }

      return { ...block, content: content || "" };
    });

    setProposal((prev) => ({ ...prev, content: updatedContent }));
    setHasChanges(true);
  };

  const deleteBlock = (blockId: string) => {
    setProposal((prev) => ({
      ...prev,
      content: prev.content.filter((block) => block.id !== blockId),
    }));
    setHasChanges(true);
  };

  const renderBlock = (block: ProposalBlock) => {
    switch (block.type) {
      case "text":
        return (
          <Textarea
            value={block.content}
            onChange={(e) => updateBlock(block.id, e.target.value)}
            placeholder="Enter text..."
            className="flex-1 resize-none"
          />
        );
      case "heading":
        return (
          <Input
            type="text"
            value={block.content}
            onChange={(e) => updateBlock(block.id, e.target.value)}
            placeholder="Enter heading..."
            className="flex-1 text-xl font-bold"
          />
        );
      case "price":
        return (
          <Input
            type="number"
            value={block.content}
            onChange={(e) => updateBlock(block.id, e.target.value)}
            placeholder="Enter price..."
            className="flex-1"
          />
        );
      case "image":
        return (
          <div className="flex-1">
            <Input
              type="text"
              value={block.imageUrl}
              onChange={(e) => updateBlock(block.id, e.target.value)}
              placeholder="Enter image URL..."
              className="mb-2"
            />
            <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-muted">
              <img
                src={block.imageUrl}
                alt="Preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        );
      case "columns":
        return (
          <div className="grid flex-1 grid-cols-2 gap-4">
            {block.columnContent?.map((column, index) => (
              <Textarea
                key={index}
                value={column.content}
                onChange={(e) => updateBlock(block.id, e.target.value, index)}
                placeholder={`Column ${index + 1} content...`}
                className="resize-none"
              />
            ))}
          </div>
        );
      case "container":
        return (
          <div className="flex-1 space-y-2">
            <Input
              type="text"
              value={block.content}
              onChange={(e) => updateBlock(block.id, e.target.value)}
              placeholder="Enter content..."
              className="mb-2"
            />
            <div className="flex gap-2">
              <Input
                type="color"
                value={block.backgroundColor}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                className="w-20"
              />
              <select
                value={block.padding}
                onChange={(e) => updateBlock(block.id, e.target.value)}
                className="rounded-md border px-3 py-2"
              >
                <option value="p-2">Small Padding</option>
                <option value="p-4">Medium Padding</option>
                <option value="p-6">Large Padding</option>
                <option value="p-8">Extra Large Padding</option>
              </select>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  // Return early if no user
  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center gap-6">
        <p className="text-muted-foreground">
          Please sign in to edit proposals.
        </p>
        <FirebaseAuth />
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <Input
          type="text"
          value={proposal.title}
          onChange={(e) => updateTitle(e.target.value)}
          className="h-auto border-none px-0 text-3xl font-bold shadow-none md:text-4xl"
          placeholder="Untitled Proposal"
        />
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={saveToFirebase}
            disabled={!hasChanges || isSaving}
          >
            <Save className="mr-2 h-4 w-4" />
            {isSaving ? "Saving..." : hasChanges ? "Save Changes" : "Saved"}
          </Button>
          <Link href={`${proposal.id}/preview`}>
            <Button variant="outline">
              <Eye className="mr-2 h-4 w-4" />
              Preview
            </Button>
          </Link>
          <Button onClick={() => setShareDialogOpen(true)}>
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button
            variant="destructive"
            onClick={() => setDeleteDialogOpen(true)}
          >
            <Trash2 className="mr-2 h-4 w-4" />
            Delete
          </Button>
        </div>
      </div>

      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="proposal-blocks">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-4"
            >
              {proposal.content.map((block, index) => (
                <Draggable key={block.id} draggableId={block.id} index={index}>
                  {(provided) => (
                    <Card
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start gap-4">
                          {renderBlock(block)}
                          <Button
                            variant="destructive"
                            size="icon"
                            onClick={() => deleteBlock(block.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      <div className="flex flex-wrap gap-2">
        <Button onClick={() => addBlock("text")} variant="outline">
          <Type className="mr-2 h-4 w-4" />
          Add Text
        </Button>
        <Button onClick={() => addBlock("heading")} variant="outline">
          <Type className="mr-2 h-4 w-4" />
          Add Heading
        </Button>
        <Button onClick={() => addBlock("price")} variant="outline">
          <DollarSign className="mr-2 h-4 w-4" />
          Add Price
        </Button>
        <Button onClick={() => addBlock("columns")} variant="outline">
          <Layout className="mr-2 h-4 w-4" />
          Add Columns
        </Button>
        <Button onClick={() => addBlock("image")} variant="outline">
          <Image className="mr-2 h-4 w-4" />
          Add Image
        </Button>
        <Button onClick={() => addBlock("container")} variant="outline">
          <Square className="mr-2 h-4 w-4" />
          Add Container
        </Button>
      </div>

      <ShareDialog
        proposal={proposal}
        isOpen={shareDialogOpen}
        onClose={() => setShareDialogOpen(false)}
      />

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Proposal</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this proposal? This action cannot
              be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-destructive text-destructive-foreground"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      {hasChanges && (
        <div className="fixed bottom-4 right-4 z-50">
          <Alert variant="destructive">
            <AlertDescription>
              You have unsaved changes. Click the Save button to save them.
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}

export default ProposalEditor;
