"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { db } from "@/app/firebase";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { Resend } from "resend";
import { z } from "zod";
import ContactUsEmail from "@/components/emails/contact-us";

export async function createContact(
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

  const contactsCollection = collection(db, "contacts");

  // Process checkbox values (multiple selections)
  const issues = formData.getAll("issues");

  // Data validation
  const schema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    website: z.string().url("Invalid website URL"),
    revenue: z.string().optional(),
    issues: z.array(z.string()).optional(),
    urgency: z.string().min(1, "Urgency level is required"),
    createdAt: z.instanceof(Timestamp),
  });

  let data;
  try {
    data = schema.parse({
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      website: formData.get("website"),
      revenue: formData.get("revenue") || "Not specified",
      issues: issues.length > 0 ? issues : ["Not specified"],
      urgency: formData.get("urgency"),
      createdAt: Timestamp.now(),
    });
  } catch (validationError) {
    console.error("Validation failed", validationError);
    throw new Error("Invalid form data");
  }

  try {
    const contactDocRef = doc(contactsCollection, timestampId); // For email, combine first and last name
    const fullName = `${data.firstName} ${data.lastName}`; // Format issues for email display
    const issuesFormatted = (data.issues ?? []).join(", "); // Prepare email data
    const emailData = {
      name: fullName,
      website: data.website,
      issues: issuesFormatted,
      urgency: data.urgency,
      revenue: data.revenue || "Not specified",
      email: data.email,
      createdAt: data.createdAt,
    }; // Execute Firebase write and email sending in parallel
    await Promise.all([
      setDoc(contactDocRef, data),
      resend.emails.send({
        from: "no-reply@trackingacademy.com",
        to: data.email,
        cc: ["reactjswebdev@gmail.com"],

        subject: `Thank you for your interest, ${fullName}!`,
        react: ContactUsEmail(emailData),
      }),
    ]); // Set cookie asynchronously but safely
    try {
      (await cookies()).set("user_data", JSON.stringify(data), {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 365,
      });
    } catch (cookieError) {
      console.warn("Failed to set cookie", cookieError);
    }
  } catch (e) {
    console.error("Failed to create contact or send email", e);
    throw new Error("Failed to create contact");
  }

  console.log(`Total execution time: ${(performance.now() - overallStart).toFixed(2)}ms`);

  // Use redirect instead of returning data
  redirect(redirectUrl);
}
