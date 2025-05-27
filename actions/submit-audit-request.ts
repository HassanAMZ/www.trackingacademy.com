"use server";

import { db } from "@/app/firebase";
import AuditRequestEmail from "@/components/emails/request-free-audit";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

export async function submitAuditRequest(formData: FormData): Promise<void> {
  const overallStart = performance.now();

  // Ensure Resend API Key exists
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing Resend API Key");
    throw new Error("Internal server error");
  }
  const resend = new Resend(process.env.RESEND_API_KEY);

  // Generate timestamp ID
  const timestamp = new Date();
  const timestampId = timestamp
    .toISOString()
    .replace(/[-T:.Z]/g, "")
    .substring(0, 14);

  const auditRequestsCollection = collection(db, "audit-requests");

  // Data validation
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    websiteUrl: z.string().url().optional(),
    createdAt: z.instanceof(Timestamp),
  });

  let data;

  const cookieStore = await cookies();
  const websiteUrl = cookieStore.get("website_url")?.value;

  try {
    data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      websiteUrl: websiteUrl,
      createdAt: Timestamp.now(),
    });
  } catch (validationError) {
    console.error("Validation failed", validationError);
    throw new Error("Please fill out all required fields correctly");
  }

  try {
    const docRef = doc(auditRequestsCollection, timestampId);

    // Prepare email data
    const emailData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      websiteUrl: data.websiteUrl,
      createdAt: data.createdAt,
    };

    // Execute Firebase write and email sending in parallel
    await Promise.all([
      setDoc(docRef, data),
      // Send email to user
      resend.emails.send({
        from: "no-reply@trackingacademy.com",
        to: data.email,
        cc: ["reactjswebdev@gmail.com"],
        subject: `Your Free Website Tracking Audit Report is in Progress, ${data.name}!`,
        react: AuditRequestEmail(emailData),
      }),
    ]);

    // Set cookies for user data
    try {
      const cookieStore = await cookies();
      cookieStore.set("name", data.name, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      cookieStore.set("email", data.email, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      cookieStore.set("phone", data.phone, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      cookieStore.set("timestamp_id", timestampId, {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
      cookieStore.set("form_submission_timestamp", new Date().toISOString(), {
        httpOnly: false,
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });
    } catch (cookieError) {
      console.warn("Failed to set cookie", cookieError);
    }
  } catch (e) {
    console.error("Failed to create audit request or send email", e);
    throw new Error("Failed to process your request. Please try again.");
  }

  console.log(
    `Total execution time: ${(performance.now() - overallStart).toFixed(2)}ms`,
  );

  redirect("/lead-magnets/free-website-audit/success");
}
