'use server';

import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { z } from 'zod';
import { Resend } from 'resend';
import JoinTheTeamEmail from '@/components/emails/join-the-team';
import { cookies } from 'next/headers';

export async function createCareerApplication(prevState: any, formData: FormData) {
  const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

  // Generate a timestamp ID based on the current time
  const timestamp = new Date();
  const timestampId =
    timestamp.getFullYear().toString() +
    (timestamp.getMonth() + 1).toString().padStart(2, '0') +
    timestamp.getDate().toString().padStart(2, '0') +
    timestamp.getHours().toString().padStart(2, '0') +
    timestamp.getMinutes().toString().padStart(2, '0') +
    timestamp.getSeconds().toString().padStart(2, '0');

  const applicationsCollection = collection(db, 'applications');

  const schema = z.object({
    email: z.string().email(),
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    dob: z.string().min(1),
    country: z.string().min(1),
    gender: z.string().min(1),
    city: z.string().min(1),
    postalCode: z.string().min(1),
    linkedinProfile: z.string().url().optional(),
    upworkProfile: z.string().url().optional(),
    phone: z.string().min(1),
    maritalStatus: z.string().min(1),
    degree: z.string().min(1).optional(),
    hasGoodLaptopAndInternet: z.string().min(1),
    position: z.string().min(1),
    currentWorkStatus: z.string().min(1),
    lastJobDesignation: z.string().min(1).optional(),
    businessDevelopmentExperience: z.string().min(1),
    experienceInYears: z.string().min(1),
    lastJobCompanyName: z.string().min(1).optional(),
    lastJobResponsibilities: z.string().min(1).optional(),
    professionalBackground: z.string().min(1),
    mostChallengingDealOrClient: z.string().min(1),
    coverLetter1: z.string().min(1),
    coverLetter2: z.string().min(1),
    coverLetter3: z.string().min(1),
    loomVideo1: z.string().min(1),
    loomVideo2: z.string().min(1),
    loomVideo3: z.string().min(1),
    lastSalaryAndCommission: z.string().min(1),
    expectedSalary: z.string().min(1),
    salaryTargetIn3Years: z.string().min(1),
    futureInFiveYears: z.string().min(1),
    createdAt: z.instanceof(Timestamp),
  });

  const data = schema.parse({
    email: formData.get('email'),
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    dob: formData.get('dob'),
    country: formData.get('country'),
    gender: formData.get('gender'),
    city: formData.get('city'),
    postalCode: formData.get('postalCode'),
    linkedinProfile: formData.get('linkedinProfile'),
    upworkProfile: formData.get('upworkProfile'),
    phone: formData.get('phone'),
    maritalStatus: formData.get('maritalStatus'),
    degree: formData.get('degree'),
    hasGoodLaptopAndInternet: formData.get('hasGoodLaptopAndInternet'),
    position: formData.get('position'),
    currentWorkStatus: formData.get('currentWorkStatus'),
    lastJobDesignation: formData.get('lastJobDesignation'),
    businessDevelopmentExperience: formData.get('businessDevelopmentExperience'),
    experienceInYears: formData.get('experienceInYears'),
    lastJobCompanyName: formData.get('lastJobCompanyName'),
    lastJobResponsibilities: formData.get('lastJobResponsibilities'),
    professionalBackground: formData.get('professionalBackground'),
    mostChallengingDealOrClient: formData.get('mostChallengingDealOrClient'),
    coverLetter1: formData.get('coverLetter1'),
    coverLetter2: formData.get('coverLetter2'),
    coverLetter3: formData.get('coverLetter3'),
    loomVideo1: formData.get('loomVideo1'),
    loomVideo2: formData.get('loomVideo2'),
    loomVideo3: formData.get('loomVideo3'),
    lastSalaryAndCommission: formData.get('lastSalaryAndCommission'),
    expectedSalary: formData.get('expectedSalary'),
    salaryTargetIn3Years: formData.get('salaryTargetIn3Years'),
    futureInFiveYears: formData.get('futureInFiveYears'),

    createdAt: Timestamp.now(),
  });

  try {
    const applicationDocRef = doc(applicationsCollection, timestampId);
    await setDoc(applicationDocRef, data);

    await resend.emails.send({
      from: 'no-reply@trackingacademy.com',
      to: data.email,
      cc: ['reactjswebdev@gmail.com', 'analytics@shahzadaalihassan.com'],
      subject: 'Thank you for your application!',
      react: JoinTheTeamEmail({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        applyingPosition: data.position,
        createdAt: data.createdAt,
      }),
    });

    (await cookies()).set(
      'user_data',
      JSON.stringify({
        email: data.email,
        phone: data.phone,
        address: {
          first_name: data.firstName,
          last_name: data.lastName,
        },
      }),
      { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 },
    );

    return {
      message: `Application submitted by ${data.firstName} ${data.lastName}`,
    };
  } catch (e) {
    console.error('Failed to create application or send email', e);
    return { message: 'Failed to submit application' };
  }
}
