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

export async function createContact(prevState: any, formData: FormData) {
 const contactsCollection = collection(db, "contacts");
 const cookieStore = cookies();

 const schema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().min(1),
  phone: z.string().min(1),
  websiteLink: z.string().min(1),
  projectDescription: z.string().min(1),
 });
 const data = schema.parse({
  firstName: formData.get("firstName"),
  lastName: formData.get("lastName"),
  email: formData.get("email"),
  phone: formData.get("phone"),
  websiteLink: formData.get("websiteLink"),
  projectDescription: formData.get("projectDescription"),
 });

 try {
  await addDoc(contactsCollection, data);

  await sql`
  INSERT INTO contacts (first_name, last_name, email, phone, website_link, project_description)
  VALUES (${data.firstName}, ${data.lastName}, ${data.email}, ${data.phone}, ${data.websiteLink}, ${data.projectDescription})
  `;
  cookieStore.set("user", JSON.stringify(data));

  revalidatePath("/");
  return { message: `Added contact ${data.firstName} ${data.lastName}` };
 } catch (e) {
  return { message: "Failed to create contact" };
 }
}

export async function deleteContact(prevState: any, formData: FormData) {
 const schema = z.object({
  id: z.string().min(1),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
 });
 const data = schema.parse({
  id: formData.get("id"),
  firstName: formData.get("firstName"),
  lastName: formData.get("lastName"),
 });

 try {
  await sql`
      DELETE FROM contacts
      WHERE id = ${data.id};
    `;

  const contactRef = doc(db, "contacts", data.id);
  await deleteDoc(contactRef);

  revalidatePath("/");
  return { message: `Deleted contact ${data.firstName} ${data.lastName}` };
 } catch (e) {
  return { message: "Failed to delete contact" };
 }
}
