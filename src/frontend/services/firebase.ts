import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfNizYuPtMyxyJZGfCWaPht3Ld9bjq-Mo",
  authDomain: "oututoringdatabaseqa.firebaseapp.com",
  projectId: "oututoringdatabaseqa",
  storageBucket: "oututoringdatabaseqa.appspot.com",
  messagingSenderId: "167188089927",
  appId: "1:167188089927:web:4e34cbe5d4920396743562",
  measurementId: "G-YXP0GBMMHZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { app, auth, db }