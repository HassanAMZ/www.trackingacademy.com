"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, CheckCircle, CreditCard, Mail, User } from "lucide-react";
import { useEffect, useState } from "react";

interface CustomerDetails {
  email?: string;
  name?: string;
  phone?: string;
  address?: any;
}

interface PaymentMethod {
  id: string;
  type: string;
  card?: {
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
  };
}

interface Charge {
  id: string;
  amount: number;
  currency: string;
  paid: boolean;
  receipt_url?: string;
  billing_details?: any;
  payment_method_details?: any;
}

interface PaymentData {
  id: string;
  amount_received: number;
  amount: number;
  currency: string;
  status: string;
  created: number;
  description?: string;
  customer_details?: CustomerDetails;
  metadata?: Record<string, any>;
  payment_method?: PaymentMethod;
  charges?: Charge[];
  confirmation_method?: string;
  payment_method_types?: string[];
  receipt_email?: string;
  userData?: {
    firstName: string;
    lastName: string;
    email: string;
    paymentIntent: string;
    amount: number;
    currency: string;
    timestamp: string;
  };
}

export default function PaymentSuccess() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentData = async (): Promise<void> => {
      try {
        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const paymentIntent = urlParams.get("payment_intent");
        const redirectStatus = urlParams.get("redirect_status");

        if (!paymentIntent || redirectStatus !== "succeeded") {
          throw new Error("Invalid payment parameters");
        }

        // Fetch payment information from your API
        const response = await fetch(
          `/api/stripe/payment-info?payment_intent=${paymentIntent}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch payment information");
        }

        const data: PaymentData = await response.json();
        setPaymentData(data);

        // Save user data to component state
        const userData = {
          firstName: data.customer_details?.name?.split(" ")[0] || "",
          lastName:
            data.customer_details?.name?.split(" ").slice(1).join(" ") || "",
          email: data.customer_details?.email || "",
          paymentIntent: paymentIntent,
          amount: data.amount_received,
          currency: data.currency,
          timestamp: new Date().toISOString(),
        };

        // Store in component state
        setPaymentData((prev) => ({ ...prev!, userData }));
      } catch (err) {
        console.error("Error fetching payment data:", err);
        setError(err instanceof Error ? err.message : "Unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Skeleton className="h-12 w-12 rounded-full mx-auto mb-4" />
          <p className="text-muted-foreground">
            Processing your payment information...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardContent className="pt-6">
            <div className="text-center">
              <div className="bg-destructive/10 rounded-full p-3 w-16 h-16 mx-auto mb-4">
                <svg
                  className="w-10 h-10 text-destructive"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </div>
              <h2>Something went wrong</h2>
              <p className="text-muted-foreground">{error}</p>
              <Button onClick={() => window.location.reload()}>
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const formatAmount = (amount: number, currency: string): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency?.toUpperCase() || "USD",
    }).format(amount / 100);
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp * 1000).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-primary/10 rounded-full p-3">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h1> Payment Successful!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your payment has been processed
            successfully.
          </p>
        </div>

        {/* Payment Details Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Payment Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Customer Information */}

            {paymentData?.userData?.firstName &&
              paymentData?.userData?.lastName &&
              paymentData?.userData?.email && (
                <div className="border-b pb-4">
                  <h3> Customer Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <User className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Name</p>
                        <p>
                          {paymentData?.userData?.firstName}{" "}
                          {paymentData?.userData?.lastName}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="text-muted-foreground">Email</p>
                        <p>{paymentData?.userData?.email}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            {/* Payment Information */}
            <div className="border-b pb-4">
              {paymentData?.userData?.firstName &&
                paymentData?.userData?.lastName &&
                paymentData?.userData?.email && <h3>Payment Information</h3>}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Amount Paid</p>
                    <p>
                      {formatAmount(
                        paymentData?.amount_received || 0,
                        paymentData?.currency || "USD",
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="text-muted-foreground">Date</p>
                    <p>
                      {paymentData?.created
                        ? formatDate(paymentData.created)
                        : "Just now"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Details */}
            <div>
              <h3>Transaction Details</h3>
              <div className="bg-muted rounded-md p-4">
                <div className="grid grid-cols-1 gap-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Payment Intent ID:
                    </span>
                    <span>{paymentData?.id}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-primary capitalize">
                      {paymentData?.status}
                    </span>
                  </div>
                  {paymentData?.metadata?.productName && (
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Product:</span>
                      <span>{paymentData.metadata.productName}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="bg-primary/5 mb-6">
          <CardContent className="pt-6">
            <h3> What's Next?</h3>
            <p className="text-muted-foreground">
              You should receive a confirmation email shortly with your purchase
              details and any relevant access information.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={() => window.print()}>Print Receipt</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
