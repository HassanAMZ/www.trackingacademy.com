"use server";

import { db } from "@/app/firebase";
import { doc, setDoc } from "firebase/firestore";

interface UserData {
  email: string;
  phone: string;
}

export async function saveUserData(userData: UserData) {
  try {
    // Generate a unique ID for the user (you might want to use a different strategy)
    const userId = `stripe_user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Save to Firebase
    const userRef = doc(db, "stripe_users", userId);
    await setDoc(userRef, {
      email_address: userData.email,
      phone_number: userData.phone,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    });

    return {
      success: true,
      userId,
      message: "User data saved successfully",
    };
  } catch (error) {
    console.error("Error saving user data:", error);
    return {
      success: false,
      error: "Failed to save user data",
    };
  }
}
