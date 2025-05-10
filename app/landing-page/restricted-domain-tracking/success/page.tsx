"use client";

import { useSearchParams } from "next/navigation";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle, Clock } from "lucide-react";
import { stripe } from "@/lib/stripe";

// Client Component for SuccessPage
function SuccessPageContent() {
  const searchParams = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");

  // Redirect if payment_intent is missing
  if (!paymentIntentId) {
    redirect("/");
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-8 text-center">
      <p className="text-muted-foreground text-sm">
        Payment ID: {paymentIntentId}
      </p>
    </div>
  );
}

// Wrap the Client Component in Suspense
export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  );
}
