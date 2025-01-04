// components/auth/FirebaseAuth.tsx
"use client";

import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { UserAuth } from "@/context/AuthContext";
import { PersonIcon } from "@radix-ui/react-icons";
import {
  ArrowRight,
  CheckCircle,
  CircleCheck,
  CircleCheckIcon,
  Download,
  Loader2,
} from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../ui/container";

interface AuthError {
  message: string;
  code?: string;
}

export const FirebaseAuth = () => {
  const {
    user,
    googleSignIn,
    facebookSignIn,
    emailSignIn,
    emailSignUp,
    logOut,
  } = UserAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleAuth = async (
    provider: "google" | "facebook" | "email",
    isSignUp = false,
  ) => {
    try {
      setError("");
      if (provider === "google") {
        await googleSignIn();
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
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
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
      <div className="grid place-content-center items-center justify-center gap-6 rounded-xl border bg-card p-8 md:grid-cols-2">
        {/* Left Column: Main CTA */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Free Instant Access to Code Resources
          </h3>
          <p className="text-muted-foreground">
            Continue reading to access the complete tutorial, including:
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">Full source code and examples</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">Step-by-step implementation guide</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4 text-primary" />
              <span className="text-sm">
                Starter templates and configurations
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Sign In */}

        <Card className="w-full">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">
              {/* Get Free Access to Resources */}
            </CardTitle>
            <CardDescription>
              {/* Sign in to download code snippets and resources from the video */}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="flex items-center justify-center rounded-lg bg-muted/50 p-4">
              <Download className="mr-2 h-6 w-6 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">
                Access code examples, starter files, and other resources
              </p>
            </div>

            {/* 
          <Tabs defaultValue="signin" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">Sign In</TabsTrigger>
              <TabsTrigger value="signup">Sign Up</TabsTrigger>
            </TabsList>

            <TabsContent value="signin">
              <form onSubmit={(e) => handleSubmit(e, false)} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign In
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="signup">
              <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4">
                <div className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </form>
            </TabsContent>
          </Tabs> */}

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  {" "}
                  continue with
                </span>
              </div>
            </div>

            <Button onClick={() => handleAuth("google")} className="w-full">
              <PersonIcon className="mr-2 h-4 w-4" />
              Continue with Google
            </Button>
            {/* <Button onClick={() => handleAuth('facebook')} className="w-full" variant="outline">
            <PersonIcon className="mr-2 h-4 w-4" />
            Continue with Facebook
          </Button> */}

            <div className="flex max-w-3xl items-center justify-between space-y-3 pb-5">
              <div className="flex">
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="/images/clients/malik-osama.jfif"
                    alt="@malik-osama"
                  />
                  <AvatarFallback>MO</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="/images/clients/philipp-herglotz.jfif"
                    alt="@philipp-herglotz"
                  />
                  <AvatarFallback>PH</AvatarFallback>
                </Avatar>
                <Avatar className="h-10 w-10">
                  <AvatarImage
                    src="/images/clients/imtiaz-ahmad.jfif"
                    alt="@imtiaz-ahmad"
                  />
                  <AvatarFallback>IA</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-sm text-muted-foreground">2,000+ Signups</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
};

export default FirebaseAuth;
