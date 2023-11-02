"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { sql } from "@vercel/postgres";
import { z } from "zod";
import {
 collection,
 addDoc,
 deleteDoc,
 doc,
 Timestamp,
} from "firebase/firestore";
import { db } from "@/app/firebase";

// import { Resend } from "resend";

export async function createContact(prevState: any, formData: FormData) {
 // const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

 const contactsCollection = collection(db, "contacts");

 const schema = z.object({
  userName: z.string().min(1),
  email: z.string().min(1),
  websiteLink: z.string().min(1),
  integrationType: z.string().min(1),
  projectDescription: z.string().min(1),
 });

 const data = schema.parse({
  userName: formData.get("userName"),
  email: formData.get("email"),
  websiteLink: formData.get("websiteLink"),
  integrationType: formData.get("integrationType"),
  projectDescription: formData.get("projectDescription"),
 });

 try {
  await addDoc(contactsCollection, data);

  // await sql`
  // INSERT INTO contacts (first_name, last_name, email, phone, website_link, project_description)
  // VALUES (${data.firstName}, ${data.lastName}, ${data.email}, ${data.phone}, ${data.websiteLink}, ${data.projectDescription})
  // `;

  cookies().set("user", JSON.stringify(data));

  // await resend.emails.send({
  //  from: "onboarding@resend.dev",
  //  to: "reactjswebdev@gmail.com",
  //  subject: "Message from contact form",
  //  text: "hello world",
  // });

  return { message: `Added contact ${data.userName}` };
 } catch (e) {
  return { message: "Failed to create contact" };
 }
}
