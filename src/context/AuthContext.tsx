'use client';
import React, {createContext, useState, useContext, useEffect} from 'react';

import {User} from 'firebase/auth';
import {onAuthStateChanged, signOut} from 'firebase/auth';
import {useRouter, usePathname} from 'next/navigation';

import {auth as fireAuth} from '../firebase';

export type LoggedIn = true | false;

type Dispatch<Action> = (value: Action) => void;

type SetStateAction<State> = State | ((prevState: State) => State);

export const AuthContext = createContext({
  auth: false as LoggedIn,
  setAuth: {} as Dispatch<SetStateAction<LoggedIn>>,
});

export const useAuth = () => useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [auth, setAuth] = useState<LoggedIn>(false);
  const [authUser, setAuthUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const listener = onAuthStateChanged(fireAuth, (user) => {
      if (user) {
        setAuthUser(user);
        setAuth(true);
      } else {
        setAuthUser(null);
        setAuth(false);
      }
      setLoading(false);
    });

    return () => listener();
  }, []);

  useEffect(() => {
    const publicRoutes = ['/register', '/login', '/forgotpassword', '/'];
    if (!loading && !authUser && pathname && !publicRoutes.includes(pathname)) {
      router.push('/register', {scroll: false});
    }
  }, [loading, authUser, pathname, router]);

  return (
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};
