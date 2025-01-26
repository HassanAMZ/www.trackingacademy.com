"use client";

import Navbar from "@/components/global/navbar";
import React from "react";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import { SocialDiscussionForum } from "@/components/community/discussion-forum";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <AuthenticatedLayout>
        <SocialDiscussionForum />
      </AuthenticatedLayout>
    </React.Fragment>
  );
}
