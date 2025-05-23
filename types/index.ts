"use client";

export interface PostMetadata {
  title: string;
  date: string;
  blogId: number;
  tags: string[];
  draft: boolean;
  description: string;
  openGraph: { images: string[] };
  embedId: string;
  id?: string;
  updatedDate?: string;
  slug?: string;
}

export interface PostMetadataProps {
  metadata: PostMetadata;
} // types/index.ts

export interface Product {
  id: string;
  name: string;
  description?: string;
  unitAmount: number;
  currency: string;
  priceId: string;
  features?: string[]; // ✅ Used for display
  metadata?: { [key: string]: string }; // ✅ Optional raw metadata
  images?: string[];
}

export interface PromoCode {
  id: string;
  code: string;
  amountOff: number;
  percentOff?: number;
  active: boolean;
  couponId?: string;
  finalAmount?: number;
}

export interface PaymentData {
  amount: number;
  currency: string;
  paymentIntentId?: string;
  appliedPromo?: {
    code: string;
    amountOff: number;
    couponId?: string;
  } | null;
}

export interface PaymentContentProps {
  productId: string;
  priceId: string;
  onSuccess?: (paymentData: PaymentData) => void;
  onError?: (error: string) => void;
  className?: string;
}
