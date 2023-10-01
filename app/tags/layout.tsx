import BlogLayout from "@/layouts/BlogLayout";
import { ReactNode } from "react";
import React, { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";

export const metadata = {
 title: "Tags Archieve- ShahzadaAliHassan",
 description: `Blog for Web Analysts and Marketing People`,
 openGraph: {
  images: ["/images/social-sharing.png"],
 },
};

export default function Layout({ children }: { children: ReactNode }) {
 //  const { user } = UserAuth();
 //  const [loading, setLoading] = useState(true);

 //  useEffect(() => {
 //   const checkAuthentication = async () => {
 //    await new Promise((resolve) => setTimeout(resolve, 50));
 //    setLoading(false);
 //   };
 //   checkAuthentication();
 //  }, [user]);

 return (
  <BlogLayout>
   <React.Fragment>{children}</React.Fragment>
   {/* Uncomment this section for adding firebase auth */}
   {/* {loading ? (
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
    )} */}
  </BlogLayout>
 );
}
