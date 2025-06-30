"use client";

import { useEffect, useRef, useState } from "react";
import { sendGTMEvent } from "@next/third-parties/google";
import {
  Calendar,
  CalendarDays,
  CheckCircle,
  CreditCard,
  Mail,
  MapPin,
  Package,
  Phone,
  Receipt,
  Tag,
  User,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

// Helper to create standardized user data for GTM events
const createUserData = (paymentData: PaymentData | null) => {
  if (!paymentData) {
    return {
      id: undefined,
      email: localStorage.getItem("email_address"),
      phone: localStorage.getItem("phone_number"),
      new_customer: undefined,
      address: {
        first_name: undefined,
        last_name: undefined,
        city: undefined,
        country: undefined,
        region: undefined,
        street: undefined,
        zip: undefined,
      },
    };
  }

  const customerName = paymentData.customer_details?.name || paymentData.shipping?.name || "";
  const nameParts = customerName.split(" ");
  const firstName = nameParts[0] || undefined;
  const lastName = nameParts.slice(1).join(" ") || undefined;

  const customerEmail =
    paymentData.customer_details?.email || paymentData.receipt_email || undefined;
  const customerPhone =
    paymentData.customer_details?.phone || paymentData.shipping?.phone || undefined;

  // Prioritize customer_details address, fallback to shipping address
  const address = paymentData.customer_details?.address || paymentData.shipping?.address;

  return {
    id: paymentData.id || undefined,
    email: customerEmail,
    phone: customerPhone,
    new_customer: paymentData.metadata?.isNewCustomer === "true" || undefined,
    address: {
      first_name: firstName,
      last_name: lastName,
      city: address?.city || undefined,
      country: address?.country || undefined,
      region: address?.state || undefined,
      street: address?.line1 || undefined,
      zip: address?.postal_code || undefined,
    },
  };
};

// Helper to create purchase event data for GA4
const createPurchaseEventData = (paymentData: PaymentData) => {
  const originalAmount = parseFloat(paymentData.metadata?.originalAmount || "0") / 100;
  const discountAmount = parseFloat(paymentData.metadata?.discountAmount || "0") / 100;
  const finalAmount = (paymentData.amount_received || 0) / 100;
  const shipping = parseFloat(paymentData.metadata?.shipping || "0") / 100;
  const tax = parseFloat(paymentData.metadata?.tax || "0") / 100;
  const subTotal = finalAmount - shipping - tax;

  // Calculate discount percentage
  const discountPercentage =
    originalAmount > 0 ? Math.round((discountAmount / originalAmount) * 100) : 0;

  return {
    event: "gtm_custom_event",
    datalayer_event_name: "purchase",
    ecomm_pagetype: "purchase",
    ecommerce: {
      cart_quantity: parseInt(paymentData.metadata?.quantity || "1"),
      cart_total: originalAmount > 0 ? originalAmount.toFixed(2) : finalAmount.toFixed(2),
      coupon: paymentData.metadata?.appliedPromoCode || undefined,
      currency: paymentData.currency?.toUpperCase() || "GBP",
      discount: paymentData.metadata?.appliedPromoCode || undefined,
      discount_amount: discountAmount > 0 ? discountAmount.toFixed(2) : undefined,
      discount_percentage: discountPercentage > 0 ? discountPercentage : undefined,
      shipping: shipping,
      sub_total: subTotal,
      tax: tax,
      transaction_id: paymentData.id,
      value: finalAmount.toFixed(2),
      items: [
        {
          imageURL: paymentData.metadata?.productImage || undefined,
          item_brand: paymentData.metadata?.productBrand || undefined,
          item_category: paymentData.metadata?.category || "General",
          item_id: paymentData.metadata?.productId || paymentData.id,
          item_name: paymentData.metadata?.productName || "Purchase",
          item_sku: paymentData.metadata?.productSku || undefined,
          item_variant: paymentData.metadata?.productVariant || undefined,
          price: originalAmount > 0 ? originalAmount : finalAmount,
          quantity: paymentData.metadata?.quantity || "1",
          variant_name: paymentData.metadata?.variantName || undefined,
        },
      ],
    },
    user_data: createUserData(paymentData),
  };
};

interface CustomerDetails {
  email?: string;
  name?: string;
  phone?: string;
  address?: {
    city?: string;
    country?: string;
    line1?: string;
    line2?: string;
    postal_code?: string;
    state?: string;
  };
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
  shipping?: {
    address?: {
      city?: string;
      country?: string;
      line1?: string;
      line2?: string;
      postal_code?: string;
      state?: string;
    };
    name?: string;
    phone?: string;
  };
  confirmation_method?: string;
  payment_method_types?: string[];
  receipt_email?: string;
  latest_charge?: string;
}

export default function PaymentSuccess() {
  const [paymentData, setPaymentData] = useState<PaymentData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Track processed transactions to prevent duplicates
  const processedTransactions = useRef<Set<string>>(new Set());

  useEffect(() => {
    const fetchPaymentData = async (): Promise<void> => {
      try {
        // Track page view using sendGTMEvent
        sendGTMEvent({
          event: "gtm_custom_event",
          datalayer_event_name: "payment_success_page_view",
          page_title: "Payment Success",
          page_location: window.location.href,
        });

        // Get URL parameters
        const urlParams = new URLSearchParams(window.location.search);
        const paymentIntent = urlParams.get("payment_intent");
        const redirectStatus = urlParams.get("redirect_status");

        if (!paymentIntent || redirectStatus !== "succeeded") {
          throw new Error("Invalid payment parameters");
        }

        // Fetch payment information from API
        const response = await fetch(`/api/stripe/payment-info?payment_intent=${paymentIntent}`);

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error || `HTTP ${response.status}: Failed to fetch payment information`,
          );
        }

        const data: PaymentData = await response.json();

        setPaymentData(data);

        // Send success email (only once per payment)
        try {
          // Get fallback data from localStorage
          const fallbackData = {
            email_address: localStorage.getItem("email_address"),
            name: data?.customer_details?.name || data?.shipping?.name || "Customer",
            phone_number: localStorage.getItem("phone_number"),
          };

          const emailResponse = await fetch("/api/stripe/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              paymentIntentId: data.id,
              fallbackData: fallbackData,
            }),
          });

          const emailResult = await emailResponse.json();

          if (emailResult.success) {
            console.log("Success email sent:", emailResult.message);
          } else {
            console.warn("Email sending failed:", emailResult.error);
          }
        } catch (emailError) {
          console.error("Error sending success email:", emailError);
          // Don't break the page if email fails
        }

        // Track successful data fetch using sendGTMEvent
        sendGTMEvent({
          event: "gtm_custom_event",
          datalayer_event_name: "payment_data_fetch_success",
          payment_intent: paymentIntent,
          amount: data.amount_received,
          currency: data.currency,
          status: data.status,
        });

        // Track purchase event only once per transaction
        if (!processedTransactions.current.has(data.id)) {
          processedTransactions.current.add(data.id);

          // Create purchase event data
          const purchaseEventData = createPurchaseEventData(data);

          // Send purchase event using sendGTMEvent
          sendGTMEvent(purchaseEventData);
        }
      } catch (err) {
        console.error("Error fetching payment data:", err);
        const errorMessage = err instanceof Error ? err.message : "Unknown error occurred";
        setError(errorMessage);

        // Track error event using sendGTMEvent
        sendGTMEvent({
          event: "gtm_custom_event",
          datalayer_event_name: "payment_verification_error",
          error_message: errorMessage,
          error_type: "fetch_payment_data",
          payment_intent: new URLSearchParams(window.location.search).get("payment_intent"),
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentData();
  }, []);

  const handleRetry = () => {
    // Track retry attempt using sendGTMEvent
    sendGTMEvent({
      event: "gtm_custom_event",
      datalayer_event_name: "payment_retry_clicked",
      error_message: error,
      page_location: window.location.href,
    });

    window.location.reload();
  };

  if (loading) {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <Skeleton className="mx-auto mb-4 h-12 w-12 rounded-full" />
            <p className="text-muted-foreground">Processing your payment information...</p>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <div className="flex min-h-screen items-center justify-center">
          <Card className="mx-4 w-full max-w-md">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="bg-destructive/10 mx-auto mb-4 h-16 w-16 rounded-full p-3">
                  <svg
                    className="text-destructive h-10 w-10"
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
                <h2 className="mb-2 text-xl font-semibold">Something went wrong</h2>
                <p className="text-muted-foreground mb-4">{error}</p>
                <Button onClick={handleRetry}>Try Again</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </>
    );
  }

  const formatAmount = (amount: number, currency: string): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency?.toUpperCase() || "GBP",
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

  const customerName = paymentData?.customer_details?.name || paymentData?.shipping?.name || "";
  const customerEmail = paymentData?.customer_details?.email || paymentData?.receipt_email || "";
  const customerPhone = paymentData?.customer_details?.phone || paymentData?.shipping?.phone || "";
  const customerAddress = paymentData?.customer_details?.address || paymentData?.shipping?.address;

  // Calculate discount information
  const originalAmount = parseFloat(paymentData?.metadata?.originalAmount || "0");
  const discountAmount = parseFloat(paymentData?.metadata?.discountAmount || "0");
  const hasDiscount = discountAmount > 0;

  return (
    <>
      <div className="min-h-screen px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Success Header */}
          <div className="mb-8 text-center">
            <div className="mb-4 flex justify-center">
              <div className="bg-primary/10 rounded-full p-3">
                <CheckCircle className="text-primary h-8 w-8" />
              </div>
            </div>
            <h1 className="mb-2 text-3xl font-bold">Payment Successful!</h1>
            <p className="text-muted-foreground">
              Thank you for your purchase. Your payment has been processed successfully.
            </p>
          </div>

          {/* Payment Details Card */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5" />
                Payment Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Customer Information */}
              {(customerName || customerEmail || customerPhone || customerAddress) && (
                <div className="border-b pb-4">
                  <h3 className="mb-3 text-lg font-medium">Customer Information</h3>
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    {customerName && (
                      <div className="flex items-center space-x-3">
                        <User className="text-muted-foreground h-5 w-5" />
                        <div>
                          <p className="text-muted-foreground text-sm">Name</p>
                          <p className="font-medium">{customerName}</p>
                        </div>
                      </div>
                    )}
                    {customerEmail && (
                      <div className="flex items-center space-x-3">
                        <Mail className="text-muted-foreground h-5 w-5" />
                        <div>
                          <p className="text-muted-foreground text-sm">Email</p>
                          <p className="font-medium">{customerEmail}</p>
                        </div>
                      </div>
                    )}
                    {customerPhone && (
                      <div className="flex items-center space-x-3">
                        <Phone className="text-muted-foreground h-5 w-5" />
                        <div>
                          <p className="text-muted-foreground text-sm">Phone</p>
                          <p className="font-medium">{customerPhone}</p>
                        </div>
                      </div>
                    )}
                    {customerAddress && (
                      <div className="flex items-start space-x-3">
                        <MapPin className="text-muted-foreground mt-1 h-5 w-5" />
                        <div>
                          <p className="text-muted-foreground text-sm">Address</p>
                          <div className="font-medium">
                            {customerAddress.line1 && <p>{customerAddress.line1}</p>}
                            {customerAddress.line2 && <p>{customerAddress.line2}</p>}
                            <p>
                              {customerAddress.city && `${customerAddress.city}, `}
                              {customerAddress.state && `${customerAddress.state} `}
                              {customerAddress.postal_code}
                            </p>
                            {customerAddress.country && <p>{customerAddress.country}</p>}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Purchase Information */}
              <div className="border-b pb-4">
                <h3 className="mb-3 text-lg font-medium">Purchase Information</h3>
                <div className="space-y-3">
                  {paymentData?.metadata?.productName && (
                    <div className="flex items-center space-x-3">
                      <Package className="text-muted-foreground h-5 w-5" />
                      <div>
                        <p className="text-muted-foreground text-sm">Product</p>
                        <p className="font-medium">{paymentData.metadata.productName}</p>
                      </div>
                    </div>
                  )}

                  {hasDiscount && (
                    <div className="rounded-lg border border-green-200 bg-green-50 p-4">
                      <div className="mb-2 flex items-center space-x-2">
                        <Tag className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">
                          Discount Applied: {paymentData?.metadata?.appliedPromoCode}
                        </span>
                      </div>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Original Amount:</span>
                          <span className="line-through">
                            {formatAmount(originalAmount, paymentData?.currency || "GBP")}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-green-700">Discount:</span>
                          <span className="font-medium text-green-700">
                            -{formatAmount(discountAmount, paymentData?.currency || "GBP")}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Information */}
              <div className="border-b pb-4">
                <h3 className="mb-3 text-lg font-medium">Payment Information</h3>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div className="flex items-center space-x-3">
                    <CreditCard className="text-muted-foreground h-5 w-5" />
                    <div>
                      <p className="text-muted-foreground text-sm">Amount Paid</p>
                      <p className="text-primary text-xl font-bold">
                        {formatAmount(
                          paymentData?.amount_received || 0,
                          paymentData?.currency || "GBP",
                        )}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-muted-foreground h-5 w-5" />
                    <div>
                      <p className="text-muted-foreground text-sm">Date</p>
                      <p className="font-medium">
                        {paymentData?.created ? formatDate(paymentData.created) : "Just now"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Method Details */}
                {paymentData?.payment_method && (
                  <div className="bg-muted mt-4 rounded-lg p-3">
                    <p className="text-muted-foreground mb-1 text-sm">Payment Method</p>
                    <div className="flex items-center space-x-2">
                      <span className="font-medium capitalize">
                        {paymentData.payment_method.card?.brand || paymentData.payment_method.type}
                      </span>
                      {paymentData.payment_method.card && (
                        <span className="text-muted-foreground">
                          •••• {paymentData.payment_method.card.last4}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Transaction Details */}
              <div>
                <h3 className="mb-3 text-lg font-medium">Transaction Details</h3>
                <div className="bg-muted rounded-md p-4">
                  <div className="grid grid-cols-1 gap-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Transaction ID:</span>
                      <span className="font-mono">{paymentData?.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Status:</span>
                      <span className="text-primary font-medium capitalize">
                        {paymentData?.status}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Currency:</span>
                      <span className="font-medium uppercase">{paymentData?.currency}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Book a Meeting Call-to-Action */}
          <Card className="">
            <CardContent className="pt-6">
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3">
                    <CalendarDays className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mb-2 text-xl font-semibold">Let Get Started?</h3>
                <p className="mx-auto mb-6 max-w-md">
                  Book a onboarding call with our experts to maximize your purchase and get
                  personalized guidance tailored to your needs.
                </p>
                <Button asChild size="lg">
                  <a href="/book-a-meeting">
                    <CalendarDays className="mr-2 h-5 w-5" />
                    Book a Call
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
