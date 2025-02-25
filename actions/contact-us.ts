"use server";
import { db } from "@/app/firebase";
import ContactUsEmail from "@/components/emails/contact-us";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

export async function createContact(formData: FormData) {
  const overallStart = performance.now();

  // Ensure Resend API Key exists
  if (!process.env.NEXT_PUBLIC_RESEND_API_KEY) {
    console.error("Missing Resend API Key");
    return { message: "Internal server error" };
  }
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  // Generate timestamp ID
  const timestamp = new Date();
  const timestampId = timestamp
    .toISOString()
    .replace(/[-T:.Z]/g, "")
    .substring(0, 14);

  const contactsCollection = collection(db, "contacts");

  // Data validation
  const schema = z.object({
    name: z.string().min(1),
    roleType: z.string().min(1),
    website: z.string().url(),
    interest: z.string().min(1),
    projectDescription: z.string().min(1),
    budget: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    createdAt: z.instanceof(Timestamp),
  });

  let data;
  try {
    data = schema.parse({
      name: formData.get("name"),
      roleType: formData.get("roleType"),
      website: formData.get("website"),
      interest: formData.get("interest"),
      projectDescription: formData.get("projectDescription"),
      budget: formData.get("budget"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      createdAt: Timestamp.now(),
    });
  } catch (validationError) {
    console.error("Validation failed", validationError);
    return { message: "Invalid form data" };
  }

  try {
    const contactDocRef = doc(contactsCollection, timestampId);

    // Execute Firebase write and email sending in parallel
    await Promise.all([
      setDoc(contactDocRef, data),
      resend.emails.send({
        from: "no-reply@trackingacademy.com",
        to: data.email,
        cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
        subject: `Hi, ${data.name}!`,
        react: ContactUsEmail(data),
      }),
    ]);

    // Set cookie asynchronously but safely
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
    return { message: "Failed to create contact" };
  }

  console.log(
    `Total execution time: ${(performance.now() - overallStart).toFixed(2)}ms`,
  );
  redirect("/contact/book-a-meeting");
}
