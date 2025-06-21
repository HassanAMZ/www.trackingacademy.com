// AuthContext.tsx
"use client";

import { sendGTMEvent } from "@next/third-parties/google";
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
} from "firebase/auth";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../firebase";

interface AuthContextType {
  user: User | null;
  googleSignIn: () => Promise<void>;
  githubSignIn: () => Promise<void>;
  facebookSignIn: () => Promise<void>;
  emailSignIn: (email: string, password: string) => Promise<void>;
  emailSignUp: (email: string, password: string) => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  const pushDataLayerEvent = (
    eventName: string,
    user: User | null,
    status: string,
    method: string,
  ) => {
    window.dataLayer = window.dataLayer || [];
    const userData = {
      id: user?.uid,
      phone: user?.providerData[0]?.phoneNumber ?? undefined,
      email: user?.email ?? undefined,
      address: {
        city: undefined,
        state: undefined,
        country: undefined,
        postal_code: undefined,
        first_name: user?.displayName
          ? user.displayName.split(" ")[0]
          : undefined,
        last_name: user?.displayName
          ? user.displayName.split(" ")[1]
          : undefined,
      },
    };
    sendGTMEvent({
      event: "gtm_custom_event",
      datalayer_event_name: eventName,
      authentication_status: status,
      authentication_method: method,
      user_data: userData,
    });
  };

  const googleSignIn = async (): Promise<void> => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      pushDataLayerEvent(
        "user_signup_success",
        result.user,
        "success",
        "google",
      );
    } catch (error) {
      console.error("Google SignIn error:", error);
      pushDataLayerEvent("user_signup_failed", null, "failure", "google");
      throw error;
    }
  };

  const githubSignIn = async (): Promise<void> => {
    try {
      const provider = new GithubAuthProvider();
      const result = await signInWithPopup(auth, provider);
      pushDataLayerEvent(
        "user_signup_success",
        result.user,
        "success",
        "github",
      );
    } catch (error) {
      console.error("GitHub SignIn error:", error);
      pushDataLayerEvent("user_signup_failed", null, "failure", "github");
      throw error;
    }
  };

  const facebookSignIn = async (): Promise<void> => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      pushDataLayerEvent(
        "user_signup_success",
        result.user,
        "success",
        "facebook",
      );
    } catch (error) {
      console.error("Facebook SignIn error:", error);
      pushDataLayerEvent("user_signup_failed", null, "failure", "facebook");
      throw error;
    }
  };

  const emailSignIn = async (
    email: string,
    password: string,
  ): Promise<void> => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      pushDataLayerEvent(
        "user_signup_success",
        result.user,
        "success",
        "email",
      );
    } catch (error) {
      console.error("Email SignIn error:", error);
      pushDataLayerEvent("user_signup_failed", null, "failure", "email");
      throw error;
    }
  };

  const emailSignUp = async (
    email: string,
    password: string,
  ): Promise<void> => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      pushDataLayerEvent(
        "user_signup_success",
        result.user,
        "success",
        "email",
      );
    } catch (error) {
      console.error("Email SignUp error:", error);
      pushDataLayerEvent("user_signup_failed", null, "failure", "email");
      throw error;
    }
  };

  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      pushDataLayerEvent("user_logout_success", null, "success", "all");
    } catch (error) {
      console.error("SignOut error:", error);
      pushDataLayerEvent("user_logout_failed", null, "failure", "all");
      throw error;
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        googleSignIn,
        githubSignIn,
        facebookSignIn,
        emailSignIn,
        emailSignUp,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
