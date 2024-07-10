'use server';

import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { z } from 'zod';
import { Resend } from 'resend';
import ContactUsEmail from '@/components/emails/email-template';
import { cookies } from 'next/headers';

export async function createContact(prevState: any, formData: FormData) {
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

 const contactsCollection = collection(db, 'contacts');

 const schema = z.object({
  firstName: z.string().min(1, 'First name must contain at least 1 character'),
  lastName: z.string().min(1, 'Last name must contain at least 1 character'),
  companyName: z.string().optional(),
  companySize: z.string().optional(),
  jobTitle: z.string().optional(),
  email: z.string().email('Invalid email format'),
  phone: z.string().min(1, 'Phone must contain at least 1 character'),
  websiteLink: z.string().url('Invalid URL format'),
  integrationType: z
   .string()
   .min(1, 'Integration type must contain at least 1 character'),
  budget: z.string().min(1, 'Budget must contain at least 1 character'),
  projectDescription: z
   .string()
   .min(1, 'Project description must contain at least 1 character'),
  currentSetup: z
   .string()
   .min(1, 'Current setup must contain at least 1 character'),
  meetingPreference: z.string().optional(),
  monthlyVisitors: z
   .string()
   .min(1, 'Monthly visitors must contain at least 1 character'),
  businessModel: z
   .string()
   .min(1, 'Business model must contain at least 1 character'),
  topMarketingChannels: z
   .string()
   .min(1, 'Top marketing channels must contain at least 1 character'),
  currentChallenges: z
   .string()
   .min(1, 'Current challenges must contain at least 1 character'),
  conversionRateChanges: z.string().optional(),
  tagManagementSystem: z.string().optional(),
  trackingGoal: z.string().optional(),
  specificRequirements: z.string().optional(),
  implementationTimeline: z.string().optional(),
  createdAt: z.instanceof(Timestamp),
 });

 try {
  const data = schema.parse(formData);

  // Use `doc` and `setDoc` to specify the document ID
  const contactDocRef = doc(contactsCollection, timestampId);
  await setDoc(contactDocRef, data);

  await resend.emails.send({
   from: 'no-reply@trackingacademy.com',
   to: data.email,
   cc: ['reactjswebdev@gmail.com', 'analytics@shahzadaalihassan.com'],
   subject: 'Thank you for contacting us!',
   react: ContactUsEmail(data),
  });

  // Store user data in cookies
  cookies().set(
   'user_data',
   JSON.stringify({
    email: data.email,
    phone: data.phone,
    address: {
     first_name: data.firstName,
     last_name: data.lastName,
    },
   }),
   { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 }
  ); // Expires in 7 days

  return { message: `Added contact ${data.firstName} ${data.lastName}` };
 } catch (e) {
  console.error('Failed to create contact or send email', e);
  return { message: 'Failed to create contact' };
 }
}
