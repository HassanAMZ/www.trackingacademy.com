"use server";
import { db } from "@/app/firebase";
import ContactUsEmail from "@/components/emails/contact-us";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Resend } from "resend";
import { z } from "zod";

// Performance monitoring helper
const timeLog = async (name: string, fn: () => Promise<any>) => {
  const start = performance.now();
  const result = await fn();
  const end = performance.now();
  console.log(`${name} took ${(end - start).toFixed(2)}ms`);
  return result;
};

export async function createContact(formData: FormData) {
  const overallStart = performance.now();

  // Initialize services
  const initStart = performance.now();
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);
  console.log(
    `Resend initialization took ${(performance.now() - initStart).toFixed(2)}ms`,
  );

  // Generate timestamp ID
  const timestampStart = performance.now();
  const timestamp = new Date();
  const timestampId =
    timestamp.getFullYear().toString() +
    (timestamp.getMonth() + 1).toString().padStart(2, "0") +
    timestamp.getDate().toString().padStart(2, "0") +
    timestamp.getHours().toString().padStart(2, "0") +
    timestamp.getMinutes().toString().padStart(2, "0") +
    timestamp.getSeconds().toString().padStart(2, "0");
  console.log(
    `Timestamp generation took ${(performance.now() - timestampStart).toFixed(2)}ms`,
  );

  const contactsCollection = collection(db, "contacts");

  // Data validation
  const validationStart = performance.now();
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
  console.log(
    `Data validation took ${(performance.now() - validationStart).toFixed(2)}ms`,
  );

  try {
    // Firebase write
    const writeStart = performance.now();
    const contactDocRef = doc(contactsCollection, timestampId);
    await setDoc(contactDocRef, data);
    console.log(
      `Firebase write took ${(performance.now() - writeStart).toFixed(2)}ms`,
    );

    // Email sending
    const emailStart = performance.now();
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
    console.log(
      `Email sending took ${(performance.now() - emailStart).toFixed(2)}ms`,
    );

    // Cookie setting
    const cookieStart = performance.now();
    (await cookies()).set(
      "user_data",
      JSON.stringify({
        ...data,
      }),
      { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 365 },
    );
    console.log(
      `Cookie setting took ${(performance.now() - cookieStart).toFixed(2)}ms`,
    );
  } catch (e) {
    console.error("Failed to create contact or send email", e);
    return { message: "Failed to create contact" };
  }

  const overallEnd = performance.now();
  console.log(
    `Total execution time: ${(overallEnd - overallStart).toFixed(2)}ms`,
  );

  redirect("/contact/book-a-meeting");
}
