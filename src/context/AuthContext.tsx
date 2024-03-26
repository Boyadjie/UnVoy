'use client';
import React, {createContext, useState, useContext, useEffect} from 'react';

import {onAuthStateChanged, signOut} from 'firebase/auth';

import {auth as fireAuth} from '../firebase';

export type LoggedIn = true | false;

export const AuthContext = createContext({
  auth: false as LoggedIn,
  setAuth: (auth: LoggedIn) => {},
});

const Redirect = () => {
  window.location.href = '/register';
  return <div>Redirecting...</div>;
};

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [auth, setAuth] = useState<LoggedIn>(false); // Specify the type as LoggedIn

  const [authUser, setAuthUser] = useState(fireAuth.currentUser);

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
        window.location.href = '/register';
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {authUser === null ? null : (
        <>
          {authUser && children}
          {authUser ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <Redirect />
          )}
        </>
      )}
    </AuthContext.Provider>
  );
};
