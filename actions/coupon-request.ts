"use server";

import { db } from "@/app/firebase";
import CouponRequestEmail from "@/components/emails/coupon-request";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

export async function createCouponRequest(
  formData: FormData,
  redirectUrl: string = "/contact/book-a-meeting",
): Promise<void> {
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

  const couponRequestsCollection = collection(db, "coupon-requests");

  // Data validation
  const schema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(1, "Phone number is required"),
    createdAt: z.instanceof(Timestamp),
    couponCode: z.string(),
  });

  let data;
  try {
    data = schema.parse({
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      createdAt: Timestamp.now(),
      couponCode: "SEEEVERYSALE300OFF",
    });
  } catch (validationError) {
    console.error("Validation failed", validationError);
    throw new Error("Please fill out all required fields correctly");
  }

  try {
    const docRef = doc(couponRequestsCollection, timestampId); // Prepare email data
    const emailData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      couponCode: data.couponCode,
      createdAt: data.createdAt,
    }; // Execute Firebase write and email sending in parallel
    await Promise.all([
      setDoc(docRef, data),
      resend.emails.send({
        from: "no-reply@trackingacademy.com",
        to: data.email,
        cc: ["reactjswebdev@gmail.com", "analytics@trackingacademy.com"],

        subject: `Your $300 Coupon Code is Ready, ${data.name}!`,
        react: CouponRequestEmail(emailData),
      }),
    ]); // Set cookie for user data
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
    console.error("Failed to create coupon request or send email", e);
    throw new Error("Failed to process your request. Please try again.");
  }

  console.log(
    `Total execution time: ${(performance.now() - overallStart).toFixed(2)}ms`,
  );

  // Use redirect instead of returning data
  redirect(redirectUrl);
}
