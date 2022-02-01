import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const exec = require("child_process").exec;

const jsonString: string = exec("firebase functions:config:get");

let obj = JSON.parse(jsonString);

const firebaseConfig = {
  apiKey: obj.database.apikey,
  authDomain: obj.database.authdomain,
  projectId: obj.database.projectid,
  storageBucket: obj.database.storagebucket,
  messagingSenderId: obj.database.messagingsenderid,
  appId: obj.database.appid,
  measurementId: obj.database.measurementid
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

console.log(firebaseConfig);

export { app, auth, db }