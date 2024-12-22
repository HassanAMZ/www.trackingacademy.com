'use client';

import { GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const pushDataLayerEvent = (eventName, user, status, method) => {
    window.dataLayer = window.dataLayer || [];

    const userData = {
      id: user?.uid || undefined,
      phone: user?.providerData[0]?.phoneNumber || undefined,
      email: user?.email || undefined,
      address: {
        city: undefined, // Assuming address info is not available
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
  const [user, setUser] = useState(null);

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        pushDataLayerEvent('user_signup_success', result.user, 'success', 'google');
      })
      .catch((error) => {
        console.error('SignIn error', error);
        pushDataLayerEvent('user_signup_failed', null, 'failure', 'google');
      });
  };

  const logOut = () => {
    signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, googleSignIn, logOut }}>{children}</AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
