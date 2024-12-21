'use server';
import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { z } from 'zod';
import { Resend } from 'resend';
import { cookies } from 'next/headers';
import ContactUsNewEmail from '@/components/emails/contact-us-new';
import { redirect } from 'next/navigation';

export async function createContact(formData: FormData) {
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
    name: z.string().min(1),
    company: z.string().min(1),
    website: z.string().url(),
    interest: z.string().min(1),
    projectDescription: z.string().min(1),
    collaborationType: z.string().min(1),
    budget: z.string().min(1),
    email: z.string().email(),
    createdAt: z.instanceof(Timestamp),
  });

  const data = schema.parse({
    name: formData.get('name'),
    company: formData.get('company'),
    website: formData.get('website'),
    interest: formData.get('interest'),
    projectDescription: formData.get('projectDescription'),
    collaborationType: formData.get('collaborationType'),
    budget: formData.get('budget'),
    email: formData.get('email'),
    createdAt: Timestamp.now(),
  });

  try {
    // Use `doc` and `setDoc` to specify the document ID
    const contactDocRef = doc(contactsCollection, timestampId);

    await setDoc(contactDocRef, data);

    await resend.emails.send({
      from: 'no-reply@trackingacademy.com',
      to: data.email,
      cc: ['reactjswebdev@gmail.com', 'analytics@shahzadaalihassan.com'],
      subject: 'Thank you for contacting us!',
      react: ContactUsNewEmail({
        name: data.name,
        company: data.company,
        website: data.website,
        interest: data.interest,
        projectDescription: data.projectDescription,
        collaborationType: data.collaborationType,
        budget: data.budget,
        email: data.email,
        createdAt: data.createdAt,
      }),
    });

    // Store user data in cookies
    (await cookies()).set(
      'user_data',
      JSON.stringify({
        email: data.email,
        name: data.name,
        company: data.company,
      }),
      { httpOnly: true, path: '/', maxAge: 60 * 60 * 24 * 7 },
    ); // Expires in 7 days
  } catch (e) {
    console.error('Failed to create contact or send email', e);
    return { message: 'Failed to create contact' };
  }
  redirect('/contact/book-a-meeting');
}
