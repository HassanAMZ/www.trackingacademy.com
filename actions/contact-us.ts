"use server";

import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { z } from "zod";
import { Resend } from "resend";
import ContactUsEmail from "@/components/emails/email-template";
import { cookies } from "next/headers";

export async function createContact(prevState: any, formData: FormData) {
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
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    websiteLink: z.string().url(),
    integrationType: z.string().min(1),
    projectDescription: z.string().min(1),
    budget: z.string().min(1),
    currentSetup: z.string().min(1),
    meetingPreference: z.string().min(1),
    monthlyVisitors: z.string().min(1),
    businessModel: z.string().min(1),
    topMarketingChannels: z.string().min(1),
    currentChallenges: z.string().min(1),
    conversionRateChanges: z.string().optional(),
    tagManagementSystem: z.string().optional(),
    trackingGoal: z.string().optional(),
    specificRequirements: z.string().optional(),
    implementationTimeline: z.string().optional(),
    createdAt: z.instanceof(Timestamp),
  });

  const data = schema.parse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    websiteLink: formData.get("websiteLink"),
    integrationType: formData.get("integrationType"),
    projectDescription: formData.get("projectDescription"),
    budget: formData.get("budget"),
    currentSetup: formData.get("currentSetup"),
    meetingPreference: formData.get("meetingPreference"),
    monthlyVisitors: formData.get("monthlyVisitors"),
    businessModel: formData.get("businessModel"),
    topMarketingChannels: formData.get("topMarketingChannels"),
    currentChallenges: formData.get("currentChallenges"),
    conversionRateChanges: formData.get("conversionRateChanges"),
    tagManagementSystem: formData.get("tagManagementSystem"),
    trackingGoal: formData.get("trackingGoal"),
    specificRequirements: formData.get("specificRequirements"),
    implementationTimeline: formData.get("implementationTimeline"),
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
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        websiteLink: data.websiteLink,
        integrationType: data.integrationType,
        projectDescription: data.projectDescription,
        budget: data.budget,
        currentSetup: data.currentSetup,
        meetingPreference: data.meetingPreference,
        monthlyVisitors: data.monthlyVisitors,
        businessModel: data.businessModel,
        topMarketingChannels: data.topMarketingChannels,
        currentChallenges: data.currentChallenges,
        conversionRateChanges: data.conversionRateChanges,
        tagManagementSystem: data.tagManagementSystem,
        trackingGoal: data.trackingGoal,
        specificRequirements: data.specificRequirements,
        implementationTimeline: data.implementationTimeline,
        createdAt: data.createdAt,
      }),
    });

    // Store user data in cookies
    cookies().set(
      "user_data",
      JSON.stringify({
        email: data.email,
        phone: data.phone,
        address: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
      }),
      { httpOnly: true, path: "/", maxAge: 60 * 60 * 24 * 7 }
    ); // Expires in 7 days

    return { message: `Added contact ${data.firstName} ${data.lastName}` };
  } catch (e) {
    console.error("Failed to create contact or send email", e);
    return { message: "Failed to create contact" };
  }
}
