"use client";

import { AvatarGroup } from "@/components/animate-ui/avatar-group";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";
import { caseStudies } from "@/data/case-studies";
import {
  CheckCircle,
  Code,
  Download,
  FileText,
  GithubIcon,
  Loader2,
  Mail,
  Play,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Container from "../ui/container";

interface AuthError {
  message: string;
  code?: string;
}

interface FirebaseAuthProps {
  darkMode?: boolean;
}

const FirebaseAuth: React.FC<FirebaseAuthProps> = ({ darkMode = true }) => {
  const { user, googleSignIn, githubSignIn, logOut } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");

  const handleAuth = async (provider: "google" | "github") => {
    try {
      setError("");
      if (provider === "google") {
        await googleSignIn();
      } else if (provider === "github") {
        await githubSignIn();
      }
    } catch (error) {
      const authError = error as AuthError;
      setError(authError.message || "Authentication failed. Please try again.");
      console.error(`${provider} sign in error:`, error);
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
    return null;
  }

  const features = [
    {
      icon: Code,
      title: "Source Code",
      description: "Complete working examples and implementations",
      color: "text-blue-600",
      bgColor: "bg-blue-100 dark:bg-blue-900/20",
    },
    {
      icon: FileText,
      title: "Step-by-Step Guide",
      description: "Detailed implementation walkthrough",
      color: "text-green-600",
      bgColor: "bg-green-100 dark:bg-green-900/20",
    },
    {
      icon: Download,
      title: "Starter Templates",
      description: "Ready-to-use configurations and files",
      color: "text-purple-600",
      bgColor: "bg-purple-100 dark:bg-purple-900/20",
    },
    {
      icon: Mail,
      title: "Weekly Newsletter",
      description: "Latest tracking tips and industry updates",
      color: "text-orange-600",
      bgColor: "bg-orange-100 dark:bg-orange-900/20",
    },
    {
      icon: Play,
      title: "YouTube Video Updates",
      description: "New tutorials and case study videos",
      color: "text-red-600",
      bgColor: "bg-red-100 dark:bg-red-900/20",
    },
  ];

  return (
    <Container
      className={`grid min-h-[50vh] w-full place-content-center px-0 ${darkMode ? "dark" : ""}`}
    >
      <div className="grid w-full place-content-center items-center justify-center rounded-xl border bg-card/90 shadow-lg sm:p-8 md:grid-cols-2 md:gap-8">
        {/* Left Column: Information */}
        <div className="hidden space-y-6 md:block">
          <div className="space-y-4">
            <h2 className="text-xl leading-tight font-semibold text-foreground">
              Sign in to unlock the full tutorial with working examples and templates
            </h2>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className={`mt-0.5 rounded-full p-2 ${feature.bgColor}`}>
                  <feature.icon className={`h-4 w-4 ${feature.color}`} />
                </div>
                <div>
                  <p className="font-medium text-foreground">{feature.title}</p>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Sign In Card */}
        <div className="w-full rounded-lg border bg-card p-4">
          <div className="mb-3 flex items-center gap-2 border-b pb-2">
            <Download className="h-4 w-4 text-muted-foreground" />
            <h3 className="text-sm font-semibold text-foreground">Free Access</h3>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-foreground">
                Free Instant Access to Code Resources
              </h4>
              <p className="mb-4 text-sm text-muted-foreground">
                Continue reading to access the complete tutorial, including:
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/80">Full source code and examples</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/80">
                    Step-by-step implementation guide
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground/80">
                    Starter templates and configurations
                  </span>
                </div>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div className="space-y-3">
              <Button onClick={() => handleAuth("google")} className="w-full" size="sm">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </Button>
              <Button
                onClick={() => handleAuth("github")}
                className="w-full text-primary"
                variant="outline"
                size="sm"
              >
                <GithubIcon className="mr-2 h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>

            <div className="flex max-w-3xl flex-col items-center justify-between gap-4">
              <AvatarGroup>
                {caseStudies
                  .filter((study) =>
                    [
                      "northridgeaddiction",
                      "shepherd",
                      "shakethatweight",
                      "vision4kids",
                      "zenon",
                    ].includes(study.id),
                  )
                  .map((study) => (
                    <Link href={`/case-study/${study.id}`} key={study.id}>
                      <Avatar className="border-2 border-primary bg-background">
                        <Image
                          src={study.testimonial.image}
                          alt={`@${study.testimonial.author}`}
                          width={1080}
                          height={1080}
                          className="aspect-square size-full object-cover"
                        />

                        <AvatarFallback>{study.testimonial.author[0]}</AvatarFallback>
                      </Avatar>
                    </Link>
                  ))}
              </AvatarGroup>
              <p className="text-sm text-muted-foreground">3,000+ Signups</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FirebaseAuth;
