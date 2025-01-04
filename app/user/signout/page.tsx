"use client";
import ContainerLayout from "@/components/layouts/ContainerLayout";
import { UserAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";

const Page = () => {
  const { user, googleSignIn, facebookSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log("googleSignIn error from FirebaseAuth.js", error);
    }
  };

  const handleFacebookSignIn = async () => {
    // New function for Facebook Sign In
    try {
      await facebookSignIn();
    } catch (error) {
      console.log("facebookSignIn error from FirebaseAuth.js", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log("handleSignOut error from FirebaseAuth.js", error);
    }
  };
  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);
  return (
    <ContainerLayout>
      {loading ? null : !user ? (
        <div className="flex h-[50vh] flex-col items-center justify-center gap-2 p-2">
          <div className="flex justify-center">
            <p>Signup for Free to view the Code Snippets</p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-2 sm:w-1/2 sm:flex-row">
            <button
              onClick={handleSignIn}
              type="button"
              className="text-complementary inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-2.5 text-center font-medium hover:bg-blue-700 focus:outline-none focus:ring-4"
            >
              <svg
                className="-ml-1 mr-2 h-4 w-4"
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="google"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 488 512"
              >
                <path
                  fill="currentColor"
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                ></path>
              </svg>
              <div> Google</div>
            </button>
          </div>
        </div>
      ) : (
        <React.Fragment>
          <div className="flex h-[20vh] flex-row items-center justify-center gap-2">
            <p>Welcome, {user.displayName}:</p>
            <button
              className="underline hover:cursor-pointer hover:font-semibold"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        </React.Fragment>
      )}
    </ContainerLayout>
  );
};

export default Page;
