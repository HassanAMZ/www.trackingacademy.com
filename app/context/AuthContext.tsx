// AuthContext.tsx
'use client';

import { GTMEvent } from '@/types/index';
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  User,
} from 'firebase/auth';
import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
// types.ts
export interface UserData {
  id?: string;
  phone?: string;
  email?: string;
  address: {
    city?: string;
    state?: string;
    country?: string;
    postal_code?: string;
    first_name?: string;
    last_name?: string;
  };
}

export interface DataLayerEvent {
  event: string;
  datalayer_event_name: string;
  authentication_status: string;
  authentication_method: string;
  user_data: UserData;
}

export interface AuthContextType {
  user: any | null;
  googleSignIn: () => Promise<void>;
  facebookSignIn: () => Promise<void>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthContextProviderProps {
  children: ReactNode;
}

declare global {
  interface Window {
    dataLayer: GTMEvent[];
  }
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

    const userData: UserData = {
      id: user?.uid,
      phone: user?.providerData[0]?.phoneNumber ?? undefined,
      email: user?.email ?? undefined,
      address: {
        city: undefined,
        state: undefined,
        country: undefined,
        postal_code: undefined,
        first_name: user?.displayName ? user.displayName.split(' ')[0] : undefined,
        last_name: user?.displayName ? user.displayName.split(' ')[1] : undefined,
      },
    };

    window.dataLayer.push({
      event: 'gtm_custom_event',
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
      pushDataLayerEvent('user_signup_success', result.user, 'success', 'google');
    } catch (error) {
      console.error('Google SignIn error:', error);
      pushDataLayerEvent('user_signup_failed', null, 'failure', 'google');
      throw error;
    }
  };

  const facebookSignIn = async (): Promise<void> => {
    try {
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);
      pushDataLayerEvent('user_signup_success', result.user, 'success', 'facebook');
    } catch (error) {
      console.error('Facebook SignIn error:', error);
      pushDataLayerEvent('user_signup_failed', null, 'failure', 'facebook');
      throw error;
    }
  };

  const logOut = async (): Promise<void> => {
    try {
      await signOut(auth);
      pushDataLayerEvent('user_logout_success', null, 'success', 'all');
    } catch (error) {
      console.error('SignOut error:', error);
      pushDataLayerEvent('user_logout_failed', null, 'failure', 'all');
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
    <AuthContext.Provider value={{ user, googleSignIn, facebookSignIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
