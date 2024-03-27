'use client';
import React, {createContext, useState, useContext, useEffect} from 'react';

import {onAuthStateChanged, signOut} from 'firebase/auth';
import {useRouter, usePathname} from 'next/navigation';

import {auth as fireAuth} from '../firebase';

export type LoggedIn = true | false;

export const AuthContext = createContext({
  auth: false as LoggedIn,
  setAuth: (auth: LoggedIn) => {},
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [auth, setAuth] = useState<LoggedIn>(false);

  const [authUser, setAuthUser] = useState(fireAuth.currentUser);
  const pathname = usePathname();
  const router = useRouter();
  const publicRoutes = ['/register', '/login', '/forgotpassword', '/'];

  useEffect(() => {
    const listener = onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        setAuthUser(user);
        setAuth(true);
      } else {
        setAuthUser(null);
        setAuth(false);
      }
    });

    return () => listener();
  }, []);

  const handleSignOut = () => {
    signOut(fireAuth)
      .then(() => {
        setAuthUser(null);
        setAuth(false);
        router.push('/login', {scroll: false});
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  if (!authUser && pathname && !publicRoutes.includes(pathname)) {
    setTimeout(() => {
      router.push('/register', {scroll: false});
    }, 100);
  }

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
      {authUser ? <button onClick={handleSignOut}>Sign out</button> : null}
    </AuthContext.Provider>
  );
};
