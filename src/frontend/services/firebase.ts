import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

let data = require('./env.json');

const firebaseConfig = {
  apiKey: data.fb.apikey,
  authDomain: data.fb.authdomain,
  projectId: data.fb.projectid,
  storageBucket: data.fb.storagebucket,
  messagingSenderId: data.fb.messagingsenderid,
  appId: data.fb.appid,
  measurementId: data.fb.measurementid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

console.log(firebaseConfig);

export { app, auth, db }