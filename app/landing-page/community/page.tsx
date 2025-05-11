"use client";

import { SocialDiscussionForum } from "@/components/community/discussion-forum";
import Navbar from "@/components/global/navbar";
import AuthenticatedLayout from "@/components/layouts/AuthenticatedLayout";
import React from "react";

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
