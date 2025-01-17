export type SaveStatus = "saved" | "saving" | "unsaved";

export interface Proposal {
  id: string;
  title: string;
  description?: string;
  price?: number;
  status: "draft" | "sent";
  clientPassword: string;
  createdAt: Date;
  updatedAt: Date;
  sharedAt?: Date;
  userId: string;
  content: ProposalBlock[];
}

export type ProposalBlockType =
  | "text"
  | "heading"
  | "price"
  | "image"
  | "columns"
  | "container"
  | "list" // New
  | "table" // New
  | "timeline" // New
  | "quote" // New
  | "divider" // New
  | "video" // New
  | "attachment" // New
  | "signature"; // New

type AlignmentType = "left" | "center" | "right" | undefined;
type FontSizeType =
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | undefined;

export interface ProposalBlock {
  id: string;
  type: ProposalBlockType;
  content: string;
  order: number;

  // Styling properties
  imageUrl?: string;
  videoUrl?: string;
  backgroundColor?: string;
  padding?: "p-2" | "p-4" | "p-6" | "p-8";
  alignment?: AlignmentType;
  fontSize?: FontSizeType;
  textColor?: string;
  borderRadius?: "rounded-none" | "rounded-md" | "rounded-lg" | "rounded-xl";
  borderWidth?: "border-0" | "border" | "border-2" | "border-4";
  borderColor?: string;
  shadow?: "shadow-none" | "shadow-sm" | "shadow-md" | "shadow-lg";

  // Layout properties
  columns?: number;
  columnContent?: Array<{ content: string }>;

  // List properties
  listType?: "bullet" | "numbered" | "checklist";
  listItems?: string[];

  // Table properties
  tableData?: {
    headers: string[];
    rows: string[][];
  };

  // Timeline properties
  timelineItems?: Array<{
    date: string;
    title: string;
    description: string;
  }>;

  // Attachment properties
  attachmentUrl?: string;
  attachmentName?: string;
  attachmentSize?: number;

  // Signature properties
  signatureName?: string;
  signatureDate?: string;
  signatureTitle?: string;
}

export interface Client {
  id: string;
  name: string;
  email: string;
  proposalIds: string[];
}
