"use server";
import { db } from "@/app/firebase";
import ContactUsEmail from "@/components/emails/contact-us";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

export async function createContact(formData: FormData) {
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

  const contactsCollection = collection(db, "contacts");

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

  const data = schema.parse({
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

  try {
    // Use `doc` and `setDoc` to specify the document ID
    const contactDocRef = doc(contactsCollection, timestampId);

    await setDoc(contactDocRef, data);

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
      subject: "Thank you for contacting us!",
      react: ContactUsEmail({
        name: data.name,
        roleType: data.roleType,
        website: data.website,
        interest: data.interest,
        projectDescription: data.projectDescription,
        budget: data.budget,
        email: data.email,
        phone: data.phone,
        createdAt: data.createdAt,
      }),
    });

    // Store user data in cookies
    (await cookies()).set(
      "user_data",
      JSON.stringify({
        ...data,
      }),
      { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 365 },
    );
  } catch (e) {
    console.error("Failed to create contact or send email", e);
    return { message: "Failed to create contact" };
  }
  redirect("/contact/book-a-meeting");
}
