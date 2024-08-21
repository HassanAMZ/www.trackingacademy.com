"use server";

import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/app/firebase";
import { z } from "zod";
import { Resend } from "resend";
import JoinTheTeamEmail from "@/components/emails/join-the-team";
import { cookies } from "next/headers";

export async function createCareerApplication(
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

  const applicationsCollection = collection(db, "applications");

  const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    dateOfBirth: z.string().min(1),
    country: z.string().min(1),
    gender: z.string().min(1),
    city: z.string().min(1),
    postalCode: z.string().min(1),
    linkedIn: z.string().url().optional(),
    upwork: z.string().url().optional(),
    phone: z.string().min(1),
    email: z.string().email(),
    maritalStatus: z.string().min(1),
    degree: z.string().min(1).optional(),
    laptopInternet: z.string().min(1),
    applyingPosition: z.string().min(1),
    workStatus: z.string().min(1),
    lastJobDesignation: z.string().min(1).optional(),
    businessDevelopmentExperience: z.string().min(1),
    experienceYears: z.string().min(1),
    lastCompanyName: z.string().min(1).optional(),
    jobResponsibilities: z.string().min(1).optional(),
    professionalBackground: z.string().min(1),
    challengingDeal: z.string().min(1),
    profileLinks: z.string().url().optional(),
    salary: z.string().min(1).optional(),
    expectedSalary: z.string().min(1),
    salaryTarget: z.string().min(1),
    fiveYearPlan: z.string().min(1),
    coverLetter: z.string().min(1),
    loomVideo: z.string().url().min(1),
    createdAt: z.instanceof(Timestamp),
  });

  const data = schema.parse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    dateOfBirth: formData.get("dateOfBirth"),
    country: formData.get("country"),
    gender: formData.get("gender"),
    city: formData.get("city"),
    postalCode: formData.get("postalCode"),
    linkedIn: formData.get("linkedIn"),
    upwork: formData.get("upwork"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    maritalStatus: formData.get("maritalStatus"),
    degree: formData.get("degree"),
    laptopInternet: formData.get("laptopInternet"),
    applyingPosition: formData.get("applyingPosition"),
    workStatus: formData.get("workStatus"),
    lastJobDesignation: formData.get("lastJobDesignation"),
    businessDevelopmentExperience: formData.get(
      "businessDevelopmentExperience"
    ),
    experienceYears: formData.get("experienceYears"),
    lastCompanyName: formData.get("lastCompanyName"),
    jobResponsibilities: formData.get("jobResponsibilities"),
    professionalBackground: formData.get("professionalBackground"),
    challengingDeal: formData.get("challengingDeal"),
    profileLinks: formData.get("profileLinks"),
    salary: formData.get("salary"),
    expectedSalary: formData.get("expectedSalary"),
    salaryTarget: formData.get("salaryTarget"),
    fiveYearPlan: formData.get("fiveYearPlan"),
    coverLetter: formData.get("coverLetter"),
    loomVideo: formData.get("loomVideo"),
    createdAt: Timestamp.now(),
  });

  try {
    const applicationDocRef = doc(applicationsCollection, timestampId);
    await setDoc(applicationDocRef, data);

    await resend.emails.send({
      from: "no-reply@trackingacademy.com",
      to: data.email,
      cc: ["reactjswebdev@gmail.com", "analytics@shahzadaalihassan.com"],
      subject: "Thank you for your application!",
      react: JoinTheTeamEmail({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        gender: data.gender, // Ensure all required fields are passed
        applyingPosition: data.applyingPosition,
        professionalBackground: data.professionalBackground,
        challengingDeal: data.challengingDeal,
        coverLetter: data.coverLetter,
        loomVideo: data.loomVideo, // Add missing properties
        expectedSalary: data.expectedSalary,
        salaryTarget: data.salaryTarget,
        fiveYearPlan: data.fiveYearPlan,
        createdAt: data.createdAt,
      }),
    });

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
    );

    return {
      message: `Application submitted by ${data.firstName} ${data.lastName}`,
    };
  } catch (e) {
    console.error("Failed to create application or send email", e);
    return { message: "Failed to submit application" };
  }
}
