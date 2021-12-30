import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyA_YpeR-nCdjPFCbQREO3Bg9Dp4BIWUPpk",
  authDomain: "oututoringdatabase.firebaseapp.com",
  projectId: "oututoringdatabase",
  storageBucket: "oututoringdatabase.appspot.com",
  messagingSenderId: "763676444526",
  appId: "1:763676444526:web:b0eac5aa6892e9a2ac237f",
  measurementId: "G-CC2H30MC7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth }