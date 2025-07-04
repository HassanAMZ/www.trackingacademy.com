// app/context/AuthContextWrapper.tsx
"use client";

import { ReactNode } from "react";
import dynamic from "next/dynamic";

// Dynamically import AuthContextProvider with no SSR
const AuthContextProvider = dynamic(
  () =>
    import("./AuthContext").then((mod) => ({
      default: mod.AuthContextProvider,
    })),
  {
    ssr: false,
    loading: () => null, // No loading spinner to avoid layout shift
  },
);

interface AuthWrapperProps {
  children: ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  return <AuthContextProvider>{children}</AuthContextProvider>;
}
