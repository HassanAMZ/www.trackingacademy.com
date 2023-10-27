"use client";
import { UserAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import { Paragraphsm } from "@/components/typography/Heading";
import {
 GTMSignInFailedEvent,
 GTMSignInSuccessEvent,
 GTMSignOutEvent,
} from "@/components/analytics/GTMEvents";

export const FirebaseAuth = () => {
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
   <GTMSignOutEvent user={user} />;
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
  <div className='backgroundOverlay p-2'>
   {loading ? null : !user ? (
    <div className='flex flex-col items-center gap-2  h-[50vh] justify-center'>
     <div className='flex justify-center'>
      <Paragraphsm>Sign in to view the full content.</Paragraphsm>
     </div>
     <div className='flex flex-col sm:flex-row w-full sm:w-1/2 items-center gap-2 justify-center'>
      <button
       onClick={handleSignIn}
       type='button'
       className='text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-md text-base px-5 py-2.5 text-center inline-flex items-center justify-center '>
       <svg
        className='mr-2 -ml-1 w-4 h-4'
        aria-hidden='true'
        focusable='false'
        data-prefix='fab'
        data-icon='google'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 488 512'>
        <path
         fill='currentColor'
         d='M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z'></path>
       </svg>
       <div> Google</div>
      </button>
      {/* <button
       onClick={handleFacebookSignIn} // New Facebook Sign In button
       type='button'
       className='text-white w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none font-medium rounded-md text-base px-5 py-2.5 text-center inline-flex items-center justify-center '>
       <svg
        className='mr-2 -ml-1 w-4 h-4'
        aria-hidden='true'
        focusable='false'
        data-prefix='fab'
        data-icon='facebook-f'
        role='img'
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 320 512'>
        <path
         fill='currentColor'
         d='M279.14 288l14.22-92.66h-88.91v-59.63c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z'></path>
       </svg>
       <div> Facebook</div>
      </button> */}
     </div>
    </div>
   ) : (
    <div className='flex flex-row justify-center items-center h-[20vh] gap-2'>
     <p>Welcome, {user.displayName}:</p>
     <button
      className='underline hover:font-semibold hover:cursor-pointer'
      onClick={handleSignOut}>
      Sign out
     </button>
    </div>
   )}
  </div>
 );
};
