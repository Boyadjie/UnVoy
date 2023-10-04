// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getMessaging} from 'firebase/messaging';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDWUJUeTeCMe8m32k-s6ti28bvNmg8KJc0',
  authDomain: 'uncover-f2cb6.firebaseapp.com',
  projectId: 'uncover-f2cb6',
  storageBucket: 'uncover-f2cb6.appspot.com',
  messagingSenderId: '717203897212',
  appId: '1:717203897212:web:3946c205736a5ea635c2f9',
  measurementId: 'G-V88WWLF5C0',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth, Cloud Messaging, etc...
const auth = getAuth(app);
const messaging = getMessaging(app);
