import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getMessaging} from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDWUJUeTeCMe8m32k-s6ti28bvNmg8KJc0',
  authDomain: 'uncover-f2cb6.firebaseapp.com',
  projectId: 'uncover-f2cb6',
  storageBucket: 'uncover-f2cb6.appspot.com',
  messagingSenderId: '717203897212',
  appId: '1:717203897212:web:3946c205736a5ea635c2f9',
  measurementId: 'G-V88WWLF5C0',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

// Initialize Firebase Auth, Cloud Messaging, etc...
export const auth = getAuth(app);
export const messaging = getMessaging(app);
