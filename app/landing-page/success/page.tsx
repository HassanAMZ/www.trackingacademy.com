// src/app/landing-page/success/page.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { PaymentInfo } from "../payment/page";

export default function SuccessPage() {
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const paymentIntentId = searchParams.get("payment_intent");

  useEffect(() => {
    const fetchPaymentDetails = async () => {
      if (!paymentIntentId) {
        setIsLoading(false);
        return;
      }

      try {
        // Fetch payment details from your backend
        const response = await fetch(
          `/api/stripe/payment-details?paymentIntentId=${paymentIntentId}`,
        );
        if (response.ok) {
          const data = await response.json();
          setPaymentInfo(data);
        }
      } catch (error) {
        console.error("Error fetching payment details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaymentDetails();
  }, [paymentIntentId]);

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-xl">Loading payment information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container max-w-4xl mx-auto py-12 px-4">
      <Card className="p-8 my-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="h-10 w-10 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold">Payment Successful!</h1>
          <p className="text-gray-600 mt-2">
            Thank you for purchasing the 3-Day "See Every Sale" Tracking System
          </p>
        </div>

        <div className="space-y-6">
          <div className="bg-green-50 border border-green-100 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">What's Next?</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded text-xs mr-2 mt-0.5">
                  1
                </span>
                <span>
                  Check your email for a confirmation receipt and welcome
                  information
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded text-xs mr-2 mt-0.5">
                  2
                </span>
                <span>
                  Our team will contact you within 24 hours to schedule your
                  implementation
                </span>
              </li>
              <li className="flex items-start">
                <span className="bg-green-100 text-green-800 font-medium px-2 py-1 rounded text-xs mr-2 mt-0.5">
                  3
                </span>
                <span>
                  Download your resources from the customer portal which will be
                  set up shortly
                </span>
              </li>
            </ul>
          </div>

          <div className="border rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Your Purchase</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Product:</span>
                <span>3-Day "See Every Sale" Tracking System</span>
              </div>

              {paymentInfo?.amount && (
                <div className="flex justify-between">
                  <span className="font-medium">Amount:</span>
                  <span>
                    ${(paymentInfo.amount / 100).toFixed(2)}{" "}
                    {paymentInfo.currency.toUpperCase()}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span className="font-medium">Payment Status:</span>
                <span className="text-green-600 font-medium">Completed</span>
              </div>

              {paymentInfo?.paymentId && (
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Transaction ID:</span>
                  <span>{paymentInfo.paymentId}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>

          <Button variant="outline" asChild size="lg">
            <Link href="/support">Contact Support</Link>
          </Button>
        </div>
      </Card>
    </div>
  );
}
