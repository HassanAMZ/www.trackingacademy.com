"use client";
import { UserAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import ContainerLayout from "../layouts/ContainerLayout";

export const FirebaseAuth = () => {
 const { user, googleSignIn, logOut } = UserAuth();
 const [loading, setLoading] = useState(true);
 const handleSignIn = async () => {
  try {
   await googleSignIn();
  } catch (error) {
   console.log(error);
  }
 };

 const handleSignOut = async () => {
  try {
   await logOut();
  } catch (error) {
   console.log(error);
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
  <div className='sm:bg-gray-900 sm:bg-opacity-5 sm:shadow-md rounded-md p-2'>
   {loading ? null : !user ? (
    <div className='flex flex-col items-center gap-2  h-[50vh] justify-center'>
     <p className='flex justify-center'>
      You must be logged in to view this page
     </p>
     <div className='flex flex-row items-center gap-2   justify-center'>
      <button
       onClick={handleSignIn}
       className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple bg-purple-50 border-2 border-purple-50cursor-pointer'>
       Login
      </button>
      <button
       onClick={handleSignIn}
       className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple bg-purple-50 border-2 border-purple-50cursor-pointer'>
       Sign up
      </button>
     </div>
    </div>
   ) : (
    <div className='flex flex-col justify-center items-center h-[20vh] gap-2'>
     <p>Welcome, {user.displayName}</p>
     <button
      className='rounded-md px-3.5 py-2.5 text-sm font-semibold shadow-md'
      onClick={handleSignOut}>
      Sign out
     </button>
    </div>
   )}
  </div>
 );
};
