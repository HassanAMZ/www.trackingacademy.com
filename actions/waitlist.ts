"use server";

import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { z } from "zod";
import { Resend } from "resend";
import WaitListEmail from "@/components/emails/waitlist-email";

export async function createContact(prevState: any, formData: FormData) {
 const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

 const contactsCollection = collection(db, "waitlist");

 const schema = z.object({
  userName: z.string().min(1),
  email: z.string().min(1),

  createdAt: z.instanceof(Timestamp),
 });

 const data = schema.parse({
  userName: formData.get("userName"),
  email: formData.get("email"),
  createdAt: Timestamp.now(),
 });

 try {
  await addDoc(contactsCollection, data);

  await resend.emails.send({
   from: "support@trackingacademy.com",
   to: data.email,
   cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
   subject: "Thank you for contacting us!",
   react: WaitListEmail({
    userName: data.userName,
    email: data.email,
    createdAt: data.createdAt,
   }),
  });

  return { message: `Added contact ${data.userName}` };
 } catch (e) {
  console.error("Failed to create contact or send email", e);
  return { message: "Failed to create contact" };
 }
}
