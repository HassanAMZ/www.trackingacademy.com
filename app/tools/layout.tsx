"use client";

import BlogLayout from "@/components/blog/BlogLayout";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { FirebaseAuth } from "@/components/global/FirebaseAuth";
import ContainerLayout from "@/components/layouts/ContainerLayout";

export default function Layout({ children }: { children: ReactNode }) {
 return <ContainerLayout>{children}</ContainerLayout>;
}
