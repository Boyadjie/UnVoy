'use client';

import {useEffect, useState} from 'react';

import {onAuthStateChanged, signOut} from 'firebase/auth';

import {auth} from '../../firebase';

export const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listener = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => listener();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setAuthUser(null);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  };

  return (
    <div>
      {authUser ? (
        <>
          <p>{`Signed in as ${authUser.email}`}</p>
          <button onClick={handleSignOut}>Sign out</button>
        </>
      ) : (
        <p>Disconected</p>
      )}
    </div>
  );
};
