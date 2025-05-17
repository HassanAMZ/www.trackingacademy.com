"use client";

import Container from "@/components/ui/container";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

interface SessionData {
  customer_email?: string;
  amount_total?: number;
  payment_status?: string;
  id: string;
}

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      if (!sessionId) return;

      try {
        const res = await fetch(`/api/stripe/session?session_id=${sessionId}`);
        const data = await res.json();
        setSessionData(data);
      } catch (err) {
        console.error("Failed to fetch session", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  if (loading) return <p>Loading...</p>;

  if (!sessionData) return <p>No session found.</p>;

  return (
    <Container className="min-h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Payment Successful!</h1>
      <p className="text-lg mb-2">Thank you for your purchase.</p>
      <p>
        Session ID: <strong>{sessionData.id}</strong>
      </p>
      {sessionData.customer_email && (
        <p>
          Email: <strong>{sessionData.customer_email}</strong>
        </p>
      )}
      {sessionData.amount_total && (
        <p>
          Total Paid:{" "}
          <strong>${(sessionData.amount_total / 100).toFixed(2)}</strong>
        </p>
      )}
      <p>
        Status: <strong>{sessionData.payment_status}</strong>
      </p>
    </Container>
  );
}
