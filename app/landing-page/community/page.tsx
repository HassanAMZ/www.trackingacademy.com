"use client";

import { UserAuth } from "@/context/AuthContext";
import { UserProfile } from "@/components/profile/user-profile";
import { SignIn } from "@/components/auth/sign-in";
import { SignUp } from "@/components/auth/sign-up";
import { DiscussionForum } from "@/components/community/discussion-forum";
import Container from "@/components/ui/container";
import Navbar from "@/components/global/navbar";
import React from "react";

export default function RootLayout() {
  const { user } = UserAuth();

  return (
    <React.Fragment>
      <Navbar />
      <Container className="max-w-3xl">
        {user ? (
          <>
            {/* <UserProfile /> */}
            <DiscussionForum />
          </>
        ) : (
          <>
            <SignIn />
            <SignUp />
          </>
        )}
      </Container>
    </React.Fragment>
  );
}
