"use server";

import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { z } from "zod";
import { Resend } from "resend";
import RequestABlogEmail from "@/components/emails/request-a-blog";

export async function handleRequestABlogForm(
  prevState: any,
  formData: FormData
) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  // Generate a timestamp ID based on the current time
  const timestamp = new Date();
  const timestampId =
    timestamp.getFullYear().toString() +
    (timestamp.getMonth() + 1).toString().padStart(2, "0") +
    timestamp.getDate().toString().padStart(2, "0") +
    timestamp.getHours().toString().padStart(2, "0") +
    timestamp.getMinutes().toString().padStart(2, "0") +
    timestamp.getSeconds().toString().padStart(2, "0");

  const requestsCollection = collection(db, "blog-requests");

  const schema = z.object({
    email: z.string().email(),
    searchTerm: z.string().min(1),
    createdAt: z.instanceof(Timestamp),
  });

  const data = schema.parse({
    email: (formData.get("email") as string) || "",
    searchTerm: (formData.get("searchTerm") as string) || "",
    createdAt: Timestamp.now(),
  });

  try {
    const requestDocRef = doc(requestsCollection, timestampId);
    await setDoc(requestDocRef, data);

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
      subject: "Thank you for your blog request!",
      react: RequestABlogEmail({
        email: data.email,
        searchTerm: data.searchTerm,
        createdAt: data.createdAt,
      }),
    });

    return { message: `Blog request received for ${data.searchTerm}` };
  } catch (e) {
    console.error("Failed to create blog request or send email", e);
    return { message: "Failed to create blog request" };
  }
}
