"use client";

import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { db } from "@/app/firebase";

interface ProfileCardProps {
  userId: string;
}

export function ProfileCard({ userId }: ProfileCardProps) {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        setProfile(userDoc.data());
      }
    };
    fetchProfile();
  }, [userId]);

  if (!profile) {
    return <div>Loading profile...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{profile.displayName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{profile.bio}</p>
      </CardContent>
    </Card>
  );
}
