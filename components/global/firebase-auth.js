'use client';
import { UserAuth } from '@/context/AuthContext';
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import TypographyP from '@/components/ui/typography-p';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export const FirebaseAuth = () => {
  const { user, googleSignIn, facebookSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log('googleSignIn error from FirebaseAuth.js', error);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await facebookSignIn();
    } catch (error) {
      console.log('facebookSignIn error from FirebaseAuth.js', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log('handleSignOut error from FirebaseAuth.js', error);
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
    <section className='py-2'>
      {loading ? null : !user ? (
        <Card className='rounded-t-lg'>
          <CardContent className='flex flex-col items-center gap-2 justify-center h-[30vh] '>
            <TypographyP className='font-medium text-center'>
              Sign up for free to access.
            </TypographyP>
            <div className='flex flex-col w-full items-center gap-2 justify-center'>
              <Button
                onClick={handleSignIn}
                className='min-w-1/3 flex items-center justify-center font-medium'>
                Sign in with Google
              </Button>
              <div className='text-sm gap-6 flex items-center justify-center '>
                <div className='relative h-8 w-8 grayscale pt-4'>
                  <Avatar className='absolute left-0 top-0 z-1'>
                    <AvatarImage
                      src='/images/clients/malik-osama.jfif'
                      alt='@malik-osama'
                    />
                    <AvatarFallback>MO</AvatarFallback>
                  </Avatar>

                  <Avatar className='absolute left-4 top-0 z-2'>
                    <AvatarImage
                      src='/images/clients/philipp-herglotz.jfif'
                      alt='@philipp-herglotz'
                    />
                    <AvatarFallback>PH</AvatarFallback>
                  </Avatar>

                  <Avatar className='absolute left-8 top-0 z-3'>
                    <AvatarImage
                      src='/images/clients/imtiaz-ahmad.jfif'
                      alt='@imtiaz-ahmad'
                    />
                    <AvatarFallback>IA</AvatarFallback>
                  </Avatar>
                </div>
                <TypographyP applyMargin={false} className='pl-6'>
                  900+ Users have Signed up
                </TypographyP>
              </div>
            </div>
          </CardContent>
        </Card>
      ) : (
        <React.Fragment>
          {/* <div className='flex flex-row justify-center items-center h-[20vh] gap-2'>
      <TypographyP>Welcome, {user.displayName}:</TypographyP>
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
