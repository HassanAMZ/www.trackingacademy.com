"use client";

import BlogLayout from "@/layouts/BlogLayout";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import { FirebaseAuth } from "@/components/global/FirebaseAuth";

export default function Layout({ children }: { children: ReactNode }) {
 const { user } = UserAuth();
 const [loading, setLoading] = useState(true);

 useEffect(() => {
  const checkAuthentication = async () => {
   await new Promise((resolve) => setTimeout(resolve, 50));
   setLoading(false);
  };
  checkAuthentication();
 }, [user]);

 return (
  <>
   <BlogLayout>
    {loading ? (
     <h3>Authentication Page is Loading</h3>
    ) : user ? (
     <div>
      <React.Fragment>{children}</React.Fragment>
      <section className='py-4'>
       <FirebaseAuth />
      </section>
     </div>
    ) : (
     <React.Fragment>
      <FirebaseAuth />
     </React.Fragment>
    )}
   </BlogLayout>
  </>
 );
}
