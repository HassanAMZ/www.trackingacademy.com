'use client';

import { Alert, AlertDescription } from '@/components/ui/alert';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { UserAuth } from '@/context/AuthContext';
import { PersonIcon } from '@radix-ui/react-icons';
import { Download, Loader2 } from 'lucide-react';
import { useEffect, useState } from 'react';
import Container from '../ui/container';

interface AuthError {
  message: string;
  code?: string;
}

export const FirebaseAuth = () => {
  const { user, googleSignIn, facebookSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');

  const handleAuth = async (provider: 'google' | 'facebook') => {
    try {
      setError('');
      if (provider === 'google') {
        await googleSignIn();
      } else if (provider === 'facebook') {
        await facebookSignIn();
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message || 'Authentication failed. Please try again.');
      console.error(`${provider} sign in error:`, error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      const authError = error as AuthError;
      console.error('Sign out error:', authError);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  if (loading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (user) {
    return <>{/* Commented out user profile card as per original */}</>;
  }

  return (
    <Container className="grid place-content-center min-h-[50vh]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Get Access to Resources</CardTitle>
          <CardDescription>
            Sign in to download code snippets and resources from the video
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="flex items-center justify-center p-4 bg-muted/50 rounded-lg">
            <Download className="h-6 w-6 mr-2 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              Access code examples, starter files, and other resources
            </p>
          </div>

          <Button onClick={() => handleAuth('google')} className="w-full" variant="outline">
            <PersonIcon className="mr-2 h-4 w-4" />
            Sign in with Google to Download
          </Button>
          <Button onClick={() => handleAuth('facebook')} className="w-full" variant="outline">
            <PersonIcon className="mr-2 h-4 w-4" />
            Continue with Facebook
          </Button>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">Quick and Free</span>
            </div>
          </div>

          <div className="space-y-3 max-w-3xl">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <Avatar>
                  <AvatarImage src="/images/clients/malik-osama.jfif" alt="@malik-osama" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage
                    src="/images/clients/philipp-herglotz.jfif"
                    alt="@philipp-herglotz"
                  />
                  <AvatarFallback>PH</AvatarFallback>
                </Avatar>
                <Avatar>
                  <AvatarImage src="/images/clients/imtiaz-ahmad.jfif" alt="@imtiaz-ahmad" />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-muted-foreground">2,000+ downloads</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Container>
  );
};

export default FirebaseAuth;
