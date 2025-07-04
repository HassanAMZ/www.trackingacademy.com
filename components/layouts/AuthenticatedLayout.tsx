"use client";

import React, { ReactNode, Suspense, useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { FirebaseAuth } from "@/components/global/firebase-auth";
import { FirebaseAuthSkeleton } from "../skeleton/FirebaseAuthSkeleton";

interface AuthenticatedLayoutProps {
  children: ReactNode;
}

const AuthenticatedLayout: React.FC<AuthenticatedLayoutProps> = ({ children }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <Suspense fallback={<FirebaseAuthSkeleton />}>
      {loading ? (
        <FirebaseAuthSkeleton />
      ) : user ? (
        <div>
          <React.Fragment>{children}</React.Fragment>
          <section className="pt-2">
            <FirebaseAuth />
          </section>
        </div>
      ) : (
        <React.Fragment>
          <FirebaseAuth />
        </React.Fragment>
      )}
    </Suspense>
  );
};

export default AuthenticatedLayout;
