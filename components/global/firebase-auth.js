"use client";
import { UserAuth } from "@/context/AuthContext";
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Text from "@/components/ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    <section className="py-2">
      {loading ? null : !user ? (
        <Card className="rounded-t-lg bg-primary">
          <CardContent className="flex h-[30vh] flex-col items-center justify-center gap-2">
            <Text
              as="p"

              className="text-center font-medium text-primary-foreground"
            >
              Sign up for free to access.
            </Text>
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <Button
                variant={"secondary"}
                onClick={handleSignIn}
                className="min-w-1/3 flex items-center justify-center font-medium"
              >
                Sign in with Google
              </Button>
              <div className="flex items-center justify-center gap-6 text-sm">
                <div className="relative h-8 w-8 pt-4">
                  <Avatar className="z-1 absolute left-0 top-0">
                    <AvatarImage
                      src="/images/clients/malik-osama.jfif"
                      alt="@malik-osama"
                    />
                    <AvatarFallback>MO</AvatarFallback>
                  </Avatar>

                  <Avatar className="z-2 absolute left-4 top-0">
                    <AvatarImage
                      src="/images/clients/philipp-herglotz.jfif"
                      alt="@philipp-herglotz"
                    />
                    <AvatarFallback>PH</AvatarFallback>
                  </Avatar>

                  <Avatar className="z-3 absolute left-8 top-0">
                    <AvatarImage
                      src="/images/clients/imtiaz-ahmad.jfif"
                      alt="@imtiaz-ahmad"
                    />
                    <AvatarFallback>IA</AvatarFallback>
                  </Avatar>
                </div>
                <Text
                  as="p"

                  applyMargin={false}
                  className="pl-4 font-medium text-primary-foreground"
                >
                  900+ Users have Signed up
                </Text>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <React.Fragment>
          {/* <div className='flex flex-row justify-center items-center h-[20vh] gap-2'>
      <Text as="p" variant="bodyMd" >Welcome, {user.displayName}:</Text >
      <Button
       className='underline hover:font-semibold hover:cursor-pointer'
       onClick={handleSignOut}>
       Sign out
      </Button>
     </div> */}
        </React.Fragment>
      )}
    </section>
  );
};
