// components/auth/FirebaseAuth.tsx
"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { PersonIcon } from "@radix-ui/react-icons";
import { CheckCircle, Download, GithubIcon, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "../ui/container";

interface AuthError {
  message: string;
  code?: string;
}

export const FirebaseAuth = () => {
  const { user, googleSignIn, githubSignIn, facebookSignIn, emailSignIn, emailSignUp, logOut } =
    useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuth = async (
    provider: "google" | "github" | "facebook" | "email",
    isSignUp = false,
  ) => {
    try {
      setError("");
      if (provider === "google") {
        await googleSignIn();
      } else if (provider === "github") {
        await githubSignIn();
      } else if (provider === "facebook") {
        await facebookSignIn();
      } else if (provider === "email") {
        if (isSignUp) {
          await emailSignUp(email, password);
        } else {
          await emailSignIn(email, password);
        }
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message || "Authentication failed. Please try again.");
      console.error(`${provider} sign in error:`, error);
    }
  };

  const handleSubmit = async (e: React.FormEvent, isSignUp: boolean) => {
    e.preventDefault();
    await handleAuth("email", isSignUp);
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      const authError = error as AuthError;
      console.error("Sign out error:", authError);
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
        <Loader2 className="text-primary h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (user) {
    return (
      <>
        {/* <Container>
          <Card className="w-full max-w-md mx-auto">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Welcome, {user.email}</CardTitle>
              <CardDescription>You are now signed in</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleSignOut} className="w-full" variant="outline">
                Sign Out
              </Button>
            </CardContent>
          </Card>
        </Container> */}
      </>
    );
  }

  return (
    <Container className="grid min-h-[50vh] place-content-center">
      <div className="bg-card grid place-content-center items-center justify-center gap-6 rounded-xl border p-8 md:grid-cols-2">
        {/* Left Column: Main CTA */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Free Instant Access to Code Resources</h3>
          <p className="text-muted-foreground">
            Continue reading to access the complete tutorial, including:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary h-4 w-4" />
              <span className="text-sm">Full source code and examples</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary h-4 w-4" />
              <span className="text-sm">Step-by-step implementation guide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-primary h-4 w-4" />
              <span className="text-sm">Starter templates and configurations</span>
            </div>
          </div>
        </div>{" "}
        {/* Right Column: Sign In */}
        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">{/* Get Free Access to Resources */}</CardTitle>
            <CardDescription>
              {/* Sign in to download code snippets and resources from the video */}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}{" "}
            <div className="bg-muted/50 flex items-center justify-center rounded-lg p-4">
              <Download className="text-muted-foreground mr-2 h-6 w-6" />
              <p className="text-muted-foreground text-sm">
                Access code examples, starter files, and other resources
              </p>
            </div>{" "}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background text-muted-foreground px-2"> continue with</span>
              </div>
            </div>{" "}
            <div className="space-y-2">
              <Button onClick={() => handleAuth("google")} className="w-full">
                <PersonIcon className="mr-2 h-4 w-4" />
                Continue with Google
              </Button>
              <Button onClick={() => handleAuth("github")} className="w-full" variant="outline">
                <GithubIcon className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>{" "}
            <div className="flex max-w-3xl items-center justify-between space-y-3 pb-5">
              <div className="flex">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/clients/malik-osama.png" alt="@malik-osama" />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/clients/philipp-herglotz.png" alt="@philipp-herglotz" />
                  <AvatarFallback>PH</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/clients/imtiaz-ahmad.png" alt="@imtiaz-ahmad" />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-muted-foreground text-sm">2,700+ Signups</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default FirebaseAuth;
