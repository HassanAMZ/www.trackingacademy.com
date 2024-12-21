'use server';

import { collection, doc, setDoc, Timestamp } from 'firebase/firestore';
import { db } from '@/app/firebase';
import { z } from 'zod';
import { Resend } from 'resend';
import { cookies } from 'next/headers';
import WaitListEmail from '@/components/emails/enroll-now';

export async function createWaitlist(prevState: any, formData: FormData) {
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

  const contactsCollection = collection(db, 'waitlist');

  const schema = z.object({
    firstName: z.string().min(1),
    lastName: z.string().min(1),
    email: z.string().email(),
    phone: z.string().min(1),
    currentOccupation: z.string().min(1),
    interestedCourse: z.string().min(1),
    skills: z.string().min(1),
    referralSource: z.string().min(1),
    education: z.string().min(1),
    learningGoals: z.string().min(1),
    preferredLearningStyle: z.string().min(1),
    budget: z.string().min(1),
    availability: z.string().min(1),
    courseDurationPreference: z.string().min(1),
    experienceLevel: z.string().min(1),
    languagePreference: z.string().min(1),
    courseFormatPreference: z.string().min(1),
    additionalComments: z.string().optional(),
    expectations: z.string().min(1),
    futureGoals: z.string().min(1),
    createdAt: z.instanceof(Timestamp),
  });

  const data = schema.parse({
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    currentOccupation: formData.get('currentOccupation'),
    interestedCourse: formData.get('interestedCourse'),
    skills: formData.get('skills'),
    referralSource: formData.get('referralSource'),
    education: formData.get('education'),
    learningGoals: formData.get('learningGoals'),
    preferredLearningStyle: formData.get('preferredLearningStyle'),
    budget: formData.get('budget'),
    availability: formData.get('availability'),
    courseDurationPreference: formData.get('courseDurationPreference'),
    experienceLevel: formData.get('experienceLevel'),
    languagePreference: formData.get('languagePreference'),
    courseFormatPreference: formData.get('courseFormatPreference'),
    additionalComments: formData.get('additionalComments'),
    expectations: formData.get('expectations'),
    futureGoals: formData.get('futureGoals'),
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
      react: WaitListEmail({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        currentOccupation: data.currentOccupation,
        interestedCourse: data.interestedCourse,
        skills: data.skills,
        referralSource: data.referralSource,
        education: data.education,
        learningGoals: data.learningGoals,
        preferredLearningStyle: data.preferredLearningStyle,
        budget: data.budget,
        availability: data.availability,
        courseDurationPreference: data.courseDurationPreference,
        experienceLevel: data.experienceLevel,
        languagePreference: data.languagePreference,
        courseFormatPreference: data.courseFormatPreference,
        additionalComments: data.additionalComments,
        expectations: data.expectations,
        futureGoals: data.futureGoals,
        createdAt: data.createdAt,
      }),
    });

    // Store user data in cookies
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
    ); // Expires in 7 days

    return { message: `Added contact ${data.firstName} ${data.lastName}` };
  } catch (e) {
    console.error('Failed to create contact or send email', e);
    return { message: 'Failed to create contact' };
  }
}
